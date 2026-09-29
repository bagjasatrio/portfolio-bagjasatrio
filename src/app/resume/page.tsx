"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  Download,
  ArrowLeft,
  FileText,
  Mail,
  MapPin,
  Globe,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Sparkles,
  Award,
  Code2,
} from "lucide-react";
import { profile } from "../../../data/profile";
import { experiences, awards } from "../../../data/experience";
import { certifications } from "../../../data/certifications";
import { projects } from "../../../data/projects";
import { skills } from "../../../data/skills";
import { useLanguage } from "@/components/providers/LanguageProvider";

function RotatingActionText({ words }: { words: readonly string[] }) {
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [words.length, prefersReducedMotion]);

  // Find longest word to reserve proper width
  const longestWord = words.reduce(
    (a, b) => (a.length > b.length ? a : b),
    words[0] || ""
  );

  return (
    <span className="relative inline-block font-hand font-bold text-accent text-[1.2em] px-1 align-baseline text-left min-w-[90px] sm:min-w-[120px]">
      {words.map((word, i) => (
        <motion.span
          key={word}
          className="absolute left-0 text-accent font-hand font-bold tracking-wide"
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

export default function ResumePage() {
  const { language, t } = useLanguage();
  const confirmedSkills = skills.filter((s) => s.confirmed);
  const ibmCerts = certifications.filter((c) => c.publisher === "IBM");
  const otherCerts = certifications.filter((c) => c.publisher !== "IBM");

  return (
    <main className="min-h-dvh pt-24 pb-20 px-4 sm:px-6 bg-gradient-to-b from-background via-surface-elevated/40 to-[#0081E1]/10 print:pt-0 print:px-0 print:bg-white">
      <div className="mx-auto max-w-4xl">
        {/* Top Bar: Back Button */}
        <div className="flex items-center justify-start mb-8 print:hidden">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border/80 text-sm font-medium text-text-secondary hover:text-accent hover:border-accent shadow-sm transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.resume.backToHome}</span>
          </Link>
        </div>

        {/* Page Header: Sanjay Menon Style */}
        <div className="text-center mb-8 sm:mb-12 print:hidden">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">
            <span className="text-accent text-[10px]">◆</span>
            <span>RESUME</span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight lowercase">
            {t.resume.title}
          </h1>

          <p className="text-text-secondary text-sm sm:text-base max-w-xl mx-auto mt-3 leading-relaxed">
            {t.resume.subtitle}
          </p>

          {/* Action Buttons: Dual CV Download Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <a
              href="/CV_MUHAMMAD_BAGJA_SATRIO_ID.pdf"
              download
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-sm ${
                language === "id"
                  ? "bg-accent text-white hover:bg-accent-hover shadow-accent/25"
                  : "bg-surface border border-border/80 text-text-primary hover:border-accent hover:text-accent"
              }`}
            >
              <Download className="w-4 h-4" />
              <span>Download CV (ID)</span>
            </a>

            <a
              href="/CV_MUHAMMAD_BAGJA_SATRIO_EN.pdf"
              download
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-sm ${
                language === "en"
                  ? "bg-accent text-white hover:bg-accent-hover shadow-accent/25"
                  : "bg-surface border border-border/80 text-text-primary hover:border-accent hover:text-accent"
              }`}
            >
              <Download className="w-4 h-4" />
              <span>Download CV (EN)</span>
            </a>
          </div>
        </div>

        {/* Floating Paper Preview (A4 / Document Proportion) */}
        <div className="bg-white text-neutral-900 rounded-3xl p-6 sm:p-10 md:p-14 shadow-[0_20px_60px_-15px_rgba(0,129,225,0.18),0_10px_30px_-5px_rgba(0,0,0,0.06)] border border-neutral-200/90 print:shadow-none print:border-none print:p-0 my-6 sm:my-10 transition-all">
          {/* Document Header */}
          <header className="border-b border-neutral-200/80 pb-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
                  {profile.name}
                </h2>
                <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-accent mt-1.5 font-mono">
                  {profile.role}
                </p>
              </div>

              {/* Contact Info (2-column icon grid matching Sanjay Menon layout) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs text-neutral-600 font-mono">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-accent shrink-0" />
                  <a
                    href={`mailto:${profile.email}`}
                    className="hover:text-accent truncate"
                  >
                    {profile.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-accent shrink-0" />
                  <a
                    href={profile.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent"
                  >
                    bagjasatrio.vercel.app
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <ExternalLink className="w-3.5 h-3.5 text-accent shrink-0" />
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent"
                  >
                    linkedin.com/in/muhammadbagjasatrio
                  </a>
                </div>
              </div>
            </div>
          </header>

          {/* Section: SUMMARY */}
          <section className="border-b border-neutral-200/80 pb-8 mb-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-900 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>{t.resume.summaryTitle}</span>
            </h3>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              {language === "id" ? t.about.p1 : t.about.p1}
            </p>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed mt-2.5">
              {language === "id" ? t.about.p2 : t.about.p2}
            </p>
          </section>

          {/* Section: EXPERIENCE & EDUCATION */}
          <section className="border-b border-neutral-200/80 pb-8 mb-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-900 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>{t.experience.title}</span>
            </h3>

            <div className="space-y-6">
              {/* 1. Kominfo */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-sm sm:text-base text-neutral-900">
                      Frontend Website Developer
                    </h4>
                    <span className="text-xs text-neutral-500 font-normal">
                      · Dinas Kominfo Kota Semarang
                    </span>
                  </div>
                  <span className="text-xs font-mono text-neutral-500 shrink-0">
                    Jul 2025 – Aug 2025
                  </span>
                </div>
                <p className="text-xs text-accent font-medium mb-2">
                  Hybrid · Semarang, Indonesia
                </p>
                <ul className="space-y-1.5 text-xs text-neutral-600 pl-4 list-disc marker:text-accent">
                  <li>
                    Developed the official website interface for{" "}
                    <strong className="text-neutral-900">
                      Dinas Pemadam Kebakaran Kota Semarang
                    </strong>{" "}
                    with modular and responsive architecture.
                  </li>
                  <li>
                    Ensured{" "}
                    <strong className="text-neutral-900">
                      100% UI responsiveness
                    </strong>{" "}
                    across citizen mobile devices and command room desktops.
                  </li>
                  <li>
                    Implemented clean design tokens and client-side performance
                    optimizations.
                  </li>
                </ul>
              </div>

              {/* 2. Udinus */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-sm sm:text-base text-neutral-900">
                      S1 Teknik Informatika (Bachelor of Informatics Engineering)
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-neutral-500 shrink-0">
                    2022 – 2026
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs mb-2">
                  <span className="text-neutral-600 font-medium">
                    Universitas Dian Nuswantoro
                  </span>
                  <span className="text-accent font-semibold">
                    Angkatan 2022 · IPK 3.29
                  </span>
                </div>
                <ul className="space-y-1.5 text-xs text-neutral-600 pl-4 list-disc marker:text-accent">
                  <li>
                    Specialized in Full-Stack Web Development, Autonomous AI
                    Agents, and Machine Learning Systems.
                  </li>
                  <li>
                    Authored capstone projects on computer vision and AI video
                    clipping pipelines.
                  </li>
                </ul>
              </div>

              {/* 3. BASS Training */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                  <h4 className="font-bold text-sm sm:text-base text-neutral-900">
                    AI Literacy & Innovations (Honors & Recognition)
                  </h4>
                  <span className="text-xs font-mono text-neutral-500 shrink-0">
                    2025
                  </span>
                </div>
                <p className="text-xs text-neutral-600 mb-2">
                  BASS Training Center & Consultant
                </p>
                <ul className="space-y-1.5 text-xs text-neutral-600 pl-4 list-disc marker:text-accent">
                  <li>
                    Awarded recognition in{" "}
                    <strong className="text-neutral-900">
                      AI Literacy for Everyone: Understand, Apply, Create
                    </strong>
                    .
                  </li>
                  <li>
                    Engineered prompt-to-product workflows and multi-model routing
                    architectures.
                  </li>
                </ul>
              </div>

              {/* 4. SMA */}
              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                  <h4 className="font-bold text-sm sm:text-base text-neutral-900">
                    SMA MIPA
                  </h4>
                  <span className="text-xs font-mono text-neutral-500 shrink-0">
                    2019 – 2022
                  </span>
                </div>
                <p className="text-xs text-neutral-600">
                  SMA Negeri 2 Brebes · Final Grade: 81.43
                </p>
              </div>
            </div>
          </section>

          {/* Section: FEATURED PROJECTS */}
          <section className="border-b border-neutral-200/80 pb-8 mb-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-900 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>{t.work.label}</span>
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {projects.slice(0, 4).map((p) => (
                <div
                  key={p.id}
                  className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/60 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h4 className="font-bold text-xs sm:text-sm text-neutral-950">
                        {p.title.split(":")[0]}
                      </h4>
                      <span className="text-[10px] font-mono text-neutral-500">
                        {p.year}
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-600 line-clamp-2 leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-2 border-t border-neutral-200/70">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-medium bg-neutral-200/70 text-neutral-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: TECHNICAL SKILLS */}
          <section className="border-b border-neutral-200/80 pb-8 mb-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-900 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>{t.skills.label}</span>
            </h3>

            <div className="space-y-2.5 text-xs text-neutral-700">
              <div className="grid sm:grid-cols-[140px_1fr] gap-2">
                <span className="font-bold text-neutral-900">
                  Frontend & Mobile:
                </span>
                <span>
                  Next.js, React, TypeScript, Flutter, Dart, Tailwind CSS, HTML5,
                  CSS3, Motion.
                </span>
              </div>
              <div className="grid sm:grid-cols-[140px_1fr] gap-2">
                <span className="font-bold text-neutral-900">
                  Backend & Systems:
                </span>
                <span>
                  Python, FastAPI, PHP, Laravel, Node.js, RESTful APIs, Dart FFI.
                </span>
              </div>
              <div className="grid sm:grid-cols-[140px_1fr] gap-2">
                <span className="font-bold text-neutral-900">
                  AI & Inference:
                </span>
                <span>
                  Gemini API, Groq, 9Router, OpenRouter, Faster-Whisper (CUDA),
                  Whisper.cpp, MediaPipe.
                </span>
              </div>
              <div className="grid sm:grid-cols-[140px_1fr] gap-2">
                <span className="font-bold text-neutral-900">
                  DevOps & Tools:
                </span>
                <span>
                  Git, GitHub Actions, Docker, FFmpeg NVENC, Playwright, Linux,
                  PostgreSQL, MySQL.
                </span>
              </div>
            </div>
          </section>

          {/* Section: VERIFIED CERTIFICATIONS */}
          <section>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-900 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>{t.certifications.title}</span>
            </h3>

            <div className="grid sm:grid-cols-2 gap-3 text-xs">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="flex items-start justify-between gap-3 p-2.5 rounded-lg border border-neutral-200/80 bg-neutral-50/50"
                >
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-neutral-900 truncate">
                      {cert.title}
                    </p>
                    <p className="text-[10px] text-neutral-500 font-mono">
                      {cert.publisher} · {cert.year}
                    </p>
                  </div>
                  <a
                    href={`/certificates/${cert.pdfFile}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-accent font-medium hover:underline shrink-0 print:hidden flex items-center gap-0.5"
                  >
                    <span>PDF</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Bottom Call to Action (like Sanjay Menon's footer) */}
        <div className="text-center py-10 sm:py-14 print:hidden">
          <p className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-3">
            {t.contact.heading1}{" "}
            <RotatingActionText
              words={[t.contact.design, t.contact.build, t.contact.create]}
            />{" "}
            {t.contact.heading2}
          </p>
          <div className="mt-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white font-semibold text-sm hover:bg-accent-hover transition-all shadow-md shadow-blue-500/20"
            >
              <span>{t.hero.getInTouch}</span>
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
