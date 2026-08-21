import { Icon, SectionHeader } from './Shared.jsx'
import { useReveal } from '../hooks.js'
import { OFFERINGS } from '../data.js'

export default function Offerings() {
  const ref = useReveal()
  return (
    <section className="section offerings" id="offerings" ref={ref}>
      <div className="container">
        <SectionHeader
          kicker="What I Build"
          title="Ways I Can Help"
          sub="Three lanes, one goal — shipping complete products instead of point solutions."
        />

        <div className="offerings-grid">
          {OFFERINGS.map((offer, i) => (
            <article
              key={offer.title}
              className="offer-card reveal"
              style={{ '--accent': offer.accent, '--i': i * 0.08 }}
            >
              <div className="offer-card-icon">
                <Icon name={offer.icon} size={24} />
              </div>
              <h3 className="offer-card-title">{offer.title}</h3>
              <p className="offer-card-desc">{offer.desc}</p>
              <ul className="offer-card-list">
                {offer.points.map((p) => (
                  <li key={p}>
                    <Icon name="check" size={13} />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="offer-card-note">
                <Icon name="spark" size={12} />
                {offer.note}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}