// JSON+LD structured data builders. Returns plain objects ready to be
// serialized into <script type="application/ld+json"> tags.

import { siteMeta } from "./site-meta-config";
import {
  BUNDLE_PRICE_USD,
  BUNDLE_SLUG,
  type Skill,
} from "./skills-catalog-loader";

const SKILL_PRICE_USD = 19;

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteMeta.name,
    url: siteMeta.url,
    description: siteMeta.description,
    brand: {
      "@type": "Brand",
      name: siteMeta.brand,
    },
  };
}

export function buildSkillProductSchema(skill: Skill) {
  const isBundle = skill.slug === BUNDLE_SLUG;
  const price = isBundle ? BUNDLE_PRICE_USD : SKILL_PRICE_USD;
  const url = `${siteMeta.url.replace(/\/$/, "")}/skills/${skill.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: skill.name,
    sku: skill.slug,
    description: skill.description,
    url,
    brand: {
      "@type": "Brand",
      name: siteMeta.brand,
    },
    offers: {
      "@type": "Offer",
      url,
      price: price.toFixed(2),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
  };
}

export function buildFaqPageSchema(items: ReadonlyArray<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
