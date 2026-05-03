// Vertical timeline of founder track record. Brutalist mono-ui rows.
// Each entry: years | role+brand archetype | outcome metric | optional proof link.

export type TimelineEntry = {
  years: string;
  role: string;
  outcome: string;
  proofHref?: string;
  proofLabel?: string;
};

export function FounderTrackRecordTimeline({
  entries,
  heading = "track record",
}: {
  entries: readonly TimelineEntry[];
  heading?: string;
}) {
  if (!entries || entries.length === 0) return null;

  return (
    <section>
      <h2 className="text-2xl sm:text-3xl font-light tracking-tight mb-8">
        {heading}
      </h2>
      {/* FOUNDER: REPLACE WITH REAL TIMELINE BEFORE LAUNCH */}
      <ol className="border-t border-[var(--color-border)]">
        {entries.map((e, i) => (
          <li
            key={i}
            className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-3 md:gap-8 py-6 border-b border-[var(--color-border)]"
          >
            <div className="font-mono-ui text-xs text-[var(--color-text-tertiary)] pt-1">
              {e.years}
            </div>
            <div className="space-y-2">
              <div className="text-base text-[var(--color-foreground)] leading-snug">
                {e.role}
              </div>
              <div className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {e.outcome}
              </div>
              {e.proofHref && (
                <a
                  href={e.proofHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-mono-ui text-xs text-[var(--color-text-tertiary)] hover:text-[var(--color-foreground)] underline underline-offset-4"
                >
                  {e.proofLabel ?? "proof →"}
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
