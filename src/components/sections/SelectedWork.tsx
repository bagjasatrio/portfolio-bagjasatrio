"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ArrowUpRight, Play, CheckCircle2, ShieldCheck, Zap, Sparkles, Terminal, Smartphone, BarChart3, Bot, QrCode } from "lucide-react";
import { projects, type Project } from "../../../data/projects";
import { SECTION_IDS } from "@/lib/constants";
import { useLanguage } from "@/components/providers/LanguageProvider";

function ProjectVisualMockup({ project }: { project: Project }) {
  if (project.id === "clipmax") {
    return (
      <div className="relative w-full max-w-md mx-auto aspect-[4/3] rounded-2xl bg-neutral-950/85 backdrop-blur-xl border border-white/20 p-4 shadow-2xl flex flex-col justify-between text-white overflow-hidden group">
        {/* App header bar */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            <span className="ml-2 text-xs font-mono text-white/60">clipmax-studio.py</span>
          </div>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-accent/20 text-accent font-semibold">
            CUDA ON
          </span>
        </div>

        {/* Video viewport + 9:16 crop frame */}
        <div className="relative flex-1 my-3 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center overflow-hidden">
          {/* 9:16 vertical crop guide */}
          <div className="relative w-28 h-44 rounded-md border-2 border-accent/80 bg-accent/10 flex flex-col justify-between p-2 shadow-[0_0_20px_rgba(0,129,225,0.3)]">
            <span className="text-[9px] font-mono text-accent font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              9:16 REC
            </span>
            {/* Face bbox */}
            <div className="w-12 h-12 mx-auto rounded border border-dashed border-white/80 flex items-center justify-center">
              <span className="text-[8px] font-mono text-white/90">98% face</span>
            </div>
            {/* Subtitle preview */}
            <div className="bg-black/80 px-1.5 py-0.5 rounded text-center">
              <p className="text-[8px] text-white font-medium truncate">&ldquo;Autonomous AI video&rdquo;</p>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute top-2 right-2 bg-black/80 border border-white/10 rounded px-2 py-1 flex items-center gap-1.5">
            <Zap className="w-3 h-3 text-yellow-400" />
            <span className="text-[10px] font-mono text-white/80">NVENC 60fps</span>
          </div>
        </div>

        {/* Bottom audio timeline & controls */}
        <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center text-white">
              <Play className="w-2.5 h-2.5 fill-current" />
            </div>
            <span className="text-[10px] font-mono text-white/70">85 tests passing</span>
          </div>
          <span className="text-[10px] font-mono text-accent font-semibold">
            Universal LLM Gateway
          </span>
        </div>
      </div>
    );
  }

  if (project.id === "clipmax-mobile") {
    return (
      <div className="relative w-full max-w-[280px] mx-auto aspect-[9/18] rounded-[36px] bg-neutral-950 border-[6px] border-neutral-800 p-3 shadow-2xl flex flex-col justify-between text-white overflow-hidden">
        {/* Dynamic island */}
        <div className="w-24 h-4 rounded-full bg-black mx-auto mb-3 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-neutral-800 mr-2" />
        </div>

        {/* Video editor screen */}
        <div className="flex-1 rounded-2xl bg-gradient-to-b from-blue-950/60 to-black p-3 flex flex-col justify-between border border-white/10">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-bold text-white">ClipMax Mobile</span>
            <span className="px-2 py-0.5 rounded-full text-[9px] bg-accent/30 text-accent font-semibold">
              120 FPS
            </span>
          </div>

          <div className="my-auto text-center space-y-2">
            <div className="w-16 h-16 rounded-full bg-accent/20 border border-accent/40 mx-auto flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-accent animate-pulse" />
            </div>
            <p className="text-xs font-semibold text-white">On-Device AI Clipping</p>
            <p className="text-[10px] text-white/60">Whisper.cpp via Dart FFI</p>
          </div>

          {/* Timeline tracks */}
          <div className="space-y-1.5 bg-black/60 p-2 rounded-xl border border-white/10">
            <div className="h-2 w-full rounded-full bg-accent/40 relative overflow-hidden">
              <div className="h-full w-2/3 bg-accent" />
            </div>
            <div className="flex justify-between text-[9px] font-mono text-white/50">
              <span>00:15</span>
              <span className="text-accent font-semibold">Clip 01 Generated</span>
              <span>00:45</span>
            </div>
          </div>
        </div>

        {/* Bottom home indicator */}
        <div className="w-24 h-1 rounded-full bg-white/40 mx-auto mt-2" />
      </div>
    );
  }

  if (project.id === "job-automation") {
    return (
      <div className="relative w-full max-w-md mx-auto rounded-2xl bg-neutral-950/85 backdrop-blur-xl border border-white/20 p-5 shadow-2xl flex flex-col gap-4 text-white">
        {/* Top header */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Bot className="w-4 h-4 text-accent" />
            <span className="text-xs font-semibold">Career Co-Pilot Engine</span>
          </div>
          <span className="flex items-center gap-1 text-[10px] font-mono text-green-400">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
            Active
          </span>
        </div>

        {/* ATS score gauge card */}
        <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
          <div>
            <p className="text-[10px] text-white/60 uppercase tracking-wider font-mono">ATS Match Score</p>
            <p className="text-2xl font-bold font-display text-white">94%</p>
            <p className="text-[10px] text-accent">Exceeds 75% threshold</p>
          </div>
          <div className="w-12 h-12 rounded-full border-4 border-accent flex items-center justify-center font-bold text-xs text-white">
            A+
          </div>
        </div>

        {/* Connected portals */}
        <div className="space-y-1.5">
          <p className="text-[10px] font-mono text-white/60">Automated Portals & Sync</p>
          <div className="grid grid-cols-3 gap-2">
            {["LinkedIn", "Glints", "Jobstreet"].map((portal) => (
              <div key={portal} className="px-2 py-1.5 rounded-lg bg-white/5 border border-white/10 text-center">
                <span className="text-[10px] font-medium text-white/80">{portal}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Telegram notification preview */}
        <div className="p-2.5 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
          </div>
          <div className="text-[10px] truncate">
            <p className="font-semibold text-white">Telegram Remote Dispatched</p>
            <p className="text-white/60 truncate">Tailored Cover Letter & CV to HRD</p>
          </div>
        </div>
      </div>
    );
  }

  if (project.id === "cvkita") {
    return (
      <div className="relative w-full max-w-md mx-auto rounded-2xl bg-neutral-950/85 backdrop-blur-xl border border-white/20 p-5 shadow-2xl flex flex-col gap-4 text-white">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs font-semibold">CVKita AI Platform</span>
          </div>
          <span className="text-[10px] font-mono bg-accent/20 text-accent px-2 py-0.5 rounded font-semibold">
            Live Vercel
          </span>
        </div>

        {/* Resume preview card */}
        <div className="rounded-xl bg-white text-neutral-900 p-4 shadow-lg space-y-2">
          <div className="flex justify-between items-start border-b border-neutral-200 pb-2">
            <div>
              <p className="font-bold text-sm">Muhammad Bagja Satrio</p>
              <p className="text-[10px] text-accent font-medium">Full-Stack Web Developer & AI Engineer</p>
            </div>
            <div className="text-right">
              <span className="text-[10px] px-2 py-0.5 rounded bg-green-100 text-green-700 font-bold font-mono">
                ATS: 98/100
              </span>
            </div>
          </div>
          <div className="space-y-1">
            <div className="h-1.5 w-full rounded bg-neutral-100" />
            <div className="h-1.5 w-4/5 rounded bg-neutral-100" />
          </div>
          <div className="flex gap-1.5 pt-1">
            {["Next.js", "Python", "FastAPI", "Groq"].map((tag) => (
              <span key={tag} className="text-[9px] px-1.5 py-0.5 rounded bg-neutral-100 text-neutral-600 font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <p className="text-[10px] font-mono text-white/60 text-center">
          Tailored to target job qualifications with zero fluff
        </p>
      </div>
    );
  }

  if (project.id === "tb-losari") {
    return (
      <div className="relative w-full max-w-md mx-auto rounded-2xl bg-neutral-950/85 backdrop-blur-xl border border-white/20 p-5 shadow-2xl flex flex-col gap-4 text-white">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-accent" />
            <span className="text-xs font-semibold">TB. Losari Jaya 2 System</span>
          </div>
          <span className="text-[10px] font-mono bg-green-500/20 text-green-400 px-2 py-0.5 rounded font-semibold">
            POS Active
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-xl bg-white/5 border border-white/10">
            <p className="text-[10px] text-white/60 font-mono">Total Inventory</p>
            <p className="text-xl font-bold font-display text-white mt-1">1,248 Items</p>
            <p className="text-[10px] text-green-400 mt-1">Real-time sync</p>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/10">
            <p className="text-[10px] text-white/60 font-mono">Kasir / POS</p>
            <p className="text-xl font-bold font-display text-white mt-1">Rp 18.4M</p>
            <p className="text-[10px] text-accent mt-1">Bulan Berjalan</p>
          </div>
        </div>

        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs">
          <span className="text-[10px] text-white/70">Barcode Scanner & Invoice Printer</span>
          <span className="text-[10px] font-mono text-accent font-semibold">Connected</span>
        </div>
      </div>
    );
  }

  // Starfall Store
  return (
    <div className="relative w-full max-w-md mx-auto rounded-2xl bg-neutral-950/85 backdrop-blur-xl border border-white/20 p-5 shadow-2xl flex flex-col gap-4 text-white">
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <QrCode className="w-4 h-4 text-accent" />
          <span className="text-xs font-semibold">Starfall Store Gateway</span>
        </div>
        <span className="text-[10px] font-mono bg-green-500/20 text-green-400 px-2 py-0.5 rounded font-semibold">
          Instant Webhook
        </span>
      </div>

      <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold text-white">Mobile Legends 1,000 💎</p>
          <p className="text-[10px] text-white/60 font-mono mt-0.5">Payment Method: QRIS Instant</p>
          <p className="text-sm font-bold text-accent mt-2">Rp 245.000</p>
        </div>
        <div className="w-16 h-16 rounded-lg bg-white p-1 flex items-center justify-center">
          <QrCode className="w-12 h-12 text-black" />
        </div>
      </div>

      <div className="flex items-center justify-between text-[10px] font-mono text-white/70 px-1">
        <span>Status: Transaksi Berhasil</span>
        <span className="text-green-400 font-semibold">200 OK</span>
      </div>
    </div>
  );
}

function StackedProjectCard({
  project,
  index,
  viewCaseLabel,
}: {
  project: Project;
  index: number;
  viewCaseLabel: string;
}) {
  return (
    <div
      className="sticky mb-10 md:mb-14 last:mb-0 transition-all duration-300"
      style={{
        // Stacking offset: each card peeks out above the next one
        top: `calc(5.5rem + ${index * 1.5}rem)`,
        zIndex: index + 1,
      }}
    >
      <div className="relative w-full rounded-[28px] sm:rounded-[36px] overflow-hidden border border-white/60 shadow-[0_-12px_36px_rgba(0,129,225,0.2),0_25px_50px_-12px_rgba(0,107,192,0.3)] min-h-[520px] md:min-h-[560px] flex items-center bg-[#1B8AE5]">
        {/* Photographic bright sky backdrop with pure white clouds matching website palette #1B8AE5 / #0081E1 */}
        <Image
          src="/images/work/sky-clouds.jpg"
          alt="Website palette blue sky with white clouds"
          fill
          sizes="(max-width: 1400px) 100vw, 1400px"
          className="object-cover pointer-events-none select-none"
          priority={index === 0}
        />

        {/* Soft daylight ambient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/15 via-transparent to-white/10 pointer-events-none" />

        {/* 2-Column Responsive Layout */}
        <div className="relative z-10 w-full p-6 sm:p-8 md:p-12 grid lg:grid-cols-[1.1fr_1fr] gap-8 md:gap-12 items-center">
          {/* Left: Frosted Glass Panel */}
          <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-9 bg-white/25 backdrop-blur-2xl border border-white/50 shadow-[inset_0_1px_2px_rgba(255,255,255,0.85),0_20px_40px_rgba(0,129,225,0.22)] text-white flex flex-col justify-between min-h-[380px]">
            {/* Top metadata */}
            <div className="flex items-center justify-between mb-4">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-white/35 text-white backdrop-blur-md border border-white/50 shadow-sm">
                {project.number}
              </span>
              <span className="text-xs md:text-sm font-mono text-white font-semibold tracking-wider drop-shadow-sm">
                {project.year}
              </span>
            </div>

            {/* Headline */}
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight mt-1 drop-shadow-sm">
              {project.title}
            </h3>

            {/* Divider line */}
            <div className="w-full h-px bg-white/35 my-4 sm:my-5" />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-semibold rounded-full bg-white/25 text-white border border-white/45 backdrop-blur-sm shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-white text-sm sm:text-base leading-relaxed mb-6 font-medium drop-shadow-sm">
              {project.description}
            </p>

            {/* Action button */}
            <div className="pt-1">
              <Link
                href={`/work/${project.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-accent font-semibold text-sm hover:bg-white/95 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-blue-900/15"
              >
                <span>{viewCaseLabel}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right: Product UI Mockup */}
          <div className="w-full flex items-center justify-center">
            <ProjectVisualMockup project={project} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function SelectedWork() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={containerRef}
      id={SECTION_IDS.work}
      className="py-section-sm md:py-section px-4 sm:px-6 md:px-8 bg-background"
    >
      <div className="mx-auto max-w-[1380px]">
        {/* Section Header: Minimalist style matching What I Do & Skills */}
        <div className="mb-10 sm:mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-4">
            {t.work.label}
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-3">
            {t.work.label === "Proyek Pilihan" ? "Karya yang Telah Saya Bangun" : "Projects I've built"}
          </h2>
          <p className="text-text-secondary text-sm sm:text-base max-w-2xl leading-relaxed">
            {t.work.subtitle}
          </p>
        </div>

        {/* Stacked Cards Container (Deck Stacking on Scroll) */}
        <div className="relative">
          {projects.map((project, i) => (
            <StackedProjectCard
              key={project.id}
              project={project}
              index={i}
              viewCaseLabel={t.work.viewCase}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
