---
name: retargeting_architect
description: Design a cross-platform retargeting strategy — audience segmentation by funnel stage, creative sequencing, frequency caps, budget split, and exclusion rules. Use when retargeting spend feels wasted, frequency is too high, or no formal RT structure exists.
license: Skillor Commercial License v1.0
pack: dtc-marketer-mvp
version: 1.0.0
priority_score: 7
dtc_use_case: "Brand sees retargeting eat 35% of paid spend with declining ROAS. Skill segments visitors into 5 stages, assigns creative + cap + budget per stage, defines exclusions to prevent post-purchase ad spam, and projects spend reallocation."
brand_brain_fields: [audience, product, offers, channel_strategy, kpis]
---

# Retargeting Architect

Right message, right stage, right cap.

## When to invoke
- "Build us a retargeting strategy"
- "RT spend feels high, ROAS is dropping"
- "We're showing ads to people who already bought"
- "How should we split budget between RT and prospecting?"
- New pixel / first time setting up RT properly

## Brand Brain context required
- `{{brand.audience}}` — to know what objections to address per stage
- `{{brand.product}}` — for DPA feed eligibility
- `{{brand.offers}}` — what RT-only offer (if any) is allowed
- `{{brand.channel_strategy}}` — platforms in play (Meta, Google, TikTok, Pinterest)
- `{{brand.kpis}}` — CAC + ROAS target to size RT budget

## Inputs from user
1. Monthly site visitors + key funnel-stage volumes (PV, ATC, IC, purchase)
2. Platforms currently used for RT
3. Current RT spend + ROAS (last 28d)
4. Average purchase cycle (days from first visit to buy)
5. Product feed status per platform
6. Any post-purchase upsell program?

## Process
1. **Define stages.** PV → PV+time / browse abandon → ATC → IC → past purchaser. Volume per stage at current traffic.
2. **Window per stage.** Aligned to actual purchase cycle (not 30/60/90 default).
3. **Creative per stage.** PV → social proof + soft pitch. ATC → objection answer. IC → urgency + risk reversal. Past purchaser → cross-sell or replenishment, NOT same product.
4. **Frequency cap per stage.** Tighter at top of funnel; looser deep funnel.
5. **Budget split.** Recommend % of total paid (5-15% RT for early-stage brands; up to 25% for mature with strong feed).
6. **Exclusion architecture.** Past purchaser excluded from acquisition RT. Subscription customers excluded from one-time buy ads. Recent buyers (≤14d) excluded from post-purchase RT.
7. **DPA setup** for product-aware RT (browse + ATC stages).
8. **Measurement** — incremental lift test plan to prove RT actually drives revenue (vs would-have-bought).

## Output template

```
RETARGETING ARCHITECTURE — <brand>

CURRENT STATE
RT spend (28d):    $<>
RT ROAS (28d):     <>
RT % of total paid: <%>

STAGE MAP
| Stage | Definition | Window | Est volume | Creative angle | Frequency cap | Budget % |
|---|---|---|---|---|---|---|
| 1 — PV (passive)        | site visit, no engagement | 7d  | <n> | brand + soft proof | 3/wk | <%> |
| 2 — Browse abandon      | viewed PDP, no ATC | 14d | <n> | DPA + objection #1 | 5/wk | <%> |
| 3 — ATC abandon         | added to cart, no IC | 7d  | <n> | DPA + risk reversal | 7/wk | <%> |
| 4 — IC abandon          | initiated checkout, no purchase | 3d | <n> | urgency + offer | 10/wk | <%> |
| 5 — Past purchaser      | bought ≥14d ago | 60d | <n> | cross-sell / replenish | 4/wk | <%> |

EXCLUSIONS
- Stage 1-4 → exclude past purchasers (≤90d)
- Stage 5 → exclude purchases ≤14d (let them breathe)
- All RT → exclude active subscribers from one-time SKU ads
- All RT → exclude unsubscribers + complainers

CREATIVE BRIEFS PER STAGE
Stage 1: <hook + asset format>
Stage 2: <…>
Stage 3: <…>
Stage 4: <…>
Stage 5: <…>

PLATFORM MIX
| Platform | Stages used | Why |
|---|---|---|
| Meta DPA | 2, 3, 5 | feed-driven precision |
| Meta video | 1 | top-funnel reach |
| Google RLSA | 2, 3, 4 | catch search intent post-visit |
| YouTube TrueView discovery | 1 | brand reinforcement |

INCREMENTALITY TEST PLAN
- Hold-out: <% of RT-eligible audience seeing no RT for X weeks>
- Measure: revenue per holdout vs treated, blended CAC delta
- Run-time: <weeks>
- Decision: scale, hold, cut

PROJECTED REALLOCATION
From: prospecting <%> / RT <%>
To:   prospecting <%> / RT <%>
Reason: <…>
```

## Output checklist
- [ ] All 5 stages defined with window + estimated volume
- [ ] Frequency cap on every stage (no uncapped RT)
- [ ] Exclusions explicit (especially past purchaser from acquisition RT)
- [ ] Creative angle per stage maps to a real objection or job
- [ ] Platform mix justified (not all platforms get all stages)
- [ ] Incrementality test plan included (otherwise we're flying blind)
- [ ] Budget split adds to 100% and respects total paid envelope

## Anti-patterns
- Single retargeting campaign for "all visitors 30d" (no segmentation = waste)
- Showing the same product ad to past purchasers (annoying + wasted spend)
- No frequency cap (people see the ad 40x and complain)
- No incrementality test (you measure attributed revenue, not lift)
- Spending >25% of paid on RT with no clear funnel scaling story
