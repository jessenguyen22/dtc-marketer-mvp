---
name: cohort_revenue_analysis
description: Run cohort revenue / retention analysis — group customers by acquisition month or source, track LTV30/60/90/180, repeat-rate curves, AOV evolution, and channel-quality comparison. Use when LTV is a single number (broken), comparing channel quality, or pre-deciding scale-up.
license: Skillor Commercial License v1.0
pack: dtc-marketer-mvp
version: 1.0.0
priority_score: 7
dtc_use_case: "Brand wants to scale Meta spend but unsure if recent cohorts are weaker. Skill compares LTV90 by acquisition month, segments by first-channel, exposes that Q1 cohorts have 22% lower repeat rate, and recommends auditing creative angle that drove Q1."
brand_brain_fields: [audience, product, offers, kpis]
---

# Cohort Revenue Analysis

Single LTV numbers lie. Cohort analysis tells the truth.

## When to invoke
- "What's our LTV?" (real answer is always cohort-shaped)
- "Should we scale Meta further?"
- "Are recent cohorts weaker?"
- "Compare channel quality"
- Pre-decision before changing CAC tolerance

## Brand Brain context required
- `{{brand.audience}}` — to interpret cohort differences (different ICP = different LTV)
- `{{brand.product}}` — replenishment cycle to read curves
- `{{brand.offers}}` — promo cohorts behave differently from full-price
- `{{brand.kpis}}` — current LTV/CAC target

## Inputs from user
1. Order data (CSV or warehouse access): order_date, customer_id, order_value, first_channel, was_promo
2. Window (12-24 months)
3. Segments to slice (default: acquisition month, first channel, first-promo vs full-price)
4. Question being decided (informs which view matters)

## Process
1. **Build cohort tables** — one for revenue per customer, one for repeat rate, one for AOV.
2. **Compute LTV30/60/90/180** per cohort. Don't average across cohorts — show the curve.
3. **Slice by acquisition channel.** Highest channel quality = highest LTV90, not highest first-order rate.
4. **Slice by first-purchase promo status.** Promo-acquired customers often have 30-50% lower LTV — quantify it.
5. **Read the cliff.** When does each cohort's repeat curve flatten? Same week? Different?
6. **Compare to CAC.** LTV90 : CAC by channel decides scale-up.
7. **Output the decision.** Scale / hold / cut recommendation per channel with the numbers.

## Output template

```
COHORT REVENUE ANALYSIS — <brand>
Window: <…>   Total cohorts: <n>

COHORT × TIME REVENUE TABLE (cumulative $/customer)
Cohort \ Months since acquisition   M1     M3     M6     M12
2025-04 ........................... <$>   <$>   <$>   <$>
2025-05 ........................... <$>   <$>   <$>   <$>
…

REPEAT-RATE CURVE (% repeated by month)
Cohort \ Months   M1   M3   M6
2025-04 ........ <%>  <%>  <%>
…

LTV BY CHANNEL (acquisition channel)
| Channel | LTV30 | LTV90 | LTV180 | CAC | LTV90:CAC |
|---|---|---|---|---|---|
| Meta prospecting | $<>  | $<> | $<> | $<> | <:> |
| Google brand     | $<>  | $<> | $<> | $<> | <:> |
| Google nonbrand  | $<>  | $<> | $<> | $<> | <:> |
| TikTok           | $<>  | $<> | $<> | $<> | <:> |
| Email (referral) | $<>  | $<> | $<> | $<> | <:> |
| Affiliate        | $<>  | $<> | $<> | $<> | <:> |

PROMO IMPACT
First-purchase full-price: LTV90 $<>
First-purchase discounted: LTV90 $<>
Delta: <%>
Reading: <…>

CLIFF READ
- Repeat curve flattens at month <n> for most cohorts
- Outlier cohort: <month> — flattens earlier — likely cause: <…>
- Outlier cohort: <month> — flattens later — likely cause: <…>

CHANNEL DECISION TABLE
| Channel | LTV90:CAC | Decision | Reason |
|---|---|---|---|
| <…> | <…> | scale +X% | <…> |
| <…> | <…> | hold | <…> |
| <…> | <…> | cut | <…> |

NEXT-STEP RESEARCH
- <e.g. interview Q1 cohort to find why repeat is low>
- <e.g. test full-price welcome series to lift LTV>
```

## Output checklist
- [ ] Revenue + repeat-rate cohort tables shown (not single average)
- [ ] LTV computed at multiple time horizons (30/90/180 minimum)
- [ ] Channel-level slice with CAC ratio
- [ ] Promo vs full-price acquired LTV compared
- [ ] Cliff (curve flattening) named per cohort with hypothesis on outliers
- [ ] Decision per channel (scale / hold / cut) with reason
- [ ] At least one specific follow-up research action

## Anti-patterns
- Reporting LTV as a single number across all customers
- Averaging across cohorts of different ages (younger cohorts haven't had time to repurchase — biases down)
- Using LTV30 alone for channel decisions (need 90+)
- Ignoring promo-acquired vs full-price split (the biggest LTV variance source)
- Scaling channels with high LTV but unsustainable CAC trajectory
