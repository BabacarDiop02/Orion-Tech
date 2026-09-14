"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { PROCESS_STEPS } from "@/lib/data";

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.7", "end 0.3"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" className="relative bg-midnight py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel index="06" label="Processus" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-offwhite max-w-2xl text-balance">
            Du signal au système.
          </h2>
        </Reveal>

        <div ref={containerRef} className="mt-20 relative">
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-white/10" />
          <motion.div
            style={{ scaleX: lineScale }}
            className="hidden lg:block absolute top-6 left-0 right-0 h-px origin-left bg-gradient-to-r from-orion-blue via-orion-cyan to-orion-gold"
          />

          <div className="grid grid-cols-1 lg:grid-cols-6 gap-10 lg:gap-4">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.1}>
                <div className="relative flex lg:flex-col gap-5 lg:gap-0">
                  <div className="relative z-10 w-3 h-3 rounded-full bg-orion-cyan shrink-0 mt-1 lg:mt-0 lg:mb-8 shadow-[0_0_12px_rgba(34,211,238,0.7)]" />
                  <div className="lg:pr-3">
                    <span className="font-display text-xs text-orion-cyan">{step.number}</span>
                    <h3 className="mt-2 font-display text-lg text-offwhite">{step.title}</h3>
                    <p className="mt-2 text-sm text-orion-muted leading-relaxed">
                      {step.description}
                    </p>
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
