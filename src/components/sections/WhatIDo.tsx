"use client";

import { motion, useReducedMotion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { SECTION_IDS } from "@/lib/constants";
import { InteractiveChars } from "@/components/ui/InvertText";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function WhatIDo() {
  const prefersReducedMotion = useReducedMotion();
  const { t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      id={SECTION_IDS.whatIDo}
      ref={ref}
      className="py-section-sm md:py-section px-6"
    >
      <div className="mx-auto max-w-5xl">
        <motion.p
          className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <InteractiveChars text={t.whatIDo.label} hoverColor="hover:text-text-primary" />
        </motion.p>
        <motion.h2
          className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-[1.25] text-balance"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: prefersReducedMotion ? 0 : 0.15 }}
        >
          {t.whatIDo.segments.map((seg, idx) =>
            seg.highlight ? (
              <span
                key={idx}
                className="font-hand font-bold text-accent text-[1.18em] inline-block tracking-normal align-baseline px-0.5"
              >
                <InteractiveChars text={seg.text} hoverColor="hover:text-text-primary" />
              </span>
            ) : (
              <InteractiveChars
                key={idx}
                text={seg.text}
                hoverColor="hover:text-accent"
              />
            )
          )}
        </motion.h2>
      </div>
    </section>
  );
}
