import { type ReactNode } from 'react'
import { motion } from 'framer-motion'

type AnimatedSectionProps = {
  children: ReactNode
  className?: string
  id?: string
}

export function AnimatedSection({ children, className, id }: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 56 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  )
}
