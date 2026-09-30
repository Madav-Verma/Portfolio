import SkillReveal from "./SkillReveal";
import TechLogo from "./TechLogo";
import { TechMark } from "./TechLogo";
import { logoMeta } from "./logo-meta";
import { fullstackLayers } from "@/data/skills";

/**
 * FullStackArchitecture — the layered application document. Each band
 * names its layer and sets the documented technologies beside it, labelled
 * as a typical composition rather than any single project's architecture.
 */
export default function FullStackArchitecture() {
  return (
    <figure className="rounded-panel border border-line bg-white p-5 sm:p-6">
      <ol aria-label="Layered application composition">
        {fullstackLayers.layers.map((row, index) => (
          <SkillReveal key={row.layer} delay={index * 0.05}>
            <li
              className={`grid items-center gap-2 py-3 sm:grid-cols-[130px_1fr] sm:gap-4 ${
                index < fullstackLayers.layers.length - 1
                  ? "border-b border-line"
                  : ""
              }`}
            >
              <p className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-muted">
                {row.layer}
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                {row.tech.length === 0 && (
                  <span className="text-[13px] font-medium text-muted">
                    People using the product
                  </span>
                )}
                {row.tech.map((slug) =>
                  slug === "zod" ? (
                    <span key={slug} className="inline-flex items-center gap-2">
                      <TechLogo slug={slug} size={20} />
                      <span className="text-[13px] font-bold tracking-tight text-ink-soft">
                        {logoMeta(slug).label}
                      </span>
                      <TechMark label="REST APIs" />
                    </span>
                  ) : (
                    <span key={slug} className="inline-flex items-center gap-2 text-ink">
                      <TechLogo slug={slug} size={20} />
                      <span className="text-[13px] font-bold tracking-tight text-ink-soft">
                        {logoMeta(slug).label}
                      </span>
                    </span>
                  )
                )}
              </div>
            </li>
          </SkillReveal>
        ))}
      </ol>
      <figcaption className="mt-2 border-t border-line pt-4">
        <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-ink">
          {fullstackLayers.label}
        </p>
        <p className="mt-1 text-[13px] leading-relaxed text-muted">
          {fullstackLayers.note}
        </p>
      </figcaption>
    </figure>
  );
}
