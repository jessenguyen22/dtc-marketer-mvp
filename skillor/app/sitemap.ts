import type { MetadataRoute } from "next";
import { getAllSkills } from "@/lib/skills-catalog-loader";
import { siteMeta } from "@/lib/site-meta-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteMeta.url.replace(/\/$/, "");
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/skills`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/pricing`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/about`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/docs`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/sample`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/legal/license`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/legal/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/legal/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/legal/refund`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];

  const skillEntries: MetadataRoute.Sitemap = getAllSkills().map((s) => ({
    url: `${base}/skills/${s.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticEntries, ...skillEntries];
}
