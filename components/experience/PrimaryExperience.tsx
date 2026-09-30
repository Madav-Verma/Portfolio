import Image from "next/image";
import ExperienceReveal from "./ExperienceReveal";
import { IconArrowDown, IconArrowRight } from "../icons";
import { primaryExperience } from "@/data/experience";

/**
 * PrimaryExperience — the 2025–Present chapter and the page’s primary
 * experience. Balanced 48/52 composition: complete ownership narrative on
 * the left, the real company web-platform screenshot on the right. Mobile
 * preserves text-first order.
 */
export default function PrimaryExperience() {
  return (
    <section
      id="primary-experience"
      aria-labelledby="primary-experience-title"
      className="border-y border-line bg-white"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 md:py-20 lg:px-12">
        <div className="grid items-start gap-10 lg:grid-cols-[48fr_52fr] lg:gap-14">
          <div className="order-1">
            <ExperienceReveal>
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">
                {primaryExperience.category}
              </p>
              <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">
                <span className="text-[14px] font-extrabold tracking-tight text-ink tabular-nums">
                  {primaryExperience.n}
                </span>
                <span aria-hidden="true" className="h-3 w-px bg-ink/20" />
                <span>{primaryExperience.date}</span>
              </p>
              <h2
                id="primary-experience-title"
                className="mt-3 max-w-[520px] text-[clamp(36px,4.2vw,56px)] font-extrabold leading-[1.04] tracking-tight text-balance"
              >
                {primaryExperience.titleA}
                <br />
                {primaryExperience.titleB}
              </h2>
              <p className="mt-3 text-[15px] font-semibold text-ink-soft">
                {primaryExperience.company} · {primaryExperience.date}
              </p>
              {primaryExperience.descriptions.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 28)}
                  className="mt-4 max-w-[560px] text-[16px] leading-[1.65] text-ink-soft md:text-[17px]"
                >
                  {paragraph}
                </p>
              ))}
            </ExperienceReveal>

            <ExperienceReveal delay={0.08}>
              <h3 className="mt-10 text-[13px] font-extrabold uppercase tracking-[0.14em] text-ink">
                Responsibility
              </h3>
              <dl className="mt-5 grid gap-x-8 gap-y-6 border-t border-line pt-6 sm:grid-cols-2">
                {primaryExperience.responsibilities.map((block) => (
                  <div key={block.title} className="border-l border-line pl-4">
                    <dt className="text-[15px] font-extrabold tracking-tight">
                      <span className="mr-2 text-muted tabular-nums">{block.n}</span>
                      {block.title}
                    </dt>
                    <dd className="mt-2 text-[14px] leading-relaxed text-ink-soft">
                      {block.text}
                    </dd>
                  </div>
                ))}
              </dl>
            </ExperienceReveal>
          </div>

          <ExperienceReveal image delay={0.08} className="order-2 h-full">
            <figure className="lg:sticky lg:top-24">
              <div className="overflow-hidden rounded-card border border-ink/10 bg-white">
                <div
                  aria-hidden="true"
                  className="flex items-center gap-1.5 border-b border-line px-4 py-2.5"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
                </div>
                <div className="relative aspect-[16/10]">
                  <Image
                    src={primaryExperience.webPlatform.src}
                    alt={primaryExperience.webPlatform.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 52vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <figcaption className="mt-3 text-[13px] font-medium text-muted">
                {primaryExperience.webPlatform.caption}
              </figcaption>
            </figure>
          </ExperienceReveal>
        </div>

        <ExperienceReveal>
          <h3 className="mt-14 text-[13px] font-extrabold uppercase tracking-[0.14em] text-ink">
            {primaryExperience.ownershipLabel}
          </h3>
          <ol
            aria-label="System ownership flow"
            className="mt-5 flex flex-col items-stretch gap-2 lg:flex-row lg:items-center"
          >
            {primaryExperience.ownershipFlow.map((step, index) => (
              <li key={step} className="contents">
                <span className="flex-1 rounded-lg border border-ink/15 bg-ivory px-4 py-3 text-center text-[13.5px] font-bold tracking-tight">
                  {step}
                </span>
                {index < primaryExperience.ownershipFlow.length - 1 && (
                  <span aria-hidden="true" className="flex justify-center text-muted">
                    <IconArrowDown className="h-4 w-4 lg:hidden" />
                    <IconArrowRight className="hidden h-4 w-4 lg:block" />
                  </span>
                )}
              </li>
            ))}
          </ol>
        </ExperienceReveal>
      </div>
    </section>
  );
}
