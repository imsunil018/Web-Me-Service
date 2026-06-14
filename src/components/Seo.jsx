import { useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE, SEO, HERO } from '../data/site'
import { buildStructuredData, OG_IMAGE, resolveSeoMeta } from '../data/seo'

const SCRIPT_ID = 'webmeservice-structured-data'

function upsertMeta(attr, key, content) {
  if (content == null || content === '') return
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href, extra = {}) {
  if (!href) return
  const selector = extra.hreflang
    ? `link[rel="${rel}"][hreflang="${extra.hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`
  let el = document.querySelector(selector)
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    document.head.appendChild(el)
  }
  el.href = href
  Object.entries(extra).forEach(([key, value]) => {
    if (value != null) el.setAttribute(key, value)
  })
}

function applyHreflang(canonical) {
  upsertLink('alternate', canonical, { hreflang: SEO.language })
  upsertLink('alternate', canonical, { hreflang: 'x-default' })
}

function applySeo(meta) {
  document.title = meta.title
  document.documentElement.lang = SEO.language

  upsertMeta('name', 'description', meta.description)
  upsertMeta('name', 'keywords', meta.keywords)
  upsertMeta('name', 'author', SEO.author)
  upsertMeta('name', 'robots', meta.robots)
  upsertMeta('name', 'googlebot', 'index, follow')
  upsertMeta('name', 'geo.region', SEO.geoRegion)
  upsertMeta('name', 'geo.placename', SEO.geoCountry)
  upsertMeta('name', 'application-name', SITE.name)

  upsertMeta('property', 'og:type', meta.ogType)
  upsertMeta('property', 'og:url', meta.canonical)
  upsertMeta('property', 'og:site_name', SITE.name)
  upsertMeta('property', 'og:title', meta.title)
  upsertMeta('property', 'og:description', meta.description)
  upsertMeta('property', 'og:locale', SEO.locale)
  upsertMeta('property', 'og:image', OG_IMAGE)
  upsertMeta('property', 'og:image:alt', SEO.ogImageAlt)
  upsertMeta('property', 'og:image:width', '1200')
  upsertMeta('property', 'og:image:height', '630')

  upsertMeta('name', 'twitter:card', 'summary_large_image')
  upsertMeta('name', 'twitter:title', meta.title)
  upsertMeta('name', 'twitter:description', meta.description)
  upsertMeta('name', 'twitter:image', OG_IMAGE)
  upsertMeta('name', 'twitter:image:alt', SEO.ogImageAlt)
  if (SEO.twitterHandle) upsertMeta('name', 'twitter:site', SEO.twitterHandle)

  upsertLink('canonical', meta.canonical)
  applyHreflang(meta.canonical)
}

export default function Seo() {
  const { pathname, hash } = useLocation()
  const meta = useMemo(() => resolveSeoMeta(pathname, hash), [pathname, hash])

  useEffect(() => {
    applySeo(meta)

    let script = document.getElementById(SCRIPT_ID)
    if (!script) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = SCRIPT_ID
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(buildStructuredData(meta))
  }, [meta])

  return (
    <span className="sr-only">
      {HERO.titleLead} {HERO.typeWords.join(', ')} — {SITE.name} software development company in{' '}
      {SEO.geoCountry}. Web development, smart contract development, blockchain solutions, mobile apps, and UI/UX
      design services.
    </span>
  )
}