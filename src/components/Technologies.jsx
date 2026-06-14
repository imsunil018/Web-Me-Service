import { Link } from 'react-router-dom'
import AnimateOnScroll from './AnimateOnScroll'
import SectionHeader from './SectionHeader'
import TechShowcase from './TechShowcase'
import { SEO_TECHNOLOGIES } from '../data/site'
import { ROUTES } from '../data/routes'
import { getTechnologiesPageCategories, TECH_STATS } from '../data/technologies'

const categories = getTechnologiesPageCategories()

export default function Technologies() {
  return (
    <section className="section section--muted tech-stack" id="technologies" aria-labelledby="technologies-title">
      <div className="section__glow section__glow--left" aria-hidden="true" />
      <div className="section__glow section__glow--right" aria-hidden="true" />
      <div className="tech-stack__accent" aria-hidden="true" />

      <div className="container">
        <SectionHeader
          label="Technologies"
          title={SEO_TECHNOLOGIES.title}
          desc="The frameworks, languages, and platforms we use to ship web, mobile, blockchain, and cloud products."
          titleId="technologies-title"
        />

        <TechShowcase categories={categories} stats={TECH_STATS} variant="home" />

        <AnimateOnScroll delay={100} className="tech-stack__footer">
          <Link to={ROUTES.technologies} className="btn btn--outline btn--lg">
            View full technology stack
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  )
}