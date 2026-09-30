import ExperienceReveal from "./ExperienceReveal";
import { IconArrowRight, IconMail } from "../icons";
import { experienceClosing } from "@/data/experience";

/**
 * ExperienceClosingCTA — the page’s contact section in the same dark,
 * centered voice as the other closings. Owns id="contact" for /experience.
 */
export default function ExperienceClosingCTA() {
  return (
    <section
      id="contact"
      aria-labelledby="experience-closing"
      className="bg-[#161513] text-ivory"
    >
      <ExperienceReveal className="mx-auto max-w-[1440px] px-5 py-16 text-center sm:px-8 md:py-24 lg:px-12">
        <p className="flex items-center justify-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-white/60">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          {experienceClosing.label}
        </p>
        <h2
          id="experience-closing"
          className="mx-auto mt-4 max-w-[720px] text-[clamp(30px,4vw,54px)] font-extrabold leading-[1.08] tracking-tight text-balance"
        >
          {experienceClosing.headingA}
          <br />
          {experienceClosing.headingB}
        </h2>
        <p className="mx-auto mt-5 max-w-[480px] text-[16px] leading-[1.55] text-white/70">
          {experienceClosing.text}
        </p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <a
            href={experienceClosing.cta.href}
            className="group inline-flex h-12 items-center gap-2 rounded-btn bg-ivory px-6 text-[15px] font-semibold text-ink transition-colors duration-300 hover:bg-white"
          >
            {experienceClosing.cta.label}
            <IconArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href={`mailto:${experienceClosing.email}`}
            className="inline-flex items-center gap-2 text-[14.5px] font-medium text-white/75 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white"
          >
            <IconMail className="h-4 w-4" />
            {experienceClosing.email}
          </a>
        </div>
      </ExperienceReveal>
    </section>
  );
}
