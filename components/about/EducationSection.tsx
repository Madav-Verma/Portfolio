import SectionShell from "./SectionShell";
import Reveal from "../Reveal";
import { education } from "@/data/about";

/**
 * EducationSection — 09 / EDUCATION. Two entries on the shell tracks:
 * period in the rail, degree in the body, school + result in the aside.
 */
export default function EducationSection() {
  return (
    <SectionShell
      id="education"
      tone="white"
      heading={
        <>
          {education.headingA} {education.headingB}
        </>
      }
    >
      <div className="mt-8 grid gap-8 md:mt-10 lg:grid-cols-2 lg:gap-10 xl:gap-14">
        {education.schools.map((school, i) => (
          <Reveal key={school.degree} delay={i * 0.07}>
            <article className="border-t-2 border-ink pt-5">
              <h3 className="text-[18px] font-extrabold tracking-tight">
                {school.degree}
              </h3>
              <p className="mt-1.5 text-[15px] font-medium text-ink-soft">
                {school.school}
              </p>
              <p className="mt-2 flex items-center gap-3 text-[13.5px] font-semibold text-muted">
                <span>{school.period}</span>
                <span aria-hidden="true" className="h-3.5 w-px bg-ink/20" />
                <span className="text-ink">{school.result}</span>
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
