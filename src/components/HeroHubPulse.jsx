import { useEffect, useRef } from 'react'
import { HUB_COORDS, MOBILE_HUB_COORDS } from '../data/hubLayout'

const MOBILE = MOBILE_HUB_COORDS

const PULSE_DOTS = [
  { id: 'tl-comet-in', spoke: 'tl', duration: 4600, offset: 0, size: 'packet', reverse: false },
  { id: 'tl-comet-out', spoke: 'tl', duration: 5200, offset: 2400, size: 'packet', reverse: true },
  { id: 'tl-glow', spoke: 'tl', duration: 6400, offset: 1200, size: 'md', reverse: false },
  { id: 'tr-comet-in', spoke: 'tr', duration: 4800, offset: 600, size: 'packet', reverse: false },
  { id: 'tr-comet-out', spoke: 'tr', duration: 5400, offset: 3000, size: 'packet', reverse: true },
  { id: 'tr-glow', spoke: 'tr', duration: 6600, offset: 1800, size: 'md', reverse: false },
  { id: 'bl-comet-in', spoke: 'bl', duration: 5000, offset: 1200, size: 'packet', reverse: false },
  { id: 'bl-comet-out', spoke: 'bl', duration: 5600, offset: 3600, size: 'packet', reverse: true },
  { id: 'bl-glow', spoke: 'bl', duration: 6800, offset: 2400, size: 'md', reverse: false },
  { id: 'br-comet-in', spoke: 'br', duration: 5200, offset: 1800, size: 'packet', reverse: false },
  { id: 'br-comet-out', spoke: 'br', duration: 5800, offset: 4200, size: 'packet', reverse: true },
  { id: 'br-glow', spoke: 'br', duration: 7000, offset: 3000, size: 'md', reverse: false },
]

function easeInOutQuint(t) {
  return t < 0.5 ? 16 * t * t * t * t * t : 1 - Math.pow(-2 * t + 2, 5) / 2
}

function pointOnPolyline(points, t) {
  const segments = []
  let total = 0

  for (let i = 0; i < points.length - 1; i += 1) {
    const [x1, y1] = points[i]
    const [x2, y2] = points[i + 1]
    const len = Math.hypot(x2 - x1, y2 - y1)
    segments.push({ x1, y1, x2, y2, len })
    total += len
  }

  if (total === 0) {
    return { x: points[0][0], y: points[0][1] }
  }

  let dist = t * total

  for (const seg of segments) {
    if (dist <= seg.len) {
      const ratio = seg.len === 0 ? 0 : dist / seg.len
      return {
        x: seg.x1 + (seg.x2 - seg.x1) * ratio,
        y: seg.y1 + (seg.y2 - seg.y1) * ratio,
      }
    }
    dist -= seg.len
  }

  const last = points[points.length - 1]
  return { x: last[0], y: last[1] }
}

function pulseEnvelope(t, size, reverse) {
  const fadeIn = size === 'packet' ? 0.14 : 0.12
  const fadeOut = size === 'packet' ? 0.86 : 0.88
  if (t < fadeIn) return easeInOutQuint(t / fadeIn)
  if (t > fadeOut) return easeInOutQuint((1 - t) / (1 - fadeOut))
  return reverse ? 0.72 : 1
}

function pulseScale(t, size) {
  if (size === 'packet') {
    const peak = Math.sin(t * Math.PI)
    return 0.75 + peak * 0.55
  }
  return 0.9 + Math.sin(t * Math.PI) * 0.2
}

export default function HeroHubPulse({ ecosystemRef }) {
  const dotRefs = useRef([])
  const layerRef = useRef(null)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotion.matches) {
      return undefined
    }

    const mobileLayout = window.matchMedia('(max-width: 768px)')
    const coords = () => (mobileLayout.matches ? MOBILE : HUB_COORDS)

    const start = performance.now()
    let frame = 0
    let visible = true

    const tick = (now) => {
      if (!visible || document.hidden) {
        frame = requestAnimationFrame(tick)
        return
      }

      const ecosystem = ecosystemRef?.current
      const activeSpoke = ecosystem?.dataset.activeSpoke || ''
      const speedBoost = activeSpoke ? 1.55 : 1
      let hubAbsorb = 0

      PULSE_DOTS.forEach((dot, i) => {
        const el = dotRefs.current[i]
        if (!el) return

        const hubCoords = coords()
        const hubCenter = hubCoords.center
        const outer = hubCoords[dot.spoke]
        const points = dot.reverse ? [hubCenter, outer] : [outer, hubCenter]
        const spokeBoost = activeSpoke === dot.spoke ? speedBoost : activeSpoke ? 0.75 : 1
        const elapsed = ((now - start + dot.offset) * spokeBoost) % dot.duration
        const linearT = elapsed / dot.duration
        const easedT = easeInOutQuint(linearT)
        const pos = pointOnPolyline(points, easedT)

        if (!dot.reverse && linearT > 0.78) {
          hubAbsorb = Math.max(hubAbsorb, easeInOutQuint((linearT - 0.78) / 0.22))
        }

        const dim = activeSpoke && activeSpoke !== dot.spoke ? 0.42 : 1
        const opacity = pulseEnvelope(linearT, dot.size, dot.reverse) * dim
        const scale = pulseScale(linearT, dot.size)

        el.style.left = `${pos.x * 100}%`
        el.style.top = `${pos.y * 100}%`
        el.style.opacity = String(opacity)
        el.style.transform = `translate(-50%, -50%) scale(${scale})`
      })

      if (ecosystem) {
        ecosystem.style.setProperty('--hub-absorb', hubAbsorb.toFixed(3))
        ecosystem.dataset.hubActive = hubAbsorb > 0.06 ? 'true' : 'false'
      }

      frame = requestAnimationFrame(tick)
    }

    const observer = layerRef.current
      ? new IntersectionObserver(
          ([entry]) => {
            visible = entry.isIntersecting
          },
          { rootMargin: '120px 0px', threshold: 0 },
        )
      : null

    if (observer && layerRef.current) {
      observer.observe(layerRef.current)
    }

    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      observer?.disconnect()
    }
  }, [ecosystemRef])

  return (
    <div ref={layerRef} className="hero__hub-pulse-layer" aria-hidden="true">
      {PULSE_DOTS.map((dot, i) => (
        <span
          key={dot.id}
          ref={(node) => {
            dotRefs.current[i] = node
          }}
          className={`hero__hub-pulse-dot hero__hub-pulse-dot--${dot.size}${dot.reverse ? ' hero__hub-pulse-dot--out' : ''}`}
          data-spoke={dot.spoke}
        />
      ))}
    </div>
  )
}