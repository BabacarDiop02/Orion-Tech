"use client";

import Reveal from "@/components/ui/Reveal";
import Constellation from "@/components/ui/Constellation";

export default function CTA() {
  return (
    <section className="relative bg-midnight py-32 lg:py-48 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-orion-blue/10 blur-[150px] pointer-events-none" />
      <div className="absolute top-10 right-0 opacity-60">
        <Constellation density="cta" className="w-64 h-32 lg:w-96 lg:h-44" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.1] text-offwhite text-balance">
            Et si votre prochaine idée devenait notre prochain projet ?
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-8 text-lg text-orion-gray">
            Parlons de ce que vous voulez construire.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-orion-blue px-9 py-4 text-base font-medium text-offwhite transition-all duration-300 hover:bg-orion-blue/90 hover:gap-3"
            >
              Démarrer un projet
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-9 py-4 text-base text-offwhite/90 transition-all duration-300 hover:border-white/40"
            >
              Nous contacter
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
