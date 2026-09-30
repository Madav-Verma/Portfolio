import CertReveal from "./CertReveal";
import { certificationStats } from "@/data/certifications";

/**
 * CertificationStats — a small data strip. Every value is computed from the
 * certification dataset, never hardcoded.
 */
export default function CertificationStats() {
  const stats = [
    { value: String(certificationStats.total), label: "Certifications" },
    {
      value: String(certificationStats.years),
      label: "Years represented",
    },
    { value: String(certificationStats.latest), label: "Latest" },
    {
      value: String(certificationStats.categories),
      label: "Knowledge areas",
    },
  ];
  return (
    <section aria-label="Certification statistics" className="bg-ivory">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <CertReveal>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white px-6 py-7 text-center"
              >
                <dd className="text-[clamp(32px,3vw,44px)] font-extrabold leading-none tracking-tight text-ink">
                  {stat.value}
                </dd>
                <dt className="mt-2 text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </CertReveal>
      </div>
    </section>
  );
}
