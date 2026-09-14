"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import SectionBackground from "@/components/ui/SectionBackground";

const DOTS = [
  { x: 50, y: 20, delay: 0 },
  { x: 20, y: 40, delay: 0.3 },
  { x: 78, y: 42, delay: 0.5 },
  { x: 35, y: 65, delay: 0.7 },
  { x: 65, y: 68, delay: 0.9 },
];

const EDGES: [number, number][] = [
  [0, 1],
  [0, 2],
  [1, 3],
  [2, 4],
  [3, 4],
];

export default function Signal() {
  return (
    <section id="signal" className="relative bg-midnight py-28 lg:py-40 overflow-hidden">
      <SectionBackground src="/images/sections/signal.webp" overlayClassName="bg-midnight/80" />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <Reveal>
          <SectionLabel index="01" label="Le Signal" />
        </Reveal>

        <div className="flex justify-center mb-10">
          <svg viewBox="0 0 100 90" className="w-24 h-20" aria-hidden="true">
            {EDGES.map(([a, b], i) => (
              <motion.line
                key={i}
                x1={DOTS[a].x}
                y1={DOTS[a].y}
                x2={DOTS[b].x}
                y2={DOTS[b].y}
                stroke="var(--color-orion-cyan)"
                strokeWidth={0.6}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1 + i * 0.15 }}
              />
            ))}
            {DOTS.map((dot, i) => (
              <motion.circle
                key={i}
                cx={dot.x}
                cy={dot.y}
                r={i === 0 ? 3 : 2}
                fill={i === 0 ? "var(--color-orion-gold)" : "var(--color-orion-cyan)"}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: dot.delay }}
              />
            ))}
          </svg>
        </div>

        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.1] text-offwhite text-balance">
            Toute grande solution
            <span className="block text-orion-cyan">commence par un signal.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-8 mx-auto max-w-lg text-lg text-orion-muted leading-relaxed">
            Une idée peut être simple. Sa transformation ne l&apos;est pas.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
