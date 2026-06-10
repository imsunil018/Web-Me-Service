export const SITE = {
  name: 'WebMeService',
  domain: 'webmeservice.in',
  url: 'https://webmeservice.in',
  email: 'contact@webmeservice.in',
  phone: '+91 98765 43210',
  tagline: 'Premium digital services — blockchain, web development, design & more.',
}

export const SEO = {
  title: 'WebMeService — Smart Contract, Blockchain, Web Development & Graphic Design',
  description:
    'WebMeService.in offers smart contract development, blockchain solutions, web development, graphic design, UI/UX, mobile apps, SEO & cloud hosting. Get a free quote today.',
  keywords:
    'webmeservice, smart contract development, blockchain solutions, web development india, graphic design, photoshop design, UI UX design, mobile app development, SEO services, cloud hosting, webmeservice.in',
  author: 'WebMeService',
  locale: 'en_IN',
  twitterHandle: '@webmeservice',
}

export const NAV_LINKS = [
  { label: 'Home', href: '#home', main: true },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Work', href: '#work' },
  { label: 'Support', href: '#support' },
  { label: 'Contact', href: '#contact' },
]

export const SERVICES = [
  {
    id: 'smart-contract',
    icon: 'contract',
    title: 'Smart Contract Development',
    description:
      'Secure, audited smart contracts on Ethereum, BSC, Polygon & Solana. DeFi, NFT, token & dApp contracts built to industry standards.',
    tag: 'Blockchain',
  },
  {
    id: 'blockchain',
    icon: 'blockchain',
    title: 'Blockchain Solutions',
    description:
      'End-to-end blockchain consulting, wallet integration, node setup, Web3 apps, and decentralized infrastructure for your business.',
    tag: 'Web3',
  },
  {
    id: 'web-dev',
    icon: 'web',
    title: 'Web Development',
    description:
      'Modern, fast, responsive websites & web apps using React, Node.js, WordPress & custom stacks. E-commerce, SaaS & corporate sites.',
    tag: 'Popular',
  },
  {
    id: 'graphic',
    icon: 'design',
    title: 'Graphic Design',
    description:
      'Professional branding, logos, banners, social media creatives & print design using Photoshop, Illustrator & Figma.',
    tag: 'Creative',
  },
  {
    id: 'uiux',
    icon: 'uiux',
    title: 'UI/UX Design',
    description:
      'User-centered interface design, wireframes, prototypes & design systems that convert visitors into loyal customers.',
    tag: null,
  },
  {
    id: 'mobile',
    icon: 'mobile',
    title: 'Mobile App Development',
    description:
      'Native & cross-platform mobile apps for iOS and Android. React Native & Flutter builds with seamless backend integration.',
    tag: null,
  },
  {
    id: 'seo',
    icon: 'seo',
    title: 'SEO & Digital Marketing',
    description:
      'Search engine optimization, Google Ads, social media marketing & content strategy to grow your online presence.',
    tag: null,
  },
  {
    id: 'hosting',
    icon: 'cloud',
    title: 'Cloud & Hosting',
    description:
      'Domain setup, SSL, cloud deployment, server management & 24/7 monitoring so your projects stay fast and secure.',
    tag: 'Fast',
  },
]

export const PRICING = [
  {
    name: 'Starter',
    price: '9,999',
    currency: '₹',
    period: 'starting',
    description: 'Perfect for small businesses, portfolios & landing pages.',
    features: [
      '5-page responsive website',
      'Mobile-friendly design',
      'Basic SEO setup',
      'Contact form integration',
      '1 month free support',
      'Delivery in 7–10 days',
    ],
    cta: 'Get Starter Quote',
    featured: false,
    service: 'Web Development',
  },
  {
    name: 'Business Pro',
    price: '29,999',
    currency: '₹',
    period: 'starting',
    description: 'For growing brands needing web + design + blockchain features.',
    features: [
      'Custom web app or e-commerce',
      'Logo + brand identity design',
      'Smart contract consultation',
      'UI/UX wireframes & prototype',
      '3 months priority support',
      'Dedicated project manager',
    ],
    cta: 'Get Pro Quote',
    featured: true,
    service: 'Full Stack Package',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    currency: '',
    period: 'quote',
    description: 'Tailored solutions for large-scale blockchain, web & design projects.',
    features: [
      'Full blockchain / dApp build',
      'Enterprise web platform',
      'Complete brand & design system',
      'Mobile app development',
      '24/7 dedicated support',
      'SLA & maintenance contract',
    ],
    cta: 'Contact Us',
    featured: false,
    service: 'Custom Project',
  },
]

export const PROJECT_TICKER = [
  { project: 'E-Commerce Web App', client: 'RetailCo', status: 'delivered' },
  { project: 'DeFi Smart Contract', client: 'CryptoVault', status: 'live' },
  { project: 'Brand Identity Kit', client: 'NovaBrand', status: 'delivered' },
  { project: 'Corporate Website', client: 'TechAxis', status: 'in-progress' },
  { project: 'NFT Marketplace', client: 'ArtChain', status: 'live' },
  { project: 'Mobile App UI/UX', client: 'FitLife', status: 'delivered' },
]

export const FOOTER_LINKS = {
  Services: [
    { label: 'Smart Contracts', href: '#services' },
    { label: 'Blockchain', href: '#services' },
    { label: 'Web Development', href: '#services' },
    { label: 'Graphic Design', href: '#services' },
    { label: 'Mobile Apps', href: '#services' },
  ],
  Company: [
    { label: 'About Us', href: '#home' },
    { label: 'Our Work', href: '#work' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
    { label: 'Support', href: '#support' },
  ],
  Resources: [
    { label: 'FAQ', href: '#support' },
    { label: 'Get a Quote', href: '#contact' },
    { label: 'Email Us', href: 'mailto:contact@webmeservice.in' },
    { label: 'Call Us', href: 'tel:+919876543210' },
    { label: 'webmeservice.in', href: 'https://webmeservice.in' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#contact' },
    { label: 'Terms of Service', href: '#contact' },
    { label: 'Refund Policy', href: '#contact' },
  ],
}