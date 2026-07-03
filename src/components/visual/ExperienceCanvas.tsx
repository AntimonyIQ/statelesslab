import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  baseX: number
  baseY: number
  radius: number
  speed: number
  phase: number
}

const particleCount = 72

export function ExperienceCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      return
    }

    const context = canvas.getContext('2d')
    if (!context) {
      return
    }

    const pointer = {
      x: window.innerWidth * 0.5,
      y: window.innerHeight * 0.5,
      targetX: window.innerWidth * 0.5,
      targetY: window.innerHeight * 0.5,
      active: false,
    }
    const particles: Particle[] = []
    let animationFrame = 0
    let width = 0
    let height = 0
    let pixelRatio = 1

    const createParticles = () => {
      particles.length = 0
      for (let index = 0; index < particleCount; index += 1) {
        const x = Math.random() * width
        const y = Math.random() * height
        particles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          radius: 0.7 + Math.random() * 1.8,
          speed: 0.18 + Math.random() * 0.42,
          phase: Math.random() * Math.PI * 2,
        })
      }
    }

    const resize = () => {
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.floor(width * pixelRatio)
      canvas.height = Math.floor(height * pixelRatio)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
      createParticles()
    }

    const onPointerMove = (event: PointerEvent) => {
      pointer.targetX = event.clientX
      pointer.targetY = event.clientY
      pointer.active = true
    }

    const onPointerLeave = () => {
      pointer.active = false
    }

    const drawWave = (
      time: number,
      yBase: number,
      amplitude: number,
      color: string,
      widthMultiplier: number,
    ) => {
      context.beginPath()
      for (let x = -120; x <= width + 120; x += 18) {
        const pointerPull = pointer.active ? (pointer.x - width * 0.5) * 0.018 : 0
        const y =
          yBase +
          Math.sin(x * 0.006 + time * 0.00045) * amplitude +
          Math.sin(x * 0.014 - time * 0.00028) * amplitude * 0.28 +
          pointerPull

        if (x === -120) {
          context.moveTo(x, y)
        } else {
          context.lineTo(x, y)
        }
      }
      context.strokeStyle = color
      context.lineWidth = widthMultiplier
      context.stroke()
    }

    const render = (time: number) => {
      pointer.x += (pointer.targetX - pointer.x) * 0.08
      pointer.y += (pointer.targetY - pointer.y) * 0.08

      context.clearRect(0, 0, width, height)

      const gradient = context.createRadialGradient(
        pointer.x,
        pointer.y,
        10,
        pointer.x,
        pointer.y,
        Math.max(width, height) * 0.72,
      )
      gradient.addColorStop(0, 'rgba(0, 183, 255, 0.18)')
      gradient.addColorStop(0.35, 'rgba(85, 56, 217, 0.09)')
      gradient.addColorStop(1, 'rgba(244, 241, 233, 0)')
      context.fillStyle = gradient
      context.fillRect(0, 0, width, height)

      drawWave(time, height * 0.26, 28, 'rgba(6, 17, 43, 0.055)', 1)
      drawWave(time, height * 0.42, 42, 'rgba(16, 47, 104, 0.07)', 1.2)
      drawWave(time, height * 0.64, 56, 'rgba(6, 17, 43, 0.05)', 1)

      particles.forEach((particle, index) => {
        const dx = pointer.x - particle.x
        const dy = pointer.y - particle.y
        const distance = Math.hypot(dx, dy)
        const force = pointer.active ? Math.max(0, 1 - distance / 280) : 0
        const driftX = Math.cos(time * 0.00018 * particle.speed + particle.phase) * 24
        const driftY = Math.sin(time * 0.00022 * particle.speed + particle.phase) * 18

        particle.x += particle.baseX + driftX - particle.x - dx * force * 0.05
        particle.y += particle.baseY + driftY - particle.y - dy * force * 0.05

        context.beginPath()
        context.arc(particle.x, particle.y, particle.radius + force * 2.8, 0, Math.PI * 2)
        context.fillStyle = `rgba(6, 17, 43, ${0.12 + force * 0.22})`
        context.fill()

        for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
          const nextParticle = particles[nextIndex]
          const linkDistance = Math.hypot(particle.x - nextParticle.x, particle.y - nextParticle.y)
          if (linkDistance < 118) {
            context.beginPath()
            context.moveTo(particle.x, particle.y)
            context.lineTo(nextParticle.x, nextParticle.y)
            context.strokeStyle = `rgba(6, 17, 43, ${0.055 * (1 - linkDistance / 118)})`
            context.lineWidth = 1
            context.stroke()
          }
        }
      })

      animationFrame = requestAnimationFrame(render)
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerleave', onPointerLeave)
    animationFrame = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerleave', onPointerLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-screen w-screen opacity-90"
      aria-hidden="true"
    />
  )
}
