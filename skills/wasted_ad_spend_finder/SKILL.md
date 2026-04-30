---
name: wasted_ad_spend_finder
description: Audit a paid account (Meta / Google / TikTok) to surface wasted spend — over-saturated audiences, dead campaigns still active, broken pixels, retargeting overlap with prospecting, brand-search cannibalization. Use when ROAS is dropping, before scaling spend, or for a quick "give me back $X this week" play.
license: MIT
pack: dtc-marketer-mvp
version: 1.0.0
priority_score: 8
dtc_use_case: "Brand spends $120k/month across Meta + Google. Skill identifies $18k of fixable waste (3 dead campaigns at 0.3 ROAS, brand-search bidding 80% of branded clicks Google would give for free, RT overlap with prospecting on past-purchasers) with one-week action list."
brand_brain_fields: [channel_strategy, kpis, offers]
---

# Wasted Ad Spend Finder

The fastest dollars you'll ever recover.

## When to invoke
- "ROAS is dropping but spend is the same"
- "Audit our paid account"
- Pre-scale: "Find waste before we scale"
- New paid lead onboarding
- After any agency handover

## Brand Brain context required
- `{{brand.channel_strategy}}` — to know intended budget split
- `{{brand.kpis.roas}}` — to set the "below this = waste" threshold
- `{{brand.offers}}` — RT exclusions tied to purchase recency

## Inputs from user
1. Account access (Meta Ads Manager, Google Ads, TikTok)
2. Last 28-day spend + ROAS by campaign
3. Pixel + conversion API status (verified or not)
4. Brand-search trademarks
5. Recently launched / paused campaigns (so we don't kill an intentional test)

## Process
1. **Run the 8-leak checklist** (see template).
2. **Tag every wasted-spend item** with $/month estimate + fix-effort + risk-of-cutting.
3. **Build the recovery plan.** What to cut today, what to test cut + measure, what to fix structurally.
4. **Calculate total recoverable spend.**
5. **Set guardrails** — don't cut a campaign that's the only one feeding a key audience without a replacement.

## The 8 leaks

1. **Dead campaigns active** — campaigns with <0.5x target ROAS for 14+ days, still spending
2. **Audience saturation** — frequency >7 / week with declining CTR (kill or rotate creative)
3. **Brand-search cannibalization** — bidding on your own brand when SEO already wins it (test pause; measure org clicks pickup)
4. **RT overlap with prospecting** — past purchasers in prospecting audiences (exclusion missing)
5. **Broken tracking** — pixel firing inconsistently, CAPI not deployed, conversion deduplication off
6. **Geo / device waste** — spend on geos or devices that consistently underperform target
7. **Placement waste** — Audience Network / Search Partners / non-core placements at low quality
8. **Wrong-objective campaigns** — Reach campaigns counted in CAC, Engagement campaigns claiming purchases

## Output template

```
WASTED SPEND AUDIT — <brand>
Window: 28d   Total spend: $<>   Blended ROAS: <>

8-LEAK FINDINGS

1. DEAD CAMPAIGNS
| Campaign | Spend 28d | ROAS | Decision | Recoverable $/mo |
|---|---|---|---|---|
| <…> | $<>| <> | kill | $<> |
| <…> | $<>| <> | kill | $<> |

2. AUDIENCE SATURATION
| Adset | Frequency | CTR trend | Decision |
|---|---|---|---|
| <…> | <> | declining | rotate creative or pause |

3. BRAND-SEARCH CANNIBALIZATION
| Brand term | Paid clicks | Org clicks (when paid paused historical) | Recoverable $/mo |
|---|---|---|---|
| <…> | <> | <> | $<> |
Test plan: pause for 7d, measure org pickup, decide.

4. RT × PROSPECTING OVERLAP
- Past-purchaser audiences NOT excluded in: <campaign list>
- Estimated wasted impressions: <…>

5. TRACKING INTEGRITY
- Pixel events firing: <…>
- CAPI deployed: <Y/N>
- Deduplication on: <Y/N>
- Issue summary: <…>

6. GEO / DEVICE WASTE
- Geos below target ROAS: <list>
- Devices below target: <list>
- Recoverable $/mo: $<>

7. PLACEMENT WASTE
- Audience Network share + ROAS: <%, ROAS>
- Search Partners share + ROAS: <%, ROAS>
- Recommendation: <…>

8. WRONG-OBJECTIVE CAMPAIGNS
- <campaign> running on Reach but counted toward purchases — recategorize

RECOVERY PLAN
| # | Action | Recoverable $/mo | Effort | Risk | Decision date |
|---|---|---|---|---|---|
| 1 | <…> | $<> | L | low | this week |
| 2 | <…> | $<> | M | low | this week |
| 3 | <…> | $<> | M | medium | next 14d (test) |
…

TOTAL RECOVERABLE: $<>/month

GUARDRAILS
- Do NOT cut <campaign> — it's the only feeder for <audience>; replace before kill
- Brand-search pause must be A/B tested geo-by-geo, not all at once
```

## Output checklist
- [ ] All 8 leaks investigated with findings (or "none" if confirmed clean)
- [ ] Dollar recoverable per leak estimated
- [ ] Recovery plan ranked by $ × effort × risk
- [ ] Brand-search recommendation tied to a measured test, not a blind pause
- [ ] Tracking integrity confirmed (otherwise everything else is suspect)
- [ ] Guardrails called out for any cut with structural risk
- [ ] Total recoverable summed and stated clearly

## Anti-patterns
- Killing dead campaigns without checking if they fed a key audience
- Pausing brand search permanently without geo-by-geo test (TM defense matters)
- Treating Audience Network as always-bad (it works for some categories)
- Forgetting that "wasted" RT might be incremental for view-through buyers
- Auditing without first verifying tracking is intact (garbage data → garbage decisions)
