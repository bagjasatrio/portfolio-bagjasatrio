"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, GitBranch as GithubIcon } from "lucide-react";
import type { Project } from "../../../../data/projects";

export function CaseStudyContent({ project }: { project: Project }) {
  return (
    <main className="min-h-dvh pt-24 pb-20 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Back */}
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Work
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-display text-3xl md:text-5xl font-bold text-text-primary mb-4">
            {project.title}
          </h1>

          <div className="flex items-center gap-6 text-sm text-text-secondary mb-8">
            <span>{project.year}</span>
            <span>•</span>
            <span>{project.role}</span>
          </div>

          {/* Links */}
          <div className="flex gap-4 mb-12">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-text-primary text-background font-medium rounded-full text-sm hover:opacity-90 transition-opacity"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-text-primary font-medium rounded-full text-sm hover:bg-surface-elevated transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </div>
        </motion.div>

        {/* Cover placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full aspect-video rounded-2xl bg-gradient-to-br from-accent/10 via-accent/5 to-accent-light/10 border border-border/50 flex items-center justify-center mb-12"
        >
          {/* TODO(bagja): tambah screenshot proyek */}
          <span className="text-text-tertiary text-sm">Project Screenshot</span>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-12"
        >
          {/* Overview */}
          <div>
            <h2 className="font-display text-xl font-bold text-text-primary mb-4">
              Overview
            </h2>
            <p className="text-text-secondary leading-relaxed">
              {project.overview || project.description}
            </p>
          </div>

          {/* Tech Stack */}
          {project.techStack && project.techStack.length > 0 && (
            <div>
              <h2 className="font-display text-xl font-bold text-text-primary mb-4">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm rounded-lg bg-surface-elevated border border-border/50 text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <h2 className="font-display text-xl font-bold text-text-primary mb-4">
                Key Features
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-text-secondary"
                  >
                    <span className="text-accent mt-0.5 shrink-0">▸</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      </div>
    </main>
  );
}
