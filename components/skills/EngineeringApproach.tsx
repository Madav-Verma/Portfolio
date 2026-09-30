import SkillReveal from "./SkillReveal";
import { engineeringApproach } from "@/data/skills";

/**
 * EngineeringApproach — "Tools Follow the Problem." Positioning statements,
 * not verified facts; three principles, no ratings anywhere.
 */
export default function EngineeringApproach() {
  return (
    <section
      aria-labelledby="approach"
      className="border-t border-line bg-white"
    >
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-12">
        <SkillReveal>
          <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {engineeringApproach.label}
          </p>
          <h2
            id="approach"
            className="mt-4 max-w-[440px] text-[clamp(30px,3.2vw,44px)] font-extrabold leading-[1.05] tracking-tight text-balance"
          >
            {engineeringApproach.headingA}
            <br />
            {engineeringApproach.headingB}
          </h2>
          <p className="mt-4 max-w-[440px] text-[16px] leading-[1.65] text-ink-soft">
            {engineeringApproach.text}
          </p>
        </SkillReveal>

        <SkillReveal delay={0.08}>
          <ol className="divide-y divide-line border-y border-line">
            {engineeringApproach.principles.map((principle) => (
              <li
                key={principle.n}
                className="group grid grid-cols-[56px_1fr] items-baseline gap-4 py-5"
              >
                <p className="text-[14px] font-extrabold tracking-tight text-muted tabular-nums transition-colors duration-300 group-hover:text-accent">
                  {principle.n}
                </p>
                <p className="text-[20px] font-extrabold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                  {principle.title}
                </p>
              </li>
            ))}
          </ol>
        </SkillReveal>
      </div>
    </section>
  );
}
