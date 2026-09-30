import ExperienceReveal from "./ExperienceReveal";
import { ownershipSection } from "@/data/experience";

/**
 * OwnershipSection — the page’s dark rhythm break. Two balanced columns:
 * the ownership statement left, five owned areas right. Descriptions are
 * always present; hover and focus only add emphasis, never hidden meaning.
 */
export default function OwnershipSection() {
  return (
    <section aria-labelledby="what-i-own" className="bg-[#161513] text-ivory">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-12">
        <ExperienceReveal>
          <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {ownershipSection.label}
          </p>
          <h2
            id="what-i-own"
            className="mt-4 max-w-[420px] text-[clamp(36px,4vw,58px)] font-extrabold leading-[1.02] tracking-tight text-balance"
          >
            {ownershipSection.headingA}
            <br />
            {ownershipSection.headingB}
          </h2>
          <p className="mt-5 max-w-[420px] text-[16px] leading-relaxed text-white/70">
            Responsibility here means living with the system after it ships: the
            workflow, the data, the users, and the production consequences.
          </p>
        </ExperienceReveal>

        <ExperienceReveal delay={0.08}>
          <ul className="divide-y divide-white/15 border-y border-white/15">
            {ownershipSection.items.map((item) => (
              <li
                key={item.title}
                className="group grid grid-cols-[56px_1fr] items-baseline gap-4 py-5 transition-colors duration-300 hover:bg-white/[0.04]"
              >
                <p className="text-[14px] font-extrabold tracking-tight text-white/55 tabular-nums transition-colors duration-300 group-hover:text-white">
                  {item.n}
                </p>
                <div>
                  <p className="text-[20px] font-extrabold tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                    {item.title}
                  </p>
                  <p className="mt-1 max-w-[480px] text-[14.5px] leading-relaxed text-white/70">
                    {item.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </ExperienceReveal>
      </div>
    </section>
  );
}
