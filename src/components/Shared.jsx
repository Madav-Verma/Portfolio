export function Icon({ name, size = 20, className = '' }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
  }
  switch (name) {
    case 'bot':
      return (
        <svg {...common}>
          <rect x="4" y="8" width="16" height="12" rx="3" />
          <path d="M12 8V4M8 4h8" />
          <circle cx="9" cy="13" r="1" fill="currentColor" stroke="none" />
          <circle cx="15" cy="13" r="1" fill="currentColor" stroke="none" />
          <path d="M9 17h6" />
        </svg>
      )
    case 'flow':
      return (
        <svg {...common}>
          <circle cx="6" cy="5" r="2" />
          <circle cx="18" cy="5" r="2" />
          <circle cx="12" cy="19" r="2" />
          <path d="M6 7v6h12V7M8 13l4 4 4-4" />
        </svg>
      )
    case 'chart':
      return (
        <svg {...common}>
          <path d="M3 3v18h18" />
          <path d="M7 15l4-5 3 3 5-7" />
        </svg>
      )
    case 'rocket':
      return (
        <svg {...common}>
          <path d="M12 15c-3-3-4-8-1.5-11.5L14 1c1 4 3 7 7 8l-1 3.5C16.5 15 13 15 12 15z" />
          <path d="M9 15c-3 0-5 2-5 5 3 0 5-2 5-5" />
          <circle cx="14.5" cy="9.5" r="1.5" />
        </svg>
      )
    case 'code':
      return (
        <svg {...common}>
          <path d="M8 6l-6 6 6 6M16 6l6 6-6 6" />
        </svg>
      )
    case 'users':
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3.5" />
          <path d="M2.5 20c0-3.5 3-5.5 6.5-5.5s6.5 2 6.5 5.5" />
          <path d="M16 5a3.5 3.5 0 010 6.5M18.5 14.5c2 .5 3.5 2 3.5 5" />
        </svg>
      )
    case 'grad':
      return (
        <svg {...common}>
          <path d="M4 8l8-5 8 5v8l-8 5-8-5V8z" />
          <path d="M4 8l8 5 8-5M12 13v8" />
        </svg>
      )
    case 'school':
      return (
        <svg {...common}>
          <path d="M2 10l10-6 10 6-10 6-10-6z" />
          <path d="M6 12.5V17c0 1 3 3 6 3s6-2 6-3v-4.5M22 10v5" />
        </svg>
      )
    case 'mail':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      )
    case 'phone':
      return (
        <svg {...common}>
          <path d="M5 4h4l2 5-2.5 1.5a12 12 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
        </svg>
      )
    case 'pin':
      return (
        <svg {...common}>
          <path d="M12 21s-7-6.1-7-11a7 7 0 0114 0c0 4.9-7 11-7 11z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M8 11v5M8 8v.01M12 16v-3a2 2 0 014 0v3" />
        </svg>
      )
    case 'arrow':
      return (
        <svg {...common}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      )
    case 'external':
      return (
        <svg {...common}>
          <path d="M14 4h6v6M20 4L10 14" />
          <path d="M18 13v5a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h5" />
        </svg>
      )
    case 'download':
      return (
        <svg {...common}>
          <path d="M12 3v12M7 10l5 5 5-5" />
          <path d="M4 19h16" />
        </svg>
      )
    case 'check':
      return (
        <svg {...common}>
          <path d="M4 12.5l5 5L20 6.5" />
        </svg>
      )
    case 'spark':
      return (
        <svg {...common}>
          <path d="M12 3l1.9 5.7L20 10.6l-6.1 1.9L12 18l-1.9-5.5L4 10.6l6.1-1.9L12 3z" />
          <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15z" />
        </svg>
      )
    case 'menu':
      return (
        <svg {...common}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      )
    case 'close':
      return (
        <svg {...common}>
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      )
    case 'clock':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </svg>
      )
    case 'chevron':
      return (
        <svg {...common}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      )
    case 'globe':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
        </svg>
      )
    case 'github':
      return (
        <svg {...common}>
          <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
        </svg>
      )
    default:
      return null
  }
}

export function SectionHeader({ kicker, title, sub }) {
  return (
    <div className="section-head reveal">
      <span className="kicker">{kicker}</span>
      <h2 className="section-title">{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </div>
  )
}

export function StatusPill({ type, label }) {
  return (
    <span className={`pill pill-${type}`}>
      <span className="pill-dot" />
      {label}
    </span>
  )
}
