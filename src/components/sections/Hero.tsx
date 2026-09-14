"use client";

import { motion } from "framer-motion";
import Constellation from "@/components/ui/Constellation";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-midnight bg-grid"
    >
      <div className="absolute inset-0 mask-fade-b bg-gradient-to-b from-transparent via-transparent to-midnight" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-orion-blue/10 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl w-full px-6 lg:px-10 pt-32 pb-16 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xs tracking-[0.3em] uppercase text-orion-cyan mb-6"
          >
            Orion Tech — Digital Solutions
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-balance text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl text-offwhite"
          >
            Vos idées méritent mieux qu&apos;une simple présence en ligne.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-8 max-w-xl text-lg text-orion-gray leading-relaxed"
          >
            Nous concevons et développons des expériences digitales,
            applications et plateformes sur mesure pour faire grandir les
            entreprises au Sénégal et au-delà.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-orion-blue px-7 py-3.5 text-sm font-medium text-offwhite transition-all duration-300 hover:bg-orion-blue/90 hover:gap-3"
            >
              Démarrer un projet
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm text-offwhite/90 transition-all duration-300 hover:border-white/40"
            >
              Voir nos réalisations
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-[11px] tracking-[0.25em] uppercase text-orion-gray"
          >
            <span>Dakar · Senegal</span>
            <span className="hidden sm:inline h-px w-8 bg-orion-gray/30" />
            <span>Building digital systems for the real world</span>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/3.2] w-full animate-drift"
          >
            <Constellation density="hero" className="w-full h-full" />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-orion-gray">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-orion-gray/60 to-transparent animate-pulse-slow" />
      </motion.div>
    </section>
  );
}
