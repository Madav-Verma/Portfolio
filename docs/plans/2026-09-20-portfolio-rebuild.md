# Portfolio Rebuild — End-to-End Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use subagent-driven-development (recommended) or executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn this portfolio into a credible, fast, recruiter-converting proof-of-work site plus a matching ATS-clean résumé — so the work gets read, not the website's bugs.

**Architecture:** Keep the existing Vite + React 18 SPA and its "Engineering Drawing Sheet" design language (it is genuinely distinctive and passes accessibility checks). Fix the structural defects that make it *behave* broken, then re-aim the information architecture around the 60-second recruiter scan, then rebuild the résumé and the public proof layer (GitHub, links) to match.

**Tech Stack:** Vite 5, React 18, GSAP (installed, unused), @fontsource (Archivo Variable + Fragment Mono), Phosphor icons, Python (Pillow/PyMuPDF/python-docx) for asset + résumé generation.

**Branch:** `feat/portfolio-refactor-ats` (created today, 2026-09-20). **Local commits only — no push, no PR, no merge to `main`.**

---

## 0. What I verified (measured, not assumed)

Everything below is reproduced from the running app at `localhost:5177` with Playwright, or from the files on disk. Numbers are real measurements, not estimates.

| # | Finding | Evidence |
|---|---|---|
| 1 | **Page grows ~4,000px while scrolling** | `document.scrollHeight` = 13,248px at top → **17,218px** once scrolled. Section heights only resolve on approach. |
| 2 | **Mobile scrolls sideways 108px** | `document.scrollWidth` = **483px** at a 375px viewport. `.stamp--wip` reaches x=483. |
| 3 | **A published proof link is 404** | `https://github.com/Madav-Verma/DataFlow-Pro` → **HTTP 404** (`src/data.js:214`). |
| 4 | **Deep links and refresh don't work** | Cold load of `/#contact` → `scrollY: 0`, target 12,268px below the fold. |
| 5 | **Every below-fold section is sized at exactly 1,025px** until rendered | Cold-load probe: `targetHeight: 1025` for all 8 anchors. |
| 6 | **Live deploy is stale** | Live serves `assets/index-DSqCdI8A.js`; local build is `index-CCdEoW3C.js`. |
| 7 | **1 WCAG contrast failure** out of 526 elements | Footer colophon `© 2026 Daksh Verma · Faridabad, India` = **2.28:1** (needs 4.5:1). |
| 8 | **h1 accessible name is malformed** | `textContent` = `"Production software,shipped end to end."` — no space between lines. |
| 9 | **3 tap targets under 44px** | `.nav__brand` 30×30; `.link-draw` "See it in selected work" ×2 at 15px tall. |
| 10 | **Cert scans render upscaled** | `/certifications/01.webp` is 640×494 but renders at **673×524** → soft. |
| 11 | **Credentials dominates the page** | `#credentials` = **5,268px** mobile / 2,269px desktop of a 17,218px page. |
| 12 | **GitHub profile is a credibility gap** | bio/blog/company/location all empty, 0 followers, 9 public repos incl. `git_test`, `bhati-server-phase-2`, `Barcode-Badge-Scanner---Faridabad-`. |
| 13 | **`netlify.toml` is dead config** | Site is live on Vercel (canonical + all links point there) but the repo ships Netlify build/redirect/header config. |
| 14 | **Résumé and site data drift** | Site lists 14 certifications; résumé lists 12. Site has 6 projects; résumé presents 4. |

**Verified healthy (do not "fix" these):** résumé PDFs have real extractable text, **0 images**, standard uppercase section headings; DOCX has **0 tables, 0 text boxes, 0 drawings**, single column, real `Heading 1` styles → ATS-safe. Contrast passes 525/526. Work accordion works with correct `aria-expanded`. Focus-visible is `2px solid accent`, offset 3px. Both live project URLs return HTTP 200. `prefers-reduced-motion` is honoured. All fonts self-host. Cert images already `loading="lazy"`.

---

## 1. What's actually good — protect this

The instinct to "remap from scratch" would destroy real value. This portfolio does **not** have the usual AI-slop fingerprints:

