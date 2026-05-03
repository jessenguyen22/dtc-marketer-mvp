"use client";

// Above-the-fold hero entrance. Plays once on mount (no scroll trigger needed).
// Targets immediate children of the wrapper, staggered.

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export function GsapHeroEntranceAnimation({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;
      const targets = Array.from(root.children);
      if (targets.length === 0) return;

      gsap.from(targets, {
        opacity: 0,
        y: 28,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.05,
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
