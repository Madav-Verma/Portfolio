import Reveal from "./Reveal";
import type { Capability } from "@/data/site";
import {
  IconArrowUpRight,
  IconBolt,
  IconChart,
  IconCode,
  IconLayers,
  IconSpark,
} from "./icons";

const capabilityIcons: Record<string, (props: { className?: string }) => React.ReactNode> = {
  spark: IconSpark,
  code: IconCode,
  chart: IconChart,
  bolt: IconBolt,
  layers: IconLayers,
};

/**
 * CapabilityCard — neutral tinted card: icon, title, one-line
 * description, circular arrow. Border darkens on hover, nothing glows.
 *
 * The card root is the link to the matching /skills domain section, so the
 * arrow reflects a real destination instead of implying one. The arrow span
 * stays `aria-hidden` — it is a decorative echo of the link's own state, and
 * announcing it separately would just add noise to the link's name.
 */
export default function CapabilityCard({
  capability,
  index,
}: {
  capability: Capability;
  index: number;
}) {
  const Icon = capabilityIcons[capability.icon] ?? IconSpark;
  const titleId = `capability-card-${index}-title`;

  return (
    <Reveal delay={Math.min(index * 0.07, 0.28)} className="h-full">
      <a
        href={capability.href}
        aria-labelledby={titleId}
        className={`group flex h-full flex-col rounded-card border border-ink/[0.07] ${capability.tint} p-5 transition-colors duration-300 hover:border-ink/25`}
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink/10 bg-white/80 text-ink">
          <Icon className="h-5 w-5" />
        </span>
        <h3
          id={titleId}
          className="mt-4 text-[15.5px] font-bold leading-snug tracking-tight"
        >
          {capability.title}
        </h3>
        <p className="mt-1.5 flex-1 text-[13.5px] leading-relaxed text-ink-soft">
          {capability.text}
        </p>
        <span
          aria-hidden="true"
          className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink transition-all duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-white"
        >
          <IconArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
        </span>
      </a>
    </Reveal>
  );
}
