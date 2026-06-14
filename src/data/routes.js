export const ROUTES = {
  home: '/',
  legal: '/legal',
  services: '/services',
  technologies: '/technologies',
}

export const SERVICE_ROUTE = '/services/:slug'

export const HOME_SECTIONS = {
  home: 'home',
  services: 'services',
  pricing: 'pricing',
  work: 'work',
  portfolio: 'portfolio',
  caseStudies: 'case-studies',
  testimonials: 'testimonials',
  support: 'support',
  contact: 'contact',
  faq: 'faq',
  process: 'process',
  technologies: 'technologies',
  industries: 'industries',
  serviceHub: 'service-hub',
  whyChoose: 'why-choose',
  blockchainServices: 'blockchain-services',
  webDevelopmentServices: 'web-development-services',
  mobileDevelopmentServices: 'mobile-development-services',
  uiuxServices: 'uiux-services',
}

/** Homepage section link — always navigates to / first, then scrolls to the section */
export function homeHref(section) {
  const id = section.startsWith('#') ? section.slice(1) : section
  return `/#${id}`
}

export const CONTACT_HREF = homeHref(HOME_SECTIONS.contact)

export function homeRoute(section) {
  const id = section.startsWith('#') ? section.slice(1) : section
  return { pathname: ROUTES.home, hash: `#${id}` }
}

export function isHomeHashHref(href) {
  return typeof href === 'string' && href.startsWith('/#')
}

export function parseHomeHashHref(href) {
  if (!isHomeHashHref(href)) return null
  return { pathname: ROUTES.home, hash: href.slice(1) }
}

export function servicesOverviewRoute(slug) {
  return { pathname: ROUTES.services, hash: `#${slug}` }
}

export const LEGAL_SECTIONS = {
  privacy: 'privacy',
  terms: 'terms',
}

export function legalHref(section) {
  return section ? `${ROUTES.legal}#${section}` : ROUTES.legal
}

export const LEGAL_PAGE = {
  path: ROUTES.legal,
  title: 'Legal',
  description: 'Privacy Policy and Terms of Service for WebMeService.',
}