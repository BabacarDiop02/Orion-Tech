"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const [transitioning, setTransitioning] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setTransitioning(false), 500);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <>
      {transitioning && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="pointer-events-none fixed inset-0 z-[9998] flex items-center justify-center bg-midnight"
          aria-hidden="true"
        >
          <span className="font-display text-xs tracking-[0.4em] text-orion-cyan">ORION</span>
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
