import { useState } from 'react'
import AnimateOnScroll from './AnimateOnScroll'
import RevealGroup from './RevealGroup'
import NavHashLink from './NavHashLink'
import SectionHeader from './SectionHeader'
import { SITE, HOME_FAQS, SECTION_COPY } from '../data/site'
import { CONTACT_HREF } from '../data/routes'

const supportChannels = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <path d="M22 6l-10 7L2 6" />
      </svg>
    ),
    title: 'Email Support',
    desc: 'Send your brief, files, or questions to our project inbox. We respond within one business day.',
    action: 'Email Us',
    href: `mailto:${SITE.email}`,
    external: false,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: 'Project Consultation',
    desc: 'Share goals, budget range, and timeline through the contact form for a scoped recommendation.',
    action: 'Start a Request',
    href: CONTACT_HREF,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'Business Hours',
    desc: SITE.businessHours,
    action: 'View Contact',
    href: CONTACT_HREF,
  },
]

export default function Support() {
  const [openIndex, setOpenIndex] = useState(-1)

  const toggleFaq = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index))
  }

  return (
    <section className="section section--surface" id="support" aria-labelledby="support-title">
      <div className="section__glow section__glow--right" />
      <div className="container">
        <SectionHeader
          label={SECTION_COPY.support.label}
          title={SECTION_COPY.support.title}
          desc={SECTION_COPY.support.desc}
          titleId="support-title"
        />

        <RevealGroup className="support__channels" stagger={85}>
          {supportChannels.map((channel) => (
            <article key={channel.title} className="support-channel hover-card">
              <div className="support-channel__icon">{channel.icon}</div>
              <h3>{channel.title}</h3>
              <p>{channel.desc}</p>
              {channel.href === CONTACT_HREF ? (
                <NavHashLink href={channel.href} className="support-channel__link link-pill">
                  {channel.action}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </NavHashLink>
              ) : (
                <a
                  href={channel.href}
                  className="support-channel__link link-pill"
                  {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {channel.action}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              )}
            </article>
          ))}
        </RevealGroup>

        <div className="faq-section" id="faq" aria-labelledby="faq-title">
          <AnimateOnScroll direction="up" className="faq-section__intro">
            <span className="section__label">{SECTION_COPY.faq.label}</span>
            <h2 className="faq-section__title" id="faq-title">
              {SECTION_COPY.faq.title}
            </h2>
            <p className="faq-section__desc">{SECTION_COPY.faq.desc}</p>
            <ul className="faq-section__highlights">
              <li>Website cost & timelines explained upfront</li>
              <li>Web, mobile, blockchain & UI/UX services</li>
              <li>Support, maintenance & project process</li>
            </ul>
            <NavHashLink href={CONTACT_HREF} className="faq-section__cta link-pill">
              Still have questions?
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </NavHashLink>
          </AnimateOnScroll>

          <RevealGroup className="faq-panel" stagger={48} mode="each">
            {HOME_FAQS.map((faq, i) => {
              const isOpen = openIndex === i

              return (
                <div key={faq.q} className={`faq-panel__item${isOpen ? ' faq-panel__item--open' : ''}`}>
                  <button
                    type="button"
                    className="faq-panel__trigger"
                    onClick={() => toggleFaq(i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    id={`faq-question-${i}`}
                  >
                    <span className="faq-panel__question">{faq.q}</span>
                    <span className="faq-panel__toggle" aria-hidden="true">
                      <svg className="faq-panel__icon faq-panel__icon--plus" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                      <svg className="faq-panel__icon faq-panel__icon--minus" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${i}`}
                    className="faq-panel__body"
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    aria-hidden={!isOpen}
                  >
                    <div className="faq-panel__body-inner">
                      <p>{faq.a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </RevealGroup>
        </div>
      </div>
    </section>
  )
}