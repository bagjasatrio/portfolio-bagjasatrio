export type Language = "id" | "en";

export interface WhatIDoSegment {
  text: string;
  highlight?: boolean;
}

export interface TranslationSchema {
  nav: {
    work: string;
    about: string;
    skills: string;
    resume: string;
  };
  hero: {
    greeting: string;
    roles: readonly string[];
    suffix: string;
    subtitle: string;
    viewWork: string;
    getInTouch: string;
  };
  whatIDo: {
    label: string;
    headline: string;
    segments: WhatIDoSegment[];
  };
  about: {
    label: string;
    p1: string;
    p2: string;
    stats: {
      projects: string;
      projectsDesc: string;
      tests: string;
      testsDesc: string;
      providers: string;
      providersDesc: string;
      certs: string;
      certsDesc: string;
    };
  };
  work: {
    label: string;
    subtitle: string;
    viewCase: string;
    liveDemo: string;
    sourceCode: string;
    featured: string;
  };
  experience: {
    label: string;
    title: string;
    subtitle: string;
    workTab: string;
    educationTab: string;
    awardsTab: string;
    gpa: string;
  };
  certifications: {
    label: string;
    title: string;
    subtitle: string;
    viewCredential: string;
    verify: string;
    issuer: string;
  };
  skills: {
    label: string;
    title: string;
    all: string;
    frontend: string;
    backend: string;
    ai: string;
    tools: string;
  };
  contact: {
    label: string;
    heading1: string;
    design: string;
    build: string;
    create: string;
    heading2: string;
    copyEmail: string;
    copied: string;
    downloadCv: string;
  };
  footer: {
    allRights: string;
    builtWith: string;
    location: string;
  };
  resume: {
    title: string;
    subtitle: string;
    downloadId: string;
    downloadEn: string;
    summaryTitle: string;
    experienceTitle: string;
    educationTitle: string;
    certificationsTitle: string;
    skillsTitle: string;
    backToHome: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  id: {
    nav: {
      work: "Karya",
      about: "Tentang",
      skills: "Keahlian",
      resume: "Resume",
    },
    hero: {
      greeting: "Halo, saya Bagja",
      roles: ["full-stack", "AI", "mobile"],
      suffix: "developer",
      subtitle: "Membangun aplikasi cerdas berbasis web, desktop & mobile.",
      viewWork: "Lihat Karya",
      getInTouch: "Hubungi Saya",
    },
    whatIDo: {
      label: "Bidang Keahlian",
      headline:
        "Saya mengubah masalah kompleks dunia nyata menjadi produk jadi: pipeline AI yang mengotomatisasi pekerjaan berulang, antarmuka yang intuitif, dan sistem yang bekerja andal di balik layar.",
      segments: [
        { text: "Saya mengubah masalah kompleks dunia nyata menjadi " },
        { text: "produk jadi", highlight: true },
        { text: ": " },
        { text: "pipeline AI", highlight: true },
        { text: " yang mengotomatisasi pekerjaan berulang, antarmuka yang " },
        { text: "intuitif", highlight: true },
        { text: ", dan sistem yang bekerja andal di balik layar." },
      ],
    },
    about: {
      label: "Tentang Saya",
      p1: "Saya adalah Full-Stack Web Developer dan AI Engineer yang selalu penasaran untuk membangun sistem yang benar-benar berfungsi. Selama beberapa tahun terakhir, saya telah mengembangkan aplikasi lintas web, desktop, dan mobile, mengintegrasikan large language model melalui gateway multi-provider seperti 9Router, OpenRouter, Groq, dan Gemini. Saya menikmati tantangan mengubah kapabilitas AI yang kompleks menjadi alat yang sederhana dan intuitif.",
      p2: "Saya lulusan S1 Teknik Informatika dari Universitas Dian Nuswantoro (2022–2026, IPK 3.29). Saya mudah beradaptasi, kolaboratif, dan selalu belajar — baik itu framework baru, pendekatan pengujian yang lebih cerdas, maupun pipeline yang lebih efisien. Bagi saya, yang terpenting adalah menghadirkan karya yang berdampak nyata.",
      stats: {
        projects: "Proyek Dibangun",
        projectsDesc: "web, desktop, mobile",
        tests: "Automated Tests",
        testsDesc: "85 ClipMax + 53 Job Automation",
        providers: "LLM Providers",
        providersDesc: "Gemini, OpenRouter, Groq, 9Router",
        certs: "Sertifikasi IBM",
        certsDesc: "AI & Software Development 2026",
      },
    },
    work: {
      label: "Proyek Pilihan",
      subtitle: "Aplikasi produksi dan automasi AI yang dirancang untuk keandalan dan performa tinggi.",
      viewCase: "Lihat Detail",
      liveDemo: "Live Demo",
      sourceCode: "Kode Sumber",
      featured: "Unggulan",
    },
    experience: {
      label: "REKAM JEJAK",
      title: "perjalanan sejauh ini",
      subtitle: "Dari rekayasa web hingga pipeline AI dan automasi — rekam jejak peran, studi akademis, dan pencapaian.",
      workTab: "Pengalaman",
      educationTab: "Pendidikan",
      awardsTab: "Penghargaan",
      gpa: "IPK",
    },
    certifications: {
      label: "Kredensial",
      title: "Sertifikasi & Lisensi",
      subtitle: "Verifikasi keahlian profesional di bidang Kecerdasan Buatan dan Rekayasa Perangkat Lunak.",
      viewCredential: "Lihat Kredensial",
      verify: "Verifikasi",
      issuer: "Penerbit",
    },
    skills: {
      label: "Kemampuan Teknis",
      title: "Keahlian & Teknologi",
      all: "Semua",
      frontend: "Frontend",
      backend: "Backend",
      ai: "AI & Machine Learning",
      tools: "DevOps & Tools",
    },
    contact: {
      label: "Hubungi Saya",
      heading1: "Mari",
      design: "rancang",
      build: "bangun",
      create: "ciptakan",
      heading2: "karya luar biasa bersama.",
      copyEmail: "Salin Email",
      copied: "Tersalin!",
      downloadCv: "Unduh CV",
    },
    footer: {
      allRights: "Hak cipta dilindungi.",
      builtWith: "Dibuat dengan Next.js & Tailwind CSS",
      location: "Cirebon, Indonesia",
    },
    resume: {
      title: "tentu, mari buat lebih formal",
      subtitle: "Untuk perekrut, hiring manager, dan siapa saja yang menyukai versi ringkas.",
      downloadId: "Unduh CV (Bahasa Indonesia)",
      downloadEn: "Unduh CV (English)",
      summaryTitle: "Ringkasan Profesional",
      experienceTitle: "Pengalaman Kerja",
      educationTitle: "Pendidikan",
      certificationsTitle: "Sertifikasi Terverifikasi",
      skillsTitle: "Keahlian Teknis",
      backToHome: "Kembali ke Beranda",
    },
  },
  en: {
    nav: {
      work: "Work",
      about: "About",
      skills: "Skills",
      resume: "Resume",
    },
    hero: {
      greeting: "Hey, I'm Bagja",
      roles: ["full-stack", "AI", "mobile"],
      suffix: "developer",
      subtitle: "Building AI-powered apps across web, desktop & mobile.",
      viewWork: "View My Work",
      getInTouch: "Get in Touch",
    },
    whatIDo: {
      label: "What I Do",
      headline:
        "I turn messy, real-world problems into working products: AI pipelines that automate the boring parts, interfaces that feel obvious, and systems that quietly do the work.",
      segments: [
        { text: "I turn messy, real-world problems into " },
        { text: "working products", highlight: true },
        { text: ": " },
        { text: "AI pipelines", highlight: true },
        { text: " that automate the boring parts, interfaces that feel " },
        { text: "obvious", highlight: true },
        { text: ", and systems that quietly do the work." },
      ],
    },
    about: {
      label: "About Me",
      p1: "I'm a Full-Stack Web Developer and AI Engineer with a deep curiosity for building things that work — really work. Over the past few years, I've built applications across web, desktop, and mobile, integrating large language models through multi-provider gateways like 9Router, OpenRouter, Groq, and Gemini. I enjoy the challenge of turning complex AI capabilities into tools that feel simple and intuitive.",
      p2: "I graduated with a Bachelor's degree in Informatics Engineering from Universitas Dian Nuswantoro (2022–2026, GPA 3.29). I'm adaptable, collaborative, and always learning — whether it's a new framework, a smarter way to test, or a more efficient pipeline. I care about shipping work that matters.",
      stats: {
        projects: "Projects Built",
        projectsDesc: "web, desktop, mobile",
        tests: "Automated Tests",
        testsDesc: "85 ClipMax + 53 Job Automation",
        providers: "LLM Providers",
        providersDesc: "Gemini, OpenRouter, Groq, 9Router",
        certs: "IBM Certifications",
        certsDesc: "AI & Software Development 2026",
      },
    },
    work: {
      label: "Selected Work",
      subtitle: "Production applications and AI automations built for reliability and high performance.",
      viewCase: "View Details",
      liveDemo: "Live Demo",
      sourceCode: "Source Code",
      featured: "Featured",
    },
    experience: {
      label: "THE JOURNEY",
      title: "the journey so far",
      subtitle: "From full-stack web development to AI pipelines and automations — a chronological track record of work, studies, and milestones.",
      workTab: "Experience",
      educationTab: "Education",
      awardsTab: "Awards",
      gpa: "GPA",
    },
    certifications: {
      label: "Credentials",
      title: "Certifications & Licenses",
      subtitle: "Verified professional competencies across Artificial Intelligence and Software Engineering.",
      viewCredential: "View Credential",
      verify: "Verify",
      issuer: "Issuer",
    },
    skills: {
      label: "Technical Stack",
      title: "Skills & Technologies",
      all: "All",
      frontend: "Frontend",
      backend: "Backend",
      ai: "AI & Machine Learning",
      tools: "DevOps & Tools",
    },
    contact: {
      label: "Get in Touch",
      heading1: "Let's",
      design: "design",
      build: "build",
      create: "create",
      heading2: "incredible work together.",
      copyEmail: "Copy Email",
      copied: "Copied!",
      downloadCv: "Download CV",
    },
    footer: {
      allRights: "All rights reserved.",
      builtWith: "Built with Next.js & Tailwind CSS",
      location: "Cirebon, Indonesia",
    },
    resume: {
      title: "oh sure, let's keep it formal",
      subtitle: "For recruiters, hiring managers, and anyone who prefers the short version.",
      downloadId: "Download CV (Bahasa Indonesia)",
      downloadEn: "Download CV (English)",
      summaryTitle: "Professional Summary",
      experienceTitle: "Work Experience",
      educationTitle: "Education",
      certificationsTitle: "Verified Certifications",
      skillsTitle: "Technical Skills",
      backToHome: "Back to Home",
    },
  },
};
