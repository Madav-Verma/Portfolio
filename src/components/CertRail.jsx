import { ArrowUpRight } from "@phosphor-icons/react";
import { CERTS_OTHER, CERTS_VERIFIED, CERTIFICATIONS } from "../data.js";
import { useReveal } from "../hooks/useReveal.js";
import "./CertRail.css";

export default function CertRail() {
  const ref = useReveal();

  return (
    <section
      className="section"
      id="credentials"
      ref={ref}
      aria-label="Certifications"
    >
      <div className="sheet">
        <header className="plate-head" data-reveal>
          <h2>Credentials.</h2>
          <p className="plate-meta">
            <span>{CERTS_VERIFIED.length} verifiable</span>
            <span>{CERTIFICATIONS.length} total</span>
            <span>2023 — 2026</span>
          </p>
        </header>
      </div>

      <div
        className="certs sheet"
        role="group"
        aria-label="Certificate wall"
      >
        {CERTS_VERIFIED.map((c, i) => {
          const no = String(i + 1).padStart(2, "0");
          /* Frame-by-frame assembly: the reveal engine staggers on --d. */
          const reveal = { "data-reveal": "", style: { "--d": i } };
          return (
            <a
              key={c.title}
              className="certs__card"
              href={c.verify}
              target="_blank"
              rel="noopener noreferrer"
              {...reveal}
            >
              <span className="certs__no" aria-hidden="true">{no}</span>
              <img src={c.img} alt={`${c.title} certificate`} width="640" height="494" loading="lazy" />
              <figcaption className="certs__caption">
                <span className="certs__title">{c.title}</span>
                <span className="caption">
                  {c.org} · {c.year}
                </span>
              </figcaption>
              <span className="certs__verify caption">
                <span className="certs__verify-label">Verify credential</span>
                <ArrowUpRight size={12} weight="bold" aria-hidden="true" />
              </span>
            </a>
          );
        })}
      </div>

      {CERTS_OTHER.length > 0 && (
        <div className="certs__appendix sheet" data-reveal>
          <p className="caption certs__appendix-k">
            {CERTS_OTHER.length} additional certificates
          </p>
          <ul role="list" className="certs__list">
            {CERTS_OTHER.map((c, i) => {
              const no = String(i + 1).padStart(2, "0");
              return (
                <li key={c.title} className="certs__entry">
                  <span className="certs__entry-no" aria-hidden="true">{no}</span>
                  <span className="certs__entry-main">
                    <span className="certs__entry-title">{c.title}</span>
                    <span className="caption certs__entry-org">{c.org}</span>
                  </span>
                  <span className="caption certs__entry-year">{c.year}</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
}
