#!/usr/bin/env python3
"""Resume generator — one content model, one master résumé.

Reads scripts/resume-content.json and emits Daksh_Verma_Resume_2026 in three
formats:
  HTML (ATS-linear source of truth) -> PDF (headless Chrome, text-native)
  DOCX (python-docx: real heading styles, zero tables, zero text boxes)

Drift protection: before any build, the résumé model is asserted against the
site's source of truth (src/data.js, evaluated as real ESM via node) on:
  (a) live project names, (b) employer names, (c) the set of certification
      titles, (d) education degree/CGPA. Any drift aborts with a non-zero exit.

Usage:
  python3 scripts/build-resume.py       (build HTML + PDF + DOCX)
  python3 scripts/build-resume.py --check (assertions only)

Fails loudly on: missing Chrome, data drift vs src/data.js, missing node,
multi-page PDF, embedded images, missing/out-of-order section headings.
"""
import html
import json
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parent.parent
RESUME_DIR = ROOT / "public" / "resume"
DATA_JS = ROOT / "src" / "data.js"
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

MASTER = "Daksh_Verma_Resume_2026"

CSS = """
  body { font-family: Arial, Helvetica, sans-serif; font-size: 9.5pt;
         line-height: 1.18; color: #111; background: #fff;
         max-width: 210mm; margin: 0 auto; padding: 10px 18px; }
  @page { size: A4; margin: 0; }
  h1 { font-size: 19pt; font-weight: bold; margin: 0 0 1px; letter-spacing: -0.5px; }
  .positioning { font-size: 10pt; font-weight: bold; margin: 0 0 4px; }
  .contact { font-size: 8.5pt; color: #333; margin: 0 0 1px; }
  .contact a { color: #111; text-decoration: none; }
  h2 { font-size: 10pt; font-weight: bold; text-transform: uppercase;
       letter-spacing: 1.5px; border-bottom: 1px solid #999;
       padding-bottom: 2px; margin: 5px 0 3px; }
  h3 { font-size: 9.5pt; font-weight: bold; margin: 4px 0 1px; }
  .meta { font-size: 8.7pt; color: #333; margin: 0 0 1px; }
  ul { margin: 2px 0 2px; padding-left: 18px; }
  li { margin-bottom: 0.5px; font-size: 9.3pt; }
  p.summary { font-size: 9.4pt; margin: 3px 0; }
  p.certs { font-size: 8.7pt; margin: 2px 0; }
  p.edu-line { font-size: 9.3pt; margin: 2px 0; }
  p.skill { font-size: 8.9pt; margin: 1px 0; }
  p.proj-inline { font-size: 9.3pt; margin: 3px 0; }
  @media print { body { padding: 16px 20px; } }
"""


def e(s):
    return html.escape(s)


