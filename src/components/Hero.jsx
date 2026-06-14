import { useEffect, useRef, useState } from 'react'

import BlockchainCanvas from './BlockchainCanvas'
import ShowcaseNetworkCanvas from './ShowcaseNetworkCanvas'
import AnimateOnScroll from './AnimateOnScroll'
import NavHashLink from './NavHashLink'
import HeroHubLineFlow from './HeroHubLineFlow'
import HeroHubPulse from './HeroHubPulse'

import ServiceIcon from './ServiceIcon'
import {
  SERVICES,
  PROJECT_TICKER,
  HERO,
  HERO_FLOAT_SERVICES,
  HERO_DELIVER_IDS,
  HERO_DELIVER_COPY,
} from '../data/site'
import { CONTACT_HREF, homeHref, HOME_SECTIONS } from '../data/routes'
import { HUB_SERVICES, HUB_SPOKES, HUB_SVG, MOBILE_HUB_SVG, hubSvgPath } from '../data/hubLayout'

const deliverServices = HERO_DELIVER_IDS.map((id) => SERVICES.find((service) => service.id === id)).filter(
  Boolean
)

const typeWords = HERO.typeWords
const longestTypeWord = typeWords.reduce(
  (longest, word) => (word.length > longest.length ? word : longest),
  typeWords[0] ?? ''
)

