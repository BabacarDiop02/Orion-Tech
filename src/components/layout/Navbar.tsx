"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setMounted(true), 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-midnight/85 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between">
        <a
          href="#hero"
          className="font-display text-lg tracking-[0.2em] text-offwhite"
          onClick={handleNavClick}
        >
          ORION<span className="text-orion-cyan">·</span>TECH
        </a>

        <ul className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs tracking-[0.15em] uppercase text-orion-muted hover:text-offwhite transition-colors duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 rounded-full border border-orion-blue/50 px-5 py-2.5 text-xs tracking-[0.1em] uppercase text-offwhite hover:bg-orion-blue hover:border-orion-blue transition-all duration-300"
        >
          Démarrer un projet
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="lg:hidden relative z-50 w-9 h-9 flex flex-col items-center justify-center gap-[5px]"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block h-px w-6 bg-offwhite"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="block h-px w-6 bg-offwhite"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block h-px w-6 bg-offwhite"
          />
        </button>
      </nav>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="lg:hidden fixed inset-0 bg-midnight z-40 flex flex-col"
              >
                <div className="flex-1 flex flex-col justify-center px-8">
                  <ul className="flex flex-col gap-6">
                    {NAV_LINKS.map((link, i) => (
                      <motion.li
                        key={link.href}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
                      >
                        <a
                          href={link.href}
                          onClick={handleNavClick}
                          className="font-display text-4xl text-offwhite hover:text-orion-cyan transition-colors"
                        >
                          {link.label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    href="#contact"
                    onClick={handleNavClick}
                    className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-orion-blue px-6 py-3 text-sm text-offwhite"
                  >
                    Démarrer un projet
                  </motion.a>
                </div>
                <div className="px-8 pb-10 text-xs tracking-[0.2em] text-orion-muted uppercase">
                  Dakar · Sénégal
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </header>
  );
}
