---
name: subscription_pricing_strategy
description: Design or restructure DTC subscription pricing — discount %, billing cadence, lock-in incentives, downgrade/pause logic, and churn-risk segmentation. Returns 2-3 tier recommendation with anchor/decoy structure, churn projection vs current state, and an A/B test plan with sample size and runtime. Use when the user is launching subscribe-and-save, repricing existing tiers, fixing high churn, or deciding between annual prepay vs monthly billing.
license: Skillor Commercial License v1.0
pack: dtc-marketer-mvp
version: 1.0.0
priority_score: 8
dtc_use_case: "Brand has subscribe-and-save at flat 15% discount, monthly cadence, 6.8% monthly churn. Skill restructures into 3 tiers (10% / 15% / 25% with annual prepay anchor), adds pause-not-cancel flow with frequency adjust, and projects churn drop to 4.2% — recovers $87k LTV across 2,000 active subscribers in 12 months. Returns A/B test plan: 50/50 split, 4-week runtime, 3,400 sub minimum to call winner at p<0.05."
brand_brain_fields: [product, offers, audience, kpis, customer_journey]
---

# Subscription Pricing Strategy

Subscriptions are an LTV machine or a churn machine — the pricing structure decides which. Design the structure on purpose.

## When to invoke
- "Launch subscribe-and-save"
- "Our subscription churn is too high"
- "Should we offer annual prepay?"
- "Restructure our subscription tiers"
- "Discount % for subscribe-and-save"
- "Why are subs canceling at month 3?"
- "Pause flow vs cancel flow"

## Brand Brain context required
- `{{brand.product}}` — consumption rate (informs cadence — refill product = predictable; durable = harder)
- `{{brand.offers}}` — current sub discount, free-ship threshold (sub should not undercut promo math)
- `{{brand.audience}}` — price sensitivity, identity ("subscriber" as identity vs "savings hack")
- `{{brand.kpis}}` — current AOV, CAC, retention curve, contribution margin
- `{{brand.customer_journey}}` — when subs typically churn (month 2 = setup friction; month 6 = stockpile)

## Inputs from user
1. Product type: consumable / refill / durable / mixed
2. Average reorder cycle (days between organic repurchases, if known)
3. Current subscription state: none / live (provide current discount %, cadence options, churn rate)
4. Active subscriber count and 12-month subscriber revenue
5. Contribution margin per unit (gross margin minus variable fulfillment)
6. CAC and target payback window
7. Goal: launch / reduce churn / increase LTV / shift cadence / add tiers
8. Constraints: can't discount below X%, must keep monthly option, regulatory (e.g. auto-renew laws)
9. Any historical pricing tests already run

## Process
1. **Set the math floor.** Max sustainable discount = (LTV gain from sub uplift) − (margin given up per cycle). If discount > floor, sub program is a leak. Compute floor before designing tiers.
2. **Choose tier architecture.** Three patterns:
   - **Anchor-decoy-target:** 3 tiers; middle tier is target, high tier anchors value, low tier is decoy.
   - **Cadence ladder:** same discount, different commitment (monthly / quarterly / annual prepay) — annual prepay is the lock-in.
   - **Tier-by-volume:** subscribe to 1 / 2 / 3+ products with escalating discount.
   Pick based on product type: consumable → cadence ladder; mixed catalog → volume; single hero SKU → anchor-decoy.
3. **Set discounts.** Anchor tier (or longest commitment) gets the headline number — usually 20-25%. Target tier 15%. Entry 10%. Below 10% rarely converts; above 25% rarely sustains margin.
4. **Design lock-in incentives.** First-month bonus (free gift), member-only restocks, early access to drops, free shipping always. Lock-in must add perceived value without giving margin.
5. **Build pause-not-cancel flow.** When user clicks cancel, intercept with: skip next shipment, change frequency (+30/+60 days), swap product, pause 60 days. Cancel-button placement matters — put it last, not first. Pause flow alone typically saves 18-30% of intended cancels.
6. **Segment churn risk.** Score active subs by: tenure (month 1-2 = highest risk), order count (1-2 = at risk; 4+ = retained), pause history (1+ pauses = retained; 0 = unknown), discount tier (lowest tier churns 1.4-1.8x highest).
7. **Project churn delta.** Current monthly churn × (1 − expected reduction from new structure). Expected reductions, rough rules: pause flow = -20%; annual prepay shift = -35% on shifted cohort; tier upsell from 10% → 15% = -10% on that cohort.
8. **Build A/B test plan.** 50/50 split, primary metric = month-3 retention (not signups), sample size from formula below, runtime = max(4 weeks, 1.5× reorder cycle). Hold paid traffic mix constant during test.
9. **Output kill rules.** What numbers force a rollback (e.g. contribution margin drops >12%, churn worsens by >0.8 pp, support volume up >25%).

## Discount math floor (quick formula)

```
Floor discount % = (LTV_sub - LTV_oneoff) / (Avg sub revenue per cycle × cycles to LTV horizon)
```
If proposed discount > floor → margin negative even after LTV gain. Common DTC consumable floor: 18-22%.

## Sample size for A/B test (rough)

For binary metric (retained at month 3 = yes/no), 80% power, p<0.05, baseline 70% retention, MDE 5pp:
- ~1,250 subscribers per arm → 2,500 total minimum.
For 3pp MDE: ~3,400 per arm. Increase if traffic is bursty or seasonal.

