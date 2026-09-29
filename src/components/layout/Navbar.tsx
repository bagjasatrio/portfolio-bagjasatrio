"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/providers/LanguageProvider";
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
      // Only change hidden if scroll diff exceeds threshold
      if (Math.abs(diff) > threshold) {
        if (diff > 0 && currentY > 120) {
          // Scrolling down
          setHidden(true);
        } else if (diff < 0) {
          // Scrolling up
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
        "fixed top-0 left-0 right-0 z-[100] transition-transform duration-300 pointer-events-none",
        hidden && !mobileOpen ? "-translate-y-full" : "translate-y-0"
      )}
    >
      {/* Centered liquid glass navbar */}
      <div className="flex justify-center px-4 pt-4 pointer-events-none">
        <nav
          className={cn(
            "flex items-center gap-1.5 px-3 py-2 rounded-full transition-all duration-500 pointer-events-auto",
            /* Liquid glass effect */
            "backdrop-blur-xl backdrop-saturate-150",
            scrolled
              ? "bg-surface/75 shadow-lg shadow-black/5 border border-border/50"
              : "bg-surface/40 border border-border/25"
          )}
          aria-label="Main navigation"
        >
          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-0.5">
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
                      "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 block",
                      isActive
                        ? "text-accent bg-accent/10"
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
          <div className="hidden md:block w-px h-5 bg-border/40 mx-1" />

          {/* Language toggle: ID / EN */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider text-text-secondary hover:text-accent hover:bg-surface-elevated/60 transition-all cursor-pointer border border-border/40"
            aria-label={`Ganti bahasa / Switch language (active: ${language.toUpperCase()})`}
          >
            <Globe size={13} className="opacity-70" />
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
            className="md:hidden size-9 flex items-center justify-center rounded-full text-text-secondary hover:text-accent hover:bg-surface-elevated/60 transition-all cursor-pointer"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden flex justify-center px-4 mt-2 pointer-events-auto">
          <div className="rounded-2xl border border-border/50 bg-surface/85 backdrop-blur-xl backdrop-saturate-150 p-4 min-w-[220px] shadow-xl">
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
