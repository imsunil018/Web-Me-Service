import { useState, useEffect, useRef } from 'react'
import AnimateOnScroll from './AnimateOnScroll'
import RevealGroup from './RevealGroup'
import { SITE, SERVICES, SECTION_COPY } from '../data/site'

function whatsappHref(message = SITE.whatsapp.defaultMessage) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${SITE.whatsapp.e164}?text=${text}`
}

const trustPoints = [
  {
    label: 'Free consultation',
    desc: 'Scope call before you commit',
    icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 11a4 4 0 100-8 4 4 0 000 8 M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75',
  },
  {
    label: 'Transparent pricing',
    desc: 'Written quote with milestones',
    icon: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z M14 2v6h6 M9 15l2 2 4-4',
  },
  {
    label: '24-hour response',
    desc: 'Reply on business days',
    icon: 'M12 6v6l4 2 M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
]

const briefTips = [
  'What you want to build',
  'Timeline & budget range',
  'Links or references',
]

function ContactTile({ tile }) {
  const inner = (
    <>
      <span className={`contact-tile__icon${tile.accent ? ` contact-tile__icon--${tile.accent}` : ''}`} aria-hidden="true">
        {tile.icon}
      </span>
      <span className="contact-tile__label">{tile.label}</span>
      <span className="contact-tile__value">{tile.value}</span>
      {tile.hint ? <span className="contact-tile__hint">{tile.hint}</span> : null}
    </>
  )

  const className = `contact-tile${tile.href ? ' contact-tile--link' : ''}${tile.accent ? ` contact-tile--${tile.accent}` : ''}`

  if (tile.href) {
    return (
      <a
        href={tile.href}
        className={className}
        {...(tile.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {inner}
      </a>
    )
  }

  return <div className={className}>{inner}</div>
}

export default function Contact({ standalone = false, embedded = false }) {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const formCardRef = useRef(null)

  const contactTiles = [
    {
      key: 'email',
      href: `mailto:${SITE.email}`,
      external: false,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <path d="M22 6l-10 7L2 6" />
        </svg>
      ),
      label: 'Email',
      value: SITE.email,
      hint: 'Best for detailed briefs',
    },
    {
      key: 'whatsapp',
      href: whatsappHref(),
      external: true,
      accent: 'whatsapp',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      label: 'WhatsApp',
      value: SITE.whatsapp.display,
      hint: 'Quick chat during business hours',
    },
    {
      key: 'response',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      label: 'Response time',
      value: SITE.responseTime,
      hint: 'On working days (IST)',
      accent: 'highlight',
    },
    {
      key: 'hours',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M12 21s7-4.35 7-11a7 7 0 10-14 0c0 6.65 7 11 7 11z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      ),
      label: 'Based in',
      value: `${SITE.location} · ${SITE.businessHours}`,
    },
  ]

  useEffect(() => {
    const prefill = sessionStorage.getItem('wms-service')
    if (prefill) {
      setForm((f) => ({ ...f, service: prefill, message: `I'm interested in ${prefill}. ` }))
      sessionStorage.removeItem('wms-service')
    }

    const onClick = (e) => {
      const el = e.target.closest('[data-service]')
      if (el) {
        sessionStorage.setItem('wms-service', el.dataset.service)
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Project inquiry: ${form.service || 'General'} — ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service || 'Not specified'}\n\nProject details:\n${form.message}`
    )
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setForm({ name: '', email: '', service: '', message: '' })
  }

  const focusForm = () => {
    formCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.setTimeout(() => {
      const first = formCardRef.current?.querySelector('input, textarea, select')
      first?.focus({ preventScroll: true })
    }, 400)
  }

  const wrapper = (
    <div className={`contact__layout${embedded ? ' contact__layout--embedded' : ''}`}>
      {!embedded && (
        <AnimateOnScroll className="contact__aside">
          <span className="contact__badge">{SECTION_COPY.contact.label}</span>
          <h2 className="contact__title" id="contact-title">
            {SECTION_COPY.contact.title}
          </h2>
          <p className="contact__desc">{SECTION_COPY.contact.desc}</p>

          <RevealGroup as="ul" className="contact__trust-panel" stagger={60}>
            {trustPoints.map((point) => (
              <li key={point.label} className="contact__trust-card">
                <span className="contact__trust-card-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d={point.icon} />
                  </svg>
                </span>
                <span className="contact__trust-card-copy">
                  <strong>{point.label}</strong>
                  <span>{point.desc}</span>
                </span>
              </li>
            ))}
          </RevealGroup>

          <div className="contact__channel-actions">
            <button type="button" className="btn btn--primary btn--lg contact__channel-cta" onClick={focusForm}>
              {SECTION_COPY.contact.cta}
            </button>
            <a
              href={whatsappHref()}
              className="btn btn--outline btn--lg contact__channel-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
          <p className="contact__cta-note">{SECTION_COPY.contact.ctaSub}</p>

          <RevealGroup className="contact__tiles" stagger={65}>
            {contactTiles.map((tile) => (
              <div key={tile.key} className="contact-tile-wrap">
                <ContactTile tile={tile} />
              </div>
            ))}
          </RevealGroup>

          <AnimateOnScroll delay={300} className="contact__tips">
            <h3>Include in your brief</h3>
            <ul>
              {briefTips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </AnimateOnScroll>
        </AnimateOnScroll>
      )}

      <AnimateOnScroll delay={embedded ? 0 : 160} className="contact__form-card">
        <div className="contact__form-shell" ref={formCardRef}>
          <div className="contact__form-head">
            <div className="contact__form-head-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
            </div>
            <div>
              <h3 className="contact__form-title">Send your project brief</h3>
              <p className="contact__form-sub">
                Free consultation — we reply within <strong>24 hours</strong> with next steps and a transparent quote.
              </p>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            {submitted && (
              <div className="contact__success" role="status">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Opening your email app — our team will reply within 24 hours.
              </div>
            )}

            <div className="contact__form-grid">
              <div className="contact__field">
                <label htmlFor="name">Full name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact__field">
                <label htmlFor="email">Work email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="name@company.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact__field contact__field--full">
                <label htmlFor="service">Service required</label>
                <select id="service" name="service" value={form.service} onChange={handleChange} required>
                  <option value="">Select a service</option>
                  {SERVICES.map((service) => (
                    <option key={service.id} value={service.title}>
                      {service.title}
                    </option>
                  ))}
                  <option value="Custom Package">Custom Package</option>
                </select>
              </div>
              <div className="contact__field contact__field--full">
                <label htmlFor="message">Project brief</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Goals, timeline, budget range, and anything we should know..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn--primary btn--lg btn--full btn--shimmer contact__submit">
              {SECTION_COPY.contact.cta}
            </button>

            <div className="contact__form-alt">
              <span>Prefer direct contact?</span>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              <span className="contact__form-alt-sep" aria-hidden="true">
                ·
              </span>
              <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>
          </form>

          <ul className="contact__trust">
            {trustPoints.map((point) => (
              <li key={point.label}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d={point.icon} />
                </svg>
                {point.label}
              </li>
            ))}
          </ul>
        </div>
      </AnimateOnScroll>
    </div>
  )

  if (embedded) {
    return <div className="contact-section contact-section--embedded">{wrapper}</div>
  }

  return (
    <section
      className={`section contact-section${standalone ? ' contact-section--page' : ''}`}
      id={standalone ? undefined : 'contact'}
      aria-labelledby="contact-title"
    >
      <div className="contact-section__accent" aria-hidden="true" />
      <div className="contact-section__glow contact-section__glow--left" aria-hidden="true" />
      <div className="contact-section__glow contact-section__glow--right" aria-hidden="true" />
      <div className="contact-section__grid" aria-hidden="true" />
      <div className="container">{wrapper}</div>
    </section>
  )
}