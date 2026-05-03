export const termsContent = {
  title: "terms of service",
  effectiveDate: "2026-05-03",
  preamble:
    "by buying or using skillor (the 'service'), you agree to these terms. if you do not agree, do not buy or use the service.",
  disclaimer:
    "this is a plain-language summary written by the founder. not legal advice. consult a lawyer before relying on it for your own use case.",

  sections: [
    {
      id: "who-we-are",
      title: "1. who we are",
      body: "skillor is operated by a solo developer ('we', 'us'). contact: support@skillor.app.",
    },
    {
      id: "what-we-sell",
      title: "2. what we sell",
      body: "digital downloads. each skill is a markdown file (SKILL.md) sold under the Skillor Commercial License (full terms at /legal/license). one skill (funnel_audit) is published openly under MIT as a public sample. no software service, no hosted runtime, no ongoing obligation beyond delivery + free v1.x updates.",
    },
    {
      id: "license",
      title: "3. license",
      body: "each purchased skill is licensed under the Skillor Commercial License (perpetual single-buyer use, modifications private, no redistribution / resale of the file). full plain-language terms at /legal/license. exception: funnel_audit ships under MIT as a public sample — see its frontmatter `license:` field.",
    },
    {
      id: "payment",
      title: "4. payment",
      body: "payments processed by paypal. we receive only the data paypal forwards (email, name, transaction id). we do not store card data. prices are in usd. paypal handles currency conversion + applicable taxes.",
    },
    {
      id: "delivery",
      title: "5. delivery",
      body: "after successful capture, we email a download link signed with a 24-hour token. if you do not receive the email within 10 minutes, check spam, then contact support@skillor.app.",
    },
    {
      id: "refunds",
      title: "6. refunds",
      body: "7 days from purchase, provided the download link has not been clicked. once the file is downloaded, the sale is final. see the refund policy for details.",
    },
    {
      id: "warranty",
      title: "7. warranty + liability",
      body: "the service is provided 'as is', without warranty. we are not liable for indirect, consequential, or incidental damages. our maximum liability is the amount you paid in the last 12 months. some jurisdictions do not allow these limits — they apply to the maximum extent permitted by law.",
    },
    {
      id: "acceptable-use",
      title: "8. acceptable use",
      body: "do not: redistribute the verbatim files for free or sale, claim authorship of unmodified skills, use the service to violate law. do: modify freely, fork, ship.",
    },
    {
      id: "changes",
      title: "9. changes",
      body: "we may update these terms. the 'effective date' tracks the latest version. material changes will be emailed to past customers.",
    },
    {
      id: "jurisdiction",
      title: "10. jurisdiction",
      body: "governed by the laws of the founder's country of residence. disputes resolved in that jurisdiction's courts unless otherwise required by your local consumer protection laws.",
    },
    {
      id: "contact",
      title: "11. contact",
      body: "questions, breach reports, takedown requests: support@skillor.app.",
    },
  ],
} as const;
