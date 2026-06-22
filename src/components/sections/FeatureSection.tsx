import { motion } from 'framer-motion'
import { AnimatedSection } from '../common/AnimatedSection'
import { images } from '../../data/siteContent'

export function FeatureSection() {
  return (
    <AnimatedSection className="px-4 py-24 md:px-8 lg:px-12 lg:py-36">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(320px,0.95fr)_minmax(0,1.05fr)] lg:gap-20">
        <motion.div
          className="relative h-[420px] overflow-hidden rounded-[2rem] bg-[#ece8df] shadow-[0_28px_80px_rgba(7,20,47,0.12)] after:absolute after:inset-0 after:bg-[linear-gradient(180deg,rgba(6,17,43,0)_30%,rgba(6,17,43,0.24)_100%)] after:content-[''] md:h-[560px] md:rounded-[3rem] lg:h-[720px]"
          whileInView={{ scale: [1.05, 1] }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            className="h-full w-full object-cover"
            src={images.feature}
            alt="Connected cloud infrastructure and server systems"
          />
        </motion.div>
        <div>
          <span className="text-xs font-semibold tracking-[0.18em] text-[#06112b]/45 uppercase">
            Featured capability
          </span>
          <h2 className="mt-6 text-[clamp(3.2rem,7.5vw,9rem)] leading-[0.9] font-extrabold tracking-[-0.09em] text-[#06112b]">
            Digital systems that connect people, platforms, and payments.
          </h2>
          <p className="my-[30px] mb-[34px] max-w-[560px] text-[1.04rem] leading-[1.82] text-[#667085]">
            Stateless Technology builds the invisible layer behind modern business operations — APIs,
            dashboards, automation, infrastructure, and user-facing products that work together smoothly.
          </p>
          <a
            className="group inline-flex items-center gap-3 text-[0.84rem] font-extrabold text-[#06112b]"
            href="/contact"
          >
            Start a conversation
            <span className="h-px w-14 bg-current transition duration-300 group-hover:w-20" />
          </a>
        </div>
      </div>
    </AnimatedSection>
  )
}
