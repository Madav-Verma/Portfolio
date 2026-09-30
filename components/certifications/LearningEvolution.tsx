import CertReveal from "./CertReveal";
import { learningEvolution } from "@/data/certifications";

/**
 * LearningEvolution — TEXT RIGHT / VISUAL LEFT. The five learning stages
 * as a left-to-right (stacked on mobile) progression. Framed explicitly as
 * areas represented across the record — never as claims about what any
 * certificate made possible.
 */
export default function LearningEvolution() {
  return (
    <section
      aria-labelledby="learning-evolution"
      className="border-y border-line bg-white"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-12">
        <CertReveal className="order-2 lg:order-1">
          <ol className="relative space-y-0 border-l border-line">
            {learningEvolution.stages.map((stage, index) => (
              <li key={stage.word} className="relative py-4 pl-8 first:pt-0 last:pb-0">
                <span
                  aria-hidden="true"
                  className={`absolute -left-[5px] h-[9px] w-[9px] rounded-full border-2 ${
                    index === 0 ? "top-2" : "top-6"
                  } ${
                    index === learningEvolution.stages.length - 1
                      ? "border-accent bg-accent"
                      : "border-ink bg-white"
                  }`}
                />
                <p className="text-[19px] font-extrabold uppercase tracking-tight text-ink md:text-[22px]">
                  {stage.word}
                </p>
                <p className="mt-1 text-[14.5px] leading-[1.55] text-muted">
                  {stage.areas.join(" · ")}
                </p>
              </li>
            ))}
          </ol>
        </CertReveal>

        <div className="order-1 lg:order-2">
          <CertReveal>
            <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
              <span
                className="h-1.5 w-1.5 rounded-full bg-accent"
                aria-hidden="true"
              />
              {learningEvolution.label}
            </p>
            <h2
              id="learning-evolution"
              className="mt-4 max-w-[480px] text-[clamp(30px,3.2vw,44px)] font-extrabold leading-[1.04] tracking-tight text-balance"
            >
              {learningEvolution.headingA}
              <br />
              {learningEvolution.headingB}
            </h2>
            <p className="mt-4 max-w-[440px] text-[15px] italic leading-[1.6] text-muted">
              {learningEvolution.note}
            </p>
          </CertReveal>
        </div>
      </div>
    </section>
  );
}
