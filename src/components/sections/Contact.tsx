"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { Mail, Copy, Check, ArrowUpRight, Download } from "lucide-react";
import { profile } from "../../../data/profile";
import { SITE_CONFIG, SECTION_IDS } from "@/lib/constants";
import { InteractiveChars } from "@/components/ui/InvertText";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Contact() {
  const { language, t } = useLanguage();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [copied, setCopied] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <section
      id={SECTION_IDS.contact}
      ref={ref}
      className="py-section-sm md:py-section px-6 bg-accent-surface overflow-hidden"
    >
      <div className="mx-auto max-w-5xl text-center">
        <motion.p
          className="text-xs font-medium uppercase tracking-[0.2em] text-white/60 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <InteractiveChars text={t.contact.label} hoverColor="hover:text-[#002B49]" />
        </motion.p>

        {/* Big CTA text */}
        <motion.h2
          className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.15] mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <InteractiveChars text={`${t.contact.heading1} `} hoverColor="hover:text-[#002B49]" />
          <span className="font-hand font-bold text-[1.15em] px-1 text-white inline-block align-baseline">
            <InteractiveChars text={t.contact.design} hoverColor="hover:text-[#002B49]" />
          </span>{" "}
          <InteractiveChars text="/" hoverColor="hover:text-[#002B49]" />{" "}
          <span className="font-hand font-bold text-[1.15em] px-1 text-white inline-block align-baseline">
            <InteractiveChars text={t.contact.build} hoverColor="hover:text-[#002B49]" />
          </span>{" "}
          <InteractiveChars text="/" hoverColor="hover:text-[#002B49]" />{" "}
          <span className="font-hand font-bold text-[1.15em] px-1 text-white inline-block align-baseline">
            <InteractiveChars text={t.contact.create} hoverColor="hover:text-[#002B49]" />
          </span>
          <br />
          <InteractiveChars text={t.contact.heading2} hoverColor="hover:text-[#002B49]" />
        </motion.h2>

        {/* Email + Copy + CV */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-accent font-medium rounded-full hover:bg-white/90 transition-colors text-sm"
          >
            <Mail className="w-4 h-4" />
            {profile.email}
          </a>
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors text-sm"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                {t.contact.copied}
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                {t.contact.copyEmail}
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
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors text-sm"
          >
            <Download className="w-4 h-4" />
            {`${t.contact.downloadCv} (${language.toUpperCase()})`}
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="mt-8 flex items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {SITE_CONFIG.socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors"
            >
              {social.label}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
