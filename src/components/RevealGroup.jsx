import { Children, cloneElement, isValidElement, useEffect, useRef, useState } from 'react'

const OBSERVER_OPTIONS = {
  threshold: 0.08,
  rootMargin: '100px 0px -8% 0px',
}

function mergeRefs(node, childRef, itemRef) {
  itemRef.current = node

  if (typeof childRef === 'function') {
    childRef(node)
  } else if (childRef && typeof childRef === 'object') {
    childRef.current = node
  }
}

function RevealGroupItem({ child, index, direction, stagger, ready, reduced }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(reduced)

  useEffect(() => {
    if (reduced) {
      setVisible(true)
      return undefined
    }

    const el = ref.current
    if (!el) return undefined

    const show = () => {
      requestAnimationFrame(() => setVisible(true))
    }

    if (typeof IntersectionObserver === 'undefined') {
      show()
      return undefined
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        show()
        observer.disconnect()
      }
    }, OBSERVER_OPTIONS)

    observer.observe(el)

    const fallback = window.setTimeout(show, 2000)

    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [reduced])

  if (!isValidElement(child)) return child

  const existingClass = child.props.className || ''

  return cloneElement(child, {
    ref: (node) => mergeRefs(node, child.ref, ref),
    className: `${existingClass} reveal-group__item reveal-group__item--${direction}${ready ? ' reveal-group__item--ready' : ''}${visible ? ' reveal-group__item--visible' : ''}`.trim(),
    style: {
      ...child.props.style,
      '--stagger-index': index,
      '--stagger-step': `${stagger}ms`,
    },
  })
}

export default function RevealGroup({
  children,
  className = '',
  as: Tag = 'div',
  stagger = 72,
  direction = 'up',
  mode = 'batch',
  ...rest
}) {
  const ref = useRef(null)
  const [ready, setReady] = useState(false)
  const [active, setActive] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    setReady(true)
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useEffect(() => {
    if (mode !== 'batch') return undefined

    const el = ref.current
    if (!el) return undefined

    if (reduced) {
      setActive(true)
      return undefined
    }

    const show = () => {
      requestAnimationFrame(() => setActive(true))
    }

    if (typeof IntersectionObserver === 'undefined') {
      show()
      return undefined
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        show()
        observer.disconnect()
      }
    }, OBSERVER_OPTIONS)

    observer.observe(el)

    const fallback = window.setTimeout(show, 1600)

    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [mode, reduced])

  if (mode === 'each') {
    const items = Children.map(children, (child, index) => (
      <RevealGroupItem
        key={child?.key ?? index}
        child={child}
        index={index}
        direction={direction}
        stagger={stagger}
        ready={ready}
        reduced={reduced}
      />
    ))

    return (
      <Tag
        className={`reveal-group reveal-group--each reveal-group--${direction}${ready ? ' reveal-group--ready' : ''} ${className}`.trim()}
        {...rest}
      >
        {items}
      </Tag>
    )
  }

  const items = Children.map(children, (child, index) => {
    if (!isValidElement(child)) return child

    const existingClass = child.props.className || ''

    return cloneElement(child, {
      className: `${existingClass} reveal-group__item reveal-group__item--${direction}`.trim(),
      style: {
        ...child.props.style,
        '--stagger-index': index,
      },
    })
  })

  return (
    <Tag
      ref={ref}
      className={`reveal-group reveal-group--batch reveal-group--${direction}${ready ? ' reveal-group--ready' : ''}${active ? ' reveal-group--active' : ''} ${className}`.trim()}
      style={{ '--stagger-step': `${stagger}ms` }}
      {...rest}
    >
      {items}
    </Tag>
  )
}