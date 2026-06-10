import { useEffect } from 'react'
import { SITE, SEO, SERVICES } from '../data/site'

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
      email: SITE.email,
      telephone: SITE.phone,
      description: SEO.description,
      sameAs: [SITE.url],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      description: SEO.description,
      publisher: { '@id': `${SITE.url}/#organization` },
      inLanguage: 'en-IN',
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE.url}/#service`,
      name: SITE.name,
      url: SITE.url,
      image: `${SITE.url}/favicon.svg`,
      telephone: SITE.phone,
      email: SITE.email,
      description: SEO.description,
      areaServed: 'IN',
      priceRange: '₹₹',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Services',
        itemListElement: SERVICES.map((service) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.title,
            description: service.description,
          },
        })),
      },
    },
  ],
}

export default function Seo() {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(structuredData)
    script.id = 'webmeservice-structured-data'
    document.head.appendChild(script)
    return () => script.remove()
  }, [])

  return null
}