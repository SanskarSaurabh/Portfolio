import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMenu, FiX } from 'react-icons/fi';
import { navLinks, socials } from '../data/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/10 bg-night/75 py-3 shadow-2xl backdrop-blur-xl' : 'py-5'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="group flex items-center gap-3" onClick={closeMenu}>
          <span className="grid h-11 w-11 place-items-center rounded-xl border border-neon/40 bg-neon/10 font-display text-lg font-bold text-paper shadow-glow">
            DA
          </span>
          <span className="hidden font-display text-lg font-semibold text-paper sm:block">Data Portfolio</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} className="nav-link" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          {socials.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} className="icon-button" aria-label={label} target="_blank" rel="noreferrer">
              <Icon />
            </a>
          ))}
          <a href="/resume.pdf" className="primary-button ml-2" download>
            <FiDownload />
            Resume
          </a>
        </div>

        <button className="icon-button lg:hidden" onClick={() => setIsOpen((value) => !value)} aria-label="Toggle menu">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {isOpen && (
        <motion.div
          className="mx-5 mt-4 rounded-2xl border border-white/10 bg-panel/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden"
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <a key={link.href} className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-200 hover:bg-white/10" href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
            <a href="/resume.pdf" className="primary-button mt-2 justify-center" download>
              <FiDownload />
              Download Resume
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
