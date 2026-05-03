import { pricingContent } from "@/content/copy/pricing-page-content";
import { PricingTierCards } from "@/components/marketing/pricing-tier-cards";
import { FaqAccordionList } from "@/components/marketing/faq-accordion-list";
import { RiskReversalGuaranteeBadge } from "@/components/marketing/risk-reversal-guarantee-badge";
import { AnonymizedArchetypeQuoteGrid } from "@/components/marketing/anonymized-archetype-quote-card";

export const metadata = {
  title: "pricing — skillor",
  description: pricingContent.hero.subheading,
};

export default function PricingPage() {
  const c = pricingContent;

  return (
    <>
      <section className="w-full px-6 sm:px-8 pt-24 pb-12">
        <div className="max-w-[1100px] mx-auto">
          <h1
            className="font-display font-light tracking-tight"
            style={{ fontSize: "clamp(34px, 7vw, 96px)", lineHeight: 1.05 }}
          >
            {c.hero.heading}
          </h1>
          <p className="mt-8 text-lg text-[var(--color-text-secondary)] max-w-2xl">
            {c.hero.subheading}
          </p>
        </div>
      </section>

      <RiskReversalGuaranteeBadge />

      <AnonymizedArchetypeQuoteGrid
        heading={c.archetypes.heading}
        caption={c.archetypes.caption}
        items={c.archetypes.items}
      />

      <PricingTierCards tiers={c.tiers} />

      <section className="w-full px-6 sm:px-8 py-16 border-t border-[var(--color-border)]">
        <div className="max-w-[900px] mx-auto">
          <h2 className="text-2xl font-light mb-6">{c.math.heading}</h2>
          <p className="text-[var(--color-text-secondary)] whitespace-pre-line leading-relaxed">
            {c.math.body}
          </p>
        </div>
      </section>

      <FaqAccordionList heading="pricing faq" items={c.faq} />
    </>
  );
}
