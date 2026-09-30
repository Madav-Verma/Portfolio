import Image from "next/image";
import ProjectReveal from "./ProjectReveal";
import { IconArrowRight, IconArrowUpRight } from "../icons";
import type { CaseStudy } from "@/data/projects";

/**
 * Exact frame ratio per screenshot, so no image is ever cover-cropped:
 * every figure box matches its source file pixel-for-pixel. Keys must
 * stay complete string literals — Tailwind only generates classes it
 * can see in source.
 */
const FRAME_RATIO: Record<string, string> = {
  "/projects/prokon-website-home.png": "aspect-[16/10]",
  "/projects/sjs-app.png": "aspect-[1260/975]",
  "/projects/attendance-dashboard.png": "aspect-[2940/1567]",
};

/**
 * ProjectCaseStudy — one editorial chapter per project. `imagePosition`
 * drives the alternation: text-left/image-right (01, 03) vs
 * image-left/text-right (02, 04) at a 42/58 split. On mobile the order
 * inverts so the rhythm keeps alternating instead of stacking identically.
 * Project 02 has no public screenshot, so its visual is an honest editorial
 * system overview — labelled as such — built only from documented facts:
 * the proof number, the eight real modules, and a schematic module flow.
 * Never a fabricated interface. A `gallery` slot sits above it so genuine
 * screenshots can be added later without touching this layout.
 */
