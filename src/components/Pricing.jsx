import AnimateOnScroll from './AnimateOnScroll'
import { PRICING } from '../data/site'

export default function Pricing() {
  return (
    <section className="pricing section" id="pricing">
      <div className="section__glow section__glow--center" />
      <div className="container">
        <AnimateOnScroll>
          <div className="section__header">
            <span className="section__label">Pricing</span>
            <h2 className="section__title">Affordable packages, premium quality</h2>
            <p className="section__desc">
              Transparent pricing for every budget. All packages are customizable — contact us for a tailored quote.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="pricing__grid">
          {PRICING.map((plan, i) => (
            <AnimateOnScroll
              key={plan.name}
              as="article"
              className={`pricing-card ${plan.featured ? 'pricing-card--featured' : ''}`}
              delay={i * 120}
            >
              {plan.featured && <span className="pricing-card__badge">Most Popular</span>}
              <h3 className="pricing-card__name">{plan.name}</h3>
              <div className="pricing-card__price">
                {plan.currency && <span className="pricing-card__currency">{plan.currency}</span>}
                <span className="pricing-card__amount">{plan.price}</span>
                <span className="pricing-card__period">{plan.period}</span>
              </div>
              <p className="pricing-card__desc">{plan.description}</p>
              <ul className="pricing-card__features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={`#contact`}
                className={`btn ${plan.featured ? 'btn--primary' : 'btn--outline'} btn--full`}
                data-service={plan.service}
              >
                {plan.cta}
              </a>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}