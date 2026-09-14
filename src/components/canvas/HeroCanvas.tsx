"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Constellation from "@/components/ui/Constellation";

const OrionScene = dynamic(() => import("./OrionScene"), { ssr: false });

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl2") || canvas.getContext("webgl"))
    );
  } catch {
    return false;
  }
}

export default function HeroCanvas({ className }: { className?: string }) {
  const [use3D, setUse3D] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const isDesktop = window.innerWidth >= 1024;
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (isDesktop && !prefersReducedMotion && supportsWebGL()) {
        setUse3D(true);
      }
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  if (!use3D) {
    return <Constellation density="hero" className={className} />;
  }

  return (
    <div className={className}>
      <OrionScene />
    </div>
  );
}
