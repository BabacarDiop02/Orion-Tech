"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { TECHNOLOGIES } from "@/lib/data";

export default function Technology() {
  return (
    <section className="relative bg-midnight py-28 lg:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel index="06" label="Technologies" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-offwhite max-w-2xl text-balance">
            Built with the right technology.
          </h2>
        </Reveal>

        <div className="mt-16 relative rounded-2xl border border-white/10 bg-deepspace/60 p-8 sm:p-12 lg:p-16">
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            {TECHNOLOGIES.map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                whileHover={{ y: -3, borderColor: "rgba(34,211,238,0.6)" }}
                className="rounded-full border border-white/10 px-5 py-2.5 text-sm text-offwhite/80 tracking-wide transition-colors"
              >
                {tech}
              </motion.div>
            ))}
          </div>

          <svg
            className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="tech-glow" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#tech-glow)" />
          </svg>
        </div>
      </div>
    </section>
  );
}
