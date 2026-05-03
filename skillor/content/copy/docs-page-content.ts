// Docs page copy — explains how to use a SKILL.md after purchase.
// Standalone xAI brutalist tone. No marketing fluff, just operator instructions.

export const docsContent = {
  hero: {
    heading: "docs.",
    subheading:
      "everything you need to use a skill after purchase. five-minute read.",
  },

  toc: [
    { id: "what-is-skill", label: "01 — what a skill is" },
    { id: "quickstart", label: "02 — quickstart (claude code)" },
    { id: "harnesses", label: "03 — compatible harnesses" },
    { id: "frontmatter", label: "04 — frontmatter contract" },
    { id: "brand-brain", label: "05 — brand brain integration" },
    { id: "modify-fork", label: "06 — modify, ship, what you can't do" },
    { id: "updates", label: "07 — updates + versioning" },
    { id: "support", label: "08 — support" },
  ],

  sections: [
    {
      id: "what-is-skill",
      heading: "01 — what a skill is",
      body: "a skill is a single markdown file (SKILL.md) with two parts:\n\n1. yaml frontmatter — declares when to invoke, required inputs, brand-brain fields, and version metadata.\n2. markdown body — declares the process, decision rules, output format, and edge cases.\n\nthat's the whole spec. no compiler, no installer, no runtime. claude reads the file, follows the body, returns the artifact. you own the file.",
    },
    {
      id: "quickstart",
      heading: "02 — quickstart (claude code)",
      body: "after purchase, click the download link in your delivery email. you get a SKILL.md file (one per single-skill purchase, or a zip of every catalog skill if you bought the library).\n\ndrop it into your claude code skills directory:\n\n```\n~/.claude/skills/<skill-name>/SKILL.md\n```\n\nrestart claude code (or run /skills reload). claude auto-discovers any SKILL.md in that path. invoke by description match — no slash command required, but you can wire one if you want.",
    },
    {
      id: "harnesses",
      heading: "03 — compatible harnesses",
      body: "skills are framework-agnostic. tested on:\n\n- claude code (CLI) — drop into ~/.claude/skills/\n- claude desktop (mac/windows) — same path\n- opencode — drop into .opencode/skills/\n- cursor agents — paste into rules or attach as context\n- any agent harness that reads markdown — paste the body into a system prompt\n\nthe portability is the point. no vendor lock-in.",
    },
    {
      id: "frontmatter",
      heading: "04 — frontmatter contract",
      body: "every skill ships with a frontmatter block at the top. typical fields:\n\n```yaml\n---\nname: ads_copy\ndescription: generate platform-specific dtc ad copy variants...\nlicense: Skillor Commercial License v1.0\npack: dtc-marketer-mvp\nversion: 1.0.0\npriority_score: 10\ndtc_use_case: \"brand needs 8 fresh meta ad concepts...\"\nbrand_brain_fields: [voice, audience, offers]\n---\n```\n\nclaude reads this when deciding whether to invoke the skill. fields:\n\n- `name`: machine-friendly id (snake_case).\n- `description`: when claude should use this skill. write it for claude, not for marketing.\n- `license`: terms governing your use. most skills are commercial-licensed; funnel_audit is MIT.\n- `priority_score`: 0–10. claude prefers higher scores when multiple skills match.\n- `brand_brain_fields`: which brand brain sections must be present in context.",
    },
    {
      id: "brand-brain",
      heading: "05 — brand brain integration",
      body: "many skills reference `{{brand.voice}}`, `{{brand.audience}}`, `{{brand.offers}}` — these are placeholders for sections of your brand brain (a separate document you maintain with brand voice, ICP, KPIs, offers).\n\nyou don't need a brand brain to use the skills. claude will ask for the missing context inline. but if you have one, drop it into ~/.claude/context/brand-brain.md and skills will pull from it automatically.\n\nrecommended sections: identity, voice, audience, offers, kpis, channels, calendar.",
    },
    {
      id: "modify-fork",
      heading: "06 — modify, ship, what you can't do",
      body: "skillor commercial license. plain-language summary (full terms at /legal/license):\n\nyou CAN:\n\n- use the skill in your own dtc work or client deliverables\n- modify the file privately for your own / clients' use\n- ship the OUTPUTS claude produces (ad copy, audits, flows) however you want — those are 100% yours\n- keep using the file forever, even if skillor shuts down\n\nyou CANNOT:\n\n- redistribute the SKILL.md file in public (github, gist, paid product, free download)\n- resell or sublicense the file as your own product\n- share your purchased copy with others who haven't bought their own license\n\nexception: one skill (funnel_audit) is open-sourced under MIT as a public sample. always check the `license:` field in the file's frontmatter.",
    },
    {
      id: "updates",
      heading: "07 — updates + versioning",
      body: "all v1.x updates are free for the life of v1. when a skill is updated, we email past buyers with a fresh download link. semver: minor versions (1.1, 1.2) add features non-breakingly; patch versions (1.0.1) fix bugs. major versions (v2) are a separate release.\n\nyou can opt out of update emails via the unsubscribe link.",
    },
    {
      id: "support",
      heading: "08 — support",
      body: "email support@skillor.app. solo operator. expect 24h reply.\n\nfor refund requests, see /legal/refund. for privacy questions, /legal/privacy.\n\nbug in a skill? open an email with subject 'bug — [skill name]' + a 3-line repro. we ship a fix within 1 week if confirmed.",
    },
  ],

  finalCta: {
    heading: "ready?",
    label: "BROWSE SKILLS",
    href: "/skills",
  },
} as const;
