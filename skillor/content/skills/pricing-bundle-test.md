---
name: pricing_bundle_test
description: Design pricing or bundle changes — anchor, decoy, tiering, bundle math, subscription incentive — with an A/B test plan that respects margin and brand. Use when AOV is flat, considering a price increase, launching a bundle, or reworking subscription pricing.
license: Skillor Commercial License v1.0
pack: dtc-marketer-mvp
version: 1.0.0
priority_score: 7
dtc_use_case: "Brand wants to lift AOV from $54 to $70 without discounting. Skill proposes a 3-tier structure (single / 2-pack / subscription) with anchor pricing, decoy logic, and an A/B test that splits traffic for 21 days with margin guardrails."
brand_brain_fields: [product, offers, kpis.aov, kpis.ltv]
---

# Pricing & Bundle Test

Move AOV without race-to-the-bottom.

## When to invoke
- "AOV is flat — help us lift it"
- "Should we raise prices?"
- "Design a bundle"
- "Rework our subscription pricing"
- New SKU pricing decision

## Brand Brain context required
- `{{brand.product}}` — margin per SKU (you can't bundle into negative margin)
- `{{brand.offers}}` — discount floor + subscription incentive rules
- `{{brand.kpis.aov}}` — current state + target
- `{{brand.kpis.ltv}}` — subscription pricing must protect LTV

## Inputs from user
1. Current SKUs + price + COGS + AOV + units per order distribution
2. Subscription program (live? take rate? churn?)
3. Goal (lift AOV / raise price / launch bundle / improve sub take rate)
4. Margin floor (no test breaches this)
5. Brand-side constraint (e.g. "we never go below $X on hero")

## Process
1. **Diagnose AOV first.** Is it low because of low units/order, low price/unit, or low cross-sell? Pricing fixes are different per cause.
2. **Propose 1-2 structural changes** — not 6. Options: tiered bundle, decoy, subscription anchoring, BOGO, gift-with-purchase, free-ship-threshold lift.
3. **Run the math.** For each change: expected AOV, expected unit margin, sub take impact, repeat-rate impact (if subscription touched).
4. **Test plan.** Geo-split or visitor-split, sample size, run-time, kill rule on margin.
5. **Brand check.** Does the new structure still align with positioning? (A premium brand can't decoy-price to look cheap.)
6. **Rollout plan** — if test wins, what's the migration path for existing customers?

## Output template

```
PRICING / BUNDLE PROPOSAL — <brand>

DIAGNOSIS
Current AOV: $<>
Driver decomposition:
  - Units per order: <>
  - Avg unit price: $<>
  - Cross-sell rate: <%>
Bottleneck identified: <units / price / cross-sell>

PROPOSED CHANGE
Recommended: <structure>
Why this over alternatives: <…>

NEW STRUCTURE
| Tier | Configuration | Price | Unit price | Margin % | Position |
|---|---|---|---|---|---|
| Single   | 1 unit       | $<>  | $<>  | <%> | sample |
| 2-pack   | 2 units      | $<>  | $<>  | <%> | DECOY (bad value) |
| Best     | 3 units      | $<>  | $<>  | <%> | hero — anchored |
| Sub      | 3 units / mo | $<>  | $<>  | <%> | most-rec — incentive |

EXPECTED IMPACT (modeled)
- AOV: $<> → $<>
- Margin per order: $<> → $<>
- Subscription take rate: <%> → <%>
- LTV90 impact: <…>

TEST PLAN
- Method: visitor split / geo split
- Audience: <…>
- Allocation: 50/50
- Sample size to call: <orders per arm>
- Run-time: <days>
- Primary metric: AOV
- Secondary: margin per order, sub take, conversion rate
- Guardrails: margin per order ≥ <floor>, CR drop < <X%>
- Kill rule: <…>

BRAND CHECK
- Does the structure read premium / accessible / luxury per `{{brand.positioning}}`? <Y/N + why>
- Any tier name or copy that conflicts with `{{brand.voice.banned}}`? <…>

EXISTING-CUSTOMER MIGRATION (if winning)
- Existing subscribers: grandfather / migrate / opt-in
- Communication: <email + 14-day notice>
- Edge cases: <…>

POST-TEST DECISION TABLE
- AOV lift ≥ MDE + margin held → ship
- AOV lift but margin breaches floor → re-tier and re-test
- No AOV lift but sub take up → ship if LTV math positive
- Loss → revert
```

## Output checklist
- [ ] AOV diagnosis identifies the actual bottleneck before proposing fix
- [ ] One recommended structure (not five options)
- [ ] Modeled impact includes margin and LTV, not just AOV
- [ ] Test plan has sample-size + run-time + kill rule
- [ ] Brand check explicitly assessed (premium brands cannot decoy-cheap)
- [ ] Migration plan for existing customers if winning
- [ ] No tier breaches `{{brand.offers}}` discount floor

## Anti-patterns
- Adding a bundle without showing the unit-price math (customers can do the math)
- Decoy tier priced *better* than the hero (defeats the purpose)
- Subscription discount so deep it kills LTV (15-20% is usually the sweet spot)
- Migrating existing subscribers to higher prices without a grandfather window
- Pricing the test based on competitor scrape without a brand-position check
