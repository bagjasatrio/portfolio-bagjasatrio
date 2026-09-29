"use client";

import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "@/components/providers/LanguageProvider";

const NAV_ITEMS = [
  { key: "work" as const, href: "#work" },
  { key: "about" as const, href: "#about" },
  { key: "skills" as const, href: "#skills" },
  { key: "resume" as const, href: "/resume" },
];

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-[#1479CE] to-[#0859A3] text-white overflow-hidden pt-10 sm:pt-14 pb-8 border-t-0">
      {/* Giant Background Watermark Text: BAGJA (Sits behind the bottom clouds) */}
      <div
        aria-hidden="true"
        className="absolute bottom-6 sm:bottom-10 md:bottom-12 left-0 right-0 text-center font-display font-black text-[20vw] leading-none text-white/[0.08] tracking-widest uppercase select-none pointer-events-none z-0"
      >
        BAGJA
      </div>

      {/* Photorealistic Fluffy White Clouds at the Bottom Base */}
      <div className="absolute bottom-0 left-0 right-0 h-44 sm:h-56 md:h-64 overflow-hidden pointer-events-none z-[1] select-none">
        <Image
          src="/images/work/sky-clouds.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-bottom opacity-70 mix-blend-screen brightness-110"
        />
        {/* Soft top gradient to blend clouds into the blue sky */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0859A3]/50 via-transparent to-[#1479CE]/20" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1380px] px-4 sm:px-6 md:px-8">
        {/* Top Links Grid: Email, Social, Navigation */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 sm:gap-12">
          {/* Email Block */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60 font-mono mb-2">
              Email
            </p>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-base sm:text-lg font-bold text-white hover:text-white/80 transition-colors tracking-tight underline decoration-white/30 underline-offset-4"
            >
              {SITE_CONFIG.email}
            </a>
            <p className="text-xs text-white/70 mt-1 font-mono">
              {SITE_CONFIG.location}
            </p>
          </div>

          {/* Social Icons & Navigation Links */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-8 sm:gap-12">
            {/* Social Buttons (White circular buttons like Sanjay Menon's style) */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60 font-mono mb-2.5">
                Social
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={SITE_CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white text-[#0081E1] flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-md shadow-blue-950/20"
                  aria-label="LinkedIn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href={SITE_CONFIG.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white text-[#0081E1] flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-md shadow-blue-950/20"
                  aria-label="GitHub"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation links */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60 font-mono mb-2.5">
                Menu
              </p>
              <ul className="flex flex-wrap gap-4 text-xs font-semibold text-white/80">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {t.nav[item.key]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Thin Translucent Divider Line */}
        <div className="w-full h-px bg-white/20 mt-12 sm:mt-16 mb-6" />

        {/* Bottom Metadata & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60 font-mono">
          <p>© {currentYear} {SITE_CONFIG.name}. {t.footer.allRights}</p>
          <p>{t.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
