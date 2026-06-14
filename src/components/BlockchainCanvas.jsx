import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

function createCells(width, height, { subtle = false, quiet = false } = {}) {
  const colDiv = subtle ? 68 : quiet ? 96 : 72
  const rowDiv = subtle ? 58 : quiet ? 84 : 64
  const minCols = subtle ? 5 : quiet ? 9 : 14
  const maxCols = subtle ? 9 : quiet ? 18 : 28
  const minRows = subtle ? 4 : quiet ? 5 : 8
  const maxRows = subtle ? 6 : quiet ? 10 : 16

  const cols = Math.max(minCols, Math.min(maxCols, Math.floor(width / colDiv)))
  const rows = Math.max(minRows, Math.min(maxRows, Math.floor(height / rowDiv)))
  const padX = subtle ? width * 0.02 : 0
  const padY = subtle ? height * 0.025 : 0
  const gridW = width - padX * 2
  const gridH = height - padY * 2
  const cellW = gridW / cols
  const cellH = gridH / rows
  const cells = []

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = padX + col * cellW
      const y = padY + row * cellH
      const cx = x + cellW / 2
      const cy = y + cellH / 2
      const pad = Math.min(cellW, cellH) * 0.14

      cells.push({
        x,
        y,
        w: cellW,
        h: cellH,
        cx,
        cy,
        roamX: Math.max(4, cellW / 2 - pad),
        roamY: Math.max(4, cellH / 2 - pad),
        phaseX: Math.random() * Math.PI * 2,
        phaseY: Math.random() * Math.PI * 2,
        speedX: 0.28 + Math.random() * 0.2,
        speedY: 0.24 + Math.random() * 0.18,
      })
    }
  }

  return { cells, cols, rows, padX, padY, gridW, gridH, cellW, cellH }
}

function createFloatingParticles(width, height, count = 100) {
  const particles = []

  for (let i = 0; i < count; i += 1) {
    const size = 2 + Math.random() * 6
    const blurred = Math.random() < 0.34
    const scale = size / 4.5

    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      blurred,
      glowR: (blurred ? 5.8 : 4.5) * scale,
      dotR: (blurred ? 1.7 : 2.1) * scale,
      coreR: (blurred ? 0.65 : 0.9) * scale,
      roamX: 8 + Math.random() * 22,
      roamY: 6 + Math.random() * 18,
      phaseX: Math.random() * Math.PI * 2,
      phaseY: Math.random() * Math.PI * 2,
      speedX: 0.14 + Math.random() * 0.18,
      speedY: 0.12 + Math.random() * 0.16,
      driftX: (Math.random() - 0.5) * 0.01,
      driftY: (Math.random() - 0.5) * 0.008,
      twinkle: 0.6 + Math.random() * 0.5,
      alpha: 0.55 + Math.random() * 0.45,
    })
  }

  return particles
}

function createMeshConnections(cells, cols, rows, { quiet = false } = {}) {
  const connections = []

  for (let i = 0; i < cells.length; i += 1) {
    const col = i % cols
    const row = Math.floor(i / cols)

    if (col < cols - 1) {
      connections.push({ a: i, b: i + 1, phase: Math.random() * Math.PI * 2 })
    }

    if (row < rows - 1) {
      connections.push({ a: i, b: i + cols, phase: Math.random() * Math.PI * 2 })
    }

    if (quiet && col < cols - 1 && row < rows - 1 && (col + row) % 3 === 0) {
      connections.push({ a: i, b: i + cols + 1, phase: Math.random() * Math.PI * 2 })
    }
  }

  return connections
}

function createSignalPulses(connections, count = 6) {
  if (!connections.length) return []

  return Array.from({ length: Math.min(count, connections.length) }, (_, i) => ({
    connectionIndex: (i * 11 + 3) % connections.length,
    progress: i / count,
    speed: 0.045 + (i % 3) * 0.018,
    forward: i % 2 === 0,
  }))
}

