import SkillReveal from "./SkillReveal";
import { IconArrowRight } from "../icons";
import { domainsIntro } from "@/data/skills";

/**
 * EngineeringDomains — the "Six Layers. One Engineering Stack." intro with
 * an anchored index of the six domains. Text left, index right.
 */
export default function EngineeringDomains() {
  return (
    <section aria-labelledby="domains" className="bg-ivory">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-12">
        <SkillReveal>
          <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {domainsIntro.label}
          </p>
          <h2
            id="domains"
            className="mt-4 max-w-[440px] text-[clamp(30px,3.2vw,44px)] font-extrabold leading-[1.05] tracking-tight text-balance"
          >
            {domainsIntro.headingA}
            <br />
            {domainsIntro.headingB}
          </h2>
          <p className="mt-4 max-w-[420px] text-[16px] leading-[1.65] text-ink-soft">
            Six layers that show up together in real systems — each one gets
            its own section below.
          </p>
        </SkillReveal>

        <SkillReveal delay={0.08}>
          <ul className="divide-y divide-line border-y border-line">
            {domainsIntro.domains.map((domain) => (
              <li key={domain.n}>
                <a
                  href={domain.href}
                  className="group flex items-baseline gap-4 py-4 transition-colors duration-200 hover:bg-white/60"
                >
                  <span className="w-8 shrink-0 text-[14px] font-extrabold tracking-tight text-muted tabular-nums transition-colors group-hover:text-accent">
                    {domain.n}
                  </span>
                  <span className="flex-1 text-[17px] font-extrabold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                    {domain.title}
                  </span>
                  <IconArrowRight className="h-4 w-4 shrink-0 self-center text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent" />
                </a>
              </li>
            ))}
          </ul>
        </SkillReveal>
      </div>
    </section>
  );
}
