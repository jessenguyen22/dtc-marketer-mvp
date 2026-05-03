// Banner that surfaces the one open-sourced skill on github as a public
// proof artifact. Placeholder URL via NEXT_PUBLIC_GITHUB_OPEN_SOURCE_URL.

import Link from "next/link";

const FALLBACK_URL = "https://github.com/skillor/funnel-audit";

export function OpenSourceSkillCalloutBanner({
  variant = "default",
}: {
  variant?: "default" | "compact";
}) {
  const url = process.env.NEXT_PUBLIC_GITHUB_OPEN_SOURCE_URL || FALLBACK_URL;
  const isCompact = variant === "compact";

  return (
    <aside
      className={`border border-[var(--color-border-strong)] ${
        isCompact ? "p-4 sm:p-5" : "p-6 sm:p-8"
      }`}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="font-mono-ui text-xs text-[var(--color-text-tertiary)] mb-2">
            ONE SKILL IS OPEN-SOURCED AS PROOF
          </p>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            <span className="text-foreground">funnel_audit</span> ships on a
            public MIT repo so you can read the full skill before paying. every
            other skill is part of the library.
          </p>
        </div>
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost font-mono-ui text-xs px-5 py-3 inline-block whitespace-nowrap"
        >
          VIEW ON GITHUB →
        </Link>
      </div>
    </aside>
  );
}
