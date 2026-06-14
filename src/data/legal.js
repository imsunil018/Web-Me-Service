import { SITE, SERVICES, PRICING } from './site'

export const LEGAL_UPDATED = '12 June 2026'

const SERVICE_NAMES = SERVICES.map((service) => service.title).join(', ')

const PRICING_SUMMARY = PRICING.map(
  (plan) => `${plan.name} (${plan.currency}${plan.price} ${plan.period})`,
).join('; ')

export const PRIVACY_SECTIONS = [
  {
    id: 'overview',
    title: 'Overview',
    paragraphs: [
      `${SITE.legalName} ("WebMeService", "we", "us", or "our") operates ${SITE.url} and related pages including our services overview, technology stack, portfolio, pricing, and contact sections.`,
      `We are a software development company and digital agency based in ${SITE.location}, serving ${SITE.serviceArea}. Our work includes web development, mobile app development, blockchain solutions, smart contract development, UI/UX design, graphic design, SEO, and cloud hosting — as described across ${SITE.domain}.`,
      'This Privacy Policy explains how we collect, use, store, and protect personal information when you browse our website, request a quote, contact us on email or WhatsApp, or become a client.',
      'We collect only what we need to respond to inquiries, deliver projects, and keep the site secure. We do not sell your personal information.',
    ],
  },
  {
    id: 'scope',
    title: 'What This Policy Covers',
    list: [
      `Visiting ${SITE.domain}, including homepage sections (services, pricing, portfolio, FAQ, contact, and related content).`,
      'Submitting our contact form with your name, email, service selection, and project brief.',
      `Emailing ${SITE.email} or messaging us on WhatsApp at ${SITE.whatsapp.display}.`,
      'Working with us on a paid project — including file sharing, invoices, staging links, and support after launch.',
      'Browsing our GitHub repositories, demo links, or social profiles linked from the site.',
    ],
    paragraphs: [
      'This policy does not cover third-party websites you reach through external links (for example payment gateways, app stores, or blockchain explorers). Those services have their own privacy policies.',
    ],
  },
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    paragraphs: [
      'The type of data depends on how you interact with WebMeService:',
    ],
    list: [
      'Identity & contact — full name, work email, company name, phone number (if shared on WhatsApp or email), and country/time zone.',
      'Project details — service required (e.g. Web Development, Smart Contract Development, Mobile App Development), goals, timeline, budget range, references, and files you voluntarily attach.',
      'Client & billing data — billing address, GST details (if applicable), invoice history, and payment confirmations from our payment or invoicing partners.',
      'Technical & usage data — IP address, browser type, device type, operating system, pages visited, referral source, and approximate region — collected through standard server logs and privacy-conscious analytics.',
      'Communications — email threads, WhatsApp messages, meeting notes, and feedback you send during sales or delivery.',
      'Local preferences — theme choice (light/dark mode) stored in your browser via localStorage on this device only.',
    ],
  },
  {
    id: 'how-we-collect',
    title: 'How We Collect Information',
    list: [
      'Directly from you — contact form, email, WhatsApp, video calls, and documents shared for scoping or delivery.',
      'Automatically — cookies, localStorage, server logs, and analytics when you browse the site.',
      'From service providers — hosting uptime logs, email delivery status, or payment confirmations where you pay an invoice.',
      'From public sources — only when relevant to your project (for example a company website you ask us to reference).',
    ],
  },
  {
    id: 'how-we-use',
    title: 'How We Use Your Information',
    list: [
      'Reply to quote requests within our stated response window (typically one business day).',
      'Scope, plan, and deliver websites, mobile apps, smart contracts, UI/UX design, SEO, and related services you hire us for.',
      'Share project updates, staging links, invoices, contracts, and post-launch support notices.',
      'Operate demos, portfolio case studies, and internal QA — only with your approval where client work is involved.',
      'Improve site performance, fix bugs, and understand aggregated traffic patterns (not to profile individuals for advertising).',
      'Meet legal, tax, accounting, and record-keeping obligations under Indian law.',
      'Protect against fraud, abuse, spam, or attempts to disrupt our website or infrastructure.',
    ],
  },
  {
    id: 'legal-basis',
    title: 'Legal Basis (India)',
    paragraphs: [
      'We process personal data under applicable Indian law, including the Digital Personal Data Protection Act, 2023 (DPDP Act), where it applies to our operations.',
      'Depending on the situation, we rely on: your consent (for example when you submit the contact form), performance of a contract or pre-contract steps (quotes and project delivery), legitimate interests (site security and service improvement), or legal obligations (tax and accounting records).',
    ],
  },
  {
    id: 'sharing',
    title: 'When We Share Information',
    paragraphs: [
      'We do not sell, rent, or trade your personal data. We share limited information only when necessary:',
    ],
    list: [
      'Infrastructure providers — web hosting, CDN, email delivery, and backup services that store or transmit data on our behalf under confidentiality terms.',
      'Payment & invoicing partners — to process your payment when you become a client.',
      'Subcontractors — designers, developers, or auditors engaged on your project, bound by confidentiality and only given access required for their task.',
      'Legal requirements — courts, regulators, or law enforcement when required by applicable law, or to protect rights, safety, and security.',
    ],
    paragraphsAfterList: [
      'We require processors to use data only for the purpose we specify and to apply reasonable security measures.',
    ],
  },
  {
    id: 'international',
    title: 'International Clients & Transfers',
    paragraphs: [
      `WebMeService is based in India and works with clients in India and overseas. If you contact us from outside India, your data may be processed and stored in India or on servers used by our hosting and tooling providers.`,
      'Where required, we take reasonable steps to ensure appropriate safeguards for cross-border processing. Contact us if you need more detail about where project data is stored.',
    ],
  },
  {
    id: 'retention',
    title: 'How Long We Keep Data',
    list: [
      'Sales inquiries — retained long enough to respond, follow up, and maintain reasonable business records (typically up to 24 months unless a project starts).',
      'Active client projects — kept for the project duration and handover period defined in your agreement.',
      'Contracts, invoices, and tax records — retained as required under Indian law, then securely deleted or anonymised.',
      'Server logs & analytics — kept for a limited rolling period for security and debugging, then aggregated or deleted.',
      'Theme preference (localStorage) — remains on your device until you clear browser storage.',
    ],
  },
  {
    id: 'security',
    title: 'Security',
    paragraphs: [
      'We use industry-standard measures including HTTPS across the site, access controls on project repositories, secure hosting, and restricted internal access to client files.',
      'For blockchain work, we follow secure key-handling practices agreed in your scope — private keys and seed phrases should never be sent through unsecured channels.',
      'No online system is completely secure. If you believe your interaction with us was compromised, contact us promptly at the email below.',
    ],
  },
  {
    id: 'your-rights',
    title: 'Your Rights & Choices',
    paragraphs: [
      'Subject to applicable law (including the DPDP Act where it applies), you may have the right to:',
    ],
    list: [
      'Request access to personal data we hold about you.',
      'Ask us to correct inaccurate or incomplete information.',
      'Request deletion where we have no legal or contractual reason to retain it.',
      'Withdraw consent for optional processing (for example non-essential marketing).',
      'Nominate a grievance contact or raise a concern with the relevant authority where the law provides that right.',
    ],
    paragraphsAfterList: [
      `To exercise these rights, email ${SITE.email} with the subject line "Privacy Request". We verify requests and respond within a reasonable timeframe.`,
      'You can opt out of non-essential marketing emails at any time using the unsubscribe link or by replying "unsubscribe".',
    ],
  },
  {
    id: 'cookies',
    title: 'Cookies, Local Storage & Analytics',
    paragraphs: [
      'Our website uses minimal client-side storage:',
    ],
    list: [
      'localStorage — saves your light/dark theme preference (`webmeservice-theme`) so the site remembers your choice on return visits.',
      'Session & security cookies — may be set by our hosting or security layer to keep the site reliable.',
      'Analytics — we may use privacy-conscious analytics to understand page performance and traffic in aggregate form.',
    ],
    paragraphsAfterList: [
      'You can control cookies and local storage through your browser settings. Disabling storage may reset your theme preference or affect some features.',
      'We do not use advertising cookies or sell browsing data to ad networks.',
    ],
  },
  {
    id: 'third-party-links',
    title: 'Third-Party Links & Platforms',
    list: [
      `WhatsApp (${SITE.whatsapp.display}) — governed by Meta/WhatsApp terms when you message us there.`,
      'GitHub, LinkedIn, and demo URLs — linked from our portfolio and footer; each platform has its own privacy policy.',
      'Payment gateways & app stores — when you pay invoices or publish apps we build, those providers process data under their policies.',
      'Blockchain networks — on-chain transactions are public by design; wallet addresses and transaction hashes are not controlled by WebMeService once published.',
    ],
  },
  {
    id: 'children',
    title: "Children's Privacy",
    paragraphs: [
      'WebMeService provides B2B and professional services aimed at businesses and adults. We do not knowingly collect personal data from anyone under 18.',
      'If you believe a minor has submitted data through our contact form, contact us and we will delete it promptly.',
    ],
  },
  {
    id: 'updates',
    title: 'Changes to This Policy',
    paragraphs: [
      'We may update this Privacy Policy when our services, tools, or legal requirements change. The "Last updated" date at the top of the Legal page shows the current version.',
      'Material changes will be reflected on this page. Continued use of the website after an update means you accept the revised policy.',
    ],
  },
  {
    id: 'privacy-contact',
    title: 'Contact & Grievance',
    paragraphs: [
      'For privacy questions, data access requests, or concerns about how we handle your information:',
    ],
    contact: true,
  },
]

