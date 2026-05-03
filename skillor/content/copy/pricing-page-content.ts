// Pricing copy — driven by sales/funnel audit (260503-0314).
// Key shifts:
//   - hero subhead names the buyer's real anchor (agency rates)
//   - math leads with absolute value vs alternatives, not just bundle savings
//   - tier CTAs: BUY → GET / OWN
//   - bundle "RECOMMENDED" → "BEST MATH" (matches math section)
//   - FAQ adds: harness compatibility, wrong-skill-swap, "skillor goes dark?"

export const pricingContent = {
  hero: {
    heading: "two prices. no subscription.",
    subheading:
      "one klaviyo rebuild at agency rates: $300–500. one funnel audit deck: $1,500. one skill is $19. the bundle is $99.",
  },

  // FOUNDER: REPLACE WITH REAL BETA QUOTES WHEN AVAILABLE (week 2-3).
  // Until then: anonymized archetypes from prior consulting work,
  // labeled per FTC guidelines as "founder's prior consulting work" —
  // not testimonials of the current product.
  archetypes: {
    heading: "what these skills produced before they were skills",
    caption:
      "two anonymized engagements from the founder's prior DTC consulting work. labeled per FTC. not customer testimonials of skillor.",
    items: [
      {
        brand: "$4M supplement DTC · q4 2024",
        quote:
          "rebuilt klaviyo welcome flow in 40 minutes. converted 1.2%→3.8% in next 14 days.",
        outcome: "+2.6pp welcome-flow conversion in 14d",
      },
      {
        brand: "$12M apparel brand · q1 2025",
        quote:
          "ran funnel_audit on a stalled paid program. found $14k/mo waste in retargeting overlap. fixed in one week.",
        outcome: "$14k/mo retargeting waste eliminated",
      },
    ],
  },

  guarantee: {
    headline: "7 DAYS · NO QUESTIONS ASKED · NO DOWNLOAD = FULL REFUND",
  },

  tiers: [
    {
      id: "single",
      name: "one skill",
      price: "$19",
      cadence: "one-time · perpetual license",
      summary: "any single skill from the catalog.",
      features: [
        "one SKILL.md file (≈200–600 lines)",
        "skillor commercial license — use in your own work or client deliverables",
        "all v1.x updates to that skill",
        "delivered by email, instantly",
        "works in claude code, claude desktop, opencode, cursor",
      ],
      ctaLabel: "BROWSE THE CATALOG",
      ctaHref: "/skills",
      highlight: false,
    },
    {
      id: "bundle",
      name: "the library",
      price: "$99",
      cadence: "one-time · perpetual license",
      summary: "every skill in the catalog + every future addition.",
      features: [
        "every skill in the catalog (today + future v1.x additions, free)",
        "skillor commercial license — use in your own work or client deliverables",
        "outputs (everything claude produces) are 100% yours",
        "delivered as a single .zip + per-skill download links",
        "priority email support",
        "perpetual — yours even if skillor goes dark tomorrow",
      ],
      ctaLabel: "GET THE LIBRARY — $99",
      ctaHref: "#bundle-checkout",
      highlight: true,
      badge: "BEST MATH",
    },
  ],

  math: {
    heading: "the math",
    body: "today's catalog × $19 a la carte = $456. library is $99. break-even: 6 skills. the library is correct unless you only need ≤5.\n\nas the catalog grows, your library grows for free (v1.x updates included). every skill we add is free for past library buyers — that's the lock-in incentive for buying early.\n\nthe other math: one klaviyo welcome-flow rebuild at an agency = $300–500. one paid-account audit = $1,500–3,000. the library pays back on the first skill you ship.",
  },

  faq: [
    {
      q: "are those quote cards real customers?",
      a: "no — and that's the point of labeling them 'founder's prior consulting work.' those two engagements happened before skillor existed; the skills are the codified version of what worked in those rooms. real beta-customer quotes ship in weeks 2–3 once early buyers report back.",
    },
    {
      q: "what if i don't use claude code?",
      a: "skills are markdown. they work in claude code, claude desktop, opencode, and cursor (paste into rules). any agent harness that reads markdown works. no vendor lock-in by design.",
    },
    {
      q: "what if i buy the wrong skill?",
      a: "email support@skillor.app within 7 days with your order id — we'll swap it for the right one. no need to refund + repurchase.",
    },
    {
      q: "what payment methods?",
      a: "paypal smart checkout. credit/debit card via paypal guest checkout supported.",
    },
    {
      q: "is the price in usd?",
      a: "yes. paypal handles the conversion at their rate.",
    },
    {
      q: "team licenses?",
      a: "one purchase covers unlimited internal use within ONE company or sole-trader practice. agencies serving multiple clients: see /legal/license §4 — short version, one purchase covers all client work performed by you. larger agencies (5+ people each independently running skills): contact us for a team rate.",
    },
    {
      q: "can i upgrade single → library later?",
      a: "yes. email support@skillor.app with your single-skill order id. you pay the difference ($99 − whatever you've already paid).",
    },
    {
      q: "what if skillor disappears?",
      a: "perpetual license + you own the file. nothing phones home, nothing requires our infrastructure to run. download it once, save it locally, use it forever. that's the point of selling files instead of seats.",
    },
    {
      q: "can i resell or share these skills?",
      a: "no — that breaks the commercial license. each operator using a skill needs their own purchase. you CAN ship the OUTPUTS claude produces (ad copy, audits, flow specs) however you want — those artifacts are 100% yours. one skill (funnel_audit) is open-sourced under MIT as a public sample; that one you can redistribute. full terms at /legal/license.",
    },
    {
      q: "what about v2.x?",
      a: "v2 is a future paid upgrade. all v1.x updates are free for life of v1.",
    },
    {
      q: "vat / sales tax?",
      a: "prices listed are pre-tax. paypal collects applicable taxes per buyer location.",
    },
  ],
} as const;
