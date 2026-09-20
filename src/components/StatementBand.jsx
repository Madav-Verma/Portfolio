import { useEffect, useRef, useState } from "react";
import { PROOF_POINTS } from "../data.js";
import { useReveal } from "../hooks/useReveal.js";
import "./StatementBand.css";

const reducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Verified facts from src/data.js — do not invent.
   PROOF_POINTS[0] = live apps ("2"), [1] = ERP staff ("10"),
   [2] = reporting saved ("15–20h": static "15–" + counted "20" + "h").
   "96" is a literal: it lives in PROJECTS (prokon-website metrics,
   "96 catalogue models") — awkward to derive, cited here. */
const FIGURES = [
  { label: "staff on the ERP daily", target: 10, prefix: "", suffix: "" },
  { label: "live production apps", target: 2, prefix: "", suffix: "" },
  { label: "reporting saved monthly", target: 20, prefix: "15–", suffix: "h" },
  { label: "catalogue models", target: 96, prefix: "", suffix: "" },
];

const finalText = (f) => `${f.prefix}${f.target}${f.suffix}`;

export default function StatementBand() {
  const ref = useReveal();
  const figuresRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [values, setValues] = useState(() =>
    reducedMotion() ? FIGURES.map(finalText) : FIGURES.map((f) => `${f.prefix}0${f.suffix}`),
  );

  useEffect(() => {
    const el = figuresRef.current;
    if (!el || started || reducedMotion()) {
      setStarted(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started || reducedMotion()) return undefined;
    let raf = 0;
    const t0 = performance.now();
    const dur = 1100;
    const tick = (t) => {
      const p = Math.min((t - t0) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setValues(FIGURES.map((f) => `${f.prefix}${Math.round(f.target * e)}${f.suffix}`));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started]);

  return (
    <section className="statement" aria-label="Proof" ref={ref}>
      <div className="sheet statement__inner">
        <h2 className="statement__claim" data-reveal>
          Production software, in daily use.
        </h2>
        <dl
          className="statement__figures"
          ref={figuresRef}
          data-reveal
          style={{ "--d": 1 }}
          aria-label="Key figures"
        >
          {FIGURES.map((f, i) => (
            <div className="statement__figure" key={f.label}>
              <dt className="statement__label">{f.label}</dt>
              <dd className="statement__value">{values[i]}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
