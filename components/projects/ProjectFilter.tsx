import type { ProjectFilterKey } from "@/data/projects";

/**
 * ProjectFilter — text-only filter buttons. Active: ink text with a small
 * accent underline. Inactive: muted gray. State lives in ProjectsShowcase.
 */
export default function ProjectFilter({
  filters,
  active,
  onChange,
}: {
  filters: { key: ProjectFilterKey; label: string }[];
  active: ProjectFilterKey;
  onChange: (key: ProjectFilterKey) => void;
}) {
  return (
    <div
      role="group"
      aria-label="Filter projects by category"
      className="flex flex-wrap gap-x-7 gap-y-2"
    >
      {filters.map((filter) => {
        const selected = active === filter.key;
        return (
          <button
            key={filter.key}
            type="button"
            aria-pressed={selected}
            onClick={() => onChange(filter.key)}
            className={`text-[12px] font-semibold uppercase tracking-[0.1em] transition-colors duration-200 ${
              selected
                ? "text-ink underline decoration-accent decoration-2 underline-offset-8"
                : "text-muted hover:text-ink"
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
