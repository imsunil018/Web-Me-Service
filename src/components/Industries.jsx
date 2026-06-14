import RevealGroup from './RevealGroup'
import SectionHeader from './SectionHeader'
import { SEO_INDUSTRIES } from '../data/site'

const industryIcons = {
  Healthcare: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M12 21s-7-4.5-7-11a4 4 0 017-2 4 4 0 017 2c0 6.5-7 11-7 11z" />
      <path d="M12 8v6M9 11h6" />
    </svg>
  ),
  'Retail & E-commerce': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M6 6h15l-1.5 9H7.5L6 6z" />
      <path d="M6 6L5 3H2" />
      <circle cx="9" cy="20" r="1" />
      <circle cx="18" cy="20" r="1" />
    </svg>
  ),
  'SaaS & IT': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="3" y="4" width="18" height="5" rx="1.5" />
      <rect x="3" y="11" width="18" height="5" rx="1.5" />
      <path d="M7 6.5h.01M7 13.5h.01" />
    </svg>
  ),
  'Web3 & DeFi': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
    </svg>
  ),
  Hospitality: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M4 10h16v10H4z" />
      <path d="M8 10V6a4 4 0 018 0v4" />
      <path d="M9 15h6" />
    </svg>
  ),
  'Professional services': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
      <path d="M3 12h18" />
    </svg>
  ),
}

export default function Industries() {
  return (
    <section className="section section--surface industries" id="industries" aria-labelledby="industries-title">
      <div className="section__glow section__glow--left" />
      <div className="container">
        <SectionHeader
          label="Industries"
          title={SEO_INDUSTRIES.title}
          desc={SEO_INDUSTRIES.desc}
          titleId="industries-title"
        />
        <RevealGroup className="industries__grid" stagger={68}>
          {SEO_INDUSTRIES.items.map((item, i) => (
            <article key={item.name} className="industry-card hover-card">
              <span className="industry-card__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="industry-card__icon" aria-hidden="true">
                {industryIcons[item.name]}
              </div>
              <h3 className="industry-card__title">{item.name}</h3>
              <p className="industry-card__body">{item.body}</p>
            </article>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}