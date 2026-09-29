import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { displayFont, bodyFont, handFont } from "@/lib/fonts";
import { SITE_CONFIG } from "@/lib/constants";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { EasterEgg } from "@/components/ui/EasterEgg";
import { BackToTop } from "@/components/ui/BackToTop";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.shortName}`,
  },
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${handFont.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* JSON-LD Person schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muhammad Bagja Satrio",
              url: SITE_CONFIG.url,
              jobTitle: "Full-Stack Web Developer & AI Engineer",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Cirebon",
                addressCountry: "ID",
              },
              sameAs: [SITE_CONFIG.linkedin, SITE_CONFIG.github],
              email: `mailto:${SITE_CONFIG.email}`,
            }),
          }}
        />
      </head>
      <body className="min-h-dvh flex flex-col bg-background text-text-primary">
        <LanguageProvider>
          <LenisProvider>
            <a href="#main" className="skip-to-content">
              Skip to content
            </a>
            <ScrollProgress />
            <CustomCursor />
            <EasterEgg />
            <BackToTop />
            <Navbar />
            <main id="main" className="flex-1">
              {children}
            </main>
            <Footer />
          </LenisProvider>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
