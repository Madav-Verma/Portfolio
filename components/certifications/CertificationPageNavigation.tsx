import CertReveal from "./CertReveal";
import { IconArrowRight } from "../icons";
import { certificationsNavigation } from "@/data/certifications";

/**
 * CertificationPageNavigation — the portfolio journey continues
 * editorially: Skills behind, Contact ahead.
 */
export default function CertificationPageNavigation() {
  return (
    <nav aria-label="Portfolio pages" className="border-t border-line bg-ivory">
      <CertReveal className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-muted">
          {certificationsNavigation.previousLabel}
        </p>
        <a
          href={certificationsNavigation.previous.href}
          className="group inline-flex items-center gap-2 text-[22px] font-extrabold tracking-tight transition-colors hover:text-accent md:text-[26px]"
        >
          <IconArrowRight className="h-5 w-5 rotate-180 transition-transform duration-300 group-hover:-translate-x-1" />
          {certificationsNavigation.previous.label}
        </a>
        <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-muted sm:text-right">
          {certificationsNavigation.nextLabel}
        </p>
        <a
          href={certificationsNavigation.next.href}
          className="group inline-flex items-center gap-2 text-[22px] font-extrabold tracking-tight transition-colors hover:text-accent sm:flex-row-reverse md:text-[26px]"
        >
          {certificationsNavigation.next.label}
          <IconArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </CertReveal>
    </nav>
  );
}
