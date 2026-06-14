/** Long-form SEO content for service detail pages — keyed by route slug. */

export const SERVICE_PAGE_CONTENT = {
  'smart-contract-development': {
    overviewParagraphs: [
      'Smart contracts are the backbone of any serious Web3 product — and getting them wrong is expensive. WebMeService is a software development company in India that writes, tests, and deploys Solidity contracts for tokens, NFTs, staking pools, vesting schedules, and DeFi logic on Ethereum, Polygon, BSC, and compatible EVM chains. We treat every contract as production infrastructure, not a weekend experiment. From your first brief through mainnet, you work with engineers who understand both bytecode and business risk.',
      'Our smart contract development process starts with a written scope: what the contract must do, who can call it, what assets move, and what happens when something fails. We map roles, permissions, and upgrade paths before a single line of Solidity is written. For token launches and NFT mints, that clarity alone saves weeks of rework after your community starts asking hard questions. Stakeholders review the scope document and approve milestones before any billable development begins.',
      'Security is built in from day one. We use OpenZeppelin libraries where they fit, write modular contracts that are easier to audit, and run automated tests with Hardhat or Foundry on every milestone. Gas optimisation matters too — especially on mainnet — so we review storage layout, loop patterns, and external call patterns before you pay real fees to deploy. High-value DeFi logic receives extra internal review, and we coordinate specialist auditors when your risk profile requires it.',
      'WebMeService delivers more than source code. You receive deployment scripts, network configuration notes, ABI files for your frontend team, and a checklist for mainnet go-live. If your product includes a dApp, we coordinate with our web development services team so wallet connect, contract reads, and transaction flows work smoothly on launch day. Your developers get practical integration examples, not a zip file and a shrug.',
      'Clients hire us from India and overseas because we communicate clearly, document everything, and ship contracts that have actually gone live — staking platforms, ERC-20 launches, ERC-721 collections, and marketplace escrow logic. You get experienced blockchain engineers at competitive rates with IST-friendly overlap for global stand-ups. English-first updates, demo recordings, and async summaries keep distributed teams aligned without midnight fire drills.',
      'Whether you need a single audited-ready token contract or a full protocol with multiple interacting modules, we scope milestones upfront so you know cost and delivery dates before work begins. Tell us your chain, your timeline, and your risk tolerance — we reply within one business day with a practical plan. No vague hourly estimates: you see deliverables, testnet targets, and deployment support options in writing. That transparency is why Web3 founders and CTOs keep working with us after the first deployment.',
    ],
    benefits: [
      {
        title: 'Security-first Solidity',
        body: 'Modular contracts, automated test suites, and review checkpoints before deployment. We follow established patterns and flag areas that need third-party audit for high-value DeFi.',
      },
      {
        title: 'Multi-chain EVM experience',
        body: 'Ethereum, Polygon, BSC, and L2 deployments with network-specific gas and tooling notes. One team handles contract logic and integration hooks for your frontend.',
      },
      {
        title: 'Clear deployment handover',
        body: 'Scripts, ABIs, verification steps, and owner-key guidance so your team or ours can deploy confidently. No black-box delivery — you understand what ships.',
      },
      {
        title: 'India-based, globally deliverable',
        body: 'Competitive rates, English-first communication, and overlap with US and EU time zones. Smart contract development without the agency markup of larger Western firms.',
      },
    ],
    processSteps: [
      {
        title: 'Requirements & threat modelling',
        body: 'We document functional requirements, admin roles, fund flows, and failure scenarios. You approve scope and milestones before development starts.',
      },
      {
        title: 'Architecture & module design',
        body: 'Contract structure, inheritance, proxy patterns if needed, and interface design for frontend and backend integration.',
      },
      {
        title: 'Development & unit testing',
        body: 'Solidity implementation with Hardhat or Foundry tests covering happy paths, edge cases, and access control.',
      },
      {
        title: 'Review & testnet deployment',
        body: 'Internal security review, gas profiling, testnet deploy, and walkthrough with your team before mainnet.',
      },
      {
        title: 'Mainnet launch & support',
        body: 'Deployment support, contract verification on explorers, documentation handover, and optional post-launch fixes.',
      },
    ],
    extraFaqs: [
      {
        q: 'Can WebMeService integrate smart contracts with our existing web app?',
        a: 'Yes. We connect contracts to React, Next.js, or custom frontends using ethers.js or Web3.js, including wallet connect and transaction UX.',
      },
      {
        q: 'Do you support upgradeable proxy contracts?',
        a: 'Yes, for scoped projects. We implement transparent or UUPS proxies when your roadmap requires logic upgrades without redeploying user-facing addresses.',
      },
      {
        q: 'What information do you need for a smart contract quote?',
        a: 'Chain target, contract type (token, NFT, staking, etc.), admin roles, timeline, and whether you need frontend integration or audit coordination.',
      },
      {
        q: 'Can you fix or extend contracts written by another team?',
        a: 'Often yes. We review the existing codebase, document risks, and propose fixes or extensions with a clear estimate before changing production logic.',
      },
    ],
  },

  'blockchain-development': {
    overviewParagraphs: [
      'Blockchain development is more than writing code on a new network — it is connecting on-chain logic to real users, operators, and business processes. WebMeService is a blockchain development partner in India helping startups and established companies launch practical Web3 products: wallet login, transaction dashboards, event indexing, multi-chain deployment, and architecture advice when you are choosing between chains. We focus on outcomes your team can operate day to day.',
      'We work across the full stack. That means smart contract integration, dApp frontends in React and Next.js, subgraph or indexer design, IPFS metadata pipelines, and admin tools your operations team can actually use. If you already have a web product, we add blockchain features without rebuilding everything from scratch — a common path for SaaS companies exploring loyalty, credentials, or asset tokenisation. Your existing auth, billing, and analytics can stay in place while Web3 layers on top.',
      'Chain selection and gas strategy are part of every engagement. We help you decide whether Polygon, Ethereum L2, BSC, or another EVM network fits your user base, budget, and compliance context. Our blockchain development work emphasises maintainability: documented APIs, clear separation between on-chain and off-chain data, and monitoring hooks so you know when transactions fail or contracts need attention. You are not locked into hype-driven choices we cannot support later.',
      'As a software development company with deep Web3 experience, WebMeService bridges engineering and product thinking. We do not sell buzzwords — we ship wallet-connected dashboards, mint pages, staking interfaces, and internal tools that match how your team operates. Design and development stay under one roof, so UI flows align with contract capabilities from the first sprint. Product owners see working software early instead of waiting months for a big-bang reveal.',
      'Clients in India and internationally choose us for written scopes, milestone billing, and honest timelines. You get a single point of contact, regular demos, and handover notes that your in-house developers can extend later. Whether you are launching a new protocol or adding a blockchain layer to an existing platform, we start with a discovery call and a quote within 24 hours. Remote collaboration is normal for us — clear tickets, Loom walkthroughs, and shared staging links.',
      'From node guidance and RPC configuration to production dApp launches, our blockchain development services scale with your ambition. Tell us what you are building, who will use it, and what success looks like six months after launch — we will map a path that balances speed, security, and long-term maintainability. Small pilots can grow into full platforms without switching agencies when traction arrives. Long-term support covers chain upgrades, contract migrations, and new features as your roadmap evolves.',
    ],
    benefits: [
      {
        title: 'End-to-end Web3 delivery',
        body: 'Contracts, frontends, indexing, and ops dashboards from one India-based team. Fewer handoffs, fewer mismatches between on-chain and off-chain systems.',
      },
      {
        title: 'Practical chain strategy',
        body: 'Guidance on network choice, gas costs, and upgrade paths so you do not over-engineer early or paint yourself into a corner at scale.',
      },
      {
        title: 'Integration with existing products',
        body: 'Add wallet auth, on-chain reads, and contract writes to current web apps and backends without a full platform rewrite.',
      },
      {
        title: 'Documented, maintainable builds',
        body: 'Architecture diagrams, API notes, and deployment runbooks included — not just a GitHub link and a goodbye email.',
      },
    ],
    processSteps: [
      {
        title: 'Discovery & architecture',
        body: 'Goals, user journeys, chain options, and integration points with your current stack. Written recommendation before build.',
      },
      {
        title: 'Scope & milestone plan',
        body: 'Deliverables, timelines, and pricing in INR with clear boundaries between contract, frontend, and infrastructure work.',
      },
      {
        title: 'Build in integrated sprints',
        body: 'Parallel work on contracts, dApp UI, and backend hooks with demos so you see progress every week or two.',
      },
      {
        title: 'Testnet & QA cycle',
        body: 'Transaction testing, wallet flows, error handling, and performance checks on test networks before mainnet.',
      },
      {
        title: 'Launch & ongoing support',
        body: 'Mainnet deployment, monitoring setup, handover documentation, and optional maintenance for updates and new features.',
      },
    ],
    extraFaqs: [
      {
        q: 'What is the difference between blockchain development and smart contract development?',
        a: 'Smart contract development focuses on on-chain logic. Blockchain development covers the full product — contracts, wallets, dApps, indexing, and operations tooling.',
      },
      {
        q: 'Can you help us choose between building on-chain vs off-chain?',
        a: 'Yes. We recommend putting only what truly needs trustlessness on-chain and keeping the rest in familiar databases and APIs for cost and speed.',
      },
      {
        q: 'Do you build private or permissioned blockchain solutions?',
        a: 'Our core work is public EVM chains and Web3 integrations. Permissioned or enterprise ledger projects are scoped case by case after reviewing requirements.',
      },
      {
        q: 'How do you handle blockchain data for analytics and reporting?',
        a: 'We design indexers, subgraphs, or custom sync jobs so your dashboard and BI tools read clean, queryable data instead of hitting RPC endpoints ad hoc.',
      },
    ],
  },

  'web-development': {
    overviewParagraphs: [
      'Your website is often the first proof that your business is real — and slow, outdated, or confusing sites cost you leads every day. WebMeService provides custom web development services in India for business websites, SaaS landing pages, e-commerce stores, client portals, and internal tools. We build with React, Next.js, Node.js, WordPress, and the stack that fits your budget, timeline, and maintenance capacity. You are not pushed into trendy tech when a simpler path gets you live faster.',
      'Performance and SEO are not add-ons; they are part of the build. Semantic HTML, meta tags, structured data, image optimisation, and Core Web Vitals-friendly layouts ship from day one. Whether you need a five-page company site or a content-heavy product marketing hub, our web development team designs URLs, headings, and page structure so search engines and humans both understand what you offer. Page speed and crawlability are treated as launch requirements, not post-launch chores.',
      'For products that outgrow a marketing site, we deliver full web applications — authentication, dashboards, payment flows, admin panels, and API integrations. As a software development company, we share backend and frontend expertise across projects, so your web app can grow into mobile or blockchain features later without switching vendors. Architecture choices are explained in plain language so founders and CTOs align before the first sprint.',
      'WebMeService works well with founders and marketing teams who want clarity. You receive wireframes or UI specs when design is in scope, milestone updates during development, and a staging link for review before launch. Hosting, SSL, DNS, and basic analytics setup can be included so go-live is one coordinated step, not a scramble of tickets. Feedback rounds are structured so approvals do not stall the calendar.',
      'Our web development services in India combine competitive pricing with production discipline: version control, environment separation, and handover notes for your team. We have delivered clinic booking sites, D2C stores, corporate service pages, and Web3 landing experiences — always with mobile users in mind, since most of your traffic will arrive on a phone. Forms, CTAs, and checkout flows are tested on real devices, not only desktop Chrome.',
      'If you are replatforming from WordPress to React, refreshing a brand, or launching from zero, we start with a short brief and return a written quote within one business day. Tell us your pages, features, integrations, and target launch date — we will recommend an approach that balances speed, SEO, and long-term maintainability. Package pricing on our site is a starting point; your final scope is always confirmed in writing. Post-launch, we offer maintenance for content updates, security patches, and performance tuning as your traffic grows.',
    ],
    benefits: [
      {
        title: 'SEO-ready from launch',
        body: 'Technical SEO, fast loading, and clean information architecture baked into every build — not patched in after complaints about rankings.',
      },
      {
        title: 'Modern or pragmatic stacks',
        body: 'React and Next.js for scalable products; WordPress or PHP when that is the right fit for budget and editor workflows.',
      },
      {
        title: 'Mobile-first layouts',
        body: 'Responsive design and touch-friendly UI so your site works for the majority of visitors browsing on phones and tablets.',
      },
      {
        title: 'One agency for growth',
        body: 'Pair web development with UI UX design, mobile app development, or blockchain features under one timeline and one point of contact.',
      },
    ],
    processSteps: [
      {
        title: 'Brief & quote',
        body: 'You share goals, page list, features, and references. We respond with scope, timeline, and pricing in writing.',
      },
      {
        title: 'Design & content alignment',
        body: 'Wireframes or visual design plus content structure so development proceeds without constant guesswork.',
      },
      {
        title: 'Development sprints',
        body: 'Component-based builds, API hooks, and staging deployments with regular check-ins and demo links.',
      },
      {
        title: 'QA, SEO & performance',
        body: 'Cross-browser testing, form flows, meta tags, structured data, and speed checks before production cutover.',
      },
      {
        title: 'Launch & maintenance',
        body: 'DNS, SSL, analytics, handover documentation, and optional ongoing updates, security patches, and feature work.',
      },
    ],
    extraFaqs: [
      {
        q: 'Do you build e-commerce websites?',
        a: 'Yes. We deliver online stores with product catalogues, cart, checkout, and payment integration — on WordPress/WooCommerce or custom Next.js stacks depending on scale.',
      },
      {
        q: 'Can you migrate our existing site to a new platform?',
        a: 'Yes. We plan URL redirects, content migration, and SEO preservation so you do not lose search visibility during the move.',
      },
      {
        q: 'Will I be able to update content myself?',
        a: 'We can set up a CMS — WordPress, headless CMS, or admin panels — and provide short training or documentation for your team.',
      },
      {
        q: 'Do you offer web development for international audiences?',
        a: 'Yes. We build multilingual-ready structures, CDN-friendly assets, and work with clients worldwide from our India delivery team.',
      },
    ],
  },

  'mobile-app-development': {
    overviewParagraphs: [
      'Mobile users expect apps that load fast, look polished, and stay in sync with your web product — not a sluggish wrapper around a desktop site. WebMeService is a mobile app development company in India building cross-platform apps with React Native and Flutter for iOS and Android from a single codebase. That approach cuts cost and time to market while still delivering store-ready builds your users can trust. We treat app store ratings and retention as engineering requirements, not marketing afterthoughts.',
      'We handle the full mobile lifecycle: user flows, API integration, authentication, push notifications, offline-tolerant screens where needed, and App Store / Play Store submission support. Our mobile app development work starts with clarity on who uses the app, what they do daily, and which backend endpoints must be reliable before we write the first screen. Backend gaps are flagged early so launch dates stay realistic.',
      'Because WebMeService also delivers web development services and UI UX design, your app can share branding, design systems, and APIs with your website. One agency means consistent typography, colours, and user journeys — and fewer surprises when marketing promises a feature the app team has never heard of. Shared components and API contracts reduce duplicate work across web and mobile squads.',
      'Startups often come to us for an MVP that proves traction before committing to native modules or heavy infrastructure. We scope a focused first release — core auth, one primary workflow, and analytics — then iterate in sprints based on real user feedback. Established businesses hire us to modernise legacy apps, fix crash-prone codebases, or add features their in-house team cannot schedule this quarter. Both paths get the same documentation standards.',
      'Quality assurance is part of every milestone: device testing, API error states, deep links, and performance on mid-range Android hardware, not just the latest iPhone. You receive TestFlight and internal Play builds for stakeholder review, plus documentation for certificates, bundle IDs, and release channels so you are not locked out of your own app listing. Crash logs and analytics hooks are configured before public launch when possible.',
      'Whether you need a customer-facing product, a field-service tool, or a companion app for a Web3 dashboard, we reply within one business day with a scoped plan. Share your platforms, must-have features, and launch window — our India-based team will recommend React Native or Flutter and a timeline you can take to investors or internal stakeholders. Ongoing maintenance and feature retainers are available after your v1 ships. We also help with app store optimisation assets and release notes when you are preparing a public launch.',
    ],
    benefits: [
      {
        title: 'iOS & Android together',
        body: 'Cross-platform development reduces duplicate work and keeps feature parity across stores without maintaining two separate native codebases.',
      },
      {
        title: 'Store submission support',
        body: 'Guidance on App Store and Play Console requirements, screenshots, privacy labels, and resubmission when reviewers push back.',
      },
      {
        title: 'Aligned with web & design',
        body: 'Shared APIs and UI UX design systems when WebMeService builds your website too — one brand experience across every screen.',
      },
      {
        title: 'Startup-friendly MVPs',
        body: 'Focused first releases with milestone billing so you validate the idea before investing in every nice-to-have feature.',
      },
    ],
    processSteps: [
      {
        title: 'Product discovery',
        body: 'User stories, platform targets, backend readiness, and MVP boundaries documented and approved upfront.',
      },
      {
        title: 'UX & UI design',
        body: 'Wireframes and high-fidelity screens for key journeys, with developer handoff from our design team when in scope.',
      },
      {
        title: 'Sprint development',
        body: 'Feature builds, API integration, auth, and push setup with regular installable builds for your review.',
      },
      {
        title: 'Device QA & beta',
        body: 'Testing across screen sizes and OS versions, crash fixes, and beta distribution via TestFlight or Play internal testing.',
      },
      {
        title: 'Store launch & iteration',
        body: 'Submission support, launch monitoring, and post-release feature updates or maintenance plans as needed.',
      },
    ],
    extraFaqs: [
      {
        q: 'React Native or Flutter — which do you recommend?',
        a: 'We choose based on your team, existing code, and feature needs. Both are production-proven; we explain the trade-off in your quote.',
      },
      {
        q: 'Do you build the backend API for our mobile app?',
        a: 'Yes, when scoped. We deliver Node.js or compatible APIs, or integrate with your existing backend and document endpoints for your team.',
      },
      {
        q: 'Can you add mobile apps to an existing Web3 product?',
        a: 'Yes. We integrate wallet libraries, contract reads, and transaction flows where mobile Web3 makes sense for your users.',
      },
      {
        q: 'What ongoing costs should we expect after launch?',
        a: 'Store developer accounts, push notification services, hosting for APIs, and optional maintenance retainers — we outline these before development starts.',
      },
    ],
  },

  'ui-ux-design': {
    overviewParagraphs: [
      'Great engineering cannot rescue a product people do not understand. WebMeService provides UI UX design services for websites, SaaS dashboards, and mobile apps — turning vague ideas into wireframes, clickable prototypes, and production-ready design systems your developers can implement without constant back-and-forth. We are a software development company in India that treats design as part of delivery, not a handoff to strangers. Good UX is how visitors become customers.',
      'Our process is user-centred without endless workshops. We map primary journeys — sign-up, purchase, booking, mint, admin approval — and remove friction where it hurts conversion. For B2B SaaS, that might mean clearer data tables and filter patterns; for consumer apps, intuitive navigation and accessible touch targets. Every UI UX design decision ties back to a behaviour you want users to complete, with rationale you can share with stakeholders.',
      'Deliverables live in Figma: responsive layouts, component libraries, design tokens, interaction notes, and developer-ready specs. When you hire WebMeService for design and development together, our engineers build what was approved — fewer pixel arguments, fewer launch-day surprises. You can also engage us for design-only projects with clean handoff to your in-house or offshore dev team. Version history and comments stay organised so nothing gets lost in chat threads.',
      'Accessibility and consistency matter for brand trust. We consider colour contrast, focus states, form error messaging, and scalable typography so your product feels professional on desktop and mobile. Redesign projects start with a short audit of current UX pain points, competitor patterns, and analytics if you have them — then a phased proposal so you can ship improvements without freezing the whole product. Quick wins can go live while larger flows are still in progress.',
      'Clients across India and overseas use our UI UX design services for landing pages, multi-role admin panels, e-commerce flows, and Web3 onboarding where wallet steps confuse first-time users. We speak the same language as your marketing and engineering leads, with async updates that respect busy calendars. Design reviews happen on schedule, with recorded walkthroughs when live meetings are hard to book.',
      'Whether you are pre-seed with napkin sketches or scaling a product that has outgrown its first interface, we scope design in milestones — research and flows, wireframes, visual design, prototype — so you can pause or continue into development when ready. Request a quote with your product URL or brief; we respond within one business day. Combined design-and-build packages often shorten total calendar time compared with separate vendors. Ask about a design retainer if you ship features frequently and need a consistent visual partner.',
    ],
    benefits: [
      {
        title: 'Conversion-focused flows',
        body: 'User journeys designed around sign-ups, demos, checkout, or retention — not just screens that look good in a portfolio.',
      },
      {
        title: 'Developer-ready Figma handoff',
        body: 'Components, spacing tokens, and interaction notes so implementation matches design without weeks of clarification chats.',
      },
      {
        title: 'Web & mobile consistency',
        body: 'Unified design systems when we also build your site or app — one visual language across every touchpoint.',
      },
      {
        title: 'Design + build option',
        body: 'Hire WebMeService for UI UX design alone or paired with web development and mobile app development under one roof.',
      },
    ],
    processSteps: [
      {
        title: 'Research & journey mapping',
        body: 'User goals, key flows, constraints, and references documented so design solves real problems.',
      },
      {
        title: 'Wireframes & structure',
        body: 'Low-fidelity layouts for priority screens and navigation — fast iteration before visual polish.',
      },
      {
        title: 'Visual design & system',
        body: 'High-fidelity UI, typography, colour, and reusable components aligned with your brand.',
      },
      {
        title: 'Prototype & review',
        body: 'Clickable Figma prototype for stakeholder testing and feedback before development kickoff.',
      },
      {
        title: 'Handoff & design support',
        body: 'Specs delivered to developers with optional support during build to resolve edge cases and new states.',
      },
    ],
    extraFaqs: [
      {
        q: 'How long does a UI UX design project take?',
        a: 'A focused landing page or small app flow is often 2–3 weeks. Full product design with multiple roles needs a written scope and timeline.',
      },
      {
        q: 'Do you conduct user research or usability testing?',
        a: 'We include lightweight research and review sessions in most projects. Formal user testing can be added when you have access to participants.',
      },
      {
        q: 'Can you work with our existing brand guidelines?',
        a: 'Yes. We extend your brand into digital components and layouts, or help refine guidelines when your print identity needs a web translation.',
      },
      {
        q: 'What if we only need a redesign of a few screens?',
        a: 'We take partial engagements. Share the screens or flows that hurt most and we quote a focused improvement package.',
      },
    ],
  },

  'software-development': {
    overviewParagraphs: [
      'Off-the-shelf software rarely fits how your team actually works — and spreadsheets only scale until they become someone\'s full-time job. WebMeService is a software development company in India building custom applications, APIs, SaaS MVPs, internal tools, and integrations tailored to your workflows. We combine product thinking with engineering discipline so what we ship is used on Monday morning, not forgotten in a staging URL. Custom software should remove friction, not add another login nobody opens. Every feature is tied to a workflow your staff already recognises.',
      'Our software development services cover greenfield products and extensions to existing systems. Typical engagements include multi-tenant SaaS platforms, client portals, reporting dashboards, billing integrations, role-based access, and automation that connects your CRM, payments, email, and databases. We choose React, Next.js, Node.js, PostgreSQL, and cloud tooling that your team can maintain — or we document everything for a clean handover. Legacy integrations are mapped before we promise unrealistic go-live dates. Third-party APIs are evaluated for reliability and licensing early in discovery.',
      'Scope control is how we keep projects predictable. Before coding, you receive written deliverables, milestones, and pricing in INR. MVPs focus on one valuable workflow — auth, billing, core feature — so you can launch in weeks and iterate from user feedback. Larger builds are split into phases so funding and delivery stay aligned. Change requests are handled transparently with impact notes on timeline and cost. You always approve scope changes before extra work begins.',
      'WebMeService is not a body shop sending anonymous developers. You get a consistent team that understands your domain, with optional UI UX design and web development services in the same engagement. Startups, agencies, and SMBs in India and abroad hire us when they need reliable remote delivery without enterprise overhead. You know who is building your product and how to reach them. Stand-ups, demos, and ticket updates fit your timezone where possible.',
      'Security and data handling are discussed upfront: authentication method, PII storage, backup strategy, and deployment environment. We set up CI/CD, staging environments, and monitoring basics so production issues surface early. Post-launch, maintenance plans cover security patches, dependency updates, and feature roadmaps. Compliance-sensitive projects receive extra attention to access logs and data retention policies. We flag risks early instead of hiding them until launch week.',
      'If you have a product brief, legacy code that needs rescue, or an automation idea that will save ten hours a week, contact our India team. We reply within one business day with questions, a recommended approach, and a quote you can share with stakeholders — clear enough that everyone knows what they are buying. Discovery calls are practical, not sales theatre. From there, you decide whether to proceed — no pressure, no endless nurture sequences.',
    ],
    benefits: [
      {
        title: 'Custom fit, not forced templates',
        body: 'Software shaped around your processes, roles, and integrations — avoiding the compromise of generic SaaS you constantly workaround.',
      },
      {
        title: 'Milestone-based delivery',
        body: 'Written scope and phased billing so MVPs and enterprise builds stay transparent from kickoff to launch.',
      },
      {
        title: 'Full-stack capability',
        body: 'Frontend, backend, database, DevOps, and design available from one software development company when your project needs it.',
      },
      {
        title: 'Long-term partnership',
        body: 'Documentation, handover, and optional retainers for updates — we build software you can own and extend.',
      },
    ],
    processSteps: [
      {
        title: 'Discovery & requirements',
        body: 'Workflow interviews, technical constraints, and success metrics captured in a scope document you approve.',
      },
      {
        title: 'Architecture & proposal',
        body: 'Stack recommendation, data model outline, milestones, and fixed or phased pricing before development.',
      },
      {
        title: 'Agile build sprints',
        body: 'Two-week cycles with demos, ticket visibility, and priority adjustments based on your feedback.',
      },
      {
        title: 'Testing & hardening',
        body: 'QA, security basics, performance checks, and staging sign-off with your team or pilot users.',
      },
      {
        title: 'Deploy & enablement',
        body: 'Production release, monitoring, admin training, documentation, and support options for what comes next.',
      },
    ],
    extraFaqs: [
      {
        q: 'What types of software does WebMeService build?',
        a: 'SaaS products, internal admin tools, customer portals, APIs, automation layers, and industry-specific applications — scoped to your requirements.',
      },
      {
        q: 'Can you work with our existing development team?',
        a: 'Yes. We can augment your team on specific modules or own the full stack while coordinating via your tools and ceremonies.',
      },
      {
        q: 'Do you sign NDAs and assign IP to our company?',
        a: 'Yes. Standard engagements include confidentiality and intellectual property transfer upon payment as outlined in our agreement.',
      },
      {
        q: 'How do you estimate software development cost?',
        a: 'We break work into features and milestones, estimate hours per module, and share assumptions so you can adjust scope before committing.',
      },
    ],
  },

  'web3-development': {
    overviewParagraphs: [
      'Web3 products live or die at the intersection of wallets, contracts, and interfaces normal users can actually navigate. WebMeService offers web3 development services in India for dApps, NFT mint experiences, staking dashboards, token-gated content, and hybrid apps that blend traditional login with on-chain actions. We focus on shipped products — not decks about the future of finance. Your users should complete tasks without needing a crypto PhD.',
      'Our web3 development stack spans Solidity smart contracts, React and Next.js frontends, ethers.js and Web3.js integration, IPFS metadata, subgraph indexing, and multi-chain configuration. Whether you are launching on Ethereum, Polygon, or an L2, we help you sequence work so testnet demos happen early and mainnet launch is a managed event, not a panic. Infrastructure choices are documented so your team can operate after handover.',
      'Wallet connect is often the first hurdle. We implement MetaMask, WalletConnect, and mobile-friendly flows with clear error states when users reject transactions, switch networks, or lack gas. For products that need both Web2 and Web3 users, we design hybrid auth — email accounts plus optional wallet linking — so you do not exclude customers who are not ready to self-custody on day one. Onboarding copy and tooltips are part of delivery, not an afterthought.',
      'As a software development company with blockchain development depth, WebMeService advises on what belongs on-chain versus in your database. Storing everything immutably is expensive and slow; we help you keep proofs and ownership on-chain while keeping search, media, and analytics off-chain where it belongs. That balance keeps gas bills sane and UX snappy. We challenge unnecessary on-chain complexity when a simpler pattern works.',
      'Founders and product teams hire us from India and globally for pragmatic communication: weekly demos, honest risk flags, and documentation your next developer can read. We have delivered mint pages, DeFi frontends, admin tools for contract owners, and Web3 features bolted onto existing SaaS — each with deployment checklists and support options after go-live. Post-launch bug fixes and feature sprints can continue on retainer.',
      'If you are planning a token launch, NFT collection, DAO tool, or on-chain loyalty layer, share your chain, user persona, and timeline. Our web3 development team responds within one business day with a scoped recommendation — contracts, frontend, indexing, and launch support priced as milestones you can fund step by step. You always know what each phase unlocks before you approve spend. We stay available for mainnet monitoring, community launch support, and iterative improvements as your user base grows.',
    ],
    benefits: [
      {
        title: 'Full-stack Web3 builds',
        body: 'Smart contracts, dApp UI, wallet flows, and indexing from one team — reducing the integration pain common in multi-vendor Web3 projects.',
      },
      {
        title: 'User-friendly wallet UX',
        body: 'Clear network prompts, transaction feedback, and onboarding for users new to Web3 — not just flows that assume crypto-native experts.',
      },
      {
        title: 'Hybrid Web2 + Web3 products',
        body: 'Combine familiar email login with optional wallet features so you grow audience without forcing everyone on-chain immediately.',
      },
      {
        title: 'India-based Web3 engineers',
        body: 'Competitive rates and IST overlap with global teams, with English-first updates throughout blockchain development.',
      },
    ],
    processSteps: [
      {
        title: 'Web3 product discovery',
        body: 'Chain selection, wallet requirements, contract scope, and off-chain needs mapped in a technical proposal.',
      },
      {
        title: 'Contract & API foundation',
        body: 'Smart contract development or integration, metadata pipelines, and backend hooks for reads and writes.',
      },
      {
        title: 'dApp frontend build',
        body: 'Wallet connect, transaction UI, loading and error states, and responsive layouts for desktop and mobile browsers.',
      },
      {
        title: 'Testnet validation',
        body: 'End-to-end testing with test wallets, faucet funds, and stakeholder walkthroughs before mainnet commitment.',
      },
      {
        title: 'Mainnet launch & growth',
        body: 'Deployment, verification, monitoring, documentation, and iterative features as your community and product evolve.',
      },
    ],
    extraFaqs: [
      {
        q: 'Do I need smart contract development and web3 development separately?',
        a: 'They overlap. Web3 development is the full product — contracts plus dApp and ops tooling. We quote integrated scope or contract-only if you already have a frontend team.',
      },
      {
        q: 'Can you add Web3 features to our existing SaaS?',
        a: 'Yes. Wallet login, NFT badges, on-chain proofs, and token gates can be integrated into React or Next.js apps with minimal disruption to current users.',
      },
      {
        q: 'Which wallets and chains do you support?',
        a: 'EVM chains — Ethereum, Polygon, BSC, and common L2s — with MetaMask and WalletConnect. Solana is available for scoped projects.',
      },
      {
        q: 'How do you handle Web3 security for end users?',
        a: 'We follow contract best practices, simulate transactions on testnet, warn on suspicious approvals, and recommend audits for high-value DeFi before mainnet.',
      },
    ],
  },
}

