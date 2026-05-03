"use client";

// Initializes Lenis smooth scrolling once at the document level + drives the
// requestAnimationFrame loop that GSAP ScrollTrigger reads from.
// Mount once at the root layout (above {children}).

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function LenisSmoothScrollProvider() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // Reduce lerp on touch devices for snappier mobile feel.
      touchMultiplier: 1.5,
    });

    // Bridge Lenis → GSAP ticker so ScrollTrigger uses the smoothed scroll position.
    lenis.on("scroll", ScrollTrigger.update);

    function raf(time: number) {
      lenis.raf(time * 1000);
    }
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // After Lenis is wired into GSAP's ticker, force ScrollTrigger to
    // recompute trigger positions. Without this, triggers registered before
    // Lenis was ready can have stale positions and never fire.
    const refreshId = window.setTimeout(() => ScrollTrigger.refresh(), 100);

    return () => {
      window.clearTimeout(refreshId);
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
