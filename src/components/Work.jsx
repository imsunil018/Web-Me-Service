import AnimateOnScroll from './AnimateOnScroll'
import RevealGroup from './RevealGroup'
import NavHashLink from './NavHashLink'
import { PROJECTS, TESTIMONIALS, CLIENT_SECTORS, SECTION_COPY } from '../data/site'
import { PORTFOLIO_IMAGES } from '../data/portfolioImages'
import { CONTACT_HREF } from '../data/routes'

export default function Work() {
  return (
    <section className="portfolio-section" id="work" aria-labelledby="work-title">
      <div className="portfolio-section__accent" aria-hidden="true" />
      <div className="portfolio-section__glow portfolio-section__glow--left" aria-hidden="true" />
      <div className="portfolio-section__glow portfolio-section__glow--right" aria-hidden="true" />
      <div className="portfolio-section__grid" aria-hidden="true" />

      <div className="container">
        <AnimateOnScroll direction="up" className="portfolio-section__header">
          <span className="portfolio-section__badge">{SECTION_COPY.work.label}</span>
          <h2 className="portfolio-section__title" id="work-title">
            {SECTION_COPY.work.title}
          </h2>
          <p className="portfolio-section__desc">{SECTION_COPY.work.desc}</p>
        </AnimateOnScroll>

        <RevealGroup className="portfolio__grid" id="case-studies" stagger={80} mode="each">
          {PROJECTS.map((project, i) => (
            <div key={project.title} className="work-card-wrap">
              <article className={`work-card work-card--${project.color}`}>
                <div className="work-card__preview">
                  <img
                    src={PORTFOLIO_IMAGES[project.image]}
                    alt={`${project.title} — ${project.category} project preview`}
                    className="work-card__image"
                    loading="lazy"
                    decoding="async"
                    width={640}
                    height={360}
                  />
                  <div className="work-card__preview-shade" aria-hidden="true" />
                  <span className="work-card__index" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="work-card__preview-tag">{project.category}</span>
                </div>

                <div className="work-card__body">
                  <h3 className="work-card__title">{project.title}</h3>
                  <p className="work-card__summary">{project.summary}</p>
                  <div className="work-card__tech">
                    {project.tech.map((t) => (
                      <span key={t} className="work-card__tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="work-card__actions">
                    {project.github && (
                      <a
                        href={project.github}
                        className="work-card__action work-card__action--github"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.021C22 6.484 17.522 2 12 2z" />
                        </svg>
                        GitHub
                      </a>
                    )}
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        className="work-card__action work-card__action--demo"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open live demo for ${project.title}`}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </RevealGroup>

        <div className="portfolio__reviews" id="testimonials" aria-labelledby="reviews-title">
          <AnimateOnScroll className="portfolio__reviews-head">
            <span className="portfolio-section__badge">{SECTION_COPY.testimonials.label}</span>
            <h3 className="portfolio__reviews-title" id="reviews-title">
              {SECTION_COPY.testimonials.title}
            </h3>
            <p className="portfolio__reviews-desc">{SECTION_COPY.testimonials.desc}</p>
          </AnimateOnScroll>

          <RevealGroup className="portfolio__sectors" stagger={55}>
            {CLIENT_SECTORS.map((sector) => (
              <span key={sector} className="portfolio__sector">
                {sector}
              </span>
            ))}
          </RevealGroup>

          <RevealGroup className="portfolio__quotes" stagger={100}>
            {TESTIMONIALS.map((t) => (
              <div key={t.author} className="testimonial-wrap">
                <article className="testimonial-card">
                  <div className="testimonial-card__quote-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4.5 15.5c0-3.3 2.2-5.5 5-6.5-.3-2.2 1.2-4 3.5-4.5 2.8-.6 5.2 1.1 5.5 3.9.1 1.2-.2 2.3-.9 3.1L11 18H6l-1.5-2.5zM14 15.5c0-3.3 2.2-5.5 5-6.5-.3-2.2 1.2-4 3.5-4.5 2.8-.6 5.2 1.1 5.5 3.9.1 1.2-.2 2.3-.9 3.1L20.5 18H16l-1.5-2.5z" />
                    </svg>
                  </div>
                  <div className="testimonial-card__stars" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="testimonial-card__quote">&ldquo;{t.quote}&rdquo;</blockquote>
                  <div className="testimonial-card__author">
                    <div className="testimonial-card__avatar">{t.avatar}</div>
                    <div>
                      <strong>{t.author}</strong>
                      <span>{t.role}</span>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </RevealGroup>
        </div>

        <AnimateOnScroll delay={160} direction="up" className="portfolio-section__note">
          <p>
            Want something similar for your business?{' '}
            <NavHashLink href={CONTACT_HREF}>Tell us about your project</NavHashLink> — we reply within one business day.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  )
}