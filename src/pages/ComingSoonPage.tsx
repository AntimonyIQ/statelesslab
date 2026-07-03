import { motion } from 'framer-motion'

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.333 8H12.667M12.667 8L8.667 4M12.667 8L8.667 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ComingSoonPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f4ee] px-6 py-16 text-[#07142f]">
      <motion.section
        className="w-full max-w-3xl text-center"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="text-[clamp(2.75rem,8vw,5.5rem)] font-semibold tracking-[-0.06em]">
          Stateless techonlogy
        </h1>

        <a
          className="mt-10 inline-flex items-center gap-3 text-base text-[#07142f] underline underline-offset-4 transition hover:opacity-70"
          href="mailto:business@statelesslab.com"
        >
          <ArrowIcon />
          <span>business@statelesslab.com</span>
        </a>
      </motion.section>
    </main>
  )
}
