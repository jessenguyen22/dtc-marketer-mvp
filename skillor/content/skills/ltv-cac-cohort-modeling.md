---
name: ltv_cac_cohort_modeling
description: Build a defensible LTV/CAC model with cohort-aware assumptions for a DTC brand. Produces cohort LTV at 30/60/90/180/365 days, blended + by-channel CAC, payback months, three scenario projections (optimistic / realistic / pessimistic), and explicit kill-rules for unprofitable channel scale-up. Use before scaling a paid channel, before a fundraising deck, or when finance asks "what's our LTV?" and you want to give the real answer.
license: Skillor Commercial License v1.0
pack: dtc-marketer-mvp
version: 1.0.0
priority_score: 9
dtc_use_case: "Skincare brand wants to 3x Meta spend from $80K to $240K/mo. Skill ingests 9 months of Shopify orders + Meta + Google + Klaviyo spend, computes LTV90 by acquisition cohort + channel ($72 Meta vs $94 Google nonbrand vs $138 referral), payback (Meta 4.1 months at current AOV $48 / 32% gross margin), and projects scenarios. Realistic case: scaling Meta past $160K hits CAC ceiling at $42 → LTV90:CAC drops below 1.7 → kill rule triggers. Recommendation: scale Meta to $140K, redirect $80K to Google nonbrand (better LTV90:CAC) — not all $160K to Meta."
brand_brain_fields: [product, audience, offers, kpis]
---

# LTV / CAC Cohort Modeling

Single-number LTV is a lie that lets brands scale themselves into bankruptcy. Cohort + channel + scenario or don't bother.

## When to invoke
- "Should we scale Meta / TikTok / Google further?"
- "What's our real LTV?"
- "Build the LTV/CAC slide for the deck"
- "What's our payback period?"
- "Are we profitable at this CAC?"
- "Set channel kill rules"
- Pre-fundraise (investors will model this themselves — beat them to it)
- Pre-budget cycle (board ask: "where should next $500K go?")
- After a CAC spike (channel quality changed — find which cohort broke)

## Brand Brain context required
- `{{brand.product}}` — replenishment cycle, refill cadence, hero SKU vs bundle behavior
- `{{brand.audience}}` — cohort segmentation hypotheses (different persona = different LTV curve)
- `{{brand.offers}}` — promo cohorts behave nothing like full-price; subscription dynamics differ from one-time
- `{{brand.kpis}}` — current LTV/CAC target ratio + payback ceiling

