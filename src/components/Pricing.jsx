import AnimateOnScroll from './AnimateOnScroll'
import RevealGroup from './RevealGroup'
import NavHashLink from './NavHashLink'
import { PRICING, SECTION_COPY } from '../data/site'
import { CONTACT_HREF } from '../data/routes'

const planIcons = [
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M3 21h18M5 21V9l7-4 7 4v12M9 21v-6h6v6" />
    </svg>
  ),
]

export default function Pricing() {
  return (
    <section className="section pricing-section" id="pricing" aria-labelledby="pricing-title">
      <div className="pricing-section__accent" aria-hidden="true" />
      <div className="pricing-section__glow pricing-section__glow--left" aria-hidden="true" />
      <div className="pricing-section__glow pricing-section__glow--right" aria-hidden="true" />
      <div className="pricing-section__grid" aria-hidden="true" />

      <div className="container">
        <AnimateOnScroll direction="up" className="pricing-section__header">
          <span className="pricing-section__badge">{SECTION_COPY.pricing.label}</span>
          <h2 className="pricing-section__title" id="pricing-title">
            {SECTION_COPY.pricing.title}
          </h2>
          <p className="pricing-section__desc">{SECTION_COPY.pricing.desc}</p>
        </AnimateOnScroll>

        <RevealGroup className="pricing__grid" stagger={90}>
          {PRICING.map((plan, i) => (
            <div
              key={plan.name}
              className={`pricing-card-wrap${plan.featured ? ' pricing-card-wrap--featured' : ''}`}
            >
              <article className={`pricing-card${plan.featured ? ' pricing-card--featured' : ''}`}>
                {plan.featured && <span className="pricing-card__badge">Most Selected</span>}

                <div className="pricing-card__top">
                  <span className="pricing-card__icon" aria-hidden="true">
                    {planIcons[i]}
                  </span>
                  <div>
                    <span className="pricing-card__tier">Plan {String(i + 1).padStart(2, '0')}</span>
                    <h3 className="pricing-card__name">{plan.name}</h3>
                  </div>
                </div>

                <div className="pricing-card__price">
                  {plan.currency && <span className="pricing-card__currency">{plan.currency}</span>}
                  <span className="pricing-card__amount">{plan.price}</span>
                  {plan.period && <span className="pricing-card__period">/{plan.period}</span>}
                </div>

                <p className="pricing-card__desc">{plan.description}</p>

                <ul className="pricing-card__features">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span className="pricing-card__check" aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <NavHashLink
                  href={CONTACT_HREF}
                  className={`btn ${plan.featured ? 'btn--primary' : 'btn--outline'} btn--full pricing-card__cta`}
                  data-service={plan.service}
                >
                  {plan.cta}
                </NavHashLink>
              </article>
            </div>
          ))}
        </RevealGroup>

        <AnimateOnScroll delay={180} direction="up" className="pricing-section__note">
          <p>
            All prices are starting points in INR. Your final quote depends on pages, features, and timeline —{' '}
            <NavHashLink href={CONTACT_HREF}>request a written quote</NavHashLink>.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  )
}