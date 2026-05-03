import { refundContent } from "@/content/copy/legal-refund-policy-content";
import { LegalArticlePageRenderer } from "@/components/marketing/legal-article-page-renderer";

export const metadata = {
  title: "refund policy — skillor",
  description: "skillor refund policy. 7 days, full refund pre-download.",
};

export default function RefundPage() {
  const c = refundContent;
  return (
    <>
      <LegalArticlePageRenderer
        content={{
          title: c.title,
          effectiveDate: c.effectiveDate,
          preamble: c.preamble,
          sections: c.sections,
        }}
      />

      <section className="w-full px-6 sm:px-8 pb-24 max-w-[900px] mx-auto">
        <h2 className="text-2xl font-normal mb-6">edge cases</h2>
        <div className="border-t border-[var(--color-border)]">
          {c.edgeCases.map((e, i) => (
            <div
              key={i}
              className="py-6 border-b border-[var(--color-border)]"
            >
              <p className="font-mono-ui text-xs text-[var(--color-text-tertiary)] mb-2">
                {e.case.toUpperCase()}
              </p>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                {e.rule}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 border border-[var(--color-border-strong)] p-8">
          <h3 className="text-xl font-normal mb-4">{c.finalCta.heading}</h3>
          <p className="text-[var(--color-text-secondary)]">{c.finalCta.body}</p>
        </div>
      </section>
    </>
  );
}
