import Link from "next/link";
import { docsContent } from "@/content/copy/docs-page-content";

export const metadata = {
  title: "docs — skillor",
  description: docsContent.hero.subheading,
};

export default function DocsPage() {
  const c = docsContent;

  return (
    <article className="w-full px-6 sm:px-8 py-24 max-w-[1100px] mx-auto">
      <header>
        <h1
          className="font-display font-light tracking-tight"
          style={{ fontSize: "clamp(34px, 8vw, 120px)", lineHeight: 1.05 }}
        >
          {c.hero.heading}
        </h1>
        <p className="mt-8 text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl">
          {c.hero.subheading}
        </p>
      </header>

      <nav
        aria-label="docs table of contents"
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[var(--color-border)] border border-[var(--color-border)]"
      >
        {c.toc.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            className="bg-background hover:bg-[var(--color-surface)] transition-colors px-6 py-4 font-mono-ui text-xs text-[var(--color-text-secondary)]"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mt-24 space-y-16">
        {c.sections.map((s) => (
          <section
            key={s.id}
            id={s.id}
            className="scroll-mt-24 pt-8 border-t border-[var(--color-border)]"
          >
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight mb-6 lowercase">
              {s.heading}
            </h2>
            <div className="text-[var(--color-text-secondary)] leading-relaxed whitespace-pre-line max-w-3xl text-[15px]">
              <DocsBodyWithCodeBlocks raw={s.body} />
            </div>
          </section>
        ))}
      </div>

      <div className="mt-24 pt-12 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <h2 className="font-display text-3xl sm:text-4xl font-light">
          {c.finalCta.heading}
        </h2>
        <Link href={c.finalCta.href} className="btn-primary font-mono-ui text-sm px-8 py-4">
          {c.finalCta.label}
        </Link>
      </div>
    </article>
  );
}

// Splits markdown body on triple-backtick fences and renders code in <pre>.
// Avoids pulling in react-markdown for a tiny use case.
function DocsBodyWithCodeBlocks({ raw }: { raw: string }) {
  const parts = raw.split(/```([\s\S]*?)```/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <pre
            key={i}
            className="my-4 border border-[var(--color-border)] p-4 text-sm font-mono-ui whitespace-pre-wrap"
            style={{ textTransform: "none", letterSpacing: "normal" }}
          >
            {part.trim()}
          </pre>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}
