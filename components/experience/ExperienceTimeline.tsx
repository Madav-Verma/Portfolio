import ExperienceEntry from "./ExperienceEntry";
import ExperienceReveal from "./ExperienceReveal";
import { IconArrowDown } from "../icons";
import {
  dataAnalyst,
  primaryExperience,
  softwareIntern,
} from "@/data/experience";

/**
 * ExperienceTimeline — an editorial vertical chronology for the two early
 * roles. A thin line and small markers carry the timeline; the content stays
 * readable as an ordered list even without the visual styling. The primary
 * 2025–Present role is signposted here and expanded immediately below.
 */
export default function ExperienceTimeline() {
  return (
    <section aria-label="Career timeline" className="bg-ivory">
      <div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-8 md:py-20 lg:px-12">
        <div
          aria-hidden="true"
          className="absolute bottom-8 left-[27px] top-16 w-px bg-line sm:left-[43px] lg:left-[60px]"
        />

        <ol className="space-y-16 md:space-y-20">
          <li className="relative pl-10 sm:pl-16 lg:pl-24">
            <span
              aria-hidden="true"
              className="absolute left-[8px] top-2 h-2.5 w-2.5 rounded-full bg-accent sm:left-[24px] lg:left-[48px]"
            />
            <ExperienceEntry
              n={softwareIntern.n}
              date={softwareIntern.date}
              category={softwareIntern.category}
              title={softwareIntern.title}
              company={softwareIntern.company}
              description={softwareIntern.description}
              visualSide="left"
              mobileFirst="text"
              extra={
                <ExperienceReveal delay={0.08}>
                  <dl className="mt-8 grid gap-6 border-t border-line pt-6 sm:grid-cols-3">
                    {softwareIntern.blocks.map((block) => (
                      <div key={block.title} className="border-l border-line pl-4">
                        <dt className="text-[14px] font-extrabold tracking-tight">
                          <span className="mr-2 text-muted tabular-nums">{block.n}</span>
                          {block.title}
                        </dt>
                        <dd className="mt-2 text-[13.5px] leading-relaxed text-ink-soft">
                          {block.text}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <ul aria-label="Documented technical areas" className="mt-6 flex flex-wrap gap-2">
                    {softwareIntern.technicalLabels.map((label) => (
                      <li
                        key={label}
                        className="rounded-full bg-ivory-deep px-3 py-1 text-[12px] font-semibold text-ink-soft"
                      >
                        {label}
                      </li>
                    ))}
                  </ul>
                </ExperienceReveal>
              }
              visual={
                <ExperienceReveal image delay={0.08} className="h-full">
                  <div className="rounded-card border border-line bg-white p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                      Underlying system
                    </p>
                    <ul className="mt-4">
                      {softwareIntern.stack.map((item, index) => (
                        <li
                          key={item}
                          className="flex items-center justify-between border-b border-line py-3 text-[15px] font-bold last:border-b-0 last:pb-0"
                        >
                          {item}
                          {index < softwareIntern.stack.length - 1 && (
                            <span aria-hidden="true" className="text-[15px] font-extrabold text-accent">
                              +
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-[13px] leading-relaxed text-muted">
                      An editorial technical composition, not a product screenshot.
                    </p>
                  </div>
                </ExperienceReveal>
              }
            />
          </li>

          <li className="relative pl-10 sm:pl-16 lg:pl-24">
            <span
              aria-hidden="true"
              className="absolute left-[8px] top-2 h-2.5 w-2.5 rounded-full bg-accent sm:left-[24px] lg:left-[48px]"
            />
            <ExperienceEntry
              n={dataAnalyst.n}
              date={dataAnalyst.date}
              category={dataAnalyst.category}
              title={dataAnalyst.title}
              company={dataAnalyst.company}
              description={dataAnalyst.description}
              visualSide="left"
              mobileFirst="visual"
              lede={
                <ExperienceReveal delay={0.05} className="mt-7 border-t border-line pt-6">
                  <p className="text-[clamp(48px,5vw,72px)] font-extrabold leading-none tracking-tight tabular-nums">
                    {dataAnalyst.bigNumber}
                  </p>
                  <p className="mt-2 max-w-[360px] text-[14.5px] leading-snug text-ink-soft">
                    {dataAnalyst.bigLabel}
                  </p>
                </ExperienceReveal>
              }
              extra={
                <ExperienceReveal delay={0.08}>
                  <ul aria-label="Tools used" className="mt-6 flex flex-wrap gap-2">
                    {dataAnalyst.stack.map((tool) => (
                      <li
                        key={tool}
                        className="rounded-full bg-ivory-deep px-3 py-1 text-[12px] font-semibold text-ink-soft"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                  <ul aria-label="Work areas" className="mt-3 flex flex-wrap gap-2">
                    {dataAnalyst.coverage.map((area) => (
                      <li
                        key={area}
                        className="rounded-full border border-ink/15 bg-white px-3 py-1 text-[12px] font-semibold"
                      >
                        {area}
                      </li>
                    ))}
                  </ul>
                </ExperienceReveal>
              }
              visual={
                <ExperienceReveal image className="h-full">
                  <div className="rounded-card border border-ink/10 bg-white p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                      Signals in
                    </p>
                    <ul className="mt-4">
                      {dataAnalyst.signals.map((signal) => (
                        <li
                          key={signal}
                          className="flex items-center justify-between gap-4 border-b border-line py-3 text-[15px] font-bold last:border-b-0 last:pb-0"
                        >
                          {signal}
                          <span aria-hidden="true" className="h-px w-16 bg-line" />
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 flex items-center gap-3 text-[14px] font-extrabold tracking-tight">
                      <IconArrowDown className="h-4 w-4 text-accent" />
                      {dataAnalyst.dashboard}
                    </p>
                    <p className="mt-3 text-[13px] leading-relaxed text-muted">
                      An abstract composition only; no charts or business figures are invented.
                    </p>
                  </div>
                </ExperienceReveal>
              }
            />
          </li>

          <li className="relative pl-10 sm:pl-16 lg:pl-24">
            <span
              aria-hidden="true"
              className="absolute left-[8px] top-2 h-2.5 w-2.5 rounded-full bg-ink sm:left-[24px] lg:left-[48px]"
            />
            <ExperienceReveal>
              <p className="max-w-[620px] text-[15px] leading-relaxed text-ink-soft">
                <span className="font-extrabold text-ink tabular-nums">{primaryExperience.n}</span>
                <span aria-hidden="true"> · </span>
                <span className="font-semibold text-ink">
                  {primaryExperience.role}, {primaryExperience.company}
                </span>
                <span aria-hidden="true"> · </span>
                {primaryExperience.date} —{" "}
                <a
                  href="#primary-experience"
                  className="font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
                >
                  continue to the primary role below
                </a>
                .
              </p>
            </ExperienceReveal>
          </li>
        </ol>
      </div>
    </section>
  );
}
