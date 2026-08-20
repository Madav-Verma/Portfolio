import { Icon, SectionHeader } from './Shared.jsx'
import { useReveal } from '../hooks.js'
import { TESTIMONIALS } from '../data.js'

/*
 * Social proof section. Renders NOTHING until real quotes exist in the
 * TESTIMONIALS array in data.js — zero dead space while quotes are pending.
 */
export default function Testimonials() {
  // Static module-level data: this early return never flips at runtime,
  // so the hook call below keeps a stable order across renders.
  if (!TESTIMONIALS || TESTIMONIALS.length === 0) return null
  const ref = useReveal()

  return (
    <section className="section testimonials" id="testimonials" ref={ref}>
      <div className="container">
        <SectionHeader
          kicker="Word on the Street"
          title="What People Say"
          sub="From managers, clients and teammates who have seen the work ship."
        />

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, i) => (
            <figure key={i} className="testimonial-card reveal" style={{ '--i': i * 0.08 }}>
              <span className="testimonial-mark" aria-hidden="true">"</span>
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <span className="testimonial-avatar" aria-hidden="true">
                  {t.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')
                    .slice(0, 2)}
                </span>
                <span>
                  <b>{t.name}</b>
                  <span className="testimonial-role">
                    {t.role}{t.company ? ` · ${t.company}` : ''}
                  </span>
                </span>
                <Icon name="check" size={14} className="testimonial-verified" />
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}