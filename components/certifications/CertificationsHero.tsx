import Navbar from "../Navbar";
import CertReveal from "./CertReveal";
import CertificateCollage from "./CertificateCollage";
import { certificationsHero } from "@/data/certifications";

/**
 * CertificationsHero — compact editorial hero (~450–520px desktop). Left:
 * the 06 / Certifications marker, display H1, supporting paragraph and the
 * 2023 → 2026 metadata. Right: the real-certificate collage. A thin
 * divider closes the hero with Courses → Certifications → Applied Work.
 */
export default function CertificationsHero() {
  return (
    <section aria-label="Certifications introduction" className="bg-ivory">
      <Navbar active="Certifications" ctaHref="#contact" />
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 pb-10 pt-28 sm:px-8 md:pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:px-12">
        <div>
          <CertReveal>
            <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
              <span
                className="h-1.5 w-1.5 rounded-full bg-accent"
                aria-hidden="true"
              />
              {certificationsHero.label}
            </p>
            <h1 className="mt-4 max-w-[600px] text-[clamp(44px,5.6vw,72px)] font-extrabold leading-[1.0] tracking-tight text-balance">
              {certificationsHero.headingA}
              <br />
              {certificationsHero.headingB}
            </h1>
            <p className="mt-5 max-w-[560px] text-[16px] leading-[1.6] text-ink-soft md:text-[18px]">
              {certificationsHero.text}
            </p>
            <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[12px] font-bold uppercase tracking-[0.14em] text-muted">
              {certificationsHero.meta.map((item, index) => (
                <span key={item} className="inline-flex items-center gap-3">
                  {index > 0 && (
                    <span
                      aria-hidden="true"
                      className="h-1 w-1 rounded-full bg-ink/25"
                    />
                  )}
                  {item}
                </span>
              ))}
            </p>
          </CertReveal>
        </div>

        <CertReveal delay={0.08}>
          <CertificateCollage />
        </CertReveal>
      </div>
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="flex items-center gap-3 border-t border-line py-4 text-[12px] font-bold uppercase tracking-[0.14em] text-muted">
          {certificationsHero.bottomLine.map((item, index) => (
            <span key={item} className="inline-flex items-center gap-3">
              {index > 0 && (
                <span aria-hidden="true" className="text-ink/30">
                  →
                </span>
              )}
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
