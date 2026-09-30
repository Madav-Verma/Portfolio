import ExperienceReveal from "./ExperienceReveal";
import { erpSnapshot } from "@/data/experience";

/**
 * ERPSnapshot — the internal ERP/CRM proof subsection. The honest
 * typographic module panel sits slightly left; the narrative and verified
 * proof points sit right. No interface is fabricated.
 */
export default function ERPSnapshot() {
  return (
    <section aria-labelledby="erp-snapshot" className="bg-ivory">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-2 lg:gap-14 lg:px-12">
        <ExperienceReveal image className="order-1 lg:order-1">
          <div className="border border-line bg-white p-7 sm:p-9">
            <p className="text-[clamp(56px,6vw,88px)] font-extrabold leading-none tracking-tight tabular-nums">
              {erpSnapshot.modulesCount}
            </p>
            <p className="mt-2 text-[15px] font-semibold text-ink-soft">
              {erpSnapshot.modulesLabel}
            </p>
            <ul
              aria-label="ERP modules"
              className="mt-7 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4"
            >
              {erpSnapshot.modules.map((module) => (
                <li
                  key={module}
                  className="bg-white px-3 py-3.5 text-center text-[13.5px] font-semibold"
                >
                  {module}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[13px] leading-relaxed text-muted">
              Internal system — interface not shown.
            </p>
          </div>
        </ExperienceReveal>

        <div className="order-2 lg:order-2">
          <ExperienceReveal>
            <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              {erpSnapshot.label}
            </p>
            <h2
              id="erp-snapshot"
              className="mt-4 max-w-[520px] text-[clamp(30px,3.2vw,44px)] font-extrabold leading-[1.05] tracking-tight text-balance"
            >
              {erpSnapshot.headingA}
              <br />
              {erpSnapshot.headingB}
            </h2>
            <p className="mt-4 max-w-[520px] text-[16px] leading-[1.65] text-ink-soft md:text-[17px]">
              {erpSnapshot.text}
            </p>
          </ExperienceReveal>
          <ExperienceReveal delay={0.08}>
            <dl className="mt-7 flex flex-wrap gap-x-10 gap-y-5 border-t border-line pt-6">
              {erpSnapshot.proof.map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <dt className="order-2 mt-1 text-[12.5px] font-medium text-muted">
                    {stat.label}
                  </dt>
                  <dd className="order-1 text-[24px] font-extrabold tracking-tight tabular-nums">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </ExperienceReveal>
        </div>
      </div>
    </section>
  );
}
