import type { ReactNode } from "react";
import ExperienceReveal from "./ExperienceReveal";

/**
 * ExperienceEntry — reusable alternating chapter frame for the two early
 * roles. The text and visual halves can mirror across desktop while their
 * mobile order stays deliberately varied, preventing identical stacking.
 */
export default function ExperienceEntry({
  n,
  date,
  category,
  title,
  company,
  description,
  visualSide,
  mobileFirst = "text",
  lede,
  extra,
  visual,
}: {
  n: string;
  date: string;
  category: string;
  title: string;
  company: string;
  description: string;
  visualSide: "left" | "right";
  mobileFirst?: "text" | "visual";
  lede?: ReactNode;
  extra?: ReactNode;
  visual: ReactNode;
}) {
  const titleId = `experience-${n}-title`;
  const textMobile = mobileFirst === "text" ? "order-1" : "order-2";
  const visualMobile = mobileFirst === "text" ? "order-2" : "order-1";
  const textDesktop = visualSide === "left" ? "lg:order-2" : "lg:order-1";
  const visualDesktop = visualSide === "left" ? "lg:order-1" : "lg:order-2";

  return (
    <article aria-labelledby={titleId} className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
      <div className={`${textMobile} ${textDesktop}`}>
        <ExperienceReveal>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">
            <span className="text-[14px] font-extrabold tracking-tight text-ink tabular-nums">
              {n}
            </span>
            <span aria-hidden="true" className="h-3 w-px bg-ink/20" />
            <span>{date}</span>
          </p>
          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
            {category}
          </p>
          <h2
            id={titleId}
            className="mt-2 max-w-[520px] text-[clamp(34px,3.8vw,52px)] font-extrabold leading-[1.04] tracking-tight text-balance"
          >
            {title}
          </h2>
          <p className="mt-3 text-[14.5px] font-semibold text-ink-soft">{company}</p>
          {lede}
          <p className="mt-4 max-w-[560px] text-[16px] leading-[1.65] text-ink-soft md:text-[17px]">
            {description}
          </p>
        </ExperienceReveal>
        {extra}
      </div>

      <div className={`${visualMobile} ${visualDesktop}`}>{visual}</div>
    </article>
  );
}
