import ExperienceReveal from "./ExperienceReveal";
import { careerIntro } from "@/data/experience";

/**
 * CareerIntro — a full-width editorial breathing point after the hero.
 * Centered, balanced, and deliberately free of side-heavy composition.
 */
export default function CareerIntro() {
  return (
    <section aria-labelledby="career-intro" className="border-y border-line bg-white">
      <ExperienceReveal className="mx-auto max-w-[1440px] px-5 py-16 text-center sm:px-8 md:py-20 lg:px-12">
        <p className="flex items-center justify-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          {careerIntro.label}
        </p>
        <h2
          id="career-intro"
          className="mx-auto mt-4 max-w-[900px] text-[clamp(40px,5vw,68px)] font-extrabold leading-[1.02] tracking-tight text-balance"
        >
          {careerIntro.headingA}
          <br />
          {careerIntro.headingB}
        </h2>
        <p className="mx-auto mt-5 max-w-[640px] text-[16px] leading-[1.65] text-ink-soft md:text-[18px]">
          {careerIntro.text}
        </p>
      </ExperienceReveal>
    </section>
  );
}
