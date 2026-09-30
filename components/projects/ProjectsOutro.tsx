import ProjectReveal from "./ProjectReveal";
import { approach, moreDocumented, snapshot } from "@/data/projects";

/**
 * MoreDocumented — one quiet line where a "more work" grid would go.
 * There are no additional verified projects, so nothing is fabricated.
 */
export function MoreDocumented() {
  return (
    <section aria-label="More work" className="bg-ivory">
      <div className="mx-auto max-w-[1440px] px-5 py-12 text-center sm:px-8 lg:px-12">
        <ProjectReveal>
          <p className="text-[14px] font-medium text-muted">
            {moreDocumented}
          </p>
        </ProjectReveal>
      </div>
    </section>
  );
}

/**
 * EngineeringSnapshot — the shared stack as a typographic list only.
 * No logo grid. Only technology verified inside these four projects
 * (Power BI and Python belong to DataFlow Pro on /about, so they are
 * deliberately not claimed here).
 */
export function EngineeringSnapshot() {
  return (
    <section
      aria-labelledby="engineering-snapshot"
      className="border-y border-line bg-ivory"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 md:py-16 lg:px-12">
        <ProjectReveal>
          <h2
            id="engineering-snapshot"
            className="text-[clamp(24px,2.6vw,34px)] font-extrabold tracking-tight"
          >
            {snapshot.heading}
          </h2>
        </ProjectReveal>
        <ProjectReveal delay={0.08}>
          <ul className="mt-6 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-2">
            {snapshot.items.map((item, i) => (
              <li
                key={item}
                className="flex items-baseline gap-3 text-[17px] font-semibold"
              >
                {i > 0 && (
                  <span aria-hidden="true" className="text-[13px] text-accent">
                    ·
                  </span>
                )}
                {item}
              </li>
            ))}
          </ul>
        </ProjectReveal>
      </div>
    </section>
  );
}

/**
 * ApproachSection — balanced text/text closer. Heading left, paragraph
 * right. No image here.
 */
export function ApproachSection() {
  return (
    <section aria-labelledby="approach" className="bg-white">
      <div className="mx-auto grid max-w-[1440px] items-center gap-8 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-2 lg:gap-14 lg:px-12">
        <ProjectReveal>
          <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
            <span
              className="h-1.5 w-1.5 rounded-full bg-accent"
              aria-hidden="true"
            />
            {approach.label}
          </p>
          <h2
            id="approach"
            className="mt-4 max-w-[520px] text-[clamp(30px,3.2vw,44px)] font-extrabold leading-[1.04] tracking-tight text-balance"
          >
            {approach.headingA}
            <br />
            {approach.headingB}
            <br />
            {approach.headingC}
          </h2>
        </ProjectReveal>
        <ProjectReveal delay={0.08}>
          <p className="max-w-[520px] text-[17px] leading-[1.65] text-ink-soft md:text-[18px]">
            {approach.text}
          </p>
        </ProjectReveal>
      </div>
    </section>
  );
}
