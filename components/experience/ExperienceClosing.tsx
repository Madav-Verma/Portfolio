import ExperienceReveal from "./ExperienceReveal";
import { experienceClosingStatement } from "@/data/experience";

/**
 * ExperienceClosing — centered personal statement before navigation. This is
 * a portfolio point of view, not a resume claim, so it stays typographic
 * and quiet.
 */
export default function ExperienceClosing() {
  return (
    <section aria-label="Closing perspective" className="bg-ivory">
      <ExperienceReveal className="mx-auto max-w-[1440px] px-5 py-16 text-center sm:px-8 md:py-20 lg:px-12">
        <p className="mx-auto max-w-[820px] font-editorial text-[clamp(32px,4vw,56px)] leading-[1.08]">
          {experienceClosingStatement.lineA}
          <br />
          {experienceClosingStatement.lineB}
          <br />
          {experienceClosingStatement.lineC}
        </p>
        <p className="mx-auto mt-6 max-w-[560px] text-[16px] leading-[1.65] text-ink-soft">
          {experienceClosingStatement.text}
        </p>
      </ExperienceReveal>
    </section>
  );
}
