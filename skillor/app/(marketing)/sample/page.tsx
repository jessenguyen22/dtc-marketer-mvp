// /sample — public-facing page that shows a realistic execution of the
// funnel_audit skill. Proof-of-depth for buyers before they hit the paywall.

import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import { OpenSourceSkillCalloutBanner } from "@/components/marketing/open-source-skill-callout-banner";
import { SkillSampleOutputRenderer } from "@/components/skills/skill-sample-output-renderer";

export const metadata = {
  title: "sample output — skillor",
  description:
    "What the funnel_audit skill actually produces — full real-shape sample execution against a synthetic DTC brand.",
};

function loadSampleMarkdown(): string {
  const filePath = path.join(
    process.cwd(),
    "content",
    "sample-outputs",
    "funnel-audit-sample-execution.md",
  );
  return fs.readFileSync(filePath, "utf8");
}

export default function SamplePage() {
  const raw = loadSampleMarkdown();
  // Strip the leading HTML disclaimer comment — we render it as a separate
  // visual banner so buyers see it before scanning numbers.
  const markdown = raw.replace(/^<!--[\s\S]*?-->\s*/, "");

  return (
    <article className="w-full px-6 sm:px-8 py-24 max-w-[1100px] mx-auto">
      <div className="flex items-center gap-3 mb-12">
        <Link
          href="/skills"
          className="font-mono-ui text-xs text-[var(--color-text-tertiary)] hover:text-foreground transition-colors"
        >
          ← ALL SKILLS
        </Link>
        <span className="text-[var(--color-text-quaternary)]">/</span>
        <span className="font-mono-ui text-xs text-[var(--color-text-tertiary)]">
          sample
        </span>
      </div>

      <header>
        <p className="font-mono-ui text-xs text-[var(--color-text-tertiary)] mb-6">
          WHAT A SKILL ACTUALLY PRODUCES — FUNNEL_AUDIT, REAL-SHAPE SAMPLE OUTPUT
        </p>
        <h1
          className="font-display font-light tracking-tight lowercase"
          style={{ fontSize: "clamp(30px, 6vw, 80px)", lineHeight: 1.05 }}
        >
          this is the depth you pay for.
        </h1>
        <p className="mt-8 text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-3xl leading-relaxed">
          below is a full execution of the{" "}
          <Link
            href="/skills/funnel-audit"
            className="text-foreground underline underline-offset-4 decoration-[var(--color-border-strong)] hover:decoration-foreground"
          >
            funnel_audit
          </Link>{" "}
          skill against a synthetic DTC brand. inputs, slicing, ranked
          hypotheses, dollar-weighted fix list, and one explicit{" "}
          <span className="text-foreground">do-not-do</span>. this is the shape
          of every skill in the bundle.
        </p>
      </header>

      <aside className="mt-12 border border-[var(--color-border)] p-5 bg-[var(--color-surface)]">
        <p className="font-mono-ui text-xs text-[var(--color-text-tertiary)] mb-2">
          DISCLAIMER
        </p>
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
          numbers below are illustrative. the brand (northwind supply co.) is
          synthetic. shape, math, and rigor reflect what the skill produces
          against a real brand brain.
        </p>
      </aside>

      <hr className="mt-16 mb-16 border-0 border-t border-[var(--color-border-strong)]" />

      <SkillSampleOutputRenderer markdown={markdown} />

      <div className="mt-24">
        <OpenSourceSkillCalloutBanner />
      </div>

      <div className="mt-12 pt-12 border-t border-[var(--color-border-strong)]">
        <div className="border border-[var(--color-border-strong)] p-8 sm:p-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 flex-wrap">
            <div className="flex-1">
              <p className="font-mono-ui text-xs text-[var(--color-text-tertiary)] mb-2">
                THE BUNDLE — 24 SKILLS LIKE THIS
              </p>
              <p className="font-display text-5xl sm:text-6xl font-light">$99</p>
              <p className="text-sm text-[var(--color-text-secondary)] mt-3 max-w-md">
                every skill in the pack ships at this depth. break-even at six.
                one funnel audit at agency rates pays for the whole bundle.
              </p>
            </div>
            <Link
              href="/pricing#bundle"
              className="btn-primary font-mono-ui text-sm px-8 py-4 inline-block text-center w-full sm:w-auto"
            >
              GET ALL 24 — $99
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
