// Client-safe utility — pure string formatting, no fs/server dependencies.
// Both server (skills-catalog-loader.ts) and client filter panels use this.

export function formatSkillName(raw: string): string {
  return raw
    .replace(/[_-]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .replace(/\bPdp\b/g, "PDP")
    .replace(/\bIcp\b/g, "ICP")
    .replace(/\bCro\b/g, "CRO")
    .replace(/\bSeo\b/g, "SEO")
    .replace(/\bUgc\b/g, "UGC")
    .replace(/\bUtm\b/g, "UTM")
    .replace(/\bDtc\b/g, "DTC");
}
