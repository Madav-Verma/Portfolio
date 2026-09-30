import ExperienceReveal from "./ExperienceReveal";
import { IconArrowDown, IconArrowRight } from "../icons";
import { ragAssistant } from "@/data/experience";

/**
 * RAGArchitecture — practical retrieval-grounded AI work as an engineering
 * document. Text left, architecture right; thin connectors and restrained
 * ink/gray/blue treatment, never futuristic AI decoration.
 */
export default function RAGArchitecture() {
  return (
    <section aria-labelledby="rag-assistant" className="border-y border-line bg-white">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-[42fr_58fr] lg:gap-14 lg:px-12">
        <div className="order-1">
          <ExperienceReveal>
            <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              {ragAssistant.label}
            </p>
            <h2
              id="rag-assistant"
              className="mt-4 max-w-[520px] text-[clamp(30px,3.2vw,44px)] font-extrabold leading-[1.05] tracking-tight text-balance"
            >
              {ragAssistant.headingA}
              <br />
              {ragAssistant.headingB}
            </h2>
            <p className="mt-4 max-w-[520px] text-[16px] leading-[1.65] text-ink-soft md:text-[17px]">
              {ragAssistant.text}
            </p>
          </ExperienceReveal>
        </div>

        <ExperienceReveal delay={0.08} className="order-2">
          <ol
            aria-label="Retrieval-grounded assistant architecture"
            className="flex flex-col items-stretch gap-2 lg:flex-row lg:items-center"
          >
            {ragAssistant.flow.map((step, index) => (
              <li key={step} className="contents">
                <span className="flex-1 rounded-lg border border-ink/15 bg-ivory px-3 py-3 text-center text-[12.5px] font-bold leading-snug tracking-tight">
                  {step}
                </span>
                {index < ragAssistant.flow.length - 1 && (
                  <span aria-hidden="true" className="flex justify-center text-muted">
                    <IconArrowDown className="h-4 w-4 lg:hidden" />
                    <IconArrowRight className="hidden h-4 w-4 lg:block" />
                  </span>
                )}
              </li>
            ))}
          </ol>
          <p className="mt-4 text-[13px] leading-relaxed text-muted">
            Deterministic checks stay in the loop wherever reliability matters.
          </p>
        </ExperienceReveal>
      </div>
    </section>
  );
}
