import { Icon, SectionHeader } from './Shared.jsx'
import { useReveal } from '../hooks.js'
import { PROFILE } from '../data.js'

const CARDS = [
  { icon: 'mail', title: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { icon: 'phone', title: 'Phone', value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s/g, '')}` },
  { icon: 'linkedin', title: 'LinkedIn', value: 'in/daksh-verma-613774229', href: PROFILE.linkedin, external: true },
  { icon: 'pin', title: 'Location', value: `${PROFILE.location} · open to remote` },
]

export default function Contact() {
  const ref = useReveal()
  const cards = [
    ...CARDS.slice(0, 1),
    ...(PROFILE.github ? [{ icon: 'github', title: 'GitHub', value: PROFILE.github.replace('https://', ''), href: PROFILE.github, external: true }] : []),
    ...CARDS.slice(1),
  ]
  return (
    <section className="section contact" id="contact" ref={ref}>
      <div className="container">
        <SectionHeader
          kicker="Say Hello"
          title="Let's build something end-to-end"
          sub="Looking for an AI solutions engineer who ships? My inbox is open."
        />

        <div className="contact-grid">
          {cards.map((c, i) => (
            <div key={c.title} className="contact-card reveal" style={{ '--i': i * 0.07 }}>
              <span className="contact-icon">
                <Icon name={c.icon} size={22} />
              </span>
              <h3>{c.title}</h3>
              {c.href ? (
                <a href={c.href} target={c.external ? '_blank' : undefined} rel={c.external ? 'noopener noreferrer' : undefined} data-cursor={c.title.toLowerCase()}>
                  {c.value}
                </a>
              ) : (
                <span>{c.value}</span>
              )}
            </div>
          ))}
        </div>

        <div className="contact-cta reveal">
          <a className="btn btn-primary btn-lg" href={`mailto:${PROFILE.email}`} data-cursor="mail">
            <Icon name="mail" size={18} />
            Email me directly
          </a>
          <a className="btn btn-ghost btn-lg" href={PROFILE.resume} download>
            <Icon name="download" size={18} />
            Download resume
          </a>
        </div>

        <div className="contact-note reveal">
          <Icon name="clock" size={14} />
          Replies within 24 hours — usually faster, thanks to AI-assisted workflow.
        </div>
      </div>
    </section>
  )
}