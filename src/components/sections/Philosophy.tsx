import Reveal from "@/components/ui/Reveal";

export default function Philosophy() {
  return (
    <section className="relative bg-midnight py-32 lg:py-48 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-orion-gold/5 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <Reveal>
          <p className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.1] text-offwhite text-balance">
            Technology should disappear.
            <span className="block text-orion-blue">The experience should remain.</span>
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-10 text-lg text-orion-gray leading-relaxed max-w-xl mx-auto">
            Une bonne technologie ne complique pas la vie. Elle la simplifie.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
