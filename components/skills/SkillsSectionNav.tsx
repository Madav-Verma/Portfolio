import { domainsIntro, referenceSections } from "@/data/skills";

/** One chip. 44px min height so the row stays tappable on a phone. */
const chipClass =
  "inline-flex min-h-11 items-center gap-2 rounded-btn border border-line px-4 text-[13px] font-semibold text-ink-soft transition-colors duration-200 hover:border-ink/40 hover:text-ink";

/**
 * One loop half: the six domains, a hairline divider, the two reference
 * links. Rendered twice inside the marquee track so the -50% loop is
 * seamless — each half ends in pr-2, so the track midpoint lands exactly on
 * a half boundary. The copy is inert (aria-hidden + untabbable) so assistive
 * tech and keyboard users meet each link exactly once.
 */
function MarqueeHalf({ inert }: { inert?: boolean }) {
  return (
    <div
      aria-hidden={inert || undefined}
      className="flex shrink-0 items-center gap-2 pr-2"
    >
      <ol aria-labelledby="skills-nav-domains" className="flex shrink-0 gap-2">
        {domainsIntro.domains.map((domain) => (
          <li key={domain.n} className="shrink-0">
            <a
              href={domain.href}
              tabIndex={inert ? -1 : undefined}
              className={chipClass}
            >
              <span className="tabular-nums text-muted">{domain.n}</span>
              {domain.title}
            </a>
          </li>
        ))}
      </ol>

      <span
        aria-hidden="true"
        className="h-5 w-px shrink-0 rounded-full bg-line"
      />

      <ul
        aria-labelledby="skills-nav-reference"
        className="flex shrink-0 gap-2"
      >
        {referenceSections.map((section) => (
          <li key={section.href} className="shrink-0">
            <a
              href={section.href}
              tabIndex={inert ? -1 : undefined}
              className={chipClass}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * SkillsSectionNav — the index for /skills: the six domains, then the two
 * reference sections. Plain hash anchors, no active state and no JavaScript,
 * so the page keeps its own table of contents with scripting disabled.
 *
 * Deliberately not wrapped in SkillReveal: a navigation affordance has to be
 * present the moment the hero ends. Scroll-gating it would hide the index
 * behind a fade on tall viewports, which is the one thing a ToC cannot do.
 *
 * It is deliberately ONE row. Two labelled rows made the block 190px tall,
 * which with the 73px header pinned 263px of chrome — 29% of a 900px
 * viewport, 37% of a 720px one. The group labels are still in the DOM for
 * `aria-labelledby`, just visually hidden; a hairline divider carries the
 * grouping for sighted readers instead of a 24px row of text.
 *
 * The row is wider than the band at every width, so instead of a scrollbar
 * it drifts as a slow marquee (motion-allowed only — reduced motion gets a
 * static, natively scrollable row). The loop pauses on hover and while a
 * chip holds focus, so the links are never a moving target.
 *
 * Pinned flush under the fixed header (top: --header-h, no extra gap) so no
 * strip of scrolling content shows between the two bars, and anchored
 * targets clear it via the .skills-anchor-scope scroll-margin in
 * globals.css.
 */
export default function SkillsSectionNav() {
  return (
    <nav
      aria-label="Skills sections"
      className="border-y border-line bg-ivory/95 py-3 backdrop-blur-sm lg:sticky lg:top-[var(--header-h)] lg:z-30"
    >
      {/* The page container supplies the horizontal padding the full-bleed
          chip row cancels out, so it drifts edge to edge without ever
          widening the document. */}
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="skills-marquee-viewport -mx-5 overflow-x-auto px-5 pb-1 [scrollbar-width:none] [-ms-overflow-style:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
          <p id="skills-nav-domains" className="sr-only">
            Domains
          </p>
          <p id="skills-nav-reference" className="sr-only">
            Reference
          </p>
          <div className="skills-marquee-track flex w-max items-center">
            <MarqueeHalf />
            <MarqueeHalf inert />
          </div>
        </div>
      </div>
    </nav>
  );
}
