import SkillReveal from "./SkillReveal";
import LogoList from "./LogoList";
import Diagram from "./Diagram";
import { TechMark } from "./TechLogo";
import { IconArrowUpRight } from "../icons";
import { automationDomain, domainProjects } from "@/data/skills";

/**
 * AutomationDomain — visual left, text right. The workflow panel shows the
 * generic shape (input → logic → automation → result) with the documented
 * systems named beneath; no invented functionality. An evidence row links
 * the domain to its /projects case studies.
 */
export default function AutomationDomain() {
  return (
    <section
      id="domain-automation"
      aria-labelledby="automation-heading"
      className="bg-ivory"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-[52fr_48fr] lg:gap-14 lg:px-12">
        <SkillReveal className="order-1">
          <div className="rounded-panel border border-line bg-white p-5 sm:p-6">
            <Diagram
              steps={automationDomain.steps}
              ariaLabel="Automation workflow shape"
              accentIndexes={[2]}
            />
            <div className="mt-4 border-t border-line pt-4">
              <p className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-muted">
                Documented in
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {automationDomain.examples.map((example) => (
                  <li key={example}>
                    <TechMark label={example} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SkillReveal>

        <div className="order-2">
          <SkillReveal delay={0.08}>
            <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              {automationDomain.label}
            </p>
            <h2
              id="automation-heading"
              className="mt-4 max-w-[440px] text-[clamp(30px,3.2vw,44px)] font-extrabold leading-[1.05] tracking-tight text-balance"
            >
              {automationDomain.headingA}
              <br />
              {automationDomain.headingB}
            </h2>
            <p className="mt-4 max-w-[440px] text-[16px] leading-[1.65] text-ink-soft">
              {automationDomain.text}
            </p>
          </SkillReveal>
          <SkillReveal delay={0.12}>
            <LogoList
              logos={automationDomain.logos}
              wordmarks={automationDomain.wordmarks}
              className="mt-7"
            />
          </SkillReveal>
          <SkillReveal delay={0.14} className="mt-7">
            <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
              Used in
            </p>
            <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
              {domainProjects["domain-automation"].map((project) => (
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
