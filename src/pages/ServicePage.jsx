import { Link, useParams } from 'react-router-dom'
import AnimateOnScroll from '../components/AnimateOnScroll'
import ServiceIcon from '../components/ServiceIcon'
import { getServiceBySlug, SERVICE_PAGES } from '../data/servicePages'
import { SITE } from '../data/site'
import NavHashLink from '../components/NavHashLink'
import { CONTACT_HREF, ROUTES, homeRoute, HOME_SECTIONS } from '../data/routes'
import NotFoundPage from './NotFoundPage'

export default function ServicePage() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) {
    return <NotFoundPage />
  }

  const related = service.relatedServices
    .map((relatedSlug) => SERVICE_PAGES.find((s) => s.slug === relatedSlug))
    .filter(Boolean)

  return (
    <article className="service-page" itemScope itemType="https://schema.org/Service">
      <meta itemProp="name" content={service.title} />
      <meta itemProp="provider" content={SITE.name} />
      <header className="service-page__hero">
        <div className="container">
          <AnimateOnScroll immediate>
            <nav className="service-page__crumb" aria-label="Breadcrumb">
              <Link to={ROUTES.home}>Home</Link>
              <span aria-hidden="true">/</span>
              <Link to={ROUTES.services}>Services</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">{service.title}</span>
            </nav>
            {service.tag && <span className="service-page__tag">{service.tag}</span>}
            <h1 className="service-page__title">{service.h1}</h1>
            <p className="service-page__intro" itemProp="description">{service.intro}</p>
            <div className="service-page__actions">
              <NavHashLink href={CONTACT_HREF} className="btn btn--primary btn--lg btn--shimmer">
                Get a Free Quote
              </NavHashLink>
              <NavHashLink to={homeRoute(HOME_SECTIONS.work)} className="btn btn--outline btn--lg">
                View Portfolio
              </NavHashLink>
              <Link to={ROUTES.home} className="btn btn--ghost btn--lg">
                Homepage
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </header>

      <div className="container service-page__body">
        <div className="service-page__icon-card" aria-hidden="true">
          <ServiceIcon name={service.icon} />
        </div>

        {service.sections.map((section, index) => (
          <AnimateOnScroll key={section.heading} delay={index * 60}>
            <section className="service-page__block">
              <h2>{section.heading}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
              {section.type === 'benefits' && (
                <ul className="service-page__benefits">
                  {section.items.map((item) => (
                    <li key={item.title}>
                      <h3>{item.title}</h3>
                      <p>{item.body}</p>
                    </li>
                  ))}
                </ul>
              )}
              {section.type === 'process' && (
                <ol className="service-page__process">
                  {section.items.map((step, stepIndex) => (
                    <li key={step.title}>
                      <span className="service-page__process-num">{String(stepIndex + 1).padStart(2, '0')}</span>
                      <div>
                        <h3>{step.title}</h3>
                        <p>{step.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              )}
            </section>
          </AnimateOnScroll>
        ))}

        <AnimateOnScroll delay={120}>
          <section className="service-page__block service-page__tech" aria-labelledby={`tech-${service.slug}`}>
            <h2 id={`tech-${service.slug}`}>Technologies we use</h2>
            <ul className="service-page__tech-list">
              {service.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </section>
        </AnimateOnScroll>

        <AnimateOnScroll delay={160}>
          <section className="service-page__faq" aria-labelledby={`faq-${service.slug}`}>
            <h2 id={`faq-${service.slug}`}>Frequently asked questions</h2>
            <div className="faq-list">
              {service.faqs.map((faq) => (
                <details key={faq.q} className="service-page__faq-item">
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </section>
        </AnimateOnScroll>

        {related.length > 0 && (
          <AnimateOnScroll delay={200}>
            <section className="service-page__related" aria-labelledby={`related-${service.slug}`}>
              <h2 id={`related-${service.slug}`}>Related services</h2>
              <ul className="service-page__related-list">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link to={item.path}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </section>
          </AnimateOnScroll>
        )}

        <AnimateOnScroll delay={240}>
          <section className="service-page__cta">
            <h2>Ready to start your {service.title.toLowerCase()} project?</h2>
            <p>
              Tell us about your goals and timeline. {SITE.name} replies within one business day with a scoped plan and
              quote. Based in {SITE.location}, serving clients across India and overseas.
            </p>
            <div className="service-page__actions service-page__actions--cta">
              <NavHashLink href={CONTACT_HREF} className="btn btn--primary btn--lg">
                Contact {SITE.name}
              </NavHashLink>
              <NavHashLink to={homeRoute(HOME_SECTIONS.process)} className="btn btn--outline btn--lg">
                Our process
              </NavHashLink>
            </div>
          </section>
        </AnimateOnScroll>
      </div>
    </article>
  )
}