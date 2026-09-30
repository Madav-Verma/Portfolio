import SectionShell from "./SectionShell";
import Reveal from "../Reveal";
import { IconArrowDown, IconArrowRight } from "../icons";
import { agentic } from "@/data/about";

/**
 * AgenticEngineering — small unnumbered section. Heading + text in the body
 * track, and the generate → audit → approve → ship pipeline as a horizontal
 * four-step flow full-width below so the section spans the canvas.
 */
export default function AgenticEngineering() {
  return (
    <SectionShell
      id="agentic"
      tone="white"
      heading={
        <>
          {agentic.headingA}
          <br />
          {agentic.headingB}
        </>
      }
      intro={
        <Reveal delay={0.05}>
          <p className="mt-6 max-w-[600px] text-[16px] leading-[1.6] text-ink-soft md:text-[17px]">
            {agentic.text}
          </p>
        </Reveal>
      }
    >
      <Reveal>
        <ol className="mt-10 flex flex-col items-stretch gap-2 md:mt-12 lg:flex-row lg:items-stretch">
          {agentic.flow.map((step, i) => (
            <li key={step.title} className="contents">
              <div className="flex-1 rounded-lg border border-ink/15 bg-ivory px-5 py-4">
                <p className="text-[15px] font-extrabold tracking-tight">{step.title}</p>
                <p className="mt-1 text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
                  {step.sub}
                </p>
              </div>
              {i < agentic.flow.length - 1 && (
                <span aria-hidden="true" className="flex items-center justify-center text-muted">
                  <IconArrowDown className="h-4 w-4 lg:hidden" />
                  <IconArrowRight className="hidden h-4 w-4 lg:block" />
                </span>
              )}
            </li>
          ))}
        </ol>
      </Reveal>
    </SectionShell>
  );
}
