// Renders a legal page (terms / privacy / refund) from typed copy modules.
// Plain prose, brutalist treatment. Sections numbered, ids for deep-linking.

type Section = {
  id?: string;
  title?: string;
  heading?: string;
  body: string;
};

type LegalContent = {
  title: string;
  effectiveDate?: string;
  preamble?: string;
  disclaimer?: string;
  sections: readonly Section[];
};

export function LegalArticlePageRenderer({ content }: { content: LegalContent }) {
  return (
    <article className="w-full px-6 sm:px-8 py-24 max-w-[900px] mx-auto">
      <h1 className="font-display text-5xl sm:text-7xl font-light tracking-tight">
        {content.title}
      </h1>

      {content.effectiveDate && (
        <p className="mt-6 font-mono-ui text-xs text-[var(--color-text-tertiary)]">
          EFFECTIVE: {content.effectiveDate}
        </p>
      )}

      {content.preamble && (
        <p className="mt-8 text-lg text-[var(--color-text-secondary)] leading-relaxed">
          {content.preamble}
        </p>
      )}

      {content.disclaimer && (
        <div className="mt-8 border border-[var(--color-border-strong)] p-4">
          <p className="font-mono-ui text-xs text-[var(--color-text-tertiary)] mb-2">
            DISCLAIMER
          </p>
          <p className="text-sm text-[var(--color-text-secondary)]">
            {content.disclaimer}
          </p>
        </div>
      )}

      <div className="mt-16 space-y-12">
        {content.sections.map((s, i) => (
          <section key={s.id ?? i} id={s.id} className="scroll-mt-24">
            <h2 className="text-2xl font-normal mb-4">
              {s.title ?? s.heading}
            </h2>
            <div className="text-[var(--color-text-secondary)] leading-relaxed whitespace-pre-line">
              {s.body}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
