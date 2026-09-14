"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { MISSIONS } from "@/lib/data";

const DETAIL_ROWS = [
  { key: "challenge" as const, label: "Défi" },
  { key: "strategy" as const, label: "Stratégie" },
  { key: "design" as const, label: "Design" },
  { key: "engineering" as const, label: "Ingénierie" },
  { key: "result" as const, label: "Résultat" },
];

export default function Missions() {
  const [selected, setSelected] = useState<string | null>(null);
  const mission = MISSIONS.find((m) => m.id === selected) ?? null;

  useEffect(() => {
    document.body.style.overflow = mission ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mission]);

  return (
    <section id="missions" className="relative bg-midnight py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel index="05" label="Orion / Missions" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-offwhite max-w-2xl text-balance">
            Des idées, transformées en réalité.
          </h2>
        </Reveal>
      </div>

      <div className="mt-16 lg:mt-20 flex flex-col">
        {MISSIONS.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.1}>
            <button
              type="button"
              data-cursor-label="VOIR LE PROJET"
              onClick={() => setSelected(project.id)}
              className="group relative block w-full text-left border-t border-white/10 last:border-b"
            >
              <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 lg:py-16 grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-1">
                  <span className="font-display text-sm text-orion-cyan">
                    0{i + 1}
                  </span>
                </div>

                <div className="lg:col-span-5">
                  <h3 className="font-display text-3xl sm:text-4xl text-offwhite transition-colors duration-300 group-hover:text-orion-cyan">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-xs tracking-[0.2em] uppercase text-orion-muted">
                    {project.category}
                  </p>
                </div>

                <div className="lg:col-span-4">
                  <p className="text-orion-muted leading-relaxed">{project.challenge}</p>
                </div>

                <div className="lg:col-span-2 flex flex-wrap gap-2 lg:justify-end">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-orion-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-orion-blue to-orion-cyan transition-all duration-500 group-hover:w-full" />
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {mission && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[200] bg-midnight overflow-y-auto"
          >
            <div className="mx-auto max-w-5xl px-6 lg:px-10 py-16 lg:py-24">
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Fermer"
                className="fixed top-6 right-6 lg:top-10 lg:right-10 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-offwhite hover:border-white/40 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <p className="text-xs tracking-[0.2em] uppercase text-orion-cyan mb-4">
                  {mission.category}
                </p>
                <h3 className="font-display text-5xl sm:text-6xl text-offwhite">
                  {mission.name}
                </h3>

                <div className="mt-6 flex flex-wrap gap-2">
                  {mission.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-orion-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-16 grid sm:grid-cols-2 gap-10">
                  {DETAIL_ROWS.map((row, i) => (
                    <motion.div
                      key={row.key}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                    >
                      <p className="text-xs tracking-[0.2em] uppercase text-orion-muted mb-3">
                        {row.label}
                      </p>
                      <p className="text-offwhite/90 leading-relaxed">{mission[row.key]}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-16">
                  <a
                    href="#contact"
                    onClick={() => setSelected(null)}
                    className="inline-flex items-center gap-2 rounded-full bg-orion-blue px-7 py-3.5 text-sm font-medium text-offwhite hover:bg-orion-blue/90 transition-colors"
                  >
                    Démarrer un projet similaire →
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
