import { motion } from 'framer-motion'
import { AnimatedSection } from '../common/AnimatedSection'
import { images, processSteps } from '../../data/siteContent'

export function ApproachSection() {
  return (
    <AnimatedSection
      className="mx-auto w-[min(1180px,calc(100vw-32px))] py-[78px] md:w-[min(1180px,calc(100vw-48px))] lg:py-[clamp(86px,12vw,150px)]"
    >
      <div className="mb-[54px] max-w-[820px]">
        <span className="inline-flex items-center gap-2.5 text-xs font-extrabold tracking-[0.14em] text-[#102f68] uppercase before:h-px before:w-[34px] before:bg-current before:content-['']">
          Our approach
        </span>
        <h2 className="mt-[18px] text-[clamp(2.55rem,14vw,4rem)] leading-[0.92] font-extrabold tracking-[-0.075em] text-[#06112b] sm:text-[clamp(2.65rem,6vw,6.9rem)]">
          From idea to infrastructure, we build with clarity and discipline.
        </h2>
      </div>
      <div className="grid grid-cols-1 items-center gap-9 lg:grid-cols-[minmax(320px,0.92fr)_minmax(0,1.08fr)] lg:gap-[clamp(36px,6vw,86px)]">
        <div className="relative h-[330px] overflow-hidden rounded-[26px] bg-[#ece8df] shadow-[0_28px_80px_rgba(7,20,47,0.12)] after:absolute after:inset-0 after:bg-[linear-gradient(180deg,rgba(6,17,43,0)_30%,rgba(6,17,43,0.24)_100%)] after:content-[''] md:h-[460px] md:rounded-[34px] lg:h-[640px]">
          <img
            className="h-full w-full object-cover"
            src={images.process}
            alt="Engineering team designing technology systems"
          />
        </div>
        <div className="border-t border-[#07142f]/15">
          {processSteps.map((step, index) => (
            <motion.article
              className="grid grid-cols-1 gap-3 border-b border-[#07142f]/15 py-8 md:grid-cols-[90px_1fr] md:gap-6"
              key={step.title}
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ delay: index * 0.1, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="text-[0.78rem] font-extrabold tracking-[0.13em] text-[#102f68]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="m-0 text-[clamp(1.45rem,2.3vw,2.35rem)] font-extrabold tracking-[-0.055em] text-[#06112b]">
                  {step.title}
                </h3>
                <p className="mt-3.5 max-w-[520px] leading-[1.75] text-[#667085]">
                  {step.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
