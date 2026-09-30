import Reveal from "../Reveal";
import { IconArrowRight, IconMail } from "../icons";
import { aboutClosing } from "@/data/about";
import { profile as siteProfile } from "@/data/site";

/**
 * AboutClosingCTA — centred dark closing statement. Same charcoal voice as
 * the homepage CTA, but a centred editorial composition instead of the
 * homepage's split layout. Owns id="contact" for this page.
 */
export default function AboutClosingCTA() {
  return (
    <section id="contact" aria-labelledby="about-closing" className="bg-[#161513] text-ivory">
      <Reveal className="mx-auto max-w-[1440px] px-5 py-16 text-center sm:px-8 md:py-24 lg:px-12">
        <p className="mx-auto max-w-[720px] font-editorial text-[clamp(30px,4vw,54px)] leading-[1.15]">
          &ldquo;{aboutClosing.statementA}
          <br />
          {aboutClosing.statementB}&rdquo;
        </p>
        <p className="mx-auto mt-5 max-w-[480px] text-[16px] leading-[1.55] text-white/70">
          {aboutClosing.text}
        </p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <a
            href={aboutClosing.cta.href}
            className="group inline-flex h-12 items-center gap-2 rounded-btn bg-ivory px-6 text-[15px] font-semibold text-ink transition-colors duration-300 hover:bg-white"
          >
            {aboutClosing.cta.label}
            <IconArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href={`mailto:${siteProfile.email}`}
            className="inline-flex items-center gap-2 text-[14.5px] font-medium text-white/75 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white"
          >
            <IconMail className="h-4 w-4" />
            {siteProfile.email}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
