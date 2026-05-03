// Risk-reversal guarantee badge — surfaces the 7-day no-download refund
// policy as a buy-path trust lever (research: +21% sales-lift on visible
// guarantees). Brutalist: 0px radius, mono labels, no shadows.

type Props = {
  variant?: "full" | "compact";
};

export function RiskReversalGuaranteeBadge({ variant = "full" }: Props) {
  if (variant === "compact") {
    return (
      <div className="inline-flex items-center gap-2 border border-[var(--color-border-strong)] px-3 py-2">
        <span
          aria-hidden
          className="font-mono-ui text-[10px] text-foreground"
        >
          ◆
        </span>
        <span className="font-mono-ui text-[10px] text-foreground">
          7 DAYS · NO DOWNLOAD = FULL REFUND
        </span>
      </div>
    );
  }

  return (
    <section className="w-full px-6 sm:px-8 pb-4">
      <div className="max-w-[1100px] mx-auto">
        <div className="border-2 border-[var(--color-border-strong)] bg-[var(--color-surface)] px-6 py-5 sm:px-8 sm:py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <span
              aria-hidden
              className="font-display text-3xl sm:text-4xl font-light leading-none"
            >
              ◆
            </span>
            <div>
              <p className="font-mono-ui text-[11px] text-[var(--color-text-tertiary)] mb-1">
                RISK REVERSAL
              </p>
              <p className="font-mono-ui text-sm sm:text-base tracking-[0.08em] text-foreground">
                7 DAYS · NO QUESTIONS ASKED · NO DOWNLOAD = FULL REFUND
              </p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] sm:max-w-xs">
            email support@skillor.app within 7 days. if you haven&apos;t
            downloaded, refund clears in 1 business day.
          </p>
        </div>
      </div>
    </section>
  );
}
