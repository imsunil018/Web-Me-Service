const SMOOTH_SCROLL_MS = 900
const SCROLL_OFFSET = 88
const MAX_SCROLL_ATTEMPTS = 60

export function scrollToHashElement(id, { smooth = true } = {}) {
  const el = document.getElementById(id)
  if (!el) return false

  const prevVisibility = el.style.contentVisibility
  el.style.contentVisibility = 'visible'

  const root = document.documentElement
  const useSmooth =
    smooth && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET

  if (useSmooth) {
    root.dataset.hashScroll = 'smooth'
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
    window.setTimeout(() => {
      delete root.dataset.hashScroll
      el.style.contentVisibility = prevVisibility
    }, SMOOTH_SCROLL_MS)
  } else {
    window.scrollTo({ top: Math.max(0, top), behavior: 'auto' })
    el.style.contentVisibility = prevVisibility
  }

  return true
}

export function scheduleHashScroll(id, { delay = 60, smooth = true } = {}) {
  let attempts = 0
  let timeoutId

  const run = () => {
    if (scrollToHashElement(id, { smooth })) return

    if (attempts < MAX_SCROLL_ATTEMPTS) {
      attempts += 1
      timeoutId = window.setTimeout(run, 100)
    }
  }

  timeoutId = window.setTimeout(run, delay)
  return () => window.clearTimeout(timeoutId)
}