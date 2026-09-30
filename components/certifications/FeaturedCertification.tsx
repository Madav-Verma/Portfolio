import Image from "next/image";
import CertReveal from "./CertReveal";
import { IconArrowUpRight } from "../icons";
import { featuredCertification } from "@/data/certifications";

/**
 * FeaturedCertification — TEXT LEFT / CERTIFICATE RIGHT (45/55). A visual
 * editorial selection (the most recent record), never a quality ranking.
 * "View credential" renders only when a real credential URL exists.
 */
export default function FeaturedCertification() {
  const cert = featuredCertification;
  return (
    <section
      aria-labelledby="featured-certification"
      className="border-y border-line bg-white"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-[0.45fr_0.55fr] lg:gap-14 lg:px-12">
        <div>
          <CertReveal>
            <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
              <span
                className="h-1.5 w-1.5 rounded-full bg-accent"
                aria-hidden="true"
              />
              Featured certification
            </p>
            <h2
              id="featured-certification"
              className="mt-4 max-w-[480px] text-[clamp(26px,2.8vw,38px)] font-extrabold leading-[1.08] tracking-tight text-balance"
            >
              {cert.title}
            </h2>
            <dl className="mt-6 space-y-3 border-t border-line">
              {[
                ["Provider", cert.provider],
                ["Year", cert.year],
                ["Category", cert.category],
              ].map(([term, value]) => (
                <div
                  key={term}
                  className="flex items-baseline gap-4 border-b border-line py-3"
                >
                  <dt className="w-24 shrink-0 text-[11px] font-bold uppercase tracking-[0.12em] text-muted">
                    {term}
                  </dt>
                  <dd className="text-[15px] font-semibold text-ink">{value}</dd>
                </div>
              ))}
            </dl>
            {cert.credentialUrl ? (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center gap-2 text-[14.5px] font-semibold text-ink transition-colors hover:text-accent"
              >
                Verify credential
                <IconArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ) : null}
          </CertReveal>
        </div>
        <CertReveal delay={0.08}>
          <div className="overflow-hidden rounded-panel border border-line bg-card-gray p-4 shadow-[0_10px_30px_rgba(17,17,17,0.08)] sm:p-6">
            <Image
              src={cert.image}
              alt={`${cert.title} — ${cert.provider}`}
              width={900}
              height={695}
              loading="lazy"
              className="h-auto w-full rounded-[6px] border border-line/60 bg-white"
            />
          </div>
        </CertReveal>
      </div>
    </section>
  );
}
