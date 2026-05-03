// Comparison table — Skillor vs ChatGPT prompt / Agency / DIY hours.
// Brutalist: 0 radius, mono cells, yes/no/partial tags.

type Cell = {
  tag: "yes" | "no" | "partial";
  text: string;
};

type ComparisonRow = {
  label: string;
  cells: readonly [Cell, Cell, Cell, Cell];
};

type ComparisonProps = {
  heading: string;
  intro?: string;
  headers: readonly [string, string, string, string];
  rows: readonly ComparisonRow[];
};

const TAG_STYLES: Record<Cell["tag"], string> = {
  yes: "text-foreground border-[var(--color-border-strong)]",
  no: "text-[var(--color-text-tertiary)] border-[var(--color-border)]",
  partial: "text-[var(--color-text-secondary)] border-[var(--color-border)]",
};

export function ComparisonVsAlternativesTable({
  heading,
  intro,
  headers,
  rows,
}: ComparisonProps) {
  return (
    <section className="w-full px-6 sm:px-8 py-24 border-t border-[var(--color-border)]">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-4">
          {heading}
        </h2>
        {intro && (
          <p className="text-[var(--color-text-secondary)] max-w-2xl mb-12">
            {intro}
          </p>
        )}

        {/* Desktop / tablet table */}
        <div className="hidden md:block border border-[var(--color-border)]">
          <div className="grid grid-cols-5 border-b border-[var(--color-border)]">
            <div className="font-mono-ui text-xs text-[var(--color-text-tertiary)] p-4" />
            {headers.map((h, i) => (
              <div
                key={i}
                className={`font-mono-ui text-xs p-4 border-l border-[var(--color-border)] ${
                  i === headers.length - 1
                    ? "text-foreground"
                    : "text-[var(--color-text-tertiary)]"
                }`}
              >
                {h}
              </div>
            ))}
          </div>
          {rows.map((row, ri) => (
            <div
              key={ri}
              className={`grid grid-cols-5 ${
                ri < rows.length - 1
                  ? "border-b border-[var(--color-border)]"
                  : ""
              }`}
            >
              <div className="p-4 text-sm text-[var(--color-text-secondary)]">
                {row.label}
              </div>
              {row.cells.map((cell, ci) => (
                <div
                  key={ci}
                  className={`p-4 border-l border-[var(--color-border)] ${
                    ci === row.cells.length - 1 ? "bg-[var(--color-surface)]" : ""
                  }`}
                >
                  <CellTag cell={cell} />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Mobile stacked */}
        <div className="md:hidden flex flex-col gap-px bg-[var(--color-border)]">
          {rows.map((row, ri) => (
            <div
              key={ri}
              className="bg-background p-4 border border-[var(--color-border)]"
            >
              <p className="text-sm text-foreground mb-3">{row.label}</p>
              <div className="grid grid-cols-2 gap-3">
                {row.cells.map((cell, ci) => (
                  <div key={ci} className="flex flex-col gap-1">
                    <span className="font-mono-ui text-[10px] text-[var(--color-text-tertiary)]">
                      {headers[ci]}
                    </span>
                    <CellTag cell={cell} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CellTag({ cell }: { cell: Cell }) {
  return (
    <div className="flex flex-col gap-2">
      <span
        className={`font-mono-ui text-[10px] px-2 py-1 border w-fit ${
          TAG_STYLES[cell.tag]
        }`}
      >
        {cell.tag}
      </span>
      <span className="font-mono text-xs text-[var(--color-text-secondary)] leading-relaxed break-words" style={{ overflowWrap: "anywhere" }}>
        {cell.text}
      </span>
    </div>
  );
}
