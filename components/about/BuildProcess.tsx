import SectionShell from "./SectionShell";
import Reveal from "../Reveal";
import { buildProcess } from "@/data/about";

/**
 * BuildProcess — the five-stage process. Heading on the spine, then the
 * five ruled stages full-width below so the section's mass spans the canvas.
 */
export default function BuildProcess() {
  return (
    <SectionShell
      id="process"
      tone="ivory"
      heading={
        <>
          {buildProcess.headingA}
          <br />
          {buildProcess.headingB}
        </>
      }
    >
      <ol className="mt-10 grid gap-8 sm:grid-cols-2 md:mt-12 lg:grid-cols-5 lg:gap-6">
        {buildProcess.stages.map((stage, i) => (
          <Reveal key={stage.n} delay={Math.min(i * 0.06, 0.24)} className="h-full">
            <li className="border-t-2 border-ink pt-5">
              <p className="text-[13px] font-bold tabular-nums text-muted">{stage.n}</p>
              <h3 className="mt-2 text-[17px] font-extrabold tracking-tight">
                {stage.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                {stage.text}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
    </SectionShell>
  );
}
