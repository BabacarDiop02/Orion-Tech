"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { SERVICES } from "@/lib/data";

export default function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" className="relative bg-navy py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel index="04" label="Solutions" light />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-offwhite max-w-3xl text-balance">
            What we build.
          </h2>
        </Reveal>

        <div className="mt-16 border-t border-white/10">
          {SERVICES.map((service, i) => {
            const isActive = active === i;
            const isDimmed = active !== null && !isActive;
            return (
              <motion.div
                key={service.title}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                data-cursor-hover
                animate={{ opacity: isDimmed ? 0.4 : 1 }}
                transition={{ duration: 0.4 }}
                className="group relative border-b border-white/10 py-7 lg:py-9 grid grid-cols-[auto_1fr] lg:grid-cols-12 gap-4 lg:gap-8 items-start lg:items-center cursor-default"
              >
                <span className="font-display text-sm text-orion-cyan lg:col-span-1">
                  {service.number}
                </span>

                <motion.h3
                  animate={{ x: isActive ? 12 : 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-2xl sm:text-3xl lg:text-4xl text-offwhite col-span-2 lg:col-span-4"
                >
                  {service.title}
                </motion.h3>

                <p className="col-span-2 lg:col-span-4 text-orion-muted text-sm sm:text-base leading-relaxed lg:pl-4">
                  {service.description}
                </p>

                <div className="col-span-2 lg:col-span-2 flex flex-wrap gap-2 lg:justify-end">
                  {service.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-orion-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <motion.span
                  initial={false}
                  animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -8 }}
                  transition={{ duration: 0.3 }}
                  className="hidden lg:block lg:col-span-1 justify-self-end text-orion-cyan"
                  aria-hidden="true"
                >
                  →
                </motion.span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
