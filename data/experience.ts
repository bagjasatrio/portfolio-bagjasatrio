export interface ExperienceItem {
  period: string;
  title: string;
  organization: string;
  location?: string;
  type?: string; // "work" | "education" | "award"
  bullets?: string[];
  gpa?: string;
}

export const experiences: ExperienceItem[] = [
  {
    period: "Jul 2025 – Aug 2025",
    title: "Frontend Website Developer",
    organization: "Dinas Komunikasi, Informatika, Statistik dan Persandian Kota Semarang",
    location: "Hybrid",
    type: "work",
    bullets: [
      "Developed the Dinas Pemadam Kebakaran Kota Semarang website interface with modular and responsive architecture.",
      "Ensured 100% UI responsiveness across citizen mobile devices and command room desktops.",
    ],
  },
  {
    period: "2022 – 2026",
    title: "S1 Teknik Informatika",
    organization: "Universitas Dian Nuswantoro",
    type: "education",
    gpa: "3.29",
  },
  {
    period: "2019 – 2022",
    title: "SMA MIPA",
    organization: "SMA N 2 Brebes",
    type: "education",
    gpa: "81.43",
  },
];

export interface AwardItem {
  year: number;
  title: string;
  organization: string;
}

export const awards: AwardItem[] = [
  {
    year: 2025,
    title: "AI Literacy for Everyone: Understand, Apply, Create",
    organization: "BASS Training Center & Consultant",
  },
];
