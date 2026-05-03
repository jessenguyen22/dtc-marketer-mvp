// Trust strip — text-only "BUILT FOR" + "WORKS WITH" rows.
// Brutalist tone: uppercase mono labels, lowercase brand names.

type TrustStripProps = {
  builtFor: { label: string; items: readonly string[] };
  worksWith: { label: string; items: readonly string[] };
};

export function TechCompatibilityTrustStrip({
  builtFor,
  worksWith,
}: TrustStripProps) {
  return (
    <section className="w-full px-6 sm:px-8 border-t border-[var(--color-border)]">
      <div className="max-w-[1200px] mx-auto">
        <Row label={builtFor.label} items={builtFor.items} />
        <div className="border-t border-[var(--color-border)]">
          <Row label={worksWith.label} items={worksWith.items} />
        </div>
      </div>
    </section>
  );
}

function Row({ label, items }: { label: string; items: readonly string[] }) {
  return (
    <div className="py-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8">
      <span className="font-mono-ui text-xs text-[var(--color-text-tertiary)] shrink-0">
        {label}
      </span>
      <span className="font-mono text-sm text-[var(--color-text-secondary)] lowercase">
        {items.join(" · ")}
      </span>
    </div>
  );
}
