import ExperienceReveal from "./ExperienceReveal";
import { experienceMetrics } from "@/data/experience";

/**
 * ExperienceMetrics — verified numbers only, presented as a restrained
 * editorial strip. Large figures, small labels, hairline dividers. No
 * invented performance claims and no dashboard styling.
 */
export default function ExperienceMetrics() {
  return (
    <section aria-labelledby="documented-impact" className="bg-ivory">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 md:py-20 lg:px-12">
        <ExperienceReveal>
          <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {experienceMetrics.label}
          </p>
          <h2
            id="documented-impact"
            className="mt-4 max-w-[640px] text-[clamp(30px,3.2vw,44px)] font-extrabold leading-[1.05] tracking-tight text-balance"
          >
            {experienceMetrics.headingA}
            <br />
            {experienceMetrics.headingB}
          </h2>
        </ExperienceReveal>

        <ExperienceReveal delay={0.06}>
          <dl
            aria-label="Documented metrics"
            className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-line bg-line sm:grid-cols-3 lg:grid-cols-4"
          >
            {experienceMetrics.items.map((metric) => (
              <div key={metric.label} className="bg-ivory px-6 py-7">
                <dt className="order-2 mt-2 text-[12.5px] font-medium leading-snug text-muted">
                  {metric.label}
                </dt>
                <dd className="order-1 text-[clamp(30px,3vw,42px)] font-extrabold leading-none tracking-tight tabular-nums">
                  {metric.value}
                </dd>
              </div>
            ))}
            <div className="bg-ivory px-6 py-7">
              <p className="text-[13px] font-medium leading-relaxed text-muted">
                Only documented metrics are shown.
              </p>
            </div>
          </dl>
        </ExperienceReveal>
      </div>
    </section>
  );
}
