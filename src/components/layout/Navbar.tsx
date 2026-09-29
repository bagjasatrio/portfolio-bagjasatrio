"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Menu, X, Globe } from "lucide-react";

const NAV_ITEMS = [
  { key: "work" as const, href: "#work" },
  { key: "about" as const, href: "#about" },
  { key: "skills" as const, href: "#skills" },
  { key: "resume" as const, href: "/resume" },
];

export function Navbar() {
  const pathname = usePathname();
  const { language, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  // Smooth scroll handler with multi-page support
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      if (pathname === "/") {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
          history.pushState(null, "", href);
        }
      }
    }
    setMobileOpen(false);
  };

  // Stable scroll listener with deadzone buffer to prevent jitter
  useEffect(() => {
    const threshold = 15; // Minimum scroll delta before toggling visibility

    function onScroll() {
      const currentY = window.scrollY;

      // Always show at top of page
      if (currentY <= 60) {
        setHidden(false);
        setScrolled(false);
        lastScrollY.current = currentY;
        return;
      }

      setScrolled(true);

      const diff = currentY - lastScrollY.current;
      if (Math.abs(diff) > threshold) {
        if (diff > 0 && currentY > 120) {
          setHidden(true);
        } else if (diff < 0) {
          setHidden(false);
        }
        lastScrollY.current = currentY;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracking via IntersectionObserver
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header
      onMouseEnter={() => setHidden(false)}
      className={cn(
        "fixed top-0 inset-x-0 w-full z-[100] transition-transform duration-300 pointer-events-none flex flex-col items-center",
        hidden && !mobileOpen ? "-translate-y-full" : "translate-y-0"
      )}
    >
      {/* Centered liquid glass navbar container */}
      <div className="w-full flex justify-center px-4 pt-3 sm:pt-4 pointer-events-none">
        <nav
          className={cn(
            "pointer-events-auto flex items-center justify-between sm:justify-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full transition-all duration-500 mx-auto max-w-[calc(100vw-2rem)]",
            /* Liquid glass effect */
            "backdrop-blur-xl backdrop-saturate-150",
            scrolled
              ? "bg-surface/80 shadow-lg shadow-black/5 border border-border/60"
              : "bg-surface/45 border border-border/30"
          )}
          aria-label="Main navigation"
        >
          {/* Brand with Avatar (Like Sanjay Menon's navbar) */}
          <Link
            href="/"
            className="flex items-center gap-2 pl-0.5 pr-2 py-0.5 text-text-primary hover:text-accent transition-colors shrink-0"
          >
            <div className="relative w-6 h-6 rounded-full overflow-hidden border border-white/60 shadow-sm shrink-0">
              <Image
                src="/images/about/about.png"
                alt="Bagja"
                fill
                className="object-cover"
                sizes="24px"
              />
            </div>
            <span className="font-display text-xs sm:text-sm font-extrabold tracking-wider uppercase">
              {SITE_CONFIG.shortName}
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-0.5 ml-1">
            {NAV_ITEMS.map((item) => {
              const label = t.nav[item.key];
              const isHash = item.href.startsWith("#");
              const resolvedHref =
                isHash && pathname !== "/" ? `/${item.href}` : item.href;
              const isActive =
                (isHash && activeSection === item.href.slice(1)) ||
                (!isHash && pathname === item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={resolvedHref}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={cn(
                      "relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 block",
                      isActive
                        ? "text-accent bg-accent/10 font-semibold"
                        : "text-text-secondary hover:text-text-primary hover:bg-surface-elevated/60"
                    )}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Divider */}
          <div className="w-px h-4 bg-border/50 mx-1 shrink-0" />

          {/* Language toggle: ID / EN */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold tracking-wider text-text-secondary hover:text-accent hover:bg-surface-elevated/60 transition-all cursor-pointer border border-border/40 shrink-0"
            aria-label={`Ganti bahasa / Switch language (active: ${language.toUpperCase()})`}
          >
            <Globe size={12} className="opacity-70" />
            <span
              className={cn(
                "transition-colors",
                language === "id" ? "text-accent font-bold" : "opacity-60"
              )}
            >
              ID
            </span>
            <span className="opacity-30">/</span>
            <span
              className={cn(
                "transition-colors",
                language === "en" ? "text-accent font-bold" : "opacity-60"
              )}
            >
              EN
            </span>
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden size-8 flex items-center justify-center rounded-full text-text-secondary hover:text-accent hover:bg-surface-elevated/60 transition-all cursor-pointer shrink-0"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu dropdown */}
      {mobileOpen && (
        <div className="md:hidden w-full flex justify-center px-4 mt-2 pointer-events-auto">
          <div className="rounded-2xl border border-border/50 bg-surface/90 backdrop-blur-xl backdrop-saturate-150 p-4 min-w-[240px] shadow-2xl">
            <ul className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const label = t.nav[item.key];
                const isHash = item.href.startsWith("#");
                const resolvedHref =
                  isHash && pathname !== "/" ? `/${item.href}` : item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={resolvedHref}
                      onClick={(e) => handleLinkClick(e, item.href)}
                      className="font-body text-sm font-medium text-text-primary hover:text-accent transition-colors block py-2.5 px-4 rounded-xl hover:bg-surface-elevated/60"
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