- **No glowing gradients, no badge clouds, no stat-counter cards, no preloader, no custom cursor.** `DESIGN.md` explicitly documents the anti-reference this replaced.
- **A real, authored design language** — drafting-sheet grammar: graph-paper underlay, plate heads carrying real metadata, sharp-cornered controls, ruler graduations, provenance captions.
- **One accent colour, two themes, no pure black/white.** Tokens are disciplined in `src/styles/tokens.css`.
- **Layout families don't repeat** (asymmetric hero, ticker, index-table, matrix ledger, node loop, date rail, snap rail, ink plate) — this is the opposite of templated.
- **Accessibility is genuinely implemented**, not claimed: skip link, landmarks, `aria-pressed` filters, `aria-expanded` accordions, reduced-motion fallbacks, print stylesheet.
- **Real assets only** — no synthetic screenshots for the three projects that lack imagery; they're set typographically on purpose.

**Decision: keep the design language. Fix the engineering underneath it and re-aim the content.** A visual redesign is the *optional* Phase 6, not the opening move. If we redesign first, we will re-introduce the same structural bugs in new CSS and lose a month.

---

## 2. Root causes (why it *feels* broken)

Three bugs cause almost all of the perceived breakage. They are separate causes with one shared symptom.

### Cause A — `content-visibility: auto` with a guessed size

`src/styles/base.css:137-142`

```css
.section {
  padding-top: var(--section-gap);
  position: relative;
  content-visibility: auto;
  contain-intrinsic-size: auto 900px;   /* <-- the guess */
}
```

`content-visibility: auto` skips rendering off-screen sections and reports their height as the `contain-intrinsic-size` guess (900px + 126px padding = 1,026px). Real heights are much larger — `#credentials` is **5,268px**, `#process` 2,718px, `#journey` 2,355px. So the document **grows by 4,000px as it is scrolled**, which produces: a scrollbar thumb that keeps resizing, mid-page position jumps, a wrong print/PDF length, and anchors that resolve against a guessed layout.

### Cause B — `1fr` instead of `minmax(0, 1fr)` in the mobile override

`src/components/Now.css:50-53` sets `grid-template-columns: 1fr`, but the desktop rule at line 5 correctly uses `minmax(0, 1fr)`. `1fr` means `minmax(auto, 1fr)` — the track **cannot shrink below its content's min-content width**. The content is a `.stamp` with `white-space: nowrap` (`base.css:268`) reading "In development — hosting in progress" ≈ 349px, plus 48px card padding ⇒ a **399px** track inside a **335px** container. Result: 108px of horizontal page scroll on mobile, with cards and status stamps cut off at the screen edge.

### Cause C — the SPA has no anchor/existence guarantee at first paint

React mounts after the browser processes the URL hash, so `#contact` does not exist when the browser tries to scroll to it. Deep links and refresh land at the top of the page. This is independent of Cause A.

---

## 3. Phase plan

Order matters: correctness → content → proof → polish. Each phase is independently shippable and ends with a verification gate.

| Phase | Purpose | Output |
|---|---|---|
| **0** | Safety net | Branch confirmed, baseline captured, deploy truth established |
| **1** | Fix the foundation | No scroll growth, no mobile sideways scroll, working deep links, 0 contrast failures |
| **2** | Re-aim the content | IA rebuilt around a 60-second scan; credentials demoted |
| **3** | Résumé / ATS rebuild | One master résumé + one targeted variant, generated from a single source of truth |
| **4** | Public proof layer | GitHub profile, 404 fixed, every claim link verified live |
| **5** | Performance, SEO, AIEO | Accurate metadata, real perf budget, per-section JSON-LD |
| **6** | Optional: visual redesign | Only if Phase 1–5 don't feel strong enough |

---

## 4. Phase 0 — Safety net

### Task 0.1: Confirm the branch and freeze a baseline

- [ ] **Step 1: Confirm branch and clean tree**

```bash
cd "/Users/jai/Desktop/Portfolio Products/Portfolio"
git branch --show-current    # expect: feat/portfolio-refactor-ats
git status --short           # expect: clean (audit/*.png may be untracked — remove or ignore)
```

- [ ] **Step 2: Capture a before/after-able baseline**

```bash
npm run build
cp -r dist /tmp/dist-baseline-$(date +%s)
```

- [ ] **Step 3: Add `.playwright-mcp/` and `audit/` to `.gitignore`** — audit output must never be committed.

- [ ] **Step 4: Commit**

```bash
git add .gitignore
git commit -m "chore(audit): ignore local audit + playwright artifacts"
```

### Task 0.2: Establish deploy truth

**Decided: Vercel is authoritative.** The site is live on Vercel and every canonical URL agrees. `netlify.toml` is dead config describing a target that is not used.

