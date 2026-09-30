import SkillReveal from "./SkillReveal";
import LogoList from "./LogoList";
import RAGArchitecture from "./RAGArchitecture";
import { IconArrowUpRight } from "../icons";
import { agenticFlow, aiDomain, domainProjects } from "@/data/skills";

/**
 * AIDomain — the page's first dark chapter (#161513, matching every other
 * dark section on the site). Text left: heading, narrative, real model
 * logos, documented capabilities, and the "Used in" evidence links those
 * capabilities ship in. Architecture right: the RAG diagram. The agentic
 * generate/review/ship workflow folds in below that grid as a full-width
 * sub-block of chips — no second diagram — keeping the `#agentic` deep
 * link intact.
 */
export default function AIDomain() {
  return (
    <section
      id="domain-ai"
      aria-labelledby="ai-heading"
      className="bg-[#161513] text-ivory"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-[42fr_58fr] lg:gap-14 lg:px-12">
        <div>
          <SkillReveal>
            <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-white/60">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              {aiDomain.label}
            </p>
            <h2
              id="ai-heading"
              className="mt-4 max-w-[480px] text-[clamp(30px,3.2vw,44px)] font-extrabold leading-[1.05] tracking-tight text-balance"
            >
              {aiDomain.headingA}
              <br />
              {aiDomain.headingB}
            </h2>
            <p className="mt-4 max-w-[480px] text-[16px] leading-[1.65] text-white/70">
              {aiDomain.text}
            </p>
          </SkillReveal>
          <SkillReveal delay={0.06}>
            <LogoList logos={aiDomain.logos} dark className="mt-7" />
          </SkillReveal>
          <SkillReveal delay={0.1}>
            <ul
              aria-label="AI capabilities"
              className="mt-7 divide-y divide-white/15 border-y border-white/15"
            >
              {aiDomain.capabilities.map((capability) => (
                <li
                  key={capability}
                  className="flex items-baseline gap-3 py-2.5 text-[14.5px] font-medium text-white/80"
                >
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 translate-y-[-2px] rounded-full bg-accent"
                  />
                  {capability}
                </li>
              ))}
            </ul>
          </SkillReveal>
          <SkillReveal delay={0.14}>
            <p className="mt-7 text-[12px] font-semibold uppercase tracking-[0.1em] text-white/60">
              Used in
            </p>
            <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1">
              {domainProjects["domain-ai"].map((project) => (
                <a
                  key={project.href}
                  href={project.href}
                  className="group inline-flex min-h-11 items-center gap-1.5 text-[14.5px] font-semibold text-white/80 transition-colors duration-200 hover:text-accent"
                >
                  {project.label}
                  <IconArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100" />
                </a>
              ))}
            </div>
          </SkillReveal>
        </div>

        <SkillReveal delay={0.08}>
          <RAGArchitecture />
        </SkillReveal>
      </div>

      <SkillReveal>
        <div className="mx-auto mt-16 max-w-[1440px] border-t border-white/15 px-5 pt-12 sm:px-8 lg:px-12">
          <h3
            id="agentic"
            className="text-[clamp(24px,2.4vw,32px)] font-extrabold leading-[1.08] tracking-tight text-balance"
          >
            {agenticFlow.headingA}
            <br />
            {agenticFlow.headingB}
          </h3>
          <p className="mt-4 max-w-[520px] text-[15px] leading-[1.65] text-white/70">
            {agenticFlow.text}
          </p>
          <ol className="mt-6 flex flex-wrap gap-x-2 gap-y-3">
            {agenticFlow.steps.map((step) => (
              <li
                key={step.title}
                className="inline-flex items-baseline gap-1.5 rounded-btn border border-white/20 px-3 py-2"
              >
                <span
                  className={`text-[13px] font-extrabold ${
                    step.title === "Model B" ? "text-accent" : "text-ivory"
                  }`}
                >
                  {step.title}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/55">
                  {step.sub}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </SkillReveal>
    </section>
  );
}
