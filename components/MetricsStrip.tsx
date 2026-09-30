import { metrics, metricsNote } from "@/data/site";
import Reveal from "./Reveal";
import { IconBox, IconCode, IconFolder, IconGrid, IconUsers } from "./icons";

const metricIcons: Record<string, (props: { className?: string }) => React.ReactNode> = {
  box: IconBox,
  users: IconUsers,
  grid: IconGrid,
  folder: IconFolder,
  code: IconCode,
};

/**
 * MetricsStrip — proof-of-work band directly under the hero.
 * Warm-white, 5 metric groups with hairline dividers + the team-use note.
 */
export default function MetricsStrip() {
  return (
    <section aria-label="Key metrics" className="border-b border-line bg-white">
      <Reveal className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 py-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-12">
        <dl className="grid flex-1 grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 lg:grid-cols-5 lg:gap-0 lg:divide-x lg:divide-line">
          {metrics.map((metric) => {
            const Icon = metricIcons[metric.icon] ?? IconBox;
            return (
              <div key={metric.label} className="flex items-center gap-3 lg:justify-center lg:px-6 lg:first:justify-start lg:first:pl-0">
                <Icon className="h-5 w-5 shrink-0 text-ink/50" />
                <div>
                  <dt className="order-2 text-[12.5px] font-medium leading-tight text-muted">
                    {metric.label}
                  </dt>
                  <dd className="order-1 text-[25px] font-extrabold leading-none tracking-tight tabular-nums">
                    {metric.value}
                  </dd>
                </div>
              </div>
            );
          })}
        </dl>

        <div className="flex shrink-0 items-center gap-3 border-t border-line pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <div className="flex -space-x-2" aria-hidden="true">
            {["bg-ink", "bg-accent", "bg-ink-soft"].map((tone) => (
              <span
                key={tone}
                className={`h-8 w-8 rounded-full border-2 border-white ${tone}`}
              />
            ))}
          </div>
          <div>
            <p className="text-[13px] font-semibold leading-tight">
              {metricsNote.main}
              <br />
              <span className="font-medium text-muted">{metricsNote.sub}</span>
            </p>
            <p className="font-hand text-[19px] font-semibold leading-tight text-ink">
              {metricsNote.handwritten}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