- [ ] **Step 1: Delete `netlify.toml`**

```bash
git rm netlify.toml
```

- [ ] **Step 2: Confirm the Netlify-only settings are not needed on Vercel.**
  `netlify.toml` carried three things worth checking: the SPA fallback redirect (`/* → /index.html`), immutable cache headers for `/assets/*`, and baseline security headers. On Vercel the SPA rewrite needs a `vercel.json` and the headers need to be expressed there or in a rewrite config. **Verify a bad path renders `NotFound.jsx` rather than the host's 404 page** — if it does not, add the minimal `vercel.json`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }]
    },
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), geolocation=(), microphone=()" }
      ]
    }
  ]
}
```

- [ ] **Step 3: Verify no stale URL remains**

```bash
grep -rn "netlify" --include="*.html" --include="*.js" --include="*.json" --include="*.toml" --include="*.xml" --include="*.txt" . \
  | grep -v node_modules | grep -v "^./dist/"
```

Expected: no hits (the two *project* URLs on `*.netlify.app` are real live apps and are fine to keep).

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "chore(deploy): drop dead netlify config; Vercel is authoritative"
```

---

## 5. Phase 1 — Fix the foundation (the actual "broken")

### Task 1.1: Remove the size-guessing on sections

**Files:** Modify `src/styles/base.css:137-142`

- [ ] **Step 1: Reproduce the bug (proves the fix later)**

Run the app, then in the console:

```js
window.scrollTo(0,0); const a = document.documentElement.scrollHeight;
for (let y=0;y<a;y+=600){ window.scrollTo(0,y); await new Promise(r=>setTimeout(r,140)); }
document.documentElement.scrollHeight
```

Expected today: **grows by ~4,000px** (13,248 → ~17,218).

- [ ] **Step 2: Apply the fix**

```css
.section {
  padding-top: var(--section-gap);
  position: relative;
}
```

Delete both `content-visibility: auto;` and `contain-intrinsic-size: auto 900px;`.

- [ ] **Step 3: Re-run the Step 1 probe**

Expected: scroll height is **stable from the first measurement**. No growth while scrolling.

- [ ] **Step 4: Confirm the perf cost is acceptable**

Cert imagery is already `loading="lazy"` (`CertRail.jsx:40`) and `public/certifications` is only 276K. If `npm run build` output and a Lighthouse run show no regression, the removal is safe. Recover any lost time in Phase 2 by shortening the page, not by re-adding `content-visibility`.

- [ ] **Step 5: Commit**

```bash
git add src/styles/base.css
git commit -m "fix(layout): drop content-visibility size guessing — page no longer grows on scroll"
```

### Task 1.2: Fix the mobile horizontal scroll

**Files:** Modify `src/components/Now.css:50-58`, `src/styles/base.css:258-269`

- [ ] **Step 1: Reproduce**

At a 375px viewport: `document.documentElement.scrollWidth` → **483** (should be 375).

- [ ] **Step 2: Fix the grid track**

In `src/components/Now.css`, inside the `@media (max-width: 760px)` block:

```css
  .now__grid {
    grid-template-columns: minmax(0, 1fr);
  }
```

- [ ] **Step 3: Let the stamp wrap when it must**

The stamp is `white-space: nowrap`, so a long status label will still force overflow at ~320px viewports. In `src/styles/base.css`, extend the `.stamp` rule:

```css
.stamp {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 5px 10px 4px;
  border: 1px solid currentColor;
  font-family: var(--font-mono);
  font-size: var(--text-micro);
  letter-spacing: var(--track-mono);
  text-transform: uppercase;
  white-space: nowrap;
}

@media (max-width: 420px) {
  .stamp { white-space: normal; }
}
```

- [ ] **Step 4: Verify at three widths**

```js
// at 320, 375, and 390 px
document.documentElement.scrollWidth <= document.documentElement.clientWidth
```

Expected: `true` at all three. Also confirm the *other* long stamp (`Prokon Hi-Tech Website — In development`) no longer crosses the edge.

- [ ] **Step 5: Commit**

```bash
git add src/components/Now.css src/styles/base.css
git commit -m "fix(mobile): minmax(0,1fr) track + wrapping stamps — no horizontal scroll"
```

### Task 1.3: Make deep links and refresh work

**Files:** Modify `src/App.jsx` (add a small hook), Create `src/hooks/useHashScroll.js`

- [ ] **Step 1: Reproduce**

