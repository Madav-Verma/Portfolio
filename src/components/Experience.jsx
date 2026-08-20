import { useState } from 'react'
import { Icon, SectionHeader } from './Shared.jsx'
import { useReveal } from '../hooks.js'
import { EXPERIENCE, EDUCATION, CERTIFICATIONS } from '../data.js'

function CertCard({ cert, i }) {
  const [imgState, setImgState] = useState(null) // null = pending, true = loaded, false = failed
  const [isPortrait, setIsPortrait] = useState(false)
  const card = (
    <>
      <div className="cert-card-media">
        {imgState !== false ? (
          <img
            src={cert.img}
            alt={`${cert.title} — certificate`}
            loading="lazy"
            className={isPortrait ? 'cert-img portrait' : 'cert-img'}
            onLoad={(e) => setIsPortrait(e.target.naturalHeight > e.target.naturalWidth)}
            onError={() => setImgState(false)}
          />
        ) : (
          <div className="cert-card-fallback">
            <Icon name="check" size={22} />
          </div>
        )}
        <span className="cert-card-year">{cert.year}</span>
        <span className="cert-card-gloss" aria-hidden="true" />
      </div>
      <div className="cert-card-body">
        <h4>{cert.title}</h4>
        <span className="cert-card-org">{cert.org}</span>
        {cert.recent && <span className="cert-recent" aria-label="Recent credential">New</span>}
        {cert.verify && (
          <span className="cert-card-verify">
            <Icon name="external" size={11} /> Verify
          </span>
        )}
      </div>
    </>
  )
  return (
    <div className="cert-card reveal" style={{ '--i': (i % 5) * 0.06 }}>
      {cert.verify ? (
        <a className="cert-card-link" href={cert.verify} target="_blank" rel="noopener noreferrer" aria-label={`Verify ${cert.title} certificate`} data-cursor="verify">
          {card}
        </a>
      ) : (
        card
      )}
    </div>
  )
}

export default function Experience() {
  const ref = useReveal()
  return (
    <section className="section journey" id="journey" ref={ref}>
      <div className="container">
        <SectionHeader
          kicker="The Journey"
          title="Experience & Education"
          sub="A path from data analysis to applied AI engineering — learning in public, shipping in private."
        />

        <div className="journey-layout">
          <div className="timeline">
            <div className="timeline-line" />
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="timeline-item reveal">
                <span className={`timeline-dot ${exp.current ? 'current' : ''}`}>
                  {exp.current && <span className="dot-pulse" />}
                </span>
                <div className={`exp-card ${exp.current ? 'exp-current' : ''}`}>
                  <div className="exp-head">
                    <div>
                      <h3 className="exp-role">{exp.role}</h3>
                      <div className="exp-company">{exp.company}</div>
                    </div>
                    <span className="exp-period">
                      <Icon name="clock" size={13} />
                      {exp.period}
                    </span>
                  </div>
                  <ul className="exp-points">
                    {exp.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <div className="exp-tags">
                    {exp.tags.map((t) => (
                      <span key={t} className="exp-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="edu-side">
            <h3 className="edu-heading">
              <Icon name="grad" size={18} /> Education
            </h3>
            {EDUCATION.map((edu, i) => (
              <div key={i} className="edu-card reveal">
                <div className="edu-highlight">
                  <b>{edu.highlight}</b>
                  <span>{edu.highlightLabel}</span>
                </div>
                <div>
                  <h4>{edu.degree}</h4>
                  <div className="edu-school">{edu.school}</div>
                  <div className="edu-note">{edu.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="certs-block">
          <div className="certs-head reveal">
            <span className="kicker">Credentials Wall</span>
            <h3 className="certs-title">
              Certifications <span className="certs-count">×{CERTIFICATIONS.length}</span>
            </h3>
            <p className="certs-sub">
              Continuously learning — AI, data, BI and business analysis, certified along the way.
            </p>
          </div>
          <div className="certs-grid">
            {CERTIFICATIONS.map((cert, i) => (
              <CertCard key={cert.title} cert={cert} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
