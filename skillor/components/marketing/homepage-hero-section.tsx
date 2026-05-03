// Homepage hero — fits in a single viewport on most screens.
// Heading clamp keeps the 2-line monospace title inside ~70vh on desktop, ~80vh
// on mobile. Section uses min-h-[100svh] so the hero itself is one screen tall.

import Link from "next/link";
import { GsapHeroEntranceAnimation } from "@/components/site/gsap-hero-entrance-animation";

type HeroProps = {
  heading: readonly string[];
  subheading: string;
  metaTag?: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export function HomepageHeroSection({
  heading,
  subheading,
  metaTag,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="w-full px-6 sm:px-8 min-h-[100svh] flex items-center py-20 sm:py-24">
      <GsapHeroEntranceAnimation className="max-w-[1200px] w-full mx-auto flex flex-col items-start">
        {metaTag && (
          <span className="font-mono-ui text-xs text-[var(--color-text-tertiary)] border border-[var(--color-border-strong)] px-2 py-1 mb-8">
            {metaTag}
          </span>
        )}

        <h1
          className="font-display font-light tracking-tight"
          style={{
            fontSize: "clamp(40px, 6.4vw, 96px)",
            lineHeight: 1.04,
          }}
        >
          {heading.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>

        <p className="mt-8 max-w-2xl text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed">
          {subheading}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link
            href={primaryCta.href}
            className="font-mono-ui text-sm px-6 py-3 btn-primary inline-block text-center"
          >
            {primaryCta.label}
          </Link>
          <Link
            href={secondaryCta.href}
            className="font-mono-ui text-sm px-6 py-3 border border-[var(--color-border-strong)] text-foreground hover:bg-[var(--color-surface)] transition-colors inline-block text-center"
          >
            {secondaryCta.label}
          </Link>
        </div>
      </GsapHeroEntranceAnimation>
    </section>
  );
}
