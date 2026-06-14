import { SITE } from './site'
import { SERVICE_PAGE_CONTENT, SEO_TITLES, SEO_DESCRIPTIONS } from './servicePageContent'

const PAGE_META = [
  {
    slug: 'smart-contract-development',
    id: 'smart-contract',
    icon: 'contract',
    title: 'Smart Contract Development',
    overviewTitle: 'Smart Contracts',
    tag: 'Blockchain',
    h1: 'Smart Contract Development Services in India',
    intro:
      'WebMeService delivers secure smart contract development for tokens, NFTs, staking, DeFi, and dApps on Ethereum, Polygon, BSC, and EVM-compatible chains — with tests, deployment scripts, and integration support.',
    technologies: ['Solidity', 'Hardhat', 'Foundry', 'OpenZeppelin', 'Ethereum', 'Polygon', 'Web3.js'],
    relatedServices: ['blockchain-development', 'web3-development', 'web-development'],
    keywords:
      'smart contract development, solidity development, smart contract developers india, dapp development, erc20 development',
  },
  {
    slug: 'blockchain-development',
    id: 'blockchain',
    icon: 'blockchain',
    title: 'Blockchain Development',
    overviewTitle: 'Blockchain Solutions',
    tag: 'Web3',
    h1: 'Blockchain Solutions & Development Company in India',
    intro:
      'WebMeService is a blockchain development company helping businesses launch Web3 products — wallet integration, dApp dashboards, on-chain architecture, and practical consulting from an India-based engineering team.',
    technologies: ['Ethereum', 'Polygon', 'Web3.js', 'ethers.js', 'IPFS', 'React', 'Next.js'],
    relatedServices: ['smart-contract-development', 'web3-development', 'software-development'],
    keywords:
      'blockchain development company, blockchain development services, blockchain solutions provider, dapp development india',
  },
  {
    slug: 'web-development',
    id: 'web-dev',
    icon: 'web',
    title: 'Web Development',
    tag: 'Popular',
    h1: 'Web Development Services in India',
    intro:
      'WebMeService is a web development company in India building fast, SEO-friendly business websites, e-commerce stores, and custom web applications with React, Next.js, Node.js, and WordPress.',
    technologies: ['React', 'Next.js', 'Node.js', 'WordPress', 'TypeScript', 'PostgreSQL', 'Vite'],
    relatedServices: ['software-development', 'ui-ux-design', 'mobile-app-development'],
    keywords:
      'web development services, web development company india, react development services, next.js development',
  },
  {
    slug: 'mobile-app-development',
    id: 'mobile',
    icon: 'mobile',
    title: 'Mobile App Development',
    overviewTitle: 'Mobile Apps',
    tag: null,
    h1: 'Mobile App Development Services in India',
    intro:
      'WebMeService builds cross-platform mobile apps with React Native and Flutter — store-ready iOS and Android builds, API integration, and UI aligned with your web product.',
    technologies: ['React Native', 'Flutter', 'TypeScript', 'Firebase', 'REST APIs', 'Figma'],
    relatedServices: ['web-development', 'ui-ux-design', 'software-development'],
    keywords:
      'mobile app development, mobile app development company india, react native development, flutter development',
  },
  {
    slug: 'ui-ux-design',
    id: 'uiux',
    icon: 'uiux',
    title: 'UI/UX Design',
    tag: null,
    h1: 'UI/UX Design Services for Web and Mobile',
    intro:
      'WebMeService provides UI UX design services — user research, wireframes, prototypes, and production-ready design systems for websites, SaaS dashboards, and mobile apps.',
    technologies: ['Figma', 'Adobe XD', 'Prototyping', 'Design Systems', 'Accessibility', 'Responsive UI'],
    relatedServices: ['web-development', 'mobile-app-development', 'software-development'],
    keywords: 'ui ux design services, ui design company india, ux design agency, saas ui design',
  },
  {
    slug: 'software-development',
    id: 'software',
    icon: 'web',
    title: 'Software Development',
    tag: 'Core',
    h1: 'Custom Software Development Company in India',
    intro:
      'WebMeService is a software development company delivering custom applications, APIs, internal tools, and enterprise software for startups and growing businesses in India and overseas.',
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Python', 'AWS', 'Docker'],
    relatedServices: ['web-development', 'mobile-app-development', 'saas-development'],
    keywords:
      'software development company, custom software development, software development services, enterprise software development',
  },
  {
    slug: 'web3-development',
    id: 'web3',
    icon: 'blockchain',
    title: 'Web3 Development',
    tag: 'Web3',
    h1: 'Web3 Development Company in India',
    intro:
      'WebMeService offers Web3 development services — dApps, wallet connect, smart contract integration, NFT mint flows, and on-chain dashboards built with React, Next.js, and modern Web3 libraries.',
    technologies: ['Solidity', 'ethers.js', 'Web3.js', 'React', 'Next.js', 'IPFS', 'WalletConnect'],
    relatedServices: ['smart-contract-development', 'blockchain-development', 'web-development'],
    keywords: 'web3 development company, web3 development services, dapp development, wallet integration',
  },
  {
    slug: 'saas-development',
    id: 'saas',
    icon: 'web',
    title: 'SaaS Development',
    tag: 'SaaS',
    h1: 'SaaS Development Company in India',
    intro:
      'WebMeService builds SaaS products from MVP to scale — multi-tenant architecture, subscription billing, admin dashboards, and APIs for recurring-revenue businesses.',
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS', 'Docker'],
    relatedServices: ['software-development', 'web-development', 'ui-ux-design'],
    keywords: 'saas development company, custom saas development, startup software development',
    useLegacyContent: true,
  },
  {
    slug: 'business-automation',
    id: 'automation',
    icon: 'cloud',
    title: 'Business Automation',
    tag: 'Automation',
    h1: 'Business Automation Services in India',
    intro:
      'WebMeService delivers business automation services — custom workflows, API integrations, internal tools, and dashboards that replace manual processes.',
    technologies: ['Node.js', 'Python', 'REST APIs', 'Webhooks', 'Zapier', 'PostgreSQL'],
    relatedServices: ['software-development', 'web-development', 'saas-development'],
    keywords: 'business automation services, workflow automation, api integration',
    useLegacyContent: true,
  },
]