Load `http://localhost:5177/#contact` fresh. Expected today: you land at the top (`scrollY: 0`).

- [ ] **Step 2: Write the hook**

Create `src/hooks/useHashScroll.js`:

```js
import { useEffect } from "react";

/* The SPA mounts after the browser has already tried (and failed) to resolve
   the URL hash, so a deep link or a refresh lands at the top of the page.
   Re-run the scroll once the tree exists. */
export function useHashScroll() {
  useEffect(() => {
    const jump = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({ block: "start" });
    };
    // after layout settles (fonts + first paint)
    const raf = requestAnimationFrame(() => requestAnimationFrame(jump));
    window.addEventListener("hashchange", jump);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("hashchange", jump);
    };
  }, []);
}
```

- [ ] **Step 3: Call it once in `App.jsx`**

```jsx
import { useHashScroll } from "./hooks/useHashScroll.js";
// ...
export default function App() {
  useHashScroll();
  // ...existing tree unchanged
}
```

- [ ] **Step 4: Verify**

Load `/#contact`, `/#work`, `/#faq` fresh. Expected: each target is at the top of the viewport (≈76px, clearing the 64px fixed nav via the existing `scroll-margin-top`), with `scrollY > 0`.

- [ ] **Step 5: Commit**

```bash
git add src/hooks/useHashScroll.js src/App.jsx
git commit -m "fix(nav): resolve deep links and refresh on a cold SPA load"
```

### Task 1.4: Close the contrast and screen-reader defects

**Files:** Modify `src/components/Footer.css`, `src/components/Hero.jsx:68-77`

- [ ] **Step 1: Fix the footer colophon contrast**

Find the colophon rule in `src/components/Footer.css` (the `© 2026 Daksh Verma · Faridabad, India` line) and raise it from the current 2.28:1 to ≥4.5:1. On the fixed dark footer ground use a token of `--ink-2`-equivalent lightness rather than the current faint value, e.g.:

```css
.footer__colophon {
  color: rgb(236 235 228 / 72%); /* was ~40% — verify ≥4.5:1 against #191916 */
}
```

Verify numerically, do not eyeball it.

- [ ] **Step 2: Give the h1 a correct accessible name**

`Hero.jsx` renders two sibling spans; concatenated they read `"Production software,shipped end to end."`. Add an explicit label to the `h1`:

```jsx
<h1
  className="hero__title"
  ref={titleRef}
  aria-label="Production software, shipped end to end."
>
```

- [ ] **Step 3: Verify with the accessibility tree**

In Playwright, snapshot the `h1` and confirm the computed name contains the space. Also confirm the reduced-motion path still renders (the word-split `useEffect` returns early under `prefers-reduced-motion`).

- [ ] **Step 4: Commit**

```bash
git add src/components/Footer.css src/components/Hero.jsx
git commit -m "fix(a11y): footer colophon contrast to AA; correct h1 accessible name"
```

### Task 1.5: Fix the remaining tap targets

**Files:** Modify `src/components/Nav.css`, `src/components/Now.css` (or wherever `.link-draw` is defined)

- [ ] **Step 1: Enlarge the nav brand hit area to ≥44px**

The anchor is visually 30×30; keep the visual and grow the hit area:

```css
.nav__brand {
  display: inline-flex;
  align-items: center;
  gap: var(--s-2);
  min-height: 44px;
  padding-block: 4px;
}
```

- [ ] **Step 2: Give `.link-draw` a 44px hit area on touch**

```css
@media (pointer: coarse) {
  .link-draw { padding-block: 12px; }
}
```

- [ ] **Step 3: Verify** — no interactive element under 44px in either axis at 375px width.

- [ ] **Step 4: Commit**

```bash
git add src/components/Nav.css
git commit -m "fix(a11y): 44px minimum tap targets for brand and inline links"
```

### Phase 1 gate

- [ ] `npm run build` succeeds
- [ ] Scroll height stable; `scrollWidth == clientWidth` at 320/375/390/768/1440
- [ ] All 8 nav anchors land correctly from both a warm page and a cold load
- [ ] Contrast audit: 526/526 pass
- [ ] Playwright console: no errors or warnings
- [ ] A real browser pass at desktop + mobile, light + dark, with screenshots preserved as evidence

---

## 6. Phase 2 — Re-aim the content around a 60-second scan

