export const SITE_CONFIG = {
  name: "Muhammad Bagja Satrio",
  shortName: "Bagja",
  title: "Bagja Satrio — Full-Stack Web Developer & AI Engineer",
  description:
    "Full-Stack Web Developer & AI Engineer building AI-powered apps across web, desktop & mobile. Experienced with LLM integration, multi-provider routing, and modern web technologies.",
  url: "https://bagjasatrio.vercel.app",
  email: "muhammad.bagjasatrio28@gmail.com",
  location: "Cirebon, Indonesia",
  linkedin: "https://linkedin.com/in/muhammadbagjasatrio",
  github: "https://github.com/bagjasatrio",
  socials: [
    { label: "GitHub", url: "https://github.com/bagjasatrio" },
    { label: "LinkedIn", url: "https://linkedin.com/in/muhammadbagjasatrio" },
  ],
} as const;

export const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Resume", href: "/resume" },
] as const;

export const SECTION_IDS = {
  hero: "hero",
  whatIDo: "what-i-do",
  stats: "stats",
  work: "work",
  about: "about",
  experience: "experience",
  skills: "skills",
  contact: "contact",
} as const;
