import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";
import { projects } from "../../data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url;

  const projectRoutes = projects.map((p) => ({
    url: `${base}/work/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/resume`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...projectRoutes,
  ];
}
