"use client";

import { useState } from "react";
import ProjectFilter from "./ProjectFilter";
import ProjectCaseStudy from "./ProjectCaseStudy";
import ProjectReveal from "./ProjectReveal";
import {
  caseStudies,
  projectFilters,
  type ProjectFilterKey,
} from "@/data/projects";

/**
 * ProjectsShowcase — owns the filter state and renders the alternating
 * case-study chapters. Filtering show/hides matching projects; every
 * filter in the set returns at least one project, so there are no dead
 * filter states.
 */
export default function ProjectsShowcase() {
  const [active, setActive] = useState<ProjectFilterKey>("all");
  const visible =
    active === "all"
      ? caseStudies
      : caseStudies.filter((study) => study.tags.includes(active));

  return (
    <section
      aria-label="Project case studies"
      className="border-y border-line bg-white"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 md:py-16 lg:px-12">
        <ProjectReveal>
          <ProjectFilter
            filters={projectFilters}
            active={active}
            onChange={setActive}
          />
        </ProjectReveal>
        <p aria-live="polite" className="sr-only">
          Showing {visible.length} of {caseStudies.length} projects
        </p>
        <div className="mt-10 md:mt-14">
          {visible.map((study) => (
            <ProjectCaseStudy key={study.n} study={study} />
          ))}
        </div>
      </div>
    </section>
  );
}
