import { useState } from 'react'
import { Icon, SectionHeader, StatusPill } from './Shared.jsx'
import { useReveal, useTilt } from '../hooks.js'
import { PROJECTS } from '../data.js'

/* Real screenshot inside the browser frame (falls back to abstract UI mockup) */
function ProjectMockup({ project, index }) {
  const [shotOk, setShotOk] = useState(true)
  if (project.screenshot && shotOk) {
    return (
      <div className="mockup mockup-shot">
        <img
          src={project.screenshot}
          alt={`${project.title} — live application preview`}
          loading="lazy"
          decoding="async"
          onError={() => setShotOk(false)}
        />
      </div>
    )
  }
  const rows = 4 + (index % 3)
  const bars = [62, 78, 44, 88, 56, 70]
  return (
    <div className="mockup" aria-hidden="true">
      <div className="mockup-side">
        {[0, 1, 2, 3].map((n) => (
          <span key={n} className={n === index % 4 ? 'side-active' : ''} />
        ))}
      </div>
      <div className="mockup-main">
        <div className="mockup-kpi">
          <span />
          <span />
          <span />
        </div>
        <div className="mockup-table">
          {Array.from({ length: rows }).map((_, r) => (
            <div key={r} className="mockup-row">
              <i />
              <b style={{ width: `${bars[(r + index) % bars.length]}%` }} />
              <b style={{ width: `${bars[(r + index + 2) % bars.length]}%` }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, i }) {
  const tiltRef = useTilt(4)
  return (
    <article
      className={`project-card ${project.featured ? 'featured' : ''} ${project.status === 'soon' ? 'is-soon' : ''} reveal`}
      ref={tiltRef}
      style={{ '--i': (i % 2) * 0.08 }}
    >
       <div className="project-browser" style={{ background: project.gradient }}>
        <div className="browser-bar">
          <span className="browser-dots">
            <i /><i /><i />
          </span>
          <span className="browser-url">
            {project.status === 'live'
              ? project.link.replace('https://', '').replace('/', '')
              : project.statusLabel.toLowerCase()}
          </span>
          {project.status === 'live' && (
            <span className="browser-live" aria-label="Live on the web">
              <span className="live-dot" /> Live
            </span>
          )}
          <span className="browser-lock">🔒</span>
        </div>
        <ProjectMockup project={project} index={i} />
        <div className="browser-shine" />
      </div>

      <div className="project-body">
        <div className="project-meta">
          <StatusPill type={project.status} label={project.statusLabel} />
          <span className="project-year">{project.year}</span>
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-tagline">{project.tagline}</p>
        <ul className="project-bullets">
          {project.bullets.map((b) => (
            <li key={b}>
              <Icon name="check" size={14} />
              {b}
            </li>
          ))}
        </ul>
        <div className="project-metrics">
          {project.metrics.map((m) => (
            <div key={m.l} className="metric">
              <b>{m.v}</b>
              <span>{m.l}</span>
            </div>
          ))}
        </div>
        <div className="project-tags">
          {project.tags.map((t) => (
            <span key={t} className="project-tag">{t}</span>
          ))}
        </div>
        {project.caseStudy && (
          <details className="case-study">
            <summary>
              Inside the build
              <Icon name="chevron" size={14} />
            </summary>
            <div className="case-study-body">
              <div className="case-study-row">
                <span className="case-study-label">Problem</span>
                <p>{project.caseStudy.challenge}</p>
              </div>
              <div className="case-study-row">
                <span className="case-study-label">Approach</span>
                <p>{project.caseStudy.approach}</p>
              </div>
              <div className="case-study-row">
                <span className="case-study-label">Result</span>
                <p>{project.caseStudy.outcome}</p>
              </div>
            </div>
          </details>
        )}
        {project.workflow && (
          <div className="workflow-callout reveal">
            <div className="workflow-header">
              <Icon name="flow" size={14} />
              <span>Agentic Architecture</span>
            </div>
            <p className="workflow-text">{project.workflow.callout}</p>
            <div className="workflow-stack">
              {project.workflow.stack.map((tool) => (
                <span key={tool} className="workflow-tool">{tool}</span>
              ))}
            </div>
          </div>
        )}
        {project.link && (
          <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer" data-cursor="visit">
            Visit live project
            <Icon name="external" size={15} />
          </a>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  const ref = useReveal()
  return (
    <section className="section projects" id="projects" ref={ref}>
      <div className="container">
        <SectionHeader
          kicker="Selected Work"
          title="Projects I've Shipped"
          sub="End-to-end builds — from database design to production deployments, built with agentic workflows and multi-model orchestration."
        />

        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
