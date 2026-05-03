"use client";

// Reusable scroll-triggered fade+rise animation. Wrap any section/card group:
//
//   <GsapSectionRevealOnScroll>
//     <div className="grid">...cards...</div>
//   </GsapSectionRevealOnScroll>
//
// Direct children are staggered. Children with `data-animate-skip` are ignored.

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  y?: number;
  duration?: number;
  /** Selector for elements within the wrapper to animate. Defaults to direct children. */
  selector?: string;
};

export function GsapSectionRevealOnScroll({
  children,
  className,
  delay = 0,
  stagger = 0.08,
  y = 24,
  duration = 0.8,
  selector,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;

      const targets = selector
        ? root.querySelectorAll(selector)
        : Array.from(root.children).filter(
            (el) =>
              !(el instanceof HTMLElement && el.dataset.animateSkip !== undefined),
          );

      if (targets.length === 0) return;

      // Defensive: if the section is ALREADY in/past the viewport on mount
      // (e.g. user lands via deep-link, or short pages where everything is
      // visible), set elements to their final state immediately. Otherwise,
      // animate them in on scroll.
      const rootRect = root.getBoundingClientRect();
      const viewportH = window.innerHeight || document.documentElement.clientHeight;
      const alreadyVisible = rootRect.top < viewportH * 0.95;

      if (alreadyVisible) {
        // Already in view — just ensure visible. No animation needed.
        gsap.set(targets, { opacity: 1, y: 0 });
        return;
      }

      gsap.from(targets, {
        opacity: 0,
        y,
        duration,
        delay,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: root,
          start: "top bottom-=80",
          once: true,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
