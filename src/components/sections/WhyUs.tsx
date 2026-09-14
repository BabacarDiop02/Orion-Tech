"use client";

import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { PILLARS } from "@/lib/data";

export default function WhyUs() {
  return (
    <section className="relative bg-midnight py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel index="04" label="Pourquoi Orion Tech" />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-offwhite max-w-3xl text-balance">
            La technologie n&apos;est pas notre produit.
            <span className="block text-orion-gold">Votre résultat, oui.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.1} className="bg-midnight">
              <div className="group h-full p-8 lg:p-10 transition-colors duration-500 hover:bg-deepspace">
                <span className="font-display text-2xl text-orion-blue transition-colors duration-500 group-hover:text-orion-cyan">
                  0{i + 1}
                </span>
                <h3 className="mt-6 font-display text-xl text-offwhite">{pillar.title}</h3>
                <p className="mt-3 text-sm text-orion-gray leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-16 text-center text-sm tracking-[0.25em] uppercase text-orion-gray">
            Built in Dakar. Designed for the world.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
