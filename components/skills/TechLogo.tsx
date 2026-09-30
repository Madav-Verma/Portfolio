import type { CSSProperties } from "react";
import { logoMeta } from "./logo-meta";

type TechLogoProps = {
  slug: string;
  /** px square; defaults to 22 */
  size?: number;
  /** compact tooltip under the logo on hover/focus; defaults to label + category */
  tooltip?: string | null;
  className?: string;
};

/**
 * TechLogo — an official brand glyph rendered as a CSS mask so it behaves
 * like typography: monochrome `currentColor` by default, official brand
 * color on hover/focus, -2px lift. The accessible name is always present
 * (role="img" + aria-label); the tooltip is emphasis only, never the sole
 * source of information.
 */
export default function TechLogo({
  slug,
  size = 22,
  tooltip,
  className = "",
}: TechLogoProps) {
  const meta = logoMeta(slug);
  const tip =
    tooltip === null
      ? null
      : (tooltip ?? `${meta.label} · ${meta.category}`);
  const style = {
    width: size,
    height: size,
    ["--brand" as string]: meta.brand,
    WebkitMaskImage: `url(/logos/${slug}.svg)`,
    maskImage: `url(/logos/${slug}.svg)`,
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center",
    maskPosition: "center",
    WebkitMaskSize: "contain",
    maskSize: "contain",
  } as CSSProperties;

  return (
    <span className={`group/logo relative inline-flex ${className}`}>
      <span
        role="img"
        aria-label={meta.label}
        style={style}
        className="inline-block shrink-0 bg-current opacity-70 transition-all duration-200 group-hover/logo:-translate-y-0.5 group-hover/logo:bg-[var(--brand)] group-hover/logo:opacity-100 group-focus-within/logo:bg-[var(--brand)] group-focus-within/logo:opacity-100"
      />
      {tip ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-line bg-ink px-2 py-1 text-[11px] font-semibold tracking-tight text-ivory opacity-0 transition-opacity duration-200 group-hover/logo:opacity-100"
        >
          {tip}
        </span>
      ) : null}
    </span>
  );
}

/**
 * TechMark — typographic chip for stack entries that have no logo
 * (SQL, REST APIs, IndexedDB, DNS, SSL/TLS, CI, Power BI, …).
 */
export function TechMark({
  label,
  dark = false,
  className = "",
}: {
  label: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-1.5 text-[12.5px] font-bold tracking-tight transition-colors duration-200 ${
        dark
          ? "border-white/20 text-white/80"
          : "border-ink/15 text-ink-soft"
      } ${className}`}
    >
      {label}
    </span>
  );
}