def render_html(model):
    p = model["profile"]

    skills = sorted(model["skill_groups"], key=lambda g: g["order"])
    skill_html = "\n".join(
        f'    <p class="skill"><strong>{e(g["name"])}:</strong> {e(g["items"])}</p>'
        for g in skills
    )

    exp_html = []
    for job in model["experience"]:
        bullets = "\n".join(f"      <li>{e(job['bullets'][i])}</li>" for i in job["order"])
        exp_html.append(
            f"    <h3>{e(job['role'])} — {e(job['company'])}</h3>\n"
            f'    <p class="meta">{e(job["location"])} · {e(job["period"])}</p>\n'
            f"    <ul>\n{bullets}\n    </ul>"
        )

    projs = sorted(model["projects"], key=lambda pr: pr["pos"])
    proj_html = []
    for pr in projs:
        if "line" in pr:
            proj_html.append(
                f'    <p class="proj-inline"><strong>{e(pr["name"])} ({e(pr["year"])})</strong>'
                f' — {e(pr["meta"])} — {e(pr["line"])}</p>'
            )
            continue
        bullets = "\n".join(f"      <li>{e(b)}</li>" for b in pr["bullets"])
        proj_html.append(
            f"    <h3>{e(pr['name'])} ({e(pr['year'])})</h3>\n"
            f'    <p class="meta">{e(pr["meta"])}</p>\n'
            f"    <ul>\n{bullets}\n    </ul>"
        )

    edu_html = "\n".join(
        f'    <p class="edu-line"><strong>{e(x["degree"])}</strong>'
        f' — {e(x["school"])} · {e(x["period"])} · {e(x["result"])}</p>'
        for x in model["education"]
    )

    certs_html = "\n".join(
        "    <p class=\"certs\"><strong>%s:</strong> %s</p>"
        % (e(g["year"]), e(", ".join(f"{i['title']} ({i['issuer']})" for i in g["items"])))
        for g in model["certifications"]
    )

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{e(p['name'])} — {e(model['positioning'])}</title>
<style>{CSS}</style>
</head>
<body>
  <h1>{e(p['name'])}</h1>
  <p class="positioning">{e(model['positioning'])}</p>
  <p class="contact">{e(p['location'])} · {e(p['phone'])} · <a href="mailto:{e(p['email'])}">{e(p['email'])}</a></p>
  <p class="contact">LinkedIn: <a href="https://{e(p['linkedin'])}">{e(p['linkedin'])}</a> · GitHub: <a href="https://{e(p['github'])}">{e(p['github'])}</a> · Portfolio: <a href="https://{e(p['portfolio'])}">{e(p['portfolio'])}</a></p>

  <h2>Professional Summary</h2>
  <p class="summary">{e(model['summary'])}</p>

  <h2>Core Skills</h2>
{skill_html}

  <h2>Professional Experience</h2>
{chr(10).join(exp_html)}

  <h2>Projects</h2>
{chr(10).join(proj_html)}

  <h2>Education</h2>
{edu_html}

  <h2>Certifications</h2>
{certs_html}
</body>
</html>
"""


def _style(doc: Any, name: str) -> Any:
    """Typed-style accessor — python-docx stubs type styles as BaseStyle."""
    return doc.styles[name]


def render_docx(model):
    from docx import Document
    from docx.shared import Mm, Pt

    doc = Document()
    sec = doc.sections[0]
    sec.page_width, sec.page_height = Mm(210), Mm(297)
    sec.top_margin = sec.bottom_margin = Mm(14)
    sec.left_margin = sec.right_margin = Mm(15)

    normal = _style(doc, "Normal")
    normal.font.name = "Arial"
    normal.font.size = Pt(10)
    normal.paragraph_format.space_after = Pt(2)
    normal.paragraph_format.space_before = Pt(0)
    title = _style(doc, "Title")
    title.font.name = "Arial"
    title.font.size = Pt(26)
    title.font.bold = True
    title.paragraph_format.space_after = Pt(2)
    h1 = _style(doc, "Heading 1")
    h1.font.name = "Arial"
    h1.font.size = Pt(11)
    h1.font.bold = True
    h1.paragraph_format.space_before = Pt(8)
    h1.paragraph_format.space_after = Pt(3)

    p = model["profile"]
    doc.add_heading(p["name"], level=0)
    pos = doc.add_paragraph()
    pos.add_run(model["positioning"]).bold = True
    pos.runs[0].font.size = Pt(12)
    doc.add_paragraph(f"{p['location']} · {p['phone']} · {p['email']}")
    doc.add_paragraph(
        f"LinkedIn: {p['linkedin']} · GitHub: {p['github']} · Portfolio: {p['portfolio']}"
    )

    doc.add_heading("Professional Summary", level=1)
    doc.add_paragraph(model["summary"])

    doc.add_heading("Core Skills", level=1)
    for g in sorted(model["skill_groups"], key=lambda x: x["order"]):
        para = doc.add_paragraph()
        para.add_run(g["name"] + ": ").bold = True
        para.add_run(g["items"])

    doc.add_heading("Professional Experience", level=1)
    for job in model["experience"]:
        head = doc.add_paragraph()
        head.add_run(f"{job['role']} — {job['company']}").bold = True
        doc.add_paragraph(f"{job['location']} · {job['period']}")
        for i in job["order"]:
            doc.add_paragraph(job["bullets"][i], style="List Bullet")

    doc.add_heading("Projects", level=1)
    for pr in sorted(model["projects"], key=lambda x: x["pos"]):
        if "line" in pr:
            para = doc.add_paragraph()
            para.add_run(f"{pr['name']} ({pr['year']})").bold = True
            para.add_run(f" — {pr['meta']} — {pr['line']}")
            continue
        head = doc.add_paragraph()
        head.add_run(f"{pr['name']} ({pr['year']})").bold = True
        doc.add_paragraph(pr["meta"])
        for b in pr["bullets"]:
            doc.add_paragraph(b, style="List Bullet")

    doc.add_heading("Education", level=1)
    for x in model["education"]:
        para = doc.add_paragraph()
        para.add_run(x["degree"]).bold = True
        para.add_run(f" — {x['school']} · {x['period']} · {x['result']}")

    doc.add_heading("Certifications", level=1)
    for g in model["certifications"]:
        doc.add_paragraph(f"{g['year']}: " + ", ".join(f"{i['title']} ({i['issuer']})" for i in g["items"]))

    props = doc.core_properties
    props.author = p["name"]
    props.title = f"{p['name']} — {model['positioning']}"
    return doc


def to_pdf(html_path, pdf_path):
    """Headless Chrome print-to-pdf.

    Chrome on macOS sometimes never exits after writing the PDF (and refuses
    its default unique profile dir when a Chrome instance holds the lock), so
    we give it a throwaway --user-data-dir and treat a written PDF file as
    success, killing the process if it lingers past the timeout.
    """
    profile = tempfile.mkdtemp(prefix="dsh-resume-")
    try:
        try:
            r = subprocess.run(
                [CHROME, "--headless", "--disable-gpu", "--no-pdf-header-footer",
                 "--no-sandbox", "--disable-crash-reporter", "--no-first-run",
                 "--disable-background-networking", "--disable-component-update",
                 f"--user-data-dir={profile}",
                 f"--print-to-pdf={pdf_path}", f"file://{html_path}"],
                capture_output=True, text=True, timeout=120,
            )
        except subprocess.TimeoutExpired:
            # Chrome typically already wrote the PDF; verify below.
            r = None
        if r is not None and r.returncode != 0 and not pdf_path.exists():
            raise RuntimeError(f"Chrome PDF export failed: {r.stderr[-500:]}")
        if not pdf_path.exists() or pdf_path.stat().st_size == 0:
            raise RuntimeError("Chrome PDF export failed: no PDF file produced")
    finally:
        shutil.rmtree(profile, ignore_errors=True)


def build(model):
    base = MASTER
    html_path = RESUME_DIR / f"{base}.html"
    pdf_path = RESUME_DIR / f"{base}.pdf"
    docx_path = RESUME_DIR / f"{base}.docx"
    html_path.write_text(render_html(model), encoding="utf-8")
    render_docx(model).save(str(docx_path))
    to_pdf(html_path, pdf_path)
    assert_pdf_ats(pdf_path)
    print(f"built {base}: {html_path.name}, {pdf_path.name} ({pdf_path.stat().st_size//1024}KB), {docx_path.name}")


def load_data_js(root: Path) -> dict:
    """Evaluate src/data.js as real ESM via node and return its four arrays.

    Parsing JavaScript with regex would break on any formatting change; an
    actual import is the only drift-proof way to read the site's source of
    truth. node is part of the repo's toolchain (Vite build), so it is a
    fair dependency for the build-time check.
    """
    script = f"""
