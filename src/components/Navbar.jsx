import { useState, useEffect, useCallback, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import {
  NAV_HOME_LINK,
  NAV_PRICING_LINK,
  NAV_CONTACT_LINK,
  NAV_DROPDOWNS,
  NAV_ALL_LINKS,
  SITE,
} from '../data/site'
import NavHashLink from './NavHashLink'
import { CONTACT_HREF, ROUTES, isHomeHashHref } from '../data/routes'

const ChevronIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M6 9l6 6 6-6" />
  </svg>
)

export default function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === ROUTES.home
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [openAccordion, setOpenAccordion] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const [activeHref, setActiveHref] = useState('/#home')
  const scrolledRef = useRef(false)
  const activeHrefRef = useRef('/#home')
  const activeHrefTimerRef = useRef(0)
  const dropdownRefs = useRef({})
  const dropdownCloseTimerRef = useRef(0)

  const sectionLinksRef = useRef([])

  const pickActiveFromLinks = useCallback((links, offset) => {
    let current = null

    for (const link of links) {
      if (!link.href.includes('#')) continue
      const section = link.section
      if (!section) continue
      if (section.getBoundingClientRect().top <= offset) {
        current = link.href
      }
    }

    return current
  }, [])

  const refreshSectionLinks = useCallback(() => {
    sectionLinksRef.current = NAV_ALL_LINKS.filter((link) => link.href.includes('#')).map((link) => {
      const hash = link.href.split('#')[1]
      return { href: link.href, section: document.getElementById(hash) }
    }).filter((link) => link.section)
  }, [])

  const updateScrollState = useCallback(() => {
    const nextScrolled = window.scrollY > 12
    if (nextScrolled !== scrolledRef.current) {
      scrolledRef.current = nextScrolled
      setScrolled(nextScrolled)
    }

    if (!isHome) return

    if (sectionLinksRef.current.length < 4) {
      refreshSectionLinks()
    }

    let current = '/#home'

    if (window.scrollY < 48) {
      current = '/#home'
    } else {
      const offset = 80
      current = pickActiveFromLinks(sectionLinksRef.current, offset) || '/#home'
    }

    if (current !== activeHrefRef.current) {
      activeHrefRef.current = current
      window.clearTimeout(activeHrefTimerRef.current)
      activeHrefTimerRef.current = window.setTimeout(() => {
        setActiveHref(current)
      }, 120)
    }
  }, [isHome, pickActiveFromLinks, refreshSectionLinks])

  useEffect(() => {
    if (!isHome) {
      sectionLinksRef.current = []
      setActiveHref('/#home')
      activeHrefRef.current = '/#home'
      return undefined
    }

    refreshSectionLinks()

    if (!location.hash && window.scrollY < 48) {
      setActiveHref('/#home')
      activeHrefRef.current = '/#home'
    } else if (location.hash) {
      const href = `/#${location.hash.replace('#', '')}`
      if (NAV_ALL_LINKS.some((link) => link.href === href)) {
        setActiveHref(href)
        activeHrefRef.current = href
      }
    }

    let ticking = false

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        updateScrollState()
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    updateScrollState()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.clearTimeout(activeHrefTimerRef.current)
    }
  }, [isHome, location.hash, updateScrollState, refreshSectionLinks])

  useEffect(() => {
    document.documentElement.classList.toggle('nav-open', menuOpen)
    return () => document.documentElement.classList.remove('nav-open')
  }, [menuOpen])

  useEffect(() => {
    if (!openDropdown) return undefined

    const onPointerDown = (event) => {
      const openRef = dropdownRefs.current[openDropdown]
      if (openRef && !openRef.contains(event.target)) {
        setOpenDropdown(null)
      }
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpenDropdown(null)
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [openDropdown])

  useEffect(() => {
    return () => window.clearTimeout(dropdownCloseTimerRef.current)
  }, [])

  const openDrop = (id) => {
    window.clearTimeout(dropdownCloseTimerRef.current)
    setOpenDropdown(id)
  }

  const scheduleCloseDrop = () => {
    window.clearTimeout(dropdownCloseTimerRef.current)
    dropdownCloseTimerRef.current = window.setTimeout(() => {
      setOpenDropdown(null)
    }, 140)
  }

  const closeMenu = () => {
    setMenuOpen(false)
    setOpenAccordion(null)
  }

  const toggleMenu = () => setMenuOpen((open) => !open)

  const toggleAccordion = (id) => {
    setOpenAccordion((current) => (current === id ? null : id))
  }

  const linkClass = (link) => {
    const classes = []
    if (link.main) classes.push('navbar__link--main')
    if (activeHref === link.href) classes.push('navbar__link--active')
    return classes.length ? classes.join(' ') : undefined
  }

  const dropLinkClass = (link) =>
    activeHref === link.href ? 'navbar__drop-link navbar__drop-link--active' : 'navbar__drop-link'

  const renderNavAnchor = (link, className, onNavigate) => {
    if (link.internal) {
      return (
        <Link to={link.href} className={className} onClick={onNavigate}>
          {link.label}
        </Link>
      )
    }

    if (isHomeHashHref(link.href)) {
      return (
        <NavHashLink href={link.href} className={className} onClick={onNavigate}>
          {link.label}
        </NavHashLink>
      )
    }

    return (
      <a href={link.href} className={className} onClick={onNavigate}>
        {link.label}
      </a>
    )
  }

  const isDropdownActive = (dropdown) =>
    dropdown.links.some((link) => activeHref === link.href) || activeHref === dropdown.href

  const dropdownOpen = Boolean(openDropdown)

  return (
    <>
      <header
        className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${menuOpen ? 'navbar--menu-open' : ''}${dropdownOpen ? ' navbar--drop-open' : ''}`}
      >
        <div className="navbar__inner">
            <Link to={ROUTES.home} className="navbar__logo" onClick={closeMenu} aria-label={`${SITE.name} home`}>
              <span className="navbar__logo-icon" aria-hidden="true">
                W
              </span>
              <span className="navbar__logo-text">
                WebMe<span>Service</span>
              </span>
            </Link>

            <nav className="navbar__nav navbar__nav--desktop" aria-label="Main navigation">
              <ul className="navbar__links">
                <li>
                  {renderNavAnchor(NAV_HOME_LINK, linkClass(NAV_HOME_LINK))}
                </li>

                {NAV_DROPDOWNS.map((dropdown) => {
                  const isOpen = openDropdown === dropdown.id
                  const isActive = isDropdownActive(dropdown)

                  return (
                    <li
                      key={dropdown.id}
                      ref={(node) => {
                        dropdownRefs.current[dropdown.id] = node
                      }}
                      className={`navbar__drop${isOpen ? ' navbar__drop--open' : ''}${isActive ? ' navbar__drop--active' : ''}`}
                      onMouseEnter={() => openDrop(dropdown.id)}
                      onMouseLeave={scheduleCloseDrop}
                    >
                      <button
                        type="button"
                        className="navbar__drop-trigger"
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                        aria-controls={`navbar-drop-${dropdown.id}`}
                        onClick={() => setOpenDropdown((current) => (current === dropdown.id ? null : dropdown.id))}
                      >
                        {dropdown.label}
                        <ChevronIcon />
                      </button>
                      <div
                        id={`navbar-drop-${dropdown.id}`}
                        className="navbar__drop-panel"
                        role="menu"
                        aria-hidden={!isOpen}
                        onMouseEnter={() => openDrop(dropdown.id)}
                      >
                        <ul className="navbar__drop-list">
                          {dropdown.links.map((link) => (
                            <li key={link.href} role="none">
                              {renderNavAnchor(link, dropLinkClass(link), () => setOpenDropdown(null))}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  )
                })}

                <li>{renderNavAnchor(NAV_PRICING_LINK, linkClass(NAV_PRICING_LINK))}</li>
                <li>{renderNavAnchor(NAV_CONTACT_LINK, linkClass(NAV_CONTACT_LINK))}</li>
              </ul>
            </nav>

            <div className="navbar__end">
              <ThemeToggle className="navbar__nav-theme" />
              <NavHashLink href={CONTACT_HREF} className="btn btn--primary btn--nav navbar__cta">
                Request Quote
              </NavHashLink>
            </div>

            <div className="navbar__mobile-actions">
              <ThemeToggle />
              <button
                type="button"
                className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                aria-controls="mobile-nav"
                onClick={toggleMenu}
              >
                <span />
                <span />
                <span />
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
        onClick={(event) => {
          if (event.target === event.currentTarget) closeMenu()
        }}
      >
        <div className="navbar__mobile-menu-inner">
          <div className="navbar__mobile-content">
            <div className="navbar__mobile-head">
              <span className="navbar__mobile-eyebrow">Menu</span>
              <p className="navbar__mobile-title">
                WebMe<span>Service</span>
              </p>
            </div>

            <nav className="navbar__mobile-nav" aria-label="Mobile links">
              <ul className="navbar__mobile-links">
                <li style={{ '--menu-i': 0 }}>
                  {renderNavAnchor(
                    NAV_HOME_LINK,
                    activeHref === NAV_HOME_LINK.href
                      ? 'navbar__mobile-link navbar__mobile-link--active'
                      : 'navbar__mobile-link',
                    closeMenu,
                  )}
                </li>

                {NAV_DROPDOWNS.map((dropdown, index) => {
                  const accordionOpen = openAccordion === dropdown.id
                  const panelId = `mobile-accordion-${dropdown.id}`

                  return (
                    <li
                      key={dropdown.id}
                      className={`navbar__accordion${accordionOpen ? ' navbar__accordion--open' : ''}`}
                      style={{ '--menu-i': index + 1 }}
                    >
                      <button
                        type="button"
                        className="navbar__accordion-trigger"
                        aria-expanded={accordionOpen}
                        aria-controls={panelId}
                        onClick={() => toggleAccordion(dropdown.id)}
                      >
                        <span>{dropdown.label}</span>
                        <ChevronIcon />
                      </button>
                      <div
                        id={panelId}
                        className="navbar__accordion-panel"
                        aria-hidden={!accordionOpen}
                      >
                        <ul className="navbar__accordion-links">
                          {dropdown.links.map((link) => (
                            <li key={link.href}>
                              {renderNavAnchor(
                                link,
                                activeHref === link.href
                                  ? 'navbar__accordion-link navbar__accordion-link--active'
                                  : 'navbar__accordion-link',
                                closeMenu,
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  )
                })}

                <li style={{ '--menu-i': NAV_DROPDOWNS.length + 1 }}>
                  {renderNavAnchor(
                    NAV_PRICING_LINK,
                    activeHref === NAV_PRICING_LINK.href
                      ? 'navbar__mobile-link navbar__mobile-link--active'
                      : 'navbar__mobile-link',
                    closeMenu,
                  )}
                </li>

                <li style={{ '--menu-i': NAV_DROPDOWNS.length + 2 }}>
                  {renderNavAnchor(
                    NAV_CONTACT_LINK,
                    activeHref === NAV_CONTACT_LINK.href
                      ? 'navbar__mobile-link navbar__mobile-link--active'
                      : 'navbar__mobile-link',
                    closeMenu,
                  )}
                </li>
              </ul>
            </nav>

            <div className="navbar__mobile-cta">
              <NavHashLink href={CONTACT_HREF} className="btn btn--primary btn--lg" onClick={closeMenu}>
                Request Quote
              </NavHashLink>
              <p className="navbar__mobile-foot">
                India-based digital agency — <span>{SITE.domain}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}