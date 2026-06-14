import { CONTACT_HREF, HOME_SECTIONS, homeHref, legalHref, ROUTES } from './routes'

export const SITE = {
  name: 'WebMeService',
  legalName: 'WebMeService Digital Agency',
  domain: 'webmeservice.in',
  url: 'https://webmeservice.in',
  email: 'webmeservice@gmail.com',
  whatsapp: {
    e164: '917597967091',
    display: '+91 7597967091',
    defaultMessage: 'Hi WebMeService — I would like to discuss a web, mobile, or blockchain project.',
  },
  responseTime: '24-hour response',
  businessHours: 'Mon–Sat, 10 AM – 7 PM IST',
  location: 'India',
  serviceArea: 'India and overseas clients',
  foundedYear: 2019,
  tagline:
    'Websites, apps, smart contracts, and design — built by a small India team that picks up the phone.',
  about:
    'WebMeService is a software development company and digital agency in India. We build custom websites, smart contracts, blockchain solutions, mobile apps, SaaS products, and UI/UX design for startups and growing businesses. Clear timelines, upfront pricing, and support after launch.',
  social: {
    github: 'https://github.com/webmeservice',
    linkedin: 'https://www.linkedin.com/company/webmeservice',
  },
}

export const FOOTER_SEO_STATEMENT =
  'WebMeService provides web development, mobile app development, blockchain solutions, smart contract development, SaaS products, and UI/UX design services.'

export const SEO = {
  title: 'WebMeService | Software Development Company India',
  description:
    'Software development company in India — custom web, mobile, blockchain, smart contracts, Web3, and UI/UX design. WebMeService replies with a free quote within 24 hours.',
  keywords:
    'software development company, custom software development, web development services, mobile app development, smart contract development, blockchain development company, web3 development services, ui ux design services, saas development company, software agency india, web development company india, react development services, next.js development, solidity development, dapp development, startup software development, business automation services',
  author: 'WebMeService',
  locale: 'en_IN',
  language: 'en-IN',
  geoRegion: 'IN',
  geoCountry: 'India',
  ogImage: 'https://webmeservice.in/og-image.svg',
  ogImageAlt: 'WebMeService — software development company in India',
  twitterHandle: '@webmeservice',
}

export const HERO = {
  badge: 'Web Development • Mobile Apps • Blockchain Solutions',
  titleLead: 'Build and grow online with',
  typeWords: [
    'Custom Websites',
    'Mobile Apps',
    'Blockchain Solutions',
    'Smart Contracts',
    'UI/UX Design',
  ],
  subtitle:
    'We build custom websites, mobile apps, blockchain products, and UI/UX experiences for startups and businesses. Clear communication, transparent pricing, and delivery you can trust.',
  trustPills: ['Web Development', 'Mobile Apps', 'Blockchain', 'UI/UX Design'],
  stats: [
    { value: '8+', label: 'Services' },
    { value: '5+', label: 'Years Experience' },
    { value: '24h', label: 'Response Time' },
  ],
  tickerLabel: 'Recent work',
  dashboardLabel: 'webmeservice.in',
  dashboardStatus: 'Open for new projects',
  hubTitle: 'Connected Services Hub',
  listTitle: 'What We Deliver',
}

export const HERO_DELIVER_IDS = [
  'smart-contract',
  'web-dev',
  'mobile',
  'uiux',
  'blockchain',
]

/** Short hero deliver-card copy — max two lines at card width */
export const HERO_DELIVER_COPY = {
  'smart-contract':
    'Tokens, NFTs, staking, and dApp contracts — tested and ready to deploy.',
  'web-dev':
    'Landing pages, online stores, and custom web apps with React, Next.js, or WordPress.',
  mobile:
    'Cross-platform iOS and Android apps with APIs, polished UI, and store-ready builds.',
  uiux:
    'Wireframes, prototypes, and design systems that improve usability and conversion.',
  blockchain:
    'Wallet connect, Web3 dashboards, and practical on-chain product integration.',
}

export const HERO_FLOAT_SERVICES = [
  { id: 'float-smart-contract', icon: 'contract', title: 'Smart Contracts', tag: 'Blockchain', slot: 'tl' },
  { id: 'float-web', icon: 'web', title: 'Web Apps', tag: 'Development', slot: 'tr' },
  { id: 'float-mobile', icon: 'mobile', title: 'Mobile Apps', tag: 'Development', slot: 'bl' },
  { id: 'float-uiux', icon: 'uiux', title: 'UI/UX Design', tag: 'Design', slot: 'br' },
]

