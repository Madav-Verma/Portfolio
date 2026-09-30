import { projects, projectsIntro } from "@/data/site";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import { IconArrowRight } from "./icons";

/**
 * ProjectsSection — four project cards in one dense row on desktop.
 */
export default function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="featured-projects" className="bg-ivory">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 md:py-20 lg:px-12">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              {projectsIntro.label}
            </p>
            <h2
              id="featured-projects"
              className="mt-3 max-w-[560px] text-[clamp(30px,3.2vw,44px)] font-extrabold leading-[1.04] tracking-tight text-balance"
            >
              {projectsIntro.heading}
            </h2>
          </div>
          <a
            href={projectsIntro.all.href}
            className="group inline-flex items-center gap-2 text-[14px] font-semibold text-ink transition-colors hover:text-accent"
          >
            {projectsIntro.all.label}
            <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-10 xl:grid-cols-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