export const TERMS_SECTIONS = [
  {
    id: 'agreement',
    title: 'Agreement',
    paragraphs: [
      `These Terms of Service ("Terms") govern your use of ${SITE.url} and any services provided by ${SITE.legalName} ("WebMeService", "we", "us").`,
      'By browsing our website, submitting a contact form, messaging us, or engaging us for a project, you agree to these Terms. If you do not agree, please do not use the site or our services.',
      'For paid work, a written proposal, statement of work (SOW), or invoice may include additional terms. Where there is a conflict, the signed project agreement prevails for that specific engagement.',
    ],
  },
  {
    id: 'about',
    title: 'About WebMeService',
    paragraphs: [
      `${SITE.about}`,
      `We have operated since ${SITE.foundedYear}, with business hours of ${SITE.businessHours} and a typical ${SITE.responseTime} on business days for new inquiries.`,
      `Primary contact: ${SITE.email} · WhatsApp ${SITE.whatsapp.display}`,
    ],
  },
  {
    id: 'services',
    title: 'Services We Provide',
    paragraphs: [
      `WebMeService offers professional digital services including: ${SERVICE_NAMES}.`,
      'We also deliver SaaS products, custom packages, and milestone-based enterprise engagements as described on our services and pricing pages.',
      'Marketing content, portfolio examples, and starting prices on the website are illustrative. Binding scope, deliverables, timeline, revisions, and fees are always defined in a written quote or contract — not by homepage copy alone.',
      `Published pricing tiers (${PRICING_SUMMARY}) are starting estimates. Final quotes depend on pages, features, integrations, design depth, blockchain complexity, and deadline.`,
    ],
  },
  {
    id: 'website-use',
    title: 'Website Use & Acceptable Use',
    list: [
      'Use the site for lawful purposes only — to learn about our services, request quotes, or contact our team.',
      'Do not attempt to hack, scrape, overload, reverse-engineer, or disrupt the website or its infrastructure.',
      'Do not submit false information, spam, malware, or unlawful content through our forms or email.',
      'Do not copy, resell, or misrepresent our portfolio, code samples, or brand assets without permission.',
      'Content on this site is general information about software development — not legal, financial, tax, or investment advice.',
    ],
  },
  {
    id: 'quotes-process',
    title: 'Quotes & Project Process',
    paragraphs: [
      'Our standard process aligns with what we publish on the website:',
    ],
    list: [
      'Discovery — share your brief via the contact form, email, or WhatsApp with goals, timeline, and budget range.',
      'Scoped quote — we reply with deliverables, milestones, timeline, and pricing in INR (unless agreed otherwise).',
      'Agreement — work begins after mutual acceptance and any required advance payment.',
      'Design & build — review cycles with staging links; feedback within agreed windows keeps timelines on track.',
      'Test & launch — QA, performance checks, deployment, and handover documentation.',
      'Support — optional maintenance, hosting, and iterations after go-live.',
    ],
  },
  {
    id: 'client-responsibilities',
    title: 'Client Responsibilities',
    list: [
      'Provide accurate requirements, brand assets, content, and timely feedback during agreed review periods.',
      'Supply logins, API keys, domain access, and approvals needed for delivery — only through secure channels.',
      'Confirm you own or have licensed all text, images, logos, code, and data you provide.',
      'Review deliverables promptly and report defects within the warranty window stated in your agreement.',
      'For blockchain projects — understand network fees, wallet security, and regulatory obligations in your jurisdiction.',
    ],
  },
  {
    id: 'payment',
    title: 'Payment Terms',
    list: [
      'Projects typically require an advance or first milestone payment before development begins unless agreed otherwise in writing.',
      'Invoices are due within the period stated on the invoice (commonly 7–15 days).',
      'Prices are quoted in Indian Rupees (INR) unless specified; applicable GST and taxes are added as per Indian law.',
      'Late payments may pause work, delay deliverables, and incur follow-up reminders.',
      'Third-party costs — domains, hosting plans, stock assets, app store fees, blockchain gas, audit fees — are either paid by you directly or invoiced as pass-through costs.',
      'Enterprise and custom engagements may use milestone billing as defined in the SOW.',
    ],
  },
  {
    id: 'revisions',
    title: 'Revisions & Scope Changes',
    paragraphs: [
      'Each package includes a reasonable number of revision rounds within the agreed scope. Requests outside scope — new features, extra pages, additional platforms, or major design changes — are quoted separately before work proceeds.',
      'Timeline shifts caused by delayed feedback, missing content, or third-party dependencies may adjust delivery dates. We communicate changes in writing.',
    ],
  },
  {
    id: 'refunds',
    title: 'Refunds & Cancellations',
    paragraphs: [
      'Custom software, design, and blockchain work is generally non-refundable once billable work has started, except where we fail to deliver the agreed scope through our fault.',
      'If you cancel before work begins, any advance may be refunded minus administrative costs, third-party purchases already made, and time spent on discovery already delivered.',
      'Hosting, domains, licenses, stock assets, gas fees, and other pass-through costs are non-refundable once incurred.',
      'Raise disputes in writing within 14 days of delivery so we can review logs, staging history, and scope documents fairly.',
    ],
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    paragraphs: [
      'Upon full payment of all fees due for a project, you receive the rights to final deliverables as stated in your project agreement (typically ownership or a broad license to use the delivered work for your business).',
      'We retain ownership of pre-existing code libraries, internal tools, reusable components, and know-how developed independently of your project.',
      'We may showcase completed work (screenshots, descriptions, and links) in our portfolio, case studies, and marketing unless you request confidentiality in writing before launch.',
      'Third-party themes, plugins, fonts, stock media, open-source packages, and SaaS tools remain under their respective licenses — we document what applies to your build at handover.',
    ],
  },
  {
    id: 'blockchain',
    title: 'Blockchain, Web3 & Smart Contracts',
    paragraphs: [
      'Blockchain services — including smart contract development on Ethereum, Polygon, BSC, and other EVM chains, wallet integration, dApp frontends, token/NFT launches, and Web3 dashboards — involve risks outside our control.',
    ],
    list: [
      'Network uptime, gas fees, bridge failures, and protocol upgrades are governed by third-party networks.',
      'Smart contract audits, if not explicitly included in your SOW, are your responsibility to commission before mainnet deployment at scale.',
      'We cannot guarantee token prices, trading volume, regulatory approval, or listing on exchanges.',
      'You are responsible for compliance with securities, AML/KYC, and other laws applicable in your jurisdiction.',
      'Deployed contracts are immutable unless upgrade patterns are explicitly scoped. Post-deploy changes may require new work and fees.',
    ],
    paragraphsAfterList: [
      'We deliver tested code, deployment scripts, and documentation as agreed — but on-chain deployment and ongoing operations remain a shared responsibility defined in your contract.',
    ],
  },
  {
    id: 'confidentiality',
    title: 'Confidentiality',
    paragraphs: [
      'We treat client briefs, unreleased designs, credentials, and business information as confidential unless you authorise public use (for example portfolio display).',
      'We expect the same respect for our proposals, internal rates, and processes. Mutual NDAs are available for sensitive engagements on request.',
    ],
  },
  {
    id: 'warranty',
    title: 'Warranty & Post-Launch Support',
    paragraphs: [
      'We fix defects in delivered work that fall within the agreed scope for a reasonable period stated in your contract:',
    ],
    list: [
      'Starter web packages — 30 days of fixes after launch for bugs, not new features.',
      'Business Pro packages — 90 days priority support as described on our pricing page.',
      'Enterprise / custom builds — support period defined in the SOW.',
    ],
    paragraphsAfterList: [
      'Warranty covers bugs in our implementation — not hosting outages, third-party API changes, content updates, SEO campaigns, or new functionality. Ongoing maintenance and hosting are available as separate plans.',
    ],
  },
  {
    id: 'maintenance',
    title: 'Hosting, Maintenance & Third-Party Services',
    paragraphs: [
      'Cloud & hosting setup, SSL, backups, and monitoring may be included or offered separately depending on your package.',
      'We are not liable for downtime caused by hosting providers, DNS registrars, payment processors, app stores, or blockchain networks.',
      'You are responsible for renewing domains and subscriptions billed in your name unless we manage them under a maintenance agreement.',
    ],
  },
  {
    id: 'limitation',
    title: 'Limitation of Liability',
    paragraphs: [
      'To the fullest extent permitted by Indian law, WebMeService\'s total liability for any claim arising from the website or a specific project is limited to the fees you paid us for that project in the twelve (12) months before the claim.',
      'We are not liable for indirect, incidental, consequential, or lost-profit damages — including lost revenue, data loss, token value changes, or business interruption — even if we were advised such damages were possible.',
      'Nothing in these Terms limits liability where exclusion is not permitted by law.',
    ],
  },
  {
    id: 'indemnity',
    title: 'Indemnification',
    paragraphs: [
      'You agree to indemnify and hold WebMeService harmless from claims arising from materials you supply (copyright infringement, unlawful content, misrepresented rights), your use of deliverables outside agreed scope, or your violation of applicable law — particularly for user-generated content, token offerings, and regulated industries.',
    ],
  },
  {
    id: 'termination',
    title: 'Suspension & Termination',
    paragraphs: [
      'We may suspend or terminate access to the website or pause project work if you breach these Terms, fail to pay invoices, or engage in abusive conduct toward our team.',
      'You may terminate an engagement as described in your project agreement. Work completed up to termination remains billable; deliverables already paid for are handled per the IP section.',
    ],
  },
  {
    id: 'governing-law',
    title: 'Governing Law & Disputes',
    paragraphs: [
      'These Terms are governed by the laws of India. Courts in India shall have jurisdiction, subject to mandatory consumer protections where applicable.',
      'We prefer to resolve disputes informally first — contact us with details and we will work toward a fair solution before formal proceedings.',
    ],
  },
  {
    id: 'changes',
    title: 'Changes to These Terms',
    paragraphs: [
      'We may update these Terms when our services or legal requirements change. The "Last updated" date on the Legal page reflects the current version.',
      'Continued use of the website after changes constitutes acceptance. Active client contracts continue under the terms in effect when signed, unless both parties agree otherwise.',
    ],
  },
  {
    id: 'terms-contact',
    title: 'Contact',
    paragraphs: [
      'For questions about these Terms, billing, or an active project:',
    ],
    contact: true,
  },
]