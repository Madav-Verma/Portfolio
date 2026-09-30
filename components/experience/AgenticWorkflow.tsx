import ExperienceReveal from "./ExperienceReveal";
import { IconArrowDown } from "../icons";
import { agenticWorkflow } from "@/data/experience";

/**
 * AgenticWorkflow — the documented generate/review/ship pipeline. The visual
 * weight moves left here: the workflow panel leads, the narrative follows.
 * Mobile preserves visual-first order for this chapter.
 */
export default function AgenticWorkflow() {
  return (
    <section aria-labelledby="agentic-workflow" className="bg-ivory">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-[52fr_48fr] lg:gap-14 lg:px-12">
        <ExperienceReveal className="order-1">
          <ol aria-label="Agentic build workflow" className="flex flex-col items-stretch gap-2">
            {agenticWorkflow.flow.map((step, index) => (
              <li key={step.title} className="contents">
                <div className="rounded-lg border border-ink/15 bg-white px-5 py-4">
                  <p className="text-[15px] font-extrabold tracking-tight">{step.title}</p>
                  <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
                    {step.sub}
                  </p>
                </div>
                {index < agenticWorkflow.flow.length - 1 && (
                  <span aria-hidden="true" className="flex justify-center text-muted">
                    <IconArrowDown className="h-4 w-4" />
                  </span>
                )}
              </li>
            ))}
          </ol>
        </ExperienceReveal>

        <div className="order-2">
          <ExperienceReveal delay={0.08}>
            <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              {agenticWorkflow.label}
            </p>
            <h2
              id="agentic-workflow"
              className="mt-4 max-w-[520px] text-[clamp(30px,3.2vw,44px)] font-extrabold leading-[1.05] tracking-tight text-balance"
            >
              {agenticWorkflow.headingA}
              <br />
              {agenticWorkflow.headingB}
              <br />
              {agenticWorkflow.headingC}
            </h2>
            <p className="mt-4 max-w-[520px] text-[16px] leading-[1.65] text-ink-soft md:text-[17px]">
              {agenticWorkflow.text}
            </p>
          </ExperienceReveal>
        </div>
      </div>
    </section>
  );
}
