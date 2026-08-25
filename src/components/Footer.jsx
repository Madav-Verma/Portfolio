import { ArrowUpRight, EnvelopeSimple, DownloadSimple, GithubLogo, LinkedinLogo, Phone } from "@phosphor-icons/react";
import { PROFILE } from "../data.js";
import { useReveal } from "../hooks/useReveal.js";
import "./Footer.css";

export default function Footer() {
  const ref = useReveal();
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="contact" ref={ref} aria-label="Contact">
      <div className="sheet">
        <div className="footer__head" data-reveal>
          <a className="footer__mail link-draw" href={`mailto:${PROFILE.email}`}>
            {PROFILE.email}
          </a>
          <p className="footer__pitch">
            Have a product to ship, or a role where shipping matters?
            I read every message myself.
          </p>
        </div>

        <dl role="list" className="footer__grid" data-reveal style={{ "--d": 1 }}>
          <div className="footer__col">
            <dt className="caption footer__dt">Direct</dt>
            <dd>
              <a className="footer__link" href={`mailto:${PROFILE.email}`}>
                <EnvelopeSimple size={16} weight="regular" aria-hidden="true" />
                {PROFILE.email}
              </a>
              <a className="footer__link" href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}>
                <Phone size={16} weight="regular" aria-hidden="true" />
                {PROFILE.phone}
              </a>
            </dd>
          </div>

          <div className="footer__col">
            <dt className="caption footer__dt">Profiles</dt>
            <dd>
              <a className="footer__link" href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedinLogo size={16} weight="regular" aria-hidden="true" />
                LinkedIn
                <ArrowUpRight size={12} weight="bold" aria-hidden="true" className="footer__ext" />
              </a>
              <a className="footer__link" href={PROFILE.github} target="_blank" rel="noopener noreferrer">
                <GithubLogo size={16} weight="regular" aria-hidden="true" />
                GitHub
                <ArrowUpRight size={12} weight="bold" aria-hidden="true" className="footer__ext" />
              </a>
            </dd>
          </div>

          <div className="footer__col">
            <dt className="caption footer__dt">Documents</dt>
            <dd>
              <a className="footer__link" href={PROFILE.resume} target="_blank" rel="noopener noreferrer">
                <DownloadSimple size={16} weight="regular" aria-hidden="true" />
                Résumé (PDF)
              </a>
            </dd>
          </div>
        </dl>

        <div className="footer__base caption">
          <span>© {year} {PROFILE.name} · Faridabad, India (IST)</span>
        </div>
      </div>
    </footer>
  );
}
