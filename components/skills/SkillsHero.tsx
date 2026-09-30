import Navbar from "../Navbar";
import SkillReveal from "./SkillReveal";
import TechnologyConstellation from "./TechnologyConstellation";
import { IconArrowRight } from "../icons";
import { skillsHero } from "@/data/skills";

/**
 * SkillsHero — compact editorial hero (~450–520px desktop). Left: the
 * 05 / ENGINEERING STACK marker, display H1, supporting paragraph, the
 * breadth metadata and one in-page CTA into the domains section. Right: the
 * technology constellation map. No photograph.
 */
export default function SkillsHero() {
  return (
    <section aria-label="Engineering stack introduction" className="bg-ivory">
      <Navbar active="Skills" ctaHref="#contact" />
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 pb-12 pt-28 sm:px-8 md:pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-12 lg:pb-14">
        <div>
          <SkillReveal>
            <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              {skillsHero.label}
            </p>
            <h1 className="mt-4 max-w-[600px] text-[clamp(44px,5.6vw,72px)] font-extrabold leading-[1.0] tracking-tight text-balance">
              {skillsHero.headingA}
              <br />
              {skillsHero.headingB}
            </h1>
            <p className="mt-5 max-w-[560px] text-[16px] leading-[1.6] text-ink-soft md:text-[18px]">
              {skillsHero.text}
            </p>
            <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-muted">
              {skillsHero.meta.map((item, index) => (
                <span key={item} className="inline-flex items-center gap-3">
                  {index > 0 && (
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-ink/25" />
                  )}
                  {item}
                </span>
              ))}
            </p>
            <a
              href="#domains"
              className="group mt-8 inline-flex h-12 items-center gap-2 rounded-btn bg-ink px-6 text-[15px] font-semibold text-white transition-colors duration-300 hover:bg-accent-deep"
            >
              Explore the six domains
              <IconArrowRight
                className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </SkillReveal>
        </div>

        <SkillReveal delay={0.08}>
          <TechnologyConstellation />
        </SkillReveal>
      </div>
    </section>
  );
}
