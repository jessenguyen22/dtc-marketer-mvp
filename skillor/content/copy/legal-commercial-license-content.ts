// Skillor Commercial License — what each purchase actually grants.
// Plain-language version of the legal terms. Founder is not a lawyer; consult one
// before relying on this for high-stakes commercial use.

export const commercialLicenseContent = {
  title: "skillor commercial license",
  effectiveDate: "2026-05-03",
  shortName: "Skillor Commercial License v1.0",
  preamble:
    "purchasing a skill grants the buyer a perpetual, non-transferable license to use the skill in their own work or in client deliverables they ship. it does not grant the right to redistribute, resell, or republish the skill file itself.",
  disclaimer:
    "plain-language summary written by the founder. not legal advice. consult a lawyer for high-stakes commercial use.",

  sections: [
    {
      id: "what-you-can-do",
      title: "1. what you can do",
      body: "use the skill in your own dtc marketing work.\nuse the skill in client deliverables you produce + sell (agency / freelance / consulting).\nload it into claude code, claude desktop, opencode, or any markdown-aware agent harness.\nmodify the file privately for your own or your clients' use.\nuse the artifacts produced by the skill (ad copy, audit reports, flow specs) however you want — those outputs are 100% yours.",
    },
    {
      id: "what-you-cannot-do",
      title: "2. what you cannot do",
      body: "redistribute the SKILL.md file (verbatim or modified) in public — github, gist, blog post, paid product, free download.\nresell the file as your own product or include it in a paid product/template/course you sell.\nshare your purchased copy with people who have not bought their own license. each operator using the skill needs their own license. teams: see §4.\nremove or alter the frontmatter (name, license, version) when using the file.",
    },
    {
      id: "ownership-of-outputs",
      title: "3. you own everything claude produces",
      body: "anything claude generates while running the skill — ad copy variants, audit reports, klaviyo flow specs, scoring sheets — is fully yours. ship it, sell it, edit it, claim it. the license covers the source skill file, not the artifacts produced.",
    },
    {
      id: "team-licenses",
      title: "4. team licenses",
      body: "a single purchase covers unlimited internal use within ONE company or sole-trader practice. if you have a team of 12 marketers at the same company, one purchase is fine.\n\nif you serve multiple agency clients: one purchase covers all of your client work performed by you. if your agency has 5 staff who each independently run skills, you need 5 purchases (or contact us for a team rate).",
    },
    {
      id: "modifications",
      title: "5. modifications",
      body: "you can modify the file privately — adjust prompts, add brand-specific rules, swap inputs. those modifications stay yours.\n\nyou cannot ship a modified version as a public product or distribute it for free. modifications are for your private use only.",
    },
    {
      id: "perpetual-use",
      title: "6. perpetual use",
      body: "the license is perpetual — you can keep using your purchased skill files forever, even if skillor shuts down tomorrow. nothing phones home, nothing requires our infrastructure to run. that's the point of selling files instead of seats.\n\ncaveat: download links expire 24 hours after delivery (security measure). save the file locally after the first click. lost files: email support@skillor.app from your purchase email; we re-issue.",
    },
    {
      id: "updates",
      title: "7. updates",
      body: "all v1.x updates to a purchased skill are free. when a skill is improved, we email past buyers a fresh download link. major versions (v2+) are a separate paid release; v1 buyers may upgrade at a discount.",
    },
    {
      id: "open-source-exception",
      title: "8. one skill is open-source",
      body: "one skill in the catalog (`funnel_audit`) is licensed under MIT and published publicly as a marketing sample. it can be redistributed, modified, and resold per MIT terms. all other skills follow this commercial license. the SKILL.md frontmatter `license:` field tells you which is which — never assume.",
    },
    {
      id: "termination",
      title: "9. termination",
      body: "we can revoke this license if you breach the redistribution / resale terms (§2). on termination, you must cease distributing the file but may continue using it privately for work already in progress. refunds for breach-driven termination are at our discretion.",
    },
    {
      id: "warranty",
      title: "10. warranty + liability",
      body: "the skill is provided 'as is'. we do not warrant fitness for any specific business outcome. our maximum liability is the amount you paid for the skill in the past 12 months. some jurisdictions don't allow these limits — they apply to the maximum extent permitted by law.",
    },
    {
      id: "questions",
      title: "11. questions",
      body: "edge case not covered? email support@skillor.app. we treat the spirit of the license as more important than the letter — if you're trying to do honest marketing work, we'll work with you.",
    },
  ],
} as const;
