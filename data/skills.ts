export type SkillCategory =
  | "frontend"
  | "backend"
  | "ai"
  | "automation"
  | "mobile"
  | "media"
  | "devops";

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  confirmed: boolean; // only render if true
  usedIn: string[]; // project IDs
  certifiedBy?: string[]; // certification IDs
  icon?: string; // lucide icon name or custom
}

export const skillCategories: { key: SkillCategory | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "ai", label: "AI & LLM" },
  { key: "automation", label: "Automation" },
  { key: "mobile", label: "Mobile" },
  { key: "media", label: "Media" },
  { key: "devops", label: "DevOps" },
];

export const skills: Skill[] = [
  // === Frontend Architecture ===
  {
    id: "nextjs",
    name: "Next.js (App Router)",
    category: "frontend",
    confirmed: true,
    usedIn: ["cvkita"],
    icon: "code-2",
  },
  {
    id: "react",
    name: "React 19",
    category: "frontend",
    confirmed: true,
    usedIn: ["cvkita"],
    icon: "code",
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "frontend",
    confirmed: true,
    usedIn: ["cvkita"],
    icon: "file-type",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS v4",
    category: "frontend",
    confirmed: true,
    usedIn: ["cvkita"],
    icon: "paintbrush",
  },
  {
    id: "motion",
    name: "Motion (Framer Motion)",
    category: "frontend",
    confirmed: true,
    usedIn: ["cvkita"],
    icon: "sparkles",
  },
  {
    id: "lenis",
    name: "Lenis Smooth Scroll",
    category: "frontend",
    confirmed: true,
    usedIn: ["cvkita"],
    icon: "globe",
  },
  {
    id: "html-css-js",
    name: "HTML / CSS / JavaScript",
    category: "frontend",
    confirmed: true,
    usedIn: ["cvkita", "tb-losari", "starfall-store"],
    icon: "globe",
  },
  {
    id: "responsive-ui",
    name: "Responsive UI",
    category: "frontend",
    confirmed: true,
    usedIn: ["cvkita", "tb-losari", "starfall-store"],
    icon: "smartphone",
  },

  // === Backend, API & Database ===
  {
    id: "rest-api",
    name: "REST API",
    category: "backend",
    confirmed: true,
    usedIn: ["clipmax", "job-automation", "cvkita", "starfall-store"],
    icon: "server",
  },
  {
    id: "api-integration",
    name: "API Integration",
    category: "backend",
    confirmed: true,
    usedIn: ["clipmax", "clipmax-mobile", "job-automation", "starfall-store"],
    icon: "plug",
  },
  {
    id: "payment-gateway",
    name: "Payment Gateway",
    category: "backend",
    confirmed: true,
    usedIn: ["starfall-store"],
    icon: "credit-card",
  },
  {
    id: "database",
    name: "Database (PostgreSQL / MySQL)",
    category: "backend",
    confirmed: true,
    usedIn: ["cvkita", "tb-losari", "starfall-store"],
    icon: "database",
  },

  // === AI & LLM Integration ===
  {
    id: "ai-llm",
    name: "LLM API Gateway / Multi-Provider Routing",
    category: "ai",
    confirmed: true,
    usedIn: ["clipmax", "clipmax-mobile", "job-automation"],
    certifiedBy: ["ibm-ai-python-flask", "ibm-python-ds-ai", "ibm-eda-ml", "ibm-supervised-classification", "ibm-supervised-regression", "ibm-unsupervised-ml", "bass-ai-literacy"],
    icon: "brain",
  },
  {
    id: "prompt-engineering",
    name: "Prompt Engineering",
    category: "ai",
    confirmed: true,
    usedIn: ["clipmax", "clipmax-mobile", "job-automation", "cvkita"],
    icon: "message-square",
  },
  {
    id: "ai-dev",
    name: "AI-Assisted Development",
    category: "ai",
    confirmed: true,
    usedIn: ["clipmax", "clipmax-mobile", "job-automation"],
    icon: "sparkles",
  },
  {
    id: "whisper",
    name: "Faster-Whisper / Whisper.cpp",
    category: "ai",
    confirmed: true,
    usedIn: ["clipmax", "clipmax-mobile"],
    icon: "mic",
  },

  // === Automation ===
  {
    id: "python",
    name: "Python",
    category: "automation",
    confirmed: true,
    usedIn: ["clipmax", "job-automation"],
    certifiedBy: ["ibm-ai-python-flask", "ibm-python-ds-ai", "ibm-tdd-bdd"],
    icon: "terminal",
  },
  {
    id: "playwright",
    name: "Playwright",
    category: "automation",
    confirmed: true,
    usedIn: ["job-automation"],
    icon: "bot",
  },
  {
    id: "telegram-bot",
    name: "Telegram Bot",
    category: "automation",
    confirmed: true,
    usedIn: ["job-automation"],
    icon: "send",
  },
  {
    id: "google-sheets",
    name: "Google Sheets API",
    category: "automation",
    confirmed: true,
    usedIn: ["job-automation"],
    icon: "table",
  },
  {
    id: "pytest",
    name: "Pytest",
    category: "automation",
    confirmed: true,
    usedIn: ["clipmax", "job-automation"],
    certifiedBy: ["ibm-tdd-bdd"],
    icon: "test-tube",
  },

  // === Mobile Development ===
  {
    id: "flutter",
    name: "Flutter",
    category: "mobile",
    confirmed: true,
    usedIn: ["clipmax-mobile"],
    icon: "smartphone",
  },
  {
    id: "dart",
    name: "Dart",
    category: "mobile",
    confirmed: true,
    usedIn: ["clipmax-mobile"],
    icon: "code",
  },
  {
    id: "dart-ffi",
    name: "Dart FFI",
    category: "mobile",
    confirmed: true,
    usedIn: ["clipmax-mobile"],
    icon: "cpu",
  },

  // === Media Processing ===
  {
    id: "ffmpeg",
    name: "FFmpeg NVENC",
    category: "media",
    confirmed: true,
    usedIn: ["clipmax"],
    icon: "film",
  },
  {
    id: "mediapipe",
    name: "MediaPipe",
    category: "media",
    confirmed: true,
    usedIn: ["clipmax"],
    icon: "scan-face",
  },

  // === DevOps ===
  {
    id: "cicd",
    name: "CI/CD",
    category: "devops",
    confirmed: true,
    usedIn: ["clipmax", "job-automation"],
    certifiedBy: ["ibm-cicd", "ibm-devops-capstone", "ibm-intro-devops"],
    icon: "git-branch",
  },
  {
    id: "vercel",
    name: "Vercel",
    category: "devops",
    confirmed: true,
    usedIn: ["cvkita"],
    icon: "triangle",
  },
  {
    id: "git-github",
    name: "Git / GitHub",
    category: "devops",
    confirmed: true,
    usedIn: ["clipmax", "clipmax-mobile", "job-automation", "cvkita", "tb-losari", "starfall-store"],
    icon: "git-merge",
  },
];
