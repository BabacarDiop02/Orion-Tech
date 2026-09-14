"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

const SATELLITES = [
  { label: "Problem", angle: -90 },
  { label: "Vision", angle: -18 },
  { label: "Users", angle: 54 },
  { label: "Business", angle: 126 },
  { label: "Technology", angle: 198 },
];

export default function Idea() {
  return (
    <section id="idea" className="relative bg-navy py-28 lg:py-40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionLabel index="02" label="The Idea" light />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-offwhite text-balance">
              You bring the problem.
              <span className="block text-orion-cyan">We engineer the possibility.</span>
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <div className="relative mx-auto aspect-square max-w-md">
            {SATELLITES.map((sat, i) => {
              const rad = (sat.angle * Math.PI) / 180;
              const radius = 42;
              const x = 50 + radius * Math.cos(rad);
              const y = 50 + radius * Math.sin(rad);
              return (
                <div key={sat.label}>
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
                      stroke="var(--color-orion-blue)"
                      strokeWidth={0.4}
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 0.4 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.12 }}
                    />
                  </svg>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
                    style={{ left: `${x}%`, top: `${y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-midnight/80 px-4 py-2 text-xs tracking-[0.1em] uppercase text-offwhite/80 whitespace-nowrap"
                  >
                    {sat.label}
                  </motion.div>
                </div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-28 w-28 sm:h-32 sm:w-32 items-center justify-center rounded-full border border-orion-cyan/40 bg-gradient-to-br from-orion-blue/20 to-orion-cyan/10"
            >
              <span className="font-display text-xs tracking-[0.15em] text-center text-offwhite">
                YOUR
                <br />
                IDEA
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
