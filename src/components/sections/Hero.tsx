"use client";

import { motion } from "framer-motion";
import HeroCanvas from "@/components/canvas/HeroCanvas";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-midnight"
    >
      <div className="absolute inset-0">
        <HeroCanvas className="absolute inset-0 w-full h-full opacity-70" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-midnight/40 via-midnight/60 to-midnight" />
      <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl w-full px-6 lg:px-10 pt-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xs tracking-[0.35em] uppercase text-orion-cyan mb-8"
        >
          Digital Engineering Studio
        </motion.p>

        <h1 className="font-display text-balance text-[2.4rem] leading-[1.08] sm:text-6xl lg:text-[5rem] lg:leading-[1.05] max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="block text-offwhite"
          >
            We don&apos;t just build websites.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="block bg-gradient-to-r from-orion-cyan to-orion-blue bg-clip-text text-transparent"
          >
            We build what comes next.
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="mt-10 flex items-center gap-4"
        >
          <span className="font-display text-sm tracking-[0.25em] text-offwhite">ORION TECH</span>
          <span className="h-px w-8 bg-orion-muted/40" />
          <span className="text-xs tracking-[0.15em] uppercase text-orion-muted">
            Dakar — Senegal
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-10 flex flex-wrap items-center gap-5"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-orion-blue px-7 py-3.5 text-sm font-medium text-offwhite transition-all duration-300 hover:bg-orion-blue/90 hover:gap-3"
          >
            Start a project
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="#signal"
            className="inline-flex items-center gap-2 text-sm text-offwhite/80 hover:text-offwhite transition-colors"
          >
            Enter Orion
            <span aria-hidden="true" className="animate-pulse-slow">
              ↓
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
