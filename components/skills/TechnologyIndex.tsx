import SkillReveal from "./SkillReveal";
import TechLogo from "./TechLogo";
import { technologyIndex } from "@/data/skills";

/**
 * TechnologyIndex — the full toolkit as an editorial typographic list.
 * Group label left, large technology names right; on hover the name shifts,
 * its logo appears and an accent underline draws. No cards, no scores.
 */
export default function TechnologyIndex() {
  return (
    <section aria-labelledby="tech-index" className="bg-ivory">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 md:py-20 lg:px-12">
        <SkillReveal className="max-w-[640px]">
          <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Technology index
          </p>
          <h2
            id="tech-index"
            className="mt-4 text-[clamp(30px,3.2vw,44px)] font-extrabold leading-[1.05] tracking-tight text-balance"
          >
            The Full Toolkit.
          </h2>
        </SkillReveal>

        <div className="mt-10 md:mt-12">
          {technologyIndex.map((group) => (
            <div
              key={group.label}
              className="grid gap-2 border-t border-line py-7 last:border-b md:grid-cols-[240px_1fr] md:gap-10 lg:grid-cols-[320px_1fr]"
            >
              <SkillReveal>
                <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-muted md:pt-2">
                  {group.label}
                </p>
              </SkillReveal>
              <ul className="flex flex-wrap items-baseline gap-x-8 gap-y-3">
                {group.items.map((item, index) => (
                  <SkillReveal key={item.name} delay={Math.min(index * 0.03, 0.2)}>
                    <li className="group/item relative inline-flex items-baseline gap-2.5">
                      {item.slug ? (
                        <span className="inline-flex -translate-x-1 self-center text-ink opacity-0 transition-all duration-200 group-hover/item:translate-x-0 group-hover/item:opacity-100 group-focus-within/item:translate-x-0 group-focus-within/item:opacity-100">
                          <TechLogo slug={item.slug} size={20} tooltip={null} />
                        </span>
                      ) : null}
                      <span className="text-[clamp(19px,2vw,26px)] font-extrabold tracking-tight transition-transform duration-200 group-hover/item:-translate-y-0.5">
                        {item.name}
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-accent transition-transform duration-200 group-hover/item:scale-x-100 group-focus-within/item:scale-x-100"
                      />
                    </li>
                  </SkillReveal>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
