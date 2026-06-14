import { SITE, SEO, SERVICES, HOME_FAQS } from './site'
import { LEGAL_PAGE, ROUTES } from './routes'
import { SERVICE_PAGES, SERVICES_PAGE, getServiceBySlug, getServicePathById, getServicesOverviewPages } from './servicePages'
import { TECHNOLOGIES_PAGE } from './technologies'

const OG_IMAGE = `${SITE.url}/og-image.svg`
const ORG_ID = `${SITE.url}/#organization`
const WEBSITE_ID = `${SITE.url}/#website`

export const SOCIAL_PROFILES = [
  SITE.url,
  SITE.social?.github,
  SITE.social?.linkedin,
  'https://twitter.com/webmeservice',
].filter(Boolean)

export function absoluteUrl(path = '/') {
  if (!path || path === '/') return `${SITE.url}/`
  const clean = path.startsWith('/') ? path : `/${path}`
  return `${SITE.url}${clean}`
}

function notFoundMeta(pathname) {
  return {
    title: `Page Not Found | ${SITE.name}`,
    description:
      'The page you requested could not be found. Explore WebMeService software development, web development, blockchain, and mobile app services in India.',
    keywords: SEO.keywords,
    canonical: absoluteUrl(pathname),
    ogType: 'website',
    robots: 'noindex, follow',
    pageType: 'notFound',
  }
}

export function resolveSeoMeta(pathname, hash = '') {
  const normalizedPath = pathname.replace(/\/$/, '') || '/'

  if (normalizedPath === ROUTES.services) {
    return {
      title: SERVICES_PAGE.seo.title,
      description: SERVICES_PAGE.seo.description,
      keywords: SERVICES_PAGE.seo.keywords,
      canonical: absoluteUrl(ROUTES.services),
      ogType: 'website',
      robots: 'index, follow, max-image-preview:large',
      pageType: 'servicesOverview',
    }
  }

  if (normalizedPath === ROUTES.technologies) {
    return {
      title: TECHNOLOGIES_PAGE.seo.title,
      description: TECHNOLOGIES_PAGE.seo.description,
      keywords: TECHNOLOGIES_PAGE.seo.keywords,
      canonical: absoluteUrl(ROUTES.technologies),
      ogType: 'website',
      robots: 'index, follow, max-image-preview:large',
      pageType: 'technologies',
    }
  }

  if (normalizedPath.startsWith('/services/')) {
    const serviceSlug = normalizedPath.slice('/services/'.length)
    if (!serviceSlug) return notFoundMeta(pathname)
    const service = getServiceBySlug(serviceSlug)
    if (!service) return notFoundMeta(pathname)
    return {
      title: service.seo.title,
      description: service.seo.description,
      keywords: service.seo.keywords,
      canonical: absoluteUrl(service.path),
      ogType: 'website',
      robots: 'index, follow, max-image-preview:large',
      pageType: 'service',
      serviceSlug: service.slug,
    }
  }

  if (pathname === ROUTES.legal) {
    const isTerms = hash.includes('terms')
    const isPrivacy = hash.includes('privacy') || !isTerms
    return {
      title: isTerms
        ? `Terms of Service | ${SITE.name}`
        : `Privacy Policy | ${SITE.name}`,
      description: isTerms
        ? 'Terms of Service for WebMeService — pricing, delivery, IP, blockchain scope, and liability for web, mobile, and Web3 projects in India.'
        : 'Privacy Policy for WebMeService — how we handle contact form, email, WhatsApp, and client data for software development services in India.',
      keywords: `${SITE.name.toLowerCase()}, legal, ${isTerms ? 'terms of service' : 'privacy policy'}, software development india`,
      canonical: absoluteUrl(isTerms ? '/legal#terms' : '/legal#privacy'),
      ogType: 'website',
      robots: 'index, follow',
      pageType: 'legal',
      legalSection: isTerms ? 'terms' : 'privacy',
    }
  }

  if (pathname === ROUTES.home) {
    return {
      title: SEO.title,
      description: SEO.description,
      keywords: SEO.keywords,
      canonical: absoluteUrl('/'),
      ogType: 'website',
      robots: 'index, follow, max-image-preview:large',
      pageType: 'home',
    }
  }

  return notFoundMeta(pathname)
}

