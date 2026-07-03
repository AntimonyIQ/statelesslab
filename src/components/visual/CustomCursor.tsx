import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const x = useSpring(cursorX, { stiffness: 520, damping: 42, mass: 0.5 })
  const y = useSpring(cursorY, { stiffness: 520, damping: 42, mass: 0.5 })
  const [variant, setVariant] = useState<'default' | 'action'>('default')
  const [label, setLabel] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const canUseFinePointer = window.matchMedia('(pointer: fine)').matches
    if (!canUseFinePointer) {
      return
    }

    const onPointerMove = (event: PointerEvent) => {
      cursorX.set(event.clientX)
      cursorY.set(event.clientY)
      setIsVisible(true)

      const target = event.target as HTMLElement | null
      const interactive = target?.closest('a, button, [data-cursor]') as HTMLElement | null
      const nextLabel = interactive?.dataset.cursor ?? ''

      setVariant(interactive ? 'action' : 'default')
      setLabel(nextLabel)
    }

    const onPointerLeave = () => setIsVisible(false)
    const onPointerEnter = () => setIsVisible(true)

    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerleave', onPointerLeave)
    window.addEventListener('pointerenter', onPointerEnter)

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerleave', onPointerLeave)
      window.removeEventListener('pointerenter', onPointerEnter)
    }
  }, [cursorX, cursorY])

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[100] hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full mix-blend-difference md:flex"
      style={{ x, y }}
      animate={{
        width: variant === 'action' ? 92 : 18,
        height: variant === 'action' ? 92 : 18,
        opacity: isVisible ? 1 : 0,
        backgroundColor: variant === 'action' ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.98)',
      }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
    >
      {label ? (
        <span className="text-[0.58rem] font-extrabold tracking-[0.16em] text-black uppercase">
          {label}
        </span>
      ) : null}
    </motion.div>
  )
}
