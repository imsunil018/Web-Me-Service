import { useEffect, useRef, useState } from 'react'

export default function AnimateOnScroll({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  as: Tag = 'div',
  immediate = false,
  ...rest
}) {
  const ref = useRef(null)
  const [ready, setReady] = useState(false)
  const [visible, setVisible] = useState(immediate)

  useEffect(() => {
    setReady(true)
  }, [])

  useEffect(() => {
    if (immediate) {
      setVisible(true)
      return undefined
    }

    const el = ref.current
    if (!el) return undefined

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setVisible(true)
      return undefined
    }

    const show = () => {
      requestAnimationFrame(() => setVisible(true))
    }

    if (typeof IntersectionObserver === 'undefined') {
      show()
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show()
          observer.disconnect()
        }
      },
      {
        threshold: 0.08,
        rootMargin: '100px 0px -8% 0px',
      },
    )

    observer.observe(el)

    const fallback = window.setTimeout(show, 1400)

    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [immediate])

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${direction}${ready ? ' reveal--ready' : ''}${visible ? ' reveal--visible' : ''} ${className}`.trim()}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}