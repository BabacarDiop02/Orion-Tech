"use client";

import { motion } from "framer-motion";
import Constellation from "@/components/ui/Constellation";

const SEQUENCE = [
  { text: "ET SI", delay: 0 },
  { text: "VOTRE IDÉE", delay: 0.6 },
  { text: "POUVAIT TOUT", delay: 1.2 },
  { text: "CHANGER ?", delay: 1.8, accent: true },
];

export default function FinalCTA() {
  return (
    <section className="relative bg-midnight py-32 lg:py-48 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-orion-blue/10 blur-[150px] pointer-events-none" />
      <div className="absolute top-10 right-0 opacity-50">
        <Constellation density="cta" className="w-64 h-32 lg:w-96 lg:h-44" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.15]">
          {SEQUENCE.map((line) => (
            <motion.span
              key={line.text}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: line.delay }}
              className={`block ${line.accent ? "text-orion-cyan" : "text-offwhite"}`}
            >
              {line.text}
            </motion.span>
          ))}
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 2.4 }}
          className="mt-10 font-display text-2xl text-offwhite"
        >
          Construisons-la.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 2.6 }}
          className="mt-10"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-orion-blue px-9 py-4 text-base font-medium text-offwhite transition-all duration-300 hover:bg-orion-blue/90 hover:gap-3"
          >
            Démarrer avec Orion
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
