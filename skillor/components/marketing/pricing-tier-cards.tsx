// Two pricing tiers side-by-side. Bundle has emphasized border (0.2 vs 0.1).

import Link from "next/link";
import { AddBundleToCartActionButton } from "@/components/cart/add-bundle-to-cart-action-button";

type Tier = {
  id: string;
  name: string;
  price: string;
  cadence: string;
  summary: string;
  features: readonly string[];
  ctaLabel: string;
  ctaHref: string;
  highlight: boolean;
  badge?: string;
};

export function PricingTierCards({ tiers }: { tiers: readonly Tier[] }) {
  return (
    <section className="w-full px-6 sm:px-8 py-16">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-border)]">
        {tiers.map((t) => (
          <TierCard key={t.id} tier={t} />
        ))}
      </div>
    </section>
  );
}

function TierCard({ tier }: { tier: Tier }) {
  const borderClass = tier.highlight
    ? "border-2 border-[var(--color-border-strong)]"
    : "border border-[var(--color-border)]";

  return (
    <div
      id={tier.id === "bundle" ? "bundle" : undefined}
      className={`bg-background p-8 sm:p-12 flex flex-col ${borderClass}`}
    >
      <div className="flex items-center justify-between gap-4 mb-2">
        <p className="font-mono-ui text-xs text-[var(--color-text-tertiary)]">
          {tier.name}
        </p>
        {tier.badge && (
          <span className="font-mono-ui text-xs px-2 py-1 border border-foreground">
            {tier.badge}
          </span>
        )}
      </div>

      <div className="flex items-baseline gap-2 mb-2">
        <span className="font-display text-6xl sm:text-7xl font-light">
          {tier.price}
        </span>
        <span className="font-mono-ui text-xs text-[var(--color-text-tertiary)]">
          {tier.cadence}
        </span>
      </div>

      <p className="text-[var(--color-text-secondary)] mb-8">{tier.summary}</p>

      <ul className="space-y-3 mb-12">
        {tier.features.map((f, i) => (
          <li key={i} className="flex gap-3 text-sm">
            <span className="text-[var(--color-text-tertiary)] font-mono-ui">
              ▸
            </span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {tier.id === "bundle" ? (
        <AddBundleToCartActionButton
          label={tier.ctaLabel}
          className="mt-auto py-4"
        />
      ) : (
        <Link
          href={tier.ctaHref}
          className={`mt-auto font-mono-ui text-sm px-6 py-4 text-center transition-opacity ${
            tier.highlight
              ? "btn-primary"
              : "border border-[var(--color-border-strong)] text-foreground hover:bg-[var(--color-surface)]"
          }`}
          style={{ opacity: 1 }}
        >
          {tier.ctaLabel}
        </Link>
      )}
    </div>
  );
}