export default function ProjectCaseStudy({ study }: { study: CaseStudy }) {
  const imageRight = study.imagePosition === "right";
  const titleId = `project-${study.n}-title`;

  return (
    <article
      id={study.anchor}
      aria-labelledby={titleId}
      className="border-t border-line py-16 md:py-20"
    >
      <div
        className={`grid items-center gap-10 lg:gap-14 ${
          imageRight
            ? "lg:grid-cols-[42fr_58fr]"
            : "lg:grid-cols-[58fr_42fr]"
        }`}
      >
        <div className={imageRight ? "order-2 lg:order-1" : "order-1 lg:order-2"}>
          <ProjectReveal>
            <p
              aria-hidden="true"
              className="text-[64px] font-light leading-none tracking-tight text-muted tabular-nums md:text-[88px]"
            >
              {study.n}
            </p>
            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
              {study.category}
            </p>
            <h2
              id={titleId}
              className="mt-2 max-w-[520px] text-[clamp(36px,4.4vw,60px)] font-extrabold leading-[1.04] tracking-tight text-balance"
            >
              {study.title}
            </h2>
            <p className="mt-4 max-w-[520px] text-[17px] leading-[1.6] text-ink-soft md:text-[18px]">
              {study.description}
            </p>
            <ul
              className="mt-5 flex flex-wrap gap-1.5"
              aria-label={`${study.title} technologies`}
            >
              {study.tech.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-ivory-deep px-2.5 py-1 text-[11.5px] font-semibold text-ink-soft"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </ProjectReveal>

          {study.proof && (
            <ProjectReveal
              delay={0.08}
              className="mt-8 border-t border-line pt-6"
            >
              <p className="text-[clamp(34px,3.4vw,52px)] font-extrabold leading-[1.05] tracking-tight text-balance">
                {study.proof.value}
              </p>
              <p className="mt-2 max-w-[420px] text-[14.5px] leading-relaxed text-ink-soft">
                {study.proof.label}
              </p>
            </ProjectReveal>
          )}

          {study.stats.length > 0 && (
            <ProjectReveal delay={0.1}>
              <dl className="mt-7 flex flex-wrap gap-x-8 gap-y-4">
                {study.stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <dt className="order-2 mt-1 text-[12.5px] font-medium text-muted">
                      {stat.label}
                    </dt>
                    <dd className="order-1 text-[22px] font-extrabold tracking-tight tabular-nums">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </ProjectReveal>
          )}

          <ProjectReveal delay={0.12} className="mt-7">
            {study.liveHref ? (
              <div>
                <a
                  href={study.liveHref}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-ink transition-colors duration-200 hover:text-accent"
                >
                  Open Live Project
                  <IconArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]" />
                </a>
                <p className="mt-1.5">
                  <a
                    href={study.liveHref}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[13px] font-medium text-muted underline decoration-ink/20 underline-offset-4 transition-colors hover:text-ink"
                  >
                    {study.liveLabel}
                  </a>
                </p>
              </div>
            ) : study.note ? (
              <p className="flex items-center gap-2 text-[13.5px] font-medium text-muted">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-accent"
                  aria-hidden="true"
                />
                {study.note}
              </p>
            ) : null}
          </ProjectReveal>
        </div>

        <div className={imageRight ? "order-1 lg:order-2" : "order-2 lg:order-1"}>
          {study.image ? (
            <ProjectReveal image className="h-full">
              <figure
                className={`group ${
                  imageRight ? "lg:-mr-12" : "lg:-ml-12"
                }`}
              >
                <div className="overflow-hidden rounded-card border border-ink/10 bg-white">
                  <div
                    aria-hidden="true"
                    className="flex items-center gap-1.5 border-b border-line px-4 py-2.5"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
                  </div>
                  <div
                    className={`relative ${
                      (study.image && FRAME_RATIO[study.image]) ||
                      "aspect-[16/10]"
                    }`}
                  >
                    <Image
                      src={study.image}
                      alt={study.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
                {study.imageCaption && (
                  <figcaption className="mt-3 text-[13px] font-medium text-muted">
                    {study.imageCaption}
                  </figcaption>
                )}
                {study.liveLabel && (
                  <figcaption className="mt-1 text-[13px] font-medium text-muted">
                    <a
                      href={study.liveHref}
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-ink/20 underline-offset-4 transition-colors hover:text-ink"
                    >
                      {study.liveLabel}
                    </a>
                  </figcaption>
                )}
              </figure>
            </ProjectReveal>
          ) : (
            <div className="space-y-6">
              {study.gallery && study.gallery.length > 0 && (
                /* Reserved slot for genuine screenshots. Empty today; when
                   real captures are supplied they appear above the overview
                   with no further layout change. */
                <figure className="overflow-hidden rounded-card border border-ink/10 bg-white">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={study.gallery[0].src}
                      alt={study.gallery[0].alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-contain"
                    />
                  </div>
                  {study.gallery[0].caption && (
                    <figcaption className="border-t border-line px-4 py-3 text-[13px] font-medium text-muted">
                      {study.gallery[0].caption}
                    </figcaption>
                  )}
                </figure>
              )}

              <ProjectReveal
                image
                className="border border-line bg-ivory p-7 sm:p-9"
              >
                <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  {study.overview?.label ?? "System overview"}
                </p>
                <p className="mt-4 text-[clamp(56px,6vw,96px)] font-extrabold leading-none tracking-tight tabular-nums">
                  {(study.overview?.proof ?? study.proof)?.value}
                </p>
                <p className="mt-2 max-w-[380px] text-[15px] font-medium leading-relaxed text-ink-soft">
                  {(study.overview?.proof ?? study.proof)?.label}
                </p>
                {(study.overview?.modules ?? study.modules) && (
                  <ul
                    aria-label={`${study.title} modules`}
                    className="mt-7 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4"
                  >
                    {(study.overview?.modules ?? study.modules)?.map((module) => (
                      <li
                        key={module}
                        className="bg-white px-3 py-3.5 text-center text-[13.5px] font-semibold"
                      >
                        {module}
                      </li>
                    ))}
                  </ul>
                )}
              </ProjectReveal>

              {study.overview?.flow && (
                /* Honest structural diagram of the documented modules in
                   sequence — an architecture claim, not a fake UI trace. */
                <ProjectReveal
                  image
                  className="border border-line bg-white p-7 sm:p-9"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                    Connected workflow
                  </p>
                  <ul
                    className="mt-4 flex flex-wrap items-center gap-2"
                    aria-label={`${study.title} module flow`}
                  >
                    {study.overview.flow.map((step, i) => (
                      <li key={step} className="flex items-center gap-2">
                        {i > 0 && (
                          <IconArrowRight
                            className="h-4 w-4 shrink-0 text-accent"
                            aria-hidden="true"
                          />
                        )}
                        <span className="rounded-md border border-line bg-ivory px-3 py-2 text-[14px] font-semibold">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-[13px] font-medium text-muted">
                    Modules are listed in sequence — a schematic, not a live interface.
                  </p>
                </ProjectReveal>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
