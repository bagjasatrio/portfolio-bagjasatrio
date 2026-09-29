"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { profile } from "../../../data/profile";
import { SECTION_IDS } from "@/lib/constants";

function AnimatedCounter({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    const duration = 1500;
    const steps = 40;
    const stepTime = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += target / steps;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target, prefersReducedMotion]);

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      id={SECTION_IDS.stats}
      ref={ref}
      className="py-section-sm md:py-section px-6 bg-accent-surface"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {profile.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </p>
              <p className="mt-2 text-sm md:text-base font-medium text-white/90">
                {stat.label}
              </p>
              <p className="mt-1 text-xs text-white/60">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
