import { Icon } from './Shared.jsx'
import { PROFILE } from '../data.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="logo-badge">DV</span>
          <span>
            <b>Daksh Verma</b>
            <span className="footer-role">Applied AI Solutions Engineer</span>
          </span>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Work</a>
          <a href="#journey">Journey</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          {PROFILE.github && (
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Icon name="github" size={18} />
            </a>
          )}
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Icon name="linkedin" size={18} />
          </a>
          <a href={`mailto:${PROFILE.email}`} aria-label="Email">
            <Icon name="mail" size={18} />
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Daksh Verma · Faridabad, India</span>
        <span className="footer-mono">built with react · orchestrated by opencode ✦</span>
      </div>
    </footer>
  )
}
