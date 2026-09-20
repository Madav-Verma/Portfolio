import { NOW } from "../data.js";
import { useReveal } from "../hooks/useReveal.js";
import "./Now.css";

const STATUS_CLASS = {
  live: "stamp--live",
  shipped: "stamp--shipped",
  wip: "stamp--wip",
};

export default function Now() {
  const ref = useReveal();

  return (
    <section className="section" id="now" ref={ref} aria-label="Building now">
      <div className="sheet">
        <header className="plate-head" data-reveal>
          <h2>Building now.</h2>
          <p className="plate-meta">
            <span>{NOW.length} systems</span>
            <span>Sep 2026</span>
            <span>Rev A</span>
          </p>
        </header>

        <div className="now__grid">
          {NOW.map((n, i) => (
            <article
              key={n.id}
              className="now__card"
              data-reveal
              style={{ "--d": Math.min(i, 4) }}
            >
              <p className={`stamp ${STATUS_CLASS[n.status]}`}>
                {n.status === "live" && <span className="live-dot" aria-hidden="true" />}
                {n.statusLabel}
              </p>
              <h3 className="now__title">{n.title}</h3>
              <p className="now__desc">{n.desc}</p>
              {n.link ? (
                <a
                  className="btn btn--ghost now__action"
                  href={n.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow the build
                </a>
              ) : (
                <p className="caption now__meta">
                  <a className="link-draw" href="#work">
                    See it in selected work
                  </a>
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