export const NAV_HOME_LINK = { label: 'Home', href: '/#home', main: true }

export const NAV_PRICING_LINK = { label: 'Pricing', href: '/#pricing' }

export const NAV_CONTACT_LINK = { label: 'Contact', href: CONTACT_HREF }

export const NAV_DROPDOWNS = [
  {
    id: 'services',
    label: 'Services',
    href: '/services',
    links: [
      { label: 'Web Development', href: '/services/web-development', internal: true },
      { label: 'Mobile Apps', href: '/services/mobile-app-development', internal: true },
      { label: 'Blockchain Solutions', href: '/services/blockchain-development', internal: true },
      { label: 'Smart Contracts', href: '/services/smart-contract-development', internal: true },
      { label: 'UI/UX Design', href: '/services/ui-ux-design', internal: true },
    ],
  },
  {
    id: 'work',
    label: 'Work',
    href: homeHref(HOME_SECTIONS.work),
    links: [
      { label: 'Portfolio', href: homeHref(HOME_SECTIONS.work) },
      { label: 'Case Studies', href: homeHref(HOME_SECTIONS.caseStudies) },
      { label: 'Testimonials', href: homeHref(HOME_SECTIONS.testimonials) },
    ],
  },
  {
    id: 'support',
    label: 'Support',
    href: homeHref(HOME_SECTIONS.support),
    links: [
      { label: 'Technologies', href: ROUTES.technologies, internal: true },
      { label: 'Why Choose Us', href: homeHref(HOME_SECTIONS.whyChoose) },
      { label: 'Process', href: homeHref(HOME_SECTIONS.process) },
      { label: 'FAQ', href: homeHref(HOME_SECTIONS.faq) },
      { label: 'Contact', href: CONTACT_HREF },
    ],
  },
]

export const NAV_PRIMARY_LINKS = [
  NAV_HOME_LINK,
  NAV_PRICING_LINK,
  NAV_CONTACT_LINK,
]

export const NAV_DROPDOWN_LINKS = NAV_DROPDOWNS.flatMap((group) =>
  group.links.map(({ label, href, internal }) => ({ label, href, internal })),
)

export const NAV_ALL_LINKS = [
  ...NAV_PRIMARY_LINKS,
  ...NAV_DROPDOWNS.map(({ label, href }) => ({ label, href })),
  ...NAV_DROPDOWN_LINKS,
]

/** @deprecated Use NAV_PRIMARY_LINKS + NAV_DROPDOWNS */
export const NAV_LINKS = NAV_PRIMARY_LINKS

export const SERVICES = [
  {
    id: 'smart-contract',
    icon: 'contract',
    title: 'Smart Contract Development',
    description:
      'Tokens, NFTs, staking, and dApp contracts on Ethereum, Polygon, BSC, and Solana — written cleanly, tested, and ready to deploy.',
    tag: 'Blockchain',
  },
  {
    id: 'blockchain',
    icon: 'blockchain',
    title: 'Blockchain Solutions',
    description:
      'Wallet connect, Web3 dashboards, node setup, and practical advice when you are moving a product on-chain.',
    tag: 'Web3',
  },
  {
    id: 'web-dev',
    icon: 'web',
    title: 'Web Development',
    description:
      'Fast websites, landing pages, online stores, and custom web apps with React, Node.js, WordPress, or the stack that fits your budget.',
    tag: 'Popular',
  },
  {
    id: 'graphic',
    icon: 'design',
    title: 'Graphic Design',
    description:
      'Logos, social posts, banners, and print files from Photoshop, Illustrator, and Figma — matched to your brand.',
    tag: 'Creative',
  },
  {
    id: 'uiux',
    icon: 'uiux',
    title: 'UI/UX Design',
    description:
      'Wireframes, clickable prototypes, and layouts that make your product easier to use and easier to sell.',
    tag: null,
  },
  {
    id: 'mobile',
    icon: 'mobile',
    title: 'Mobile App Development',
    description:
      'React Native and Flutter apps with solid API hooks, store-ready builds, and UI that matches your web product.',
    tag: null,
  },
  {
    id: 'seo',
    icon: 'seo',
    title: 'SEO & Digital Marketing',
    description:
      'Technical SEO, page fixes, content ideas, Google Ads setup, and analytics so more of the right people find you.',
    tag: null,
  },
  {
    id: 'hosting',
    icon: 'cloud',
    title: 'Cloud & Hosting',
    description:
      'Domain, SSL, deployment, backups, and basic monitoring so your site stays up and secure after go-live.',
    tag: 'Managed',
  },
]

