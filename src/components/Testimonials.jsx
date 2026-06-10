import AnimateOnScroll from './AnimateOnScroll'

const testimonials = [
  {
    quote:
      'WebMeService built our DeFi smart contract and website from scratch. Professional, secure, and delivered ahead of schedule.',
    author: 'Rahul Sharma',
    role: 'Founder, CryptoVault India',
    avatar: 'RS',
  },
  {
    quote:
      'Our brand identity and e-commerce site look incredible. The Photoshop designs were pixel-perfect and the web dev team nailed it.',
    author: 'Priya Mehta',
    role: 'CEO, NovaBrand Studio',
    avatar: 'PM',
  },
  {
    quote:
      'Best web services agency we have worked with. From blockchain consulting to mobile UI — they handle everything with excellence.',
    author: 'Arjun Patel',
    role: 'CTO, TechAxis Solutions',
    avatar: 'AP',
  },
]

const logos = ['CryptoVault', 'NovaBrand', 'TechAxis', 'RetailCo', 'ArtChain', 'FitLife']

export default function Testimonials() {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <AnimateOnScroll>
          <div className="section__header">
            <span className="section__label">Testimonials</span>
            <h2 className="section__title">Trusted by businesses worldwide</h2>
            <p className="section__desc">
              See what our clients say about our smart contract, web development & design services.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="testimonials__logos">
            {logos.map((logo, i) => (
              <span key={logo} className="testimonials__logo" style={{ animationDelay: `${i * 0.1}s` }}>
                {logo}
              </span>
            ))}
          </div>
        </AnimateOnScroll>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={t.author} as="article" className="testimonial-card" delay={i * 100}>
              <div className="testimonial-card__stars">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
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
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}