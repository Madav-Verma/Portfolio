import { useEffect, useRef } from "react";
import { ArrowDown, EnvelopeSimple } from "@phosphor-icons/react";
import { PROFILE, PROOF_POINTS } from "../data.js";
import "./Hero.css";

export default function Hero() {
  const titleRef = useRef(null);

  /* Kinetic headline (W6b): word-level stagger inside the existing
     line-rise masks. Splits each .hero__line-inner's text into word
     spans on mount under no-preference motion only; reduced-motion and
     no-JS render the headline exactly as today. The <em> is wrapped as
     one unit — never split open. */
  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;
    if (title.classList.contains("is-words")) return;
    if (!window.matchMedia("(prefers-reduced-motion: no-preference)").matches) return;
    const inners = title.querySelectorAll(".hero__line-inner");
    if (inners.length === 0) return;
    let wi = 0;
    const doc = title.ownerDocument;
    inners.forEach((inner) => {
      Array.from(inner.childNodes).forEach((node) => {
        if (node.nodeType === 3) {
          if (!node.textContent || node.textContent.trim() === "") {
            node.remove();
            return;
          }
          const frag = doc.createDocumentFragment();
          node.textContent.split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) {
              frag.appendChild(doc.createTextNode(" "));
            } else {
              const s = doc.createElement("span");
              s.className = "hero__word";
              s.style.setProperty("--wi", String(wi));
              wi += 1;
              s.textContent = part;
              frag.appendChild(s);
            }
          });
          node.replaceWith(frag);
        } else if (node.nodeType === 1) {
          const s = doc.createElement("span");
          s.className = "hero__word";
          s.style.setProperty("--wi", String(wi));
          wi += 1;
          node.replaceWith(s);
          s.appendChild(node);
        }
      });
    });
    title.classList.add("is-words");
  }, []);

  return (
    <section className="hero sheet" id="top" aria-label="Introduction">
      <div className="hero__sweep" aria-hidden="true" />

      <div className="hero__copy">
        <p className="stamp stamp--live hero__status">
          <span className="live-dot" aria-hidden="true" />
          {PROFILE.status}
        </p>

        <h1 className="hero__title" ref={titleRef}>
          <span className="hero__line">
            <span className="hero__line-inner">Production software,</span>
          </span>
          <span className="hero__line">
            <span className="hero__line-inner">
              shipped <em className="hero__em">end&nbsp;to&nbsp;end.</em>
            </span>
          </span>
        </h1>

        <p className="hero__sub" data-load style={{ "--d": 5 }}>
          {PROFILE.subline}
        </p>

        <div className="hero__cta" data-load style={{ "--d": 6 }}>
          <a className="btn" href={`mailto:${PROFILE.email}`}>
            Email me
            <EnvelopeSimple size={16} weight="bold" aria-hidden="true" />
          </a>
          <a className="btn btn--ghost" href="#work">
            View selected work
            <ArrowDown size={16} weight="bold" aria-hidden="true" />
          </a>
        </div>

        <dl
          className="hero__proof"
          data-load
          style={{ "--d": 7 }}
          aria-label="Key proof points"
        >
          {PROOF_POINTS.slice(0, 3).map((p) => (
            <div key={p.k} className="hero__proof-item">
              <dt className="caption hero__proof-label">{p.k}</dt>
              <dd className="hero__proof-value">{p.v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <figure
        className="hero__bench"
        data-load
        style={{ "--d": 7 }}
        aria-label="Drafting table with product evidence"
      >
        <figure className="hero__sheet hero__sheet--main">
          <div className="hero__sheet-frame">
            <img
              src="/screenshots/prokon-website-catalogue.png"
              alt="Prokon Hi-Tech product catalogue interface with filter sidebar and model grid"
              width="900"
              height="562"
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />
          </div>
          <figcaption className="caption hero__sheet-caption">
            Catalogue — 96 models, faceted search
          </figcaption>
        </figure>

        <figure className="hero__sheet hero__sheet--portrait">
          <div className="hero__sheet-frame">
            <img
              src="/photo.jpg"
              srcSet="/photo.webp 380w, /photo@2x.webp 760w"
              sizes="(max-width: 760px) 140px, 180px"
              alt={`Portrait of ${PROFILE.name}`}
              width="380"
              height="380"
              loading="eager"
              decoding="async"
            />
          </div>
          <figcaption className="caption hero__sheet-caption">
            Fig. A — Daksh Verma · Applied AI · Forward-Deployed
          </figcaption>
        </figure>
      </figure>
    </section>
  );
}
