import { useEffect, useRef, useState } from "react";
import { ArrowDown, DownloadSimple, EnvelopeSimple } from "@phosphor-icons/react";
import { HERO_META, PROFILE, PROOF_POINTS } from "../data.js";
import "./Hero.css";

export default function Hero() {
  const titleRef = useRef(null);
  const plateRef = useRef(null);
  const [dims, setDims] = useState(null); // real rendered measurements, px

  /* Dimension annotations are measured from the live layout after the
     intro settles — real numbers, never invented ones. No JS, no dims. */
  useEffect(() => {
    let raf = 0;
    let t = 0;
    const measure = () => {
      const lines = titleRef.current?.querySelectorAll(".hero__line-inner");
      const plateH = plateRef.current?.offsetHeight;
      let w = 0;
      lines?.forEach((l) => { w = Math.max(w, l.offsetWidth); });
      if (w && plateH) setDims({ w, h: plateH });
    };
    const start = () => {
      raf = requestAnimationFrame(() => { t = setTimeout(measure, 1250); });
    };
    if (document.fonts?.ready) document.fonts.ready.then(start);
    else start();
    return () => { cancelAnimationFrame(raf); clearTimeout(t); };
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

        {dims && (
          <span
            className="hero__dim hero__dim--h"
            style={{ "--w": `${dims.w}px` }}
            aria-hidden="true"
          >
            <i className="hero__dim-tick" />
            <i className="hero__dim-line" />
            <i className="hero__dim-tick" />
            <span className="hero__dim-label">{dims.w} PX</span>
          </span>
        )}

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
          <a
            className="btn btn--ghost"
            href={PROFILE.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download résumé
            <DownloadSimple size={16} weight="bold" aria-hidden="true" />
          </a>
        </div>

        <dl
          className="hero__proof"
          data-load
          style={{ "--d": 7 }}
          aria-label="Key proof points"
        >
          {PROOF_POINTS.map((p) => (
            <div key={p.k} className="hero__proof-item">
              <dt className="caption hero__proof-label">{p.k}</dt>
              <dd className="hero__proof-value">{p.v}</dd>
            </div>
          ))}
        </dl>

        <p className="hero__avail caption" data-load style={{ "--d": 8 }}>
          {PROFILE.location} · IST (UTC+5:30) · {PROFILE.status}
        </p>

        <div className="hero__rail" data-load style={{ "--d": 9 }} aria-label="Product evidence">
          <a className="hero__rail-item" href="#work">
            <img
              src="/screenshots/prokon-website-catalogue.png"
              alt="Prokon Hi-Tech product catalogue interface with filter sidebar and model grid"
              width="900"
              height="562"
              loading="lazy"
              decoding="async"
            />
            <span className="caption hero__rail-caption">Catalogue — 96 models, faceted search</span>
          </a>
          <a className="hero__rail-item" href="#work">
            <img
              src="/screenshots/prokon-website-product.png"
              alt="Prokon Hi-Tech product detail page with gallery, price box and specification table"
              width="900"
              height="562"
              loading="lazy"
              decoding="async"
            />
            <span className="caption hero__rail-caption">Product page — 60+ spec rows</span>
          </a>
          <a className="hero__rail-item" href="#work">
            <img
              src="/screenshots/prokon-website-chatbot.png"
              alt="Prokon Assistant chat panel with grounded product answers and quick replies"
              width="900"
              height="562"
              loading="lazy"
              decoding="async"
            />
            <span className="caption hero__rail-caption">Assistant — grounded answers</span>
          </a>
        </div>
      </div>

      <figure className="hero__plate" data-load style={{ "--d": 7 }} ref={plateRef}>
        <div className="hero__plate-frame">
          <span className="ruler hero__plate-ruler" aria-hidden="true" />
           <img
             src="/photo.jpg"
             alt={`Portrait of ${PROFILE.name}`}
             width="320"
             height="320"
              loading="eager"
              fetchpriority="high"
             decoding="async"
           />
        </div>
        <figcaption className="hero__plate-caption">
          <span>Fig. A — {PROFILE.name}</span>
          <span>{PROFILE.positioning}</span>
        </figcaption>
        <dl className="hero__meta caption">
          {HERO_META.map((m) => (
            <div key={m.k} className="hero__meta-row">
              <dt>{m.k}</dt>
              <dd>{m.v}</dd>
            </div>
          ))}
        </dl>

        {dims && (
          <span className="hero__dim hero__dim--v" aria-hidden="true">
            <i className="hero__dim-tick" />
            <i className="hero__dim-line" />
            <i className="hero__dim-tick" />
            <span className="hero__dim-label">{dims.h} PX</span>
          </span>
        )}
      </figure>
    </section>
  );
}
