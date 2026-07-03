import { motion } from 'framer-motion'
import { images } from '../../data/siteContent'

const heroLines = ['Build', 'beyond', 'borders']

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden px-4 pt-32 pb-10 md:px-8 lg:px-12 lg:pt-36 lg:pb-12">
      <motion.div
        className="absolute inset-0 opacity-35"
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 0.35, scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <img className="h-full w-full object-cover" src={images.hero} alt="" aria-hidden="true" />
        <div className="absolute inset-0 bg-[#f4f1e9]/65" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(16,47,104,0.14),transparent_34rem),linear-gradient(180deg,rgba(244,241,233,0)_0%,#f4f1e9_92%)]" />
      </motion.div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1500px] gap-10 mix-blend-multiply">
        <motion.p
          className="text-xs font-semibold tracking-[0.18em] text-[#06112b]/55 uppercase"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}
        >
          Stateless Technology Limited
        </motion.p>
        <h1
          className="text-[clamp(5.3rem,17vw,18rem)] leading-[0.76] font-extrabold tracking-[-0.115em] text-[#06112b]"
          aria-label="Build beyond borders"
        >
          {heroLines.map((line, index) => (
            <motion.span
              className="block"
              style={{ paddingLeft: `${index * 5}vw` }}
              key={line}
              initial={{ opacity: 0, y: 96 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.32 + index * 0.14,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {line}
            </motion.span>
          ))}
        </h1>
        <motion.div
          className="grid max-w-[720px] gap-7 md:ml-[8vw] md:grid-cols-[1fr_auto] md:items-end"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: 'easeOut' }}
        >
          <p className="m-0 max-w-[390px] text-[clamp(1rem,1.6vw,1.18rem)] leading-[1.65] text-[#667085]">
            Technology infrastructure, software platforms, and digital systems for modern businesses.
          </p>
          <a
            className="group inline-flex items-center gap-3 text-[0.84rem] font-extrabold text-[#06112b]"
            href="/solutions"
            data-cursor="Explore"
          >
            Explore our solutions
            <span className="h-px w-14 bg-current transition duration-300 group-hover:w-20" />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute right-12 bottom-12 hidden items-center gap-[13px] text-[0.72rem] font-extrabold tracking-[0.16em] text-[#06112b]/45 uppercase after:h-px after:w-16 after:animate-pulse after:bg-current after:content-[''] lg:inline-flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
      >
        <span>Scroll</span>
      </motion.div>
    </section>
  )
}
