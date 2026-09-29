"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useInView } from "react-intersection-observer";
import {
  Code2, FileType, Paintbrush, Globe, Smartphone, Server, Plug, CreditCard,
  Database, Brain, MessageSquare, Sparkles, Mic, Terminal, Bot, Send, Table,
  TestTube, Film, ScanFace, GitBranch, Triangle, GitMerge, Cpu, Code,
} from "lucide-react";
import { skills, skillCategories, type SkillCategory } from "../../../data/skills";
import { projects } from "../../../data/projects";
import { certifications } from "../../../data/certifications";
import { SECTION_IDS } from "@/lib/constants";
import { useLanguage } from "@/components/providers/LanguageProvider";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "code-2": Code2, "file-type": FileType, paintbrush: Paintbrush, globe: Globe,
  smartphone: Smartphone, server: Server, plug: Plug, "credit-card": CreditCard,
  database: Database, brain: Brain, "message-square": MessageSquare,
  sparkles: Sparkles, mic: Mic, terminal: Terminal, bot: Bot, send: Send,
  table: Table, "test-tube": TestTube, film: Film, "scan-face": ScanFace,
  "git-branch": GitBranch, triangle: Triangle, "git-merge": GitMerge,
  cpu: Cpu, code: Code,
};

function SkillCard({
  skill,
}: {
  skill: (typeof skills)[number];
}) {
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const IconComp = skill.icon ? iconMap[skill.icon] : Code2;

  const usedInProjects = projects.filter((p) =>
    skill.usedIn.includes(p.id)
  );
  const hasCert = skill.certifiedBy && skill.certifiedBy.length > 0;

  return (
    <motion.div
      layout
      layoutId={skill.id}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <div className="relative rounded-xl bg-surface border border-border/50 p-5 hover:border-accent/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,129,225,0.08)] cursor-default overflow-hidden">
        {/* Spotlight glow on hover */}
        {!prefersReducedMotion && (
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,rgba(0,129,225,0.06),transparent_60%)]" />
        )}

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
              {IconComp && <IconComp className="w-4.5 h-4.5 text-accent" />}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-text-primary truncate">
                {skill.name}
              </h3>
            </div>
            {hasCert && (
              <span className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-accent/15 text-accent uppercase tracking-wider shrink-0">
                Certified
              </span>
            )}
          </div>

          {/* Used in — shown on hover/focus */}
          <AnimatePresence>
            {isHovered && usedInProjects.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <p className="text-[10px] text-text-tertiary uppercase tracking-wider mb-1.5">
                  Used in
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {usedInProjects.map((p) => (
                    <a
                      key={p.id}
                      href={`/work/${p.slug}`}
                      className="text-xs text-accent hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {p.title.split(":")[0]}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export function Skills() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<
    SkillCategory | "all"
  >("all");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const prefersReducedMotion = useReducedMotion();

  const confirmedSkills = skills.filter((s) => s.confirmed);

  const filteredSkills = useMemo(() => {
    if (activeCategory === "all") return confirmedSkills;
    return confirmedSkills.filter((s) => s.category === activeCategory);
  }, [activeCategory, confirmedSkills]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: confirmedSkills.length };
    for (const s of confirmedSkills) {
      counts[s.category] = (counts[s.category] || 0) + 1;
    }
    return counts;
  }, [confirmedSkills]);

  return (
    <section
      id={SECTION_IDS.skills}
      ref={ref}
      className="py-section-sm md:py-section px-6 bg-surface-elevated"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.p
          className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {t.skills.label}
        </motion.p>
        <motion.h2
          className="font-display text-3xl md:text-5xl font-bold text-text-primary mb-3"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t.skills.title}
        </motion.h2>
        <motion.p
          className="text-text-secondary text-sm md:text-base mb-10 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          The tools, languages, and ideas I use to ship things — and where I&apos;ve used them.
        </motion.p>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {skillCategories.map((cat) => {
            const isActive = activeCategory === cat.key;
            const count = categoryCounts[cat.key] || 0;
            if (cat.key !== "all" && count === 0) return null;

            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-text-secondary hover:text-text-primary hover:bg-surface"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="skill-tab-bg"
                    className="absolute inset-0 bg-accent rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {cat.label}
                  <span
                    className={`text-xs ${
                      isActive ? "text-white/70" : "text-text-tertiary"
                    }`}
                  >
                    {count}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Skills grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
