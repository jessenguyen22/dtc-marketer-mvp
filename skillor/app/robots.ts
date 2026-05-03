import type { MetadataRoute } from "next";
import { siteMeta } from "@/lib/site-meta-config";

export default function robots(): MetadataRoute.Robots {
  const base = siteMeta.url.replace(/\/$/, "");
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/checkout", "/checkout/success"],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
