import { useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import AnimateOnScroll from '../components/AnimateOnScroll'
import LegalSectionContent from '../components/LegalSectionContent'
import { LEGAL_PAGE, LEGAL_SECTIONS, ROUTES } from '../data/routes'
import { LEGAL_UPDATED, PRIVACY_SECTIONS, TERMS_SECTIONS } from '../data/legal'
import { SITE } from '../data/site'

const TABS = [
  {
    id: LEGAL_SECTIONS.privacy,
    label: 'Privacy Policy',
    short: 'Privacy',
    desc: 'Data collection, cookies & your rights',
    panelDesc:
      'How WebMeService handles information when you browse, request a quote, or work with us on web, mobile, and blockchain projects.',
    sections: PRIVACY_SECTIONS,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: LEGAL_SECTIONS.terms,
    label: 'Terms of Service',
    short: 'Terms',
    desc: 'Pricing, delivery, IP & liability',
    panelDesc:
      'Rules for using webmeservice.in and hiring our software development, design, and Web3 services.',
    sections: TERMS_SECTIONS,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
  },
]

const TAB_IDS = new Set(TABS.map((tab) => tab.id))

function resolveTab(hash) {
  const id = hash.replace('#', '')
  return TAB_IDS.has(id) ? id : LEGAL_SECTIONS.privacy
}

function LegalToc({ sections }) {
  return (
    <nav className="legal-page__toc" aria-label="On this page">
      <span className="legal-page__toc-label">On this page</span>
      <ul className="legal-page__toc-list">
        {sections.map((section) => (
          <li key={section.id}>
            <a href={`#${section.id}`} className="legal-page__toc-link">
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default function LegalPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const panelsRef = useRef(null)
  const activeTab = resolveTab(location.hash)
  const activeMeta = TABS.find((tab) => tab.id === activeTab) ?? TABS[0]

  useEffect(() => {
    if (!location.hash || !TAB_IDS.has(location.hash.replace('#', ''))) {
      navigate(
        { pathname: ROUTES.legal, hash: `#${LEGAL_SECTIONS.privacy}` },
        { replace: true },
      )
    }
  }, [location.hash, navigate])

  useEffect(() => {
    if (location.pathname !== ROUTES.legal) return undefined
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timeout = window.setTimeout(() => {
      panelsRef.current?.scrollIntoView({
        behavior: reduced ? 'auto' : 'smooth',
        block: 'nearest',
      })
    }, 120)
    return () => window.clearTimeout(timeout)
  }, [location.pathname, activeTab])

  useEffect(() => {
    document.documentElement.classList.add('legal-route')
    return () => document.documentElement.classList.remove('legal-route')
  }, [])

  const setTab = (id) => {
    navigate({ pathname: ROUTES.legal, hash: `#${id}` })
    window.requestAnimationFrame(() => {
      panelsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  return (
    <article className="legal-page legal-page--hub">
      <div className="legal-page__hero">
        <div className="container">
          <AnimateOnScroll immediate>
            <nav className="legal-page__crumb" aria-label="Breadcrumb">
              <Link to={ROUTES.home}>Home</Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page">Legal</span>
            </nav>
            <div className="legal-page__hero-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" width="18" height="18" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Legal Center
            </div>
            <h1 className="legal-page__title">{LEGAL_PAGE.title}</h1>
            <p className="legal-page__subtitle">
              Policies for {SITE.name} — web development, mobile apps, blockchain, smart contracts, and UI/UX services in India.
            </p>
            <p className="legal-page__updated">Last updated: {LEGAL_UPDATED}</p>
          </AnimateOnScroll>
        </div>
      </div>

      <div className="container legal-page__shell">
        <div className="legal-page__picker legal-page__picker--duo" role="tablist" aria-label="Legal sections">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`legal-tab-${tab.id}`}
              aria-selected={activeTab === tab.id}
              aria-controls={`legal-panel-${tab.id}`}
              className={`legal-page__picker-card${activeTab === tab.id ? ' legal-page__picker-card--active' : ''}`}
              onClick={() => setTab(tab.id)}
            >
              <span className="legal-page__picker-icon">{tab.icon}</span>
              <span className="legal-page__picker-text">
                <strong>{tab.label}</strong>
                <small>{tab.desc}</small>
              </span>
              {activeTab === tab.id && <span className="legal-page__picker-live">Active</span>}
            </button>
          ))}
        </div>

        <nav className="legal-page__tabs" aria-label="Quick switch">
          {TABS.map((tab) => (
            <button
              key={`tab-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`legal-page__tab${activeTab === tab.id ? ' legal-page__tab--active' : ''}`}
              onClick={() => setTab(tab.id)}
            >
              {tab.short}
            </button>
          ))}
        </nav>

        <div ref={panelsRef} className="legal-page__panels">
          {TABS.map((tab, index) => (
            <section
              key={tab.id}
              id={tab.id}
              role="tabpanel"
              aria-labelledby={`legal-tab-${tab.id}`}
              className={`legal-page__panel${activeTab === tab.id ? ' legal-page__panel--active' : ''}`}
              hidden={activeTab !== tab.id}
            >
              <header className="legal-page__panel-head">
                <span className="legal-page__panel-tag">
                  Section {index + 1} of {TABS.length}
                </span>
                <h2>{tab.label}</h2>
                <p>{tab.panelDesc}</p>
              </header>

              <div className="legal-page__panel-body">
                <LegalToc sections={tab.sections} />
                <LegalSectionContent sections={tab.sections} />
              </div>
            </section>
          ))}
        </div>
      </div>
    </article>
  )
}