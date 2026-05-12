import type { MetadataRoute } from "next";
import { SITE, SUPPORT_SERVICES } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  const staticPages = [
    { url: base, lastModified: now, changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${base}/support`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${base}/resources`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${base}/news`, lastModified: now, changeFrequency: "daily" as const, priority: 0.8 },
    { url: `${base}/events`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${base}/membership`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/donate`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
  ];

  const supportPages = SUPPORT_SERVICES.map((s) => ({
    url: `${base}/support/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...supportPages];
}
