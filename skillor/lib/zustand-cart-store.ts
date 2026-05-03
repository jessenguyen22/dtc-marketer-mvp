"use client";

// Client-only cart store. Persists to localStorage so cart survives reloads.
// Bundle item replaces individual skills (avoids double-charge confusion).

import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  BUNDLE_SLUG,
  computeCartTotalUsd,
  hasBundleItem,
} from "./cart-pricing-calculator";

type CartState = {
  slugs: string[];
  add: (slug: string) => void;
  remove: (slug: string) => void;
  clear: () => void;
  has: (slug: string) => boolean;
  total: () => number;
  count: () => number;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      slugs: [],
      add: (slug) =>
        set((s) => {
          if (s.slugs.includes(slug)) return s;
          // If adding bundle, drop individual items (bundle covers them all).
          if (slug === BUNDLE_SLUG) return { slugs: [BUNDLE_SLUG] };
          // If bundle already in cart, ignore individual additions.
          if (hasBundleItem(s.slugs)) return s;
          return { slugs: [...s.slugs, slug] };
        }),
      remove: (slug) =>
        set((s) => ({ slugs: s.slugs.filter((x) => x !== slug) })),
      clear: () => set({ slugs: [] }),
      has: (slug) => get().slugs.includes(slug),
      total: () => computeCartTotalUsd(get().slugs),
      count: () => get().slugs.length,
    }),
    { name: "skillor-cart-v1" },
  ),
);
