import { capabilities, capabilitiesIntro } from "@/data/site";
import CapabilityCard from "./CapabilityCard";
import Reveal from "./Reveal";

/**
 * CapabilitiesSection — heading + intro share one row on desktop,
 * then five cards across with a tight 16px rhythm.
 */
export default function CapabilitiesSection() {
  return (
    <section aria-labelledby="what-i-do" className="bg-ivory">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 md:py-20 lg:px-12">
        <Reveal className="grid items-end gap-6 lg:grid-cols-2">
          <div>
            <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              {capabilitiesIntro.label}
            </p>
            <h2
              id="what-i-do"
              className="mt-3 max-w-[520px] text-[clamp(30px,3.2vw,44px)] font-extrabold leading-[1.04] tracking-tight text-balance"
            >
              {capabilitiesIntro.heading}
            </h2>
          </div>
          <p className="max-w-[520px] text-[16px] leading-[1.55] text-ink-soft lg:justify-self-end">
            {capabilitiesIntro.text}
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-10 lg:grid-cols-5">
          {capabilities.map((capability, i) => (
            <CapabilityCard key={capability.title} capability={capability} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
