"use client";

// Small cart icon button mounted in the site nav. Shows item count badge
// when cart is non-empty. Clicking takes user to /checkout.

import Link from "next/link";
import { useCartStore } from "@/lib/zustand-cart-store";
import { useHydratedClientFlag } from "@/lib/use-hydrated-client-flag";

export function CartIconButtonWithCountBadge() {
  const count = useCartStore((s) => s.slugs.length);
  // Avoid hydration mismatch — render placeholder on first paint.
  const hydrated = useHydratedClientFlag();

  const displayCount = hydrated ? count : 0;

  return (
    <Link
      href="/checkout"
      aria-label={`cart (${displayCount} items)`}
      className="relative font-mono-ui text-xs px-3 py-2 border border-[var(--color-border-strong)] hover:bg-[var(--color-surface)] transition-colors inline-flex items-center gap-2"
      style={{ opacity: 1 }}
    >
      <span>CART</span>
      <span
        className={`min-w-[1.5em] text-center px-1 ${
          displayCount > 0
            ? "btn-primary"
            : "text-[var(--color-text-tertiary)]"
        }`}
      >
        {displayCount}
      </span>
    </Link>
  );
}
