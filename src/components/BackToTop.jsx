import { Icon } from './Shared.jsx'
import { useScrolled } from '../hooks.js'

export default function BackToTop() {
  const visible = useScrolled(600)
  return (
    <button
      className={`back-to-top ${visible ? 'visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <Icon name="arrow" size={18} />
    </button>
  )
}
