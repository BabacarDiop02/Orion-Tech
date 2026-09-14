import Link from "next/link";
import Constellation from "@/components/ui/Constellation";

export const metadata = {
  title: "Signal Lost",
};

export default function NotFound() {
  return (
    <main className="relative min-h-[100svh] flex flex-col items-center justify-center bg-midnight px-6 text-center overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <Constellation density="hero" className="w-full h-full mx-auto max-w-2xl" />
      </div>

      <div className="relative">
        <p className="text-xs tracking-[0.3em] uppercase text-orion-cyan mb-6">404</p>
        <h1 className="font-display text-4xl sm:text-6xl text-offwhite">SIGNAL LOST.</h1>
        <p className="mt-6 max-w-md mx-auto text-orion-muted leading-relaxed">
          The page you&apos;re looking for could not be located.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-orion-blue px-7 py-3.5 text-sm font-medium text-offwhite transition-colors hover:bg-orion-blue/90"
        >
          Return to Orion
        </Link>
      </div>
    </main>
  );
}
