import SkillReveal from "./SkillReveal";
import LogoList from "./LogoList";
import DeploymentPipeline from "./DeploymentPipeline";
import { IconArrowUpRight } from "../icons";
import { deploymentDomain, domainProjects } from "@/data/skills";

/**
 * DeploymentDomain — the page's second dark chapter. Text left, delivery
 * pipeline right. Keeps the two-dark-section budget for the whole page.
 * Closes the text column with an evidence link into the /projects case study.
 */
export default function DeploymentDomain() {
  return (
    <section
      id="domain-deployment"
      aria-labelledby="deployment-heading"
      className="bg-[#161513] text-ivory"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-[42fr_58fr] lg:gap-14 lg:px-12">
        <div className="order-1">
          <SkillReveal>
            <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-white/60">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              {deploymentDomain.label}
            </p>
            <h2
              id="deployment-heading"
              className="mt-4 max-w-[440px] text-[clamp(30px,3.2vw,44px)] font-extrabold leading-[1.05] tracking-tight text-balance"
            >
              {deploymentDomain.headingA}
              <br />
              {deploymentDomain.headingB}
            </h2>
            <p className="mt-4 max-w-[440px] text-[16px] leading-[1.65] text-white/70">
              {deploymentDomain.text}
            </p>
          </SkillReveal>
          <SkillReveal delay={0.08}>
            <LogoList
              logos={deploymentDomain.logos}
              wordmarks={deploymentDomain.wordmarks}
              dark
              className="mt-7"
            />
          </SkillReveal>
          <SkillReveal delay={0.14}>
            <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-white/60">
              Used in
            </p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1">
              {domainProjects["domain-deployment"].map((project) => (
                <a
                  key={project.href}
                  href={project.href}
                  className="group inline-flex min-h-11 items-center gap-1.5 text-[14.5px] font-semibold text-white/70 transition-colors duration-200 hover:text-accent"
                >
                  {project.label}
                  <IconArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100" />
                </a>
              ))}
            </div>
          </SkillReveal>
        </div>

        <SkillReveal delay={0.08} className="order-2">
          <DeploymentPipeline />
        </SkillReveal>
      </div>
    </section>
  );
}
