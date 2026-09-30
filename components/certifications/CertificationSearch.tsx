import { certificationArchive } from "@/data/certifications";

/**
 * CertificationSearch — a compact minimal input. Matches title, provider,
 * category and year; case-insensitive. Full width on mobile.
 */
export default function CertificationSearch({
  value,
  onChange,
}: {
  value: string;
  onChange: (query: string) => void;
}) {
  return (
    <div className="w-full sm:max-w-[320px]">
      <label htmlFor="cert-search" className="sr-only">
        {certificationArchive.searchPlaceholder}
      </label>
      <input
        id="cert-search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={certificationArchive.searchPlaceholder}
        autoComplete="off"
        className="h-11 w-full rounded-btn border border-line bg-white px-4 text-[14.5px] text-ink placeholder:text-muted/70 transition-colors focus:border-ink/40 focus:outline-none"
      />
    </div>
  );
}