export const PRICING = [
  {
    name: 'Starter',
    price: '9,999',
    currency: '₹',
    period: 'onwards',
    description: 'A clean first website for freelancers, shops, and local businesses.',
    features: [
      'Up to 5 pages, mobile-friendly',
      'Contact form wired to your email',
      'Basic on-page SEO setup',
      '30 days of fixes after launch',
      'Usually ready in 7–10 working days',
    ],
    cta: 'Get Starter Quote',
    featured: false,
    service: 'Web Development',
  },
  {
    name: 'Business Pro',
    price: '29,999',
    currency: '₹',
    period: 'onwards',
    description: 'For brands that want web, design, and light blockchain help in one project.',
    features: [
      'Custom site or small online store',
      'Logo and brand kit',
      'UI/UX wireframes',
      'Web3 / blockchain consultation',
      '90 days priority support',
      'One point of contact throughout',
    ],
    cta: 'Get Pro Quote',
    featured: true,
    service: 'Full-Stack Package',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    currency: '',
    period: 'quote',
    description: 'Bigger builds — dApps, portals, apps, or ongoing work billed by milestone.',
    features: [
      'Written scope before coding starts',
      'Smart contract delivery if needed',
      'Design system for web and mobile',
      'Optional app development',
      'Maintenance plans available',
      'Pay in stages, not surprises',
    ],
    cta: 'Talk to Us',
    featured: false,
    service: 'Custom Engagement',
  },
]

export const PROJECT_TICKER = [
  { project: 'Clinic Booking Platform', status: 'delivered' },
  { project: 'DeFi Staking Platform', status: 'live' },
  { project: 'Restaurant Website', status: 'delivered' },
  { project: 'Portfolio Website', status: 'live' },
]

export const PROJECTS = [
  {
    title: 'Healthcare Booking Portal',
    category: 'Web Development',
    summary: 'Online appointments, doctor pages, and a simple admin view for a multi-branch clinic.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    color: 'cyan',
    image: 'healthcare-booking',
    github: 'https://github.com/webmeservice/healthcare-booking-portal',
    liveDemo: 'https://demo.webmeservice.in/healthcare-booking',
  },
  {
    title: 'DeFi Staking Platform',
    category: 'Blockchain + Web',
    summary: 'Staking contracts, wallet login, and a dashboard for token holders.',
    tech: ['Solidity', 'React', 'Web3.js'],
    color: 'emerald',
    image: 'defi-staking',
    github: 'https://github.com/webmeservice/defi-staking-platform',
    liveDemo: 'https://demo.webmeservice.in/defi-staking',
  },
  {
    title: 'D2C E-Commerce Store',
    category: 'Web + SEO',
    summary: 'Product pages, checkout, order tracking, and category pages set up for search.',
    tech: ['Next.js', 'Stripe', 'SEO'],
    color: 'gold',
    image: 'ecommerce-store',
    github: 'https://github.com/webmeservice/d2c-ecommerce-store',
    liveDemo: 'https://demo.webmeservice.in/ecommerce-store',
  },
  {
    title: 'Corporate Brand Identity',
    category: 'Graphic Design',
    summary: 'Logo, stationery, social templates, and a short brand guide for a B2B firm.',
    tech: ['Illustrator', 'Photoshop', 'Figma'],
    color: 'gold',
    image: 'brand-identity',
    github: 'https://github.com/webmeservice/brand-identity-kit',
    liveDemo: 'https://demo.webmeservice.in/brand-identity',
  },
  {
    title: 'NFT Minting dApp',
    category: 'Smart Contract + UI',
    summary: 'ERC-721 contract, mint flow, metadata setup, and a simple mint interface.',
    tech: ['Ethereum', 'IPFS', 'React'],
    color: 'emerald',
    image: 'nft-minting',
    github: 'https://github.com/webmeservice/nft-minting-dapp',
    liveDemo: 'https://demo.webmeservice.in/nft-minting',
  },
  {
    title: 'Service Business Website',
    category: 'Web + UI/UX',
    summary: 'Lead-focused site with service pages, reviews, and forms that actually convert.',
    tech: ['WordPress', 'Figma', 'Analytics'],
    color: 'cyan',
    image: 'service-business',
    github: 'https://github.com/webmeservice/service-business-website',
    liveDemo: 'https://demo.webmeservice.in/service-business',
  },
]

