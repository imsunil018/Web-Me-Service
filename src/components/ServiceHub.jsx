import { Link } from 'react-router-dom'
import AnimateOnScroll from './AnimateOnScroll'
import SectionHeader from './SectionHeader'
import ServiceIcon from './ServiceIcon'
import { SITE } from '../data/site'
import NavHashLink from './NavHashLink'
import { CONTACT_HREF, homeHref, HOME_SECTIONS, servicesOverviewRoute } from '../data/routes'
import { getServicesOverviewPages } from '../data/servicePages'

const hubServices = getServicesOverviewPages()

export default function ServiceHub() {
  return (
    <section className="section section--muted service-hub" id="service-hub" aria-labelledby="service-hub-title">
      <div className="section__glow section__glow--center" />
      <div className="container">
        <SectionHeader
          label="Explore services"
          title="Service pages & internal links"
          desc="Dedicated landing pages for software development, web development, blockchain, smart contracts, Web3, mobile apps, and UI/UX — each with FAQs, process details, and a quote CTA."
          titleId="service-hub-title"
        />

        <div className="service-hub__grid">
          {hubServices.map((service, index) => (
            <AnimateOnScroll
              key={service.slug}
              as="article"
              className="service-hub-card hover-card"
              delay={index * 65}
            >
              {service.tag && <span className="service-hub-card__tag">{service.tag}</span>}

              <div className="service-hub-card__icon" aria-hidden="true">
                <ServiceIcon name={service.icon} />
              </div>

              <h3 className="service-hub-card__title">
                <Link to={servicesOverviewRoute(service.slug)}>{service.title}</Link>
              </h3>

              <p className="service-hub-card__intro">{service.intro}</p>

              <Link to={servicesOverviewRoute(service.slug)} className="service-hub-card__link link-pill">
                View services
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={120}>
          <p className="seo-block__note service-hub__note">
            <NavHashLink href={homeHref(HOME_SECTIONS.work)}>View our portfolio</NavHashLink>,{' '}
            <NavHashLink href={homeHref(HOME_SECTIONS.process)}>see our development process</NavHashLink>, or{' '}
            <NavHashLink href={CONTACT_HREF}>contact our software development team in {SITE.location}</NavHashLink>.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  )
}