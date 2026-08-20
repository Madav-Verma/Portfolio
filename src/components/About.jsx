import { Icon, SectionHeader } from './Shared.jsx'
import { useReveal } from '../hooks.js'
import { ABOUT } from '../data.js'

export default function About() {
  const ref = useReveal()
  return (
    <section className="section about" id="about" ref={ref}>
      <div className="container">
        <SectionHeader
          kicker={ABOUT.kicker}
          title={ABOUT.title}
          sub="Data literacy is my foundation. AI is my multiplier. Shipping is my obsession."
        />

        <div className="about-grid">
          <div className="about-story">
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i} className="about-p reveal">
                {p}
              </p>
            ))}

            <div className="about-quote reveal">
              <span className="quote-mark" aria-hidden="true">"</span>
              <p>I don't build reports that sit in a drawer. I build systems that run the business — and AI is how I get there faster.</p>
              <span className="quote-name">— Daksh Verma</span>
            </div>
          </div>

          <div className="about-right">
            <div className="identity-card reveal">
              <div className="identity-card-head">
                <span className="logo-badge">DV</span>
                <div>
                  <b>Daksh Verma</b>
                  <span>Applied AI Solutions Engineer</span>
                </div>
              </div>
              <div className="identity-card-rows">
                {ABOUT.identity.rows.map((row) => (
                  <div key={row.k} className="identity-row">
                    <span className="identity-row-k">{row.k}</span>
                    <span className={`identity-row-v ${row.live ? 'live' : ''}`}>
                      {row.live && <span className="eyebrow-pulse" aria-hidden="true" />}
                      {row.v}
                    </span>
                  </div>
                ))}
              </div>
              <div className="identity-card-foot">
                <Icon name="spark" size={13} />
                currently building at Prokon Hi-Tech
              </div>
            </div>

            <div className="about-cards">
              {ABOUT.points.map((point, i) => (
                <div key={i} className="about-card reveal" style={{ '--i': i * 0.06 }}>
                  <div className="about-card-icon">
                    <Icon name={point.icon} size={22} />
                  </div>
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
