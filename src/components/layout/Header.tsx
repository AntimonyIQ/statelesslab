import { useState } from 'react'
import { motion } from 'framer-motion'
import logo from '../../assets/icons/logo.svg'
import { navLinks } from '../../data/siteContent'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)
  const navClassName = `absolute top-full right-4 left-4 mt-3 grid gap-0 overflow-hidden rounded-3xl border border-[#06112b]/10 bg-[#f8f5ee]/95 p-3 text-[0.82rem] font-semibold text-[#06112b] shadow-[0_30px_80px_rgba(7,20,47,0.12)] backdrop-blur-2xl transition duration-300 lg:pointer-events-auto lg:static lg:mt-0 lg:flex lg:translate-y-0 lg:items-center lg:gap-9 lg:overflow-visible lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:backdrop-blur-none ${
    isMenuOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
  }`

  return (
    <motion.header
      className="fixed top-0 left-0 z-50 flex min-h-[86px] w-full items-center justify-between gap-8 border-b border-[#06112b]/10 bg-[#f4f1e9]/80 px-4 backdrop-blur-2xl md:px-8 lg:min-h-[96px] lg:px-12"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <a
        className="inline-flex min-w-0 items-center gap-3 whitespace-nowrap text-[0.9rem] font-extrabold tracking-[-0.035em]"
        href="/"
        aria-label="Stateless Technology home"
        onClick={closeMenu}
      >
        <img
          src={logo}
          alt=""
          className="h-11 w-11 rounded-full bg-[#06112b] shadow-[inset_0_0_0_6px_#06112b]"
        />
        <span className="max-w-[164px] overflow-hidden text-ellipsis text-[#06112b] md:max-w-none">
          Stateless Technology Limited
        </span>
      </a>

      <button
        className="flex h-[46px] w-[46px] cursor-pointer flex-col items-center justify-center gap-[7px] rounded-full border border-[#06112b]/10 bg-[#06112b] lg:hidden"
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <span className="h-px w-[18px] bg-white" />
        <span className="h-px w-[18px] bg-white" />
      </button>

      <nav className={navClassName} aria-label="Primary navigation">
        {navLinks.map((link) => (
          <a
            className="group relative px-3 py-[15px] transition hover:text-[#102f68] lg:p-0"
            key={link.href}
            href={link.href}
            onClick={closeMenu}
          >
            {link.label}
            <span className="absolute right-3 bottom-2 left-3 h-px origin-right scale-x-0 bg-current transition duration-300 group-hover:origin-left group-hover:scale-x-100 lg:right-0 lg:-bottom-2 lg:left-0" />
          </a>
        ))}
        <a
          className="mt-3 inline-flex min-h-12 items-center justify-center rounded-full bg-[#06112b] px-5 text-sm font-extrabold text-white transition hover:-translate-y-0.5 lg:mt-0"
          href="/contact"
          onClick={closeMenu}
        >
          Start a Project
        </a>
      </nav>
    </motion.header>
  )
}
