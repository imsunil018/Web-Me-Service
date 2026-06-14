import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

function buildNetwork(width, height) {
  const nodes = [
    { id: 'center', x: width * 0.5, y: height * 0.34, hub: true, phase: 0 },
    { id: 'tl', x: width * 0.19, y: height * 0.19, phase: 0.6 },
    { id: 'tr', x: width * 0.81, y: height * 0.19, phase: 1.8 },
    { id: 'bl', x: width * 0.21, y: height * 0.48, phase: 2.4 },
    { id: 'br', x: width * 0.79, y: height * 0.48, phase: 3.2 },
    { id: 'd1', x: width * 0.12, y: height * 0.74, phase: 1.1 },
    { id: 'd2', x: width * 0.32, y: height * 0.82, phase: 2.7 },
    { id: 'd3', x: width * 0.5, y: height * 0.78, phase: 0.4 },
    { id: 'd4', x: width * 0.68, y: height * 0.82, phase: 1.9 },
    { id: 'd5', x: width * 0.88, y: height * 0.74, phase: 3.6 },
  ]

  const byId = Object.fromEntries(nodes.map((node) => [node.id, node]))

  const edgeDefs = [
    ['center', 'tl', true],
    ['center', 'tr', true],
    ['center', 'bl', true],
    ['center', 'br', true],
    ['tl', 'tr', false],
    ['bl', 'br', false],
    ['bl', 'd1', false],
    ['d1', 'd2', false],
    ['d2', 'd3', false],
    ['d3', 'd4', false],
    ['d4', 'd5', false],
    ['d5', 'br', false],
    ['d2', 'bl', false],
    ['d4', 'br', false],
  ]

  const edges = edgeDefs.map(([fromId, toId, primary], index) => ({
    from: byId[fromId],
    to: byId[toId],
    primary,
    packets: [
      {
        progress: (index * 0.17) % 1,
        speed: primary ? 0.09 + (index % 2) * 0.02 : 0.06 + (index % 3) * 0.015,
        offset: 0,
      },
      ...(primary
        ? [
            {
              progress: (index * 0.31 + 0.45) % 1,
              speed: 0.07,
              offset: 0.5,
            },
          ]
        : []),
    ],
  }))

  return { nodes, edges }
}

function drawNode(ctx, x, y, { palette, hub, pulse, alpha }) {
  const glowR = hub ? 10 : 6.5
  const dotR = hub ? 2.4 : 1.7
  const coreR = hub ? 0.9 : 0.65

  ctx.beginPath()
  ctx.arc(x, y, glowR * pulse, 0, Math.PI * 2)
  ctx.fillStyle = palette.nodeGlow
  ctx.globalAlpha = alpha * (hub ? 0.38 : 0.24)
  ctx.fill()

  ctx.beginPath()
  ctx.arc(x, y, dotR, 0, Math.PI * 2)
  ctx.fillStyle = palette.node
  ctx.globalAlpha = alpha * 0.68
  ctx.fill()

  ctx.beginPath()
  ctx.arc(x, y, coreR, 0, Math.PI * 2)
  ctx.fillStyle = palette.nodeCore
  ctx.globalAlpha = alpha
  ctx.fill()

  ctx.globalAlpha = 1
}

