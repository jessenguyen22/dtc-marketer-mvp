// /skills/[slug] detail page body. Paywalled — but shows enough STRUCTURE
// (TOC of H2 sections from the body) for buyers to judge depth without
// leaking the actual content. Bundle is the primary CTA per audit.

import Link from "next/link";
import { type Skill, formatSkillName } from "@/lib/skills-catalog-loader";
import { AddToCartActionButton } from "./add-to-cart-action-button";

const BUNDLE_HREF = "/pricing#bundle";

// Pulls "## Heading" / "### Sub" lines from a SKILL.md body so we can show
// what's inside without exposing actual content. Returns ordered TOC entries.
function extractSkillSectionToc(body: string): Array<{ level: 2 | 3; text: string }> {
  const lines = body.split("\n");
  const out: Array<{ level: 2 | 3; text: string }> = [];
  for (const line of lines) {
    const m2 = line.match(/^##\s+(.+?)\s*$/);
    if (m2) {
      out.push({ level: 2, text: m2[1].trim() });
      continue;
    }
    const m3 = line.match(/^###\s+(.+?)\s*$/);
    if (m3) out.push({ level: 3, text: m3[1].trim() });
  }
  return out;
}

export function SkillDetailPageRenderer({ skill }: { skill: Skill }) {
  const sections = extractSkillSectionToc(skill.body);
  const lineCount = skill.body.split("\n").length;

  return (
    <article className="w-full px-6 sm:px-8 py-24 max-w-[1100px] mx-auto">
      <div className="flex items-center gap-3 mb-12">
        <Link
          href="/skills"
          className="font-mono-ui text-xs text-[var(--color-text-tertiary)] hover:text-foreground transition-colors"
          style={{ opacity: 1 }}
        >
          ← ALL SKILLS
        </Link>
        <span className="text-[var(--color-text-quaternary)]">/</span>
        <span className="font-mono-ui text-xs text-[var(--color-text-tertiary)]">
          {skill.slug}
        </span>
      </div>

      <div className="flex items-start gap-3 mb-8 flex-wrap">
        <span className="font-mono-ui text-xs text-[var(--color-text-tertiary)] border border-[var(--color-border-strong)] px-2 py-1">
          PRIORITY {skill.priorityScore}
        </span>
        <span className="font-mono-ui text-xs text-[var(--color-text-tertiary)] border border-[var(--color-border-strong)] px-2 py-1">
          V{skill.version}
        </span>
        <span className="font-mono-ui text-xs text-[var(--color-text-tertiary)] border border-[var(--color-border-strong)] px-2 py-1">
          {skill.license.toUpperCase()}
        </span>
        <span className="font-mono-ui text-xs text-[var(--color-text-tertiary)] border border-[var(--color-border-strong)] px-2 py-1">
          {lineCount} LINES
        </span>
      </div>

      <h1
        className="font-display font-light tracking-tight lowercase"
        style={{ fontSize: "clamp(40px, 7vw, 100px)", lineHeight: 1.05 }}
      >
        {formatSkillName(skill.name).toLowerCase()}
      </h1>

      <p className="mt-8 text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-3xl leading-relaxed">
        {skill.description}
      </p>

      {skill.dtcUseCase && (
        <section className="mt-16 border border-[var(--color-border-strong)] p-8 max-w-3xl">
          <p className="font-mono-ui text-xs text-[var(--color-text-tertiary)] mb-4">
            WHAT THIS SKILL PRODUCES — REAL SCENARIO
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            {skill.dtcUseCase}
          </p>
        </section>
      )}

      <section className="mt-16 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
        <div>
          <p className="font-mono-ui text-xs text-[var(--color-text-tertiary)] mb-4">
            STRUCTURE — {sections.length} SECTIONS
          </p>
          <p className="text-sm text-[var(--color-text-tertiary)] mb-6">
            this is the actual section map of the skill file. content of each
            section is the part you pay for.
          </p>
          <ol className="border-t border-[var(--color-border)]">
            {sections.length === 0 ? (
              <li className="py-3 border-b border-[var(--color-border)] text-sm text-[var(--color-text-tertiary)]">
                (no top-level headings detected)
              </li>
            ) : (
              sections.map((s, i) => (
                <li
                  key={i}
                  className={`py-3 border-b border-[var(--color-border)] flex items-baseline gap-3 ${
                    s.level === 3 ? "pl-8" : ""
                  }`}
                >
                  <span className="font-mono-ui text-xs text-[var(--color-text-tertiary)] w-6">
                    {s.level === 2 ? `${String(i + 1).padStart(2, "0")}` : "└"}
                  </span>
                  <span
                    className={`text-sm ${
                      s.level === 2 ? "text-foreground" : "text-[var(--color-text-secondary)]"
                    }`}
                  >
                    {s.text.toLowerCase()}
                  </span>
                </li>
              ))
            )}
          </ol>
        </div>

        <div>
          <p className="font-mono-ui text-xs text-[var(--color-text-tertiary)] mb-4">
            WHAT YOU GET
          </p>
          <ul className="space-y-3 text-sm">
            <Feature text={`full ${lineCount}-line SKILL.md`} />
            <Feature text="frontmatter contract for agent harnesses" />
            <Feature text="step-by-step process + decision rules" />
            <Feature text="output format spec + edge cases" />
            <Feature text="commercial license — perpetual, modify privately" />
            <Feature text="all v1.x updates" />
          </ul>
        </div>
      </section>

      {skill.brandBrainFields.length > 0 && (
        <section className="mt-16 max-w-3xl">
          <p className="font-mono-ui text-xs text-[var(--color-text-tertiary)] mb-4">
            BRAND BRAIN FIELDS REQUIRED
          </p>
          <div className="flex flex-wrap gap-2">
            {skill.brandBrainFields.map((f) => (
              <span
                key={f}
                className="font-mono-ui text-xs px-2 py-1 border border-[var(--color-border)]"
              >
                {f}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Bundle-primary CTA — single-skill is the secondary fallback. */}
      <div className="mt-24 pt-12 border-t border-[var(--color-border-strong)]">
        <div className="border border-[var(--color-border-strong)] p-8 sm:p-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 flex-wrap">
            <div className="flex-1">
              <p className="font-mono-ui text-xs text-[var(--color-text-tertiary)] mb-2">
                THE BUNDLE — BEST MATH
              </p>
              <p className="font-display text-5xl sm:text-6xl font-light">$99</p>
              <p className="text-sm text-[var(--color-text-secondary)] mt-3 max-w-md">
                this skill + 23 more. break-even at six. one klaviyo flow rebuild
                at agency rates pays for the whole bundle.
              </p>
            </div>
            <Link
              href={BUNDLE_HREF}
              className="btn-primary font-mono-ui text-sm px-8 py-4 inline-block text-center w-full sm:w-auto"
            >
              GET ALL 24 — $99
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-mono-ui text-xs text-[var(--color-text-tertiary)] mb-1">
                JUST THIS SKILL
              </p>
              <p className="text-sm text-[var(--color-text-secondary)]">
                one file, $19. you can always upgrade to the bundle later.
              </p>
            </div>
            <AddToCartActionButton
              slug={skill.slug}
              name={formatSkillName(skill.name)}
              price={19}
              variant="ghost"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

function Feature({ text }: { text: string }) {
  return (
    <li className="flex gap-3">
      <span className="text-[var(--color-text-tertiary)] font-mono-ui">▸</span>
      <span className="text-[var(--color-text-secondary)]">{text}</span>
    </li>
  );
}
