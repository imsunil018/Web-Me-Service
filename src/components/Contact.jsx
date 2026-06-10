import { useState, useEffect } from 'react'
import AnimateOnScroll from './AnimateOnScroll'
import { SITE } from '../data/site'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

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
    const subject = encodeURIComponent(`Quote Request: ${form.service || 'General'} — ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service || 'Not specified'}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setForm({ name: '', email: '', service: '', message: '' })
  }

  return (
    <section className="contact section" id="contact">
      <div className="section__glow section__glow--left" />
      <div className="container">
        <div className="contact__wrapper">
          <AnimateOnScroll className="contact__info" direction="left">
            <span className="section__label">Contact Us</span>
            <h2 className="section__title">Let&apos;s start your project</h2>
            <p className="section__desc">
              Tell us about your smart contract, website, or design needs.
              We respond within 24 hours with a free quote.
            </p>

            <div className="contact__details">
              <a href={`mailto:${SITE.email}`} className="contact__detail contact__detail--link">
                <div className="contact__detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                </div>
                <div>
                  <strong>Email</strong>
                  <span>{SITE.email}</span>
                </div>
              </a>
              <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="contact__detail contact__detail--link">
                <div className="contact__detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <strong>Phone / WhatsApp</strong>
                  <span>{SITE.phone}</span>
                </div>
              </a>
              <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="contact__detail contact__detail--link">
                <div className="contact__detail-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20" />
                  </svg>
                </div>
                <div>
                  <strong>Website</strong>
                  <span>{SITE.domain}</span>
                </div>
              </a>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll as="form" className="contact__form" direction="right" delay={150} onSubmit={handleSubmit}>
            {submitted && (
              <div className="contact__success">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Opening your email app — we&apos;ll reply within 24 hours!
              </div>
            )}
            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="name">Full Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} required />
              </div>
              <div className="contact__field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="you@email.com" value={form.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="contact__field">
              <label htmlFor="service">Service Needed</label>
              <select id="service" name="service" value={form.service} onChange={handleChange} required>
                <option value="">Select a service</option>
                <option value="Smart Contract Development">Smart Contract Development</option>
                <option value="Blockchain Solutions">Blockchain Solutions</option>
                <option value="Web Development">Web Development</option>
                <option value="Graphic Design">Graphic Design (Photoshop)</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="SEO & Digital Marketing">SEO & Digital Marketing</option>
                <option value="Cloud & Hosting">Cloud & Hosting</option>
                <option value="Custom Package">Custom Package</option>
              </select>
            </div>
            <div className="contact__field">
              <label htmlFor="message">Project Details</label>
              <textarea id="message" name="message" rows="5" placeholder="Describe your project, timeline & budget..." value={form.message} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn--primary btn--lg btn--full btn--shimmer">
              Send Quote Request
            </button>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}