import('{DATA_JS.as_uri()}').then(m => {{
  process.stdout.write(JSON.stringify({{
    certifications: m.CERTIFICATIONS,
    projects: m.PROJECTS,
    experience: m.EXPERIENCE,
    education: m.EDUCATION,
  }}))
}})
"""
    r = subprocess.run(
        ["node", "--input-type=module", "-e", script],
        capture_output=True, text=True, timeout=60,
    )
    if r.returncode != 0:
        raise RuntimeError(f"Could not evaluate src/data.js with node: {r.stderr[-400:]}")
    return json.loads(r.stdout)


def _norm(s: str) -> str:
    """Lowercase, keep only alphanumerics — for text-level comparisons."""
    return " ".join(re.findall(r"[a-z0-9]+", s.lower()))


def _numbers(s: str) -> set:
    """Numeric values in a string, e.g. 'CGPA 9.0' -> {'9.0'}, '93%' -> {'93'}."""
    return set(re.findall(r"\d+(?:\.\d+)?", s))


def check_drift(model: dict, root: Path) -> tuple[list[str], list[str]]:
    """Assert the résumé model against src/data.js. Returns (problems, notes).

    problems are loud drift failures (non-zero exit upstream); notes are
    informational deltas (e.g. project counts) that must not block a build.
    """
    problems: list[str] = []
    notes: list[str] = []
    d = load_data_js(root)

    site_projs = {p["title"]: p for p in d["projects"]}
    live_titles = {p["title"] for p in d["projects"] if p.get("status") == "live"}
    resume_projs = {p["name"] for p in model["projects"]}

    # (a) live project names: nothing invented in the résumé, and every live
    #     site project is carried by the résumé (its summary claims the live count).
    for pr in model["projects"]:
        site = site_projs.get(pr["name"])
        if site is None:
            problems.append(f'résumé project "{pr["name"]}" is not in src/data.js PROJECTS')
            continue
        year = pr.get("year")
        if year is None:
            problems.append(f'résumé project "{pr["name"]}" has no year (src/data.js: {site.get("year")})')
        elif year != site["year"]:
            problems.append(f'résumé project "{pr["name"]}" year {year} != src/data.js year {site["year"]}')
    missing_live = live_titles - resume_projs
    if missing_live:
        problems.append(
            "src/data.js projects with status 'live' missing from the résumé: "
            + ", ".join(sorted(missing_live))
        )
    if len(resume_projs) != len(site_projs):
        notes.append(
            f"project count: résumé {len(resume_projs)} vs site {len(site_projs)}"
            + f" (site-only, not carried by résumé: {sorted(set(site_projs) - resume_projs)})"
        )

    # (b) employer names: every résumé employer must exist in the site's EXPERIENCE.
    site_employers = {x["company"] for x in d["experience"]}
    resume_employers = {x["company"] for x in model["experience"]}
    unknown_employers = resume_employers - site_employers
    if unknown_employers:
        problems.append(
            "résumé employers not in src/data.js EXPERIENCE: " + ", ".join(sorted(unknown_employers))
        )

    # (c) certification titles: set equality between résumé and site.
    site_cert_titles = {x["title"] for x in d["certifications"]}
    resume_cert_titles = {i["title"] for g in model["certifications"] for i in g["items"]}
    if resume_cert_titles != site_cert_titles:
        problems.append(
            "certification title sets differ — résumé-only: "
            + repr(sorted(resume_cert_titles - site_cert_titles))
            + "; site-only: " + repr(sorted(site_cert_titles - resume_cert_titles))
        )

    # (d) education degree/CGPA: each résumé degree must exist in the site's
    #     EDUCATION (normalized text), and its numeric result must match.
    site_edu = {_norm(x["degree"]): x for x in d["education"]}
    for x in model["education"]:
        key = _norm(x["degree"])
        site = site_edu.get(key)
        if site is None:
            problems.append(f'résumé education degree "{x["degree"]}" not in src/data.js EDUCATION')
            continue
        rn, sn = _numbers(x["result"]), _numbers(site.get("highlight", ""))
        if rn != sn:
            problems.append(
                f'résumé result "{x["result"]}" ({sorted(rn)}) != src/data.js '
                f'"{site.get("highlight")}" ({sorted(sn)})'
            )

    return problems, notes


def assert_pdf_ats(pdf_path: Path) -> None:
    """The PDF must stay 1 page, zero embedded images, six standard headings."""
    import fitz
    d = fitz.open(str(pdf_path))
    fails = []
    if d.page_count != 1:
        fails.append(f"{pdf_path.name}: {d.page_count} pages, expected 1")
    page = d[0]
    images = page.get_images()
    if images:
        fails.append(f"{pdf_path.name}: {len(images)} embedded images, expected 0")
    text = page.get_text()
    order = ["PROFESSIONAL SUMMARY", "CORE SKILLS", "PROFESSIONAL EXPERIENCE",
             "PROJECTS", "EDUCATION", "CERTIFICATIONS"]
    last = -1
    for h in order:
        idx = text.find(h)
        if idx < 0:
            fails.append(f"{pdf_path.name}: missing heading {h}")
        elif idx < last:
            fails.append(f"{pdf_path.name}: heading {h} out of order")
        else:
            last = idx
    if fails:
        raise RuntimeError("PDF ATS check failed: " + "; ".join(fails))


def main():
    if "--check" in sys.argv:
        model = json.loads((ROOT / "scripts" / "resume-content.json").read_text())
        problems, notes = check_drift(model, ROOT)
        for note in notes:
            print(f"note: {note}")
        if problems:
            for p in problems:
                print("DRIFT: " + p, file=sys.stderr)
            sys.exit(1)
        print("OK: résumé model consistent with src/data.js")
        return

    if not Path(CHROME).exists():
        raise RuntimeError(f"Chrome not found at {CHROME}")
    model = json.loads((ROOT / "scripts" / "resume-content.json").read_text())
    problems, notes = check_drift(model, ROOT)
    for note in notes:
        print(f"note: {note}")
    if problems:
        for p in problems:
            print("DRIFT: " + p, file=sys.stderr)
        sys.exit(1)
    build(model)


if __name__ == "__main__":
    main()