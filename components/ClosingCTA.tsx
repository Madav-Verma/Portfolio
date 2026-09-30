import { closing, profile } from "@/data/site";
import Reveal from "./Reveal";
import { IconArrowRight, IconMail } from "./icons";

/**
 * ClosingCTA — compact dark charcoal band. One heading, one line,
 * one button, the email. Not a giant footer.
 */
export default function ClosingCTA() {
  return (
    <section id="contact" aria-labelledby="closing-cta" className="bg-[#161513] text-ivory">
      <Reveal className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-14 sm:px-8 md:py-16 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div className="max-w-[560px]">
          <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {closing.label}
          </p>
          <h2
            id="closing-cta"
            className="mt-3 text-[clamp(28px,3vw,40px)] font-extrabold leading-[1.05] tracking-tight text-balance"
          >
            {closing.heading}
          </h2>
          <p className="mt-3 text-[16px] leading-[1.55] text-white/70">{closing.text}</p>
        </div>
        <div className="flex shrink-0 flex-col items-start gap-4 lg:items-end">
          <a
            href={closing.cta.href}
            className="group inline-flex h-12 items-center gap-2 rounded-btn bg-ivory px-6 text-[15px] font-semibold text-ink transition-colors duration-300 hover:bg-white"
          >
            {closing.cta.label}
            <IconArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 text-[14.5px] font-medium text-white/75 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white"
          >
            <IconMail className="h-4 w-4" />
            {profile.email}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