Phase 1 makes the site *work*. Phase 2 makes it *convert*. The current page is **17,218px tall on desktop and 22,144px on mobile** — roughly 26 phone screens — while `PRODUCT.md` states the primary reader "scan[s] for proof of real shipped work in under a minute." Those two facts contradict each other.

### The core IA problem

`#credentials` is **5,268px on mobile** — the single largest block on the page — holding 14 certificate *scans*, most of them short online courses (Udemy, Coursera, Infosys Springboard). Meanwhile the two things that actually justify hiring — **two live production apps and an ERP running 10 staff daily** — are compressed into an accordion above it. A recruiter scrolling on a phone sees more course certificates than shipped product.

### Target order (proof decays slowly, credentials decay fast)

1. **Hero** — role, one-line claim, availability, 3 proof numbers, 2 CTAs. Target ≤900px on mobile (currently 1,600px).
2. **Selected work** — 5 projects, each with: one-line what-it-is, status, 2–3 outcome numbers, live link or repo. Keep the accordion for depth, but put the **strongest single screenshot and the outcome metric in the collapsed row** so the closed state already proves something.
3. **Live systems** — merge `#now` and the strongest part of `#systems` here. This is the differentiator; it should be high, not sixth.
4. **How I build** (process/agentic loop) — this is the "knows how to use AI" evidence. Keep 5 phases, keep the trace.
5. **Capabilities** — compress 8 domains to 5–6 real clusters; drop tool-name padding.
6. **Experience + education** (`#journey`).
7. **Notes** — keep 3 strongest, not 5.
8. **Credentials** — demote. Show **6 verifiable** cards; collapse the rest into a compact inline list ("+8 more, 2023–2025") or a `<details>`.
9. **FAQ** — keep; it feeds AIEO/GEO.
10. **Contact.**

### Tasks

### Task 2.1: Split and demote credentials

**Files:** Modify `src/components/CertRail.jsx`, `src/components/CertRail.css`, `src/data.js`

- [ ] **Step 1: Partition the data by verifiability.** `src/data.js` already carries `verify` on 6 of 14 certificates. Derive, don't hand-count:

```js
export const CERTS_VERIFIED = CERTIFICATIONS.filter((c) => Boolean(c.verify));
export const CERTS_OTHER = CERTIFICATIONS.filter((c) => !c.verify);
```

- [ ] **Step 2: Render the 6 verified as the salon wall**, and the other 8 as a single compact typographic list (`<ul role="list">`, title + org + year, no images). This cuts ~4,000px of mobile height and ~260K of images.
- [ ] **Step 3: Update the plate meta** to keep the honest framing that already exists: `{CERTS_VERIFIED.length} verifiable · {CERTIFICATIONS.length} total`.

- [ ] **Step 4: Fix the upscaling.** Cards must not exceed the 640px source width. Cap the salon column or regenerate 2x assets:

```python
# scripts/make-cert-2x.py — source-equivalent 1280px for the two "hero" plates
```

Prefer capping the render width in CSS; only generate 2x if the design needs the larger plates.

- [ ] **Step 5: Verify** — `#credentials` under 1,600px on mobile; no image renders wider than its intrinsic width; every verified card still a real, keyboard-reachable link.

- [ ] **Step 6: Commit**

```bash
git add src/components/CertRail.jsx src/components/CertRail.css src/data.js
git commit -m "refactor(credentials): lead with 6 verifiable certs, demote the rest to a list"
```

### Task 2.2: Compress the hero on mobile

**Files:** Modify `src/components/Hero.css`, `src/components/Hero.jsx`

- [ ] **Step 1: Measure** the mobile hero (currently 1,600px).
- [ ] **Step 2: On ≤760px, drop the portrait figure** and keep the single strongest catalogue screenshot. The portrait and the "Fig. A" caption are the weakest use of 500px of first-screen height; the work should be above the fold on a phone.
- [ ] **Step 3: Verify** hero ≤900px at 390px width, with the primary CTA and at least one proof number visible without scrolling.
- [ ] **Step 4: Commit**

```bash
git add src/components/Hero.css src/components/Hero.jsx
git commit -m "fix(hero): mobile hero under 900px, work above the fold"
```

### Task 2.3: Surface proof in the collapsed work rows

**Files:** Modify `src/components/Work.jsx`, `src/components/Work.css`

