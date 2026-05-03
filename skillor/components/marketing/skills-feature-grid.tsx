// Grid of feature cards highlighting top skills.
// Hover: border opacity 0.1 → 0.2 (NOT brightening fill — xAI dim convention).

import Link from "next/link";

type Card = {
  slug: string;
  title: string;
  body: string;
  tag: string;
};

type Props = {
  intro?: string;
  cards: readonly Card[];
  footerNote?: string;
  footerHref?: string;
};

export function SkillsFeatureGrid({
  intro,
  cards,
  footerNote,
  footerHref,
}: Props) {
  return (
    <section className="w-full px-6 sm:px-8 py-24 border-t border-[var(--color-border)]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-baseline justify-between gap-8 mb-16 flex-wrap">
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight">
            featured skills
          </h2>
          {intro && (
            <p className="text-[var(--color-text-secondary)] max-w-md">
              {intro}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[var(--color-border)]">
          {cards.map((c) => (
            <FeatureCard key={c.slug} card={c} />
          ))}
        </div>

        {footerNote && footerHref && (
          <div className="mt-12">
            <Link
              href={footerHref}
              className="font-mono-ui text-sm border border-[var(--color-border-strong)] px-6 py-3 inline-block hover:bg-[var(--color-surface)] transition-colors"
              style={{ opacity: 1 }}
            >
              {footerNote}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

function FeatureCard({ card }: { card: Card }) {
  return (
    <Link
      href={`/skills/${card.slug}`}
      className="group block p-8 border-r border-b border-[var(--color-border)] hover:bg-[var(--color-surface)] transition-colors"
      style={{ opacity: 1 }}
    >
      <span className="font-mono-ui text-xs text-[var(--color-text-tertiary)] border border-[var(--color-border-strong)] px-2 py-1">
        {card.tag}
      </span>
      <h3 className="mt-6 text-xl font-normal">{card.title}</h3>
      <p className="mt-4 text-sm text-[var(--color-text-secondary)] leading-relaxed">
        {card.body}
      </p>
      <span className="mt-8 inline-block font-mono-ui text-xs text-[var(--color-text-tertiary)] group-hover:text-foreground transition-colors">
        READ →
      </span>
    </Link>
  );
}
