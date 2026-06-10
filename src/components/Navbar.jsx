import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'
import { NAV_LINKS, SITE } from '../data/site'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('nav-open', menuOpen)
    return () => document.documentElement.classList.remove('nav-open')
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)
  const openMenu = () => setMenuOpen(true)

  return (
    <>
      <header
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--menu-open' : ''}`}
      >
        <div className="container navbar__bar">
          <a href="#home" className="navbar__logo" onClick={closeMenu} aria-label={`${SITE.name} home`}>
            <span className="navbar__logo-icon" aria-hidden="true">W</span>
            <span className="navbar__logo-text">WebMe<span>Service</span></span>
          </a>

          <nav className="navbar__nav navbar__nav--desktop" aria-label="Main navigation">
            <ul className="navbar__links">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={link.main ? 'navbar__link--main' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="navbar__actions">
              <ThemeToggle className="navbar__nav-theme" />
              <a href="#contact" className="btn btn--primary">
                Get Free Quote
              </a>
            </div>
          </nav>

          <div className="navbar__mobile-actions">
            <ThemeToggle />
            <button
              type="button"
              className="navbar__toggle"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={openMenu}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-nav"
        className={`navbar__mobile-menu ${menuOpen ? 'navbar__mobile-menu--open' : ''}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="navbar__mobile-menu-inner">
          <button
            type="button"
            className="navbar__close"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <div className="navbar__mobile-content">
            <div className="navbar__mobile-head">
              <span className="navbar__mobile-eyebrow">Navigation</span>
              <h2 className="navbar__mobile-title">
                WebMe<span>Service</span>
              </h2>
            </div>

            <nav className="navbar__mobile-nav" aria-label="Mobile links">
              <ul className="navbar__mobile-links">
                {NAV_LINKS.map((link, index) => (
                  <li key={link.href} style={{ '--menu-i': index }}>
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className={link.main ? 'navbar__mobile-link navbar__mobile-link--main' : 'navbar__mobile-link'}
                    >
                      <span className="navbar__mobile-link-num">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="navbar__mobile-link-text">{link.label}</span>
                      <span className="navbar__mobile-link-arrow" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M13 6l6 6-6 6" />
                        </svg>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="navbar__mobile-cta">
              <a href="#contact" className="btn btn--primary btn--shimmer" onClick={closeMenu}>
                Get Free Quote
              </a>
              <p className="navbar__mobile-foot">
                Premium digital services at <span>{SITE.domain}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}