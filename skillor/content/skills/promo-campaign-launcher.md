---
name: promo_campaign_launcher
description: Plan and launch a single promotional campaign end-to-end — offer mechanic, eligibility rules, channel sequencing, creative pack, send-time orchestration, post-mortem. Use for BFCM, sitewide sale, launch promo, flash, or any time-bound revenue push.
license: Skillor Commercial License v1.0
pack: dtc-marketer-mvp
version: 1.0.0
priority_score: 8
dtc_use_case: "BFCM in 6 weeks. Skill outputs a 4-week ramp + 5-day peak plan with offer mechanic (tiered discount), email + SMS + ad sequencing, daily checklists for the team, kill rule if margin falls below floor, and a post-event debrief template."
brand_brain_fields: [voice, audience.objections, product, offers, channel_strategy, kpis]
---

# Promo Campaign Launcher

Run a promo without burning brand or margin.

## When to invoke
- "Plan our BFCM"
- "Launch a sitewide sale next week"
- "Birthday / anniversary / founder promo"
- "Flash sale this weekend"
- "Re-engagement push for lapsed customers"

## Brand Brain context required
- `{{brand.voice}}` — promo copy still must sound like the brand
- `{{brand.audience.objections}}` — pre-empt the "is this too good to be true" objection
- `{{brand.product}}` — which SKUs in vs out, margin floors
- `{{brand.offers}}` — discount stacking rules, never-discount items, free-ship threshold
- `{{brand.channel_strategy}}` — channels available + budget split
- `{{brand.kpis}}` — margin floor, AOV target, repeat-rate target

## Inputs from user
1. Promo type (sitewide / collection / first-purchase / loyalty / flash / abandoned-cart-only)
2. Offer mechanic options (% off / $ off / BOGO / tiered / free gift / bundle)
3. Time window (start, peak day, end)
4. Eligibility rules (new vs returning, geo, subscriber-only)
5. Inventory headroom (don't push paid on stock-outs)
6. Margin floor (minimum acceptable)

## Process
1. **Choose offer mechanic.** Brief table: each mechanic's pros, cons, brand impact, margin impact. Recommend one.
2. **Set the rules.** Stacking allowed? subscription compatible? floor SKUs? geo limits? code or auto-apply?
3. **Channel sequencing.** Tease → open → mid → last call → recovery. One-page calendar.
4. **Creative pack.** Email subject lines (≥3 per touch), SMS variants, ad copy hooks, push, on-site banner copy.
5. **Daily ops checklist.** What to monitor, who owns each lever.
6. **Guardrails + kill rule.** Margin %, return-rate spike, support ticket rate, brand complaint volume.
7. **Post-mortem template** (fill day +3 after end).

## Output template

```
PROMO CAMPAIGN — <name> — <window>

OFFER MECHANIC RECOMMENDATION
Recommended: <mechanic>
Why: <brand fit, margin math, audience fit>
Alternatives considered: <…>

RULES
- Eligibility: <new / returning / segments>
- Stacking with subscription: <Y/N>
- Floor SKUs (excluded): <…>
- Geo: <…>
- Code or auto: <…>
- Free-ship interaction: <…>

CHANNEL SEQUENCING (one-pager)
| Day | Email | SMS | Paid | Organic | On-site | Owner |
|-----|---|---|---|---|---|---|
| -7 (tease)   | <…> | — | <UGC tease> | <reel> | <hint banner> | <…> |
| -2 (open)    | <…> | <…> | <DPA + prospecting> | <reel> | <countdown> | <…> |
| 0 peak       | <…> | <…> | <retargeting heavy> | <stories> | <full takeover> | <…> |
| +1           | <…> | <…> | <…> | <…> | <…> | <…> |
| +3 last call | <…> | <…> | <…> | <…> | <…> | <…> |
| +5 recovery  | abandoned-only | abandoned-only | retargeting | — | — | <…> |

CREATIVE PACK
Email subjects (3 per touch): <…>
SMS variants:                  <…>
Ad hooks:                      <…>
Push copy:                     <…>
On-site banner:                <…>
Cart drawer message:           <…>

DAILY OPS CHECKLIST (one per peak day)
- [ ] Inventory check on hero SKUs
- [ ] CR vs baseline at 12pm + 6pm
- [ ] Margin % by SKU vs floor
- [ ] Support ticket volume + sentiment
- [ ] Refund rate first-day
- [ ] Ad CPM + CTR vs pre-promo

GUARDRAILS / KILL RULE
- If blended margin < <floor>%, swap to <fallback offer> within 6h
- If support ticket rate > <X>/day, pause SMS, increase CS staffing
- If a hero SKU goes red, pull paid for that SKU (not the whole campaign)

POST-MORTEM TEMPLATE (day +3)
- Revenue vs forecast: <>
- Margin %: <>
- New customers acquired: <>
- AOV: <>
- Discount depth realized: <>
- Repeat-rate uplift (90-day window check date): <>
- What worked: <…>
- What broke: <…>
- Do again / don't do: <…>
```

## Output checklist
- [ ] One recommended mechanic with explicit margin + brand reasoning (not 5 options)
- [ ] Eligibility + stacking rules unambiguous
- [ ] Sequencing covers tease + peak + last call + recovery
- [ ] Creative pack ≥3 subject lines per major touch
- [ ] Daily ops checklist ready to print
- [ ] Kill rule has specific threshold + specific fallback (not "we'll see")
- [ ] Post-mortem template attached for day +3
- [ ] No floor breach in any variant of the offer

## Anti-patterns
- Picking the deepest discount that competitors are running (race to the bottom)
- No tease window (peak day arrives cold)
- Same email to subscribers and non-subscribers (you trained subscribers to wait)
- No kill rule — promo runs at a loss for 48h before anyone notices
- Skipping post-mortem — you re-make the same mistake next promo
