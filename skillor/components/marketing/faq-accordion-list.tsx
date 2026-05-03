// FAQ list using native <details>/<summary> — works without JS,
// no Radix shadows or hydration cost. Styled to match brutalism.

type Item = { q: string; a: string };

export function FaqAccordionList({
  heading = "faq",
  items,
}: {
  heading?: string;
  items: readonly Item[];
}) {
  return (
    <section className="w-full px-6 sm:px-8 py-24 border-t border-[var(--color-border)]">
      <div className="max-w-[900px] mx-auto">
        <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-12">
          {heading}
        </h2>

        <div className="border-t border-[var(--color-border)]">
          {items.map((item, i) => (
            <details
              key={i}
              className="group border-b border-[var(--color-border)]"
            >
              <summary className="cursor-pointer list-none py-6 flex items-center justify-between gap-6 hover:opacity-50 transition-opacity">
                <span className="text-base sm:text-lg">{item.q}</span>
                <span className="font-mono-ui text-xs text-[var(--color-text-tertiary)] group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <div className="pb-6 text-[var(--color-text-secondary)] text-sm leading-relaxed max-w-2xl">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