export const TESTIMONIALS = [
  {
    quote:
      'They rebuilt our site and fixed speed issues another vendor left behind. Updates were clear and we got proper handover notes.',
    author: 'Amit K.',
    role: 'Operations, IT services — Bengaluru',
    avatar: 'AK',
  },
  {
    quote:
      'Contract and landing page both came with test steps and deploy notes. They understood Web3 better than our last agency.',
    author: 'Sneha R.',
    role: 'Product, Web3 startup — Mumbai',
    avatar: 'SR',
  },
  {
    quote:
      'Logo through to live site felt like one project, not three vendors. We launched on the date we planned.',
    author: 'Vikram D.',
    role: 'Founder, retail brand — Delhi NCR',
    avatar: 'VD',
  },
]

export const CLIENT_SECTORS = [
  'Healthcare',
  'Retail',
  'SaaS & IT',
  'Hospitality',
  'Web3',
  'Professional services',
]

/** Homepage FAQ — also used for FAQPage JSON-LD in seo.js */
export const HOME_FAQS = [
  {
    q: 'How much does a custom website cost?',
    a: 'Custom website cost depends on pages, features, design, and integrations. A standard business website often starts from our published INR packages; e-commerce, custom web apps, and advanced builds are quoted after a short scope call. You receive a written quote with deliverables and milestones — no hidden fees.',
  },
  {
    q: 'How long does a web or app development project take?',
    a: 'Development timeline varies by scope. A marketing website with content ready can ship in 7–14 working days. Mobile apps, custom web applications, and blockchain work typically run 4–12 weeks depending on features, approvals, and testing. We share milestone dates in your proposal before work starts.',
  },
  {
    q: 'Do you offer mobile app development for iOS and Android?',
    a: 'Yes. WebMeService provides mobile app development with React Native and Flutter — one codebase for iOS and Android. We handle API integration, authentication, polished UI, and store-ready builds. Apps can share branding and backends with your existing website.',
  },
  {
    q: 'What is included in smart contract development?',
    a: 'Smart contract development covers requirement review, Solidity (or chain-appropriate) implementation, unit tests, deployment scripts, and handover documentation. Typical work includes tokens, NFTs, staking, and dApp logic on Ethereum, Polygon, BSC, and other EVM chains. We review our own code before mainnet deployment.',
  },
  {
    q: 'What blockchain services does WebMeService provide?',
    a: 'Our blockchain services include smart contract development, wallet connect, Web3 dashboards, dApp frontends, token and NFT launches, and integration advice for products moving on-chain. We work with startups and businesses that need practical Web3 delivery — not just prototypes.',
  },
  {
    q: 'Do you provide UI/UX design for websites and mobile apps?',
    a: 'Yes. UI/UX design services include user research, wireframes, clickable prototypes, responsive layouts, and design systems your developers can implement. We design for marketing sites, SaaS dashboards, and mobile apps so usability and conversion stay consistent across web and app.',
  },
  {
    q: 'Do you offer support and maintenance after launch?',
    a: 'Yes. Post-launch support can include hosting setup, SSL, backups, security updates, bug fixes, and small feature changes. Maintenance plans are scoped to your stack — WordPress, React, mobile apps, or blockchain products — so your site or app stays secure and up to date.',
  },
  {
    q: 'What is your project process from brief to delivery?',
    a: 'Our project process: (1) share your brief and goals, (2) receive a scoped quote with timeline and milestones, (3) design and build in review cycles with staging links, (4) test on real devices and browsers, (5) deploy and hand over documentation. You get clear communication at each stage — typical for software development projects with startups and businesses in India and overseas.',
  },
  {
    q: 'How do I get a quote for web, mobile, or blockchain work?',
    a: `Send your requirements through the contact form or email ${SITE.email} with budget range, timeline, and any references. We reply within one business day with next steps and a tailored quote for web development, mobile apps, smart contracts, or UI/UX design.`,
  },
]

