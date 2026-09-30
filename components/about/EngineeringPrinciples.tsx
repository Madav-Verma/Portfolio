import SectionShell from "./SectionShell";
import Reveal from "../Reveal";
import { principles } from "@/data/about";

/**
 * EngineeringPrinciples — 08 / PRINCIPLES. Visually quiet: four ruled rows,
 * each a number + short heading in the body track and one grounded sentence
 * in the aside track. No cards.
 */
export default function EngineeringPrinciples() {
  return (
    <SectionShell
      id="principles"
      tone="white"
      heading={
        <>
          {principles.headingA}
          <br />
          {principles.headingB}
        </>
      }
    >
      <ol className="mt-8 md:mt-10">
        {principles.items.map((item, i) => (
          <Reveal key={item.n} delay={Math.min(i * 0.05, 0.15)}>
            <li className="grid gap-x-5 gap-y-1.5 border-t border-line py-6 last:border-b md:py-7 xl:grid-cols-[minmax(0,640px)_minmax(0,1fr)] xl:gap-10">
              <div>
                <p className="text-[15px] font-extrabold tabular-nums text-muted">
                  {item.n}
                </p>
                <h3 className="mt-1 max-w-[600px] text-[clamp(19px,2vw,24px)] font-extrabold tracking-tight">
                  {item.title}
                </h3>
              </div>
              <p className="max-w-[420px] text-[15px] leading-relaxed text-ink-soft">
                {item.text}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
    </SectionShell>
  );
}
