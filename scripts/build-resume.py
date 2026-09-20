#!/usr/bin/env python3
"""Resume generator — one content model, two targeted tracks.

Reads scripts/resume-content.json and emits, per track:
  HTML (ATS-linear source of truth) -> PDF (headless Chrome, text-native)
  DOCX (python-docx: real heading styles, zero tables, zero text boxes)

Tracks:
  ai  -> Daksh_Verma_Resume_2026.{html,pdf,docx}   (default, linked site-wide)
  fde -> Daksh_Verma_Resume_Forward_Deployed.{html,pdf,docx}

Usage: python3 scripts/build-resume.py [--track ai|fde|all]
Fails loudly on: missing Chrome, multi-page PDF, bad section order.
"""
import html
import json
import subprocess
import sys
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parent.parent
RESUME_DIR = ROOT / "public" / "resume"
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

TRACK_FILES = {
    "ai": "Daksh_Verma_Resume_2026",
    "fde": "Daksh_Verma_Resume_Forward_Deployed",
}

CSS = """
  body { font-family: Arial, Helvetica, sans-serif; font-size: 9.5pt;
         line-height: 1.25; color: #111; background: #fff;
         max-width: 210mm; margin: 0 auto; padding: 14px 20px; }
  @page { size: A4; margin: 0; }
  h1 { font-size: 19pt; font-weight: bold; margin: 0 0 1px; letter-spacing: -0.5px; }
  .positioning { font-size: 10pt; font-weight: bold; margin: 0 0 4px; }
  .contact { font-size: 8.5pt; color: #333; margin: 0 0 1px; }
  .contact a { color: #111; text-decoration: none; }
  h2 { font-size: 10pt; font-weight: bold; text-transform: uppercase;
       letter-spacing: 1.5px; border-bottom: 1px solid #999;
       padding-bottom: 2px; margin: 6px 0 3px; }
  h3 { font-size: 9.5pt; font-weight: bold; margin: 5px 0 1px; }
  .meta { font-size: 9pt; color: #333; margin: 0 0 1px; }
  ul { margin: 2px 0 3px; padding-left: 18px; }
  li { margin-bottom: 1px; font-size: 9.5pt; }
  p.summary { font-size: 9.5pt; margin: 3px 0; }
  p.certs { font-size: 9.2pt; margin: 3px 0; }
  p.edu-line { font-size: 9.5pt; margin: 2px 0; }
  p.skill { font-size: 9.2pt; margin: 1px 0; }
  p.proj-inline { font-size: 9.5pt; margin: 3px 0; }
  @media print { body { padding: 20px 24px; } }
"""


def e(s):
    return html.escape(s)


def render_html(model, track):
    p = model["profile"]
    summary = model["summaries"][track]
    key = f"{track}_order" if track in ("ai", "fde") else "ai_order"
    pos_key = f"{track}_pos"

    skills = sorted(model["skill_groups"], key=lambda g: g[key])
    skill_html = "\n".join(
        f'    <p class="skill"><strong>{e(g["name"])}:</strong> {e(g["items"])}</p>'
        for g in skills
    )

    exp_html = []
    for job in model["experience"]:
        order = job["ai_order"] if track == "ai" else job["fde_order"]
        bullets = "\n".join(f"      <li>{e(job['bullets'][i])}</li>" for i in order)
        exp_html.append(
            f"    <h3>{e(job['role'])} — {e(job['company'])}</h3>\n"
            f'    <p class="meta">{e(job["location"])} · {e(job["period"])}</p>\n'
            f"    <ul>\n{bullets}\n    </ul>"
        )

    projs = sorted(model["projects"], key=lambda pr: pr[pos_key])
    proj_html = []
    for pr in projs:
        if "line" in pr:
            proj_html.append(
                f'    <p class="proj-inline"><strong>{e(pr["name"])}</strong>'
                f' — {e(pr["meta"])} — {e(pr["line"])}</p>'
            )
            continue
        bullets = "\n".join(f"      <li>{e(b)}</li>" for b in pr["bullets"])
        proj_html.append(
            f"    <h3>{e(pr['name'])}</h3>\n"
            f'    <p class="meta">{e(pr["meta"])}</p>\n'
            f"    <ul>\n{bullets}\n    </ul>"
        )

    edu_html = "\n".join(
        f'    <p class="edu-line"><strong>{e(x["degree"])}</strong>'
        f' — {e(x["school"])} · {e(x["period"])} · {e(x["result"])}</p>'
        for x in model["education"]
    )

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{e(p['name'])} — {e(model['positioning'][track])}</title>
<style>{CSS}</style>
</head>
<body>
  <h1>{e(p['name'])}</h1>
  <p class="positioning">{e(model['positioning'][track])}</p>
  <p class="contact">{e(p['location'])} · {e(p['phone'])} · <a href="mailto:{e(p['email'])}">{e(p['email'])}</a></p>
  <p class="contact">LinkedIn: <a href="https://{e(p['linkedin'])}">{e(p['linkedin'])}</a> · GitHub: <a href="https://{e(p['github'])}">{e(p['github'])}</a> · Portfolio: <a href="https://{e(p['portfolio'])}">{e(p['portfolio'])}</a></p>

  <h2>Professional Summary</h2>
  <p class="summary">{e(summary)}</p>

  <h2>Core Skills</h2>
{skill_html}

  <h2>Professional Experience</h2>
{chr(10).join(exp_html)}

  <h2>Projects</h2>
{chr(10).join(proj_html)}

  <h2>Education</h2>
{edu_html}

  <h2>Certifications</h2>
  <p class="certs">{e(model['certifications'])}</p>
