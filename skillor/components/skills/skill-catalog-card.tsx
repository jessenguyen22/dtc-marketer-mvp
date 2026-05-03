// Single skill card on /skills catalog grid.
// Shows: priority tag, name, truncated description, $19 price, "view" CTA.

import Link from "next/link";
import { formatSkillName } from "@/lib/format-skill-display-name";

// Inlined to keep this component free of node:fs deps so it can render inside
// the client filter panel.
type Skill = {
  slug: string;
  name: string;
  description: string;
  dtcUseCase?: string;
  priorityScore: number;
  version: string;
  brandBrainFields: string[];
};

export function SkillCatalogCard({ skill }: { skill: Skill }) {
  return (
    <Link
      href={`/skills/${skill.slug}`}
      className="group flex flex-col p-6 sm:p-8 border-r border-b border-[var(--color-border)] hover:bg-[var(--color-surface)] transition-colors"
      style={{ opacity: 1 }}
    >
      <div className="flex items-center justify-between gap-4 mb-6">
        <span className="font-mono-ui text-xs text-[var(--color-text-tertiary)] border border-[var(--color-border-strong)] px-2 py-1">
          P{skill.priorityScore}
        </span>
        <span className="font-mono-ui text-xs text-[var(--color-text-tertiary)]">
          v{skill.version}
        </span>
      </div>

      <h3 className="text-xl font-normal mb-3 lowercase">
        {formatSkillName(skill.name).toLowerCase()}
      </h3>

      {/* Prefer dtc_use_case (concrete scenario) over generic description —
          per content audit, scenarios convert better than feature copy. */}
      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-4 flex-1">
        {skill.dtcUseCase || skill.description}
      </p>

      <div className="mt-8 flex items-center justify-between">
        <span className="font-mono-ui text-sm text-foreground">$19</span>
        <span className="font-mono-ui text-xs text-[var(--color-text-tertiary)] group-hover:text-foreground transition-colors">
          VIEW →
        </span>
      </div>
    </Link>
  );
}
