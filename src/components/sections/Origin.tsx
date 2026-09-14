"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { CONTACT_INFO } from "@/lib/data";

const REACH_NODES = [
  { x: 50, y: 50, r: 4, dakar: true },
  { x: 20, y: 25, r: 2 },
  { x: 80, y: 20, r: 2 },
  { x: 15, y: 70, r: 1.8 },
  { x: 85, y: 65, r: 2.2 },
  { x: 45, y: 12, r: 1.8 },
  { x: 70, y: 85, r: 2 },
  { x: 10, y: 45, r: 1.6 },
];

export default function Origin() {
  return (
    <section id="origin" className="relative bg-navy py-28 lg:py-40 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 text-center">
        <Reveal>
          <p className="font-display text-sm tracking-[0.3em] text-orion-muted">
            {CONTACT_INFO.coordinates}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-4 font-display text-5xl sm:text-7xl lg:text-8xl text-offwhite">
            DAKAR
          </h2>
        </Reveal>

        <div className="relative mx-auto mt-16 aspect-[16/9] max-w-2xl">
          <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
            {REACH_NODES.slice(1).map((node, i) => (
              <motion.line
                key={i}
                x1={50}
                y1={50}
                x2={node.x}
                y2={node.y}
                stroke="var(--color-orion-blue)"
                strokeWidth={0.3}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.45 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 + i * 0.15 }}
              />
            ))}
            {REACH_NODES.map((node, i) => (
              <motion.circle
                key={i}
                cx={node.x}
                cy={node.y}
                r={node.r}
                fill={node.dakar ? "var(--color-orion-gold)" : "var(--color-orion-cyan)"}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: node.dakar ? 0 : 0.4 + i * 0.12 }}
              />
            ))}
          </svg>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-16 font-display text-2xl sm:text-3xl text-offwhite text-balance">
            Built in Dakar.
            <span className="block text-orion-cyan">Connected to the world.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
