"use client";

import { motion, useReducedMotion } from "motion/react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { profile } from "../../../data/profile";
import { SECTION_IDS } from "@/lib/constants";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function About() {
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id={SECTION_IDS.about}
      ref={ref}
      className="py-section-sm md:py-section px-6"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-10 md:gap-16 items-start">
          {/* Photo — polaroid style */}
          <motion.div
            className="relative mx-auto md:mx-0 w-64 md:w-80"
            initial={{ opacity: 0, rotate: -3 }}
            animate={
              inView
                ? { opacity: 1, rotate: -2 }
                : {}
            }
            whileHover={
              prefersReducedMotion
                ? {}
                : { rotate: 0, y: -8, scale: 1.02 }
            }
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-3 pb-12 rounded shadow-lg rotate-[-2deg] hover:rotate-0 transition-transform duration-300">
              <div className="w-full aspect-[3/4] rounded overflow-hidden relative">
                <Image
                  src="/images/about/about.png"
                  alt={`Photo of ${profile.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 256px, 320px"
                  priority
                />
              </div>
              <p className="mt-3 text-center text-sm text-neutral-400 font-body">
                {profile.aboutSignature}
              </p>
            </div>
          </motion.div>

          {/* Text */}
          <div>
            <motion.p
              className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              {t.about.label}
            </motion.p>
            <motion.h2
              className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {t.about.label === "Tentang Saya" ? "Sekilas Tentang Saya" : "A bit about me"}
            </motion.h2>

            <div className="space-y-4">
              {[t.about.p1, t.about.p2].map((paragraph, i) => (
                <motion.p
                  key={i}
                  className="text-text-secondary text-sm md:text-base leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + i * 0.1,
                  }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.p
              className="mt-6 font-display text-xl font-semibold text-text-primary italic"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              — {profile.aboutSignature}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
