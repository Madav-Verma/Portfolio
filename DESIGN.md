---
color_ivory: "#F7F6F2"
color_ink: "#111111"
color_muted: "#6F6A61"
color_line: "#E3E0D7"
color_accent: "#1D4ED8"
font_display: "Manrope ExtraBold, uppercase, tight"
font_body: "Manrope Regular/Medium"
font_hand: "Caveat SemiBold"
font_quote: "Instrument Serif Italic"
radius_card: "10px"
radius_panel: "14px"
spacing_unit: "4px, scale 4-96"
---

# DESIGN.md — Daksh Verma portfolio (homepage)

## Overview

Premium editorial engineering portfolio for Daksh Verma, Applied AI
Solutions Engineer (Faridabad, India). Homepage only. The hero is ONE
full-bleed photographic composition with copy layered into it — never
two columns. Warm ivory canvas, near-black ink, one restrained cobalt
accent. Dense wide layout (1440 content width, full-bleed hero).

## Colors

- Ivory `#F7F6F2` — page canvas; hero fade target.
- Ink `#111111` — text, primary buttons, dark panel base.
- Muted `#6F6A61` — secondary text; hairlines `#E3E0D7`.
- Accent cobalt `#1D4ED8` — solid only, never gradient/glow. Budget:
  hero "AI", quote "scalable", nav underline, eyebrow dots, button hover.
- Card tints (flat, no gradients): cream `#FBF7EF`, blue `#EFF4FB`,
  green `#EFF7F0`, beige `#F7F3EA`, gray `#F1F2F4`.
- Service panel: `rgba(20,20,20,0.80)` + blur over the photo.

## Typography

- Display: Manrope 800, uppercase, -0.02em, 0.94 line-height,
  `clamp(46px, 4.4vw, 58px)` — sized so the two-line lockup holds inside
  the 640px copy block (measured override of the 76-96px draft figure).
  One H1 per page.
- Section H2: Manrope 800, sentence case, clamp(30px, 3.2vw, 44px).
- Body 16-19px/1.55, ink-soft. Nav 13.5px medium. Eyebrows 12px
  semibold uppercase 0.1em tracking with accent dot.
- Hand annotation: Caveat 600. Quote: Instrument Serif italic 21px.

## Layout

- Content `max-width: 1440px`, padding 32-48px desktop (20px mobile).
- Hero 660px desktop: copy max 640px from left edge; 232px service
  panel top-right with a thin 24px margin.
- Metrics band 82-95px, white, hairline dividers. Capabilities:
  heading/intro share a row, five cards across at 16px gaps. Projects:
  four columns, 16px gaps. Compact charcoal CTA, minimal footer.

## Elevation & Depth

- Almost flat. Cards use 1px hairline borders, no shadows (except the
  floating service panel: one soft black shadow + backdrop blur).
- Depth comes from the photograph and layering, not from UI shadows.

## Shapes

- Buttons 10px radius, 48px height. Cards 10px. Service panel 14px.
- Tags fully rounded pills. Metric avatars / arrows circular.

## Components

- Navbar: transparent over hero, ivory/90 + blur + hairline on scroll.
- HeroImage (priority LCP, `sizes=100vw`), HeroOverlay (CSS 90-degree
  ivory fade that clears by 80% width so the portrait stays in full
  color), HeroServices (dark panel, top-right), MetricsStrip, CapabilityCard,
  ProjectCard (screenshot 60-65%, overlap arrow), ClosingCTA, Footer.
- Motion: `Reveal` (24px rise, 0.7s, power3.out, once) + hero intro
  timeline + Lenis smooth scroll. All gated on reduced-motion.

## Do's and Don'ts

- DO layer text into the photograph; keep the fade invisible.
- DO keep accent placements to 3-5 above the fold.
- DON'T use gradients, glows, purple/cyan, glassmorphism, parallax,
  tilt, particles, emoji icons, or invented screenshots/stats.
- DON'T add sections beyond the seven approved ones.

## Motion identity

Calm, confident, editorial. Signature ease `power3.out`
(`cubic-bezier(0.215, 0.61, 0.355, 1)`); exit at 75% of entrance.
Bands: micro 250-300ms (arrow nudges 3-4px), base 650-700ms
(reveals, max 30px travel), hero stagger 80ms. One scroll reveal per
section max; service panel and annotation fade with the hero intro.

## Art direction

Warm documentary office photograph, natural light, real environment
(desk, laptop, plants). Left third kept bright and low-detail as
type space; portrait carries the right. Grade: warm ivory lift on the
left via CSS overlay only — the source file is never edited.
Anti-references: SaaS dashboard cards, neon AI aesthetics, generic
developer illustrations, centered symmetric template heroes.

## Asset slots

- `hero/portrait` (direct, client-supplied photo, ~2.2:1 crop via
  `object-position: 68% 40%`) — LOCKED ELEMENT: Daksh's likeness.
- `project/prokon-website` (direct: prokon-website-home.png, 16:10).
- `project/prokon-erp` (placeholder panel — no invented UI).
- `project/sjs-jewellery` (direct: sjs-jewellery.png, 16:10).
- `project/attendance` (direct: attendance.png, 16:10).