function buildSections(content) {
  if (!content) return []
  return [
    {
      heading: 'Service overview',
      paragraphs: content.overviewParagraphs,
    },
    {
      heading: 'Key benefits',
      items: content.benefits,
      type: 'benefits',
    },
    {
      heading: 'Our process',
      items: content.processSteps,
      type: 'process',
    },
  ]
}

function buildFaqs(content, baseFaqs = []) {
  if (!content?.extraFaqs) return baseFaqs
  return [...baseFaqs, ...content.extraFaqs]
}

const LEGACY_FAQS = {
  'saas-development': [
    { q: 'Can you build a SaaS MVP quickly?', a: 'Yes. We scope a focused MVP with core auth, billing, and one primary workflow — typically 4–8 weeks depending on complexity.' },
    { q: 'Do you handle cloud hosting and DevOps?', a: 'We set up deployment on AWS, Vercel, or similar platforms and document the infrastructure for your team.' },
  ],
  'business-automation': [
    { q: 'What can business automation include?', a: 'API integrations, automated reporting, lead routing, invoice workflows, and custom internal dashboards.' },
    { q: 'Do you integrate with existing software?', a: 'Yes. We connect popular SaaS tools and build custom bridges where no native integration exists.' },
  ],
}

export const SERVICE_PAGES = PAGE_META.map((meta) => {
  const content = SERVICE_PAGE_CONTENT[meta.slug]
  const path = `/services/${meta.slug}`

  return {
    ...meta,
    path,
    sections: meta.useLegacyContent
      ? [
          { heading: 'What we deliver', paragraphs: [meta.intro] },
          { heading: 'Why WebMeService', paragraphs: [`${SITE.name} scopes milestones upfront, documents handover, and supports you after launch.`] },
        ]
      : buildSections(content),
    benefits: content?.benefits ?? [],
    processSteps: content?.processSteps ?? [],
    overviewParagraphs: content?.overviewParagraphs ?? [meta.intro],
    faqs: buildFaqs(content, LEGACY_FAQS[meta.slug] ?? [
      { q: `How do I get a quote for ${meta.title.toLowerCase()}?`, a: `Email ${SITE.email} or use our contact form with your project brief. We reply within one business day.` },
      { q: `Does WebMeService work with international clients?`, a: 'Yes. We are based in India and collaborate with startups and companies worldwide with clear async communication.' },
    ]),
    seo: {
      title: SEO_TITLES[meta.slug] ?? `${meta.title} | ${SITE.name}`,
      description: SEO_DESCRIPTIONS[meta.slug] ?? meta.intro.slice(0, 155),
      keywords: meta.keywords,
    },
  }
})