function createAmbientParticles(width, height, count = 28) {
  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: 1.2 + Math.random() * 2.4,
    alpha: 0.18 + Math.random() * 0.32,
    phase: Math.random() * Math.PI * 2,
    speed: 0.08 + Math.random() * 0.12,
    driftX: (Math.random() - 0.5) * 0.006,
    driftY: -0.004 - Math.random() * 0.008,
    roam: 12 + Math.random() * 28,
  }))
}

function createEdgeRunners(cells, { subtle = false, quiet = false } = {}) {
  const runners = []
  const edges = ['top', 'right', 'bottom', 'left']
  const pick = subtle
    ? Math.min(5, Math.max(3, Math.floor(cells.length * 0.08)))
    : quiet
      ? Math.min(8, Math.max(5, Math.floor(cells.length * 0.09)))
      : Math.min(10, Math.max(6, Math.floor(cells.length * 0.12)))

  for (let i = 0; i < pick; i++) {
    runners.push({
      cellIndex: (i * 17 + 3) % cells.length,
      edge: edges[i % edges.length],
      progress: i / pick,
      speed: 0.04 + (i % 3) * 0.02,
    })
  }

  return runners
}

function getRunnerPos(cell, edge, progress) {
  const p = progress % 1
  switch (edge) {
    case 'top':
      return { x: cell.x + cell.w * p, y: cell.y }
    case 'right':
      return { x: cell.x + cell.w, y: cell.y + cell.h * p }
    case 'bottom':
      return { x: cell.x + cell.w * (1 - p), y: cell.y + cell.h }
    case 'left':
      return { x: cell.x, y: cell.y + cell.h * (1 - p) }
    default:
      return { x: cell.cx, y: cell.cy }
  }
}

function drawGlowingDot(ctx, x, y, { glowR, dotR, coreR, pulse, alpha, coreAlpha, palette, blurred }) {
  if (blurred) {
    ctx.beginPath()
    ctx.arc(x, y, glowR * 1.4 * pulse, 0, Math.PI * 2)
    ctx.fillStyle = palette.dotGlowSoft
    ctx.globalAlpha = alpha * 0.35
    ctx.fill()
  }

  ctx.beginPath()
  ctx.arc(x, y, glowR * pulse, 0, Math.PI * 2)
  ctx.fillStyle = palette.dotGlow
  ctx.globalAlpha = alpha * (blurred ? 0.7 : 1)
  ctx.fill()

  ctx.beginPath()
  ctx.arc(x, y, dotR, 0, Math.PI * 2)
  ctx.fillStyle = palette.dot
  ctx.globalAlpha = alpha
  ctx.fill()

  ctx.beginPath()
  ctx.arc(x, y, coreR, 0, Math.PI * 2)
  ctx.fillStyle = palette.dotCore
  ctx.globalAlpha = coreAlpha * alpha
  ctx.fill()
  ctx.globalAlpha = 1
}

