import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Bagja Satrio",
  description:
    "Muhammad Bagja Satrio — Full-Stack Web Developer & AI Engineer resume.",
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
