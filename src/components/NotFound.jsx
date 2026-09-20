import { ArrowUpRight, EnvelopeSimple } from "@phosphor-icons/react";
import { PROFILE } from "../data.js";

/**
 * Soft 404 for a single-sheet SPA. The host rewrites unknown paths to this
 * bundle (see vercel.json), so a mistyped URL would otherwise render home
 * with no explanation. Visible immediately (no reveal attrs).
 */
export default function NotFound() {
  const path = typeof window !== "undefined" ? window.location.pathname : "/";
  if (path === "/" || path === "/index.html") return null;

  return (
    <section className="section" aria-label="Page not found">
      <div className="sheet">
        <header className="plate-head">
          <h2>Sheet not found.</h2>
          <p className="plate-meta">
            <span>404</span>
            <span>{path.length > 28 ? `…${path.slice(-27)}` : path}</span>
          </p>
        </header>
        <p className="notfound__copy">
          This portfolio is a single sheet — there is nothing filed under that
          reference. The selected work starts at the top.
        </p>
        <div className="notfound__actions">
          <a className="btn" href="/">
            Back to the sheet
            <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
          </a>
          <a className="btn btn--ghost" href={`mailto:${PROFILE.email}`}>
            Email me instead
            <EnvelopeSimple size={16} weight="bold" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
