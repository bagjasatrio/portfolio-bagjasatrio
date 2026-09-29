export interface Project {
  id: string;
  number: string;
  year: number;
  title: string;
  tags: string[];
  role: string;
  description: string;
  link: string;
  slug: string;
  // Case study fields
  overview?: string;
  techStack?: string[];
  features?: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "clipmax",
    number: "01",
    year: 2026,
    title: "ClipMax: Autonomous Desktop AI Video Clipper",
    tags: ["Desktop", "AI", "Python"],
    role: "Fullstack/AI Developer",
    description:
      "Desktop Python app that turns long videos into vertical 9:16 clips automatically with AI. Universal LLM Provider Gateway (9Router, OpenRouter, Groq, Gemini), Faster-Whisper transcription (CUDA), MediaPipe face-tracking, FFmpeg NVENC rendering, 85 automated tests.",
    link: "https://github.com/bagjasatrio/clipmax",
    slug: "clipmax",
    overview:
      "ClipMax automates the tedious process of creating short-form vertical video content from long-form sources. It uses AI to identify the most engaging moments, tracks faces for intelligent framing, and renders production-ready 9:16 clips.",
    techStack: ["Python", "FFmpeg NVENC", "Faster-Whisper", "MediaPipe", "9Router", "OpenRouter", "Groq", "Gemini"],
    features: [
      "Universal LLM Provider Gateway with multi-provider routing",
      "CUDA-accelerated transcription via Faster-Whisper",
      "Real-time face tracking with MediaPipe",
      "GPU-accelerated rendering with FFmpeg NVENC",
      "85 automated tests with comprehensive coverage",
    ],
    githubUrl: "https://github.com/bagjasatrio/clipmax",
  },
  {
    id: "clipmax-mobile",
    number: "02",
    year: 2026,
    title: "ClipMax Mobile: On-Device AI Video Studio",
    tags: ["Mobile", "Flutter", "AI"],
    role: "Mobile Developer",
    description:
      "Flutter/Dart app that clips long videos into short clips directly on-device. Universal AI Router multi-provider (Gemini, Groq, OpenAI, OpenRouter), Whisper.cpp native via Dart FFI, multi-layer text/sticker video editor at 120 FPS.",
    link: "https://github.com/bagjasatrio/clipmax-mobile",
    slug: "clipmax-mobile",
    techStack: ["Flutter", "Dart", "Dart FFI", "Whisper.cpp", "Gemini", "Groq", "OpenAI", "OpenRouter"],
    features: [
      "On-device AI processing — no cloud dependency",
      "Universal AI Router with multi-provider support",
      "Native Whisper.cpp via Dart FFI for transcription",
      "Multi-layer video editor with text and stickers at 120 FPS",
    ],
    githubUrl: "https://github.com/bagjasatrio/clipmax-mobile",
  },
  {
    id: "job-automation",
    number: "03",
    year: 2026,
    title: "Job Application Automation & AI Career Co-Pilot",
    tags: ["Automation", "AI", "Python"],
    role: "Fullstack/AI Developer",
    description:
      "Python-based job application automation with Gemini and Playwright: hybrid cold email + portal (LinkedIn, Glints, Jobstreet), ATS matching (min 75%), anti-scam filter, tailored cover letters & CV, Telegram Bot remote control, Google Sheets sync, auto follow-up, 53 unit tests.",
    link: "https://github.com/bagjasatrio/job-apply-automation",
    slug: "job-automation",
    techStack: ["Python", "Gemini", "Playwright", "Telegram Bot API", "Google Sheets API", "Pytest"],
    features: [
      "Hybrid cold email HRD + portal automation",
      "ATS compatibility screening (minimum 75% score)",
      "Anti-scam job listing filter",
      "Auto-generated tailored cover letters and CVs",
      "Remote control via Telegram Bot",
      "Google Sheets synchronization",
      "53 automated unit tests",
    ],
    githubUrl: "https://github.com/bagjasatrio/job-apply-automation",
  },
  {
    id: "cvkita",
    number: "04",
    year: 2026,
    title: "CVKita: AI-Powered Career Profile & Resume Platform",
    tags: ["Web", "AI", "Fullstack"],
    role: "Fullstack Developer",
    description:
      "AI platform for career profile management and resume generation tailored to target job qualifications (Job Matching & ATS Optimization).",
    link: "https://cv-kita.vercel.app/",
    slug: "cvkita",
    demoUrl: "https://cv-kita.vercel.app/",
    // TODO(bagja): tambah detail techStack dan features
  },
  {
    id: "tb-losari",
    number: "05",
    year: 2026,
    title: "Sistem Pengelolaan Gudang TB. Losari Jaya 2",
    tags: ["Web", "Fullstack", "Business App"],
    role: "Fullstack Developer",
    description:
      "Full-stack website for warehouse management and point-of-sale system.",
    link: "https://github.com/bagjasatrio/TB.Losari-Jaya-2",
    slug: "tb-losari",
    githubUrl: "https://github.com/bagjasatrio/TB.Losari-Jaya-2",
    // TODO(bagja): tambah detail techStack dan features
  },
  {
    id: "starfall-store",
    number: "06",
    year: 2025,
    title: "Starfall Store: Top-Up Game Online & Token Listrik",
    tags: ["Web", "Payment Gateway", "API"],
    role: "Fullstack Developer",
    description:
      "Online game top-up and electricity token website with API integration and payment gateway for automated transactions.",
    link: "https://github.com/bagjasatrio/starfallstore",
    slug: "starfall-store",
    githubUrl: "https://github.com/bagjasatrio/starfallstore",
    // TODO(bagja): tambah detail techStack dan features
  },
];
