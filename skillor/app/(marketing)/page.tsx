import Link from "next/link";
import { homepageContent } from "@/content/copy/homepage-content";
import { HomepageHeroSection } from "@/components/marketing/homepage-hero-section";
import { SkillsFeatureGrid } from "@/components/marketing/skills-feature-grid";
import { FaqAccordionList } from "@/components/marketing/faq-accordion-list";
import { TechCompatibilityTrustStrip } from "@/components/marketing/tech-compatibility-trust-strip";
import { ComparisonVsAlternativesTable } from "@/components/marketing/comparison-vs-alternatives-table";
import { GsapSectionRevealOnScroll } from "@/components/site/gsap-section-reveal-on-scroll";

export default function HomePage() {
  const c = homepageContent;

  return (
    <>
      <HomepageHeroSection
        heading={c.hero.heading}
        subheading={c.hero.subheading}
        metaTag={c.hero.metaTag}
        primaryCta={c.hero.primaryCta}
        secondaryCta={c.hero.secondaryCta}
      />

      <TechCompatibilityTrustStrip
        builtFor={c.trustStrip.builtFor}
        worksWith={c.trustStrip.worksWith}
      />

      <ValuePropStrip bullets={c.valueProp.bullets} />

      <GsapSectionRevealOnScroll>
        <SkillsFeatureGrid
          intro={c.features.intro}
          cards={c.features.cards}
          footerNote={c.features.footerNote}
          footerHref={c.features.footerHref}
        />
      </GsapSectionRevealOnScroll>

      <GsapSectionRevealOnScroll>
        <ComparisonVsAlternativesTable
          heading={c.comparison.heading}
          intro={c.comparison.intro}
          headers={c.comparison.headers}
          rows={c.comparison.rows}
        />
      </GsapSectionRevealOnScroll>

      <PricingTeaser data={c.pricingTeaser} />

      <FaqAccordionList heading="faq" items={c.faq} />

      <FinalCta data={c.finalCta} />
    </>
  );
}

function ValuePropStrip({ bullets }: { bullets: readonly string[] }) {
  return (
    <section className="w-full px-6 sm:px-8 py-12 border-t border-[var(--color-border)]">
      <GsapSectionRevealOnScroll className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        {bullets.map((b, i) => (
          <p
            key={i}
            className="font-mono-ui text-sm text-[var(--color-text-secondary)]"
          >
            <span className="text-foreground mr-2">{`0${i + 1}`}</span>
            {b}
          </p>
        ))}
      </GsapSectionRevealOnScroll>
    </section>
  );
}

function PricingTeaser({
  data,
}: {
  data: typeof homepageContent.pricingTeaser;
}) {
  return (
    <section className="w-full px-6 sm:px-8 py-24 border-t border-[var(--color-border)]">
      <div className="max-w-[1100px] mx-auto">
        <h2 className="text-3xl sm:text-4xl font-light tracking-tight mb-12">
          {data.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-border)]">
          {[data.single, data.bundle].map((tier, i) => (
            <div
              key={i}
              className="bg-background p-8 sm:p-12 border border-[var(--color-border)]"
            >
              <p className="font-mono-ui text-xs text-[var(--color-text-tertiary)]">
                {tier.label}
              </p>
              <p className="mt-2 font-display text-6xl sm:text-7xl font-light">
                {tier.price}
              </p>
              <p className="mt-4 text-[var(--color-text-secondary)]">
                {tier.note}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/pricing"
            className="font-mono-ui text-sm border border-[var(--color-border-strong)] px-6 py-3 inline-block hover:bg-[var(--color-surface)] transition-colors"
            style={{ opacity: 1 }}
          >
            COMPARE TIERS →
          </Link>
        </div>
      </div>
    </section>
  );
}

function FinalCta({ data }: { data: typeof homepageContent.finalCta }) {
  return (
    <section className="w-full px-6 sm:px-8 py-32 border-t border-[var(--color-border)]">
      <GsapSectionRevealOnScroll className="max-w-[900px] mx-auto text-center">
        <h2 className="font-display text-4xl sm:text-6xl font-light tracking-tight">
          {data.heading}
        </h2>
        <p className="mt-6 text-lg text-[var(--color-text-secondary)]">
          {data.subheading}
        </p>
        <Link
          href={data.href}
          className="mt-12 inline-block font-mono-ui text-sm px-8 py-4 btn-primary"
        >
          {data.label}
        </Link>
      </GsapSectionRevealOnScroll>
    </section>
  );
}
