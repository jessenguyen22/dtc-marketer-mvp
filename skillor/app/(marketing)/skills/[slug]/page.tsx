import { notFound } from "next/navigation";
import {
  getAllSkills,
  getSkillBySlug,
  formatSkillName,
} from "@/lib/skills-catalog-loader";
import { SkillDetailPageRenderer } from "@/components/skills/skill-detail-page-renderer";

// Next.js 16: params is a Promise — must await.
type RouteParams = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSkills().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: RouteParams) {
  const { slug } = await params;
  const skill = getSkillBySlug(slug);
  if (!skill) return { title: "skill not found — skillor" };

  return {
    title: `${formatSkillName(skill.name).toLowerCase()} — skillor`,
    description: skill.description,
  };
}

export default async function SkillDetailPage({ params }: RouteParams) {
  const { slug } = await params;
  const skill = getSkillBySlug(slug);

  if (!skill) notFound();

  return <SkillDetailPageRenderer skill={skill} />;
}
