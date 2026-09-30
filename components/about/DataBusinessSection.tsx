import SectionShell from "./SectionShell";
import Reveal from "../Reveal";
import { dataBusiness } from "@/data/about";

/**
 * DataBusinessSection — 07 / DATA & BUSINESS. Heading, text and the
 * DataFlow Pro coverage in the body track; the large "15–20" outcome
 * figure with its tool labels in the aside.
 */
export default function DataBusinessSection() {
  return (
    <SectionShell
      id="data-business"
      tone="ivory"
      heading={
        <>
          {dataBusiness.headingA}
          <br />
          {dataBusiness.headingB}
        </>
      }
      intro={
        <Reveal delay={0.05}>
          <p className="mt-6 max-w-[600px] text-[16px] leading-[1.6] text-ink-soft md:text-[17px]">
            {dataBusiness.text}
          </p>
          <p className="mt-5 text-[17px] font-extrabold tracking-tight">
            {dataBusiness.project}
            <span className="font-medium text-muted"> — BI platform</span>
          </p>
          <p className="mt-2 max-w-[520px] text-[15px] leading-relaxed text-ink-soft">
            {dataBusiness.projectText}
          </p>
          <ul aria-label="Dashboard coverage areas" className="mt-5 flex flex-wrap gap-2">
            {dataBusiness.areas.map((area) => (
              <li
                key={area}
                className="rounded-full border border-ink/15 bg-white px-3.5 py-1.5 text-[12.5px] font-semibold"
              >
                {area}
              </li>
            ))}
          </ul>
        </Reveal>
      }
      aside={
        <div className="xl:border-l xl:border-line xl:pl-10 xl:pt-1">
          <p className="text-[clamp(48px,5vw,76px)] font-extrabold leading-none tracking-tight tabular-nums">
            {dataBusiness.bigNumber}
          </p>
          <p className="mt-3 max-w-[260px] text-[15px] leading-snug text-ink-soft">
            {dataBusiness.bigLabel}
          </p>
          <ul aria-label="Tools used" className="mt-5 flex flex-wrap gap-2">
            {dataBusiness.stack.map((tool) => (
              <li
                key={tool}
                className="rounded-full bg-ivory-deep px-3.5 py-1.5 text-[12.5px] font-semibold text-ink-soft"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      }
    />
  );
}
