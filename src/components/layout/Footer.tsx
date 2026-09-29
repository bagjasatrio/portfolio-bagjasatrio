"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Mail, Copy, Check, Download } from "lucide-react";
import { profile } from "../../../data/profile";
import { SITE_CONFIG, SECTION_IDS } from "@/lib/constants";
import { useLanguage } from "@/components/providers/LanguageProvider";

const NAV_ITEMS = [
  { key: "work" as const, href: "#work" },
  { key: "about" as const, href: "#about" },
  { key: "skills" as const, href: "#skills" },
  { key: "resume" as const, href: "/resume" },
];

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

export function Footer() {
  const { language, t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [copied, setCopied] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();

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
    <footer
      id={SECTION_IDS.contact}
      ref={ref}
      className="relative bg-gradient-to-b from-[#1B8AE5] via-[#1277CE] to-[#0A64B5] text-white overflow-hidden pt-28 sm:pt-36 md:pt-44 pb-12 sm:pb-16 border-t-0"
    >
      {/* Giant Background Watermark Text: BAGJA (Massive vertical room, sits gracefully behind clouds) */}
      <div
        aria-hidden="true"
        className="absolute bottom-24 sm:bottom-32 md:bottom-40 left-0 right-0 text-center font-display font-black text-[22vw] leading-none text-white/[0.08] tracking-widest uppercase select-none pointer-events-none z-0"
      >
        BAGJA
      </div>

      {/* Photorealistic Fluffy White Clouds at the Bottom Base */}
      <div className="absolute bottom-0 left-0 right-0 h-64 sm:h-80 md:h-96 overflow-hidden pointer-events-none z-[1] select-none">
        <Image
          src="/images/work/sky-clouds.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom opacity-75 mix-blend-screen brightness-110"
        />
        {/* Soft top gradient to blend clouds into the blue sky */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A64B5]/60 via-transparent to-[#1479CE]/20" />
      </div>

      {/* All Content (relative z-10) */}
      <div className="relative z-10 mx-auto max-w-[1380px] px-4 sm:px-6 md:px-8">
        {/* Upper Part: Get In Touch CTA & Floating Profile Card */}
        <div className="grid lg:grid-cols-[1.3fr_auto] gap-10 md:gap-16 items-center">
          {/* Left: Heading + Action Pills */}
          <div>
            <motion.p
              className="text-xs font-semibold uppercase tracking-[0.25em] text-white/75 mb-4"
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

          {/* Right: Floating Tilted Profile Card */}
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

              <div className="absolute bottom-3 left-3 right-3 text-center">
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-black/60 backdrop-blur-md text-white border border-white/20">
                  Bagja Satrio
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Generous Space: Gives the footer impressive height and breathing room */}
        <div className="my-24 sm:my-32 md:my-40" />

        {/* Lower Part: Email, Social, Menu */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 sm:gap-12">
          {/* Email Block */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60 font-mono mb-2">
              Email
            </p>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-base sm:text-lg font-bold text-white hover:text-white/80 transition-colors tracking-tight underline decoration-white/30 underline-offset-4"
            >
              {SITE_CONFIG.email}
            </a>
            <p className="text-xs text-white/70 mt-1 font-mono">
              {SITE_CONFIG.location}
            </p>
          </div>

          {/* Social Icons & Navigation Links */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-8 sm:gap-12">
            {/* Social Buttons */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60 font-mono mb-2.5">
                Social
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={SITE_CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white text-[#0081E1] flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-md shadow-blue-950/20 cursor-pointer"
                  aria-label="LinkedIn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href={SITE_CONFIG.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white text-[#0081E1] flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-md shadow-blue-950/20 cursor-pointer"
                  aria-label="GitHub"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation links */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60 font-mono mb-2.5">
                Menu
              </p>
              <ul className="flex flex-wrap gap-4 text-xs font-semibold text-white/80">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {t.nav[item.key]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Thin Translucent Divider Line */}
        <div className="w-full h-px bg-white/20 mt-12 sm:mt-16 mb-6" />

        {/* Bottom Metadata & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60 font-mono">
          <p>© {currentYear} {SITE_CONFIG.name}. {t.footer.allRights}</p>
          <p>{t.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
