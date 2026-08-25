import { CAPABILITIES } from "../data.js";
import { useReveal } from "../hooks/useReveal.js";
import "./Capabilities.css";

export default function Capabilities() {
  const ref = useReveal();

  return (
    <section className="section" id="capabilities" ref={ref} aria-label="Capabilities">
      <div className="sheet">
        <header className="plate-head" data-reveal>
          <h2>Capabilities.</h2>
          <p className="plate-meta">
            <span>{CAPABILITIES.length} domains</span>
            <span>Production-tested</span>
          </p>
        </header>

        <div className="caps" data-reveal>
          {CAPABILITIES.map((c) => (
            <article key={c.domain} className="caps__row">
              <h3 className="caps__domain">{c.domain}</h3>
              <p className="caps__focus">{c.focus}</p>
              <p className="caption caps__tools">
                {c.tools.map((t, i) => (
                  <span key={t}>
                    {t}
                    {i < c.tools.length - 1 && <span className="caps__sep"> · </span>}
                  </span>
                ))}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
