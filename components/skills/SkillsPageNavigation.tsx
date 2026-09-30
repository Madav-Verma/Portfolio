import SkillReveal from "./SkillReveal";
import { IconArrowRight } from "../icons";
import { skillsNavigation } from "@/data/skills";

/**
 * SkillsPageNavigation — the portfolio journey continues editorially.
 * Certifications is intentionally non-linking until that page exists.
 */
export default function SkillsPageNavigation() {
  return (
    <nav aria-label="Portfolio pages" className="border-t border-line bg-ivory">
      <SkillReveal className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">
          {skillsNavigation.previousLabel}
        </p>
        <a
          href={skillsNavigation.previous.href}
          className="group inline-flex items-center gap-2 text-[22px] font-extrabold tracking-tight transition-colors hover:text-accent md:text-[26px]"
        >
          <IconArrowRight className="h-5 w-5 rotate-180 transition-transform duration-300 group-hover:-translate-x-1" />
          {skillsNavigation.previous.label}
        </a>
        <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-muted sm:text-right">
          {skillsNavigation.nextLabel}
        </p>
        <a
          href={skillsNavigation.next.href}
          className="group inline-flex items-center gap-2 text-[22px] font-extrabold tracking-tight transition-colors hover:text-accent sm:flex-row-reverse md:text-[26px]"
        >
          {skillsNavigation.next.label}
          <IconArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </SkillReveal>
    </nav>
  );
}
