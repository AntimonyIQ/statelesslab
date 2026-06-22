import { motion } from 'framer-motion'

type ComingSoonPageProps = {
  title: string
}

export function ComingSoonPage({ title }: ComingSoonPageProps) {
  return (
    <main className="min-h-screen px-4 pt-36 pb-16 md:px-6 md:pt-44">
      <motion.section
        className="mx-auto flex min-h-[68vh] w-full max-w-[1500px] flex-col justify-between rounded-[2rem] border border-[#07142f]/10 bg-[#f8f5ee] p-6 shadow-[0_40px_120px_rgba(7,20,47,0.08)] md:rounded-[3rem] md:p-10 lg:p-14"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center justify-between gap-6 text-[0.72rem] font-semibold tracking-[0.16em] text-[#06112b]/60 uppercase">
          <span>{title}</span>
          <span>Coming soon</span>
        </div>
        <div className="max-w-5xl">
          <p className="mb-5 text-sm font-semibold tracking-[0.16em] text-[#102f68] uppercase">
            Stateless Technology Limited
          </p>
          <h1 className="text-[clamp(4rem,14vw,12rem)] leading-[0.82] font-extrabold tracking-[-0.105em] text-[#06112b]">
            {title}
            <br />
            is coming.
          </h1>
        </div>
        <div className="grid gap-6 border-t border-[#07142f]/10 pt-7 text-[#667085] md:grid-cols-[1fr_auto] md:items-end">
          <p className="max-w-xl text-lg leading-[1.65]">
            This route is prepared for the full page experience. For now, return to the landing page
            to explore the complete overview.
          </p>
          <a
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#06112b] px-6 text-sm font-extrabold text-white transition hover:-translate-y-0.5"
            href="/"
          >
            Back to home
          </a>
        </div>
      </motion.section>
    </main>
  )
}
