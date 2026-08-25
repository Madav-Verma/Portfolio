import { ArrowUpRight } from "@phosphor-icons/react";
import { CERTIFICATIONS } from "../data.js";
import { useReveal } from "../hooks/useReveal.js";
import "./CertRail.css";

export default function CertRail() {
  const ref = useReveal();
  const verifiable = CERTIFICATIONS.filter((c) => c.verify).length;

  return (
    <section className="section" id="credentials" ref={ref} aria-label="Certifications">
      <div className="sheet">
        <header className="plate-head" data-reveal>
          <h2>Credentials.</h2>
          <p className="plate-meta">
            <span>{CERTIFICATIONS.length} certifications</span>
            <span>{verifiable} verifiable</span>
            <span>2023 — 2026</span>
          </p>
        </header>
      </div>

      <div
        className="certs sheet"
        data-reveal
        role="group"
        aria-label="Certificate gallery — scrolls horizontally"
        tabIndex={0}
      >
        {CERTIFICATIONS.map((c) => {
          const media = (
            <>
              <img src={c.img} alt={`${c.title} certificate`} width="640" height="494" loading="lazy" />
              <figcaption className="certs__caption">
                <span className="certs__title">{c.title}</span>
                <span className="caption">
                  {c.org} · {c.year}
                </span>
              </figcaption>
            </>
          );

          return c.verify ? (
            <a
              key={c.title}
              className="certs__card"
              href={c.verify}
              target="_blank"
              rel="noopener noreferrer"
            >
              {media}
              <span className="certs__verify caption">
                Verify credential
                <ArrowUpRight size={12} weight="bold" aria-hidden="true" />
              </span>
            </a>
          ) : (
            <div key={c.title} className="certs__card">
              {media}
            </div>
          );
        })}
      </div>

      <p className="sheet caption certs__hint">Drag or scroll sideways →</p>
    </section>
  );
}
