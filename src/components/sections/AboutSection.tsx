import { motion } from 'framer-motion'
import { AnimatedSection } from '../common/AnimatedSection'

const headline = [
  'A technology company',
  'building reliable digital systems',
  'for ambitious businesses',
]

export function AboutSection() {
  return (
    <AnimatedSection className="px-4 py-24 md:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto max-w-[1450px] text-center">
        <p className="mb-8 text-xs font-semibold tracking-[0.18em] text-[#06112b]/45 uppercase">
          About Stateless Technology
        </p>
        <h2 className="mx-auto max-w-[1220px] text-[clamp(3.2rem,8.6vw,10.5rem)] leading-[0.9] font-extrabold tracking-[-0.09em] text-[#06112b]">
          {headline.map((line, index) => (
            <motion.span
              className="block"
              key={line}
              initial={{ opacity: 0.05, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ delay: index * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {line}
            </motion.span>
          ))}
        </h2>
        <motion.p
          className="mx-auto mt-10 max-w-3xl text-[clamp(1.05rem,1.6vw,1.45rem)] leading-[1.7] text-[#667085]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ delay: 0.28, duration: 0.8, ease: 'easeOut' }}
        >
          Stateless Technology Limited designs and develops software products, cloud infrastructure,
          APIs, automation systems, fintech platforms, and digital tools that help businesses operate
          faster, smarter, and at scale.
        </motion.p>
      </div>
    </AnimatedSection>
  )
}
