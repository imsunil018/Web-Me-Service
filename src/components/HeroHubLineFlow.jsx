import { useEffect, useRef } from 'react'
import { HUB_ALL_LINES, HUB_SVG, hubSvgPath } from '../data/hubLayout'

const TRAIL_LEN = 32
const TRAIL_HEAD = 5
const TRAIL_GAP = 96
const TRAIL_PERIOD = TRAIL_HEAD + TRAIL_LEN + TRAIL_GAP

const COMET_LEN = 14
const COMET_GAP = 108
const COMET_PERIOD = COMET_LEN + COMET_GAP

function pathLength(path) {
  try {
    return path.getTotalLength?.() || 240
  } catch {
    return 240
  }
}

export default function HeroHubLineFlow({
  coords = HUB_SVG,
  flowFilterId = 'hubFlowGlow',
  packetFilterId = 'hubPacketGlow',
}) {
  const flowRef = useRef(null)
  const packetRef = useRef(null)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotion.matches) {
      return undefined
    }

    const flowPaths = [...(flowRef.current?.querySelectorAll('.hero__hub-line--flow') || [])]
    const packetPaths = [...(packetRef.current?.querySelectorAll('.hero__hub-line--flow-packet') || [])]
    if (!flowPaths.length) return undefined

    const flowMeta = flowPaths.map((path, i) => {
      const spokeMatch = path.getAttribute('class')?.match(/flow-(\w+)/)
      const spoke = spokeMatch?.[1] || ''
      const len = pathLength(path)
      path.style.strokeDasharray = `1 ${TRAIL_LEN - 1} ${TRAIL_HEAD} ${TRAIL_GAP}`
      path.dataset.spoke = spoke
      return {
        path,
        spoke,
        phase: i * 0.18,
        speed: 0.11 + (i % 4) * 0.025,
        len,
      }
    })

    const packetMeta = packetPaths.map((path, i) => {
      const spokeMatch = path.getAttribute('class')?.match(/flow-(\w+)/)
      const spoke = spokeMatch?.[1] || ''
      const len = pathLength(path)
      path.style.strokeDasharray = `${COMET_LEN} ${COMET_GAP}`
      path.dataset.spoke = spoke
      return {
        path,
        spoke,
        phase: i * 0.22 + 0.4,
        speed: 0.16 + (i % 3) * 0.03,
        len,
      }
    })

    const mobileLayout = window.matchMedia('(max-width: 768px)')
    const start = performance.now()
    let frame = 0
    let inView = true

    const shouldAnimate = () => inView && !document.hidden

    const tick = (now) => {
      if (!shouldAnimate()) {
        frame = requestAnimationFrame(tick)
        return
      }

      const elapsed = (now - start) / 1000
      const ecosystem = flowRef.current?.closest('.hero__ecosystem')
      const activeSpoke = ecosystem?.dataset.activeSpoke || ''
      const ambient = !activeSpoke
      const mobileScale = mobileLayout.matches ? 0.82 : 1

      flowMeta.forEach((item) => {
        const spokeBoost = activeSpoke === item.spoke ? 1.65 : activeSpoke ? 0.72 : ambient ? 1.08 : 1
        const speed = item.speed * spokeBoost * mobileScale * 60
        const progress = (elapsed * speed + item.phase) % TRAIL_PERIOD
        const offset = -(progress / TRAIL_PERIOD) * item.len
        item.path.style.strokeDashoffset = `${offset}`
        item.path.style.opacity = String(activeSpoke === item.spoke ? 0.95 : activeSpoke ? 0.42 : 0.72)
      })

      packetMeta.forEach((item) => {
        const spokeBoost = activeSpoke === item.spoke ? 1.9 : activeSpoke ? 0.68 : ambient ? 1.12 : 1
        const speed = item.speed * spokeBoost * mobileScale * 60
        const progress = (elapsed * speed + item.phase) % COMET_PERIOD
        const offset = -(progress / COMET_PERIOD) * item.len
        item.path.style.strokeDashoffset = `${offset}`
        item.path.style.opacity = String(activeSpoke === item.spoke ? 1 : activeSpoke ? 0.38 : 0.88)
      })

      frame = requestAnimationFrame(tick)
    }

    const observer = flowRef.current
      ? new IntersectionObserver(
          ([entry]) => {
            inView = entry.isIntersecting
          },
          { rootMargin: '80px 0px', threshold: 0 },
        )
      : null

    if (observer && flowRef.current) {
      observer.observe(flowRef.current)
    }

    frame = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(frame)
      observer?.disconnect()
    }
  }, [])

  return (
    <>
      <g ref={flowRef} className="hero__hub-lines-flow" filter={`url(#${flowFilterId})`}>
        {HUB_ALL_LINES.map(([from, to]) => (
          <path
            key={`flow-${from}-${to}`}
            d={hubSvgPath(from, to, coords)}
            className={`hero__hub-line hero__hub-line--flow hero__hub-line--flow-${from}`}
            fill="none"
          />
        ))}
      </g>
      <g ref={packetRef} className="hero__hub-lines-packets" filter={`url(#${packetFilterId})`}>
        {HUB_ALL_LINES.map(([from, to]) => (
          <path
            key={`packet-${from}-${to}`}
            d={hubSvgPath(from, to, coords)}
            className={`hero__hub-line hero__hub-line--flow-packet hero__hub-line--flow-${from}`}
            fill="none"
          />
        ))}
      </g>
    </>
  )
}