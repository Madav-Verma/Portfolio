#!/usr/bin/env python3
"""Phase-gate UI verification for the portfolio.

Every check here corresponds to a defect that was measured on this codebase.
Run it against a dev server (or `vite preview`) and read the PASS/FAIL lines.

    python3 scripts/verify-ui.py [base_url]

Exit code is non-zero if any gate fails, so it can be wired into CI later.
"""

import sys
from playwright.sync_api import sync_playwright

BASE = sys.argv[1] if len(sys.argv) > 1 else "http://localhost:5178"
WIDTHS = [320, 375, 390, 768, 1440]
ANCHORS = ["work", "now", "systems", "capabilities", "process", "journey",
           "notes", "faq", "credentials", "contact"]

results = []


def check(name, ok, detail=""):
    results.append((name, bool(ok), detail))
    print(f"{'PASS' if ok else 'FAIL'}  {name}" + (f"   [{detail}]" if detail else ""))


# ---- JS snippets reused across pages -------------------------------------

SCROLL_STABILITY = """
async () => {
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  window.scrollTo(0, 0); await sleep(300);
  const heights = [];
  const max = document.documentElement.scrollHeight;
  for (let y = 0; y <= max; y += 600) {
    window.scrollTo(0, y); await sleep(120);
    heights.push(document.documentElement.scrollHeight);
  }
  return { min: Math.min(...heights), max: Math.max(...heights),
           top: heights[0], bottom: heights[heights.length - 1] };
}
"""

OVERFLOW = """
(vw) => {
  const de = document.documentElement;
  const past = [];
  document.querySelectorAll('*').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) return;
    if (el.closest('.ticker')) return;              // marquee, intentionally wide
    if (getComputedStyle(el).position === 'fixed') return;
    if (r.right > vw + 1.5 || r.left < -1.5) {
      let p = el.parentElement, clipped = false;
      while (p) {
        const ps = getComputedStyle(p);
        if (ps.overflowX === 'hidden' || ps.overflowX === 'clip') { clipped = true; break; }
        p = p.parentElement;
      }
      if (!clipped) past.push({
        tag: el.tagName.toLowerCase(),
        cls: (el.className || '').toString().slice(0, 40),
        over: Math.round(r.right - vw),
      });
    }
  });
  return { scrollWidth: de.scrollWidth, clientWidth: de.clientWidth, offenders: past.slice(0, 8) };
}
"""

CONTRAST = """
() => {
  const lum = rgb => {
    const [r,g,b] = rgb.map(v => { v/=255; return v <= 0.03928 ? v/12.92 : Math.pow((v+0.055)/1.055, 2.4); });
    return 0.2126*r + 0.7152*g + 0.0722*b;
  };
  const parse = s => { const m = s.match(/rgba?\\(([^)]+)\\)/); if (!m) return null;
    const p = m[1].split(',').map(parseFloat); return { rgb:[p[0],p[1],p[2]], a: p.length>3?p[3]:1 }; };
  const bgOf = el => { let p = el;
    while (p) { const c = parse(getComputedStyle(p).backgroundColor); if (c && c.a > 0.5) return c.rgb; p = p.parentElement; }
    return [246,245,241]; };
  const ratio = (a,b) => { const l1=lum(a), l2=lum(b), hi=Math.max(l1,l2), lo=Math.min(l1,l2);
    return (hi+0.05)/(lo+0.05); };

  const fails = [];
  document.querySelectorAll('p,li,span,a,dt,dd,h1,h2,h3,h4,button,figcaption').forEach(el => {
    if (!el.textContent.trim()) return;
    if (el.children.length && el.tagName !== 'BUTTON' && el.tagName !== 'A') return;
    const cs = getComputedStyle(el);
    if (cs.visibility === 'hidden' || cs.display === 'none') return;
    const fg = parse(cs.color); if (!fg || fg.a < 0.5) return;
    const r = ratio(fg.rgb, bgOf(el));
    const fs = parseFloat(cs.fontSize), bold = parseInt(cs.fontWeight) >= 700;
    const need = (fs >= 24 || (fs >= 18.66 && bold)) ? 3 : 4.5;
    if (r < need) fails.push({ cls:(el.className||'').toString().slice(0,36),
      fs: Math.round(fs), txt: el.textContent.trim().slice(0,32), ratio: +r.toFixed(2), need });
  });
  return { failCount: fails.length, worst: fails.sort((a,b)=>a.ratio-b.ratio).slice(0,6) };
}
"""

TAP_TARGETS = """
() => {
  const small = [];
  document.querySelectorAll('a,button,[role="button"],summary,input,select,textarea').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.width === 0) return;
    const s = getComputedStyle(el);
    if (s.visibility === 'hidden' || s.display === 'none') return;
    if (r.height < 44 || r.width < 44) small.push({
      cls: (el.className||'').toString().slice(0,38), txt: el.textContent.trim().slice(0,24),
      w: Math.round(r.width), h: Math.round(r.height) });
  });
  return { count: small.length, items: small.slice(0, 10) };
}
"""

