import AnimateOnScroll from './AnimateOnScroll'
import ServiceIcon from './ServiceIcon'
import { SERVICES } from '../data/site'

export default function Services() {
  return (
    <section className="services section" id="services">
      <div className="section__glow section__glow--right" />
      <div className="container">
        <AnimateOnScroll>
          <div className="section__header">
            <span className="section__label">Our Services</span>
            <h2 className="section__title">Everything your business needs online</h2>
            <p className="section__desc">
              From blockchain & smart contracts to stunning websites and Photoshop designs —
              WebMeService delivers end-to-end digital solutions.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="services__grid">
          {SERVICES.map((service, i) => (
            <AnimateOnScroll key={service.id} as="article" className="service-card" delay={i * 70}>
              {service.tag && <span className="service-card__tag">{service.tag}</span>}
              <div className="service-card__icon">
                <ServiceIcon name={service.icon} />
              </div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.description}</p>
              <a href={`#contact`} className="service-card__link" data-service={service.title}>
                Get Quote
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}