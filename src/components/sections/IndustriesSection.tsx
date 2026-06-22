import { motion } from 'framer-motion'
import { AnimatedSection } from '../common/AnimatedSection'
import { industries } from '../../data/siteContent'

export function IndustriesSection() {
  return (
    <AnimatedSection
      className="relative overflow-hidden px-4 py-24 md:px-8 lg:px-12 lg:py-36"
    >
      <div className="pointer-events-none absolute inset-x-[-20%] top-16 h-[500px] opacity-60">
        <div className="absolute inset-0 rounded-[50%] border border-[#06112b]/10" />
        <div className="absolute inset-x-20 top-16 h-[420px] rounded-[50%] border border-[#06112b]/10" />
        <div className="absolute inset-x-40 top-32 h-[340px] rounded-[50%] border border-[#06112b]/10" />
      </div>
      <div className="relative mx-auto max-w-[1500px]">
        <div className="mb-[54px] grid grid-cols-1 items-start gap-[18px] lg:grid-cols-[0.42fr_1fr] lg:gap-[42px]">
        <span className="text-xs font-semibold tracking-[0.18em] text-[#06112b]/45 uppercase">
          Industries
        </span>
        <h2 className="text-[clamp(3rem,8vw,9rem)] leading-[0.9] font-extrabold tracking-[-0.09em] text-[#06112b]">
          Helping modern businesses operate with better technology.
        </h2>
      </div>
      <div className="grid grid-cols-1 border-t border-l border-[#07142f]/15 md:grid-cols-2 lg:grid-cols-4">
        {industries.map((industry, index) => (
          <motion.div
            className="flex min-h-32 flex-col justify-between border-r border-b border-[#07142f]/15 p-6 text-[clamp(1.12rem,1.8vw,1.75rem)] leading-tight font-extrabold tracking-[-0.045em] text-[#06112b] md:min-h-[168px]"
            key={industry}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: index * 0.05, duration: 0.65, ease: 'easeOut' }}
          >
            <span className="text-[0.72rem] tracking-[0.12em] text-[#667085]">
              {String(index + 1).padStart(2, '0')}
            </span>
            {industry}
          </motion.div>
        ))}
      </div>
      </div>
    </AnimatedSection>
  )
}
