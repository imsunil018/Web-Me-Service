import { useState } from 'react'
import AnimateOnScroll from './AnimateOnScroll'
import { SITE } from '../data/site'

const faqs = [
  {
    q: 'What services does WebMeService offer?',
    a: 'We offer smart contract development, blockchain solutions, web development, graphic design (Photoshop/Illustrator), UI/UX design, mobile apps, SEO, and cloud hosting — all under one roof.',
  },
  {
    q: 'How long does a typical web project take?',
    a: 'A standard 5-page website takes 7–10 days. Custom web apps and blockchain projects vary from 2–8 weeks depending on complexity. We provide a clear timeline before starting.',
  },
  {
    q: 'Do you audit smart contracts before deployment?',
    a: 'Yes. Every smart contract goes through internal review and we recommend third-party audits for DeFi and high-value contracts. Security is our top priority.',
  },
  {
    q: 'Can I hire you for just graphic design?',
    a: 'Absolutely! We create logos, brand kits, social media creatives, banners, and print designs using Photoshop, Illustrator, and Figma — standalone or bundled with web projects.',
  },
  {
    q: 'What are your payment terms?',
    a: 'We work with 50% upfront and 50% on delivery for most projects. Enterprise and blockchain projects may have milestone-based payments. All terms are discussed before kickoff.',
  },
  {
    q: 'How do I get started?',
    a: `Fill out the contact form or email us at ${SITE.email}. We'll schedule a free consultation and send a detailed quote within 24 hours.`,
  },
]

const supportChannels = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    title: 'WhatsApp Chat',
    desc: 'Message us directly on WhatsApp for quick answers. We reply within 1 hour during business hours.',
    action: 'Chat on WhatsApp',
    href: `https://wa.me/919876543210?text=Hi%20WebMeService,%20I%20need%20help%20with%20a%20project`,
    external: true,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <path d="M22 6l-10 7L2 6" />
      </svg>
    ),
    title: 'Email Support',
    desc: 'Send detailed project requirements and get a comprehensive response within 24 hours.',
    action: 'Send Email',
    href: `mailto:${SITE.email}`,
    external: false,
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: 'Free Consultation',
    desc: 'Book a free 30-minute call to discuss your blockchain, web, or design project requirements.',
    action: 'Book Now',
    href: '#contact',
    external: false,
  },
]

export default function Support() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="support section" id="support">
      <div className="section__glow section__glow--right" />
      <div className="container">
        <AnimateOnScroll>
          <div className="section__header">
            <span className="section__label">Support</span>
            <h2 className="section__title">We&apos;re here to help</h2>
            <p className="section__desc">
              Questions about smart contracts, web development, or design? Reach us anytime — we&apos;re always ready to assist.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="support__channels">
          {supportChannels.map((channel, i) => (
            <AnimateOnScroll key={channel.title} as="article" className="support-channel" delay={i * 100}>
              <div className="support-channel__icon">{channel.icon}</div>
              <h3>{channel.title}</h3>
              <p>{channel.desc}</p>
              <a
                href={channel.href}
                className="support-channel__link"
                {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {channel.action}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={200}>
          <div className="support__faq">
            <h3 className="support__faq-title">Frequently Asked Questions</h3>
            <div className="faq-list">
              {faqs.map((faq, i) => (
                <div key={faq.q} className={`faq-item ${openIndex === i ? 'faq-item--open' : ''}`}>
                  <button
                    type="button"
                    className="faq-item__question"
                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                    aria-expanded={openIndex === i}
                  >
                    {faq.q}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  <div className="faq-item__answer">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}