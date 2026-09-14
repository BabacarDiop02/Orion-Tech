"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NODES = [
  { x: 40, y: 30 },
  { x: 90, y: 15 },
  { x: 130, y: 45 },
  { x: 100, y: 80 },
  { x: 55, y: 75 },
  { x: 20, y: 55 },
];

const EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 0],
  [1, 3],
];

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    const alreadyBooted = sessionStorage.getItem("orion-booted");

    if (alreadyBooted) {
      const timeout = window.setTimeout(() => {
        setSkip(true);
        setVisible(false);
      }, 0);
      return () => window.clearTimeout(timeout);
    }

    sessionStorage.setItem("orion-booted", "1");

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const delay = prefersReducedMotion ? 200 : 1700;
    const timeout = window.setTimeout(() => setVisible(false), delay);
    return () => window.clearTimeout(timeout);
  }, []);

  if (skip) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-midnight"
          aria-hidden="true"
        >
          <svg viewBox="0 0 150 100" className="w-28 h-20" fill="none">
            {EDGES.map(([a, b], i) => (
              <motion.line
                key={i}
                x1={NODES[a].x}
                y1={NODES[a].y}
                x2={NODES[b].x}
                y2={NODES[b].y}
                stroke="var(--color-orion-cyan)"
                strokeOpacity={0.6}
                strokeWidth={1}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              />
            ))}
            {NODES.map((n, i) => (
              <motion.circle
                key={i}
                cx={n.x}
                cy={n.y}
                r={i === 0 ? 3.5 : 2.5}
                fill={i === 0 ? "var(--color-orion-gold)" : "var(--color-orion-cyan)"}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              />
            ))}
          </svg>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-6 font-display text-sm tracking-[0.3em] text-offwhite"
          >
            ORION
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="mt-2 text-[10px] tracking-[0.25em] uppercase text-orion-muted"
          >
            Initialisation du système<span className="animate-blink">...</span>
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
