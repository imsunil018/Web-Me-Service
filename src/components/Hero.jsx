import { useEffect, useState } from 'react'
import BlockchainCanvas from './BlockchainCanvas'
import AnimateOnScroll from './AnimateOnScroll'
import ServiceIcon from './ServiceIcon'
import { SITE, SERVICES, PROJECT_TICKER } from '../data/site'

const heroServices = SERVICES.slice(0, 4)
const hubServices = SERVICES.slice(0, 6)

const typeWords = SERVICES.slice(0, 5).map((s) => s.title.toLowerCase())

const stats = [
  { value: `${SERVICES.length}+`, label: 'Services offered' },
  { value: '150+', label: 'Projects delivered' },
  { value: '98%', label: 'Client satisfaction' },
]

const statusLabels = {
  delivered: 'Delivered',
  live: 'Live',
  'in-progress': 'In Progress',
}

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = typeWords[wordIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, displayText.length + 1))
        if (displayText.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 2200)
        }
      } else {
        setDisplayText(current.slice(0, displayText.length - 1))
        if (displayText.length === 0) {
          setIsDeleting(false)
          setWordIndex((i) => (i + 1) % typeWords.length)
        }
      }
    }, isDeleting ? 40 : 80)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, wordIndex])

  return (
    <section className="hero" id="home" aria-label="WebMeService hero — digital services overview">
      <div className="hero__bg">
        <BlockchainCanvas />
        <div className="hero__hex-grid" />
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--gold" />
        <div className="hero__grid" />
        <div className="hero__scanline" />
      </div>

      {heroServices.map((service, i) => (
        <a
          key={service.id}
          href="#services"
          className="hero__service-float"
          style={{
            left: ['4%', '86%', '4%', '86%'][i],
            top: ['12%', '18%', '72%', '78%'][i],
            animationDelay: `${i * 2}s`,
          }}
        >
          <div className="hero__service-float-icon">
            <ServiceIcon name={service.icon} />
          </div>
          <div className="hero__service-float-body">
            <span className="hero__service-float-tag">{service.tag || 'Service'}</span>
            <span className="hero__service-float-title">{service.title}</span>
          </div>
        </a>
      ))}

      <div className="container hero__content">
        <AnimateOnScroll delay={0}>
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            <span className="hero__badge-pulse" />
            Premium digital services at {SITE.domain}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <h1 className="hero__title">
            Grow your business with
            <span className="hero__title-accent hero__title-typed">
              {' '}{displayText}
              <span className="hero__cursor">|</span>
            </span>
          </h1>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200}>
          <p className="hero__subtitle">
            {SITE.tagline} From smart contracts & blockchain to web development,
            graphic design, mobile apps & cloud hosting — all in one place.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={300}>
          <div className="hero__cta">
            <a href="#contact" className="btn btn--primary btn--lg btn--shimmer">
              Get Free Quote
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#services" className="btn btn--outline btn--lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h7" />
              </svg>
              View Services
            </a>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={400}>
          <div className="hero__stats">
            {stats.map((stat, i) => (
              <div key={stat.label} className="hero__stat-group">
                {i > 0 && <div className="hero__stat-divider" />}
                <div className="hero__stat">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>

        <div className="hero__ticker">
          <div className="hero__ticker-label">
            <span className="hero__ticker-live" />
            Live Projects
          </div>
          <div className="hero__ticker-track">
            <div className="hero__ticker-content">
              {[...PROJECT_TICKER, ...PROJECT_TICKER].map((item, i) => (
                <div key={i} className="hero__ticker-item">
                  <span className="hero__ticker-project">{item.project}</span>
                  <span className="hero__ticker-client">{item.client}</span>
                  <span className={`hero__ticker-status hero__ticker-status--${item.status}`}>
                    {statusLabels[item.status] || item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <AnimateOnScroll delay={500}>
          <div className="hero__dashboard hero__dashboard--premium">
            <div className="hero__dashboard-glow" />
            <div className="hero__dashboard-bar">
              <span className="hero__dot hero__dot--red" />
              <span className="hero__dot hero__dot--yellow" />
              <span className="hero__dot hero__dot--green" />
              <span className="hero__dashboard-url">{SITE.domain}/services</span>
              <span className="hero__dashboard-status">
                <span className="hero__dashboard-status-dot" />
                All Services Active
              </span>
            </div>
            <div className="hero__dashboard-body hero__dashboard-body--services">
              <div className="hero__service-hub">
                <div className="hero__service-hub-title">Connected Services Hub</div>
                <div className="hero__service-hub-grid">
                  <svg className="hero__service-hub-lines" viewBox="0 0 600 280" preserveAspectRatio="none" aria-hidden="true">
                    <line x1="150" y1="70" x2="300" y2="70" className="hero__hub-line" />
                    <line x1="300" y1="70" x2="450" y2="70" className="hero__hub-line" />
                    <line x1="150" y1="210" x2="300" y2="210" className="hero__hub-line" />
                    <line x1="300" y1="210" x2="450" y2="210" className="hero__hub-line" />
                    <line x1="150" y1="70" x2="150" y2="210" className="hero__hub-line" />
                    <line x1="300" y1="70" x2="300" y2="210" className="hero__hub-line" />
                    <line x1="450" y1="70" x2="450" y2="210" className="hero__hub-line" />
                    <line x1="150" y1="70" x2="300" y2="210" className="hero__hub-line hero__hub-line--diag" />
                    <line x1="450" y1="70" x2="300" y2="210" className="hero__hub-line hero__hub-line--diag" />
                    <circle r="4" className="hero__hub-pulse">
                      <animateMotion dur="3s" repeatCount="indefinite" path="M150,70 L300,70 L450,70 L450,210 L300,210 L150,210 L150,70" />
                    </circle>
                    <circle r="3" className="hero__hub-pulse hero__hub-pulse--2">
                      <animateMotion dur="4s" repeatCount="indefinite" path="M300,70 L300,210 L150,210 L150,70 L300,70 L450,70 L450,210 L300,210" />
                    </circle>
                  </svg>
                  {hubServices.map((service, i) => (
                    <a
                      key={service.id}
                      href="#services"
                      className="hero__hub-node"
                      style={{ animationDelay: `${i * 0.12}s` }}
                    >
                      <span className="hero__hub-node-icon">
                        <ServiceIcon name={service.icon} />
                      </span>
                      <span className="hero__hub-node-label">{service.title}</span>
                      {service.tag && <span className="hero__hub-node-tag">{service.tag}</span>}
                    </a>
                  ))}
                </div>
              </div>
              <div className="hero__service-list">
                <div className="hero__service-list-title">What we deliver</div>
                {SERVICES.map((service, i) => (
                  <div key={service.id} className="hero__service-row" style={{ animationDelay: `${i * 0.06}s` }}>
                    <span className="hero__service-row-icon">
                      <ServiceIcon name={service.icon} />
                    </span>
                    <div className="hero__service-row-info">
                      <span className="hero__service-row-name">{service.title}</span>
                      <span className="hero__service-row-desc">{service.description.slice(0, 72)}…</span>
                    </div>
                    {service.tag && <span className="hero__service-row-tag">{service.tag}</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}