export const FAQS = HOME_FAQS

export const FOOTER_LINKS = {
  Services: [
    { label: 'Smart Contract Development', href: '/services/smart-contract-development', internal: true },
    { label: 'Blockchain Solutions', href: '/services/blockchain-development', internal: true },
    { label: 'Web Development', href: '/services/web-development', internal: true },
    { label: 'Mobile App Development', href: '/services/mobile-app-development', internal: true },
    { label: 'UI/UX Design', href: '/services/ui-ux-design', internal: true },
    { label: 'SaaS Development', href: '/services/saas-development', internal: true },
  ],
  Company: [
    { label: 'About', href: homeHref(HOME_SECTIONS.home) },
    { label: 'Why Choose Us', href: homeHref(HOME_SECTIONS.whyChoose) },
    { label: 'Our Work', href: homeHref(HOME_SECTIONS.work) },
    { label: 'Pricing', href: homeHref(HOME_SECTIONS.pricing) },
    { label: 'Contact', href: CONTACT_HREF },
  ],
  Resources: [
    { label: 'Portfolio', href: homeHref(HOME_SECTIONS.work) },
    { label: 'Case Studies', href: homeHref(HOME_SECTIONS.caseStudies) },
    { label: 'FAQ', href: homeHref(HOME_SECTIONS.faq) },
    { label: 'Development Process', href: homeHref(HOME_SECTIONS.process) },
    { label: 'Technologies', href: ROUTES.technologies, internal: true },
    { label: 'Get a Quote', href: CONTACT_HREF },
  ],
  Legal: [
    { label: 'Privacy Policy', href: legalHref('privacy'), internal: true },
    { label: 'Terms of Service', href: legalHref('terms'), internal: true },
  ],
}

export const HOME_SERVICE_CATEGORIES = [
  {
    id: 'blockchain-services',
    icon: 'blockchain',
    tag: 'Web3',
    h2: 'Blockchain & Smart Contract Development',
    summary:
      'Smart contracts, wallet integration, dApps, and Web3 architecture on Ethereum, Polygon, and EVM chains.',
    highlights: ['Solidity & EVM chains', 'Tokens, NFTs & DeFi modules', 'Tests & deployment scripts'],
    servicePath: '/services/blockchain-development',
    cta: 'Explore blockchain development',
    paragraphs: [
      'WebMeService is a blockchain development company in India delivering smart contract development, wallet integration, dApp dashboards, and Web3 architecture for startups and enterprises. Our Solidity engineers build tokens, NFTs, staking logic, and DeFi modules on Ethereum, Polygon, and EVM-compatible chains — with tests, deployment scripts, and frontend integration.',
      'Whether you need smart contract developers for a token launch or a full blockchain solutions stack with admin tools and on-chain analytics, we scope milestones upfront and document every handover. Explore our smart contract development and Web3 development service pages, or contact our India team for a free quote within one business day.',
    ],
  },
  {
    id: 'web-development-services',
    icon: 'web',
    tag: 'Popular',
    h2: 'Web Development Solutions',
    summary:
      'Business websites, SaaS landing pages, e-commerce, and custom web apps with React, Next.js, and Node.js.',
    highlights: ['React & Next.js builds', 'SEO-ready semantic HTML', 'API & CMS integration'],
    servicePath: '/services/web-development',
    cta: 'View web development services',
    paragraphs: [
      'As a web development company in India, WebMeService builds business websites, SaaS landing pages, e-commerce stores, and custom web applications with React, Next.js, Node.js, and WordPress. Every build prioritises mobile performance, semantic HTML, and technical SEO so you rank and convert from day one.',
      'Our web development services include React development, Next.js development, API integration, and post-launch maintenance. Pair web delivery with our UI/UX design team for a single agency experience — from wireframes to production deployment.',
    ],
  },
  {
    id: 'mobile-development-services',
    icon: 'mobile',
    tag: 'Cross-platform',
    h2: 'Mobile App Development Services',
    summary:
      'Cross-platform iOS and Android apps with React Native and Flutter — APIs, push, and store-ready builds.',
    highlights: ['React Native & Flutter', 'Store-ready iOS & Android', 'Unified web + mobile UX'],
    servicePath: '/services/mobile-app-development',
    cta: 'Mobile app development details',
    paragraphs: [
      'WebMeService is a mobile app development company building cross-platform iOS and Android apps with React Native and Flutter. We handle API integration, push notifications, store submissions, and UI consistency with your existing web product.',
      'Startup software development often means shipping web and mobile together. Our India-based team delivers both under one roadmap — reducing vendor overhead and keeping your brand experience unified across every device.',
    ],
  },
  {
    id: 'uiux-services',
    icon: 'uiux',
    tag: 'Design',
    h2: 'UI/UX Design Services',
    summary:
      'User research, wireframes, prototypes, and Figma design systems for web, SaaS, and mobile products.',
    highlights: ['Wireframes & prototypes', 'Figma design systems', 'Design-to-dev handoff'],
    servicePath: '/services/ui-ux-design',
    cta: 'UI/UX design services',
    paragraphs: [
      'Our UI UX design services cover user research, wireframes, clickable prototypes, and production-ready Figma design systems for websites, SaaS dashboards, and mobile apps. Good design reduces development rework and improves conversion on the flows that matter most.',
      'WebMeService designers work alongside engineers so approved layouts ship accurately. Hire us for design-only engagements or combined design-and-development packages for web and mobile products.',
    ],
  },
]

