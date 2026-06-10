import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

function createGrid(width, height) {
  const cols = Math.max(10, Math.min(16, Math.floor(width / 88)))
  const rows = Math.max(8, Math.min(14, Math.floor(height / 72)))
  const padX = width * 0.05
  const padY = height * 0.05
  const cellW = (width - padX * 2) / (cols - 1)
  const cellH = (height - padY * 2) / (rows - 1)
  const nodes = []

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      nodes.push({
        baseX: padX + col * cellW,
        baseY: padY + row * cellH,
        x: padX + col * cellW,
        y: padY + row * cellH,
        col,
        row,
        phase: Math.random() * Math.PI * 2,
        speed: 0.003 + Math.random() * 0.004,
        drift: Math.min(cellW, cellH) * 0.08,
        radius: 1.4,
        id: row * cols + col,
      })
    }
  }

  return { nodes, cols, rows, cellW, cellH, padX, padY }
}

function createConnections(nodes, cols, rows) {
  const links = []
  const at = (r, c) => nodes[r * cols + c]

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const node = at(row, col)
      if (!node) continue
      if (col < cols - 1) links.push({ from: node.id, to: at(row, col + 1).id, type: 'h' })
      if (row < rows - 1) links.push({ from: node.id, to: at(row + 1, col).id, type: 'v' })
    }
  }

  return links
}

function createRunners(links) {
  const all = [...links]
  const count = Math.min(8, Math.max(5, Math.floor(all.length * 0.05)))
  const step = Math.max(1, Math.floor(all.length / count))

  return Array.from({ length: count }, (_, i) => ({
    ...all[i * step],
    progress: i / count,
    speed: 0.00004 + (i % 2) * 0.00002,
  }))
}

export default function BlockchainCanvas() {
  const canvasRef = useRef(null)
  const { isDark } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId
    let grid = null
    let nodes = []
    let links = []
    let runners = []
    let lastTime = 0

    const colors = isDark
      ? {
          box: 'rgba(52, 211, 153, 0.04)',
          lineH: 'rgba(52, 211, 153, 0.22)',
          lineV: 'rgba(52, 211, 153, 0.16)',
          dot: 'rgba(52, 211, 153, 0.75)',
          dotGlow: 'rgba(16, 185, 129, 0.12)',
          runner: 'rgba(110, 231, 183, 0.55)',
        }
      : {
          box: 'rgba(5, 150, 105, 0.05)',
          lineH: 'rgba(5, 150, 105, 0.18)',
          lineV: 'rgba(5, 150, 105, 0.13)',
          dot: 'rgba(5, 150, 105, 0.7)',
          dotGlow: 'rgba(16, 185, 129, 0.1)',
          runner: 'rgba(5, 150, 105, 0.5)',
        }

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      grid = createGrid(rect.width, rect.height)
      nodes = grid.nodes
      links = createConnections(nodes, grid.cols, grid.rows)
      runners = createRunners(links)
      lastTime = 0
    }

    const drawBoxes = () => {
      if (!grid) return
      const { cols, rows, cellW, cellH, padX, padY } = grid

      ctx.strokeStyle = colors.box
      ctx.lineWidth = 0.5

      for (let row = 0; row < rows - 1; row++) {
        for (let col = 0; col < cols - 1; col++) {
          const x = padX + col * cellW - cellW / 2
          const y = padY + row * cellH - cellH / 2
          ctx.strokeRect(x, y, cellW, cellH)
        }
      }
    }

    const draw = (time) => {
      animationId = requestAnimationFrame(draw)

      if (!lastTime) {
        lastTime = time
        return
      }

      const dt = Math.min((time - lastTime) / 1000, 0.032)
      lastTime = time
      const elapsed = time * 0.001

      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = canvas.width / dpr
      const h = canvas.height / dpr

      ctx.clearRect(0, 0, w, h)

      drawBoxes()

      nodes.forEach((node) => {
        const t = elapsed * node.speed + node.phase
        node.x = node.baseX + Math.sin(t) * node.drift
        node.y = node.baseY + Math.cos(t * 0.9) * node.drift
      })

      links.forEach((link) => {
        const a = nodes[link.from]
        const b = nodes[link.to]
        if (!a || !b) return

        ctx.beginPath()
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.strokeStyle = link.type === 'h' ? colors.lineH : colors.lineV
        ctx.lineWidth = 0.75
        ctx.stroke()
      })

      runners.forEach((r) => {
        const from = nodes[r.from]
        const to = nodes[r.to]
        if (!from || !to) return

        r.progress += r.speed * dt
        if (r.progress > 1) r.progress -= 1

        const x = from.x + (to.x - from.x) * r.progress
        const y = from.y + (to.y - from.y) * r.progress

        ctx.beginPath()
        ctx.arc(x, y, 1.2, 0, Math.PI * 2)
        ctx.fillStyle = colors.runner
        ctx.fill()
      })

      nodes.forEach((node) => {
        const glow = 0.94 + Math.sin(elapsed * 0.025 + node.phase) * 0.06

        ctx.beginPath()
        ctx.arc(node.x, node.y, 2.8 * glow, 0, Math.PI * 2)
        ctx.fillStyle = colors.dotGlow
        ctx.fill()

        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.globalAlpha = 0.7 * glow
        ctx.fillStyle = colors.dot
        ctx.fill()
        ctx.globalAlpha = 1
      })
    }

    resize()
    animationId = requestAnimationFrame(draw)

    const observer = new ResizeObserver(resize)
    observer.observe(canvas.parentElement)

    return () => {
      cancelAnimationFrame(animationId)
      observer.disconnect()
    }
  }, [isDark])

  return <canvas ref={canvasRef} className="blockchain-canvas" aria-hidden="true" />
}