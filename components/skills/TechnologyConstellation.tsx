import SkillReveal from "./SkillReveal";
import TechLogo from "./TechLogo";
import { logoMeta } from "./logo-meta";
import { constellation } from "@/data/skills";

/**
 * TechnologyConstellation — the hero's technology map. A central node
 * joined by thin lines to four category branches, each carrying its real
 * logos with visible names. Desktop: radial map. Mobile: compact vertical
 * stack (lines hidden, rhythm kept).
 */
export default function TechnologyConstellation() {
  return (
    <div
      role="img"
      aria-label="Map of the engineering stack: AI, web, data and deployment technologies connected to a central node"
      className="relative"
    >
      <SkillReveal className="relative">
        {/* connector lines (desktop map only) */}
        <svg
          aria-hidden="true"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
        >
          <line x1="50" y1="50" x2="25" y2="27" stroke="currentColor" strokeWidth="0.25" className="text-ink/20" />
          <line x1="50" y1="50" x2="75" y2="27" stroke="currentColor" strokeWidth="0.25" className="text-ink/20" />
          <line x1="50" y1="50" x2="25" y2="73" stroke="currentColor" strokeWidth="0.25" className="text-ink/20" />
          <line x1="50" y1="50" x2="75" y2="73" stroke="currentColor" strokeWidth="0.25" className="text-ink/20" />
        </svg>

        {/* central node */}
        <div className="mb-6 flex justify-center lg:absolute lg:inset-0 lg:mb-0 lg:items-center">
          <div className="relative h-28 w-32">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-ink"
              style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
            />
            <p className="absolute inset-x-0 bottom-[20%] text-center text-[12px] font-extrabold uppercase leading-none tracking-[0.14em] text-ivory">
              Stack
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2 lg:gap-x-24 lg:gap-y-16">
          {constellation.branches.map((branch) => (
            <div
              key={branch.id}
              className="relative rounded-card border border-ink/10 bg-white px-4 py-3"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                {branch.label}
              </p>
              <ul className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-2">
                {branch.logos.map((slug) => (
                  <li
                    key={slug}
                    className="flex flex-col items-center gap-1 text-ink"
                  >
                    <TechLogo slug={slug} size={24} />
                    <span className="text-[10.5px] font-semibold tracking-tight text-ink-soft">
                      {logoMeta(slug).label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SkillReveal>
    </div>
  );
}