export default function ShowcaseNetworkCanvas({ className = '' }) {
  const canvasRef = useRef(null)
  const { isDark } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const ctx = canvas.getContext('2d')
    if (!ctx) return undefined

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let animationId = 0
    let network = null
    let lastTime = 0
    let running = true
    let visible = true

    const palette = isDark
      ? {
          grid: 'rgba(52, 211, 153, 0.028)',
          edgePrimary: 'rgba(110, 231, 183, 0.12)',
          edgeSecondary: 'rgba(52, 211, 153, 0.05)',
          packet: 'rgba(167, 243, 208, 0.75)',
          packetGlow: 'rgba(167, 243, 208, 0.28)',
          packetTrail: 'rgba(110, 231, 183, 0.14)',
          node: 'rgba(74, 222, 154, 0.7)',
          nodeCore: 'rgba(236, 253, 245, 0.65)',
          nodeGlow: 'rgba(52, 211, 153, 0.2)',
          hubRing: 'rgba(110, 231, 183, 0.08)',
        }
      : {
          grid: 'rgba(4, 120, 87, 0.035)',
          edgePrimary: 'rgba(5, 150, 105, 0.14)',
          edgeSecondary: 'rgba(4, 120, 87, 0.06)',
          packet: 'rgba(5, 150, 105, 0.7)',
          packetGlow: 'rgba(5, 150, 105, 0.22)',
          packetTrail: 'rgba(16, 185, 129, 0.12)',
          node: 'rgba(5, 150, 105, 0.55)',
          nodeCore: 'rgba(255, 255, 255, 0.7)',
          nodeGlow: 'rgba(5, 150, 105, 0.16)',
          hubRing: 'rgba(5, 150, 105, 0.09)',
        }

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return

      const rect = parent.getBoundingClientRect()
      if (rect.width < 2 || rect.height < 2) return

      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(rect.width * dpr)
      canvas.height = Math.floor(rect.height * dpr)
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      network = buildNetwork(rect.width, rect.height)
      lastTime = 0
    }

    const drawGrid = (width, height) => {
      const spacing = 30
      ctx.fillStyle = palette.grid

      for (let x = spacing; x < width; x += spacing) {
        for (let y = spacing; y < height; y += spacing) {
          ctx.beginPath()
          ctx.arc(x, y, 0.45, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    const drawHubRings = (center, elapsed) => {
      ;[44, 64, 84].forEach((radius, index) => {
        const pulse = 0.94 + Math.sin(elapsed * 0.7 + index * 0.8) * 0.05
        ctx.beginPath()
        ctx.arc(center.x, center.y, radius * pulse, 0, Math.PI * 2)
        ctx.strokeStyle = palette.hubRing
        ctx.lineWidth = 0.8
        ctx.globalAlpha = 0.22 - index * 0.05
        ctx.stroke()
      })
      ctx.globalAlpha = 1
    }

    const startLoop = () => {
      if (!running || animationId || !visible) return
      animationId = requestAnimationFrame(draw)
    }

    const stopLoop = () => {
      cancelAnimationFrame(animationId)
      animationId = 0
    }

    const draw = (time) => {
      if (!running) return
      animationId = 0

      if (!visible) return

      if (!reducedMotion) {
        animationId = requestAnimationFrame(draw)
      }

      if (!network?.nodes?.length) {
        resize()
        return
      }

      if (!lastTime) lastTime = time
      const dt = Math.min((time - lastTime) / 1000, 0.05)
      lastTime = time
      const elapsed = time * 0.001

      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const width = canvas.width / dpr
      const height = canvas.height / dpr

      ctx.clearRect(0, 0, width, height)
      drawGrid(width, height)

      const center = network.nodes.find((node) => node.hub)
      if (center) drawHubRings(center, elapsed)

      network.edges.forEach((edge) => {
        const { from, to, primary, packets } = edge
        if (!from || !to) return

        ctx.beginPath()
        ctx.moveTo(from.x, from.y)
        ctx.lineTo(to.x, to.y)
        ctx.strokeStyle = primary ? palette.edgePrimary : palette.edgeSecondary
        ctx.lineWidth = primary ? 0.9 : 0.55
        ctx.globalAlpha = primary ? 0.55 : 0.3
        ctx.stroke()
        ctx.globalAlpha = 1

        packets.forEach((packet) => {
          packet.progress += packet.speed * dt
          if (packet.progress > 1) packet.progress -= 1

          const px = from.x + (to.x - from.x) * packet.progress
          const py = from.y + (to.y - from.y) * packet.progress
          const trailStart = Math.max(0, packet.progress - 0.1)

          ctx.beginPath()
          ctx.moveTo(
            from.x + (to.x - from.x) * trailStart,
            from.y + (to.y - from.y) * trailStart,
          )
          ctx.lineTo(px, py)
          ctx.strokeStyle = palette.packetTrail
          ctx.lineWidth = primary ? 1.4 : 0.9
          ctx.lineCap = 'round'
          ctx.globalAlpha = primary ? 0.42 : 0.24
          ctx.stroke()

          ctx.beginPath()
          ctx.arc(px, py, primary ? 2.8 : 2, 0, Math.PI * 2)
          ctx.fillStyle = palette.packetGlow
          ctx.globalAlpha = 0.45
          ctx.fill()

          ctx.beginPath()
          ctx.arc(px, py, primary ? 1.2 : 0.9, 0, Math.PI * 2)
          ctx.fillStyle = palette.packet
          ctx.globalAlpha = 1
          ctx.fill()
        })
      })

      network.nodes.forEach((node) => {
        const pulse = node.hub
          ? 0.94 + Math.sin(elapsed * 1.1) * 0.06
          : 0.9 + Math.sin(elapsed * 0.7 + node.phase) * 0.08
        const alpha = node.hub ? 0.75 : 0.45 + Math.sin(elapsed * 0.6 + node.phase) * 0.12

        drawNode(ctx, node.x, node.y, { palette, hub: node.hub, pulse, alpha })
      })
    }

    resize()
    if (reducedMotion) {
      draw(performance.now())
    } else {
      startLoop()
    }

    const resizeObserver = new ResizeObserver(() => resize())
    resizeObserver.observe(canvas.parentElement)

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        if (visible) startLoop()
        else stopLoop()
      },
      { threshold: 0, rootMargin: '120px' },
    )
    visibilityObserver.observe(canvas)

    return () => {
      running = false
      stopLoop()
      resizeObserver.disconnect()
      visibilityObserver.disconnect()
    }
  }, [isDark])

  return (
    <canvas
      ref={canvasRef}
      className={className ? `showcase-network-canvas ${className}` : 'showcase-network-canvas'}
      aria-hidden="true"
    />
  )
}