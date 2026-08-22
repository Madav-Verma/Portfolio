import { useEffect, useMemo, useRef, useState } from 'react'
import { Icon } from './Shared.jsx'
import { useScrollProgress, useScrolled, useScrollSpy } from '../hooks.js'
import { NAV_LINKS } from '../data.js'

export default function Navbar() {
  const progress = useScrollProgress()
  const scrolled = useScrolled(40)
  const [open, setOpen] = useState(false)
  const navIds = useMemo(() => NAV_LINKS.map((l) => l.href.slice(1)), [])
  const active = useScrollSpy(navIds)
  const menuRef = useRef(null)
  const toggleRef = useRef(null)

  // Focus management + Escape to close while the mobile menu is open,
  // and lock page scroll behind the open menu
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const first = menuRef.current?.querySelector('a, button')
    first?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
        return
      }
      if (e.key === 'Tab') {
        const els = menuRef.current?.querySelectorAll('a, button')
        if (!els || els.length === 0) return
        const firstEl = els[0]
        const lastEl = els[els.length - 1]
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault()
          lastEl.focus()
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault()
          firstEl.focus()
        }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="scroll-progress" style={{ transform: `scaleX(${progress})` }} />
      <div className="nav-inner">
        <a className="nav-logo" href="#home" aria-label="Back to top">
          <span className="logo-badge">
            DV
            <span className="logo-badge-glow" />
          </span>
          <span className="logo-text">
            daksh<span className="logo-dot">.</span>verma
          </span>
          <span className="nav-status">
            <span className="nav-status-dot" />
            open to work
          </span>
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`} id="primary-nav" aria-label="Primary" ref={menuRef}>
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={active === l.href.slice(1) ? 'active' : ''}
              aria-current={active === l.href.slice(1) ? 'true' : undefined}
              data-cursor={l.label.toLowerCase()}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" data-cursor="hire" onClick={() => setOpen(false)}>
            Hire me
            <Icon name="arrow" size={14} />
          </a>
        </nav>

        <button
          className="nav-toggle"
          ref={toggleRef}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="primary-nav"
        >
          <Icon name={open ? 'close' : 'menu'} size={22} />
        </button>
      </div>
    </header>
  )
}