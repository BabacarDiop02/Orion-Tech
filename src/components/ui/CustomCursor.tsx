"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 30, stiffness: 400, mass: 0.4 });
  const springY = useSpring(cursorY, { damping: 30, stiffness: 400, mass: 0.4 });

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!isFinePointer || prefersReducedMotion) return;

    document.documentElement.classList.add("has-custom-cursor");

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [data-cursor-hover]");
      const projectLabel = target.closest("[data-cursor-label]") as HTMLElement | null;
      setHovering(Boolean(interactive));
      setLabel(projectLabel?.dataset.cursorLabel ?? null);
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="orion-cursor pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference items-center justify-center"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <motion.div
        animate={{
          width: label ? 96 : hovering ? 44 : 14,
          height: label ? 96 : hovering ? 44 : 14,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="rounded-full border border-offwhite bg-offwhite/90 flex items-center justify-center"
      >
        {label && (
          <span className="text-[9px] font-display tracking-[0.15em] text-midnight text-center leading-tight uppercase">
            {label}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
}
