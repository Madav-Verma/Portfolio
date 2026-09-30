import TechLogo, { TechMark } from "./TechLogo";
import { logoMeta } from "./logo-meta";

/**
 * LogoList — a quiet row of real logos with visible names, plus optional
 * typographic wordmarks for entries that have no logo. Shared by every
 * domain section so logo treatment stays identical everywhere.
 */
export default function LogoList({
  logos = [],
  wordmarks = [],
  dark = false,
  size = 26,
  className = "",
}: {
  logos?: string[];
  wordmarks?: string[];
  dark?: boolean;
  size?: number;
  className?: string;
}) {
  return (
    <ul
      aria-label="Technologies"
      className={`flex flex-wrap items-center gap-x-5 gap-y-3 ${className}`}
    >
      {logos.map((slug) => (
        <li
          key={slug}
          className={`flex items-center gap-2 ${dark ? "text-ivory" : "text-ink"}`}
        >
          <TechLogo slug={slug} size={size} />
          <span
            className={`text-[13px] font-bold tracking-tight ${
              dark ? "text-white/75" : "text-ink-soft"
            }`}
          >
            {logoMeta(slug).label}
          </span>
        </li>
      ))}
      {wordmarks.map((mark) => (
        <li key={mark}>
          <TechMark label={mark} dark={dark} />
        </li>
      ))}
    </ul>
  );
}
