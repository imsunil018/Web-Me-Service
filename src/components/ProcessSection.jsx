import RevealGroup from './RevealGroup'
import SectionHeader from './SectionHeader'
import { SEO_PROCESS } from '../data/site'

export default function ProcessSection() {
  return (
    <section className="section section--surface process" id="process" aria-labelledby="process-title">
      <div className="section__glow section__glow--left" />
      <div className="container">
        <SectionHeader
          label="Process"
          title={SEO_PROCESS.title}
          desc={SEO_PROCESS.desc}
          titleId="process-title"
        />
        <RevealGroup as="ol" className="process__steps" stagger={70}>
          {SEO_PROCESS.steps.map((step, i) => (
            <li key={step.title} className="process-step hover-card">
              <span className="process-step__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="process-step__content">
                <h3 className="process-step__title">{step.title}</h3>
                <p className="process-step__body">{step.body}</p>
              </div>
            </li>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}