import { motion } from 'framer-motion'
import logo from '../../assets/icons/logo.svg'
import { navLinks } from '../../data/siteContent'

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-[#06112b] px-4 pt-20 pb-10 text-white md:px-8 lg:px-12 lg:pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(0,183,255,0.18),transparent_34rem),linear-gradient(180deg,rgba(255,255,255,0.06),transparent)]" />
      <div className="relative mx-auto max-w-[1500px]">
        <motion.div
          className="mx-auto mb-20 max-w-6xl text-center lg:mb-28"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-6 text-xs font-semibold tracking-[0.16em] text-white/50 uppercase">
            Contact
          </p>
          <h2 className="text-[clamp(3.4rem,10vw,10.5rem)] leading-[0.9] font-extrabold tracking-[-0.09em] text-balance">
            The opportunity to build, scale, and move forward
          </h2>
          <a
            className="mt-10 inline-flex min-h-14 items-center justify-center rounded-full bg-white px-7 text-sm font-extrabold text-[#06112b] transition hover:-translate-y-0.5"
            href="/contact"
          >
            Contact us
          </a>
        </motion.div>
      </div>

      <div className="relative mx-auto grid max-w-[1500px] grid-cols-1 gap-11 border-t border-white/15 pt-10 text-white/65 lg:grid-cols-[1fr_auto]">
        <div>
        <a
          className="inline-flex items-center gap-3 whitespace-nowrap text-[0.88rem] font-extrabold tracking-[-0.03em]"
          href="/"
          aria-label="Stateless Technology home"
        >
          <img
            src={logo}
            alt=""
            className="h-12 w-12 rounded-full bg-white/10 shadow-[inset_0_0_0_6px_rgba(255,255,255,0.08)]"
          />
          <span className="text-white">Stateless Technology Limited</span>
        </a>
        <p className="mt-[22px] max-w-[430px] leading-[1.7]">
          Building digital infrastructure, software products, and technology systems for modern
          businesses.
        </p>
      </div>
      <nav
        className="flex flex-wrap items-start gap-[22px] text-[0.82rem] font-extrabold text-white"
        aria-label="Footer navigation"
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
        <div className="grid gap-2 text-sm font-semibold lg:text-right">
          <a href="mailto:hello@statelesstechnology.com">hello@statelesstechnology.com</a>
          <span>Lagos, Nigeria</span>
        </div>
        <p className="mt-[18px] border-t border-white/15 pt-7 text-[0.82rem] lg:col-span-2">
          © 2026 Stateless Technology Limited. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
