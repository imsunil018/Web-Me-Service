/** Pause heavy decorative animations when tab is hidden. */
export function bindPageVisibility() {
  if (typeof document === 'undefined') return

  const sync = () => {
    document.documentElement.classList.toggle('page-hidden', document.hidden)
  }

  sync()
  document.addEventListener('visibilitychange', sync, { passive: true })
}