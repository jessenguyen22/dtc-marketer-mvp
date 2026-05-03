// Anonymized archetype quote card — shows founder's PRIOR consulting work
// (FTC-compliant: clearly labeled, not testimonials of current product).
// FOUNDER: REPLACE WITH REAL BETA QUOTES WHEN AVAILABLE (week 2-3).

type Archetype = {
  brand: string;
  quote: string;
  outcome: string;
};

export function AnonymizedArchetypeQuoteCard({ item }: { item: Archetype }) {
  return (
    <article className="border border-[var(--color-border)] bg-background p-6 sm:p-8 flex flex-col gap-5">
      <span className="font-mono-ui text-[10px] text-[var(--color-text-tertiary)] self-start border border-[var(--color-border)] px-2 py-1">
        FOUNDER&apos;S PRIOR CONSULTING WORK
      </span>

      <p className="text-base sm:text-lg leading-relaxed text-foreground">
        &ldquo;{item.quote}&rdquo;
      </p>

      <div className="mt-auto pt-4 border-t border-[var(--color-border)]">
        <p className="font-mono-ui text-xs text-[var(--color-text-secondary)]">
          {item.brand}
        </p>
        <p className="font-mono-ui text-[11px] text-[var(--color-text-tertiary)] mt-1">
          OUTCOME · {item.outcome}
        </p>
      </div>
    </article>
  );
}

export function AnonymizedArchetypeQuoteGrid({
  items,
  heading,
  caption,
}: {
  items: readonly Archetype[];
  heading: string;
  caption: string;
}) {
  return (
    <section className="w-full px-6 sm:px-8 py-12 border-t border-[var(--color-border)]">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
          <h2 className="text-2xl font-light">{heading}</h2>
          <p className="font-mono-ui text-[11px] text-[var(--color-text-tertiary)] sm:max-w-md">
            {caption}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-border)]">
          {items.map((it, i) => (
            <AnonymizedArchetypeQuoteCard key={i} item={it} />
          ))}
        </div>
      </div>
    </section>
  );
}
