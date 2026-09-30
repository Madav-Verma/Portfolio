import SectionShell from "./SectionShell";
import Reveal from "../Reveal";
import { ownership } from "@/data/about";

/**
 * EngineeringOwnership — 04 / ENGINEERING OWNERSHIP. Heading + scope
 * statement in the body track, the four ownership blocks as a 2×2 stack
 * in the aside so the right half carries equal weight.
 */
export default function EngineeringOwnership() {
  return (
    <SectionShell
      id="ownership"
      tone="white"
      heading={
        <>
          {ownership.headingA}
          <br />
          {ownership.headingB}
        </>
      }
      intro={
        <Reveal delay={0.05}>
          <p className="mt-6 max-w-[600px] text-[clamp(18px,1.8vw,23px)] font-semibold leading-[1.5] tracking-tight text-balance">
            {ownership.statement}
          </p>
        </Reveal>
      }
      aside={
        <dl className="grid gap-x-6 gap-y-7 sm:grid-cols-2 xl:pt-1">
          {ownership.blocks.map((block) => (
            <div key={block.title} className="border-l border-line pl-5">
              <dt className="text-[16px] font-extrabold tracking-tight">
                {block.title}
              </dt>
              <dd className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                {block.text}
              </dd>
            </div>
          ))}
        </dl>
      }
    />
  );
}