## Inputs from user
1. **Order data** (CSV or warehouse): order_date, customer_id, order_value, gross_margin OR product_cost, first_channel, was_promo, was_subscription
2. **Marketing spend** by channel by month: Meta, Google brand, Google nonbrand, TikTok, affiliate, influencer, email tooling, retargeting (broken out from prospecting)
3. **Time window** — minimum 6 months, ideally 12-18 (less = young-cohort bias; older cohorts haven't matured for repeat read)
4. **AOV by cohort** — already computed or in the order data
5. **Repeat-purchase distribution** — % who order 2nd / 3rd / 4th time, time between
6. **Refund rate** — by SKU if uneven across product line
7. **Target gross margin** — net of COGS, shipping, payment fees, but pre-marketing
8. **Channel attribution model** — last-click / first-click / data-driven / post-purchase survey (this changes the answer materially — name it explicitly)

## Process
1. **Define LTV correctly.** LTV = cumulative gross profit per customer (revenue × margin – refund losses), NOT cumulative revenue. Quoting revenue-LTV vs CAC is the most common founder error and inflates the ratio by 2-3x.
2. **Build cohort tables.** Group by acquisition month. For each cohort, compute LTV at 30/60/90/180/365 days from acquisition. Show the *curve*, not an average. (See companion skill `cohort_revenue_analysis` for the underlying mechanics.)
3. **Slice cohort LTV by acquisition channel.** Highest-quality channel = highest LTV90, NOT highest first-order rate. Channels that bring in promo-hunters look great on day 1 and terrible on day 90.
4. **Compute blended CAC + by-channel CAC.** Blended = total marketing spend / new customers. By-channel = channel spend / new customers attributed to that channel (state your attribution model). Include retargeting + email tooling in blended (founders forget these).
5. **Compute payback months per channel.** Months until cumulative gross profit per customer ≥ CAC. Most DTC categories want ≤6 months; subscription/replenishable can tolerate 9-12; one-time premium (mattresses, furniture) often >18 and that's still fine if LTV holds.
6. **Build three scenarios.**
   - **Optimistic**: hold current LTV curve, assume CAC stays flat at +50% scale
   - **Realistic**: LTV curve regresses to recent 3-month trailing, CAC inflates 15-25% at +50% scale (audience saturation)
   - **Pessimistic**: LTV regresses 10%, CAC inflates 40-60% at +50% scale, refund rate +1pp
7. **Set kill rules per channel.** Explicit, mechanical: "if CAC > $X for 14 consecutive days OR LTV90:CAC < 1.7 for the rolling cohort, pause scaling and audit." Without kill rules, scaling continues past breakeven.
8. **Output the recommendation.** Per channel: scale / hold / cut, with budget delta + reason + monitoring metric. Don't give one summary number — give a channel decision table.

## Output template

```
LTV / CAC COHORT MODEL — <brand>
Window: <YYYY-MM to YYYY-MM>     Cohorts: <n>     Customers: <n>     Attribution: <last-click / data-driven / post-purchase survey>

DEFINITIONS (state these explicitly — finance will ask)
- LTV = cumulative GROSS PROFIT per customer (revenue × <margin %> – refund losses)
- CAC = (channel spend) / (new customers attributed via <attribution model>)
- Payback = months until cumulative gross profit ≥ CAC
- "New" excludes resurrected (>365d dormant returners)
- Gross margin assumption: <X%> (specify — "blended" vs hero SKU vs bundle)

—— COHORT LTV TABLE (gross-profit, $/customer) ——
| Cohort       | LTV30 | LTV60 | LTV90 | LTV180 | LTV365 | n customers |
|--------------|-------|-------|-------|--------|--------|-------------|
| 2025-02      | $<>   | $<>   | $<>   | $<>    | $<>    | <n>         |
| 2025-03      | $<>   | $<>   | $<>   | $<>    | $<>    | <n>         |
| ...          |       |       |       |        |        |             |
| 2026-01      | $<>   | $<>   | —     | —      | —      | <n>         |

Reading:
- Curve flattening at month <n>: <interpretation>
- Outlier cohort: <month> — LTV90 <%> below median — likely cause: <…>
- Outlier cohort: <month> — LTV90 <%> above median — likely cause: <…>

—— BLENDED CAC + PAYBACK ——
Blended CAC (last 90 days): $<>
Blended LTV90: $<>
Blended LTV90:CAC: <ratio>
Blended payback: <n> months

—— BY-CHANNEL TABLE ——
| Channel              | Spend (90d) | New cust | CAC   | LTV30 | LTV90 | LTV180 | LTV90:CAC | Payback (mo) |
|----------------------|-------------|----------|-------|-------|-------|--------|-----------|--------------|
| Meta prospecting     | $<>         | <n>      | $<>   | $<>   | $<>   | $<>    | <:>       | <n>          |
| Meta retargeting     | $<>         | <n>      | $<>   | $<>   | $<>   | $<>    | <:>       | <n>          |
| Google brand         | $<>         | <n>      | $<>   | $<>   | $<>   | $<>    | <:>       | <n>          |
| Google nonbrand      | $<>         | <n>      | $<>   | $<>   | $<>   | $<>    | <:>       | <n>          |
| TikTok               | $<>         | <n>      | $<>   | $<>   | $<>   | $<>    | <:>       | <n>          |
| Influencer / creator | $<>         | <n>      | $<>   | $<>   | $<>   | $<>    | <:>       | <n>          |
| Affiliate            | $<>         | <n>      | $<>   | $<>   | $<>   | $<>    | <:>       | <n>          |
| Email / SMS (refer)  | $<>         | <n>      | $<>   | $<>   | $<>   | $<>    | <:>       | <n>          |
| Organic / direct     | $0          | <n>      | $0    | $<>   | $<>   | $<>    | ∞         | 0            |

—— PROMO vs FULL-PRICE FIRST PURCHASE ——
Full-price acquired LTV90: $<>
Discounted acquired LTV90: $<>
Delta: <%>
Reading: <e.g. "20%-off welcome cohorts have 31% lower LTV90 — they're a different customer">

—— SUBSCRIPTION (if applicable) ——
% of new customers who chose subscription: <%>
Avg subscription tenure (months): <n>
Subscriber LTV180 vs one-time LTV180: $<> vs $<>
Subscription payback: <n> months
Cancellation rate by month: M1: <%> | M2: <%> | M3: <%> | M6: <%>

—— SCENARIO PROJECTIONS (next 6 months at +50% spend) ——

OPTIMISTIC
Assumptions: LTV holds, CAC +0%, refund rate flat
Projected blended CAC: $<>     LTV90: $<>     LTV90:CAC: <:>     Payback: <n> mo
Profit/loss at scale: $<>

REALISTIC
Assumptions: LTV regresses to trailing-3-month, CAC +15-25%, refund flat
Projected blended CAC: $<>     LTV90: $<>     LTV90:CAC: <:>     Payback: <n> mo
Profit/loss at scale: $<>

PESSIMISTIC
Assumptions: LTV –10%, CAC +40-60% (saturation), refund +1pp
Projected blended CAC: $<>     LTV90: $<>     LTV90:CAC: <:>     Payback: <n> mo
Profit/loss at scale: $<>

—— CHANNEL DECISION TABLE ——
| Channel              | Decision    | Δ Budget   | Reason                                                                  | Monitor metric          |
|----------------------|-------------|------------|-------------------------------------------------------------------------|-------------------------|
| Meta prospecting     | scale +X%   | +$<>       | LTV90:CAC <:> > target, payback <n> mo, headroom before saturation      | rolling 14d CAC         |
| Meta retargeting     | hold        | $0         | already at frequency cap, scale = waste                                 | frequency / CTR         |
| Google nonbrand      | scale +X%   | +$<>       | best LTV90:CAC, underspent vs share-of-search                           | impression share        |
| TikTok               | hold / cut  | -$<>       | LTV90 30% below blend (promo-hunter cohort), payback >9 mo              | 30-day code redemption  |
| Influencer           | hold        | $0         | LTV90 strong but n too small to scale conclusion                        | post-by-post AR         |
| Affiliate            | scale +X%   | +$<>       | $0 marginal CAC, attribution conservative — actual incrementality high  | new vs returning split  |

—— KILL RULES (mechanical, channel-level) ——
- **Meta**: pause scaling if rolling 14d CAC > $<> OR LTV90:CAC of last available cohort < 1.7
- **Google nonbrand**: pause scaling if CPC > $<> OR conversion rate < <%> for 7 consecutive days
- **TikTok**: pause if first-90-day repeat rate of new cohort < <%> (promo-cohort signal)
- **Influencer**: cut creator if attributed AR < $<> by T+30 (use make-good clause first)
- **Blend-level**: pause all scaling if monthly contribution margin (revenue × margin – marketing) drops below $<> for 2 consecutive months

—— RECOMMENDATION (1 paragraph) ——
<e.g. "Realistic scenario shows scaling Meta past $140K/mo hits CAC ceiling. Recommend: scale Meta to $140K (+75% from $80K), redirect remaining $60K to Google nonbrand (best LTV90:CAC at 3.2). Re-evaluate in 60 days against the kill rules above. Do NOT scale TikTok — promo-cohort LTV is structurally lower.">

—— CAVEATS / WHAT WE DO NOT KNOW ——
- Attribution model: <…> (changing to data-driven would shift Meta CAC by ~<%>)
- Cohorts younger than 90d are extrapolated using the median curve — actual may diverge
- Refund rate is on the trailing 90d, may not reflect a recent product change
- Subscription churn for cohorts <6 months old is projected, not observed
- Wholesale / Amazon / retail revenue NOT included in this model (DTC-channel only)
```

## Output checklist
- [ ] LTV defined as gross-profit, not revenue (and the margin % is named)
- [ ] Cohort LTV table at minimum 30 / 90 / 180 days (and 365 if data permits)
- [ ] Blended CAC + by-channel CAC table with attribution model named
- [ ] Payback months per channel
- [ ] Promo vs full-price LTV split
- [ ] Subscription dynamics broken out (if applicable)
- [ ] Three scenarios: optimistic / realistic / pessimistic with explicit assumption deltas
- [ ] Channel decision table (scale / hold / cut + Δ budget + monitor metric)
- [ ] Kill rules: mechanical thresholds, not adjectives
- [ ] One-paragraph recommendation that names a specific budget allocation
- [ ] Caveats section listing what's NOT in the model

## Anti-patterns
- Quoting LTV based on revenue, not gross profit (inflates ratio 2-3x)
- A single LTV number across all channels and cohorts (the entire point of this skill is *not* doing this)
- Comparing LTV365 to CAC when you have 4 months of data — extrapolation is ~half the number you're showing
- Excluding retargeting + email/SMS tooling from blended CAC — these are real costs
- Not naming the attribution model — "our CAC is $32" is meaningless without "last-click via GA4"
- Including organic + branded search in blended CAC pool to lower the average — this hides the real prospecting CAC
- Single scenario only — leadership needs the realistic + pessimistic numbers to make a real decision
- "Scale Meta" recommendation without a kill rule — guarantees overshoot past breakeven
- Using LTV30 alone for scaling decisions — DTC repeat dynamics need 90d minimum, 180d for replenishables
- Treating affiliate / influencer CAC as $0 because attribution is messy — assign even a conservative cost
- Mixing subscription and one-time customers in the same cohort table — show them separately
- Computing scenarios by "feel" — name the assumption deltas (CAC +X%, LTV –Y%) explicitly
- Skipping the caveats section — finance / investors will find the holes; you should name them first

## Edge cases
- **<6 months of data**: do not project LTV365. Cap at LTV90, project LTV180 with a stated extrapolation method (e.g. "median curve from comparable category"), and label everything younger than the data window as projected, not observed.
- **Pre-launch / first 90 days post-launch**: use category benchmarks for LTV (Drinkin Partners, Common Thread Collective, Triple Whale public benchmarks) explicitly cited as proxy; do not invent numbers.
- **Subscription brands**: LTV is dominated by churn curve, not AOV. Build the subscription model as a separate Markov-style retention curve (M1 retention × M2 retention × …), not a simple cumulative-revenue curve.
- **Refurb / reorder-heavy categories (coffee, supplements, pet food)**: LTV365 is the right horizon, not LTV90. Payback can be 9-12 months and still be a great business.
- **One-time premium (mattresses, furniture, durable goods)**: LTV ≈ first-order gross profit + referral value. Don't force a repeat curve. Replace cohort table with NPS-driven referral attribution.
- **Wholesale / Amazon mixed channel**: model DTC-only by default; flag wholesale as a separate model. Mixing them inflates LTV and obscures DTC channel decisions.
- **iOS 14.5+ / cookie deprecation impact**: post-2021 attribution under-counts Meta. Add a post-purchase survey ("how did you hear about us?") and reconcile platform-reported CAC against survey-attributed CAC. Use the higher number for kill rules.
- **Promo-heavy welcome flow**: split first-purchase cohorts by discount band (full / 10-20% / 25%+ / BOGO). Each band is a different customer. Often the 25%+ cohort is unprofitable at any scale.
- **Influencer / creator at low N**: a creator with 8 attributed customers is not a cohort — quote it but flag "n too small for scale decision." Wait for n≥30 before basing budget on the LTV90.
- **Channel arbitrage that won't last**: if a channel's LTV90:CAC > 5, it's either an attribution error, a data error, or a temporary arbitrage (new platform, new audience). Flag explicitly. Plan for regression.
- **Refund / return windows >60 days**: do not lock LTV30 as "final" — refunds will still hit. Hold LTV computations until the return window closes.
- **B2B / wholesale-adjacent DTC**: LTV is dominated by 1-2 mega-customers. Show LTV with and without top 1% to expose concentration risk. A single account churn can break the model.
- **Brand currently unprofitable**: do not present an "LTV:CAC = 1.5" model as if it justifies more spend. State explicitly: "current contribution margin is negative; growth at this CAC is destroying capital." Then model the path to LTV:CAC ≥ 3 before recommending scale.
