"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionBackground from "@/components/ui/SectionBackground";
import { SYSTEM_MODULES } from "@/lib/data";

export default function SystemModules() {
  const [active, setActive] = useState(0);
  const activeModule = SYSTEM_MODULES[active];

  return (
    <section id="system" className="relative bg-midnight py-28 lg:py-40 overflow-hidden">
      <SectionBackground src="/images/sections/system.webp" overlayClassName="bg-midnight/80" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel index="03" label="Le Système" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-offwhite max-w-2xl text-balance">
            Une idée. Sept modules.
            <span className="block text-orion-blue">Un système connecté.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6">
            <div className="relative mx-auto aspect-square max-w-lg">
              {SYSTEM_MODULES.map((module, i) => {
                const angle = -90 + (360 / SYSTEM_MODULES.length) * i;
                const rad = (angle * Math.PI) / 180;
                const radius = 40;
                const x = 50 + radius * Math.cos(rad);
                const y = 50 + radius * Math.sin(rad);
                const isActive = active === i;

                return (
                  <div key={module.id}>
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      viewBox="0 0 100 100"
                      aria-hidden="true"
                    >
                      <motion.line
                        x1="50"
                        y1="50"
                        x2={x}
                        y2={y}
                        stroke={isActive ? "var(--color-orion-cyan)" : "var(--color-orion-blue)"}
                        strokeWidth={isActive ? 0.6 : 0.3}
                        animate={{ opacity: isActive ? 0.8 : 0.25 }}
                        transition={{ duration: 0.4 }}
                      />
                    </svg>
                    <motion.button
                      type="button"
                      data-cursor-hover
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      style={{ left: `${x}%`, top: `${y}%` }}
                      animate={{ scale: isActive ? 1.15 : 1 }}
                      transition={{ duration: 0.3 }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full border px-3 py-2 sm:px-4 sm:py-2.5 text-[10px] sm:text-xs tracking-[0.1em] uppercase whitespace-nowrap transition-colors duration-300 ${
                        isActive
                          ? "border-orion-cyan bg-orion-cyan/10 text-offwhite"
                          : "border-white/10 bg-midnight text-orion-muted"
                      }`}
                    >
                      {module.label}
                    </motion.button>
                  </div>
                );
              })}

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full border border-orion-gold/40 bg-gradient-to-br from-orion-blue/20 to-orion-gold/10">
                <span className="font-display text-[10px] tracking-[0.15em] text-center text-offwhite">
                  ORION
                  <br />
                  SYSTEM
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <motion.div
              key={activeModule.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-white/10 bg-navy/40 p-8 lg:p-10"
            >
              <span className="text-xs tracking-[0.2em] uppercase text-orion-cyan">
                Module {String(active + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-3xl text-offwhite">{activeModule.title}</h3>
              <p className="mt-4 text-orion-muted leading-relaxed">{activeModule.description}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
