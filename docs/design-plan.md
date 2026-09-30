# Design plan — Daksh Verma portfolio homepage

## 0. Design read

Reading this as: a personal engineering portfolio for hiring managers
and collaborators, with a warm editorial-documentary language, leaning
toward an asymmetric photographic system, not a template grid.

## 1. Tokens

Ivory `#F7F6F2` (dominant) / Ink `#111111` / Cobalt `#1D4ED8`
(accent, 3-5 placements above fold). Display Manrope 800 uppercase;
body Manrope; hand Caveat; quote Instrument Serif italic. 4px unit,
4-96 scale. Full token table: DESIGN.md frontmatter.

## 2. Motion identity

Adjectives: calm, confident, precise. Signature `power3.out`; exit at
75% of entrance; hero stagger 80ms; reveals 24px / 0.7s / once;
micro-interactions 250-300ms with 3-4px arrow travel. Lenis smooth
scroll synced to GSAP ticker. Everything gated on
`prefers-reduced-motion`.

## 3. Verbal identity

POV: first-person builder ("I design and ship…"). Short declarative
headline, em-dash cadence in body copy. Signature turn: "useful
software" (headline) / "real problems" (projects). Banned: "passionate
ninja", "cutting-edge", "leverage", purple-AI vocabulary.

## 4. Calibration dials

- DESIGN_VARIANCE 7 — asymmetric photo-led hero, straight grids below.
- MOTION_INTENSITY 4 — entrances + hover only; no scrub, pin, or tilt.
- VISUAL_DENSITY 8 — full-width 1440 canvas, 16px card gaps.

## 5. Art direction

Warm documentary photograph as the page foundation; CSS-only ivory
fade (90deg + vertical grade); type sits inside the image. Never:
gradients, glow, glass, parallax, particles, emoji, invented proof.

## 6. Wireframe

```
[FIXED NAV: DV name | 7 links | Let's Connect]      <- over hero
[HERO 660px: eyebrow/H1/desc/buttons/contact | ~Daksh~ quote+panel]
[METRICS: 2+ 10+ 50+ 3+ 100% | avatar note]
[WHAT I DO: H2 + intro row | 5 cards]
[PROJECTS: H2 + view-all | 4 cards]
[CTA band: H2 + button + email]
[FOOTER: identity | links | (c)]
```

## 7. Signature moment

The hero itself: a full-bleed portrait photograph that the interface
is printed into — annotation, quote and service panel composed as
photographic marginalia. No second device competes with it.

## 8. Drift vs brand source

None — no brand source existed. Brief is the approved direction.

## 9. Asset slots

See DESIGN.md. All media direct (client-supplied) except the ERP
placeholder. No generation spend; Higgsfield unreachable.

## Comps

Skipped (no Higgsfield, no comp authorization round). Approval is on
the wireframe + brief, not a rendered composition.

## About page addendum (/about)

Reading this as: an engineering profile for hiring managers and
collaborators, with a quiet editorial-documentary language, leaning
toward ruled typographic bands rather than cards.
Rhythm: ivory (01 hero) → white (02) → ivory (03) → white (04) →
ink (05 "Software That Gets Used") → ivory (06) → white (agentic) →
ivory (07) → white (08) → ivory (stack) → white (09) → ivory
(personal detail) → dark centred closing → footer.
Signature moment: the dark chapter's giant 10+/8 numerals with module
names set as quiet labels. Verbal identity inherits the homepage
(first-person builder, "useful software" / "real problems" turns).
No new typefaces, no new motion budget. Comps skipped, same as home.

## Balance pass addendum

Pixel-measured ink audit found the hero at 19/81 (photo mass right)
against nine later sections at 88–100% left — the page lurched.
Resolution: a single `SectionShell` spine ([640 | 1fr] at xl) after
numbered section labels were removed outright per user request,
asides filled only with relocated existing copy, and the hero
rebalanced via a wider text column plus a facts-only meta line.

## Projects page addendum

Balance is enforced at the layout level (column geometry + dominant-side
alternation), not by ink mass — pixel counts follow screenshot busyness,
so they are reported but never the acceptance criterion. Hero 49/51,
snapshot 50/50; chapters verified by DOM x-ranges, never same-side twice
in a row. ERP screenshot and SJS billing capture still owed by the user;
both slots degrade honestly until supplied.
