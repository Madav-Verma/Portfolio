import { useMemo, useState } from "react";
import { ArrowUpRight, CaretDown, GithubLogo } from "@phosphor-icons/react";
import { FILTERS, PROJECTS } from "../data.js";
import { useReveal } from "../hooks/useReveal.js";
import "./Work.css";

const STATUS_CLASS = {
  live: "stamp--live",
  shipped: "stamp--shipped",
  wip: "stamp--wip",
};

function Cover({ project, large = false }) {
  return (
    <div className={`cover ${large ? "cover--lg" : ""}`} aria-hidden="true">
      <span className="cover__sheet">{project.sheet}</span>
      <span className="cover__title">{project.title}</span>
      <span className="cover__meta">
        {project.domain} · {project.year}
      </span>
    </div>
  );
}

export default function Work() {
  const [filter, setFilter] = useState("all");
  const [openId, setOpenId] = useState(null);
  const sectionRef = useReveal([filter]);

  const visible = useMemo(
    () => (filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.status === filter)),
    [filter],
  );

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
                    <span className="work__sheet-id caption">{p.sheet}</span>
                    <span className="work__title">{p.title}</span>
                    <span className="work__domain">{p.domain}</span>
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
                        <figure className="work__figure">
                          {p.screenshot ? (
                            <>
                              <img
                                src={p.screenshot}
                                alt={`${p.title} interface`}
                                width="900"
                                height="562"
                                loading="lazy"
                              />
                              <figcaption className="caption">
                                Fig. — Production interface
                              </figcaption>
                            </>
                          ) : (
                            <Cover project={p} large />
                          )}
                        </figure>

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