export const SEO_WHY_CHOOSE = {
  title: 'Why Choose WebMeService',
  desc: 'A software agency in India focused on clear communication, fair pricing, and production-ready delivery — not slide decks.',
  items: [
    {
      title: 'Full-stack software development',
      body: 'Web, mobile, blockchain, and design under one roof. One team, one timeline, no vendor juggling.',
    },
    {
      title: 'India-based, globally deliverable',
      body: 'Competitive rates with IST-friendly overlap for US and EU clients. English-first communication on every project.',
    },
    {
      title: 'Written scope before coding',
      body: 'You receive a clear quote, milestone plan, and delivery dates before development starts — no surprise invoices.',
    },
    {
      title: 'Post-launch support',
      body: 'Hosting, maintenance, security updates, and feature iterations available after go-live.',
    },
  ],
}

export const SEO_TECHNOLOGIES = {
  title: 'Technologies We Use',
  desc: 'Production-grade stacks we ship every week — chosen for speed, maintainability, and your budget.',
  stats: [
    { value: '15+', label: 'Stacks in production' },
    { value: '4', label: 'Delivery pillars' },
    { value: 'Web3', label: 'Ready alongside web' },
  ],
  categories: [
    {
      id: 'frontend',
      label: 'Frontend & Web',
      desc: 'Fast interfaces, SEO-ready markup, and CMS-backed sites.',
      items: [
        { id: 'react', name: 'React' },
        { id: 'nextjs', name: 'Next.js' },
        { id: 'typescript', name: 'TypeScript' },
        { id: 'wordpress', name: 'WordPress' },
      ],
    },
    {
      id: 'backend',
      label: 'Backend & Cloud',
      desc: 'APIs, databases, payments, and deployment pipelines.',
      items: [
        { id: 'nodejs', name: 'Node.js' },
        { id: 'postgresql', name: 'PostgreSQL' },
        { id: 'aws', name: 'AWS' },
        { id: 'stripe', name: 'Stripe' },
      ],
    },
    {
      id: 'blockchain',
      label: 'Blockchain & Web3',
      desc: 'Smart contracts, wallets, and on-chain product delivery.',
      items: [
        { id: 'solidity', name: 'Solidity' },
        { id: 'ethereum', name: 'Ethereum' },
        { id: 'polygon', name: 'Polygon' },
        { id: 'web3js', name: 'Web3.js' },
      ],
    },
    {
      id: 'mobile-design',
      label: 'Mobile & Design',
      desc: 'Cross-platform apps and design systems that ship accurately.',
      items: [
        { id: 'react-native', name: 'React Native' },
        { id: 'flutter', name: 'Flutter' },
        { id: 'figma', name: 'Figma' },
      ],
    },
  ],
}

