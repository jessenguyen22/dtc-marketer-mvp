"use client";

// Client island for /checkout — owns the cart-snapshot rendering, email field,
// and PayPal button. Server page just provides static layout shell.

import Link from "next/link";
import { useState } from "react";
import { useCartStore } from "@/lib/zustand-cart-store";
import {
  BUNDLE_SLUG,
  isValidEmail,
  SINGLE_SKILL_PRICE_USD,
  BUNDLE_PRICE_USD,
} from "@/lib/cart-pricing-calculator";
import { useHydratedClientFlag } from "@/lib/use-hydrated-client-flag";
import { PaypalSmartCheckoutButton } from "./paypal-smart-checkout-button";

export function CheckoutCartSummaryAndForm() {
  const slugs = useCartStore((s) => s.slugs);
  const remove = useCartStore((s) => s.remove);
  const total = useCartStore((s) => s.total());

  const hydrated = useHydratedClientFlag();

  const [email, setEmail] = useState("");
  const emailValid = isValidEmail(email);

  if (!hydrated) {
    return <p className="text-[var(--color-text-tertiary)]">loading cart…</p>;
  }

  if (slugs.length === 0) {
    return <EmptyCartNotice />;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <section>
        <h2 className="font-mono-ui text-xs text-[var(--color-text-tertiary)] mb-6">
          ORDER SUMMARY
        </h2>

        <div className="border-t border-[var(--color-border)]">
          {slugs.map((slug) => {
            const isBundle = slug === BUNDLE_SLUG;
            const label = isBundle
              ? "skillor bundle — all 24 skills"
              : `skill: ${slug.replace(/-/g, " ")}`;
            const price = isBundle ? BUNDLE_PRICE_USD : SINGLE_SKILL_PRICE_USD;
            return (
              <div
                key={slug}
                className="py-4 border-b border-[var(--color-border)] flex items-center justify-between gap-4"
              >
                <div>
                  <p className="text-sm">{label}</p>
                  <button
                    type="button"
                    onClick={() => remove(slug)}
                    className="mt-1 font-mono-ui text-xs text-[var(--color-text-tertiary)] hover:text-foreground transition-colors"
                  >
                    REMOVE
                  </button>
                </div>
                <span className="font-mono-ui text-sm">${price}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex items-baseline justify-between">
          <span className="font-mono-ui text-xs text-[var(--color-text-tertiary)]">
            TOTAL (USD)
          </span>
          <span className="font-display text-4xl font-light">${total}</span>
        </div>
      </section>

      <section>
        <h2 className="font-mono-ui text-xs text-[var(--color-text-tertiary)] mb-6">
          DELIVERY EMAIL
        </h2>
        <p className="text-sm text-[var(--color-text-secondary)] mb-4">
          we send the download link here. paypal email is not used.
        </p>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          autoComplete="email"
          required
          className="w-full bg-transparent border border-[var(--color-border-strong)] px-4 py-3 text-foreground placeholder:text-[var(--color-text-quaternary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-ring)]"
        />

        <div className="mt-8">
          <PaypalSmartCheckoutButton email={email} disabled={!emailValid} />
        </div>

        <p className="mt-6 text-xs text-[var(--color-text-tertiary)]">
          by checking out, you agree to our{" "}
          <Link href="/legal/terms" className="underline hover:opacity-50">
            terms
          </Link>{" "}
          and{" "}
          <Link href="/legal/refund" className="underline hover:opacity-50">
            refund policy
          </Link>
          .
        </p>
      </section>
    </div>
  );
}

function EmptyCartNotice() {
  return (
    <div className="border border-[var(--color-border)] p-12 text-center">
      <p className="font-mono-ui text-xs text-[var(--color-text-tertiary)] mb-4">
        CART EMPTY
      </p>
      <p className="text-[var(--color-text-secondary)]">
        nothing in cart yet. start with the bundle, or pick individual skills.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/pricing#bundle"
          className="font-mono-ui text-sm px-6 py-3 btn-primary transition-opacity"
          style={{ opacity: 1 }}
        >
          BUY BUNDLE — $99
        </Link>
        <Link
          href="/skills"
          className="font-mono-ui text-sm px-6 py-3 border border-[var(--color-border-strong)] hover:bg-[var(--color-surface)] transition-colors"
          style={{ opacity: 1 }}
        >
          BROWSE SKILLS
        </Link>
      </div>
    </div>
  );
}
