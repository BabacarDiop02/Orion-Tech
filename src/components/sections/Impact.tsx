"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const CONVERGENCE = ["Idea", "Design", "Technology"];

export default function Impact() {
  return (
    <section className="relative bg-deepspace py-32 lg:py-44 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.1] text-offwhite">
            Une idée. <br className="hidden sm:block" />
            Une vision. <br className="hidden sm:block" />
            <span className="text-orion-blue">Un système.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-8 mx-auto max-w-xl text-lg text-orion-gray leading-relaxed">
            Nous concevons des produits digitaux pensés pour résoudre de vrais
            problèmes, simplifier les opérations et créer de nouvelles
            opportunités.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-24 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-4">
            {CONVERGENCE.map((item, i) => (
              <div key={item} className="flex items-center gap-4 sm:gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="rounded-full border border-white/10 px-6 py-3 text-sm tracking-[0.15em] uppercase text-offwhite/80"
                >
                  {item}
                </motion.div>
                {i < CONVERGENCE.length - 1 && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15 }}
                    className="text-orion-cyan"
                    aria-hidden="true"
                  >
                    →
                  </motion.span>
                )}
              </div>
            ))}
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="text-orion-cyan"
              aria-hidden="true"
            >
              →
            </motion.span>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.85 }}
              className="rounded-full bg-orion-blue px-7 py-3 text-sm font-medium tracking-[0.15em] uppercase text-offwhite"
            >
              Orion System
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
