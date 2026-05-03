import { notFound, redirect } from "next/navigation";
import {
  getAllSkills,
  getSkillBySlug,
  formatSkillName,
} from "@/lib/skills-catalog-loader";
import { SkillDetailPageRenderer } from "@/components/skills/skill-detail-page-renderer";
import { StructuredDataScript } from "@/components/site/structured-data-script";
import { buildSkillProductSchema } from "@/lib/structured-data-builders";

// Next.js 16: params is a Promise — must await.
type RouteParams = { params: Promise<{ slug: string }> };

// Map any underscore-style slug (legacy / external links from old SKILL.md
// `name:` field) to its kebab-case URL equivalent.
function normalizeSlug(slug: string): string {
  return slug.replace(/_/g, "-").toLowerCase();
}

export async function generateStaticParams() {
  return getAllSkills().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: RouteParams) {
  const { slug } = await params;
  const skill = getSkillBySlug(normalizeSlug(slug));
  if (!skill) return { title: "skill not found — skillor" };

  const title = `${formatSkillName(skill.name).toLowerCase()} — skillor`;
  const canonical = `/skills/${skill.slug}`;
  return {
    title,
    description: skill.description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description: skill.description,
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description: skill.description,
    },
  };
}

export default async function SkillDetailPage({ params }: RouteParams) {
  const { slug } = await params;
  const normalized = normalizeSlug(slug);

  // If the URL came in with underscores (e.g. /skills/shopify_pdp), redirect
  // to the canonical kebab URL (/skills/shopify-pdp). Permanent so search
  // engines + cached external links update.
  if (normalized !== slug) {
    redirect(`/skills/${normalized}`);
  }

  const skill = getSkillBySlug(normalized);
  if (!skill) notFound();

  return (
    <>
      <StructuredDataScript data={buildSkillProductSchema(skill)} />
      <SkillDetailPageRenderer skill={skill} />
    </>
  );
}

