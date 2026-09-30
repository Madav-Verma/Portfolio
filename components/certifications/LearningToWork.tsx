import CertReveal from "./CertReveal";
import { learningToWork } from "@/data/certifications";

/**
 * LearningToWork — VISUAL LEFT / TEXT RIGHT. The conceptual
 * Learning → Knowledge → Engineering → Product flow on the left, and the
 * thematic category-to-project-area connections on the right. The links
 * are thematic, never claims that one certificate caused one project.
 */
export default function LearningToWork() {
  return (
    <section
      aria-labelledby="learning-to-work"
      className="bg-ivory"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-12">
        <CertReveal>
          <ol className="flex flex-col gap-0 sm:flex-row sm:items-stretch">
            {learningToWork.flow.map((step, index) => (
              <li
                key={step.word}
                className={`relative flex-1 border-line px-5 py-5 first:pl-0 sm:border-l sm:py-1 sm:first:border-l-0 ${
                  index > 0 ? "border-t sm:border-t-0" : ""
                }`}
              >
                {index > 0 ? (
                  <span
                    aria-hidden="true"
                    className="absolute -left-[9px] top-1/2 hidden h-[17px] w-[17px] -translate-y-1/2 items-center justify-center rounded-full border border-line bg-ivory text-[10px] leading-none text-ink/50 sm:flex"
                  >
                    →
                  </span>
                ) : null}
                <p className="text-[17px] font-extrabold uppercase tracking-tight text-ink md:text-[19px]">
                  {step.word}
                </p>
                <ul className="mt-2 space-y-1">
                  {step.items.map((item) => (
                    <li
                      key={item}
                      className="text-[13.5px] leading-[1.5] text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </CertReveal>

        <div>
          <CertReveal>
            <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
              <span
                className="h-1.5 w-1.5 rounded-full bg-accent"
                aria-hidden="true"
              />
              {learningToWork.label}
            </p>
            <h2
              id="learning-to-work"
              className="mt-4 max-w-[520px] text-[clamp(30px,3.2vw,44px)] font-extrabold leading-[1.04] tracking-tight text-balance"
            >
              {learningToWork.headingA}
              <br />
              {learningToWork.headingB}
            </h2>
          </CertReveal>
          <ul className="mt-8 border-t border-line">
            {learningToWork.groups.map((group, index) => (
              <li key={group.from}>
                <CertReveal delay={index * 0.05}>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-line py-4">
                    <span className="text-[15px] font-bold tracking-tight text-ink">
                      {group.from}
                    </span>
                    <span aria-hidden="true" className="text-ink/30">
                      →
                    </span>
                    <span className="text-[14.5px] text-muted">
                      {group.to.join(" · ")}
                    </span>
                  </div>
                </CertReveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
