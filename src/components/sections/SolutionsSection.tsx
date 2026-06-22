import { motion } from 'framer-motion'
import { AnimatedSection } from '../common/AnimatedSection'
import { solutions } from '../../data/siteContent'

export function SolutionsSection() {
  return (
    <AnimatedSection className="py-24 lg:py-36">
      <div className="mx-auto mb-16 max-w-[1220px] px-4 text-center md:px-8 lg:px-12">
        <p className="mb-7 text-xs font-semibold tracking-[0.18em] text-[#06112b]/45 uppercase">
          Solutions
        </p>
        <h2 className="text-[clamp(3rem,8vw,9rem)] leading-[0.9] font-extrabold tracking-[-0.09em] text-[#06112b]">
          Technology solutions built for scale, reliability, and growth.
        </h2>
      </div>

      <div className="grid gap-5 px-4 md:px-8 lg:px-12">
        {solutions.map((solution, index) => (
          <motion.a
            className="group relative mx-auto grid min-h-[78vh] w-full max-w-[1500px] overflow-hidden rounded-[2rem] bg-[#06112b] text-white shadow-[0_40px_120px_rgba(7,20,47,0.14)] md:rounded-[3rem]"
            href="/solutions"
            key={solution.title}
            initial={{ opacity: 0, y: 70, clipPath: 'inset(16% 0% 0% 0%)' }}
            whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0% 0% 0% 0%)' }}
            viewport={{ once: true, amount: 0.28 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              className="absolute inset-0 h-full w-full object-cover opacity-55 transition duration-700 group-hover:scale-105 group-hover:opacity-65"
              src={solution.image}
              alt=""
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,17,43,0.14)_0%,rgba(6,17,43,0.78)_100%)]" />
            <div className="relative z-10 flex min-h-[78vh] flex-col justify-between p-6 md:p-10 lg:p-14">
              <div className="flex items-center justify-between gap-6 text-xs font-semibold tracking-[0.16em] text-white/65 uppercase">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span>Know more</span>
              </div>

              <div className="mx-auto max-w-5xl text-center">
                <h3 className="text-[clamp(3.6rem,11vw,13rem)] leading-[0.82] font-extrabold tracking-[-0.105em] text-balance">
                  {solution.title}
                </h3>
              </div>

              <div className="grid gap-8 border-t border-white/25 pt-7 md:grid-cols-[0.8fr_1.2fr] md:items-end">
                <p className="max-w-xl text-[clamp(1rem,1.5vw,1.3rem)] leading-[1.55] font-semibold text-white">
                  {solution.description}
                </p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-4">
                  {solution.metrics.map(([label, value]) => (
                    <div key={`${solution.title}-${label}`}>
                      <span className="block text-[0.68rem] font-semibold tracking-[0.14em] text-white/50 uppercase">
                        {label}
                      </span>
                      <strong className="mt-2 block text-sm font-extrabold text-white">{value}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </AnimatedSection>
  )
}
