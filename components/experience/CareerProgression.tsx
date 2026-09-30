import ExperienceReveal from "./ExperienceReveal";
import { careerProgression } from "@/data/experience";

/**
 * CareerProgression — scope expansion without inventing a linear story.
 * Layers, an accessible coverage matrix, and FROM→TO summaries. Dots mark
 * documented areas only; the table text always names the state.
 */
export default function CareerProgression() {
  return (
    <section aria-labelledby="career-progression" className="border-y border-line bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 md:py-20 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
          <ExperienceReveal>
            <p className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              {careerProgression.label}
            </p>
            <h2
              id="career-progression"
              className="mt-4 max-w-[560px] text-[clamp(30px,3.2vw,44px)] font-extrabold leading-[1.05] tracking-tight text-balance"
            >
              {careerProgression.headingA}
              <br />
              {careerProgression.headingB}
            </h2>
            <p className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-ink-soft">
              {careerProgression.note}
            </p>
          </ExperienceReveal>

          <ExperienceReveal delay={0.08}>
            <ol className="divide-y divide-line border-y border-line">
              {careerProgression.layers.map((layer) => (
                <li key={layer.period} className="grid grid-cols-[128px_1fr] items-baseline gap-4 py-4">
                  <p className="text-[15px] font-extrabold tracking-tight tabular-nums">
                    {layer.period}
                  </p>
                  <p className="text-[14.5px] font-medium leading-snug text-ink-soft">
                    {layer.focus}
                  </p>
                </li>
              ))}
            </ol>
          </ExperienceReveal>
        </div>

        <ExperienceReveal>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <caption className="sr-only">
                Documented areas of engineering work by period
              </caption>
              <thead>
                <tr className="border-b border-line text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">
                  <th scope="col" className="py-3 pr-4 font-semibold">
                    Period
                  </th>
                  {careerProgression.matrixColumns.map((column) => (
                    <th key={column} scope="col" className="px-4 py-3 font-semibold">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {careerProgression.matrix.map((row) => (
                  <tr key={row.period} className="border-b border-line last:border-b-0">
                    <th scope="row" className="py-4 pr-4 text-[14.5px] font-extrabold tabular-nums">
                      {row.period}
                    </th>
                    {row.cells.map((active, index) => (
                      <td key={`${row.period}-${careerProgression.matrixColumns[index]}`} className="px-4 py-4">
                        {active ? (
                          <span className="inline-flex items-center gap-2 text-[14px] font-bold">
                            <span aria-hidden="true" className="text-[16px] leading-none text-ink">
                              ●
                            </span>
                            <span className="sr-only">Documented work</span>
                            <span aria-hidden="true" className="hidden sm:inline text-muted">
                              Documented
                            </span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-2 text-[14px] text-muted">
                            <span aria-hidden="true" className="text-[16px] leading-none text-line">
                              ○
                            </span>
                            <span className="sr-only">No documented work</span>
                            <span aria-hidden="true" className="hidden sm:inline">
                              —
                            </span>
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ExperienceReveal>

        <ExperienceReveal delay={0.05}>
          <ul className="mt-10 grid gap-x-10 gap-y-6 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {careerProgression.expanded.map((pair) => (
              <li key={pair.from}>
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">
                  From
                </p>
                <p className="mt-1 text-[15px] font-bold tracking-tight">{pair.from}</p>
                <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">
                  To
                </p>
                <p className="mt-1 text-[15px] font-bold tracking-tight">{pair.to}</p>
              </li>
            ))}
          </ul>
        </ExperienceReveal>
      </div>
    </section>
  );
}
