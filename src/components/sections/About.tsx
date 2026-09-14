"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

const MAP_POINTS = [
  { x: 30, y: 40 },
  { x: 90, y: 20 },
  { x: 150, y: 60 },
  { x: 110, y: 110 },
  { x: 60, y: 130 },
  { x: 180, y: 100 },
  { x: 210, y: 50 },
];

const MAP_EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 0],
  [2, 5],
  [5, 6],
  [1, 6],
];

export default function About() {
  return (
    <section id="about" className="relative bg-deepspace py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7">
          <Reveal>
            <SectionLabel index="07" label="À propos" light />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-offwhite text-balance">
              Orion Tech est née d&apos;une conviction.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-lg text-orion-gray leading-relaxed max-w-xl">
              Les entreprises africaines n&apos;ont pas besoin de solutions
              digitales génériques. Elles ont besoin de technologies pensées
              pour leurs réalités, leurs ambitions et leurs utilisateurs.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-5 text-lg text-orion-gray leading-relaxed max-w-xl">
              Orion Tech conçoit des solutions numériques qui rapprochent
              technologie, design et réalité métier.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="mt-10 text-sm tracking-[0.25em] uppercase text-orion-gold">
              Dakar, Sénégal
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.2}>
            <div className="relative aspect-square rounded-2xl border border-white/10 bg-midnight/60 p-8">
              <svg viewBox="0 0 240 160" className="w-full h-full" aria-hidden="true">
                {MAP_EDGES.map(([a, b], i) => (
                  <motion.line
                    key={i}
                    x1={MAP_POINTS[a].x}
                    y1={MAP_POINTS[a].y}
                    x2={MAP_POINTS[b].x}
                    y2={MAP_POINTS[b].y}
                    stroke="var(--color-orion-blue)"
                    strokeOpacity={0.4}
                    strokeWidth={1}
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.08 }}
                  />
                ))}
                {MAP_POINTS.map((p, i) => (
                  <motion.circle
                    key={i}
                    cx={p.x}
                    cy={p.y}
                    r={i === 3 ? 4 : 2.5}
                    fill={i === 3 ? "var(--color-orion-gold)" : "var(--color-orion-cyan)"}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
                  />
                ))}
              </svg>
              <p className="absolute bottom-6 left-8 text-[11px] tracking-[0.25em] uppercase text-orion-gray">
                14.6928° N, 17.4467° W
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
