// Centralized site metadata. Single source of truth for layout, OG tags,
// structured data builders, sitemap base URL.

export const siteMeta = {
  name: "Skillor",
  brand: "Skillor",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://skillor.app",
  description:
    "24 production-grade marketing skills for DTC operators. $19 each, $99 for the full set. Buy once, run anywhere Claude runs.",
  shortDescription: "DTC marketing skills, executable.",
  defaultTitle: "Skillor — DTC marketing skills, executable.",
  titleTemplate: "%s | Skillor",
  ogImage: "/opengraph-image",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  twitterCard: "summary_large_image" as const,
} as const;

export type SiteMeta = typeof siteMeta;
