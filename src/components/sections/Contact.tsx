"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Mail, Copy, Check, Download, ArrowUpRight } from "lucide-react";
import { profile } from "../../../data/profile";
import { SITE_CONFIG, SECTION_IDS } from "@/lib/constants";
import { useLanguage } from "@/components/providers/LanguageProvider";

function RotatingActionWord({ words }: { words: readonly string[] }) {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [words.length, prefersReducedMotion]);

  const longestWord = words.reduce(
    (a, b) => (a.length > b.length ? a : b),
    words[0] || ""
  );

  return (
    <span className="relative inline-block font-hand font-bold text-white text-[1.18em] px-1.5 align-baseline text-left min-w-[110px] sm:min-w-[140px] md:min-w-[160px]">
      {words.map((word, i) => (
        <motion.span
          key={word}
          className="absolute left-0 text-white font-hand font-bold tracking-wide underline decoration-white/40 underline-offset-8"
          initial={{ opacity: 0, y: 15 }}
          animate={{
            opacity: i === index ? 1 : 0,
            y: i === index ? 0 : -15,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {word}
        </motion.span>
      ))}
      <span className="invisible font-hand font-bold tracking-wide">
        {longestWord}
      </span>
    </span>
  );
}

export function Contact() {
  const { language, t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const [copied, setCopied] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  const actionWords = [t.contact.design, t.contact.build, t.contact.create];

  return (
    <section
      id={SECTION_IDS.contact}
      ref={ref}
      className="relative pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-16 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-[#1B8AE5] to-[#1479CE] text-white overflow-hidden"
    >
      <div className="mx-auto max-w-[1380px]">
        <div className="grid lg:grid-cols-[1.25fr_auto] gap-10 md:gap-14 items-center">
          {/* Left Column: Heading + CTAs */}
          <div>
            <motion.p
              className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              {t.contact.label}
            </motion.p>

            {/* Main Headline: Sanjay Menon Style with Rotating Caveat Font */}
            <motion.h2
              className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.15] tracking-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span>{t.contact.heading1} </span>
              <RotatingActionWord words={actionWords} />
              <br className="hidden sm:inline" />
              <span> {t.contact.heading2}</span>
            </motion.h2>

            {/* Email + Copy + CV Pill Buttons */}
            <motion.div
              className="flex flex-wrap items-center gap-3.5"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#0081E1] font-semibold rounded-full hover:bg-white/95 hover:scale-105 active:scale-95 transition-all text-sm shadow-lg shadow-black/10"
              >
                <Mail className="w-4 h-4" />
                <span>{profile.email}</span>
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/40 text-white font-semibold rounded-full hover:bg-white/15 active:scale-95 transition-all text-sm backdrop-blur-sm cursor-pointer shadow-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-300" />
                    <span>{t.contact.copied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>{t.contact.copyEmail}</span>
                  </>
                )}
              </button>

              <a
                href={
                  language === "id"
                    ? "/CV_MUHAMMAD_BAGJA_SATRIO_ID.pdf"
                    : "/CV_MUHAMMAD_BAGJA_SATRIO_EN.pdf"
                }
                download
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/40 text-white font-semibold rounded-full hover:bg-white/15 active:scale-95 transition-all text-sm backdrop-blur-sm shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>{`${t.contact.downloadCv} (${language.toUpperCase()})`}</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Floating Tilted Profile Card (like Sanjay's card) */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              className={`relative w-48 sm:w-56 md:w-64 aspect-[4/5] rounded-3xl overflow-hidden border-2 border-white/60 shadow-[0_25px_60px_-10px_rgba(0,0,0,0.35)] transition-transform duration-500 ${
                prefersReducedMotion
                  ? ""
                  : "rotate-3 hover:rotate-0 hover:scale-105"
              } bg-white/10 backdrop-blur-md group`}
            >
              <Image
                src="/images/about/about.png"
                alt="Muhammad Bagja Satrio"
                fill
                sizes="(max-width: 768px) 220px, 260px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* Card stamp badge */}
              <div className="absolute bottom-3 left-3 right-3 text-center">
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-black/60 backdrop-blur-md text-white border border-white/20">
                  Bagja Satrio
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
