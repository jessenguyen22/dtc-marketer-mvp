# DTC Marketer MVP Skill Pack

A focused pack of 25 production-grade Claude Skills covering the full DTC marketing funnel — Brand → Acquisition → CRO → Retention → Reporting. Each skill reads from a single shared **Brand Brain** so you fill brand context once, not 25 times.

> Built as a curated MVP — distilled from 3,500+ community skills, rewritten for higher quality and consistency, MIT licensed.

---

## What's in the pack

```
dtc_marketer_mvp/
├── brand_brain_template.md     ← fill once, every skill reads from it
├── skills/                     ← 25 SKILL.md files, paste-ready
└── mvp_pack_readme.md          ← this file
```

### The 25 skills

| Funnel stage | Skill | Priority |
|---|---|---|
| **Brand foundation** | `brand_voice_builder` | 9 |
|  | `icp_customer_research` | 9 |
| **Acquisition — paid** | `ads_copy` | 10 |
|  | `competitor_ads_deep_dive` | 9 |
|  | `creative_test_framework` | 7 |
|  | `retargeting_architect` | 7 |
|  | `wasted_ad_spend_finder` | 8 |
|  | `social_strategy_launch` | 6 |
|  | `ugc_creator_brief` | 9 |
|  | `promo_campaign_launcher` | 8 |
| **Acquisition — organic** | `seo_product_page` | 7 |
|  | `content_calendar_builder` | 7 |
| **Conversion** | `shopify_pdp` | 10 |
|  | `landing_page_cro` | 9 |
|  | `ab_test_planner` | 8 |
|  | `pricing_bundle_test` | 7 |
| **Retention** | `klaviyo_email` | 10 |
|  | `email_sequence_designer` | 8 |
|  | `retention_churn_flow` | 9 |
|  | `lifecycle_segment_builder` | 7 |
| **Strategy & ops** | `customer_journey_map` | 7 |
|  | `funnel_audit` | 8 |
|  | `cohort_revenue_analysis` | 7 |
|  | `utm_attribution_setup` | 6 |
|  | `weekly_marketing_report` | 7 |

---

## How to use this pack

### 1. Fill the Brand Brain (once)
- Copy `brand_brain_template.md` → rename to `BRAND_BRAIN.md`
- Place it in your project root, OR `~/.claude/brand-brain/<brand>.md` for global use
- Replace every `<...>` placeholder. Aim for ≤4 pages — this gets read on every skill call

### 2. Install the skills
- Copy any folder from `skills/` into `~/.claude/skills/<skill-name>/`
- Or use the entire pack at once:
  ```bash
  cp -r dtc_marketer_mvp/skills/* ~/.claude/skills/
  cp dtc_marketer_mvp/brand_brain_template.md ~/.claude/brand-brain/template.md
  ```

### 3. Invoke a skill in Claude
Just describe what you need in natural language — Claude will pick the right skill based on its `description` trigger:
- "Build me a Klaviyo welcome flow" → invokes `klaviyo_email`
- "Audit this PDP: <URL>" → invokes `shopify_pdp`
- "Where are we losing money in the funnel?" → invokes `funnel_audit`

Each skill auto-pulls relevant Brand Brain fields (declared in its `brand_brain_fields:` frontmatter). If a required field is empty, the skill will ask you to fill it before continuing — no inventing brand context.

---

## Top 8 skills to test first

If you can only stress-test a handful, start here. These deliver visible value within the first session.

1. **`icp_customer_research`** — fills the most important Brand Brain section; everything else gets sharper after this
2. **`brand_voice_builder`** — second-most-leveraged Brand Brain section
3. **`shopify_pdp`** — fast, visible ROI on a real PDP URL
4. **`klaviyo_email`** — output is paste-ready into Klaviyo flow builder, easy to verify quality
5. **`ads_copy`** — generate a test batch of variants, A/B against current creative
6. **`funnel_audit`** — one-page diagnosis founders react to immediately
7. **`competitor_ads_deep_dive`** — gives "we didn't know this" insight in one prompt
8. **`weekly_marketing_report`** — replaces a recurring chore, validates the pack's repeat-use value

---

## Design principles

What makes this pack different from a list of community skills:

