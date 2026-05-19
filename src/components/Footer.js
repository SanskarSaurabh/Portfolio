import { FiArrowUp } from 'react-icons/fi';
import { navLinks, socials } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080d1b] py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <a href="#home" className="font-display text-2xl font-bold text-paper">Data Portfolio</a>
          <p className="mt-2 text-sm text-slate-400">Copyright © 2026. Built with React, Tailwind, Framer Motion, GSAP, and care.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-semibold text-slate-300 transition hover:text-neon">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex gap-3">
          {socials.map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} className="icon-button h-11 w-11" aria-label={label} target="_blank" rel="noreferrer">
              <Icon />
            </a>
          ))}
          <a href="#home" className="icon-button h-11 w-11" aria-label="Back to top">
            <FiArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}
