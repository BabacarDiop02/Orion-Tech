import Reveal from "@/components/ui/Reveal";
import SectionBackground from "@/components/ui/SectionBackground";

export default function Philosophy() {
  return (
    <section className="relative bg-midnight py-32 lg:py-48 overflow-hidden">
      <SectionBackground src="/images/sections/philosophy.webp" overlayClassName="bg-midnight/85" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-orion-blue/5 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <Reveal y={16}>
          <p className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.1] text-offwhite text-balance">
            LA TECHNOLOGIE
            <span className="block text-orion-muted">DOIT DISPARAÎTRE.</span>
          </p>
        </Reveal>

        <Reveal delay={0.5} y={16}>
          <p className="mt-6 font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.1] text-offwhite text-balance">
            L&apos;EXPÉRIENCE
            <span className="block text-orion-cyan">DOIT RESTER.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
