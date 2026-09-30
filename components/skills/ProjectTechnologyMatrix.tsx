import SkillReveal from "./SkillReveal";
import { IconArrowUpRight } from "../icons";
import { projectMatrix } from "@/data/skills";

/**
 * ProjectTechnologyMatrix — rows are projects, columns are stack layers,
 * dots mark documented use only. No percentages, no skill levels.
 * A real table on desktop; stacked labelled rows on mobile.
 * Each project name links to its /projects case study.
 */
export default function ProjectTechnologyMatrix() {
  return (
    <section
      aria-labelledby="project-matrix"
      className="border-y border-line bg-white"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 md:py-20 lg:px-12">
        <SkillReveal className="max-w-[640px]">
          <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {projectMatrix.label}
          </p>
          <h2
            id="project-matrix"
            className="mt-4 text-[clamp(30px,3.2vw,44px)] font-extrabold leading-[1.05] tracking-tight text-balance"
          >
            {projectMatrix.headingA}
            <br />
            {projectMatrix.headingB}
          </h2>
          <p className="mt-4 max-w-[520px] text-[15px] leading-relaxed text-ink-soft">
            {projectMatrix.note}
          </p>
        </SkillReveal>

        {/* desktop matrix */}
        <SkillReveal delay={0.08} className="mt-10 hidden md:block">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">
              Documented technology use across four projects
            </caption>
            <thead>
              <tr className="border-b border-line">
                <th scope="col" className="sr-only">
                  Project
                </th>
                {projectMatrix.columns.map((column) => (
                  <th
                    key={column}
                    scope="col"
                    className="px-3 pb-3 text-center text-[11.5px] font-bold uppercase tracking-[0.12em] text-muted"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {projectMatrix.rows.map((row) => (
                <tr key={row.project} className="border-b border-line last:border-b-0">
                  <th scope="row" className="py-5 pr-4">
                    <p className="text-[16px] font-extrabold tracking-tight">
                      <a
                        href={row.href}
                        className="group inline-flex min-h-11 items-center gap-1.5 text-[16px] font-extrabold tracking-tight transition-colors duration-200 hover:text-accent"
                      >
                        {row.project}
                        <IconArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100" aria-hidden="true" />
                      </a>
                    </p>
                    <p className="mt-1 text-[13px] font-medium text-muted">
                      {row.tech.join("  ·  ")}
                    </p>
                  </th>
                  {row.cells.map((active, index) => (
                    <td key={index} className="px-3 py-5 text-center">
                      <span
                        aria-label={`${projectMatrix.columns[index]}: ${active ? "used" : "not documented"}`}
                        role="img"
                        className={`inline-block h-2.5 w-2.5 rounded-full ${
                          active ? "bg-accent" : "border border-ink/20"
                        }`}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </SkillReveal>

        {/* mobile stacked rows */}
        <div className="mt-8 space-y-4 md:hidden">
          {projectMatrix.rows.map((row, rowIndex) => (
            <SkillReveal key={row.project} delay={rowIndex * 0.04}>
              <div className="rounded-panel border border-line bg-ivory p-5">
                <p className="text-[16px] font-extrabold tracking-tight">
                  <a
                    href={row.href}
                    className="group inline-flex min-h-11 items-center gap-1.5 text-[16px] font-extrabold tracking-tight transition-colors duration-200 hover:text-accent"
                  >
                    {row.project}
                    <IconArrowUpRight className="h-3.5 w-3.5 shrink-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100" aria-hidden="true" />
                  </a>
                </p>
                <p className="mt-1 text-[13px] font-medium text-muted">
                  {row.tech.join("  ·  ")}
                </p>
                <ul className="mt-4 space-y-2 border-t border-line pt-4">
                  {row.cells.map((active, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between text-[13.5px] font-semibold"
                    >
                      <span className="text-ink-soft">
                        {projectMatrix.columns[index]}
                      </span>
                      <span
                        aria-label={`${projectMatrix.columns[index]}: ${active ? "used" : "not documented"}`}
                        role="img"
                        className={`inline-block h-2.5 w-2.5 rounded-full ${
                          active ? "bg-accent" : "border border-ink/20"
                        }`}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </SkillReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
