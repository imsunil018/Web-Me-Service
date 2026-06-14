import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AnimateOnScroll from '../components/AnimateOnScroll'
import ServiceIcon from '../components/ServiceIcon'
import NavHashLink from '../components/NavHashLink'
import { SITE } from '../data/site'
import { CONTACT_HREF, ROUTES, homeHref, HOME_SECTIONS } from '../data/routes'
import { getServicesOverviewPages, SERVICES_PAGE } from '../data/servicePages'

const overviewServices = getServicesOverviewPages()

function scrollToService(slug) {
  const el = document.getElementById(slug)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  window.history.replaceState(null, '', `${ROUTES.services}#${slug}`)
}

export default function ServicesOverviewPage() {
  const location = useLocation()
  const mounted = useRef(false)

  useEffect(() => {
    const slug = location.hash.replace('#', '')
    if (!slug || !overviewServices.some((s) => s.slug === slug)) return
    requestAnimationFrame(() => {
      document.getElementById(slug)?.scrollIntoView({ behavior: mounted.current ? 'smooth' : 'auto', block: 'start' })
    })
    mounted.current = true
  }, [location.hash])

  return (
    <div className="services-overview">
      <header className="services-overview__hero">
        <div className="container">
          <AnimateOnScroll immediate>
            <nav className="services-overview__crumb" aria-label="Breadcrumb">
              <Link to={ROUTES.home}>Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Services</span>
            </nav>
            <span className="section__label">{SERVICES_PAGE.label}</span>
            <h1 className="services-overview__title">{SERVICES_PAGE.h1}</h1>
            <p className="services-overview__desc">{SERVICES_PAGE.intro}</p>
            <div className="services-overview__hero-actions">
              <NavHashLink href={CONTACT_HREF} className="btn btn--primary btn--lg btn--shimmer">
                Get a free quote
              </NavHashLink>
              <NavHashLink href={homeHref(HOME_SECTIONS.work)} className="btn btn--outline btn--lg">
                View portfolio
              </NavHashLink>
            </div>

            <nav className="services-overview__filters" aria-label="Jump to a service">
              {overviewServices.map((service) => (
                <a
                  key={service.slug}
                  href={`#${service.slug}`}
                  className="services-overview__filter"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToService(service.slug)
                  }}
                >
                  {service.displayTitle}
                </a>
              ))}
            </nav>
          </AnimateOnScroll>
        </div>
      </header>

      <div className="container services-overview__content">
        {overviewServices.map((service, index) => (
          <AnimateOnScroll key={service.slug} delay={index * 40} as="section" className="services-overview__service" id={service.slug}>
            <header className="services-overview__service-head">
              <span className="services-overview__service-num">{String(index + 1).padStart(2, '0')}</span>
              <span className="services-overview__service-icon" aria-hidden="true">
                <ServiceIcon name={service.icon} />
              </span>
              <div className="services-overview__service-meta">
                {service.tag && <span className="services-overview__service-tag">{service.tag}</span>}
                <h2 className="services-overview__service-title">{service.displayTitle}</h2>
                <p className="services-overview__service-intro">{service.intro}</p>
              </div>
            </header>

            <div className="services-overview__service-body">
              <section className="services-overview__block" aria-labelledby={`${service.slug}-overview`}>
                <h3 className="services-overview__block-title" id={`${service.slug}-overview`}>
                  Overview
                </h3>
                <div className="services-overview__overview">
                  {service.overviewParagraphs.slice(0, 2).map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </div>
              </section>

              {service.benefits?.length > 0 && (
                <section className="services-overview__block" aria-labelledby={`${service.slug}-benefits`}>
                  <h3 className="services-overview__block-title" id={`${service.slug}-benefits`}>
                    Benefits
                  </h3>
                  <ul className="services-overview__benefits-grid">
                    {service.benefits.map((item) => (
                      <li key={item.title}>
                        <strong>{item.title}</strong>
                        <span>{item.body}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {service.processSteps?.length > 0 && (
                <section className="services-overview__block" aria-labelledby={`${service.slug}-process`}>
                  <h3 className="services-overview__block-title" id={`${service.slug}-process`}>
                    Process
                  </h3>
                  <ol className="services-overview__process">
                    {service.processSteps.map((step, stepIndex) => (
                      <li key={step.title}>
                        <span className="services-overview__process-num">{String(stepIndex + 1).padStart(2, '0')}</span>
                        <div>
                          <strong>{step.title}</strong>
                          <p>{step.body}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </section>
              )}

              <section className="services-overview__block" aria-labelledby={`${service.slug}-tech`}>
                <h3 className="services-overview__block-title" id={`${service.slug}-tech`}>
                  Technologies
                </h3>
                <ul className="services-overview__tech-list">
                  {service.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </section>

              {service.faqs?.length > 0 && (
                <section className="services-overview__block" aria-labelledby={`${service.slug}-faq`}>
                  <h3 className="services-overview__block-title" id={`${service.slug}-faq`}>
                    FAQs
                  </h3>
                  <div className="services-overview__faq-list">
                    {service.faqs.slice(0, 3).map((faq) => (
                      <details key={faq.q} className="services-overview__faq-item">
                        <summary>{faq.q}</summary>
                        <p>{faq.a}</p>
                      </details>
                    ))}
                  </div>
                </section>
              )}

              <div className="services-overview__service-cta">
                <div>
                  <p className="services-overview__cta-lead">Ready to start your {service.displayTitle.toLowerCase()} project?</p>
                  <p className="services-overview__cta-sub">
                    {SITE.name} replies within 24 hours with a scoped plan and transparent quote.
                  </p>
                </div>
                <div className="services-overview__service-actions">
                  <NavHashLink href={CONTACT_HREF} className="btn btn--primary" data-service={service.title}>
                    Get a quote
                  </NavHashLink>
                  <Link to={service.path} className="btn btn--outline">
                    Full {service.displayTitle} page
                  </Link>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        ))}

        <AnimateOnScroll delay={80}>
          <section className="services-overview__page-cta" aria-labelledby="services-page-cta">
            <h2 id="services-page-cta">Not sure which service fits?</h2>
            <p>
              Tell us about your product goals. Our India-based team recommends the right mix of web, mobile,
              blockchain, and design — with a written quote and milestone plan.
            </p>
            <div className="services-overview__page-cta-actions">
              <NavHashLink href={CONTACT_HREF} className="btn btn--primary btn--lg btn--shimmer">
                Book a free consultation
              </NavHashLink>
              <NavHashLink href={homeHref(HOME_SECTIONS.process)} className="btn btn--outline btn--lg">
                See our process
              </NavHashLink>
            </div>
          </section>
        </AnimateOnScroll>

        <p className="services-overview__foot">
          Based in {SITE.location} ·{' '}
          <NavHashLink href={homeHref(HOME_SECTIONS.process)}>Development process</NavHashLink> ·{' '}
          <NavHashLink href={homeHref(HOME_SECTIONS.work)}>Portfolio</NavHashLink> ·{' '}
          <NavHashLink href={CONTACT_HREF}>Contact</NavHashLink>
        </p>
      </div>
    </div>
  )
}