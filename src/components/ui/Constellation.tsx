"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

type Node = { x: number; y: number; r: number; delay: number };

type ConstellationProps = {
  className?: string;
  density?: "hero" | "footer" | "cta";
  goldAccent?: boolean;
};

const LAYOUTS: Record<string, { nodes: Node[]; edges: [number, number][] }> = {
  hero: {
    nodes: [
      { x: 60, y: 60, r: 3, delay: 0 },
      { x: 150, y: 40, r: 2.5, delay: 0.2 },
      { x: 260, y: 90, r: 4, delay: 0.1 },
      { x: 200, y: 170, r: 2.5, delay: 0.4 },
      { x: 320, y: 200, r: 3, delay: 0.3 },
      { x: 110, y: 220, r: 2, delay: 0.5 },
      { x: 380, y: 130, r: 2.5, delay: 0.15 },
      { x: 40, y: 160, r: 2, delay: 0.6 },
      { x: 290, y: 310, r: 3.5, delay: 0.25 },
      { x: 170, y: 320, r: 2, delay: 0.45 },
      { x: 420, y: 260, r: 2.5, delay: 0.35 },
      { x: 230, y: 250, r: 2, delay: 0.55 },
    ],
    edges: [
      [0, 1],
      [1, 2],
      [2, 6],
      [2, 3],
      [3, 5],
      [3, 4],
      [4, 6],
      [4, 10],
      [5, 7],
      [5, 9],
      [4, 8],
      [8, 9],
      [8, 10],
      [9, 11],
      [3, 11],
    ],
  },
  cta: {
    nodes: [
      { x: 40, y: 80, r: 2.5, delay: 0 },
      { x: 140, y: 30, r: 3, delay: 0.2 },
      { x: 230, y: 70, r: 2, delay: 0.1 },
      { x: 300, y: 20, r: 2.5, delay: 0.3 },
      { x: 180, y: 130, r: 3.5, delay: 0.15 },
      { x: 80, y: 150, r: 2, delay: 0.4 },
      { x: 340, y: 110, r: 2.5, delay: 0.25 },
    ],
    edges: [
      [0, 1],
      [1, 2],
      [2, 3],
      [1, 4],
      [4, 5],
      [2, 6],
      [4, 6],
    ],
  },
  footer: {
    nodes: [
      { x: 10, y: 30, r: 2, delay: 0 },
      { x: 60, y: 10, r: 2.5, delay: 0.1 },
      { x: 100, y: 40, r: 1.8, delay: 0.2 },
      { x: 140, y: 15, r: 2, delay: 0.3 },
      { x: 80, y: 60, r: 2.2, delay: 0.15 },
    ],
    edges: [
      [0, 1],
      [1, 2],
      [2, 3],
      [1, 4],
      [2, 4],
    ],
  },
};

export default function Constellation({
  className,
  density = "hero",
  goldAccent = true,
}: ConstellationProps) {
  const layout = useMemo(() => LAYOUTS[density], [density]);
  const viewBox = density === "hero" ? "0 0 460 360" : density === "cta" ? "0 0 380 170" : "0 0 150 70";

  return (
    <svg
      viewBox={viewBox}
      className={className}
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        {layout.edges.map(([a, b], i) => {
          const na = layout.nodes[a];
          const nb = layout.nodes[b];
          return (
            <motion.line
              key={`edge-${i}`}
              x1={na.x}
              y1={na.y}
              x2={nb.x}
              y2={nb.y}
              stroke="url(#orion-line-gradient)"
              strokeWidth={1}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{ duration: 1.6, delay: 0.3 + i * 0.08, ease: "easeOut" }}
            />
          );
        })}
        {layout.nodes.map((node, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={node.x}
            cy={node.y}
            r={node.r}
            fill={goldAccent && i % 5 === 0 ? "var(--color-orion-gold)" : "var(--color-orion-cyan)"}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0.4, 1, 0.6], scale: 1 }}
            transition={{
              opacity: { duration: 3, delay: node.delay, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 0.6, delay: node.delay },
            }}
          />
        ))}
      </g>
      <defs>
        <linearGradient id="orion-line-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-orion-blue)" stopOpacity="0.1" />
          <stop offset="50%" stopColor="var(--color-orion-cyan)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="var(--color-orion-blue)" stopOpacity="0.1" />
        </linearGradient>
      </defs>
    </svg>
  );
}
