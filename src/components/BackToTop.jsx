import { useEffect, useRef, useState } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const visibleRef = useRef(false)

  useEffect(() => {
    let ticking = false

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const nextVisible = window.scrollY > 400
        if (nextVisible !== visibleRef.current) {
          visibleRef.current = nextVisible
          setVisible(nextVisible)
        }
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    const root = document.documentElement
    const useSmooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (useSmooth) {
      root.dataset.hashScroll = 'smooth'
      window.scrollTo({ top: 0, behavior: 'smooth' })
      window.setTimeout(() => {
        delete root.dataset.hashScroll
      }, 900)
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }

  return (
    <button
      type="button"
      className={`back-to-top ${visible ? 'back-to-top--visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
      <span>Top</span>
    </button>
  )
}