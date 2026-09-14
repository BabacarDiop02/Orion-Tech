"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="relative min-h-[100svh] flex flex-col items-center justify-center bg-midnight px-6 text-center">
      <p className="text-xs tracking-[0.3em] uppercase text-orion-gold mb-6">500</p>
      <h1 className="font-display text-4xl sm:text-6xl text-offwhite">SYSTEM INTERRUPTED.</h1>
      <p className="mt-6 max-w-md mx-auto text-orion-muted leading-relaxed">
        Something broke on our end. The signal will be restored shortly.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-orion-blue px-7 py-3.5 text-sm font-medium text-offwhite transition-colors hover:bg-orion-blue/90"
      >
        Try again
      </button>
    </main>
  );
}
