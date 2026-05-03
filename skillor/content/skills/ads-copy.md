---
name: ads_copy
description: Generate platform-specific DTC ad copy variants (Meta, Google RSA, TikTok, Pinterest, YouTube) with framework selection (AIDA / PAS / 4Ps / StoryBrand / BAB), variant scoring, and A/B test plan. Use when the user needs new ad creative copy, headline/primary-text variants, hook ideas, or wants to refresh fatigued creative.
license: Skillor Commercial License v1.0
pack: dtc-marketer-mvp
version: 1.0.0
priority_score: 10
dtc_use_case: "Brand needs 8 fresh Meta ad concepts for a Memorial Day push. Skill returns 8 distinct angles (each tied to a different objection or JTBD), 3 copy variants per angle with platform-specific length limits, scored for compliance + brand voice + hook strength."
brand_brain_fields: [voice, positioning, audience, product, offers, compliance.banned_claims]
---

# Ads Copy Generator

Generate fresh, on-brand ad copy variants for paid social and search, with framework selection and an A/B test plan.

## When to invoke
- "Write me Meta ads for X"
- "Need Google RSA headlines"
- "TikTok ad hooks for product Y"
- "Refresh fatigued creative"
- "Generate 10 ad variants for testing"

## Brand Brain context required
- `{{brand.voice}}` — tone axes, signature phrases, banned words
- `{{brand.positioning}}` — point of difference + reason to believe
- `{{brand.audience}}` — JTBD, objections, switching triggers (one per concept)
- `{{brand.product}}` — feature → benefit → outcome table
- `{{brand.offers}}` — current promo + free-ship threshold
- `{{brand.compliance.banned_claims}}` — must not appear in any variant

## Inputs from user
1. Platform(s): Meta / Google RSA / TikTok / Pinterest / YouTube short / X
2. Format: single image / carousel / video script / RSA headlines+desc
3. Campaign objective: prospecting / retargeting / brand / DPA
4. Number of distinct angles needed (default 5)
5. Variants per angle (default 3)
6. Hero product or collection

## Process
1. **Pick angles first, copy second.** Each angle = one of: objection-handler, JTBD, switching-trigger, social-proof, founder-story, comparison, urgency, identity. Map angles to ICPs/objections from Brand Brain.
2. **Choose framework per angle.** AIDA for awareness, PAS for problem-aware, BAB for transformation, 4Ps for stack-of-benefits, StoryBrand for brand-led, FAB for spec-led.
3. **Write to platform spec.** Enforce char limits (see table). Hook in first 3 words / first 1.5 seconds.
4. **Score each variant** on: hook strength (1-5), brand-voice fit (1-5), compliance (pass/fail), specificity (1-5).
5. **Output a test plan** — concept matrix with sample size, win condition, kill rule.

## Platform spec quick reference

| Platform | Asset | Key char limits |
|---|---|---|
| Meta feed | Primary text | 125 chars before "see more" |
| Meta feed | Headline | 27 chars on mobile |
| Google RSA | Headline | 30 chars × up to 15 |
| Google RSA | Description | 90 chars × up to 4 |
| TikTok | Caption | 100 chars sweet spot, 2,200 max |
| Pinterest | Title | 100 chars |
| Pinterest | Description | 500 chars (first 50 visible) |
| YouTube short | Hook | 1.5 seconds |

## Output template

```
ANGLE MATRIX
| # | Angle | ICP/Objection | Framework |
|---|---|---|---|
| 1 | <e.g. switching-trigger> | <ICP/objection ref> | PAS |
| 2 | ... | ... | ... |

—— ANGLE 1 — <name> ——
Variant A
  Hook (first 3 words):  <…>
  Primary text:          <…>          (chars: <n>/125)
  Headline:              <…>          (chars: <n>/27)
  CTA button:            <…>
  Visual brief:          <1 line — what the still or first frame shows>
  Score: hook 4/5 · voice 5/5 · compliance ✅ · specificity 4/5

Variant B …
Variant C …

…repeat per angle…

A/B TEST PLAN
- Cells: <count>
- Budget per cell: $<>
- Sample size to call: <impressions or spend>
- Primary metric: <CPM / CTR / CPA>
- Win threshold: <>
- Kill rule: <e.g. CTR <0.7% after $50 spend>
- Decision date: <>

CREATIVE BRIEFS FOR DESIGN
- Variant A still: <subject, scene, copy overlay placement>
- Variant B video: <3-beat script — hook / proof / CTA, ≤15s>
```

## Output checklist
- [ ] Number of angles matches input; each maps to a distinct ICP/objection/JTBD
- [ ] Every variant respects platform char limits
- [ ] No banned word / claim appears (cross-check `{{brand.compliance.banned_claims}}`)
- [ ] Each variant has a hook in the first 3 words / 1.5s
- [ ] Score line on every variant
- [ ] Visual brief included (so design can produce, not guess)
- [ ] A/B test plan has measurable kill rule, not just a "winner" rule
- [ ] CTA button text aligns with offer in `{{brand.offers}}`

## Anti-patterns
- Same hook reworded across "variants" — they should be structurally different
- Missing visual brief (copy without art direction is half a deliverable)
- Pure benefit copy with no proof point (especially in regulated categories)
- Discount-led prospecting copy when offer isn't actually live
- Identical copy across Meta + Google + TikTok (each platform reads differently)
