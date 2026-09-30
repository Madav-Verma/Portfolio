import SectionShell from "./SectionShell";
import Reveal from "../Reveal";
import { IconArrowDown, IconArrowRight } from "../icons";
import { appliedAI } from "@/data/about";

/**
 * AppliedAISection — 06 / APPLIED AI. Heading + doctrine text in the body
 * track, the five RAG practices as ruled rows in the aside, and the
 * Knowledge Base → User pipeline full-width below.
 */
export default function AppliedAISection() {
  return (
    <SectionShell
      id="applied-ai"
      tone="ivory"
      heading={
        <>
          {appliedAI.headingA}
          <br />
          {appliedAI.headingB}
        </>
      }
      intro={
        <Reveal delay={0.05}>
          <p className="mt-6 max-w-[600px] text-[16px] leading-[1.6] text-ink-soft md:text-[17px]">
            {appliedAI.text}
          </p>
        </Reveal>
      }
      aside={
        <ul className="divide-y divide-line border-y border-line xl:mt-1">
          {appliedAI.points.map((point) => (
            <li
              key={point}
              className="flex items-center justify-between gap-4 py-3 text-[15px] font-semibold"
            >
              {point}
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            </li>
          ))}
        </ul>
      }
    >
      <Reveal>
        <ol
          aria-label="Retrieval pipeline: from knowledge base to user"
          className="mt-10 flex flex-col items-stretch gap-2 md:mt-12 lg:flex-row lg:items-center"
        >
          {appliedAI.flow.map((step, i) => (
            <li key={step} className="contents">
              <span className="flex-1 rounded-lg border border-ink/15 bg-white px-4 py-3 text-center text-[13.5px] font-bold tracking-tight">
                {step}
              </span>
              {i < appliedAI.flow.length - 1 && (
                <span aria-hidden="true" className="flex justify-center text-muted">
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
