# Design System — "Engineering Drawing Sheet"

Recorded from the built world (not intentions). Direction contract seed `fca87317`, experience mode.
User-pinned direction: engineering-drawing grammar for an AI-native engineer's portfolio, recruiter-first.

## World

A portfolio read as a set of drafting sheets on paper: ink lines, a faint graph-paper construction
grid under everything, title blocks carrying real metadata, status stamps, ruler graduations,
provenance captions on every artifact. Controls are sharp-cornered and physically depress.
The close is a fixed dark ink plate in both themes.

## Color

Restrained strategy: neutrals + one accent (drafting cobalt).

| Token | Light ("paper") | Dark ("drafting film") |
|---|---|---|
| --paper | #f6f5f1 | #161613 |
| --paper-raised | #fbfaf7 | #1d1d19 |
| --paper-sunk | #efeee8 | #101010 |
| --ink | #1a1a17 | #eceae2 |
| --ink-2 | #54534b (7.0:1) | #aeac9f (7.4:1) |
| --ink-3 | #6b695e (≥4.5:1) | #7c7a6f |
| --accent | #1f3ac2 (8+:1) | #96a8ff |
| --live | #1b7f4b | #4cc38a |

Rules: one accent page-wide; green (`--live`) only on status flags; footer is theme-stable
ink (#191916 light / #0d0d0b dark) with fixed foreground #ecebe4. No pure black/white anywhere.

## Type

- **Archivo Variable** (self-hosted, @fontsource-variable) — display + UI. Display tracking −0.035em,
  weight 620–660, line-height 0.98–1.12. Hero clamp(2.6rem → 4.6rem), hard 2-line cap at desktop
  via controlled break. Emphasis inside display = accent ink of the same family (no serif mixing).
- **Fragment Mono** (self-hosted) — annotations: title-block meta, stamps, sheet IDs, traces,
  provenance captions. 11px/0.6875rem uppercase tracked 0.14em is the smallest voice.
- Body 17px / 1.62, measure ≤66ch.

## Layout grammar

- `.sheet` container max 1440px, gutter clamp(20px→72px); graph grid (36px minor / 144px major)
  sits as a fixed body::before layer under content.
- Every section opens with a `.plate-head`: 2px top rule, h2 left, real metadata right
  (counts, years, revision). No eyebrows/kickers anywhere; no decorative section numbers
  (process steps carry genuine sequence).
- Layout families, one each: asymmetric split hero · ticker strip · index-table with expandable
  case studies · 3-col matrix ledger · 5-node horizontal loop · date-rail ledger · unequal note
  columns · snap rail · ink closing plate.
- Depth = paper layers: offset+blur shadows tinted to ground hue, never pure black halos.

## Components

- **Buttons** `.btn` / `.btn--ghost`: radius 0, 48px min height; press travels translateY(1px) +
  inset shadow (CD-ROM control-travel raise). Hover fills accent (primary) or ink (ghost).
- **Stamps** `.stamp--live|shipped|wip` with pulsing `.live-dot` (2.4s, reduced-motion off).
- **Title blocks / rulers / covers**: `.plate-head`, `.ruler` tick strips, `.cover` typographic
  plates for projects without imagery — designed plates, never fake screenshots.
- **Work rows**: full-row `<button aria-expanded>`; panels animate `grid-template-rows 0fr→1fr`
  440ms var(--ease-drawer) (accordion height exception); inner content fades 320ms delayed.
- **Cursor preview plate**: fixed, lerped transform via rAF writing style directly (no React state);
  gated to `(hover:hover) and (pointer:fine)` + no reduced motion; hidden while a panel is open.
- **Cert wall**: salon-grid plates with pinned-sheet tilt, hover straighten + lift + shimmer, verify links where they exist.
- **Footer**: giant mailto as the heading (aria-label="Contact" on landmark), mono link columns,
  colophon base bar (year · location · availability status).
- **Hero proof strip + availability line**: factual `dl` under the hero CTAs — live-app count
  derived from `PROJECTS`, certification count from `CERTIFICATIONS`, tests/hours mirrored from
  project metrics (never hard-coded). Fragment Mono values with tabular numerals, hairline
  dividers, 2px ink top rule. Availability caption line (location · IST · status) follows with a
  16px accent tick. Both join the `data-load` cascade at --d 7/8; reduced-motion resolves to the
  standard fade.

## Motion

Tokens: `--ease-out cubic-bezier(.23,1,.32,1)`, `--ease-inout (.77,0,.175,1)`,
`--ease-drawer (.32,.72,0,1)`; 140ms press / 220ms UI / 440ms drawer / 640ms reveal.
Reveal engine: IntersectionObserver flips `[data-reveal]→[data-revealed]`, stagger via
`calc(var(--d)*70ms)`; Ticker: single marquee, linear, pauses on hover. All transform/opacity
except sanctioned accordion rows. Reduced motion: reveals collapse to 160ms opacity fades,
load-in to simple fade, marquee/pulse disabled — gentler, not zero.

### X-Factor — "Plotter Assembly" intro (the one authored moment)
First load only, hero-scoped, non-blocking (content stays interactive immediately). Choreography:
1. `hero-sweep` — a 2px cobalt head sweeps down the viewport (720ms, ease-in-out) like a plotter.
2. `grid-in` — graph-paper underlay fades up (700ms ease-out).
3. `stamp-in` — live-status stamp thumps onto the sheet, scale 0.92→1.035→1 (340ms).
4. `line-rise` — two headline lines rise through baseline clip masks, translateY(115%)→0,
   staggered 240/360ms, 640ms ease-out.
5. `data-load` cascade — subline, CTAs, figure plate fade-up at 400/480/560ms.
6. `dim-h` / `dim-v` — after fonts settle (~1.25s), real measured dimension lines draw beside the
   headline and photo plate (scaleX/Y 0→1, 480ms) with mono PX labels, arrow ticks fade in.
Hard rule honored: NO cursor-following preview plate (removed); motion is the world drawing itself,
not a tracking gimmick. Voice tier softened (no "AI crew"): headline "Production software, shipped
end to end.", status "Open to new roles" — factual project/role language retained as evidence.

### Second peak — "The loop draws itself" (wow pass, 2026-09-12)
One language, two moves — the trace draws, the wall hangs:
1. Process trace — section scroll progress (rAF, one style write, zero deps) draws the accent
   hairline over the base rule and travels a square plotter head diamond through 01→05
   (vertical on mobile). No-JS renders the original hairline; reduced motion hides both.
2. Credential pinned wall — the 14 plates hang salon-style (12-col grid, two wide
   heroes, slight pinned-sheet tilt). Hover straightens, lifts, and sweeps candlelight
   once; pure CSS, so touch, small screens, reduced motion, print and no-JS resolve
   to the calm static wall. Every verifiable card stays a real link, Tab-reachable.
Wall note (replaces GSAP justification): the vault scrub pin was retired for the pinned
wall — same 14 plates, zero scroll trap, pure CSS. `gsap` stays in package.json unused;
remove on the next dep pass.

### Reveal families (same tokens, same 70ms stagger clock)
Plate heads wipe in (clip-path draw), work/FAQ rows slide from the margin (-14px X),
note cards resolve from construction blur (4px). Reduced motion and the reveal safety
override collapse all three to plain fades.

### Micro-delight + paper
Footer copy-email button stamps a "Copied" confirmation (copy-pop, clipboard fallback
to mailto, aria-live). Print stylesheet (`styles/print.css`): light ground, expanded
case studies, resolved reveals, no chrome — the sheet survives the recruiter's printer.

## Browser surfaces (themed)

Selection (accent/paper swap, inverted inside footer), scrollbar-color, focus-visible 2px outline
offset 3px (lavender inside footer), underline-offset 4px on hover underlines, monospaced numerals
via Fragment Mono in metrics/traces.

## Accessibility

WCAG AA both themes (values above); skip link; landmarks + labeled regions; filters use
aria-pressed; case studies aria-expanded/controls; mobile overlay manages visibility + tabIndex;
44px+ targets; images carry alt text; dual theme via prefers-color-scheme.

## Asset provenance

- `/photo.jpg` — supplied portrait, 320×320 (display ≤380px plate).
- `/screenshots/*.png` — supplied production captures, 900×562 (SJS, Attendance).
- `/certifications/*.webp` — supplied certificate scans, 640×494 ×14.
- Projects without screenshots render typographic covers deliberately; no synthetic imagery shipped.

## Anti-reference (what this replaced)

Dark terminal aesthetic, glowing gradients, badge-cloud skills, stat-counter hero cards,
preloader, custom cursor — removed. The old look is evidence of subject matter only.