export const SEO_TITLES = {
  'smart-contract-development': 'Smart Contract Development | WebMeService',
  'blockchain-development': 'Blockchain Solutions & Development Services | WebMeService',
  'web-development': 'Web Development Services | WebMeService',
  'mobile-app-development': 'Mobile App Development Services | WebMeService',
  'ui-ux-design': 'UI UX Design Services | WebMeService',
  'software-development': 'Software Development Services | WebMeService',
  'web3-development': 'Web3 Development Services | WebMeService',
}

export const SEO_DESCRIPTIONS = {
  'smart-contract-development':
    'Hire smart contract developers in India. WebMeService builds secure Solidity contracts for tokens, NFTs, DeFi, and dApps. Free quote within 24 hours.',
  'blockchain-development':
    'Blockchain development company in India. WebMeService delivers Web3 dashboards, dApps, wallet integration, and consulting. Request your free project quote.',
  'web-development':
    'Custom web development services in India — business websites, React apps, Next.js, and e-commerce. WebMeService delivers SEO-ready sites. Free quote in 24h.',
  'mobile-app-development':
    'Mobile app development company in India. React Native and Flutter apps for startups and businesses. Store-ready builds and API integration. Get a free quote.',
  'ui-ux-design':
    'UI UX design services in India — wireframes, prototypes, and design systems for web and mobile. WebMeService pairs design with development. Request a quote.',
  'software-development':
    'Software development company in India. Custom apps, APIs, SaaS MVPs, and internal tools from WebMeService. Clear scope and milestone billing. Free quote in 24h.',
  'web3-development':
    'Web3 development services in India. dApps, wallet connect, smart contract integration, and on-chain dashboards from WebMeService. Request a free project quote.',
}