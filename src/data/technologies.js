/** Dedicated /technologies page — stack expertise by category */

export const TECH_STATS = [
  { value: '16+', label: 'Technologies in production' },
  { value: '6', label: 'Stack categories' },
  { value: 'Web3', label: 'Ready alongside web & mobile' },
]

export const TECHNOLOGIES_PAGE = {
  h1: 'Technologies We Build With',
  label: 'Technologies',
  intro:
    'Production-grade stacks for web, mobile, blockchain, and cloud — chosen for speed, maintainability, security, and your budget. Every project gets a written recommendation before we write code.',
  seo: {
    title: 'Technologies We Use | React, Node.js, Solidity & AWS | WebMeService',
    description:
      'WebMeService technology stack — React, Next.js, TypeScript, Tailwind CSS, Node.js, Express.js, MongoDB, PostgreSQL, Solidity, Ethers.js, Web3.js, React Native, Flutter, AWS, Vercel, and Docker.',
    keywords:
      'react development, next.js development, typescript, tailwind css, node.js development, express.js, solidity smart contracts, ethers.js, web3.js, react native, flutter, mongodb, postgresql, aws cloud, vercel deployment, docker',
  },
  categories: [
    {
      id: 'frontend',
      label: 'Frontend',
      tag: 'Web & UI',
      desc: 'Interfaces that load fast, rank well, and scale with your product roadmap.',
      items: [
        {
          id: 'react',
          name: 'React',
          description:
            'Component-based UI library for interactive web applications with a large ecosystem and hiring pool.',
          useCases: ['SaaS dashboards', 'Marketing sites', 'dApp frontends'],
          whyWeUseIt:
            'Mature tooling, reusable components, and easy handoff between design and engineering.',
        },
        {
          id: 'nextjs',
          name: 'Next.js',
          description:
            'React framework with server rendering, static generation, and API routes for SEO-friendly web apps.',
          useCases: ['Business websites', 'E-commerce', 'Content-heavy pages'],
          whyWeUseIt:
            'Built-in SEO, image optimisation, and flexible rendering without sacrificing search visibility.',
        },
        {
          id: 'typescript',
          name: 'TypeScript',
          description:
            'Typed superset of JavaScript that catches errors early and improves maintainability across the stack.',
          useCases: ['Large codebases', 'Shared API contracts', 'Long-term projects'],
          whyWeUseIt:
            'Fewer production bugs, clearer interfaces between teams, and smoother refactors.',
        },
        {
          id: 'tailwindcss',
          name: 'Tailwind CSS',
          description:
            'Utility-first CSS framework for shipping consistent, responsive interfaces quickly.',
          useCases: ['Design systems', 'Landing pages', 'Admin dashboards'],
          whyWeUseIt:
            'Fast UI delivery, predictable spacing, and easy theme alignment with your brand.',
        },
      ],
    },
    {
      id: 'backend',
      label: 'Backend',
      tag: 'APIs & Logic',
      desc: 'APIs and server logic that power web apps, mobile clients, and integrations.',
      items: [
        {
          id: 'nodejs',
          name: 'Node.js',
          description:
            'JavaScript runtime for scalable APIs, real-time features, and server-side logic.',
          useCases: ['REST & GraphQL APIs', 'Auth services', 'Webhooks'],
          whyWeUseIt:
            'Fast iteration, shared types with React frontends, and a vast package ecosystem.',
        },
        {
          id: 'express',
          name: 'Express.js',
          description:
            'Minimal Node.js framework for HTTP APIs, middleware pipelines, and custom backends.',
          useCases: ['Custom REST APIs', 'Admin backends', 'Auth middleware'],
          whyWeUseIt:
            'Lightweight, well understood, and easy to extend without unnecessary overhead.',
        },
      ],
    },
    {
      id: 'database',
      label: 'Database',
      tag: 'Data Layer',
      desc: 'Data layers matched to document, relational, and scaling requirements.',
      items: [
        {
          id: 'mongodb',
          name: 'MongoDB',
          description:
            'Document database for flexible schemas, rapid prototyping, and evolving data shapes.',
          useCases: ['Content platforms', 'Product catalogs', 'Event logs'],
          whyWeUseIt:
            'Fits agile MVPs and JSON-native apps — we migrate when relational rules matter more.',
        },
        {
          id: 'postgresql',
          name: 'PostgreSQL',
          description:
            'Reliable relational database for structured data, transactions, and complex queries.',
          useCases: ['SaaS billing', 'Booking systems', 'Audit-friendly records'],
          whyWeUseIt:
            'ACID compliance, strong indexing, and proven scale for data integrity.',
        },
      ],
    },
    {
      id: 'blockchain',
      label: 'Blockchain',
      tag: 'Web3',
      desc: 'On-chain logic, wallet flows, and Web3 product delivery on EVM chains.',
      items: [
        {
          id: 'solidity',
          name: 'Solidity',
          description:
            'Language for Ethereum-compatible smart contracts — tokens, NFTs, staking, and DeFi.',
          useCases: ['ERC-20 & ERC-721', 'Staking contracts', 'Marketplace escrow'],
          whyWeUseIt:
            'Industry standard on EVM chains with mature libraries and audit-friendly patterns.',
        },
        {
          id: 'ethersjs',
          name: 'Ethers.js',
          description:
            'Ethereum library for contract interaction, wallet flows, and typed blockchain reads/writes.',
          useCases: ['dApp dashboards', 'Contract admin', 'Transaction UX'],
          whyWeUseIt:
            'Clean API, strong TypeScript support, and reliable contract integration.',
        },
        {
          id: 'web3js',
          name: 'Web3.js',
          description:
            'JavaScript library for connecting apps to Ethereum nodes and smart contracts.',
          useCases: ['Wallet connect', 'On-chain reads', 'Legacy dApp support'],
          whyWeUseIt:
            'Broad chain compatibility and a familiar stack for existing Web3 codebases.',
        },
      ],
    },
    {
      id: 'mobile',
      label: 'Mobile & Design',
      tag: 'Apps & UX',
      desc: 'Cross-platform apps and design systems that ship accurately to production.',
      items: [
        {
          id: 'react-native',
          name: 'React Native',
          description:
            'Cross-platform framework for iOS and Android apps with shared logic and native performance.',
          useCases: ['Business apps', 'SaaS mobile clients', 'Store-ready MVPs'],
          whyWeUseIt:
            'One codebase for both stores, shared skills with React web teams, and fast iteration.',
        },
        {
          id: 'flutter',
          name: 'Flutter',
          description:
            'Google UI toolkit for natively compiled mobile, web, and desktop from a single codebase.',
          useCases: ['Custom UI apps', 'Animation-heavy products', 'Multi-platform MVPs'],
          whyWeUseIt:
            'Pixel-perfect custom UI, strong performance, and efficient builds for polished apps.',
        },
        {
          id: 'figma',
          name: 'Figma',
          description:
            'Collaborative design tool for wireframes, prototypes, and developer-ready handoff.',
          useCases: ['Design systems', 'Clickable prototypes', 'UI/UX audits'],
          whyWeUseIt:
            'Shared source of truth between design and engineering — fewer mismatches at build time.',
        },
      ],
    },
    {
      id: 'cloud',
      label: 'Cloud & DevOps',
      tag: 'Deploy & Scale',
      desc: 'Hosting, deployment, and infrastructure that keeps products fast and available.',
      items: [
        {
          id: 'aws',
          name: 'AWS',
          description:
            'Amazon Web Services for compute, storage, databases, CDN, and production infrastructure.',
          useCases: ['API hosting', 'File storage', 'Staging pipelines'],
          whyWeUseIt:
            'Flexible, enterprise-trusted, and well documented — configured to your stage and budget.',
        },
        {
          id: 'vercel',
          name: 'Vercel',
          description:
            'Edge deployment platform optimised for Next.js with preview URLs and global CDN.',
          useCases: ['Marketing sites', 'Next.js frontends', 'PR previews'],
          whyWeUseIt:
            'Frictionless launches, automatic SSL, and excellent developer experience.',
        },
        {
          id: 'docker',
          name: 'Docker',
          description:
            'Container platform for consistent dev, staging, and production environments.',
          useCases: ['API containers', 'CI/CD pipelines', 'Reproducible deploys'],
          whyWeUseIt:
            'Portable builds, simpler handoffs, and reliable deployments across environments.',
        },
      ],
    },
  ],
}

export function getTechnologiesPageCategories() {
  return TECHNOLOGIES_PAGE.categories
}

export function getAllTechnologies() {
  return TECHNOLOGIES_PAGE.categories.flatMap((category) =>
    category.items.map((item) => ({ ...item, category: category.label, categoryId: category.id })),
  )
}