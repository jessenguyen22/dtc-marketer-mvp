import Link from "next/link";
import { getAllSkills } from "@/lib/skills-catalog-loader";
import { SkillsCatalogFilterAndSortPanel } from "@/components/skills/skills-catalog-filter-and-sort-panel";

export const metadata = {
  title: "skills — skillor",
  description: "all 24 dtc marketing skills. $19 each, $99 for the bundle.",
};

export default function SkillsCatalogPage() {
  const skills = getAllSkills();

  return (
    <>
      <section className="w-full px-6 sm:px-8 pt-24 pb-12">
        <div className="max-w-[1200px] mx-auto">
          <h1
            className="font-display font-light tracking-tight"
            style={{ fontSize: "clamp(48px, 10vw, 160px)", lineHeight: 1.05 }}
          >
            24 skills.
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl">
            $19 each, or $99 for the full bundle. sorted by priority score —
            our take on what moves revenue first for a typical DTC stack.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/pricing#bundle"
              className="font-mono-ui text-sm px-6 py-3 btn-primary transition-opacity"
            >
              BUY BUNDLE — $99
            </Link>
            <Link
              href="/pricing"
              className="font-mono-ui text-sm px-6 py-3 border border-[var(--color-border-strong)] hover:bg-[var(--color-surface)] transition-colors"
            >
              SEE PRICING
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full px-6 sm:px-8 pb-24">
        <div className="max-w-[1200px] mx-auto">
          <SkillsCatalogFilterAndSortPanel skills={skills} />
        </div>
      </section>
    </>
  );
}