const statusLabels = {
  delivered: 'DELIVERED',
  live: 'LIVE',
  'in-progress': 'IN PROGRESS',
}

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [parallax, setParallax] = useState({ x: 0, y: 0, rotateX: 0, rotateY: 0 })
  const [hoverSpoke, setHoverSpoke] = useState('')
  const [ambientSpoke, setAmbientSpoke] = useState('tl')
  const visualStageRef = useRef(null)
  const ecosystemRef = useRef(null)
  const hoverSpokeRef = useRef('')
  const activeSpoke = hoverSpoke || ambientSpoke

  useEffect(() => {
    if (!typeWords.length) return undefined
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const rotate = window.setInterval(() => {
      setWordIndex((i) => (i + 1) % typeWords.length)
    }, 3200)

    return () => window.clearInterval(rotate)
  }, [])

  useEffect(() => {
    if (!typeWords.length) return undefined

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayText(typeWords[wordIndex] ?? '')
      return undefined
    }

    const current = typeWords[wordIndex] ?? ''
    let delay = isDeleting ? 42 : 72

    if (!isDeleting && displayText.length === current.length && current.length > 0) {
      delay = 2600
    }

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < current.length) {
          setDisplayText(current.slice(0, displayText.length + 1))
        } else {
          setIsDeleting(true)
        }
      } else if (displayText.length > 0) {
        setDisplayText(current.slice(0, displayText.length - 1))
      } else {
        setIsDeleting(false)
        setWordIndex((i) => (i + 1) % typeWords.length)
      }
    }, delay)

    return () => window.clearTimeout(timeout)
  }, [displayText, isDeleting, wordIndex])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const spokes = ['tl', 'tr', 'br', 'bl']
    let index = 0

    const cycle = window.setInterval(() => {
      if (hoverSpokeRef.current) return
      setAmbientSpoke(spokes[index])
      index = (index + 1) % spokes.length
    }, 3200)

    return () => window.clearInterval(cycle)
  }, [])

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const coarseQuery = window.matchMedia('(max-width: 768px), (pointer: coarse)')
    if (motionQuery.matches || coarseQuery.matches) return undefined

    let frame = 0
    let pending = null

    const applyMove = (event) => {
      const stage = visualStageRef.current
      if (!stage) {
        pending = null
        return
      }

      const rect = stage.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const normX = (event.clientX - centerX) / (rect.width / 2)
      const normY = (event.clientY - centerY) / (rect.height / 2)

      setParallax({
        x: normX * 14,
        y: normY * 10,
        rotateX: normY * -2.2,
        rotateY: normX * 2.8,
      })
      pending = null
    }

    const handleMove = (event) => {
      pending = event
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        if (pending) applyMove(pending)
      })
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMove)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section className="hero" id="home" aria-label="WebMeService — web development, blockchain and design agency in India">
      <div className="hero__bg">
        <BlockchainCanvas />
        <div className="hero__hex-grid" />
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--gold" />
        <div className="hero__grid" />
        <div className="hero__scanline" />
      </div>

      {HERO_FLOAT_SERVICES.map((service, i) => (
        <NavHashLink
          key={service.id}
          href={homeHref(HOME_SECTIONS.services)}
          className={`hero__service-float hero__service-float--${service.slot}`}
          style={{ animationDelay: `${i * 1.6}s` }}
        >
          <div className="hero__service-float-icon">
            <ServiceIcon name={service.icon} />
          </div>
          <div className="hero__service-float-body">
            <span className="hero__service-float-tag">{service.tag || 'Service'}</span>
            <span className="hero__service-float-title">{service.title}</span>
          </div>
        </NavHashLink>
      ))}

      <div className="container hero__content">
        <AnimateOnScroll delay={0} immediate>
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            <span className="hero__badge-pulse" />
            {HERO.badge}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100} immediate>
          <div className="hero__headline">
            <h1 className="hero__title">
              <span className="hero__title-lead">{HERO.titleLead}</span>
              <span
                className="hero__typewriter"
                aria-live="polite"
                aria-atomic="true"
                style={{ '--type-ch': longestTypeWord.length }}
              >
                <span className="hero__typewriter-ghost" aria-hidden="true">
                  {longestTypeWord}
                </span>
                <span className="hero__typewriter-live hero__title-accent">
                  <span className="hero__typewriter-text">{displayText}</span>
                  <span className="hero__cursor" aria-hidden="true">
                    |
                  </span>
                </span>
              </span>
            </h1>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={200} immediate>
          <p className="hero__subtitle">{HERO.subtitle}</p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={300} immediate>
          <div className="hero__cta">
            <NavHashLink href={CONTACT_HREF} className="btn btn--primary btn--lg btn--shimmer">
              Get a Free Quote
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </NavHashLink>
            <NavHashLink href={homeHref(HOME_SECTIONS.services)} className="btn btn--outline btn--lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h7" />
              </svg>
              Explore Services
            </NavHashLink>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={350} immediate>
          <div className="hero__trust-pills" aria-label="Core services">
            {HERO.trustPills.map((pill) => (
              <span key={pill} className="hero__trust-pill">
                {pill}
              </span>
            ))}
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={400} immediate>
          <div className="hero__stats">
            {HERO.stats.map((stat, i) => (
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
            {HERO.tickerLabel}
          </div>
          <div className="hero__ticker-track">
            <div className="hero__ticker-content">
              {[...PROJECT_TICKER, ...PROJECT_TICKER].map((item, i) => (
                <div key={i} className="hero__ticker-item">
                  <span className="hero__ticker-project">{item.project}</span>
                  <span className="hero__ticker-sep" aria-hidden="true">
                    |
                  </span>
                  <span className={`hero__ticker-status hero__ticker-status--${item.status}`}>
                    {statusLabels[item.status] || item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <AnimateOnScroll delay={500} immediate>
          <div className="hero__visual-stage" ref={visualStageRef}>
            <div
              className="hero__visual-ambient"
              aria-hidden="true"
            />
            <div
              className="hero__visual-parallax"
              style={{
                transform: `perspective(1400px) rotateX(${parallax.rotateX}deg) rotateY(${parallax.rotateY}deg) translate3d(${parallax.x * 0.35}px, ${parallax.y * 0.35}px, 0)`,
              }}
            >
          <div className="hero__showcase">
            <div className="hero__showcase-bg" aria-hidden="true">
              <div className="hero__showcase-grid" />
              <div className="hero__showcase-vignette" />
            </div>
            <ShowcaseNetworkCanvas className="hero__showcase-canvas" />
            <div className="hero__showcase-glow" aria-hidden="true" />
            <div className="hero__showcase-inner">
              <section className="hero__hub-section" aria-label={HERO.hubTitle}>
                <div className="hero__hub-ambient" aria-hidden="true" />
                <h2 className="hero__showcase-eyebrow">{HERO.hubTitle}</h2>
                <div
                  className="hero__ecosystem"
                  ref={ecosystemRef}
                  data-active-spoke={activeSpoke}
                >
                  <div className="hero__ecosystem-rings" aria-hidden="true">
                    <span className="hero__ecosystem-ring hero__ecosystem-ring--1" />
                    <span className="hero__ecosystem-ring hero__ecosystem-ring--2" />
                    <span className="hero__ecosystem-ring hero__ecosystem-ring--3" />
                    <span className="hero__ecosystem-ring hero__ecosystem-ring--4" />
                    <span className="hero__ecosystem-ring hero__ecosystem-ring--5" />
                  </div>
                  <div className="hero__ecosystem-center-glow" aria-hidden="true">
                    <span className="hero__ecosystem-glow-layer hero__ecosystem-glow-layer--spotlight" />
                    <span className="hero__ecosystem-glow-layer hero__ecosystem-glow-layer--outer" />
                    <span className="hero__ecosystem-glow-layer hero__ecosystem-glow-layer--aura" />
                    <span className="hero__ecosystem-glow-layer hero__ecosystem-glow-layer--core" />
                    <span className="hero__ecosystem-glow-layer hero__ecosystem-glow-layer--pulse" />
                  </div>
                  <svg className="hero__ecosystem-lines hero__ecosystem-lines--desktop" viewBox="0 0 600 300" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                      <filter id="hubFlowGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="2.8" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                      <filter id="hubPacketGlow" x="-60%" y="-60%" width="220%" height="220%">
                        <feGaussianBlur stdDeviation="4.5" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                      <linearGradient id="hubSpokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#34d399" stopOpacity="0.22" />
                        <stop offset="35%" stopColor="#6ee7b7" stopOpacity="0.62" />
                        <stop offset="65%" stopColor="#a7f3d0" stopOpacity="0.48" />
                        <stop offset="100%" stopColor="#34d399" stopOpacity="0.22" />
                      </linearGradient>
                    </defs>
                    <g className="hero__hub-lines-base">
                      {HUB_SPOKES.map(([from, to]) => (
                        <path
                          key={`spoke-glow-${from}-${to}`}
                          d={hubSvgPath(from, to)}
                          className={`hero__hub-line hero__hub-line--spoke-glow hero__hub-line--spoke-${from}`}
                          fill="none"
                        />
                      ))}
                      {HUB_SPOKES.map(([from, to]) => (
                        <path
                          key={`spoke-${from}-${to}`}
                          d={hubSvgPath(from, to)}
                          className={`hero__hub-line hero__hub-line--spoke hero__hub-line--spoke-${from}`}
                          fill="none"
                        />
                      ))}
                    </g>
                    <HeroHubLineFlow />
                    <g className="hero__hub-junctions">
                      {Object.entries(HUB_SVG).map(([slot, [cx, cy]]) => (
                        <circle
                          key={`junction-${slot}`}
                          cx={cx}
                          cy={cy}
                          r={slot === 'center' ? 5 : 3.5}
                          className={`hero__hub-junction hero__hub-junction--${slot}`}
                        />
                      ))}
                    </g>
                  </svg>
                  <svg className="hero__ecosystem-lines hero__ecosystem-lines--mobile" viewBox="0 0 400 400" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                      <filter id="hubFlowGlowMobile" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="2.6" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                      <filter id="hubPacketGlowMobile" x="-60%" y="-60%" width="220%" height="220%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                      <linearGradient id="hubSpokeGradMobile" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#34d399" stopOpacity="0.2" />
                        <stop offset="50%" stopColor="#6ee7b7" stopOpacity="0.52" />
                        <stop offset="100%" stopColor="#34d399" stopOpacity="0.2" />
                      </linearGradient>
                    </defs>
                    <g className="hero__hub-lines-base">
                      {HUB_SPOKES.map(([from, to]) => (
                        <path
                          key={`mobile-spoke-glow-${from}-${to}`}
                          d={hubSvgPath(from, to, MOBILE_HUB_SVG)}
                          className={`hero__hub-line hero__hub-line--spoke-glow hero__hub-line--spoke-${from}`}
                          fill="none"
                        />
                      ))}
                      {HUB_SPOKES.map(([from, to]) => (
                        <path
                          key={`mobile-spoke-${from}-${to}`}
                          d={hubSvgPath(from, to, MOBILE_HUB_SVG)}
                          className={`hero__hub-line hero__hub-line--spoke hero__hub-line--spoke-${from}`}
                          fill="none"
                        />
                      ))}
                    </g>
                    <HeroHubLineFlow
                      coords={MOBILE_HUB_SVG}
                      flowFilterId="hubFlowGlowMobile"
                      packetFilterId="hubPacketGlowMobile"
                    />
                    <g className="hero__hub-junctions">
                      {Object.entries(MOBILE_HUB_SVG).map(([slot, [cx, cy]]) => (
                        <circle
                          key={`mobile-junction-${slot}`}
                          cx={cx}
                          cy={cy}
                          r={slot === 'center' ? 4.5 : 3}
                          className={`hero__hub-junction hero__hub-junction--${slot}`}
                        />
                      ))}
                    </g>
                  </svg>
                  <HeroHubPulse ecosystemRef={ecosystemRef} />
                  {HUB_SERVICES.map((service, i) => (
                    <NavHashLink
                      key={service.id}
                      href={service.href || homeHref(HOME_SECTIONS.services)}
                      className={`hero__hub-node ${service.gridClass}${service.slot === 'center' ? ' hero__hub-node--center' : ''} hero__hub-node--fx-${service.hubFx || 'default'}`}
                      style={{ animationDelay: `${i * 0.08}s` }}
                      onMouseEnter={() => {
                        if (service.slot !== 'center') {
                          hoverSpokeRef.current = service.slot
                          setHoverSpoke(service.slot)
                        }
                      }}
                      onMouseLeave={() => {
                        hoverSpokeRef.current = ''
                        setHoverSpoke('')
                      }}
                      onFocus={() => {
                        if (service.slot !== 'center') {
                          hoverSpokeRef.current = service.slot
                          setHoverSpoke(service.slot)
                        }
                      }}
                      onBlur={() => {
                        hoverSpokeRef.current = ''
                        setHoverSpoke('')
                      }}
                    >
                      <span className="hero__hub-node-fx" aria-hidden="true">
                        <span className="hero__hub-node-glow" />
                        <span className="hero__hub-node-shimmer" />
                        <span className="hero__hub-node-scan" />
                        <span className="hero__hub-node-spark hero__hub-node-spark--1" />
                        <span className="hero__hub-node-spark hero__hub-node-spark--2" />
                        <span className="hero__hub-node-spark hero__hub-node-spark--3" />
                        {service.slot === 'center' ? (
                          <>
                            <span className="hero__hub-node-orbit hero__hub-node-orbit--1" />
                            <span className="hero__hub-node-orbit hero__hub-node-orbit--2" />
                          </>
                        ) : null}
                      </span>
                      <span className="hero__hub-node-icon-wrap">
                        {service.slot !== 'center' && (
                          <span className="hero__hub-node-beacon" aria-hidden="true" />
                        )}
                        <span className="hero__hub-node-icon">
                          <ServiceIcon name={service.icon} />
                        </span>
                      </span>
                      <span className="hero__hub-node-label">
                        {service.hubLabel || service.title}
                      </span>
                    </NavHashLink>
                  ))}
                </div>
              </section>

              <section className="hero__deliver-section" aria-label={HERO.listTitle}>
                <h3 className="hero__showcase-eyebrow hero__showcase-eyebrow--sub">{HERO.listTitle}</h3>
                <div className="hero__deliver-grid">
                  {deliverServices.map((service, i) => (
                    <NavHashLink
                      key={service.id}
                      href={homeHref(HOME_SECTIONS.services)}
                      className="hero__deliver-card"
                      style={{ animationDelay: `${i * 0.05}s` }}
                    >
                      <span className="hero__deliver-card-shine" aria-hidden="true" />
                      <span className="hero__deliver-card-icon">
                        <ServiceIcon name={service.icon} />
                      </span>
                      <span className="hero__deliver-card-body">
                        <span className="hero__deliver-card-title">{service.title}</span>
                        <span className="hero__deliver-card-desc">
                          {HERO_DELIVER_COPY[service.id] || service.description}
                        </span>
                      </span>
                    </NavHashLink>
                  ))}
                </div>
              </section>
            </div>
          </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}