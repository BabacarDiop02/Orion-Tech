"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { TECH_STACK } from "@/lib/data";

const LAYERS = Object.entries(TECH_STACK);

export default function EngineRoom() {
  return (
    <section id="engine-room" className="relative bg-navy py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel index="07" label="Expertise" light />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-offwhite max-w-2xl text-balance">
            La salle des machines.
          </h2>
        </Reveal>

        <div className="mt-16 relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/10" aria-hidden="true" />

          <div className="space-y-8">
            {LAYERS.map(([layer, techs], i) => (
              <Reveal key={layer} delay={i * 0.08}>
                <div className="relative flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 pl-6">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-orion-cyan bg-navy"
                  />
                  <p className="w-full sm:w-40 shrink-0 text-xs tracking-[0.2em] uppercase text-orion-muted">
                    {layer}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-midnight/60 px-4 py-2 text-sm text-offwhite/85"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
