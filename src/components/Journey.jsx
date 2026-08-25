import { ABOUT, EDUCATION, EXPERIENCE } from "../data.js";
import { useReveal } from "../hooks/useReveal.js";
import "./Journey.css";

export default function Journey() {
  const ref = useReveal();

  return (
    <section className="section" id="journey" ref={ref} aria-label="Experience and education">
      <div className="sheet">
        <header className="plate-head" data-reveal>
          <h2>The record.</h2>
          <p className="plate-meta">
            <span>{EXPERIENCE.length} positions</span>
            <span>BCA (AI) · 9.0 CGPA</span>
            <span>Faridabad, IN</span>
          </p>
        </header>

        <p className="journey__story" data-reveal>
          {ABOUT.paragraphs[0]} {ABOUT.paragraphs[1]}
        </p>

        <ol role="list" className="journey__ledger">
          {EXPERIENCE.map((e) => (
            <li key={`${e.company}-${e.role}`} className="journey__entry" data-reveal>
              <p className="caption journey__period">
                {e.period}
                {e.current && (
                  <span className="stamp stamp--live journey__now">
                    <span className="live-dot" aria-hidden="true" />
                    Current
                  </span>
                )}
              </p>
              <div className="journey__body">
                <h3 className="journey__role">{e.role}</h3>
                <p className="journey__company caption">{e.company}</p>
                <ul role="list" className="journey__points">
                  {e.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <div className="journey__edu-head">
          <h3 className="journey__edu-title">Education</h3>
        </div>
        <dl role="list" className="journey__ledger journey__edu">
          {EDUCATION.map((d) => (
            <div key={d.degree} className="journey__entry" data-reveal>
              <p className="caption journey__period">{d.period}</p>
              <div className="journey__body">
                <dt className="journey__role">{d.degree}</dt>
                <dd className="journey__company caption">{d.school}</dd>
                <dd className="journey__note">
                  {d.note}
                  <span className="journey__highlight">{d.highlight}</span>
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
