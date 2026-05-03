// Loads + parses the 24 skill markdown files from content/skills/.
// Used by /skills catalog page, /skills/[slug] detail, and PayPal capture validation.

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export { formatSkillName } from "./format-skill-display-name";

export type Skill = {
  slug: string;
  name: string;
  description: string;
  priorityScore: number;
  dtcUseCase: string;
  version: string;
  license: string;
  brandBrainFields: string[];
  body: string;
};

const SKILL_PRICE_USD = 19;
export const BUNDLE_PRICE_USD = 99;
export const BUNDLE_SLUG = "bundle-all-skills";

const skillsDir = path.join(process.cwd(), "content", "skills");

let cache: Skill[] | null = null;

export function getAllSkills(): Skill[] {
  if (cache) return cache;

  const files = fs
    .readdirSync(skillsDir)
    .filter((f) => f.endsWith(".md"));

  const skills = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(skillsDir, file), "utf8");
    const { data, content } = matter(raw);

    return {
      slug,
      name: String(data.name ?? slug).replace(/_/g, " "),
      description: String(data.description ?? ""),
      priorityScore: Number(data.priority_score ?? 0),
      dtcUseCase: String(data.dtc_use_case ?? "").replace(/^"|"$/g, ""),
      version: String(data.version ?? "1.0.0"),
      license: String(data.license ?? "MIT"),
      brandBrainFields: Array.isArray(data.brand_brain_fields)
        ? (data.brand_brain_fields as string[])
        : [],
      body: content.trim(),
    } satisfies Skill;
  });

  skills.sort((a, b) => b.priorityScore - a.priorityScore);
  cache = skills;
  return skills;
}

export function getSkillBySlug(slug: string): Skill | null {
  return getAllSkills().find((s) => s.slug === slug) ?? null;
}

export function getSkillSlugs(): string[] {
  return getAllSkills().map((s) => s.slug);
}

export function getSkillPrice(slug: string): number {
  if (slug === BUNDLE_SLUG) return BUNDLE_PRICE_USD;
  return getSkillBySlug(slug) ? SKILL_PRICE_USD : 0;
}

// formatSkillName re-exported above from format-skill-display-name.ts
