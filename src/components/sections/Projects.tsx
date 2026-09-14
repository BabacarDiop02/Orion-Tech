"use client";

import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  return (
    <section id="work" className="relative bg-deepspace py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel index="05" label="Réalisations" light />
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-offwhite max-w-2xl text-balance">
            Des idées devenues réalité.
          </h2>
        </Reveal>
      </div>

      <div className="mt-16 lg:mt-20 flex flex-col">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.1}>
            <a
              href="#contact"
              data-cursor-label="VIEW PROJECT"
              className="group relative block border-t border-white/10 last:border-b"
            >
              <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 lg:py-16 grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-1">
                  <span className="font-display text-sm text-orion-blue">{project.number}</span>
                </div>

                <div className="lg:col-span-4">
                  <h3 className="font-display text-3xl sm:text-4xl text-offwhite transition-colors duration-300 group-hover:text-orion-cyan">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-xs tracking-[0.2em] uppercase text-orion-gray">
                    {project.category}
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <p className="text-orion-gray leading-relaxed">{project.description}</p>
                </div>

                <div className="lg:col-span-2 flex flex-wrap gap-2 lg:justify-end">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-orion-gray"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-orion-blue to-orion-cyan transition-all duration-500 group-hover:w-full" />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
