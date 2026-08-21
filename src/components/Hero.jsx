import { useState } from 'react'
import { Icon } from './Shared.jsx'
import { useTyped, useCounter, useReveal, useMagnetic, useScrolled } from '../hooks.js'
import { PROFILE, STATS, TERMINAL } from '../data.js'

function HeroActions() {
  const primaryRef = useMagnetic(18)
  const ghostRef = useMagnetic(10)
  return (
    <div className="hero-actions reveal">
      <a className="btn btn-primary" href="#projects" data-cursor="work" ref={primaryRef}>
        View my work
        <Icon name="arrow" size={17} />
        <span className="btn-shine" aria-hidden="true" />
      </a>
      <a className="btn btn-ghost" href={PROFILE.resume} download data-cursor="cv" ref={ghostRef}>
        <Icon name="download" size={17} />
        Resume
      </a>
      {PROFILE.github && (
        <a
          className="btn btn-ghost"
          href={PROFILE.github}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="github"
        >
          <Icon name="github" size={16} />
          GitHub
        </a>
      )}
    </div>
  )
}

function Stat({ stat, delay }) {
  const [ref, value] = useCounter(stat.value, { decimals: stat.decimals ?? 0, delay })
  return (
    <div className="stat reveal" ref={ref}>
      <div className="stat-icon">
        <Icon name={stat.icon} size={16} />
      </div>
      <div className="stat-value">
        {value}
        <span className="stat-suffix">{stat.suffix}</span>
      </div>
      <div className="stat-label">{stat.label}</div>
    </div>
  )
}

function TerminalCard() {
  return (
    <div className="terminal reveal" aria-hidden="true">
      <div className="terminal-bar">
        <span className="term-dot red" />
        <span className="term-dot amber" />
        <span className="term-dot green" />
        <span className="term-title">daksh@developer — zsh</span>
        <span className="term-rec">
          <span /> rec
        </span>
      </div>
      <div className="terminal-body">
        {TERMINAL.map((line, i) =>
          line.type === 'cmd' ? (
            <div key={i} className="term-line">
              <span className="term-prompt">➜</span>
              <span className="term-cmd">{line.text}</span>
            </div>
          ) : (
            <div key={i} className="term-line term-out">
              <span className="term-out-text">{line.text}</span>
            </div>
          )
        )}
        <div className="term-line">
          <span className="term-prompt">➜</span>
          <span className="term-cursor" aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}

/* Identity ring — drop a real photo at public/photo.jpg and it appears automatically */
function IdentityRing() {
  const [showPhoto, setShowPhoto] = useState(true)
  return (
    <div className="identity-ring reveal" data-cursor="photo">
      <div className="identity-rotor" aria-hidden="true" />
      <div className="identity-inner identity-tilt">
        {showPhoto ? (
          <img
            src="/photo.jpg"
            alt="Daksh Verma"
            className="identity-photo"
            onError={() => setShowPhoto(false)}
            loading="eager"
            fetchpriority="high"
            decoding="async"
          />
        ) : (
          <span className="identity-mono">
            DV<span>·</span>
          </span>
        )}
      </div>
      <span className="identity-orbit orbit-a" aria-hidden="true" />
      <span className="identity-orbit orbit-b" aria-hidden="true" />
      <span className="identity-tag">
        <Icon name="spark" size={11} /> AI Engineer
      </span>
    </div>
  )
}

const FLOAT_CHIPS = [
  { label: 'React', icon: 'code', cls: 'chip-1' },
  { label: 'SQL', icon: 'chart', cls: 'chip-2' },
  { label: 'OpenCode', icon: 'bot', cls: 'chip-3' },
  { label: 'Power BI', icon: 'chart', cls: 'chip-4' },
]

export default function Hero() {
  const typed = useTyped(PROFILE.typed)
  const ref = useReveal()
  const scrolled = useScrolled(120)

  return (
    <section className="hero" id="home" ref={ref}>
      <div className="hero-grid" />
      <span
        className={`hero-watermark ${scrolled ? 'hero-watermark-scrolled' : ''}`}
        aria-hidden="true"
      >
        DAKSH
      </span>

      <div className="container hero-inner">
        <div className="hero-left">
          <div className="hero-eyebrow reveal">
            <span className="eyebrow-pulse" aria-hidden="true" />
            Available for AI solution engineering roles
          </div>

          <h1 className="hero-name reveal">
            Daksh
            <span className="hero-name-accent"> Verma</span>
          </h1>

          <div className="hero-role reveal">
            <span className="hero-typed">{typed}</span>
            <span className="typed-caret" aria-hidden="true" />
          </div>

          <p className="hero-desc reveal">{PROFILE.headline}</p>

          <HeroActions />

          <div className="hero-chips reveal">
            <span className="chip">
              <Icon name="bot" size={14} /> OpenCode
            </span>
            <span className="chip">
              <Icon name="spark" size={14} /> AI Orchestration
            </span>
            <span className="chip">
              <Icon name="code" size={14} /> React · Python · SQL
            </span>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-visual">
            <IdentityRing />
            <TerminalCard />
            <div className="hero-glow" />
            {FLOAT_CHIPS.map((c) => (
              <span key={c.label} className={`float-chip ${c.cls}`} aria-hidden="true">
                <Icon name={c.icon} size={13} /> {c.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="stats-bar container reveal">
        {STATS.map((s, i) => (
          <Stat key={i} stat={s} delay={(i + 1) * 300} />
        ))}
      </div>

      <a className="hero-scroll" href="#about" aria-label="Scroll down">
        <span>scroll</span>
        <div className="scroll-line">
          <span />
        </div>
      </a>
    </section>
  )
}
