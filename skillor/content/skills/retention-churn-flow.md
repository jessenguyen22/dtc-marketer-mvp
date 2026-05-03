---
name: retention_churn_flow
description: Diagnose churn and design retention interventions — cohort analysis, at-risk scoring, win-back campaigns, replenishment timing, and loyalty mechanics. Use when the user mentions LTV, churn, cohort analysis, repeat purchase rate, win-back, or wants to lift retention.
license: Skillor Commercial License v1.0
pack: dtc-marketer-mvp
version: 1.0.0
priority_score: 9
dtc_use_case: "Brand has $42 CAC and only 18% repeat rate at 90 days. Skill identifies which cohorts churn earliest, builds an at-risk segment definition, designs a 4-touch win-back flow, and recommends a replenishment trigger tied to actual product use cycles."
brand_brain_fields: [audience, product, offers, kpis.repeat_rate, kpis.ltv, tech_stack.klaviyo, tech_stack.subscription]
---

# Retention & Churn Flow

Diagnose where the leaky bucket is and ship the intervention that matches the leak.

## When to invoke
- "Our repeat rate is low"
- "Help me design a win-back campaign"
- "When should we send replenishment reminders?"
- "Build cohort analysis"
- "How do we lift LTV?"

## Brand Brain context required
- `{{brand.audience}}` — JTBD + objections (different objections at repurchase vs first purchase)
- `{{brand.product}}` — usage cycle (drives replenishment timing)
- `{{brand.offers}}` — subscription incentive + winback discount floor
- `{{brand.kpis.repeat_rate}}` + `{{brand.kpis.ltv}}` — current state
- `{{brand.tech_stack.klaviyo}}` — what flows already exist
- `{{brand.tech_stack.subscription}}` — Recharge/Skio/Smartrr if present

## Inputs from user
1. Order data export (or summary): orders by month, repeat % by month, AOV by cohort
2. Product replenishment cycle (days between expected repurchase)
3. Top 3 reasons customers churn (from CS, exit survey, or guess)
4. Subscription program live? what's the take rate?
5. Existing winback flow if any (what + performance)

## Process
1. **Cohort heatmap.** Bucket by acquisition month × order #. Read where the cliff is (typically months 2-3 for non-subscription).
2. **Segment the leak.** Distinguish:
   - **Never-repurchased** (product or onboarding fail)
   - **Lapsed** (engaged once, then nothing)
   - **Subscribed-then-churned** (subscription experience fail)
3. **Build at-risk definition** — a Klaviyo segment with falsifiable criteria, not vibes (e.g. "purchased once 60-89 days ago, opened ≤1 of last 5 emails, no site visit 30d").
4. **Design the matching intervention** for each leak segment. One flow per segment, not a megaflow.
5. **Replenishment trigger** — predicted-empty date based on product cycle, send 5-7 days before.
6. **Subscription save flow** — if churn is subscription-driven, design pause/swap/skip offers before discount.
7. **Set the measurement frame** — 90-day repeat rate, LTV30/60/90, save rate, replenishment-attributed revenue.

## Output template

```
RETENTION DIAGNOSIS — <brand>

COHORT HEATMAP READ
- Earliest churn cliff: month <n>
- Best-performing cohort: <month> (read why)
- Worst-performing cohort: <month> (read why)
- Subscription cohort vs one-time: <delta>

LEAK SEGMENTATION
| Leak | % of churn | Suspected root cause | Intervention |
|---|---|---|---|
| Never repurchased | <%> | <onboarding/expectations/product> | <flow> |
| Lapsed | <%> | <attention/relevance> | <winback> |
| Subscription churn | <%> | <delivery/value/skip-friction> | <save flow> |

AT-RISK SEGMENT DEFINITIONS (paste into Klaviyo)
Segment A — "60-day silent customer"
  Definition: <Klaviyo metric language>
  Estimated size: <count>

Segment B — "Subscription save-target"
  Definition: <…>

INTERVENTION FLOWS

— WIN-BACK FLOW (lapsed) —
Trigger: enters Segment A
Timing skeleton:
| # | Delay | Channel | Intent |
|---|---|---|---|
| 1 | 0d   | Email | re-establish value, no offer |
| 2 | 4d   | Email | objection re-frame + soft proof |
| 3 | 8d   | SMS   | offer (only if eligible per discount floor) |
| 4 | 14d  | Email | last call + sunset toggle |
Copy briefs per message: <…>

— REPLENISHMENT FLOW —
Trigger: <days from last order, product-specific>
Skeleton: 1 email + 1 SMS reminder + offer for subscription swap
Subscription swap math: <single price vs sub price, save $/month>

— SUBSCRIPTION SAVE FLOW —
Trigger: cancellation initiated
Sequence: pause offer → skip offer → swap product → discount (last) → exit survey
Goal: <save rate %>

MEASUREMENT
- 90-day repeat rate baseline → target
- Replenishment-attributed revenue (separate UTM/coupon)
- Win-back save rate
- Subscription save rate
- LTV30 / LTV60 / LTV90 by cohort

QUICK WINS (week 1)
- [ ] ...
```

## Output checklist
- [ ] Churn cliff named (which month #)
- [ ] Leaks split into ≥3 segments, each with falsifiable Klaviyo definition
- [ ] One intervention per leak (no mega-flow)
- [ ] Win-back leads with value, not discount, on message 1
- [ ] Replenishment timing tied to actual product cycle (not generic 30d)
- [ ] Subscription save flow tries pause/skip/swap *before* discount
- [ ] Measurement frame names baseline + target + attribution method
- [ ] No discount used that breaches `{{brand.offers}}` floor

## Anti-patterns
- Sending winback 1 with a discount (anchors customers to wait for discount)
- One generic "we miss you" flow for all lapsed customers regardless of why they left
- Replenishment timer based on category averages, not your product
- Subscription cancel flow that goes straight to "20% off to stay" (offends switchers)
- Reporting LTV as a single number without cohort breakdown