export default function BlockchainCanvas({ variant = 'hero', className = '' }) {
  const canvasRef = useRef(null)
  const { isDark } = useTheme()
  const subtle = variant === 'hub'
  const quiet = variant === 'hero'
  const showcase = variant === 'showcase'

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const ctx = canvas.getContext('2d')
    if (!ctx) return undefined

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches && showcase) {
      return undefined
    }

    let animationId = 0
    let layout = null
    let floatingParticles = []
    let runners = []
    let connections = []
    let signalPulses = []
    let ambientParticles = []
    let lastTime = 0
    let running = true
    let visible = true

    const palette = isDark
      ? showcase
        ? {
            dot: '#4ade9a',
            dotCore: '#ecfdf5',
            dotGlow: 'rgba(52, 211, 153, 0.38)',
            dotGlowSoft: 'rgba(52, 211, 153, 0.12)',
          }
        : subtle
          ? {
              grid: 'rgba(52, 211, 153, 0.09)',
              fill: 'rgba(16, 185, 129, 0.018)',
              dot: '#4ade9a',
              dotCore: '#ecfdf5',
              dotGlow: 'rgba(52, 211, 153, 0.28)',
              runner: '#6ee7b7',
              runnerGlow: 'rgba(110, 231, 183, 0.22)',
            }
          : quiet
            ? {
                grid: 'rgba(255, 255, 255, 0.03)',
                fill: 'rgba(255, 255, 255, 0.005)',
                line: 'rgba(110, 231, 183, 0.12)',
                linePulse: 'rgba(167, 243, 208, 0.38)',
                dot: '#4ade9a',
                dotCore: '#ecfdf5',
                dotGlow: 'rgba(52, 211, 153, 0.22)',
                dotGlowSoft: 'rgba(52, 211, 153, 0.07)',
                runner: '#6ee7b7',
                runnerGlow: 'rgba(110, 231, 183, 0.18)',
                ambient: 'rgba(110, 231, 183, 0.5)',
              }
            : {
                grid: 'rgba(52, 211, 153, 0.16)',
                fill: 'rgba(16, 185, 129, 0.03)',
                dot: '#4ade9a',
                dotCore: '#ecfdf5',
                dotGlow: 'rgba(52, 211, 153, 0.45)',
                runner: '#6ee7b7',
                runnerGlow: 'rgba(110, 231, 183, 0.4)',
              }
      : showcase
        ? {
            dot: '#059669',
            dotCore: '#ffffff',
            dotGlow: 'rgba(5, 150, 105, 0.3)',
            dotGlowSoft: 'rgba(5, 150, 105, 0.1)',
          }
        : subtle
          ? {
              grid: 'rgba(4, 120, 87, 0.1)',
              fill: 'rgba(16, 185, 129, 0.028)',
              dot: '#059669',
              dotCore: '#ffffff',
              dotGlow: 'rgba(5, 150, 105, 0.22)',
              runner: '#10b981',
              runnerGlow: 'rgba(16, 185, 129, 0.2)',
            }
          : quiet
            ? {
                grid: 'rgba(4, 120, 87, 0.06)',
                fill: 'rgba(16, 185, 129, 0.01)',
                line: 'rgba(5, 150, 105, 0.14)',
                linePulse: 'rgba(16, 185, 129, 0.34)',
                dot: '#059669',
                dotCore: '#ffffff',
                dotGlow: 'rgba(5, 150, 105, 0.18)',
                dotGlowSoft: 'rgba(5, 150, 105, 0.07)',
                runner: '#10b981',
                runnerGlow: 'rgba(16, 185, 129, 0.15)',
                ambient: 'rgba(5, 150, 105, 0.42)',
              }
            : {
                grid: 'rgba(4, 120, 87, 0.18)',
                fill: 'rgba(16, 185, 129, 0.05)',
                dot: '#059669',
                dotCore: '#ffffff',
                dotGlow: 'rgba(5, 150, 105, 0.38)',
                runner: '#10b981',
                runnerGlow: 'rgba(16, 185, 129, 0.35)',
              }

    const glowR = subtle ? 4.2 : quiet ? 4.5 : 6
    const dotR = subtle ? 1.9 : quiet ? 2.1 : 2.6
    const coreR = subtle ? 0.85 : quiet ? 0.9 : 1.1
    const runnerGlowR = subtle ? 1.8 : quiet ? 1.6 : 2.5
    const runnerR = subtle ? 0.85 : quiet ? 0.9 : 1.1
    const coreAlpha = isDark
      ? showcase
        ? 0.42
        : subtle
          ? 0.4
          : quiet
            ? 0.28
            : 0.55
      : showcase
        ? 0.58
        : subtle
          ? 0.55
          : quiet
            ? 0.38
            : 0.7

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

      if (showcase) {
        const count = Math.min(120, Math.max(80, Math.floor((rect.width * rect.height) / 4200)))
        floatingParticles = createFloatingParticles(rect.width, rect.height, count)
      } else {
        layout = createCells(rect.width, rect.height, { subtle, quiet })
        runners = createEdgeRunners(layout.cells, { subtle, quiet })
        if (quiet) {
          connections = createMeshConnections(layout.cells, layout.cols, layout.rows, { quiet: true })
          signalPulses = createSignalPulses(connections, 7)
          ambientParticles = createAmbientParticles(
            rect.width,
            rect.height,
            Math.min(32, Math.max(18, Math.floor((rect.width * rect.height) / 28000))),
          )
        } else {
          connections = []
          signalPulses = []
          ambientParticles = []
        }
      }
      lastTime = 0
    }

    const drawGrid = () => {
      const { cells, cols, rows, padX, padY, gridW, gridH, cellW, cellH } = layout

      cells.forEach((cell) => {
        ctx.fillStyle = palette.fill
        ctx.fillRect(cell.x + 0.5, cell.y + 0.5, cell.w - 1, cell.h - 1)
      })

      ctx.strokeStyle = palette.grid
      ctx.lineWidth = 1
      ctx.beginPath()
      for (let row = 0; row <= rows; row++) {
        const y = padY + row * cellH
        ctx.moveTo(padX, y)
        ctx.lineTo(padX + gridW, y)
      }
      for (let col = 0; col <= cols; col++) {
        const x = padX + col * cellW
        ctx.moveTo(x, padY)
        ctx.lineTo(x, padY + gridH)
      }
      ctx.stroke()
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

      if (!visible || document.hidden) return

      animationId = requestAnimationFrame(draw)

      if (showcase && !floatingParticles.length) {
        resize()
        return
      }

      if (!showcase && !layout?.cells?.length) {
        resize()
        return
      }

      if (!lastTime) lastTime = time

      const dt = Math.min((time - lastTime) / 1000, 0.05)
      lastTime = time
      const elapsed = time * 0.001

      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = canvas.width / dpr
      const h = canvas.height / dpr

      ctx.clearRect(0, 0, w, h)

      if (showcase) {
        floatingParticles.forEach((particle) => {
          particle.x += particle.driftX * dt * 5
          particle.y += particle.driftY * dt * 5

          const dotX = particle.x + Math.sin(elapsed * particle.speedX + particle.phaseX) * particle.roamX
          const dotY = particle.y + Math.cos(elapsed * particle.speedY + particle.phaseY) * particle.roamY
          const pulse = 0.9 + Math.sin(elapsed * particle.twinkle + particle.phaseX) * 0.1

          if (dotX < -10) particle.x += w * 0.2
          if (dotX > w + 10) particle.x -= w * 0.2
          if (dotY < -10) particle.y += h * 0.15
          if (dotY > h + 10) particle.y -= h * 0.15

          drawGlowingDot(ctx, dotX, dotY, {
            glowR: particle.glowR,
            dotR: particle.dotR,
            coreR: particle.coreR,
            pulse,
            alpha: particle.alpha,
            coreAlpha,
            palette,
            blurred: particle.blurred,
          })
        })
        return
      }

      drawGrid()

      if (quiet && connections.length) {
        connections.forEach((link) => {
          const a = layout.cells[link.a]
          const b = layout.cells[link.b]
          if (!a || !b) return

          const ax = a.cx + Math.sin(elapsed * a.speedX + a.phaseX) * a.roamX * 0.65
          const ay = a.cy + Math.cos(elapsed * a.speedY + a.phaseY) * a.roamY * 0.65
          const bx = b.cx + Math.sin(elapsed * b.speedX + b.phaseX) * b.roamX * 0.65
          const by = b.cy + Math.cos(elapsed * b.speedY + b.phaseY) * b.roamY * 0.65
          const pulse = 0.42 + Math.sin(elapsed * 0.9 + link.phase) * 0.28

          ctx.beginPath()
          ctx.moveTo(ax, ay)
          ctx.lineTo(bx, by)
          ctx.strokeStyle = palette.line || palette.grid
          ctx.globalAlpha = pulse
          ctx.lineWidth = 1
          ctx.stroke()
          ctx.globalAlpha = 1
        })

        signalPulses.forEach((signal) => {
          const link = connections[signal.connectionIndex]
          if (!link) return

          const a = layout.cells[link.a]
          const b = layout.cells[link.b]
          if (!a || !b) return

          signal.progress += signal.speed * dt
          if (signal.progress > 1) signal.progress -= 1

          const t = signal.forward ? signal.progress : 1 - signal.progress
          const ax = a.cx + Math.sin(elapsed * a.speedX + a.phaseX) * a.roamX * 0.65
          const ay = a.cy + Math.cos(elapsed * a.speedY + a.phaseY) * a.roamY * 0.65
          const bx = b.cx + Math.sin(elapsed * b.speedX + b.phaseX) * b.roamX * 0.65
          const by = b.cy + Math.cos(elapsed * b.speedY + b.phaseY) * b.roamY * 0.65
          const px = ax + (bx - ax) * t
          const py = ay + (by - ay) * t
          const fade = Math.sin(t * Math.PI)

          ctx.beginPath()
          ctx.arc(px, py, 2.8, 0, Math.PI * 2)
          ctx.fillStyle = palette.linePulse || palette.runner
          ctx.globalAlpha = fade * 0.85
          ctx.fill()

          ctx.beginPath()
          ctx.arc(px, py, 6.5, 0, Math.PI * 2)
          ctx.fillStyle = palette.runnerGlow
          ctx.globalAlpha = fade * 0.35
          ctx.fill()
          ctx.globalAlpha = 1
        })
      }

      runners.forEach((runner) => {
        const cell = layout.cells[runner.cellIndex]
        if (!cell) return

        runner.progress += runner.speed * dt
        if (runner.progress > 1) runner.progress -= 1

        const pos = getRunnerPos(cell, runner.edge, runner.progress)

        ctx.beginPath()
        ctx.arc(pos.x, pos.y, runnerGlowR, 0, Math.PI * 2)
        ctx.fillStyle = palette.runnerGlow
        ctx.fill()

        ctx.beginPath()
        ctx.arc(pos.x, pos.y, runnerR, 0, Math.PI * 2)
        ctx.fillStyle = palette.runner
        ctx.fill()
      })

      layout.cells.forEach((cell, index) => {
        const dotX = cell.cx + Math.sin(elapsed * cell.speedX + cell.phaseX) * cell.roamX
        const dotY = cell.cy + Math.cos(elapsed * cell.speedY + cell.phaseY) * cell.roamY
        const pulse = 0.92 + Math.sin(elapsed * 0.8 + cell.phaseX) * 0.08
        const depth = quiet ? 0.55 + ((index % 5) / 5) * 0.45 : 1

        drawGlowingDot(ctx, dotX, dotY, {
          glowR,
          dotR,
          coreR,
          pulse,
          alpha: depth,
          coreAlpha,
          palette,
          blurred: quiet && index % 4 === 0,
        })
      })

      if (quiet && ambientParticles.length) {
        ambientParticles.forEach((particle) => {
          particle.x += particle.driftX * dt * 8
          particle.y += particle.driftY * dt * 8

          const px = particle.x + Math.sin(elapsed * particle.speed + particle.phase) * particle.roam
          const py = particle.y + Math.cos(elapsed * particle.speed * 0.85 + particle.phase) * particle.roam * 0.6
          const twinkle = 0.65 + Math.sin(elapsed * 1.4 + particle.phase) * 0.35

          if (px < -12) particle.x += w * 0.12
          if (px > w + 12) particle.x -= w * 0.12
          if (py < -12) particle.y = h + 8
          if (py > h + 12) particle.y = -8

          ctx.beginPath()
          ctx.arc(px, py, particle.size * 2.2, 0, Math.PI * 2)
          ctx.fillStyle = palette.dotGlowSoft || palette.dotGlow
          ctx.globalAlpha = particle.alpha * twinkle * 0.45
          ctx.fill()

          ctx.beginPath()
          ctx.arc(px, py, particle.size, 0, Math.PI * 2)
          ctx.fillStyle = palette.ambient || palette.dot
          ctx.globalAlpha = particle.alpha * twinkle
          ctx.fill()
          ctx.globalAlpha = 1
        })
      }
    }

    resize()
    startLoop()

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
  }, [isDark, subtle, quiet, showcase])

  const variantClass = showcase
    ? ' blockchain-canvas--showcase'
    : subtle
      ? ' blockchain-canvas--hub'
      : ''

  return (
    <canvas
      ref={canvasRef}
      className={`blockchain-canvas${variantClass}${className ? ` ${className}` : ''}`}
      aria-hidden="true"
    />
  )
}