import Navbar from "../Navbar";
import ExperienceReveal from "./ExperienceReveal";
import { IconPin } from "../icons";
import { experienceHero } from "@/data/experience";
import { profile } from "@/data/site";

/**
 * ExperienceHero — compact editorial introduction (~420–500px desktop).
 * Left: plain section label, display H1, intro and location metadata.
 * Right: a small stacked typographic career snapshot. No photograph is
 * generated or reused here.
 */
export default function ExperienceHero() {
  return (
    <section aria-label="Experience introduction" className="bg-ivory">
      <Navbar active="Experience" ctaHref="#contact" />
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 pb-12 pt-28 sm:px-8 md:pt-32 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:px-12 lg:pb-14">
        <div>
          <ExperienceReveal>
            <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              {experienceHero.label}
            </p>
            <h1 className="mt-4 max-w-[620px] text-[clamp(44px,6vw,76px)] font-extrabold leading-[1.0] tracking-tight text-balance">
              {experienceHero.headingA}
              <br />
              {experienceHero.headingB}
            </h1>
            <p className="mt-5 max-w-[600px] text-[16px] leading-[1.6] text-ink-soft md:text-[18px]">
              {experienceHero.intro}
            </p>
            <p className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[13px] font-semibold text-muted">
              <span className="inline-flex items-center gap-1.5">
                <IconPin className="h-4 w-4 text-accent" />
                {profile.location}
              </span>
              <span aria-hidden="true" className="h-3.5 w-px bg-ink/20" />
              <span>{profile.role}</span>
            </p>
          </ExperienceReveal>
        </div>

        <ExperienceReveal delay={0.08}>
          <dl
            aria-label="Career snapshot"
            className="w-full divide-y divide-line border-y border-line lg:ml-auto lg:max-w-[360px]"
          >
            {experienceHero.snapshot.map((row) => (
              <div key={row.period} className="grid grid-cols-[112px_1fr] items-baseline gap-4 py-4">
                <dt className="text-[15px] font-extrabold tracking-tight tabular-nums">
                  {row.period}
                </dt>
                <dd className="text-[14px] font-medium leading-snug text-ink-soft">
                  {row.focus}
                </dd>
              </div>
            ))}
          </dl>
        </ExperienceReveal>
      </div>
    </section>
  );
}
