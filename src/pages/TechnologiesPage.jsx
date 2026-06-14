import { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AnimateOnScroll from '../components/AnimateOnScroll'
import TechShowcase from '../components/TechShowcase'
import NavHashLink from '../components/NavHashLink'
import { SITE } from '../data/site'
import { CONTACT_HREF, ROUTES, homeHref, HOME_SECTIONS } from '../data/routes'
import { TECHNOLOGIES_PAGE, TECH_STATS } from '../data/technologies'

const categories = TECHNOLOGIES_PAGE.categories

function scrollToCategory(id) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  window.history.replaceState(null, '', `${ROUTES.technologies}#${id}`)
}

export default function TechnologiesPage() {
  const location = useLocation()
  const mounted = useRef(false)

  useEffect(() => {
    const id = location.hash.replace('#', '')
    if (!id || !categories.some((c) => c.id === id)) return
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: mounted.current ? 'smooth' : 'auto', block: 'start' })
    })
    mounted.current = true
  }, [location.hash])

  return (
    <div className="technologies-page">
      <header className="technologies-page__hero">
        <div className="technologies-page__hero-glow" aria-hidden="true" />
        <div className="container">
          <AnimateOnScroll immediate>
            <nav className="technologies-page__crumb" aria-label="Breadcrumb">
              <Link to={ROUTES.home}>Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Technologies</span>
            </nav>
            <span className="section__label">{TECHNOLOGIES_PAGE.label}</span>
            <h1 className="technologies-page__title">{TECHNOLOGIES_PAGE.h1}</h1>
            <p className="technologies-page__desc">{TECHNOLOGIES_PAGE.intro}</p>

            <div className="technologies-page__stats" role="list">
              {TECH_STATS.map((stat) => (
                <div key={stat.label} className="technologies-page__stat" role="listitem">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="technologies-page__hero-actions">
              <NavHashLink href={CONTACT_HREF} className="btn btn--primary btn--lg btn--shimmer">
                Discuss your stack
              </NavHashLink>
              <Link to={ROUTES.services} className="btn btn--outline btn--lg">
                View services
              </Link>
            </div>

            <nav className="technologies-page__filters" aria-label="Jump to a category">
              {categories.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="technologies-page__filter"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToCategory(category.id)
                  }}
                >
                  {category.label}
                </a>
              ))}
            </nav>
          </AnimateOnScroll>
        </div>
      </header>

      <div className="container technologies-page__content">
        <TechShowcase categories={categories} variant="page" />

        <AnimateOnScroll delay={80}>
          <section className="technologies-page__cta" aria-labelledby="technologies-page-cta">
            <h2 id="technologies-page-cta">Need help picking the right stack?</h2>
            <p>
              Tell us about your product, timeline, and team. {SITE.name} recommends a practical technology mix —
              web, mobile, blockchain, or cloud — with a written quote within 24 hours.
            </p>
            <div className="technologies-page__cta-actions">
              <NavHashLink href={CONTACT_HREF} className="btn btn--primary btn--lg btn--shimmer">
                Get a free consultation
              </NavHashLink>
              <Link to={ROUTES.services} className="btn btn--outline btn--lg">
                Explore services
              </Link>
            </div>
          </section>
        </AnimateOnScroll>

        <p className="technologies-page__foot">
          Based in {SITE.location} ·{' '}
          <Link to={ROUTES.services}>Services</Link> ·{' '}
          <NavHashLink href={homeHref(HOME_SECTIONS.process)}>Process</NavHashLink> ·{' '}
          <NavHashLink href={CONTACT_HREF}>Contact</NavHashLink>
        </p>
      </div>
    </div>
  )
}