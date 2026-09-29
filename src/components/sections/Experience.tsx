"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useInView } from "react-intersection-observer";
import {
  GraduationCap,
  Briefcase,
  Award,
  BookOpen,
  MapPin,
  FileText,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { certifications } from "../../../data/certifications";
import { SECTION_IDS } from "@/lib/constants";
import { useLanguage } from "@/components/providers/LanguageProvider";

interface TimelineCardData {
  id: string;
  period: string;
  statusBadge?: string;
  isLatest?: boolean;
  datePosition: "top" | "bottom";
  tiltClass: string;
  title: string;
  organization: string;
  location: string;
  icon: typeof Briefcase;
  iconGradient: string;
  bullets: Array<{ text: string; bold: string }>;
}

const TIMELINE_DATA: TimelineCardData[] = [
  {
    id: "sman2",
    period: "2019 – 2022",
    statusBadge: "Nilai 81.43",
    isLatest: false,
    datePosition: "top",
    tiltClass: "hover:rotate-0 -rotate-1 md:-rotate-2",
    title: "SMA MIPA",
    organization: "SMA Negeri 2 Brebes",
    location: "Brebes, ID",
    icon: BookOpen,
    iconGradient: "from-emerald-400 to-teal-600",
    bullets: [
      {
        text: "dengan peminatan Matematika dan Ilmu Pengetahuan Alam.",
        bold: "Jurusan MIPA",
      },
      {
        text: "dan pemecahan masalah komputasional.",
        bold: "Fondasi logika algoritma",
      },
      {
        text: "sebagai bekal studi rekayasa informatika.",
        bold: "Aktif dalam sains terapan",
      },
    ],
  },
  {
    id: "udinus",
    period: "2022 – 2026",
    statusBadge: "Angkatan 2022 • IPK 3.29",
    isLatest: false,
    datePosition: "bottom",
    tiltClass: "hover:rotate-0 rotate-1 md:rotate-2",
    title: "S1 Teknik Informatika",
    organization: "Universitas Dian Nuswantoro",
    location: "Semarang, ID",
    icon: GraduationCap,
    iconGradient: "from-sky-500 to-blue-600",
    bullets: [
      {
        text: "Universitas Dian Nuswantoro (IPK 3.29, Angkatan 2022).",
        bold: "Sarjana Teknik Informatika",
      },
      {
        text: "Autonomous AI Agents, dan Rekayasa Perangkat Lunak.",
        bold: "Fokus Full-Stack Web Development,",
      },
      {
        text: "pada computer vision dan AI video clipping pipeline.",
        bold: "Menyelesaikan proyek skripsi/tugas akhir",
      },
    ],
  },
  {
    id: "bass-award",
    period: "2025",
    statusBadge: "AI Honors & Award",
    isLatest: false,
    datePosition: "top",
    tiltClass: "hover:rotate-0 -rotate-1 md:-rotate-2",
    title: "AI Literacy & Innovations",
    organization: "BASS Training Center & Consultant",
    location: "Indonesia",
    icon: Award,
    iconGradient: "from-amber-400 to-orange-500",
    bullets: [
      {
        text: "dalam implementasi praktis kecerdasan buatan generatif.",
        bold: "AI Literacy for Everyone: Understand, Apply, Create",
      },
      {
        text: "dan arsitektur multi-provider routing (Gemini, Groq, 9Router).",
        bold: "Merancang pipeline otomasi AI",
      },
      {
        text: "yang efisien, andal, dan siap produksi.",
        bold: "Implementasi agen otonom",
      },
    ],
  },
  {
    id: "kominfo",
    period: "Jul '25 – Aug '25",
    statusBadge: "Latest Role",
    isLatest: true,
    datePosition: "bottom",
    tiltClass: "hover:rotate-0 rotate-1 md:rotate-2",
    title: "Frontend Website Developer",
    organization: "Dinas Kominfo Kota Semarang",
    location: "Semarang, ID",
    icon: Briefcase,
    iconGradient: "from-blue-500 to-indigo-600",
    bullets: [
      {
        text: "antarmuka situs resmi Dinas Pemadam Kebakaran Kota Semarang.",
        bold: "Mengembangkan arsitektur modular",
      },
      {
        text: "lintas perangkat smartphone warga hingga desktop command room.",
        bold: "Menjamin 100% responsivitas UI",
      },
      {
        text: "dan optimalisasi performa rendering sisi klien.",
        bold: "Standardisasi design token",
      },
    ],
  },
];

function CertificationCard({
  cert,
  index,
}: {
  cert: (typeof certifications)[number];
  index: number;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="group relative rounded-2xl bg-surface border border-border/60 p-5 hover:border-accent/40 hover:shadow-[0_10px_30px_rgba(0,129,225,0.08)] transition-all duration-300 flex flex-col justify-between"
    >
      <div className="flex items-start gap-3.5">
        <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 text-accent group-hover:scale-110 transition-transform">
          <FileText className="w-5 h-5" />
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="text-sm font-semibold text-text-primary line-clamp-2 leading-snug group-hover:text-accent transition-colors">
            {cert.title}
          </h4>
          <p className="text-xs text-text-tertiary mt-1.5 font-mono">
            {cert.publisher} · {cert.year}
          </p>
        </div>
      </div>
      <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-xs">
        <a
          href={`/certificates/${cert.pdfFile}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-semibold text-accent hover:underline"
        >
          View PDF <ExternalLink className="w-3 h-3" />
        </a>
        <a
          href={`/certificates/${cert.pdfFile}`}
          download
          className="text-text-tertiary hover:text-text-primary transition-colors"
        >
          Download
        </a>
      </div>
    </motion.div>
  );
}

export function Experience() {
  const { t, language } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-driven horizontal shift
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Translate cards smoothly as user scrolls down the section
  const x = useTransform(scrollYProgress, [0.05, 0.92], ["0%", "-50%"]);
  const progressScale = useTransform(scrollYProgress, [0.05, 0.92], [0.05, 1]);

  const ibmCerts = certifications.filter((c) => c.publisher === "IBM");
  const otherCerts = certifications.filter((c) => c.publisher !== "IBM");

  return (
    <>
      {/* 1. Horizontal Scroll-Driven Experience Timeline */}
      <section
        id={SECTION_IDS.experience}
        ref={sectionRef}
        className="relative bg-background overflow-x-clip"
        style={{
          height: prefersReducedMotion ? "auto" : "220vh",
        }}
      >
        {/* Sticky Viewport Container: stays pinned while scrolling down */}
        <div
          className={
            prefersReducedMotion
              ? "py-section-sm px-4 sm:px-6"
              : "sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-4"
          }
        >
          <div className="mx-auto w-full max-w-[1380px] px-4 sm:px-6 md:px-8">
            {/* Section Header: Minimalist style matching What I Do & Skills */}
            <div className="mb-8 sm:mb-10">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-4">
                {t.experience.label}
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary tracking-tight mb-3">
                {t.experience.title}
              </h2>
              <p className="text-text-secondary text-sm sm:text-base max-w-2xl leading-relaxed">
                {t.experience.subtitle}
              </p>
            </div>

          {/* Horizontal Track with scroll-driven sliding */}
          <div className="relative py-4 sm:py-6 overflow-hidden">
            {/* Horizontal guide line that fills as you scroll */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-border/40 z-0 rounded-full overflow-hidden">
              {!prefersReducedMotion && (
                <motion.div
                  style={{ scaleX: progressScale }}
                  className="h-full bg-accent origin-left"
                />
              )}
            </div>

            {/* Sliding Cards Container */}
            <motion.div
              style={prefersReducedMotion ? {} : { x }}
              className="flex items-center gap-6 sm:gap-8 md:gap-12 pl-4 sm:pl-10 md:pl-16 pr-12 md:pr-32 w-max"
            >
              {TIMELINE_DATA.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className="shrink-0 relative flex flex-col items-center select-none"
                  >
                    {/* Top Date Badge (if datePosition === 'top') */}
                    {item.datePosition === "top" ? (
                      <div className="mb-3 sm:mb-4 flex flex-col items-center">
                        <div
                          className={`px-3.5 py-1 rounded-full text-xs font-semibold shadow-sm flex items-center gap-1.5 border ${
                            item.isLatest
                              ? "bg-emerald-50 text-emerald-700 border-emerald-300"
                              : "bg-surface-elevated text-text-secondary border-border/80"
                          }`}
                        >
                          {item.isLatest && (
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          )}
                          <span>{item.period}</span>
                          {item.statusBadge && (
                            <span className="opacity-75 text-[10px]">
                              • {item.statusBadge}
                            </span>
                          )}
                        </div>
                        {/* Vertical connector stem to card */}
                        <div
                          className={`w-0.5 h-3.5 ${
                            item.isLatest ? "bg-emerald-400" : "bg-accent/40"
                          }`}
                        />
                        <div
                          className={`w-2.5 h-2.5 rounded-full border-2 border-white ${
                            item.isLatest ? "bg-emerald-500" : "bg-accent"
                          } shadow-sm`}
                        />
                      </div>
                    ) : (
                      // Spacer for top
                      <div className="h-9 sm:h-11" />
                    )}

                    {/* Main Card — Tilted with Stamp aesthetics */}
                    <div
                      className={`relative w-[310px] sm:w-[350px] md:w-[380px] rounded-3xl p-5 sm:p-6 md:p-7 bg-surface border border-border/70 shadow-[0_12px_36px_rgba(0,0,0,0.06)] hover:shadow-[0_22px_45px_rgba(0,129,225,0.15)] hover:border-accent/40 transition-all duration-300 ${
                        prefersReducedMotion ? "" : item.tiltClass
                      } z-10`}
                    >
                      {/* Top Row: Logo Stamp + Title & Organization */}
                      <div className="flex items-start justify-between gap-3 mb-3.5">
                        <div className="flex items-start gap-3">
                          {/* Stamp Icon */}
                          <div
                            className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br ${item.iconGradient} flex items-center justify-center text-white shadow-md shadow-blue-500/15 shrink-0`}
                          >
                            <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                          </div>
                          <div>
                            <h3 className="font-display text-sm sm:text-base font-bold text-text-primary leading-tight">
                              {item.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-accent font-medium mt-0.5">
                              {item.organization}
                            </p>
                          </div>
                        </div>

                        {/* Location chip */}
                        <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-text-tertiary font-mono shrink-0">
                          <MapPin size={11} className="text-accent" />
                          <span>{item.location}</span>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="w-full h-px bg-border/60 my-3.5" />

                      {/* Bullet Points with Bold highlights */}
                      <ul className="space-y-2 text-xs sm:text-sm text-text-secondary leading-relaxed">
                        {item.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <span className="text-accent text-base leading-none select-none mt-0.5">
                              •
                            </span>
                            <span>
                              <strong className="font-semibold text-text-primary">
                                {b.bold}{" "}
                              </strong>
                              {b.text}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Date Badge (if datePosition === 'bottom') */}
                    {item.datePosition === "bottom" ? (
                      <div className="mt-3 sm:mt-4 flex flex-col items-center">
                        <div
                          className={`w-2.5 h-2.5 rounded-full border-2 border-white ${
                            item.isLatest ? "bg-emerald-500" : "bg-accent"
                          } shadow-sm`}
                        />
                        <div
                          className={`w-0.5 h-3.5 ${
                            item.isLatest ? "bg-emerald-400" : "bg-accent/40"
                          }`}
                        />
                        <div
                          className={`px-3.5 py-1 rounded-full text-xs font-semibold shadow-sm flex items-center gap-1.5 border ${
                            item.isLatest
                              ? "bg-emerald-50 text-emerald-700 border-emerald-300"
                              : "bg-surface-elevated text-text-secondary border-border/80"
                          }`}
                        >
                          {item.isLatest && (
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          )}
                          <span>{item.period}</span>
                          {item.statusBadge && (
                            <span className="opacity-75 text-[10px]">
                              • {item.statusBadge}
                            </span>
                          )}
                        </div>
                      </div>
                    ) : (
                      // Spacer for bottom
                      <div className="h-9 sm:h-11" />
                    )}
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>

    {/* 2. Certifications & Credentials Gallery — Completely independent section below */}
    <section
      id="certifications"
      className="relative z-10 py-20 md:py-28 px-4 sm:px-6 md:px-8 border-t border-border/60 bg-background"
    >
      <div className="mx-auto max-w-[1380px]">
        {/* Section Header: Minimalist style matching What I Do & Skills */}
        <div className="mb-10 sm:mb-12">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-4">
            {t.certifications.label}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-3">
            {t.certifications.title}
          </h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-2xl leading-relaxed">
            {certifications.length} {t.certifications.subtitle}
          </p>
        </div>

        {/* IBM Certifications */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-text-tertiary mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent" />
            IBM Certified ({ibmCerts.length})
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {ibmCerts.map((cert, i) => (
              <CertificationCard key={cert.id} cert={cert} index={i} />
            ))}
          </div>
        </div>

        {/* Other Certifications */}
        {otherCerts.length > 0 && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-text-tertiary mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Additional Credentials ({otherCerts.length})
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {otherCerts.map((cert, i) => (
                <CertificationCard key={cert.id} cert={cert} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  </>
);
}
