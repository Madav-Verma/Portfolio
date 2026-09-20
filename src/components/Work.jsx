import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, CaretDown, GithubLogo } from "@phosphor-icons/react";
import { FILTERS, PROJECTS } from "../data.js";
import { useReveal } from "../hooks/useReveal.js";
import Cover from "./Cover.jsx";
import "./Work.css";

const STATUS_CLASS = {
  live: "stamp--live",
  shipped: "stamp--shipped",
  wip: "stamp--wip",
};

function ShotsFigure({ project }) {
  const [active, setActive] = useState(0);
  const shots = project.shots ?? [];
  const current = shots[Math.min(active, shots.length - 1)];

  return (
    <div className="work__shots-wrap">
      <figure className="work__figure">
        <img
          src={current.src}
          alt={`${project.title} — ${current.label}`}
          width="900"
          height="562"
          loading="lazy"
          decoding="async"
        />
        <figcaption className="caption">Fig. — {current.label}</figcaption>
      </figure>
      <div className="work__shots" role="group" aria-label={`${project.title} views`}>
        {shots.map((s, idx) => (
          <button
            key={s.src}
            type="button"
            className={`work__shot${idx === active ? " is-active" : ""}`}
            aria-pressed={idx === active}
            aria-label={`View ${s.label}`}
            onClick={() => setActive(idx)}
          >
            <img src={s.src} alt="" loading="lazy" decoding="async" />
          </button>
        ))}
      </div>
    </div>
  );
}

function WorkFigure({ project }) {
  if (project.shots && project.shots.length > 0) {
    return <ShotsFigure project={project} />;
  }
  if (project.screenshot) {
    return (
      <figure className="work__figure">
        <img
          src={project.screenshot}
          alt={`${project.title} interface`}
          width="900"
          height="562"
          loading="lazy"
          decoding="async"
        />
        <figcaption className="caption">Fig. — Production interface</figcaption>
      </figure>
    );
  }
  return <Cover project={project} large />;
}

export default function Work() {
  const [filter, setFilter] = useState("all");
  const [openId, setOpenId] = useState(null);
  const sectionRef = useReveal([filter]);

  const visible = useMemo(
    () => (filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.status === filter)),
    [filter],
  );

  // Escape collapses the open case study and returns focus to its trigger.
  useEffect(() => {
    if (!openId) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        const btn = document.querySelector(`[aria-controls="panel-${openId}"]`);
        setOpenId(null);
        btn?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openId]);

  return (
    <section className="section" id="work" ref={sectionRef} aria-label="Selected work">
      <div className="sheet">
        <header className="plate-head" data-reveal>
          <h2>Selected work.</h2>
          <p className="plate-meta">
            <span>{PROJECTS.length} projects</span>
            <span>2024 — 2026</span>
            <span>Rev C</span>
          </p>
        </header>

        <div className="work__filters" data-reveal role="group" aria-label="Filter projects by status">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              className="work__filter"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="work__list">
          {visible.map((p, i) => {
            const open = openId === p.id;
            return (
              <article
                key={p.id}
                className={`work__item ${open ? "is-open" : ""}`}
                data-reveal
                style={{ "--d": Math.min(i, 4) }}
              >
                <h3 className="work__row-h">
                  <button
                    type="button"
                    className="work__row"
                    aria-expanded={open}
                    aria-controls={`panel-${p.id}`}
                    onClick={() => setOpenId(open ? null : p.id)}
                  >
                    <span className="work__thumb" aria-hidden="true">
                      {p.screenshot ? (
                        <img
                          src={p.screenshot}
                          alt=""
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <Cover project={p} />
                      )}
                    </span>
                    <span className="work__row-main">
                      <span className="work__sheet-id caption">{p.sheet}</span>
                      <span className="work__title">{p.title}</span>
                      <span className="work__domain">{p.domain}</span>
                    </span>
                    <span className="caption work__year">{p.year}</span>
                    <span className={`stamp ${STATUS_CLASS[p.status]}`}>
                      {p.status === "live" && <span className="live-dot" aria-hidden="true" />}
                      {p.statusLabel}
                    </span>
                    <CaretDown
                      size={18}
                      weight="bold"
                      aria-hidden="true"
                      className="work__caret"
                    />
                  </button>
                </h3>

                <div id={`panel-${p.id}`} className="work__panel" role="region" aria-label={`${p.title} case study`}>
                  <div className="work__panel-inner">
                    <div className="work__detail">
                      <div className="work__prose">
                        {p.metric && <p className="work__metric">{p.metric}</p>}
                        {p.tagline && <p className="work__tagline">{p.tagline}</p>}
                        {p.caseStudy && (
                          <dl className="work__case">
                            {[
                              ["Challenge", p.caseStudy.challenge],
                              ["Approach", p.caseStudy.approach],
                              ["Outcome", p.caseStudy.outcome],
                            ].map(([k, v]) => (
                              <div key={k} className="work__case-row">
                                <dt className="caption">{k}</dt>
                                <dd>{v}</dd>
                              </div>
                            ))}
                          </dl>
                        )}
                        <ul role="list" className="work__bullets">
                          {p.bullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="work__side">
                        <WorkFigure project={p} />

                        <dl className="work__metrics caption">
                          {p.metrics.map((m) => (
                            <div key={m.l}>
                              <dd>{m.v}</dd>
                              <dt>{m.l}</dt>
                            </div>
                          ))}
                        </dl>

                        <p className="work__stack caption">
                          <span className="work__stack-k">Stack</span>
                          {p.stack.join(" · ")}
                        </p>

                        {(p.link || p.repo) && (
                          <div className="work__actions">
                            {p.link && (
                              <a className="btn btn--ghost" href={p.link} target="_blank" rel="noopener noreferrer">
                                Visit live site
                                <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
                              </a>
                            )}
                            {p.repo && (
                              <a className="btn btn--ghost" href={p.repo} target="_blank" rel="noopener noreferrer">
                                View repository
                                <GithubLogo size={16} weight="bold" aria-hidden="true" />
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
