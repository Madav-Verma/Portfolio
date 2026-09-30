import ProjectReveal from "./ProjectReveal";
import { IconArrowRight, IconMail } from "../icons";
import { projectsClosing } from "@/data/projects";

/**
 * ProjectsClosingCTA — centred dark closing statement in the same voice
 * as the other pages' CTAs. Owns id="contact" for this page.
 */
export default function ProjectsClosingCTA() {
  return (
    <section
      id="contact"
      aria-labelledby="projects-closing"
      className="bg-[#161513] text-ivory"
    >
      <ProjectReveal className="mx-auto max-w-[1440px] px-5 py-16 text-center sm:px-8 md:py-24 lg:px-12">
        <h2
          id="projects-closing"
          className="mx-auto max-w-[720px] text-[clamp(30px,4vw,54px)] font-extrabold leading-[1.08] tracking-tight text-balance"
        >
          {projectsClosing.headingA}
          <br />
          {projectsClosing.headingB}
        </h2>
        <p className="mx-auto mt-5 max-w-[480px] text-[16px] leading-[1.55] text-white/70">
          {projectsClosing.text}
        </p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <a
            href={projectsClosing.cta.href}
            className="group inline-flex h-12 items-center gap-2 rounded-btn bg-ivory px-6 text-[15px] font-semibold text-ink transition-colors duration-300 hover:bg-white"
          >
            {projectsClosing.cta.label}
            <IconArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href={`mailto:${projectsClosing.email}`}
            className="inline-flex items-center gap-2 text-[14.5px] font-medium text-white/75 underline decoration-white/25 underline-offset-4 transition-colors hover:text-white"
          >
            <IconMail className="h-4 w-4" />
            {projectsClosing.email}
          </a>
        </div>
      </ProjectReveal>
    </section>
  );
}
