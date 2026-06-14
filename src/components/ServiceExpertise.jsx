import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnimateOnScroll from './AnimateOnScroll'
import NavHashLink from './NavHashLink'
import SectionHeader from './SectionHeader'
import ServiceIcon from './ServiceIcon'
import { HOME_SERVICE_CATEGORIES, SECTION_COPY } from '../data/site'
import { CONTACT_HREF } from '../data/routes'

export default function ServiceExpertise() {
  const [openIds, setOpenIds] = useState(() => new Set())

  const toggleCard = (id) => {
    setOpenIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <section
      className="section section--surface expertise"
      id="service-expertise"
      aria-labelledby="service-expertise-title"
    >
      <div className="section__glow section__glow--left" />
      <div className="container">
        <SectionHeader
          label={SECTION_COPY.serviceExpertise.label}
          title={SECTION_COPY.serviceExpertise.title}
          desc={SECTION_COPY.serviceExpertise.desc}
          titleId="service-expertise-title"
          compact
        />

        <div className="expertise__grid">
          {HOME_SERVICE_CATEGORIES.map((category, index) => {
            const isOpen = openIds.has(category.id)

            return (
              <AnimateOnScroll
                key={category.id}
                as="article"
                className={`expertise-card hover-card${isOpen ? ' expertise-card--open' : ''}`}
                delay={index * 70}
                id={category.id}
              >
                <span className="expertise-card__num" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="expertise-card__top">
                  <div className="expertise-card__icon" aria-hidden="true">
                    <ServiceIcon name={category.icon} />
                  </div>
                  <div className="expertise-card__meta">
                    {category.tag && <span className="expertise-card__tag">{category.tag}</span>}
                    <h3 className="expertise-card__title" id={`${category.id}-title`}>
                      <Link to={category.servicePath}>{category.h2}</Link>
                    </h3>
                  </div>
                </div>

                <p className="expertise-card__summary">{category.summary}</p>

                <ul className="expertise-card__highlights">
                  {category.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <button
                  type="button"
                  className="expertise-card__toggle"
                  onClick={() => toggleCard(category.id)}
                  aria-expanded={isOpen}
                  aria-controls={`${category.id}-details`}
                >
                  {isOpen ? 'Show less' : 'Read delivery detail'}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                <div
                  id={`${category.id}-details`}
                  className="expertise-card__body"
                  aria-labelledby={`${category.id}-title`}
                >
                  <div className="expertise-card__body-inner">
                    {category.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 40)} className="expertise-card__text">
                        {paragraph}
                      </p>
                    ))}
                    <div className="expertise-card__actions">
                      <Link to={category.servicePath} className="btn btn--outline">
                        {category.cta}
                      </Link>
                      <NavHashLink href={CONTACT_HREF} className="expertise-card__quote link-pill">
                        Request a quote
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </NavHashLink>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}