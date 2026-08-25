import { NOTES } from "../data.js";
import { useReveal } from "../hooks/useReveal.js";
import "./Notes.css";

export default function Notes() {
  const ref = useReveal();

  return (
    <section className="section" id="notes" ref={ref} aria-label="Engineering notes">
      <div className="sheet">
        <header className="plate-head" data-reveal>
          <h2>Notes.</h2>
          <p className="plate-meta">
            <span>{NOTES.length} entries</span>
            <span>Jun — Aug 2026</span>
          </p>
        </header>

        <div className="notes">
          {NOTES.map((n, i) => (
            <article key={n.title} className="notes__card" data-reveal style={{ "--d": i }}>
              <p className="caption notes__meta">
                {n.date} <span aria-hidden="true">·</span> {n.tag}
              </p>
              <h3 className="notes__title">{n.title}</h3>
              <p className="notes__excerpt">{n.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
