"use client";

import { createContext, useContext, useEffect, useState, useCallback, useMemo } from "react";
import { translations, type Language, type TranslationSchema } from "@/lib/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationSchema;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLanguage(): LanguageContextType {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // Graceful fallback for SSR/prerender
    return {
      language: "id",
      setLanguage: () => {},
      toggleLanguage: () => {},
      t: translations.id,
    };
  }
  return ctx;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("id");

  useEffect(() => {
    const stored = localStorage.getItem("portfolio_lang") as Language | null;
    if (stored === "id" || stored === "en") {
      setLanguageState(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("portfolio_lang", lang);
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => {
      const next: Language = prev === "id" ? "en" : "id";
      localStorage.setItem("portfolio_lang", next);
      if (typeof document !== "undefined") {
        document.documentElement.lang = next;
      }
      return next;
    });
  }, []);

  const t = useMemo(() => translations[language], [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