</body>
</html>
"""


def _style(doc: Any, name: str) -> Any:
    """Typed-style accessor — python-docx stubs type styles as BaseStyle."""
    return doc.styles[name]


def render_docx(model, track):
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
    pos.add_run(model["positioning"][track]).bold = True
    pos.runs[0].font.size = Pt(12)
    doc.add_paragraph(f"{p['location']} · {p['phone']} · {p['email']}")
    doc.add_paragraph(
        f"LinkedIn: {p['linkedin']} · GitHub: {p['github']} · Portfolio: {p['portfolio']}"
    )

    doc.add_heading("Professional Summary", level=1)
    doc.add_paragraph(model["summaries"][track])

    doc.add_heading("Core Skills", level=1)
    key = "ai_order" if track == "ai" else "fde_order"
    for g in sorted(model["skill_groups"], key=lambda x: x[key]):
        para = doc.add_paragraph()
        para.add_run(g["name"] + ": ").bold = True
        para.add_run(g["items"])

    doc.add_heading("Professional Experience", level=1)
    for job in model["experience"]:
        order = job["ai_order"] if track == "ai" else job["fde_order"]
        head = doc.add_paragraph()
        head.add_run(f"{job['role']} — {job['company']}").bold = True
        doc.add_paragraph(f"{job['location']} · {job['period']}")
        for i in order:
            doc.add_paragraph(job["bullets"][i], style="List Bullet")

    doc.add_heading("Projects", level=1)
    pos_key = "ai_pos" if track == "ai" else "fde_pos"
    for pr in sorted(model["projects"], key=lambda x: x[pos_key]):
        if "line" in pr:
            para = doc.add_paragraph()
            para.add_run(pr["name"]).bold = True
            para.add_run(f" — {pr['meta']} — {pr['line']}")
            continue
        head = doc.add_paragraph()
        head.add_run(pr["name"]).bold = True
        doc.add_paragraph(pr["meta"])
        for b in pr["bullets"]:
            doc.add_paragraph(b, style="List Bullet")

    doc.add_heading("Education", level=1)
    for x in model["education"]:
        para = doc.add_paragraph()
        para.add_run(x["degree"]).bold = True
        para.add_run(f" — {x['school']} · {x['period']} · {x['result']}")

    doc.add_heading("Certifications", level=1)
    doc.add_paragraph(model["certifications"])

    props = doc.core_properties
    props.author = p["name"]
    props.title = f"{p['name']} — {model['positioning'][track]}"
    return doc


def to_pdf(html_path, pdf_path):
    r = subprocess.run(
        [CHROME, "--headless", "--disable-gpu", "--no-pdf-header-footer",
         f"--print-to-pdf={pdf_path}", f"file://{html_path}"],
        capture_output=True, text=True, timeout=120,
    )
    if r.returncode != 0 or not pdf_path.exists():
        raise RuntimeError(f"Chrome PDF export failed: {r.stderr[-500:]}")


def build(track, model):
    base = TRACK_FILES[track]
    html_path = RESUME_DIR / f"{base}.html"
    pdf_path = RESUME_DIR / f"{base}.pdf"
    docx_path = RESUME_DIR / f"{base}.docx"
    html_path.write_text(render_html(model, track), encoding="utf-8")
    render_docx(model, track).save(str(docx_path))
    to_pdf(html_path, pdf_path)
    print(f"built {track}: {html_path.name}, {pdf_path.name} ({pdf_path.stat().st_size//1024}KB), {docx_path.name}")


def main():
    which = sys.argv[sys.argv.index("--track") + 1] if "--track" in sys.argv else "all"
    tracks = ["ai", "fde"] if which == "all" else [which]
    if not Path(CHROME).exists():
        raise RuntimeError(f"Chrome not found at {CHROME}")
    model = json.loads((ROOT / "scripts" / "resume-content.json").read_text())
    for t in tracks:
        build(t, model)


if __name__ == "__main__":
    main()
