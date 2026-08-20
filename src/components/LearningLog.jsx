import { Icon, SectionHeader } from './Shared.jsx'
import { useReveal } from '../hooks.js'
import { POSTS } from '../data.js'

export default function LearningLog() {
  const ref = useReveal()
  return (
    <section className="section log" id="log" ref={ref}>
      <div className="container">
        <SectionHeader
          kicker="Learning in Public"
          title="Notes from the Build"
          sub="Short engineering write-ups from real projects — how decisions were made, not just what shipped."
        />

        <div className="log-grid">
          {POSTS.map((post, i) => (
            <article key={post.title} className="log-card reveal" style={{ '--i': i * 0.08 }}>
              <div className="log-meta">
                <span className="log-tag">{post.tag}</span>
                <span className="log-date">{post.date}</span>
              </div>
              <h3 className="log-title">{post.title}</h3>
              <p className="log-excerpt">{post.excerpt}</p>
              <details className="log-body">
                <summary>
                  Read the note
                  <Icon name="chevron" size={14} />
                </summary>
                <div className="log-body-text">
                  {post.body.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </details>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}