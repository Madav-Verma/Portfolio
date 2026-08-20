import { useState } from 'react'
import { Icon, SectionHeader } from './Shared.jsx'
import { useReveal } from '../hooks.js'
import { PROFILE } from '../data.js'

const CARDS = [
  { icon: 'mail', title: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { icon: 'phone', title: 'Phone', value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s/g, '')}` },
  { icon: 'linkedin', title: 'LinkedIn', value: 'in/daksh-verma-613774229', href: PROFILE.linkedin, external: true },
  { icon: 'pin', title: 'Location', value: `${PROFILE.location} · open to remote` },
]

/* Working contact form — Formspree when an endpoint is configured,
   otherwise a graceful mailto fallback (visitor's email app opens). */
function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const ref = useReveal()

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)

    if (!form.checkValidity()) {
      setStatus('error')
      return
    }
    setStatus('sending')

    if (PROFILE.formspree) {
      try {
        const res = await fetch(PROFILE.formspree, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: data,
        })
        if (res.ok) {
          setStatus('sent-form')
          form.reset()
          return
        }
        setStatus('error')
      } catch {
        // Network failure — fall through to the mailto path
        openMailto(data)
        setStatus('sent-mailto')
      }
    } else {
      openMailto(data)
      setStatus('sent-mailto')
    }
  }

  const openMailto = (data) => {
    const name = (data.get('name') || '').toString().trim()
    const email = (data.get('email') || '').toString().trim()
    const message = (data.get('message') || '').toString().trim()
    const subject = encodeURIComponent(`Message from ${name} — via dakshverma.netlify.app`)
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`)
    const anchor = document.createElement('a')
    anchor.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`
    anchor.rel = 'nofollow'
    anchor.click()
  }

  return (
    <div ref={ref}>
      <form className="contact-form reveal" onSubmit={onSubmit} noValidate>
        <div className="contact-form-head">
          <span className="contact-form-label">or write directly —</span>
          <h3>Send a message</h3>
        </div>
        <div className="contact-form-row">
          <label>
            <span className="contact-field-label">Name</span>
            <input type="text" name="name" placeholder="Your name" required autoComplete="name" />
          </label>
          <label>
            <span className="contact-field-label">Email</span>
            <input type="email" name="email" placeholder="you@company.com" required autoComplete="email" />
          </label>
        </div>
        <label>
          <span className="contact-field-label">Message</span>
          <textarea name="message" rows={4} placeholder="Role, company, timeline — whatever you need to build." required />
        </label>
        <div className="contact-form-actions">
          <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send message'}
            <Icon name="arrow" size={15} />
            <span className="btn-shine" aria-hidden="true" />
          </button>
          {status === 'sent-form' && (
            <span className="contact-form-note" role="status">
              Message sent — I will reply within 24 hours.
            </span>
          )}
          {status === 'sent-mailto' && (
            <span className="contact-form-note" role="status">
              Your email app opened — hit send there and I will reply within 24 hours.
            </span>
          )}
          {status === 'error' && (
            <span className="contact-form-note error" role="alert">
              Please check your email address and try again.
            </span>
          )}
        </div>
      </form>
    </div>
  )
}

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

        <ContactForm />

        <div className="contact-cta reveal">
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