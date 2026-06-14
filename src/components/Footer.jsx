import { Link } from 'react-router-dom'
import AnimateOnScroll from './AnimateOnScroll'
import RevealGroup from './RevealGroup'
import { SITE, FOOTER_LINKS, FOOTER_SEO_STATEMENT } from '../data/site'
import NavHashLink from './NavHashLink'
import { ROUTES, isHomeHashHref, legalHref } from '../data/routes'

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <path d="M22 6l-10 7L2 6" />
  </svg>
)

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.594 2 12.253c0 4.52 2.865 8.35 6.839 9.704.5.092.682-.217.682-.483 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.6 22 16.772 22 12.253 22 6.594 17.523 2 12 2z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

function FooterLink({ link }) {
  const className = 'footer__link'

  if (link.internal) {
    return (
      <Link to={link.href} className={className}>
        <span className="footer__link-text">{link.label}</span>
      </Link>
    )
  }

  if (isHomeHashHref(link.href)) {
    return (
      <NavHashLink href={link.href} className={className}>
        <span className="footer__link-text">{link.label}</span>
      </NavHashLink>
    )
  }

  return (
    <a
      href={link.href}
      className={className}
      {...(link.href.startsWith('http') || link.href.startsWith('mailto')
        ? { target: link.href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' }
        : {})}
    >
      <span className="footer__link-text">{link.label}</span>
    </a>
  )
}

function FooterSocialLink({ href, label, icon: Icon, external }) {
  return (
    <a
      href={href}
      className="footer__social-link"
      aria-label={label}
      title={label}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <span className="footer__social-link-icon">
        <Icon />
      </span>
      <span className="footer__social-link-label">{label}</span>
    </a>
  )
}

export default function Footer() {
  const socialLinks = [
    { key: 'email', href: `mailto:${SITE.email}`, label: 'Email', icon: EmailIcon, external: false },
    SITE.social?.github && { key: 'github', href: SITE.social.github, label: 'GitHub', icon: GitHubIcon, external: true },
    SITE.social?.linkedin && { key: 'linkedin', href: SITE.social.linkedin, label: 'LinkedIn', icon: LinkedInIcon, external: true },
  ].filter(Boolean)

  return (
    <footer className="footer">
      <div className="footer__accent" aria-hidden="true" />
      <div className="footer__glow footer__glow--left" aria-hidden="true" />
      <div className="footer__glow footer__glow--right" aria-hidden="true" />

      <div className="container">
        <div className="footer__top">
          <AnimateOnScroll className="footer__brand">
            <Link to={ROUTES.home} className="footer__logo">
              <span className="footer__logo-icon">W</span>
              <span className="footer__logo-text">
                WebMe<span>Service</span>
              </span>
            </Link>
            <p className="footer__tagline">{SITE.about}</p>

            <ul className="footer__meta">
              <li className="footer__meta-item footer__meta-item--response">
                <span className="footer__meta-dot" aria-hidden="true" />
                Response within 24 hours
              </li>
              <li className="footer__meta-item">
                <a href={`mailto:${SITE.email}`} className="footer__meta-email">
                  {SITE.email}
                </a>
              </li>
            </ul>

            <div className="footer__social">
              {socialLinks.map((item) => (
                <FooterSocialLink key={item.key} {...item} />
              ))}
            </div>
          </AnimateOnScroll>

          <RevealGroup className="footer__cols" stagger={80} mode="each">
            {Object.entries(FOOTER_LINKS).map(([category, links]) => (
              <div key={category} className="footer__col">
                <h4 className="footer__col-title">{category}</h4>
                <ul>
                  {links.map((link) => (
                    <li key={link.label}>
                      <FooterLink link={link} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </RevealGroup>
        </div>

        <p className="footer__seo">{FOOTER_SEO_STATEMENT}</p>

        <AnimateOnScroll delay={320} className="footer__bottom">
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <nav className="footer__legal" aria-label="Legal">
            <Link to={legalHref('privacy')} className="footer__legal-link">
              Privacy Policy
            </Link>
            <span className="footer__legal-sep" aria-hidden="true">
              |
            </span>
            <Link to={legalHref('terms')} className="footer__legal-link">
              Terms of Service
            </Link>
          </nav>
        </AnimateOnScroll>
      </div>
    </footer>
  )
}