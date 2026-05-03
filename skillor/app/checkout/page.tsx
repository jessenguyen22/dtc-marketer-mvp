// Standalone checkout — outside the marketing route group so it can ship a
// minimal, focused layout (no big footer, no nav distractions).

import Link from "next/link";
import { CheckoutCartSummaryAndForm } from "@/components/cart/checkout-cart-summary-and-form";

export const metadata = {
  title: "checkout — skillor",
  robots: { index: false, follow: false },
};

export default function CheckoutPage() {
  return (
    <main className="min-h-screen w-full px-6 sm:px-8 py-12">
      <div className="max-w-[1100px] mx-auto">
        <header className="flex items-center justify-between mb-12">
          <Link href="/" className="font-mono-ui text-sm" style={{ opacity: 1 }}>
            ← SKILLOR
          </Link>
          <span className="font-mono-ui text-xs text-[var(--color-text-tertiary)]">
            CHECKOUT
          </span>
        </header>

        <h1
          className="font-display font-light tracking-tight mb-12"
          style={{ fontSize: "clamp(40px, 7vw, 80px)", lineHeight: 1.05 }}
        >
          checkout.
        </h1>

        <CheckoutCartSummaryAndForm />
      </div>
    </main>
  );
}
