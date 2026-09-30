import {
  certificationCategories,
  type CertificationCategory,
} from "@/data/certifications";

/**
 * CertificationFilters — the category row above the grid. Active = ink
 * text with a small underline; inactive = muted gray. Horizontally
 * scrollable on mobile, never wrapped into rows.
 */
export default function CertificationFilters({
  active,
  onChange,
}: {
  active: "All" | CertificationCategory;
  onChange: (category: "All" | CertificationCategory) => void;
}) {
  return (
    <div
      role="group"
      aria-label="Filter certifications by category"
      className="-mx-5 overflow-x-auto px-5 pb-1 sm:mx-0 sm:px-0"
    >
      <ul className="flex w-max items-center gap-6 sm:w-auto sm:flex-wrap">
        {certificationCategories.map((category) => {
          const isActive = category === active;
          return (
            <li key={category} className="shrink-0">
              <button
                type="button"
                onClick={() => onChange(category)}
                aria-pressed={isActive}
                className={`relative pb-1.5 text-[12.5px] font-bold uppercase tracking-[0.12em] transition-colors duration-200 ${
                  isActive
                    ? "text-ink after:absolute after:inset-x-0 after:bottom-0 after:h-[2px] after:bg-ink"
                    : "text-muted hover:text-ink"
                }`}
              >
                {category}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
