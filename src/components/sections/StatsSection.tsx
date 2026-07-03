import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { stats } from '../../data/siteContent'

type CounterProps = {
  value: number
  suffix: string
}

function Counter({ value, suffix }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) {
      return
    }

    let frameId = 0
    const duration = 1400
    const startedAt = performance.now()

    const tick = (currentTime: number) => {
      const progress = Math.min((currentTime - startedAt) / duration, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3)
      setCount(value * easedProgress)

      if (progress < 1) {
        frameId = requestAnimationFrame(tick)
      }
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [isInView, value])

  const formatted = Number.isInteger(value) ? Math.round(count).toString() : count.toFixed(1)

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section
      className="mx-auto grid max-w-[1220px] grid-cols-1 gap-12 px-4 py-10 backdrop-blur-[1px] md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12 lg:py-24"
      aria-label="Company metrics"
    >
      <motion.p
        className="text-[clamp(1.4rem,2.4vw,2.6rem)] leading-[1.15] font-semibold tracking-[-0.055em] text-[#06112b]"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        Founded in 2026, Stateless Technology operates across core technology domains from product
        engineering and cloud systems to fintech infrastructure and business automation.
      </motion.p>
      <div className="grid grid-cols-1 border-t border-[#06112b]/15 md:grid-cols-2">
        {stats.map((stat, index) => (
          <motion.div
            className="min-h-[190px] border-b border-[#06112b]/15 py-8 md:border-r md:px-8 md:nth-even:border-r-0"
            key={stat.label}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.08, duration: 0.7, ease: 'easeOut' }}
          >
            <strong className="block text-[clamp(3.4rem,7vw,6.8rem)] leading-[0.85] font-extrabold tracking-[-0.09em] text-[#06112b]">
              <Counter value={stat.value} suffix={stat.suffix} />
            </strong>
            <span className="mt-7 block max-w-[220px] text-[0.9rem] leading-[1.45] font-bold text-[#667085]">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
