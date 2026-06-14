import RevealGroup from './RevealGroup'
import SectionHeader from './SectionHeader'
import { SEO_WHY_CHOOSE } from '../data/site'

const whyIcons = [
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
      <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6M9 13h6M9 17h4" />
    </svg>
  ),
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
]

export default function WhyChoose() {
  return (
    <section className="section section--muted why-choose" id="why-choose" aria-labelledby="why-choose-title">
      <div className="section__glow section__glow--right" />
      <div className="container">
        <SectionHeader
          label="Why WebMeService"
          title={SEO_WHY_CHOOSE.title}
          desc={SEO_WHY_CHOOSE.desc}
          titleId="why-choose-title"
        />
        <RevealGroup className="why-choose__grid" stagger={75}>
          {SEO_WHY_CHOOSE.items.map((item, i) => (
            <article key={item.title} className="why-card hover-card">
              <div className="why-card__icon" aria-hidden="true">
                {whyIcons[i]}
              </div>
              <h3 className="why-card__title">{item.title}</h3>
              <p className="why-card__body">{item.body}</p>
            </article>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}