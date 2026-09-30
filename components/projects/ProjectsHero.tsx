import Image from "next/image";
import Navbar from "../Navbar";
import ProjectReveal from "./ProjectReveal";
import { projectsHero, projectsProof } from "@/data/projects";

/**
 * ProjectsHero — compact editorial introduction (~440px desktop), not a
 * second full-screen hero. Left: label + display heading + paragraph +
 * the 04-project proof line. Right: a quiet aligned mosaic — one large
 * crop with two small crops stacked beside it, never an overlapping pile
 * and never dominant over the heading.
 */
export default function ProjectsHero() {
  return (
    <section aria-label="Selected work introduction" className="bg-ivory">
      <Navbar active="Projects" ctaHref="#contact" />
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 px-5 pb-10 pt-28 sm:px-8 md:pt-28 lg:grid-cols-2 lg:gap-14 lg:px-12 lg:pb-10">
        <div>
          <ProjectReveal>
            <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
              <span
                className="h-1.5 w-1.5 rounded-full bg-accent"
                aria-hidden="true"
              />
              {projectsHero.label}
            </p>
            <h1 className="mt-3 max-w-[560px] text-[clamp(40px,4.4vw,64px)] font-extrabold leading-[1.0] tracking-tight text-balance">
              {projectsHero.headingA}
              <br />
              {projectsHero.headingB}
            </h1>
            <p className="mt-4 max-w-[600px] text-[16px] leading-[1.6] text-ink-soft md:text-[17px]">
              {projectsHero.text}
            </p>
          </ProjectReveal>
          <ProjectReveal
            delay={0.08}
            className="mt-6 flex items-baseline gap-4 border-t border-line pt-5"
          >
            <p className="text-[clamp(30px,3vw,40px)] font-extrabold leading-none tracking-tight tabular-nums">
              {projectsProof.count}
            </p>
            <div>
              <p className="text-[14px] font-bold">{projectsProof.label}</p>
              <p className="mt-1 max-w-[420px] text-[13.5px] leading-relaxed text-muted">
                {projectsProof.text}
              </p>
            </div>
          </ProjectReveal>
        </div>

        <ProjectReveal delay={0.1} image>
          <div
            className="grid grid-cols-2 items-center gap-3"
            role="img"
            aria-label="Screenshots of two featured projects"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-card border border-ink/10 bg-ivory-deep">
              <Image
                src={projectsHero.collage.large.src}
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) 50vw, 22vw"
                className="object-cover"
              />
            </div>
            {projectsHero.collage.small.map((shot) => (
              <div
                key={shot.src}
                className="relative aspect-[16/10] overflow-hidden rounded-card border border-ink/10 bg-ivory-deep"
              >
                <Image
                  src={shot.src}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 50vw, 16vw"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          <p className="mt-3 text-[12.5px] font-medium text-muted">
            Real screenshots from two of the four featured systems.
          </p>
        </ProjectReveal>
      </div>
    </section>
  );
}
