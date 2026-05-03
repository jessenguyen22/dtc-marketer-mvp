// Homepage marketing copy — xAI brutalist tone.
// Rewrites driven by content/funnel/sales audit (260503-0314).
// Key shifts:
//   - hero: kill "executable" jargon, surface harness compatibility
//   - features.cards: replace generic descriptions with dtc_use_case scenarios
//   - faq: add "isn't this just a prompt template?" objection handler
//   - faq: add "what if i don't use claude code?" objection handler
//   - faq: refund reframed buyer-first (not gotcha-first)
//   - finalCta: pull "wrote while shipping" credibility forward
//   - CTA verbs: BUY → GET / OWN

export const homepageContent = {
  hero: {
    heading: ["24 dtc marketing", "playbooks. for claude."],
    subheading:
      "drop them in claude code, claude desktop, opencode, or any markdown-aware agent. ship the next ad brief, klaviyo flow, or pdp audit in under 10 minutes — not next week.",
    metaTag: "v1.0 // SKILLOR LIBRARY",
    primaryCta: { label: "GET THE LIBRARY — $99", href: "/pricing#bundle" },
    secondaryCta: { label: "SEE WHAT'S INSIDE", href: "/skills" },
  },

  valueProp: {
    bullets: [
      "written by an operator who shipped them at $1M–$40M dtc brands.",
      "no subscription. no seat fees. one-time purchase, perpetual license.",
      "use in your own work or in client deliverables — outputs are 100% yours.",
    ],
  },

  features: {
    intro:
      "every skill is a system, not a prompt. opinionated process, scored output, paste-ready artifacts. examples ↓",
    cards: [
      {
        slug: "shopify_pdp",
        title: "shopify pdp",
        body: "founder pastes a shopify pdp url with 0.8% add-to-cart. skill returns a prioritized fix list (above-fold rewrite, 3 social-proof modules, 2 objection answers, sticky atc mobile) with copy ready to paste into theme.",
        tag: "PRIORITY 10",
      },
      {
        slug: "ads_copy",
        title: "ads copy",
        body: "brand needs 8 fresh meta ad concepts for a memorial day push. skill returns 8 distinct angles, 3 copy variants per angle with platform char limits, scored for compliance + brand voice + hook strength.",
        tag: "PRIORITY 10",
      },
      {
        slug: "klaviyo_email",
        title: "klaviyo email",
        body: "founder says 'our welcome flow is one email and converts 1.2%' — skill audits it and ships a 5-email rebuild ready to paste into klaviyo with subject lines, body copy, segmentation rules, send-time logic.",
        tag: "PRIORITY 10",
      },
      {
        slug: "funnel_audit",
        title: "funnel audit",
        body: "founder asks 'where are we losing money?' — skill identifies the worst-vs-benchmark drop-off (e.g. atc → ic at 18% vs 32%), traces 3 likely causes, ranks fixes by expected revenue recovery.",
        tag: "PRIORITY 8",
      },
      {
        slug: "wasted_ad_spend_finder",
        title: "wasted ad spend finder",
        body: "brand spends $120k/mo across meta + google. skill identifies $18k of fixable waste (dead campaigns, brand-search cannibalization, retargeting overlap with prospecting) with a 1-week action list.",
        tag: "PRIORITY 8",
      },
      {
        slug: "retention_churn_flow",
        title: "retention + churn flow",
        body: "brand has $42 cac and 18% repeat rate at 90 days. skill identifies which cohorts churn earliest, builds an at-risk segment, designs a 4-touch win-back, recommends a replenishment trigger.",
        tag: "PRIORITY 9",
      },
    ],
    footerNote: "+ 18 more. see the full catalog →",
    footerHref: "/skills",
  },

  trustStrip: {
    builtFor: {
      label: "BUILT FOR",
      items: ["claude code", "claude desktop", "opencode", "cursor"],
    },
    worksWith: {
      label: "WORKS WITH",
      items: [
        "klaviyo",
        "shopify",
        "meta ads",
        "google ads",
        "tiktok ads",
      ],
    },
  },

  comparison: {
    heading: "vs the alternatives.",
    intro:
      "every dtc team has tried these. here's what each costs you in time, output quality, and ownership.",
    headers: [
      "vs ChatGPT prompt",
      "vs Agency",
      "vs DIY hours",
      "Skillor",
    ],
    rows: [
      {
        label: "setup time",
        cells: [
          { tag: "yes", text: "5 min — paste a prompt" },
          { tag: "no", text: "2–4 weeks onboarding" },
          { tag: "no", text: "10–40 hrs to spec yourself" },
          { tag: "yes", text: "10 min — drop the file in" },
        ],
      },
      {
        label: "scoring & QA",
        cells: [
          { tag: "no", text: "no rubric, blob output" },
          { tag: "partial", text: "depends on the agency" },
          { tag: "partial", text: "if you wrote the rubric" },
          { tag: "yes", text: "self-scoring + anti-patterns" },
        ],
      },
      {
        label: "char / platform limits",
        cells: [
          { tag: "no", text: "ignored" },
          { tag: "yes", text: "they know meta vs google" },
          { tag: "partial", text: "you have to encode them" },
          { tag: "yes", text: "enforced per-platform" },
        ],
      },
      {
        label: "output format guarantees",
        cells: [
          { tag: "no", text: "shape drifts every run" },
          { tag: "yes", text: "decks, docs, briefs" },
          { tag: "partial", text: "your spec, your job" },
          { tag: "yes", text: "paste-ready artifact spec" },
        ],
      },
      {
        label: "cost",
        cells: [
          { tag: "yes", text: "claude sub only" },
          { tag: "no", text: "$300–500 / klaviyo flow · $1,500–3,000 / audit" },
          { tag: "partial", text: "10–40 hrs of your time" },
          { tag: "yes", text: "$19 / skill · $99 bundle" },
        ],
      },
      {
        label: "ownership",
        cells: [
          { tag: "no", text: "lives in chat history" },
          { tag: "no", text: "you rent the relationship" },
          { tag: "yes", text: "yours — but unmaintained" },
          { tag: "yes", text: "perpetual license. modify privately." },
        ],
      },
    ],
  },

  pricingTeaser: {
    heading: "two prices.",
    single: {
      label: "one skill",
      price: "$19",
      note: "any single skill from the catalog. delivered as a markdown file.",
    },
    bundle: {
      label: "the library",
      price: "$99",
      note: "every skill in the catalog + every future addition. break-even at six.",
    },
  },

  faq: [
    {
      q: "isn't this just a prompt template?",
      a: "no. a prompt tells claude what to do. a skill tells claude when to invoke, what inputs to require, what process to follow, what anti-patterns to reject, how to score its own output, and what artifact to return. ads_copy enforces platform char limits, scores every variant, and outputs an a/b kill-rule plan — not a blob of copy. you could write this yourself in a week. we already did.",
    },
    {
      q: "what if i don't use claude code?",
      a: "skills are markdown files. they work in claude desktop, opencode, cursor (paste into rules), or any agent harness that reads markdown. portable by design — that's the point. no vendor lock-in.",
    },
    {
      q: "what do i actually get?",
      a: "a markdown file (SKILL.md) per purchase, or a zip of every skill in the catalog if you buy the library. each is ~200–600 lines: yaml frontmatter (when claude should invoke + required inputs), then a process body (steps, decision rules, output spec, edge cases). no SaaS, no login, no runtime.",
    },
    {
      q: "the refund?",
      a: "haven't clicked the download link yet? email us within 7 days, we'll refund — no argument. once you've clicked, the sale is final (digital goods convention). full edge-cases at /legal/refund.",
    },
    {
      q: "what about updates?",
      a: "every v1.x update is free. when a skill is improved, we email past buyers a fresh download link. major versions (v2+) are a separate release.",
    },
    {
      q: "is the library actually worth it?",
      a: "today's catalog × $19 each is $456 a la carte. library is $99. break-even at 6 skills. one klaviyo flow rebuild at agency rates is $300–500 — the library pays back on the first skill you ship. as the catalog grows, your library grows for free (v1.x updates included). perpetual license — yours forever, even if skillor goes dark tomorrow.",
    },
  ],

  finalCta: {
    heading: "the playbooks are written.",
    subheading:
      "by an operator who shipped them, not a copywriter who imagined them. drop them in tonight, ship before friday.",
    label: "GET THE LIBRARY — $99",
    href: "/pricing#bundle",
  },
} as const;

export type HomepageContent = typeof homepageContent;