- [ ] **Step 1:** In the closed row, render the top metric (`p.metrics[0]` — e.g. "10 staff daily", "20+ unit tests") next to the status stamp, so the collapsed state already carries evidence.
- [ ] **Step 2:** Add the live/repo action to the collapsed row for projects that have one, so a recruiter can reach a live product without opening the accordion.
- [ ] **Step 3: Verify** — closed rows show a metric and (where available) a link; accordion behaviour and `aria-expanded` unchanged; keyboard order stays logical.
- [ ] **Step 4: Commit**

```bash
git add src/components/Work.jsx src/components/Work.css
git commit -m "feat(work): show metric + link in collapsed rows so the scan proves something"
```

### Task 2.4: Trim notes and capabilities

- [ ] **Step 1:** Cut `NOTES` from 5 to the 3 strongest (they are reusable—keep the text in a `notes-archive` only if the FAQ/notes need it). Update the plate meta to the derived count.
- [ ] **Step 2:** Merge `CAPABILITIES` from 8 domains to 5–6 real clusters. The current split ("Catalogue & Commerce Systems" vs "AI Assistants (RAG)" vs "Hosting & Deployment") reads as padding.
- [ ] **Step 3: Verify** every count in every `.plate-meta` is derived from the data, never typed. Audit for a hard-coded number.
- [ ] **Step 4: Commit**

```bash
git add src/data.js src/components/Notes.jsx src/components/Capabilities.jsx
git commit -m "refactor(ia): trim notes to 3, merge capability domains to 6"
```

### Phase 2 gate

- [ ] Desktop page under ~11,000px; mobile under ~14,000px
- [ ] Nothing verifiable was deleted — `CERTS_VERIFIED` still 6, all 6 links resolve
- [ ] Every `.plate-meta` count derivable from `src/data.js`
- [ ] A cold reader can name the two live products and one metric within 60 seconds

---

## 7. Phase 3 — Résumé / ATS rebuild

The résumé is in better shape than expected. Keep the mechanical wins (single page, real text, no tables/images, standard headings) and fix the content-level problems.

### Task 3.1: One source of truth for résumé data

**Files:** Modify `scripts/resume-content.json`, `scripts/build-resume.py`

- [ ] **Step 1:** Make `resume-content.json` the only place facts live, and add a build-time assertion that it agrees with `src/data.js` on: employer names, dates, project names, live URLs, degree/CGPA, and certification count. Drift is currently real (14 vs 12).

```python
# scripts/build-resume.py — fail loudly on drift
def assert_consistent(site, resume):
    live = {p["name"] for p in site["projects"] if p.get("live")}
    rlive = {p["name"] for p in resume["projects"] if "Live:" in p["meta"]}
    assert live == rlive, f"live project drift: {live ^ rlive}"
```

- [ ] **Step 2:** Add a `--check` mode used by `npm run build` so a stale résumé fails the build instead of shipping.
- [ ] **Step 3: Commit**

```bash
git add scripts/build-resume.py scripts/resume-content.json
git commit -m "build(resume): assert resume data matches src/data.js"
```

### Task 3.2: Break the certifications paragraph into scannable lines

- [ ] **Step 1:** Replace the single run-on paragraph with one line per year (2026 / 2025 / 2024 / 2023), each a comma-separated list. ATS keyword extraction improves and a human can scan it.
- [ ] **Step 2:** Include all certs the site claims, or state the selection rule on both sides. Keep the résumé honest: list the 6 verifiable ones with their issuer, then the rest.
- [ ] **Step 3:** Keep the layout single-column and text-only — do not add columns, tables, or graphics to gain space.
- [ ] **Step 4: Verify** by re-extracting the PDF text and diffing headings.

```bash
python3 -c "
import fitz; d=fitz.open('public/resume/Daksh_Verma_Resume_2026.pdf')
print('pages',d.page_count); print('images',len(d[0].get_images())); print(d[0].get_text()[:400])"
```

Expected: 1 page, 0 images, all sections present and selectable.

- [ ] **Step 5: Commit**

```bash
git add scripts/resume-content.json public/resume/
git commit -m "content(resume): scannable certification lines, single source of truth"
```

### Task 3.3: Add project dates and a targeted variant

- [ ] **Step 1:** Add a year to each résumé project (the site already has `year`).
- [ ] **Step 2:** Decide whether to keep two variants (AI vs Forward-Deployed). Two résumés double the drift risk; one master with a one-line repositioning is usually stronger. **This is an Open Decision.**
- [ ] **Step 3:** Shorten the LinkedIn URL if a custom slug exists; the numeric slug looks unpolished.
- [ ] **Step 4: Commit**

