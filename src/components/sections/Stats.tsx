import Reveal from "@/components/ui/Reveal";
import { STATS } from "@/lib/data";

export default function Stats() {
  return (
    <section className="relative bg-deepspace py-20 lg:py-28 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 lg:grid-cols-4 gap-10">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.1} className="text-center lg:text-left">
            <p className="font-display text-5xl sm:text-6xl text-offwhite">{stat.value}</p>
            <p className="mt-2 text-xs tracking-[0.25em] uppercase text-orion-gray">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
