"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

interface SectionBackgroundProps {
  src: string;
  overlayClassName?: string;
  parallax?: boolean;
}

export default function SectionBackground({
  src,
  overlayClassName = "bg-midnight/80",
  parallax = false,
}: SectionBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {parallax ? (
        <motion.div style={{ y }} className="absolute -inset-y-[12%] inset-x-0">
          <Image src={src} alt="" fill loading="lazy" sizes="100vw" className="object-cover" />
        </motion.div>
      ) : (
        <Image src={src} alt="" fill loading="lazy" sizes="100vw" className="object-cover" />
      )}
      <div className={`absolute inset-0 ${overlayClassName}`} />
    </div>
  );
}
