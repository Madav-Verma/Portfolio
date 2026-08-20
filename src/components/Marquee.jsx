import { MARQUEE } from '../data.js'

export default function Marquee() {
  const items = [...MARQUEE, ...MARQUEE]
  return (
    <>
      <div className="marquee-wrap" aria-hidden="true">
        <div className="marquee">
          {items.map((item, i) => (
            <span key={i} className="marquee-item">
              <span className="marquee-text">{item}</span>
              <span className="marquee-star">✦</span>
            </span>
          ))}
        </div>
      </div>
      <ul className="sr-only">
        {MARQUEE.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  )
}