# An anchor target is correct when it sits just below the fixed nav (76px),
# OR when the page is already scrolled to the very bottom — the final section
# cannot reach y=76 if it is shorter than the viewport.
ANCHOR_POS = """
(id) => {
  const el = document.getElementById(id);
  const de = document.documentElement;
  if (!el) return null;
  return {
    top: Math.round(el.getBoundingClientRect().top),
    scrollY: Math.round(window.scrollY),
    atBottom: Math.abs(window.scrollY - (de.scrollHeight - window.innerHeight)) <= 2,
  };
}
"""


def anchor_is_correct(pos):
    if pos is None:
        return False, "missing target"
    if abs(pos["top"] - 76) <= 4:
        return True, "76px"
    if pos["atBottom"]:
        return True, f"at document bottom (top={pos['top']})"
    return False, f"top={pos['top']} scrollY={pos['scrollY']}"


def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)

        # ---------- 1. Desktop: scroll stability + contrast + console ----------
        page = browser.new_page(viewport={"width": 1440, "height": 900})
        console = []
        page.on("console", lambda m: console.append((m.type, m.text)) if m.type in ("error", "warning") else None)
        page.on("pageerror", lambda e: console.append(("pageerror", str(e))))
        page.goto(BASE, wait_until="networkidle")
        page.wait_for_timeout(600)

        st = page.evaluate(SCROLL_STABILITY)
        grew = st["max"] - st["min"]
        check("desktop: page height stable while scrolling",
              grew <= 4, f"min={st['min']} max={st['max']} growth={grew}px")

        c = page.evaluate(CONTRAST)
        check("desktop: WCAG AA contrast (all text)",
              c["failCount"] == 0, f"{c['failCount']} failures {c['worst']}")

        check("desktop: console clean", len(console) == 0, f"{console[:3]}")

        # ---------- 2. h1 accessible name ----------
        h1_label = page.eval_on_selector("h1", "el => el.getAttribute('aria-label')")
        h1_text = page.eval_on_selector("h1", "el => el.textContent")
        check("h1 has an explicit accessible name with correct spacing",
              h1_label == "Production software, shipped end to end.",
              f"aria-label={h1_label!r} textContent={h1_text!r}")

        # ---------- 3. Anchors from a WARM page ----------
        page.evaluate("() => { document.documentElement.style.scrollBehavior = 'auto'; }")
        warm_fail = []
        for a in ANCHORS:
            page.evaluate("() => window.scrollTo(0, 0)")
            page.wait_for_timeout(150)
            page.evaluate(f"() => {{ location.hash = '#{a}'; }}")
            page.wait_for_timeout(500)
            ok, why = anchor_is_correct(page.evaluate(ANCHOR_POS, a))
            if not ok:
                warm_fail.append(f"{a} ({why})")
        check("nav anchors land correctly (warm page)", not warm_fail, f"off: {warm_fail}")

        # ---------- 4. Deep links on a COLD load ----------
        cold_fail = []
        for a in ["work", "faq", "contact"]:
            pg = browser.new_page(viewport={"width": 1440, "height": 900})
            pg.goto(f"{BASE}/?cold={a}#{a}", wait_until="networkidle")
            pg.wait_for_timeout(1200)
            pos = pg.evaluate(ANCHOR_POS, a)
            ok, why = anchor_is_correct(pos)
            # a cold deep link must also have actually scrolled the page
            if not (ok and (pos or {}).get("scrollY", 0) > 0):
                cold_fail.append(f"{a} ({why}, scrollY={(pos or {}).get('scrollY')})")
            pg.close()
        check("deep link + refresh resolve on a cold load", not cold_fail, f"failed: {cold_fail}")

        page.close()

        # ---------- 5. No horizontal scroll at any width ----------
        # has_touch so that `@media (pointer: coarse)` rules are exercised.
        for w in WIDTHS:
            pg = browser.new_page(viewport={"width": w, "height": 844},
                                  has_touch=True, is_mobile=(w <= 480))
            pg.goto(BASE, wait_until="networkidle")
            pg.wait_for_timeout(700)
            o = pg.evaluate(OVERFLOW, w)
            ok = o["scrollWidth"] <= o["clientWidth"]
            check(f"{w}px: no horizontal page scroll", ok,
                  f"scrollWidth={o['scrollWidth']} clientWidth={o['clientWidth']} {o['offenders']}")
            if w == 375:
                t = pg.evaluate(TAP_TARGETS)
                check("375px (touch): all tap targets >= 44px", t["count"] == 0,
                      f"{t['count']} under-size {t['items']}")
            pg.close()

        browser.close()

    failed = [r for r in results if not r[1]]
    print("\n" + "=" * 62)
    print(f"{len(results) - len(failed)}/{len(results)} checks passed")
    if failed:
        print("\nFAILED:")
        for n, _, d in failed:
            print(f"  - {n}  [{d}]")
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
