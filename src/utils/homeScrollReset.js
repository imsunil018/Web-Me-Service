const HOME_PATHS = new Set(['/', ''])

export function isHomePath(pathname = window.location.pathname) {
  return HOME_PATHS.has(pathname)
}

export function isHomeHardReload() {
  const nav = performance.getEntriesByType?.('navigation')?.[0]
  return nav?.type === 'reload'
}

/** Run before React paints so refresh always lands on the hero, not a saved hash/scroll. */
export function resetHomeOnHardLoad() {
  if (!isHomePath()) return false

  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'
  }

  const isReload = isHomeHardReload()

  if (isReload) {
    if (window.location.hash) {
      history.replaceState(null, '', `${window.location.pathname}${window.location.search}`)
    }
    window.scrollTo(0, 0)
    return true
  }

  if (!window.location.hash) {
    window.scrollTo(0, 0)
    return true
  }

  return false
}

export function shouldHonorHomeHashOnBoot() {
  if (!isHomePath()) return false
  if (isHomeHardReload()) return false
  return Boolean(window.location.hash)
}

export function bindHomeScrollGuards() {
  window.addEventListener('pageshow', (event) => {
    if (!isHomePath() || !event.persisted) return
    if (window.location.hash) {
      history.replaceState(null, '', `${window.location.pathname}${window.location.search}`)
    }
    window.scrollTo(0, 0)
  })
}