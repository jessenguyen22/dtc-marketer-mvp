---
name: lifecycle_segment_builder
description: Build the standard lifecycle segment library every DTC brand needs — by stage, value tier, channel preference, and behavior — with paste-ready Klaviyo (or other ESP) definitions. Use when starting from scratch, when segments have grown chaotic, or when adding personalization layers.
license: Skillor Commercial License v1.0
pack: dtc-marketer-mvp
version: 1.0.0
priority_score: 7
dtc_use_case: "Brand has 87 ad-hoc Klaviyo segments accumulated over 18 months. Skill defines the canonical 12-segment library (4 lifecycle × 3 value tiers + special behavioral overlays), provides paste-ready definitions, and a decommission plan for the 87 legacy segments."
brand_brain_fields: [audience, product, kpis, tech_stack.klaviyo, tech_stack.subscription]
---

# Lifecycle Segment Builder

Stop building segments per campaign. Build a library, reuse forever.

## When to invoke
- "We have too many segments and they overlap"
- "Build us a segmentation library from scratch"
- "Set up lifecycle segments for our new ESP"
- Pre-condition for any flow rewrite
- Onboarding a new lifecycle marketer

## Brand Brain context required
- `{{brand.audience}}` — to decide if extra persona-based segments are needed
- `{{brand.product}}` — replenishment cycle drives "active" definition
- `{{brand.kpis}}` — value-tier thresholds use real LTV bands
- `{{brand.tech_stack.klaviyo}}` — implement here (or other ESP)
- `{{brand.tech_stack.subscription}}` — adds subscription state segments

## Inputs from user
1. ESP in use
2. Order data summary (LTV distribution to set tier thresholds)
3. Replenishment cycle (drives "active" window)
4. Existing segment audit (count + top 10 most-used)
5. Subscription program details

## Process
1. **Build the 4-stage lifecycle.** Subscriber-only / First-time / Active / Lapsed. Define each by behavior + recency, not vibes.
2. **Add 3 value tiers** crossed with lifecycle. VIP / Mid / Low — thresholds from actual LTV distribution (top 10% / next 30% / rest).
3. **Add behavioral overlays** — Engaged email (opened ≥1 of last 5), Browse-active (site visit 14d), High-AOV cart (current cart > avg), Subscriber, Subscription-paused, Subscription-churned.
4. **Cap at ~12-15 canonical segments.** More = chaos.
5. **Define paste-ready ESP logic** for each.
6. **Decommission plan** for legacy segments — map old to new, sunset window, communication to team.
7. **Naming convention** so future-you doesn't duplicate.

## Output template

```
LIFECYCLE SEGMENT LIBRARY — <brand>

NAMING CONVENTION
[lifecycle]_[value-tier]_[overlay-if-any]
Example: active_vip_engaged

LIFECYCLE STAGES (4)
1. SUB    Subscriber-only, no purchase     | newsletter signup, never purchased
2. FIRST  First-time customer              | placed exactly 1 order in last <window>
3. ACTIVE Active customer                  | placed ≥1 order in last <2× replenishment cycle>
4. LAPSED Lapsed customer                  | last order > 2× replenishment cycle ago

VALUE TIERS (3, thresholds from data)
- VIP    : top 10% LTV       | LTV ≥ $<>
- MID    : next 30%          | LTV $<> – $<>
- LOW    : remainder         | LTV < $<>

CANONICAL SEGMENT LIBRARY (12 base)
| # | Segment name | Klaviyo definition (paste-ready) | Use case |
|---|---|---|---|
| 1 | sub_unranked         | profile created, 0 orders, opted in to email | welcome flow |
| 2 | first_low            | exactly 1 order, LTV < tier-threshold | post-purchase + 2nd-order push |
| 3 | first_mid            | exactly 1 order, LTV in MID tier | upsell push |
| 4 | first_vip            | exactly 1 order, LTV ≥ VIP threshold (e.g. high AOV)| accelerate to VIP path |
| 5 | active_low           | ≥2 orders, in active window, LOW LTV | reactivation push |
| 6 | active_mid           | ≥2 orders, in active window, MID LTV | cross-sell |
| 7 | active_vip           | ≥2 orders, in active window, VIP LTV | early access + community |
| 8 | lapsed_low           | last order > 2× cycle, LOW LTV | sunset path or mass winback |
| 9 | lapsed_mid           | last order > 2× cycle, MID LTV | targeted winback |
| 10| lapsed_vip           | last order > 2× cycle, VIP LTV | concierge winback (CS reach-out) |
| 11| subscriber_active    | active subscription | save flow eligible |
| 12| subscriber_paused_or_cancelled | paused or cancelled in last 90d | retention winback |

BEHAVIORAL OVERLAYS (use as filters, not standalone segments)
- engaged_email     : opened ≥1 of last 5 sends
- browse_active     : site visit in last 14d
- highaov_cart      : current cart value > AOV
- nps_promoter      : NPS ≥ 9 (if collected)
- support_recent    : opened ticket in last 30d (use to suppress promo)

LEGACY SEGMENT DECOMMISSION PLAN
| Legacy segment | Volume | Map to new | Action | Date |
|---|---|---|---|---|
| <…> | <n> | <new segment> | merge | <date> |
| <…> | <n> | — | archive (no usage in 90d) | <date> |
…
Sunset rule: any segment unused in 90d → archive. Quarterly cleanup.

GOVERNANCE
- New segment requests must check this library first
- Owner: <role>
- Quarterly review: <date>
```

## Output checklist
- [ ] 4 lifecycle stages defined by behavior + recency, not vibes
- [ ] 3 value tiers with thresholds from real LTV distribution
- [ ] 12 canonical segments with paste-ready ESP definitions
- [ ] Behavioral overlays separated from base segments (filter, not segment)
- [ ] Subscription state segments included if applicable
- [ ] Legacy decommission plan with map + dates
- [ ] Naming convention documented
- [ ] Governance owner named

## Anti-patterns
- Per-campaign segments ("BFCM 2024 buyers") — these belong in tags, not segments
- Value tiers based on guessed thresholds, not LTV distribution
- Mixing engagement signals into base segments (use overlays — engagement changes faster than lifecycle)
- No decommission plan (chaos compounds)
- Skipping subscription state when subscription program exists
