"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const AnimatedStat = ({
  end,
  suffix = "",
  label,
  delay = 0,
  duration = 2,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });
  const [value, setValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;
    hasAnimated.current = true;

    let frameId;
    const delayMs = delay * 1000;
    const startAt = performance.now() + delayMs;

    const run = (now) => {
      if (now < startAt) {
        frameId = requestAnimationFrame(run);
        return;
      }

      const elapsed = now - startAt;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      setValue(Math.round(easeOutCubic(progress) * end));

      if (progress < 1) {
        frameId = requestAnimationFrame(run);
      }
    };

    frameId = requestAnimationFrame(run);
    return () => cancelAnimationFrame(frameId);
  }, [isInView, end, delay, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className="flex flex-col items-center justify-center group"
    >
      <motion.span
        className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-[#FF7782] to-[#a13f48] tabular-nums"
        animate={isInView ? { scale: [1, 1.06, 1] } : { scale: 1 }}
        transition={{
          delay: delay + duration * 0.85,
          duration: 0.45,
          ease: "easeOut",
        }}
      >
        {value}
        {suffix}
      </motion.span>
      <span className="text-sm md:text-base font-medium mt-2 opacity-90 tracking-wide uppercase">
        {label}
      </span>
    </motion.div>
  );
};

export default AnimatedStat;
