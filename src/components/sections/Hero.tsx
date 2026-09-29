"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { profile } from "../../../data/profile";
import { SECTION_IDS } from "@/lib/constants";
import { InteractiveChars } from "@/components/ui/InvertText";
import { useLanguage } from "@/components/providers/LanguageProvider";

function RotatingText({ words }: { words: readonly string[] }) {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length, prefersReducedMotion]);

  return (
    <span className="relative inline-block font-hand font-bold text-accent min-w-[140px] md:min-w-[220px] lg:min-w-[320px] px-1">
      {words.map((word, i) => (
        <motion.span
          key={word}
          className="absolute left-0 text-accent font-hand font-bold tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: i === index ? 1 : 0,
            y: i === index ? 0 : -20,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <InteractiveChars text={word} hoverColor="hover:text-white" />
        </motion.span>
      ))}
      <span className="invisible font-hand font-bold tracking-wide">{words[0]}</span>
    </span>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { t } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      id={SECTION_IDS.hero}
      className="relative min-h-dvh overflow-hidden"
    >
      {/* Fullscreen background photo with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={prefersReducedMotion ? {} : { y, scale }}
      >
        <Image
          src="/images/hero/background-hero.jpg"
          alt={`${profile.name} — hero portrait`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{
            objectPosition: "var(--hero-focus-x) var(--hero-focus-y)",
          }}
        />
      </motion.div>

      {/* Short bottom fade — pendek */}
      <div className="absolute bottom-0 left-0 right-0 h-28 z-[1] bg-gradient-to-t from-background to-transparent" />

      {/* LEFT-CENTER: greeting + headline + subtitle — all stacked on left */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10 px-6 md:px-10 lg:px-16 max-w-xl lg:max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 text-lg md:text-xl lg:text-2xl text-white/80 font-body">
            <motion.span
              animate={prefersReducedMotion ? {} : { rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 3,
              }}
              className="inline-block origin-[70%_70%] text-3xl md:text-4xl"
              aria-hidden="true"
            >
              👋
            </motion.span>
            <InteractiveChars text={t.hero.greeting} hoverColor="hover:text-accent" />
          </span>
        </motion.div>

        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white leading-[1.05] mt-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <InteractiveChars text="A " hoverColor="hover:text-accent" />
          <RotatingText words={t.hero.roles} />
          <br />
          <InteractiveChars text={t.hero.suffix} hoverColor="hover:text-accent" />
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl lg:text-2xl text-white/70 font-body leading-relaxed mt-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <InteractiveChars text={t.hero.subtitle} hoverColor="hover:text-accent" />
        </motion.p>
      </div>

      {/* BOTTOM-CENTER: CTA buttons */}
      <div className="absolute bottom-14 md:bottom-16 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-white font-semibold rounded-full hover:bg-accent-hover transition-colors text-base"
          >
            {t.hero.viewWork}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 backdrop-blur-sm transition-colors text-base"
          >
            {t.hero.getInTouch}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator — bottom-right */}
      <motion.div
        className="absolute bottom-6 right-6 md:right-12 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-white/60"
            animate={prefersReducedMotion ? {} : { y: [0, 12, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
