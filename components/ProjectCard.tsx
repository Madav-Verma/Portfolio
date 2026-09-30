import Image from "next/image";
import type { Project } from "@/data/site";
import Reveal from "./Reveal";
import { IconArrowUpRight, IconDatabase } from "./icons";

/**
 * ProjectCard — screenshot is the proof (60-65% of card height),
 * info below, circular arrow overlapping the image edge.
 *
 * The card root is the link: one destination per project, reached by
 * pointer, Enter, and screen readers alike. No nested anchors, no
 * `role="button"` — it is navigation, so it stays navigation. The
 * accessible name is the project title via `aria-labelledby`, so the
 * description and tag list are not read out as part of the link name.
 */
export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const titleId = `project-card-${index}-title`;

  return (
    <Reveal delay={Math.min(index * 0.07, 0.21)} className="h-full">
      <a
        href={project.href}
        aria-labelledby={titleId}
        className="group flex h-full flex-col overflow-hidden rounded-card border border-ink/[0.07] bg-white transition-colors duration-300 hover:border-ink/25"
      >
        <div className="relative">
          <div className="relative aspect-[16/10] overflow-hidden bg-ivory-deep">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />
            ) : project.overview ? (
              /* No genuine screenshot exists for this system, so the card
                 shows what IS documented: the daily-user proof number, the
                 real module list, and why there is no image. Deliberately
                 typed as a system overview — never dressed up as one. */
              <div
                className="@container flex h-full flex-col justify-between gap-1.5 bg-[#161513] p-3.5 text-ivory"
                role="img"
                aria-label={project.alt}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/60">
                  {project.overview.label}
                </p>

                <div>
                  {/* Sized by container width: the panel's box is a fixed
                      16:10 ratio, so cqw keeps the number in proportion at
                      every card width — 1 column on phone through 4 on
                      desktop — instead of overflowing the short boxes. */}
                  <p className="text-[clamp(30px,13cqw,52px)] font-extrabold leading-none tracking-tight tabular-nums">
                    {project.overview.proof.value}
                  </p>
                  <p className="mt-1 text-[12px] font-medium leading-snug text-white/70">
                    {project.overview.proof.label}
                  </p>
                </div>

                <ul
                  className="grid grid-cols-4 gap-1"
                  aria-label={`${project.title} modules`}
                >
                  {project.overview.modules.map((module) => (
                    <li
                      key={module}
                      className="rounded-md border border-white/10 bg-white/[0.06] px-0.5 py-1 text-center text-[10.5px] font-semibold leading-tight text-white/85"
                    >
                      {module}
                    </li>
                  ))}
                </ul>

                <p className="text-[10px] font-medium leading-snug text-white/45">
                  {project.overview.note}
                </p>
              </div>
            ) : (
              /* Defensive only: no image and no overview data. States the
                 fact plainly instead of promising a screenshot. */
              <div
                className="flex h-full flex-col items-center justify-center gap-2 p-4 text-center text-muted"
                role="img"
                aria-label={project.alt}
              >
                <IconDatabase className="h-7 w-7" />
                <p className="text-[12px] font-medium leading-snug">
                  No public preview
                </p>
              </div>
            )}
          </div>
          <span
            className="absolute -bottom-5 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink text-white shadow-[0_10px_24px_-10px_rgba(0,0,0,0.6)] transition-transform duration-300 group-hover:translate-x-[3px]"
            aria-hidden="true"
          >
            <IconArrowUpRight className="h-[18px] w-[18px]" />
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5 pt-7">
          <h3 id={titleId} className="text-[17px] font-bold tracking-tight">
            {project.title}
          </h3>
          <p className="mt-1.5 flex-1 text-[13.5px] leading-relaxed text-ink-soft">
            {project.description}
          </p>
          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${project.title} technologies`}>
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-ivory-deep px-2.5 py-1 text-[11.5px] font-semibold text-ink-soft"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </a>
    </Reveal>
  );
}