export const SEO_INDUSTRIES = {
  title: 'Industries we serve',
  desc: 'We build software for startups and established businesses across sectors that need reliable web, mobile, and blockchain delivery.',
  items: [
    { name: 'Healthcare', body: 'Booking portals, clinic websites, and patient-facing apps with secure forms.' },
    { name: 'Retail & E-commerce', body: 'Online stores, product catalogues, and checkout flows optimised for conversion.' },
    { name: 'SaaS & IT', body: 'Landing pages, MVPs, dashboards, and subscription products for B2B software.' },
    { name: 'Web3 & DeFi', body: 'Smart contracts, dApp interfaces, NFT minting, and staking platforms.' },
    { name: 'Hospitality', body: 'Menu sites, reservation flows, and brand design for restaurants and hotels.' },
    { name: 'Professional services', body: 'Lead-generation websites and automation for agencies, consultancies, and B2B firms.' },
  ],
}

export const SEO_PROCESS = {
  title: 'Development Process',
  desc: 'A straightforward path from brief to launch — designed for founders and teams who need predictability.',
  steps: [
    { title: 'Discovery & quote', body: 'Share your goals, timeline, and budget. We reply within one business day with a scoped recommendation.' },
    { title: 'Scope & agreement', body: 'Written deliverables, milestones, and pricing in INR before any code is written.' },
    { title: 'Design & build', body: 'UI/UX where needed, then development in sprints with regular check-ins and demos.' },
    { title: 'Test & launch', body: 'QA, performance checks, SEO setup, deployment, and handover documentation.' },
    { title: 'Support & iterate', body: 'Maintenance, hosting, and feature updates available on ongoing plans.' },
  ],
}

export const SEO_EXPANDED_FAQS = [
  {
    q: 'Is WebMeService a software development company or a web agency?',
    a: 'Both. We are a software development company in India that delivers custom web development, mobile apps, blockchain solutions, smart contracts, UI/UX design, SaaS products, and business automation.',
  },
  {
    q: 'Do you work with startups and enterprises?',
    a: 'Yes. Most clients are startups and SMBs in India and overseas. Enterprise engagements are scoped with milestone billing.',
  },
  {
    q: 'What makes WebMeService different from other web development companies in India?',
    a: 'You get blockchain and Web3 capability alongside standard web and mobile work, written quotes upfront, and a single team from design through deployment.',
  },
  {
    q: 'Can I hire WebMeService for ongoing website maintenance?',
    a: 'Yes. We offer hosting setup, SSL, backups, security patches, and content or feature updates after launch.',
  },
  {
    q: 'How do I get started?',
    a: `Use the contact form on this site or email ${SITE.email} with your project brief. We respond within one working day.`,
  },
]

export const SECTION_COPY = {
  services: {
    label: 'Services',
    title: 'Software Development Services',
    desc: 'Web development, mobile apps, blockchain solutions, smart contracts, and UI/UX design. See full scope, process, and FAQs on our services page.',
  },
  serviceExpertise: {
    label: 'Expertise',
    title: 'Deep dive into how we deliver',
    desc: 'Four core delivery areas — tap a card for scope detail, stack notes, and a link to the full service page.',
  },
  pricing: {
    label: 'Pricing',
    title: 'Starting prices, no guesswork',
    desc: 'Figures below are starting points in INR. Your final quote depends on pages, features, and timeline — we put it in writing.',
  },
  work: {
    label: 'Portfolio',
    title: 'Software development portfolio',
    desc: 'Example web development, mobile app, and blockchain projects across healthcare, retail, SaaS, and Web3. Some names changed where clients asked for privacy.',
  },
  testimonials: {
    label: 'Reviews',
    title: 'What clients say after launch',
    desc: 'Short feedback from people we have worked with on sites, branding, and blockchain launches.',
  },
  support: {
    label: 'Support',
    title: 'Not sure where to start?',
    desc: 'Ask us about scope, timing, or budget. We answer on working days and usually within 24 hours.',
  },
  faq: {
    label: 'FAQ',
    title: 'Frequently asked questions',
    desc: 'Clear answers about website cost, development timelines, mobile app development, smart contracts, blockchain services, UI/UX design, support, and our project process.',
  },
  contact: {
    label: 'Contact',
    title: 'Start your project with a free consultation',
    desc: 'Tell us about your website, mobile app, blockchain, or design goals. We reply within 24 hours with clear next steps and transparent pricing — no obligation.',
    cta: 'Get free consultation',
    ctaSub: 'Written quote · No hidden fees',
  },
}