import AnimateOnScroll from './AnimateOnScroll'
import RevealGroup from './RevealGroup'
import TechIcon from './TechIcon'
import { getAllTechnologies } from '../data/technologies'

function TechStats({ stats }) {
  if (!stats?.length) return null

  return (
    <div className="tech-stack__stats" role="list">
      {stats.map((stat) => (
        <div key={stat.label} className="tech-stack__stat" role="listitem">
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </div>
  )
}

function TechMarquee({ technologies }) {
  const track = [...technologies, ...technologies]

  return (
    <div className="tech-stack__marquee" aria-hidden="true">
      <div className="tech-stack__marquee-viewport">
        <div className="tech-stack__marquee-track">
          {track.map((tech, index) => (
            <span
              key={`${tech.id}-${index}`}
              className={`tech-stack__marquee-item tech-stack__marquee-item--${tech.id}`}
            >
              <span className="tech-stack__marquee-icon">
                <TechIcon name={tech.id} />
              </span>
              <span className="tech-stack__marquee-name">{tech.name}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function UseCasePills({ useCases }) {
  if (!useCases?.length) return null

  return (
    <ul className="tech-card__tags">
      {useCases.map((useCase) => (
        <li key={useCase}>{useCase}</li>
      ))}
    </ul>
  )
}

function TechCard({ tech, detailed = false }) {
  return (
    <article className={`tech-card hover-card tech-card--${tech.id}`}>
      <div className="tech-card__icon" aria-hidden="true">
        <TechIcon name={tech.id} />
      </div>
      <div className="tech-card__body">
        <h3 className="tech-card__name">{tech.name}</h3>
        {detailed && tech.description ? (
          <p className="tech-card__summary">{tech.description}</p>
        ) : null}
        {detailed ? <UseCasePills useCases={tech.useCases} /> : null}
        {detailed && tech.whyWeUseIt ? (
          <p className="tech-card__why">
            <span>Why we use it</span>
            {tech.whyWeUseIt}
          </p>
        ) : null}
      </div>
    </article>
  )
}

export default function TechShowcase({ categories, stats, variant = 'home' }) {
  const isPage = variant === 'page'
  const allTech = getAllTechnologies()

  if (!isPage) {
    return (
      <div className="tech-showcase tech-showcase--home">
        <AnimateOnScroll direction="up">
          <TechStats stats={stats} />
        </AnimateOnScroll>

        <TechMarquee technologies={allTech} />

        <RevealGroup className="tech-showcase__pillars" stagger={80}>
          {categories.map((category) => (
              <article key={category.id} className="tech-pillar hover-card">
                <header className="tech-pillar__head">
                  <span className="tech-pillar__tag">{category.tag}</span>
                  <h3 className="tech-pillar__title">{category.label}</h3>
                  <p className="tech-pillar__desc">{category.desc}</p>
                </header>
                <ul className="tech-pillar__chips">
                  {category.items.map((tech) => (
                    <li key={tech.id}>
                      <span className={`tech-chip tech-chip--${tech.id}`}>
                        <span className="tech-chip__icon" aria-hidden="true">
                          <TechIcon name={tech.id} />
                        </span>
                        <span className="tech-chip__name">{tech.name}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
          ))}
        </RevealGroup>
      </div>
    )
  }

  return (
    <div className="tech-showcase tech-showcase--page">
      <RevealGroup mode="each" stagger={90}>
        {categories.map((category, categoryIndex) => (
          <section
            key={category.id}
            className="tech-showcase__category"
            id={category.id}
          >
            <header className="tech-showcase__category-head">
              <span className="tech-showcase__category-num" aria-hidden="true">
                {String(categoryIndex + 1).padStart(2, '0')}
              </span>
              <div className="tech-showcase__category-copy">
                <span className="tech-showcase__category-tag">{category.tag}</span>
                <h2 className="tech-showcase__category-title">{category.label}</h2>
                <p className="tech-showcase__category-desc">{category.desc}</p>
              </div>
              <span className="tech-showcase__category-count">
                {category.items.length} {category.items.length === 1 ? 'tool' : 'tools'}
              </span>
            </header>

            <RevealGroup as="ul" className="tech-showcase__grid" stagger={55}>
              {category.items.map((tech) => (
                <li key={tech.id}>
                  <TechCard tech={tech} detailed />
                </li>
              ))}
            </RevealGroup>
          </section>
        ))}
      </RevealGroup>
    </div>
  )
}