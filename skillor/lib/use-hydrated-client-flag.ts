"use client";

// Returns false on the SSR pass + first client render, then true. Used to
// gate localStorage-backed UI (cart count) without hydration mismatch.
//
// Implemented via useSyncExternalStore so we avoid the
// `react-hooks/set-state-in-effect` lint rule from useEffect+setState.

import { useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};

export function useHydratedClientFlag(): boolean {
  return useSyncExternalStore(
    noopSubscribe,
    () => true, // client snapshot
    () => false, // server snapshot
  );
}
