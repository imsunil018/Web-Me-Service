import AnimateOnScroll from './AnimateOnScroll'

const projects = [
  {
    title: 'DeFi Trading Platform',
    category: 'Blockchain + Web Dev',
    tech: ['React', 'Solidity', 'Web3'],
    color: 'emerald',
  },
  {
    title: 'E-Commerce Store',
    category: 'Web Development',
    tech: ['Next.js', 'Node.js', 'MongoDB'],
    color: 'cyan',
  },
  {
    title: 'Brand Identity Suite',
    category: 'Graphic Design',
    tech: ['Photoshop', 'Illustrator', 'Figma'],
    color: 'gold',
  },
  {
    title: 'NFT Marketplace',
    category: 'Smart Contract + UI',
    tech: ['Ethereum', 'IPFS', 'React'],
    color: 'emerald',
  },
  {
    title: 'Corporate Website',
    category: 'Web + SEO',
    tech: ['WordPress', 'SEO', 'Analytics'],
    color: 'cyan',
  },
  {
    title: 'Fitness Mobile App',
    category: 'UI/UX + Mobile',
    tech: ['Figma', 'React Native', 'Firebase'],
    color: 'gold',
  },
]

export default function Work() {
  return (
    <section className="work section" id="work">
      <div className="section__glow section__glow--left" />
      <div className="container">
        <AnimateOnScroll>
          <div className="section__header">
            <span className="section__label">Our Work</span>
            <h2 className="section__title">Projects we&apos;re proud of</h2>
            <p className="section__desc">
              From blockchain dApps to stunning brand designs — see the quality we deliver for clients worldwide.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="work__grid">
          {projects.map((project, i) => (
            <AnimateOnScroll
              key={project.title}
              as="article"
              className={`work-card work-card--${project.color}`}
              delay={i * 90}
            >
              <div className="work-card__preview">
                <div className="work-card__lines">
                  <span /><span /><span />
                </div>
                <div className="work-card__mockup" />
              </div>
              <div className="work-card__body">
                <span className="work-card__category">{project.category}</span>
                <h3 className="work-card__title">{project.title}</h3>
                <div className="work-card__tech">
                  {project.tech.map((t) => (
                    <span key={t} className="work-card__tag">{t}</span>
                  ))}
                </div>
                <a href="#contact" className="work-card__link">
                  Start Similar Project
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}