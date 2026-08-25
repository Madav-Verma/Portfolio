import { PROCESS } from "../data.js";
import { useReveal } from "../hooks/useReveal.js";
import "./Process.css";

export default function Process() {
  const ref = useReveal();

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
