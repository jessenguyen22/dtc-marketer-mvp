// Shared pricing logic — used by client cart UI AND server order creation.
// Single source of truth so client/server cannot disagree.

export const SINGLE_SKILL_PRICE_USD = 19;
export const BUNDLE_PRICE_USD = 99;
export const BUNDLE_SLUG = "bundle-all-skills";
export const TOTAL_SKILL_COUNT = 24;

export type CartItem = { slug: string };

export function hasBundleItem(slugs: readonly string[]): boolean {
  return slugs.includes(BUNDLE_SLUG);
}

// If the bundle is in the cart, the price is $99 — individual skills become
// redundant and are not double-charged. Otherwise: count × $19.
export function computeCartTotalUsd(slugs: readonly string[]): number {
  if (hasBundleItem(slugs)) return BUNDLE_PRICE_USD;
  return slugs.length * SINGLE_SKILL_PRICE_USD;
}

export function describeCartLineItems(slugs: readonly string[]) {
  if (hasBundleItem(slugs)) {
    return [
      {
        slug: BUNDLE_SLUG,
        name: "Skillor Bundle — all 24 skills",
        unitAmount: BUNDLE_PRICE_USD,
        quantity: 1,
      },
    ];
  }

  return slugs.map((slug) => ({
    slug,
    name: `Skill: ${slug.replace(/-/g, " ")}`,
    unitAmount: SINGLE_SKILL_PRICE_USD,
    quantity: 1,
  }));
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export function isValidEmail(email: unknown): email is string {
  return typeof email === "string" && EMAIL_RE.test(email) && email.length <= 254;
}
