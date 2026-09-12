import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, CopySimple, EnvelopeSimple, DownloadSimple, GithubLogo, LinkedinLogo, Phone } from "@phosphor-icons/react";
import { PROFILE } from "../data.js";
import { useReveal } from "../hooks/useReveal.js";
import "./Footer.css";

export default function Footer() {
  const ref = useReveal();
  const year = new Date().getFullYear();
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  /* Copy-email micro-delight: the stamp motif acknowledges the action.
     Clipboard failure falls back to the mailto the visitor already has. */
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
      return;
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  };

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
              <button
                type="button"
                className={`footer__link footer__copy ${copied ? "is-copied" : ""}`}
                onClick={copyEmail}
                aria-live="polite"
              >
                {copied ? (
                  <span key="on" className="footer__copy-inner">
                    <Check size={16} weight="bold" aria-hidden="true" />
                    Copied to clipboard
                  </span>
                ) : (
                  <span key="off" className="footer__copy-inner">
                    <CopySimple size={16} weight="regular" aria-hidden="true" />
                    Copy email
                  </span>
                )}
              </button>
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
          <span>© {year} {PROFILE.name} · Faridabad, India (IST) · {PROFILE.status}</span>
        </div>
      </div>
    </footer>
  );
}
