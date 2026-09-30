import SectionShell from "./SectionShell";
import Reveal from "../Reveal";
import { techStack } from "@/data/about";

/**
 * TechnologyStack — restrained typographic tool list. Group label in the
 * body track, tools in the aside track. No bars, no logos.
 */
export default function TechnologyStack() {
  return (
    <SectionShell
      id="stack"
      tone="ivory"
      heading={<>{techStack.heading}</>}
    >
      <dl className="mt-8 md:mt-10">
        {techStack.groups.map((group) => (
          <Reveal key={group.label}>
            <div className="grid gap-1.5 border-t border-line py-5 last:border-b sm:gap-6 xl:grid-cols-[minmax(0,640px)_minmax(0,1fr)] xl:gap-10">
              <dt className="text-[12px] font-semibold uppercase tracking-[0.1em] text-muted sm:pt-1">
                {group.label}
              </dt>
              <dd className="text-[15.5px] font-medium leading-relaxed">
                {group.items.join("  ·  ")}
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </SectionShell>
  );
}
