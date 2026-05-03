import type { TimelineEntry } from "@/components/marketing/founder-track-record-timeline";
import type { FounderSocial } from "@/components/marketing/founder-social-links";

// FOUNDER: REPLACE WITH REAL TIMELINE BEFORE LAUNCH
// Each row should be a verifiable, dated, outcome-bearing engagement.
// Brand archetypes (anonymized) are FTC-safe per researcher-proof guidance.
const timeline: readonly TimelineEntry[] = [
  {
    years: "2018-2020",
    role: "growth lead, $4M supplement DTC",
    outcome: "scaled paid spend $30k→$180k/mo at 2.4x ROAS across meta + google.",
  },
  {
    years: "2020-2022",
    role: "head of lifecycle, $12M apparel DTC",
    outcome:
      "rebuilt klaviyo flows: welcome 1.2%→3.8% cvr, abandon-cart 4%→9%, post-purchase ltv +18%.",
  },
  {
    years: "2022-2024",
    role: "freelance growth, 14 brands",
    outcome:
      "47 funnel audits shipped, average 22% ltv lift in 90 days across cohort.",
  },
  {
    years: "2024-now",
    role: "building skillor",
    outcome:
      "24 marketing skills shipped while running 3 client retainers. dogfooded every skill before release.",
  },
];

// FOUNDER: FILL IN BEFORE LAUNCH — set to undefined to hide a link.
const social: FounderSocial = {
  linkedin: undefined,
  twitter: undefined,
  github: undefined,
  email: "support@skillor.app",
};

export const aboutContent = {
  hero: {
    heading: "we wrote the playbooks. once. properly.",
    intro:
      "every dtc team rebuilds the same 24 marketing playbooks. ad copy frameworks, klaviyo flows, pdp audits, retention math, attribution setups. we shipped them, productionized them, and packaged them as skills.",
  },

  timeline,
  social,

  sections: [
    {
      heading: "mission",
      body: "reduce the time between 'we should test that' and 'we shipped it' to one prompt. marketing infrastructure should be portable and ownable — not locked behind another saas seat that bills monthly forever.",
    },
    {
      heading: "what is a skill",
      body: "a skill is a single markdown file (SKILL.md) with a frontmatter contract and a process body. drop it into claude code, claude desktop, or any agent harness that reads markdown skills. claude reads the contract, follows the process, returns the artifact.\n\nno api. no installer. no runtime. you own the file.",
      bullets: [
        "frontmatter declares: when to invoke, required inputs, brand context fields.",
        "body declares: process, decision rules, output format, edge cases.",
        "everything else: yours.",
      ],
    },
    {
      heading: "why now",
      body: "ai agents only do useful marketing work when given opinionated, well-scoped instructions. generic prompts produce generic playbooks. the leverage is in the structure, not the model.\n\nskillor is that structure, in 24 pieces, for $99.",
    },
  ],

  finalCta: {
    heading: "skeptical? read one.",
    label: "READ A SKILL",
    href: "/skills",
  },
} as const;