```bash
git add scripts/resume-content.json public/resume/
git commit -m "content(resume): project dates, cleaned profile links"
```

---

## 8. Phase 4 — Public proof layer (this is what actually gets you hired)

The site can be perfect and the application still fails, because a recruiter's next click is **GitHub**.

### Task 4.1: Fix the 404 proof link — do this first

**Files:** Modify `src/data.js:214`

- [ ] **Step 1:** `https://github.com/Madav-Verma/DataFlow-Pro` returns **404**. This is the *only* proof link on the DataFlow Pro project — the site's central claim is "proof over claims" and its one repo link is dead.
- [ ] **Step 2: Remove the link (decided).** In `src/data.js`, change the DataFlow Pro entry's `repo` to `null`:

```js
    link: null,
    repo: null,
```

`Work.jsx` already renders a typographic `.cover` plate when a project has no screenshot and no link, so this needs no new component — verify the cover plate appears and the dead "view repo" action is gone.

- [ ] **Step 3:** Add a link-check to the build so this cannot regress:

```bash
git add src/data.js
git commit -m "fix(links): remove 404 DataFlow repo link, use typographic cover"
```

Then create `scripts/check-links.mjs` in its own commit (Phase 5 territory) so a new dead link fails the build rather than shipping.

### Task 4.2: Make the GitHub profile look like an engineer's

Current state: bio, blog, company, location all empty; 0 followers; `git_test`, `bhati-server-phase-2`, `Barcode-Badge-Scanner---Faridabad-` public.

- [ ] **Step 1:** Write a profile README (`Madav-Verma/Madav-Verma`) — role, the two live products with links, the stack, contact. This is the single highest-leverage 20 minutes available.
- [ ] **Step 2:** Fill bio, location, blog (portfolio URL), and pin the 6 best repos: Portfolio, retail-jewellery-software, employee-attendance, DesiBox, DataFlow-Pro (once public), Prokon website if it can be public.
- [ ] **Step 3:** Archive or make private the noise repos. A recruiter scanning 9 repos should see 6 real products, not `git_test`.
- [ ] **Step 4:** Ensure each pinned repo has a description, a README with a screenshot, and setup steps. `DesiBox` currently has no description.
- [ ] **Step 5:** Push the portfolio repo (currently stale at 2026-09-12) — after the local work is done and the user approves.

### Task 4.3: Verify every published claim

- [ ] **Step 1:** Extract every URL from `src/data.js`, `index.html`, `public/llms.txt`, `public/sitemap.xml`, and both résumés, then check each returns 2xx. Record the result.
- [ ] **Step 2:** Audit each metric against the underlying reality. (One already failed verification historically — the "24 pages shipped" claim was corrected to "24 route files" in commit `98f0b9c`. Continue that discipline.)
- [ ] **Step 3:** Confirm the two live project URLs still work and are the *current* deployments, not a stale Netlify drop.

---

## 9. Phase 5 — Performance, SEO, AIEO

