import { useEffect, useRef, useState } from "react";
import { ArrowDown, DownloadSimple, EnvelopeSimple } from "@phosphor-icons/react";
import { HERO_META, PROFILE, PROOF_POINTS } from "../data.js";
import "./Hero.css";

export default function Hero() {
  const titleRef = useRef(null);
  const plateRef = useRef(null); // workbench root: dims anchor + parallax field
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

  /* Workbench parallax: pointer drift per layer (±4–8px) + scroll drift at
     two rates (back 0.08, main 0.04, inset rides static). rAF loop with
     lerp, direct style writes, no React state, transform only. Fine
     pointers with no-preference motion only — touch and reduced-motion
     get a static stack. */
  useEffect(() => {
    const bench = plateRef.current;
    if (!bench) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (!window.matchMedia("(prefers-reduced-motion: no-preference)").matches) return;
    const layers = Array.from(bench.querySelectorAll(".hero__sheet[data-depth]"));
    if (layers.length === 0) return;

    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    let lift = 0;
    let liftT = 0;
    let raf = 0;
    let running = false;

    const render = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      lift += (liftT - lift) * 0.12;
      for (const el of layers) {
        const d = Number(el.dataset.depth) || 4;
        const r = Number(el.dataset.scroll) || 0;
        const x = cx * d;
        const y = cy * d + lift * r;
        el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`;
      }
      const settled =
        Math.abs(tx - cx) < 0.01 &&
        Math.abs(ty - cy) < 0.01 &&
        Math.abs(liftT - lift) < 0.01;
      if (settled) {
        running = false;
        raf = 0;
        return;
      }
      raf = requestAnimationFrame(render);
    };
    const kick = () => {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(render);
      }
    };

    const onMove = (e) => {
      const b = bench.getBoundingClientRect();
      if (!b.width || !b.height) return;
      tx = Math.max(-1, Math.min(1, ((e.clientX - b.left) / b.width) * 2 - 1));
      ty = Math.max(-1, Math.min(1, ((e.clientY - b.top) / b.height) * 2 - 1));
      kick();
    };
    const onLeave = () => {
      tx = 0;
      ty = 0;
      kick();
    };
    const onScroll = () => {
      const b = bench.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const centre = b.top + b.height / 2 - vh / 2;
      liftT = Math.max(-120, Math.min(120, -centre));
      kick();
    };

    bench.addEventListener("mousemove", onMove);
    bench.addEventListener("mouseleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      bench.removeEventListener("mousemove", onMove);
      bench.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
      running = false;
      for (const el of layers) el.style.transform = "";
    };
  }, []);

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
      </div>

      <figure
        className="hero__bench"
        data-load
        style={{ "--d": 7 }}
        ref={plateRef}
        aria-label="Drafting table with product evidence"
      >
        <div className="hero__bench-stage">
          <figure
            className="hero__sheet hero__sheet--back"
            data-depth="8"
            data-scroll="0.08"
          >
            <div className="hero__sheet-frame">
              <img
                src="/screenshots/prokon-website-chatbot.png"
                alt="Prokon Assistant chat panel with grounded product answers and quick replies"
                width="900"
                height="562"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption className="caption hero__sheet-caption">
              Assistant — grounded answers, lead capture
            </figcaption>
          </figure>

          <figure
            className="hero__sheet hero__sheet--main"
            data-depth="4"
            data-scroll="0.04"
          >
            <div className="hero__sheet-frame">
              <span className="ruler hero__sheet-ruler" aria-hidden="true" />
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

          <figure
            className="hero__sheet hero__sheet--inset"
            data-depth="6"
            data-scroll="0"
            tabIndex={0}
          >
            <div className="hero__sheet-frame">
              <img
                src="/photo.jpg"
                srcSet="/photo.webp 380w, /photo@2x.webp 760w"
                sizes="(max-width: 760px) 140px, 160px"
                alt={`Portrait of ${PROFILE.name}`}
                width="380"
                height="380"
                loading="eager"
                decoding="async"
              />
            </div>
            <figcaption className="caption hero__sheet-caption">
              <span>Fig. A — {PROFILE.name}</span>
              <span>{PROFILE.positioning}</span>
            </figcaption>
            <span className="hero__note hero__note--a" aria-hidden="true">
              Applied AI — agentic loop
            </span>
            <span className="hero__note hero__note--b" aria-hidden="true">
              Forward-deployed — ships on site
            </span>
          </figure>
        </div>

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