| Principle | What we did |
|---|---|
| **One context source** | Brand Brain replaces per-skill brand re-typing. Skills declare which fields they need; brand info stays one source of truth. |
| **No invented brand context** | Skills *halt* when a required Brand Brain field is empty rather than guessing. |
| **Output is paste-ready** | Every skill ends with a deliverable a marketer can paste into their tool today (Klaviyo flow, Shopify section, ad manager copy, JSON-LD schema). |
| **Output checklist on every skill** | Acceptance criteria so you know when the skill's done — not "looks good". |
| **Anti-patterns explicit** | We name what NOT to do, because that's where most output fails in production. |
| **Tight scope per skill** | Each skill does one job well. Composition happens at the marketer level, not inside a mega-prompt. |
| **MIT, no branding** | Drop into any project, agency client, or product without attribution requirements. |

---

## Gaps vs dtcskills.com (and where we go beyond)

`dtcskills.com` is a directory + lightweight pack. Here's where this MVP differs and pushes further:

| Area | dtcskills.com | This pack |
|---|---|---|
| **Brand context** | Per-skill copy/paste | Shared `BRAND_BRAIN.md` referenced by all 25 skills |
| **Output rigor** | Quality varies, no acceptance criteria | Output checklist + anti-patterns on every skill |
| **Funnel coverage** | Skewed toward acquisition + email | Full coverage: Brand → Acq → CRO → Retention → Reporting |
| **Testing discipline** | No standard testing framework | `ab_test_planner` + `creative_test_framework` enforce sample size, MDE, kill rules |
| **Attribution** | Not addressed | `utm_attribution_setup` + `cohort_revenue_analysis` for trustworthy reporting |
| **Reusability** | Skill-by-skill | Lifecycle segment library + content calendar + journey map produce reusable artifacts |
| **Compliance** | Implicit | Brand Brain has explicit allowed/banned claims; UGC + ads skills enforce |

### What we deliberately did NOT include
- Generic "blog post writer" — too broad to be DTC-specific
- AI-influencer / generative imagery skill — moves too fast, would rot in months
- Per-platform tactical guides (Meta CBO best practices etc.) — those rot quarterly; the framework skills outlive them

---

## Validation plan (suggested)

To validate this MVP on the market, work in this order:

**Week 1 — Internal dogfood**
- Fill Brand Brain for 1 real brand
- Run top 8 skills end-to-end
- Track: time-to-first-output, % of outputs you actually shipped, manual edits needed

**Week 2 — 3 friendly users**
- Hand pack to 3 DTC marketers / founders
- Ask each to fill Brand Brain + run any 5 skills
- Collect: which skills they used unprompted, which felt "magical", which they ignored

**Week 3 — Pricing test**
- If retention signal is strong, test pricing: free pack with paid Brand Brain consultation? per-seat? per-brand? agency tier?
- Use the dtc_marketer_mvp itself to draft the pricing page (`shopify_pdp` for landing, `ads_copy` for trial ads)

**Week 4 — Iterate**
- Drop any skill with <30% usage
- Promote any skill with >70% usage to a "starter pack" subset
- Add skills *only* if friendly-user pool requested the same one twice independently

---

## File conventions

Each skill follows this exact structure:
```
skills/<slug>/SKILL.md
  frontmatter: name, description, license, pack, version, priority_score, dtc_use_case, brand_brain_fields
  body sections:
    1. When to invoke
    2. Brand Brain context required
    3. Inputs from user
    4. Process
    5. Output template
    6. Output checklist
    7. Anti-patterns
```

Add new skills by following this exact pattern. Keep each skill ≤200 lines.

---

## License

MIT — fork it, white-label it, ship it. No attribution required.

---

## Roadmap (post-validation)

If validation works, the natural next layers:

1. **Brand Brain auto-fill** — feed in a Shopify URL + reviews export → skill drafts Brand Brain sections 1, 2, 4, 5 automatically
2. **Cross-skill workflows** — chained recipes (e.g. "PDP audit → ads copy → Klaviyo flow refresh" as one orchestrated run)
3. **Vertical packs** — beauty, supplements, apparel, home — each with category-specific Brand Brain extensions and compliance lists
4. **Performance feedback loop** — log which skills produce outputs that actually get shipped, learn what to refine

But validate the MVP first.
