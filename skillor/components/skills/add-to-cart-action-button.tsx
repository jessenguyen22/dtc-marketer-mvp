"use client";

// Adds the skill (or bundle) to the Zustand cart. Toggles to "REMOVE" when
// the item is already in cart, so the button always reflects truth.

import { useState } from "react";
import { useCartStore } from "@/lib/zustand-cart-store";
import { useHydratedClientFlag } from "@/lib/use-hydrated-client-flag";

type Props = {
  slug: string;
  name: string; // reserved for toast / analytics — currently unused
  price: number;
  variant?: "primary" | "ghost";
  className?: string;
};

export function AddToCartActionButton({
  slug,
  price,
  variant = "primary",
  className = "",
}: Props) {
  const inCart = useCartStore((s) => s.slugs.includes(slug));
  const add = useCartStore((s) => s.add);
  const remove = useCartStore((s) => s.remove);

  const hydrated = useHydratedClientFlag();
  const [justAdded, setJustAdded] = useState(false);

  const onClick = () => {
    if (inCart) {
      remove(slug);
      return;
    }
    add(slug);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  const baseStyle =
    "font-mono-ui text-sm px-6 py-3 transition-opacity inline-block text-center";
  const variantStyle =
    variant === "primary"
      ? "btn-primary"
      : "border border-[var(--color-border-strong)] text-foreground hover:bg-[var(--color-surface)]";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} ${className}`}
      style={{ opacity: 1 }}
    >
      {!hydrated
        ? `ADD TO CART — $${price}`
        : inCart
          ? "✓ IN CART — REMOVE"
          : justAdded
            ? "ADDED ✓"
            : `ADD TO CART — $${price}`}
    </button>
  );
}
