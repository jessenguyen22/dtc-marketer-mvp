"use client";

// Used on /pricing #bundle CTA. Adds the synthetic bundle slug and routes to checkout.

import { useRouter } from "next/navigation";
import { useCartStore } from "@/lib/zustand-cart-store";
import { BUNDLE_SLUG } from "@/lib/cart-pricing-calculator";

export function AddBundleToCartActionButton({
  className = "",
  label = "BUY BUNDLE — $99",
}: {
  className?: string;
  label?: string;
}) {
  const add = useCartStore((s) => s.add);
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => {
        add(BUNDLE_SLUG);
        router.push("/checkout");
      }}
      className={`font-mono-ui text-sm px-6 py-3 btn-primary transition-opacity inline-block text-center ${className}`}
      style={{ opacity: 1 }}
    >
      {label}
    </button>
  );
}
