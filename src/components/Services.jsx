import { Link } from 'react-router-dom'
import AnimateOnScroll from './AnimateOnScroll'
import RevealGroup from './RevealGroup'
import NavHashLink from './NavHashLink'
import ServiceIcon from './ServiceIcon'
import { SERVICES, SECTION_COPY } from '../data/site'
import { CONTACT_HREF, ROUTES } from '../data/routes'
import { getServicePathById } from '../data/servicePages'

const PRIMARY_SERVICE_IDS = ['web-dev', 'mobile', 'blockchain', 'smart-contract', 'uiux', 'seo']

const primaryServices = PRIMARY_SERVICE_IDS.map((id) => SERVICES.find((s) => s.id === id)).filter(Boolean)

export default function Services() {
  return (
    <section className="section services-section" id="services" aria-labelledby="services-title">
      <div className="services-section__accent" aria-hidden="true" />
      <div className="container">
        <AnimateOnScroll direction="up" className="services-section__header">
          <span className="services-section__badge">{SECTION_COPY.services.label}</span>
          <h2 className="services-section__title" id="services-title">
            {SECTION_COPY.services.title}
          </h2>
          <p className="services-section__desc">{SECTION_COPY.services.desc}</p>
        </AnimateOnScroll>

        <RevealGroup className="services__grid" stagger={65}>
          {primaryServices.map((service) => {
            const detailPath = getServicePathById(service.id)

            return (
              <div key={service.id} className="service-card-wrap">
                <article className="service-card hover-card">
                  <div className="service-card__top">
                    <div className="service-card__icon" aria-hidden="true">
                      <ServiceIcon name={service.icon} />
                    </div>
                    {service.tag ? <span className="service-card__tag">{service.tag}</span> : null}
                  </div>

                  <h3 className="service-card__title">
                    {detailPath ? <Link to={detailPath}>{service.title}</Link> : service.title}
                  </h3>

                  <p className="service-card__desc">{service.description}</p>

                  <div className="service-card__actions">
                    {detailPath ? (
                      <Link to={detailPath} className="service-card__link">
                        Learn more
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ) : null}
                    <NavHashLink href={CONTACT_HREF} className="service-card__link service-card__link--quote" data-service={service.title}>
                      Request quote
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </NavHashLink>
                  </div>
                </article>
              </div>
            )
          })}
        </RevealGroup>

        <AnimateOnScroll delay={200} direction="up" className="services-section__footer">
          <Link to={ROUTES.services} className="btn btn--outline btn--lg">
            View all services — scope, process & FAQs
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  )
}