## Drift vs brand source

No brand source existed; nothing inherited, nothing drifted. The
51-section brief is the approved direction; comp round skipped
(Higgsfield MCP unreachable) — wireframe-level approval recorded,
not a rendered composition.

## Craft-floor overrides

- Uppercase display type above 6rem (brief mandates the editorial
  H1 "BUILDING USEFUL SOFTWARE WITH AI").
- Viewport-scale display clamps (52-88px) for the poster-like hero.

## About page addendum (/about)

- Same tokens, type ramp, Reveal idiom, Navbar and Footer as the
  homepage; own composition: compact editorial hero (not full-bleed),
  alternating ivory/white bands, one ink chapter (05), centred dark
  closing instead of the homepage split CTA.
- New primitives: SectionIntro (number-label + H2), data/about.ts.
  RAG and agentic flows are semantic HTML lists, never diagrams.
- Navbar change (shared, homepage-safe): `active` + `ctaHref` props
  and root-relative hrefs; homepage renders identically when `active`
  is unset ("Home"). Imagery: two distinct crops of the single hero
  photograph — 4:5 hero (`object-[74%_28%]`), 4:3 detail
  (`object-[30%_60%]`). No new fonts (Instrument Serif and Caveat
  were already loaded and unused), no new motion (Reveal only).

## Balance pass addendum (/about)

- Measured defect: hero rendered 19/81 right-heavy while nine later
  sections rendered 88–100% left (principles/stack/detail at 100/0).
- Fix: shared `SectionShell` 2-track spine — [640px body | 1fr aside]
  at xl, stacked below. (Numbered section labels were later removed
  outright per user request, so the rail track went with them.) Body
  and aside share identical x-origins in every section.
  Principles/stack/education rows re-use the same tracks.
- Numbered section labels removed entirely per user request. No new
  copy, colours, fonts or motion. Asides hold relocated existing copy only.

## Projects page addendum (/projects)

- Alternating case-study spine: 01 text-L / 02 visual-L / 03 text-L /
  04 visual-L at a 42/58 split (mirrored), mobile order inverts so the
  rhythm keeps alternating. Project 02 has no screenshot yet, so its
  visual is the big "10 staff" proof plus the eight documented modules —
  never a fabricated interface. Section eyebrows carry no numbers, per
  the label-removal decision. Filters are ALL / AI / BUSINESS SYSTEMS /
OFFLINE (every filter returns results). Page-local ProjectReveal
(fade+15px, image 0.98→1) so shared Reveal stays untouched.

## Experience page addendum (/experience)

- Same tokens, type ramp, Navbar and Footer as the rest of the site; own
  composition: compact typographic hero, centered career statement, vertical
  timeline, expanded primary role, ERP/RAG/agentic proof sections, progression
  matrix, documented metric strip, one dark ownership chapter, centered
  closing, editorial page navigation and dark contact closing.
- Visual rhythm moves across the page: hero text-L/snapshot-R; 01 narrow
  technical panel-L/text-R; 02 data panel-L/text-R; 03 text-L/screenshot-R;
  ERP panel-L/text-R; RAG text-L/architecture-R; agentic workflow-L/text-R;
  balanced dark ownership; centered closing and navigation.
- Section eyebrows carry no numbers, per the label-removal decision; timeline
  chapter numbers 01/02/03 remain as structural markers. Overlapping dates
  are preserved verbatim and framed as engineering layers, not a corrected
  chronology. No ERP or Power BI screenshots are fabricated; the primary role
  reuses the real Prokon website screenshot. Page-local ExperienceReveal
  (fade+15px, image 0.98→1) so shared Reveal stays untouched.

## Certifications page addendum (/certifications)

- Same tokens, type ramp, Navbar and Footer as the rest of the site; own
  composition: compact editorial hero (text-L / real-certificate collage-R,
  ~450-520px) with a Caveat "Still learning." annotation, alternating
  left/right visual weight down the page, one dark closing chapter.
- Data: data/certifications.ts is the single source (14 records transcribed
  verbatim from the published portfolio: title, org, year, credential URL).
  Categories are derived groupings from title/provider wording only;
  `description` stays null everywhere — never fabricated. Counts, stats,
  featured (most-recent 2026, visual only, never ranked) and filter/search
  all compute from the dataset.
- Certificates render whole (object-contain in a 4:3 document frame, neutral
  ground) because native ratios vary (900x635 to 900x695); 15.png is
  unmapped and excluded. Provider identity is typographic wordmarks — no
  generated logos. Credential links render only for the 6 real URLs.
- Archive is the only client island (CertificationGrid owns filter + search
  + modal state); modal traps focus, locks scroll, closes on ESC/outside.
  Page-local CertReveal (fade+15px) so shared Reveal stays untouched.
- Reachability: data/site.ts Certifications href "#" -> "/certifications";
  /skills page nav "coming soon" became a real link (one-line data change
  plus mirroring anchor in SkillsPageNavigation, no redesign).