- [ ] **Task 5.1:** Confirm the canonical/OG/JSON-LD host matches the live Vercel domain after the Phase 0.2 cleanup. (The dead `netlify.toml` is removed there.)
- [ ] **Task 5.2:** Verify `sitemap.xml`, `robots.txt`, `llms.txt`, `llms-full.txt` are regenerated at build and match the trimmed content (the `prebuild` hook runs `generate-llms.js`; confirm it doesn't advertise sections that Phase 2 removed).
- [ ] **Task 5.3:** Run Lighthouse (mobile) and record real numbers. Budget: LCP < 2.0s, CLS < 0.05, INP < 200ms. The `content-visibility` removal plus lazy certs should keep this comfortably inside budget.
- [ ] **Task 5.4:** Re-verify the two things Phase 0.2 introduced on Vercel: that an unknown path renders `NotFound.jsx` (not the host 404), and that the `vercel.json` cache + security headers are actually served. Check with a real request, not by reading the config:

```bash
curl -sI https://portfolio-desibox.vercel.app/assets/index-CCdEoW3C.js | grep -i "cache-control\|x-frame-options"
curl -s -o /dev/null -w "%{http_code}\n" https://portfolio-desibox.vercel.app/this-path-does-not-exist
```

- [ ] **Task 5.5:** Verify the OG image renders correctly when the site is shared (the preview card is often the first thing a recruiter sees).

---

## 10. Phase 6 — Optional visual pass

Only attempt after Phases 1–5 ship. At that point the site is correct and content-led; if it still doesn't feel strong enough, do a *targeted* elevation of the hero and the work rows — not a redesign. Load `ui-ux-pro-max` + `impeccable` + `frontend-design-systems` + `soft-skill` for that work, and keep the token layer intact.

---

## 11. Verification ladder (run at every phase gate)

1. `npm run build` — must succeed
2. Headless geometry probes (scroll stability, `scrollWidth == clientWidth`, tap targets, contrast)
3. Playwright browser pass — desktop 1440 + mobile 375, light + dark, console clean
4. Real screenshots at both widths, both themes, kept as evidence
5. Résumé: PDF text extraction + page/image count
6. Link check: every published URL returns 2xx
7. Diff review before every commit

Stop at the first rung that fails and fix it there.

---

## 12. Decisions

### Locked (2026-09-20)

| # | Decision | Consequence |
|---|---|---|
| 1 | **Target role: Applied AI Solutions Engineer** | Hero, résumé summary, and work order lead with agentic orchestration + retrieval-grounded assistants + shipped AI products. The Forward-Deployed framing becomes *supporting* evidence, not a co-headline. |
| 2 | **Scope: fix + re-aim content** (no from-scratch redesign) | Phases 1–5. Phase 6 becomes optional and out of scope unless re-opened. The design language in `DESIGN.md` stays authoritative. |
| 3 | **Branch: stay on `feat/portfolio-refactor-ats`** | Local commits only. No push, no PR, no merge to `main`. |
| 4 | **Host: Vercel is authoritative** | Delete `netlify.toml` in Phase 0.2. Keep every canonical/OG/JSON-LD/résumé URL on the Vercel domain. |
| 5 | **DataFlow Pro: remove the repo link** | `src/data.js:214` → `repo: null`. Render the existing typographic `.cover` plate, matching the other image-less projects. The 404 disappears without needing the repo to be public. |

### Still open

6. **Résumé variants.** With the role now fixed to Applied AI Solutions Engineer, the `_Forward_Deployed` variant is a second artifact to keep in sync and no longer matches the headline positioning. Recommendation: **consolidate to one master résumé** and retire the Forward-Deployed variant (or keep it archived and unlinked). Confirm before Phase 3.3.
7. **Facts I must not invent** — needed to know how much proof the site can carry:
   - Prokon Hi-Tech website: is there a live URL yet, or does it stay "hosting in progress"?
   - Prokon ERP/CRM: is a screenshot or a public repo permitted? Ten staff run it daily, so a redacted screenshot would be the strongest single piece of evidence on the site.
   - Are there additional real screenshots for DataFlow Pro or Prokon Digital Workflows?
8. **LinkedIn slug.** Is a custom `linkedin.com/in/<name>` slug available to replace the numeric `daksh-verma-613774229`?

---

## 13. Anti-slop guardrails (binding for every phase)

- **No invented metrics, employers, customers, or dates.** If a number isn't in `src/data.js` or provably true, it doesn't ship.
- **No new decorative precision.** The drafting-sheet grammar works because every annotation is real metadata. Adding ornamental ticks/dimensions that mean nothing is the exact slop this design replaced.
- **No `content-visibility`, no `contain-intrinsic-size`, no `will-change` sprinkled for "performance."** Measure first.
- **Derive every count.** A typed number in copy is a future lie.
- **One accent colour, two themes, no pure black/white.**
- **`prefers-reduced-motion` must degrade, not vanish.** The current behaviour (gentler, not zero) is correct — preserve it.
- **Local commits only.** No push, no PR, no merge to `main`, no Vercel/Netlify writes.

---

## 14. Suggested execution order

```
Phase 0  (branch + deploy truth)          ~30 min
Phase 1  (structural fixes)              ~3-4 h   <-- biggest perceived win
Phase 4.1 (fix the 404)                  ~15 min  <-- cheapest credibility win, do early
Phase 3  (resume rebuild)                ~2-3 h
Phase 2  (IA + content re-aim)           ~4-6 h
Phase 4.2/4.3 (GitHub + link audit)      ~1-2 h
Phase 5  (perf/SEO/AIEO)                 ~1-2 h
Phase 6  (optional visual pass)          ~4-8 h
```

Phase 4.1 is pulled forward deliberately: it is 15 minutes and it currently sends a recruiter to a 404.

**Verification:** every phase gate in §11 is run and its real output quoted back before the phase is called done — no phase is marked complete on the strength of "it should work".

