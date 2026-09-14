"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { PROCESS_STEPS } from "@/lib/data";

export default function Process() {
  return (
    <section id="approach" className="relative bg-deepspace py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel index="03" label="Notre approche" light />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-offwhite max-w-2xl text-balance">
            Nous ne développons pas seulement des logiciels.
            <span className="block text-orion-blue">Nous construisons des solutions.</span>
          </h2>
        </Reveal>

        <div className="mt-20 relative">
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-white/10" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            style={{ transformOrigin: "left" }}
            className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-orion-blue via-orion-cyan to-orion-gold"
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.12}>
                <div className="relative flex lg:flex-col gap-5 lg:gap-0">
                  <div className="relative z-10 w-3 h-3 rounded-full bg-orion-cyan shrink-0 mt-1 lg:mt-0 lg:mb-8 shadow-[0_0_12px_rgba(34,211,238,0.7)]" />
                  <div className="lg:pr-4">
                    <span className="font-display text-xs text-orion-blue">{step.number}</span>
                    <h3 className="mt-2 font-display text-xl text-offwhite">{step.title}</h3>
                    <p className="mt-2 text-sm text-orion-gray leading-relaxed">
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
