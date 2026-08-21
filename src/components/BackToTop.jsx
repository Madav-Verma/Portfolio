import { Icon } from './Shared.jsx'
import { useScrolled, useScrollProgress } from '../hooks.js'

/* Back-to-top with a circular readout of how far down the page you are */
export default function BackToTop() {
  const visible = useScrolled(600)
  const progress = useScrollProgress()
  const R = 19
  const CIRC = 2 * Math.PI * R
  return (
    <button
      className={`back-to-top ${visible ? 'visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <svg className="back-to-top-ring" viewBox="0 0 48 48" aria-hidden="true">
        <circle className="ring-track" cx="24" cy="24" r={R} />
        <circle
          className="ring-fill"
          cx="24"
          cy="24"
          r={R}
          style={{ strokeDashoffset: CIRC * (1 - progress) }}
        />
      </svg>
      <Icon name="arrow" size={16} className="back-to-top-arrow" />
    </button>
  )
}