## Output template

```
SUBSCRIPTION PRICING — <brand> — <date>

CURRENT STATE
- Active subs:            <n>
- Current structure:      <tiers / discount / cadence>
- Monthly churn:          <%>
- Avg sub tenure:         <months>
- 12-mo sub revenue:      $<>
- Contribution margin:    <%>

MATH FLOOR
- LTV uplift (sub vs one-off): $<>
- Discount floor:         <%>
- Recommended max:        <%>
- Reasoning:              <…>

RECOMMENDED STRUCTURE — <pattern: anchor-decoy / cadence ladder / volume>
| Tier | Discount | Cadence | Lock-in incentive | Target buyer |
|---|---|---|---|---|
| 1 (entry) | 10% | Monthly | Free shipping | Trial-stage subscriber |
| 2 (target) | 15% | Quarterly prepay | Member restock access | Habituated buyer |
| 3 (anchor) | 25% | Annual prepay | Free gift + early drops | Brand loyalist |

CHURN PROJECTION
- Current monthly churn:   <%>
- Projected (post-change): <%>
- Drivers of reduction:
  - Pause flow:                -X.X pp
  - Annual prepay cohort lock: -X.X pp
  - Tier upsell uplift:        -X.X pp
- 12-mo LTV impact:        +$<> (across <n> subs)
- Margin impact:           <±%> contribution margin

PAUSE-NOT-CANCEL FLOW
Cancel intent → intercept screen
1. Skip next shipment   (CTA)
2. Change frequency to <+30d / +60d>   (CTA)
3. Swap product   (CTA)
4. Pause 60 days   (CTA)
5. Cancel anyway   (text link, last)

CHURN-RISK SEGMENTATION
| Segment | Definition | Monthly churn | Action |
|---|---|---|---|
| At-risk new | Tenure 1-2 mo, 0 pauses | <%> | Onboarding email + product education |
| Stockpiler | 3+ skipped shipments | <%> | Frequency adjust prompt |
| Loyalist | Tenure 6+ mo, 4+ orders | <%> | Tier upsell to annual prepay |
| Lapsed-prone | Tier 1, no engagement 60d | <%> | Win-back offer (one-time, capped) |

A/B TEST PLAN
- Hypothesis:        New structure increases month-3 retention from <%> to <%>
- Split:             50/50 random assignment at sub signup
- Primary metric:    Month-3 retention (binary)
- Secondary:         Avg discount per order, contribution margin per sub
- Sample size:       <n> per arm = <n> total
- Runtime:           <weeks> (≥4 weeks, ≥1.5× reorder cycle)
- Stat threshold:    p<0.05
- Kill rules:
  - Contribution margin drops >12% in test arm → halt
  - Support tickets up >25% → halt and review
  - Paid traffic mix shift >15% mid-test → extend window
- Decision date:     <…>

ROLLOUT PLAN
- Week 0: Implement pause flow (no pricing change yet — establishes baseline)
- Week 2: Launch new tier structure to test arm
- Week 6: First read on signup conversion + early churn
- Week 12: Month-3 retention readout, decision to roll out / iterate
```

## Output checklist
- [ ] Math floor calculated before tier design (not designed first then justified)
- [ ] Tier architecture pattern explicitly named and matched to product type
- [ ] No tier discount exceeds margin floor
- [ ] Lock-in incentives use perceived value, not deeper margin cuts
- [ ] Pause-not-cancel flow specified step by step (cancel link is LAST)
- [ ] Churn projection broken down by driver (not a vibes number)
- [ ] Segmentation table has 3-5 segments with concrete definitions
- [ ] A/B test sample size calculated, not estimated
- [ ] Kill rules listed (margin, support volume, traffic mix shift)
- [ ] Rollout plan separates pause flow rollout from pricing change

## Anti-patterns
- Setting discount % by gut ("10% feels right") instead of margin floor math
- Launching annual prepay without strong refund/pause policy — generates support nightmares
- Putting the cancel button first in the cancel flow — defeats the intercept entirely
- Reading test winner on signup rate, not month-3 retention — signups are vanity, retention is the asset
- Stacking subscription discount on top of sitewide promo — silent margin destroyer
- Adding a 4th tier "for choice" — choice paralysis raises drop-off, three is the ceiling
- Same discount across all cadences — kills the case for longer commitment
- Cutting discount on an existing program without grandfathering — torches goodwill of best customers

## Edge cases
- **Live subscribers on legacy pricing:** Grandfather them at current rate; only new signups see new structure. Communicate the grandfather explicitly.
- **Product is durable (not refill):** Subscribe-and-save is the wrong frame; consider membership (perks, early access) instead of recurring shipment. Don't force consumable patterns onto durables.
- **High refund / return rate (>8%):** Annual prepay is risky — refunds become a contingent liability. Cap annual to a small cohort or require longer trial period before annual upgrade.
- **Auto-renew laws (CA SB-313, EU consumer rules):** Add explicit pre-renewal email (3-7 days before), one-click cancel link in account, and clear renewal terms at signup. Skill output must flag this when subscribers include CA/EU.
- **Brand has no margin headroom (margin <40%):** Subscribe-and-save likely unsustainable as discount play; pivot to non-discount value (early access, free gift, education) and accept lower attach rate.
