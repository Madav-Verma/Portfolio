import { useEffect } from "react";
import { PROCESS } from "../data.js";
import { useReveal } from "../hooks/useReveal.js";
import "./Process.css";

export default function Process() {
  const ref = useReveal();

  /* Plotter trace: section scroll progress drives a CSS var (--p) that
     draws the accent hairline and travels the square plotter head.
     One rAF-throttled style write per frame — no re-renders, no deps.
     Without JS the base hairline shows exactly as before. */
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        // 0 as the section enters, 1 once its bottom reaches mid-viewport —
        // the draw lasts the whole read instead of saturating on arrival.
        const p = Math.min(
          1,
          Math.max(0, (vh * 0.85 - rect.top) / (rect.height + vh * 0.4)),
        );
        el.style.setProperty("--p", p.toFixed(3));
        if (p > 0 && p < 1) el.setAttribute("data-tracing", "");
        else el.removeAttribute("data-tracing");
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      cancelAnimationFrame(raf);
    };
  }, [ref]);

  return (
    <section className="section" id="process" ref={ref} aria-label="Process">
      <div className="sheet">
        <header className="plate-head" data-reveal>
          <h2>{PROCESS.title}</h2>
          <p className="plate-meta">
            <span>One loop</span>
            <span>{PROCESS.steps.length} phases</span>
            <span>No rubber-stamping</span>
          </p>
        </header>

        <p className="process__intro" data-reveal>
          {PROCESS.intro}
        </p>

        <ol role="list" className="process__loop">
          <span className="process__head" aria-hidden="true" />
          {PROCESS.steps.map((s, i) => (
            <li
              key={s.step}
              className="process__step"
              data-reveal
              style={{ "--d": i }}
            >
              <div className="process__node" aria-hidden="true">
                <span className="process__step-no">{s.step}</span>
              </div>
              <h3 className="process__label">{s.label}</h3>
              <p className="process__desc">{s.desc}</p>
              <code className="process__trace caption">{s.trace}</code>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
