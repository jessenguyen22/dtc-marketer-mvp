---
name: weekly_marketing_report
description: Generate a one-page weekly marketing report — top KPIs vs target, channel breakdown, what changed week-over-week, what we learned, what we're shipping next week. Use to standardize team reporting, give founders a 60-second read, or replace a chaotic weekly email.
license: MIT
pack: dtc-marketer-mvp
version: 1.0.0
priority_score: 7
dtc_use_case: "Founder gets 4 different report formats from 4 marketers each week. Skill generates a single-page template + populated example: top 6 KPIs, channel deltas, biggest WoW move + cause, top decision needed, ship-list for next week."
brand_brain_fields: [kpis, channel_strategy]
---

# Weekly Marketing Report

One page. Read in 60 seconds. Useful in 5 minutes.

## When to invoke
- "Build us a standard weekly report"
- "Founder wants a 1-pager every Monday"
- "Our reports are inconsistent across team"
- Onboarding leadership to marketing data
- Quarterly: refresh the template

## Brand Brain context required
- `{{brand.kpis}}` — KPI list + targets
- `{{brand.channel_strategy}}` — channels to break out

## Inputs from user
1. Reporting cadence (weekly default, can be daily / monthly)
2. Audience for report (founder / leadership / team / board)
3. Data sources (Shopify, GA4, Meta, Google, Klaviyo, attribution tool)
4. Last week's report (so we don't break continuity)

## Process
1. **Pick the 6 KPIs that matter.** No more. Force trade-off.
2. **Standardize the WoW format.** Absolute, % change, vs target — every metric.
3. **Channel breakdown** — spend, ROAS, share of revenue, week change.
4. **One "biggest move" callout** — what changed most + why we think so.
5. **Top learning** — one sentence; specific, not generic.
6. **Decision needed** — one ask the reader can act on this week.
7. **Ship-list next week** — top 3 things going live (not 12).

## Output template

```
MARKETING WEEKLY — <brand> — week of <date>

TOP 6 KPIS
| Metric | This wk | Last wk | WoW % | Target | vs Target |
|---|---|---|---|---|---|
| Revenue          | $<>  | $<>  | <±%> | $<>  | <±%> |
| New customers    | <n>  | <n>  | <±%> | <n>  | <±%> |
| Blended CAC      | $<>  | $<>  | <±%> | $<>  | <±%> |
| Blended ROAS     | <>   | <>   | <±%> | <>   | <±%> |
| Site CR          | <%>  | <%>  | <±%> | <%>  | <±%> |
| Repeat rate (90d)| <%>  | <%>  | <±%> | <%>  | <±%> |

BIGGEST MOVE
<metric> moved <±%> WoW.
Likely cause: <one sentence — be specific, not "promo helped">.
Confidence: <H/M/L>

CHANNEL BREAKDOWN
| Channel | Spend | Revenue | ROAS | Share of rev | WoW Δ |
|---|---|---|---|---|---|
| Meta paid    | $<> | $<> | <> | <%> | <±%> |
| Google paid  | $<> | $<> | <> | <%> | <±%> |
| TikTok paid  | $<> | $<> | <> | <%> | <±%> |
| Klaviyo email| $<> | $<> | n/a | <%> | <±%> |
| Klaviyo SMS  | $<> | $<> | n/a | <%> | <±%> |
| Organic      | —   | $<> | n/a | <%> | <±%> |

TOP LEARNING THIS WEEK
<one sentence, specific, supported by data>

DECISION NEEDED THIS WEEK
<one decision the reader can make>
Recommendation: <…>

SHIPPING NEXT WEEK (TOP 3)
1. <…> — owner <…>
2. <…> — owner <…>
3. <…> — owner <…>

WATCHING (early signals, no action yet)
- <…>
- <…>

PARKED (won't address this week + why)
- <…>
```

## Output checklist
- [ ] Exactly 6 KPIs (not 8, not 4)
- [ ] Every metric shows: this wk, last wk, WoW%, target, vs target
- [ ] Biggest move identified with cause + confidence level
- [ ] Channel breakdown shows share-of-revenue (the most useful column)
- [ ] One specific learning (not "engagement was up")
- [ ] Exactly one decision asked of the reader
- [ ] Ship-list capped at 3
- [ ] "Parked" section explicit — focus by saying no

## Anti-patterns
- 15 metrics, no hierarchy (founder skims, decides nothing)
- WoW% without target context (a 20% drop from a 200% spike is not a problem)
- "Channel X is up" with no cause hypothesis
- Ship-list of 12 things (signal that team has no priorities)
- No decision asked → report is theater, not a tool
