import SkillReveal from "./SkillReveal";
import LogoList from "./LogoList";
import { IconArrowDown, IconArrowUpRight } from "../icons";
import { analyticsDomain, domainProjects } from "@/data/skills";

/**
 * AnalyticsDomain — visual left, text right. The visual is an editorial
 * abstraction of the DataFlow Pro surface: three data streams converging
 * into one decision interface. A conceptual architecture, never a fake
 * Power BI screenshot. Closes with an evidence link into the /projects case study.
 */
export default function AnalyticsDomain() {
  return (
    <section
      id="domain-analytics"
      aria-labelledby="analytics-heading"
      className="border-y border-line bg-white"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-[52fr_48fr] lg:gap-14 lg:px-12">
        <SkillReveal className="order-1">
          <div
            role="img"
            aria-label="Three data streams — revenue, compliance risk and operational KPIs — converging into one decision interface"
            className="rounded-panel border border-line bg-ivory p-5 sm:p-6"
          >
            <ul className="space-y-4">
              {analyticsDomain.streams.map((stream, index) => (
                <SkillReveal key={stream} delay={index * 0.06}>
                  <li>
                    <p className="text-[11.5px] font-bold uppercase tracking-[0.12em] text-muted">
                      {stream}
                    </p>
                    <div className="mt-1.5 h-px w-full bg-ink/15" aria-hidden="true" />
                  </li>
                </SkillReveal>
              ))}
            </ul>
            <div aria-hidden="true" className="flex justify-center py-3 text-muted">
              <IconArrowDown className="h-4 w-4" />
            </div>
            <div className="rounded-lg border border-accent/40 bg-card-blue px-4 py-4 text-center">
              <p className="text-[13px] font-extrabold uppercase tracking-[0.1em]">
                {analyticsDomain.target}
              </p>
              <p className="mt-1 text-[12.5px] font-medium text-ink-soft">
                {analyticsDomain.project} — real-time dashboard
              </p>
            </div>
          </div>
        </SkillReveal>

        <div className="order-2">
          <SkillReveal delay={0.08}>
            <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              {analyticsDomain.label}
            </p>
            <h2
              id="analytics-heading"
              className="mt-4 max-w-[440px] text-[clamp(30px,3.2vw,44px)] font-extrabold leading-[1.05] tracking-tight text-balance"
            >
              {analyticsDomain.headingA}
              <br />
              {analyticsDomain.headingB}
            </h2>
            <p className="mt-4 max-w-[440px] text-[16px] leading-[1.65] text-ink-soft">
              {analyticsDomain.text}
            </p>
          </SkillReveal>
          <SkillReveal delay={0.12}>
            <LogoList
              logos={["python"]}
              wordmarks={analyticsDomain.wordmarks}
              className="mt-7"
            />
          </SkillReveal>
          <SkillReveal delay={0.14}>
            <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
              Used in
            </p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1">
              {domainProjects["domain-analytics"].map((project) => (
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
