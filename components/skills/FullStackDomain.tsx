import SkillReveal from "./SkillReveal";
import LogoList from "./LogoList";
import FullStackArchitecture from "./FullStackArchitecture";
import { IconArrowUpRight } from "../icons";
import { domainProjects, fullstackDomain } from "@/data/skills";

/**
 * FullStackDomain — visual weight moves left here: the layered
 * architecture panel leads, the narrative follows right. An evidence row
 * links the domain to its /projects case studies.
 */
export default function FullStackDomain() {
  return (
    <section
      id="domain-fullstack"
      aria-labelledby="fullstack-heading"
      className="border-y border-line bg-white"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-[58fr_42fr] lg:gap-14 lg:px-12">
        <SkillReveal className="order-1">
          <FullStackArchitecture />
        </SkillReveal>

        <div className="order-2">
          <SkillReveal delay={0.08}>
            <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              {fullstackDomain.label}
            </p>
            <h2
              id="fullstack-heading"
              className="mt-4 max-w-[440px] text-[clamp(30px,3.2vw,44px)] font-extrabold leading-[1.05] tracking-tight text-balance"
            >
              {fullstackDomain.headingA}
              <br />
              {fullstackDomain.headingB}
            </h2>
            <p className="mt-4 max-w-[440px] text-[16px] leading-[1.65] text-ink-soft">
              {fullstackDomain.text}
            </p>
          </SkillReveal>
          <SkillReveal delay={0.12}>
            <LogoList logos={fullstackDomain.logos} className="mt-7" />
          </SkillReveal>
          <SkillReveal delay={0.14} className="mt-7">
            <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
              Used in
            </p>
            <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
              {domainProjects["domain-fullstack"].map((project) => (
                <a
                  key={project.href}
                  href={project.href}
                  className="group inline-flex min-h-11 items-center gap-1.5 text-[14.5px] font-semibold text-ink-soft transition-colors duration-200 hover:text-accent"
                >
                  {project.label}
                  <IconArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100" />
                </a>
              ))}
            </div>
          </SkillReveal>
        </div>
      </div>
    </section>
  );
}