/** Legacy slug redirects */
export const SERVICE_REDIRECTS = {
  'blockchain-solutions': 'blockchain-development',
}

const bySlug = Object.fromEntries(SERVICE_PAGES.map((s) => [s.slug, s]))
const byPath = Object.fromEntries(SERVICE_PAGES.map((s) => [s.path, s]))

export function getServiceBySlug(slug) {
  const resolved = SERVICE_REDIRECTS[slug] ?? slug
  return bySlug[resolved] || null
}

export function getServiceByPath(path) {
  return byPath[path] || null
}

export function servicePath(slug) {
  return `/services/${slug}`
}

export const SERVICE_LINKS = SERVICE_PAGES.map(({ slug, title }) => ({
  label: title,
  href: servicePath(slug),
  internal: true,
}))

/** Primary services on /services — order matches page layout */
export const SERVICES_OVERVIEW_SLUGS = [
  'web-development',
  'mobile-app-development',
  'blockchain-development',
  'smart-contract-development',
  'ui-ux-design',
]

export const SERVICES_PAGE = {
  h1: 'Web, Mobile, Blockchain & UI/UX Development Services',
  label: 'Services',
  intro:
    'Explore WebMeService delivery areas — custom websites, mobile apps, blockchain solutions, smart contracts, and UI/UX design. Each section covers scope, benefits, process, stack, and FAQs.',
  seo: {
    title: 'Web Development, Mobile Apps & Blockchain Services | WebMeService',
    description:
      'WebMeService software development services in India — web development, mobile apps, blockchain solutions, smart contracts, and UI/UX design. Scope, process, technologies, and FAQs in one place.',
    keywords:
      'web development services, mobile app development, blockchain solutions, smart contract development, ui ux design services, software development company india',
  },
}

export const PRIMARY_SERVICE_LINKS = SERVICE_PAGES.filter((s) =>
  SERVICES_OVERVIEW_SLUGS.includes(s.slug)
).map(({ slug, title }) => ({ label: title, href: servicePath(slug), internal: true }))

export function getServicesOverviewPages() {
  return SERVICES_OVERVIEW_SLUGS.map((slug) => {
    const service = bySlug[slug]
    if (!service) return null
    return {
      ...service,
      displayTitle: service.overviewTitle || service.title,
    }
  }).filter(Boolean)
}

const byId = Object.fromEntries(SERVICE_PAGES.map((s) => [s.id, s]))

const SERVICE_ID_ALIASES = {
  graphic: 'uiux',
  seo: 'web-dev',
  hosting: 'automation',
}

export function getServicePathById(id) {
  const resolved = SERVICE_ID_ALIASES[id] ?? id
  if (resolved === 'blockchain') return byId.blockchain?.path ?? null
  return byId[resolved]?.path ?? null
}