function organizationNode() {
  return {
    '@type': ['Organization', 'LocalBusiness'],
    '@id': ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    email: SITE.email,
    description: SITE.about,
    foundingDate: String(SITE.foundedYear),
    logo: { '@type': 'ImageObject', url: OG_IMAGE, width: 1200, height: 630 },
    image: OG_IMAGE,
    sameAs: SOCIAL_PROFILES,
    areaServed: { '@type': 'Country', name: SEO.geoCountry },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressRegion: SEO.geoCountry,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: SITE.email,
      areaServed: SEO.geoCountry,
      availableLanguage: ['English', 'Hindi'],
    },
    knowsAbout: [
      'Software Development',
      'Web Development',
      'Smart Contract Development',
      'Blockchain Solutions',
      'Web3 Development',
      'Mobile App Development',
      'UI/UX Design',
      'SaaS Development',
      'Business Automation',
    ],
    priceRange: '₹₹',
  }
}

function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    description: SEO.description,
    inLanguage: SEO.language,
    publisher: { '@id': ORG_ID },
    potentialAction: {
      '@type': 'ContactAction',
      target: `${SITE.url}/#contact`,
      name: 'Request a project quote',
    },
  }
}

function breadcrumbNode(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

function faqNode(faqs, id) {
  return {
    '@type': 'FAQPage',
    '@id': id,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }
}

export function buildStructuredData(meta) {
  const graph = [organizationNode(), websiteNode()]

  if (meta.pageType === 'home') {
    const serviceOffers = SERVICES.map((service, index) => {
      const detailPath = getServicePathById(service.id)
      return {
        '@type': 'Offer',
        position: index + 1,
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
          provider: { '@id': ORG_ID },
          areaServed: SITE.serviceArea,
          url: detailPath ? absoluteUrl(detailPath) : `${SITE.url}/#services`,
        },
      }
    })

    graph.push(
      {
        '@type': 'ProfessionalService',
        '@id': `${SITE.url}/#business`,
        name: SITE.name,
        url: SITE.url,
        image: OG_IMAGE,
        email: SITE.email,
        description: SITE.about,
        address: { '@type': 'PostalAddress', addressCountry: 'IN' },
        areaServed: { '@type': 'Country', name: SEO.geoCountry },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'WebMeService services',
          itemListElement: serviceOffers,
        },
      },
      {
        '@type': 'WebPage',
        '@id': `${SITE.url}/#webpage`,
        url: SITE.url,
        name: meta.title,
        description: meta.description,
        isPartOf: { '@id': WEBSITE_ID },
        about: { '@id': ORG_ID },
        inLanguage: SEO.language,
        primaryImageOfPage: OG_IMAGE,
      },
      faqNode(HOME_FAQS, `${SITE.url}/#faq`),
      breadcrumbNode([
        { name: 'Home', url: SITE.url },
        { name: 'Services', url: `${SITE.url}/#services` },
        { name: 'Contact', url: `${SITE.url}/#contact` },
      ])
    )
  }

  if (meta.pageType === 'service') {
    const service = getServiceBySlug(meta.serviceSlug)
    if (service) {
      graph.push(
        {
          '@type': 'Service',
          '@id': `${meta.canonical}#service`,
          name: service.title,
          description: service.seo.description,
          provider: { '@id': ORG_ID },
          areaServed: { '@type': 'Country', name: SEO.geoCountry },
          serviceType: service.title,
          url: meta.canonical,
          offers: {
            '@type': 'Offer',
            url: `${SITE.url}/#contact`,
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
          },
        },
        {
          '@type': 'WebPage',
          '@id': `${meta.canonical}#webpage`,
          url: meta.canonical,
          name: meta.title,
          description: meta.description,
          isPartOf: { '@id': WEBSITE_ID },
          about: { '@id': `${meta.canonical}#service` },
          inLanguage: SEO.language,
          primaryImageOfPage: OG_IMAGE,
        },
        faqNode(service.faqs, `${meta.canonical}#faq`),
        breadcrumbNode([
          { name: 'Home', url: SITE.url },
          { name: 'Services', url: absoluteUrl(ROUTES.services) },
          { name: service.title, url: meta.canonical },
        ])
      )
    }
  }

  if (meta.pageType === 'technologies') {
    const allTech = TECHNOLOGIES_PAGE.categories.flatMap((category) =>
      category.items.map((item) => ({ ...item, category: category.label }))
    )

    graph.push(
      {
        '@type': 'WebPage',
        '@id': `${absoluteUrl(ROUTES.technologies)}#webpage`,
        url: absoluteUrl(ROUTES.technologies),
        name: TECHNOLOGIES_PAGE.seo.title,
        description: TECHNOLOGIES_PAGE.seo.description,
        isPartOf: { '@id': WEBSITE_ID },
        inLanguage: SEO.language,
        primaryImageOfPage: OG_IMAGE,
      },
      {
        '@type': 'ItemList',
        '@id': `${absoluteUrl(ROUTES.technologies)}#tech-list`,
        name: `${SITE.name} technology stack`,
        itemListElement: allTech.map((tech, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: tech.name,
          description: tech.description,
        })),
      },
      breadcrumbNode([
        { name: 'Home', url: SITE.url },
        { name: 'Technologies', url: absoluteUrl(ROUTES.technologies) },
      ])
    )
  }

  if (meta.pageType === 'servicesOverview') {
    const overviewServices = getServicesOverviewPages()
    const combinedFaqs = overviewServices.flatMap((service) => service.faqs.slice(0, 2))

    graph.push(
      {
        '@type': 'WebPage',
        '@id': `${absoluteUrl(ROUTES.services)}#webpage`,
        url: absoluteUrl(ROUTES.services),
        name: SERVICES_PAGE.seo.title,
        description: SERVICES_PAGE.seo.description,
        isPartOf: { '@id': WEBSITE_ID },
        inLanguage: SEO.language,
        primaryImageOfPage: OG_IMAGE,
      },
      {
        '@type': 'ItemList',
        '@id': `${absoluteUrl(ROUTES.services)}#service-list`,
        name: `${SITE.name} services`,
        itemListElement: overviewServices.map((service, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: service.displayTitle,
          item: {
            '@type': 'Service',
            '@id': `${absoluteUrl(service.path)}#service`,
            name: service.displayTitle,
            description: service.seo.description,
            provider: { '@id': ORG_ID },
            serviceType: service.displayTitle,
            url: absoluteUrl(service.path),
            areaServed: { '@type': 'Country', name: SEO.geoCountry },
          },
        })),
      },
      ...overviewServices.map((service) => ({
        '@type': 'Service',
        '@id': `${absoluteUrl(service.path)}#service`,
        name: service.displayTitle,
        description: service.seo.description,
        provider: { '@id': ORG_ID },
        serviceType: service.displayTitle,
        url: absoluteUrl(service.path),
        areaServed: { '@type': 'Country', name: SEO.geoCountry },
        offers: {
          '@type': 'Offer',
          url: `${SITE.url}/#contact`,
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
        },
      })),
      faqNode(combinedFaqs, `${absoluteUrl(ROUTES.services)}#faq`),
      breadcrumbNode([
        { name: 'Home', url: SITE.url },
        { name: 'Services', url: absoluteUrl(ROUTES.services) },
      ])
    )
  }

  if (meta.pageType === 'notFound') {
    graph.push({
      '@type': 'WebPage',
      '@id': `${meta.canonical}#webpage`,
      url: meta.canonical,
      name: meta.title,
      description: meta.description,
      isPartOf: { '@id': WEBSITE_ID },
      inLanguage: SEO.language,
    })
  }

  if (meta.pageType === 'home') {
    graph.push({
      '@type': 'ContactPage',
      '@id': `${SITE.url}/#contact`,
      url: `${SITE.url}/#contact`,
      name: `Contact ${SITE.name}`,
      description: `Contact ${SITE.name} for software development services in ${SEO.geoCountry}.`,
      isPartOf: { '@id': WEBSITE_ID },
      mainEntity: { '@id': ORG_ID },
    })
  }

  if (meta.pageType === 'legal') {
    const sectionTitle = meta.legalSection === 'terms' ? 'Terms of Service' : 'Privacy Policy'
    graph.push(
      {
        '@type': 'WebPage',
        '@id': `${meta.canonical}#webpage`,
        url: meta.canonical,
        name: meta.title,
        description: meta.description,
        isPartOf: { '@id': WEBSITE_ID },
        inLanguage: SEO.language,
      },
      breadcrumbNode([
        { name: 'Home', url: SITE.url },
        { name: 'Legal', url: absoluteUrl(ROUTES.legal) },
        { name: sectionTitle, url: meta.canonical },
      ])
    )
  }

  return { '@context': 'https://schema.org', '@graph': graph }
}

export const SITEMAP_INDEX = `${SITE.url}/sitemap-index.xml`
export const SITEMAP_URLS = [
  { loc: '/', priority: '1.0', changefreq: 'weekly' },
  { loc: '/services', priority: '0.95', changefreq: 'weekly' },
  { loc: '/technologies', priority: '0.85', changefreq: 'monthly' },
  { loc: '/legal', priority: '0.4', changefreq: 'yearly' },
  ...SERVICE_PAGES.map((s) => ({
    loc: s.path,
    priority: ['smart-contract-development', 'blockchain-development', 'web-development', 'mobile-app-development', 'ui-ux-design', 'software-development', 'web3-development'].includes(s.slug)
      ? '0.9'
      : '0.8',
    changefreq: 'monthly',
  })),
]

export { OG_IMAGE, LEGAL_PAGE }