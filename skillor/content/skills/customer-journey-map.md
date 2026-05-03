---
name: customer_journey_map
description: Build a stage-by-stage customer journey map — touchpoints, channels, content, blockers, unlocks — across awareness → consideration → conversion → activation → repeat → advocacy. Use when planning omnichannel coverage, finding gaps, onboarding a new marketer, or writing a marketing strategy doc.
license: Skillor Commercial License v1.0
pack: dtc-marketer-mvp
version: 1.0.0
priority_score: 7
dtc_use_case: "New growth lead joins. Skill produces a 1-page journey map showing every touchpoint by stage, channel ownership, content asset live or missing, biggest blocker per stage, and 3 highest-ROI gaps to fill in 30 days."
brand_brain_fields: [audience, product, customer_journey, channel_strategy, kpis]
---

# Customer Journey Map

Map the full DTC journey, expose gaps, prioritize 3 fills.

## When to invoke
- "Map our customer journey"
- "Find coverage gaps across channels"
- "Onboarding a new marketer — show them the whole picture"
- Writing a quarterly marketing plan
- Auditing why a stage (often consideration or activation) is leaking

## Brand Brain context required
- `{{brand.audience}}` — JTBDs, objections per stage
- `{{brand.product}}` — what activation looks like (first use? subscription?)
- `{{brand.customer_journey}}` — current state if pre-filled
- `{{brand.channel_strategy}}` — what we run today
- `{{brand.kpis}}` — to know which leak hurts most

## Inputs from user
1. Confirm stage definitions (default: Awareness → Consideration → Conversion → Activation → Repeat → Advocacy)
2. Current touchpoint inventory (or let skill build it from Brand Brain)
3. Funnel metrics if known (visit→ATC, ATC→checkout, checkout→repeat, etc.)
4. Constraints (budget, headcount, channels off-limits)

## Process
1. **Build the grid.** Stage × (touchpoint, channel, owner, asset status, KPI, blocker, unlock).
2. **Tag asset status** as live ✅ / partial ⚠️ / missing ❌.
3. **Score each blocker** by funnel-leak math (how many users die here × $value lost).
4. **Pick 3 highest-ROI fills** that are operationally feasible (not "build a TV campaign").
5. **Sequence the 3 fills** with owners, week numbers, definition of done.

## Output template

```
CUSTOMER JOURNEY MAP — <brand>

| Stage | Top touchpoints | Channel | Owner | Asset status | KPI | Top blocker | Top unlock |
|---|---|---|---|---|---|---|---|
| Awareness    | <…> | <…> | <…> | ✅/⚠️/❌ | <…> | <…> | <…> |
| Consideration| <…> | <…> | <…> | … | … | … | … |
| Conversion   | <…> | <…> | <…> | … | … | … | … |
| Activation   | <…> | <…> | <…> | … | … | … | … |
| Repeat       | <…> | <…> | <…> | … | … | … | … |
| Advocacy     | <…> | <…> | <…> | … | … | … | … |

GAP RANKING
1. <gap> — stage <X> — leak size <est. lost orders/$> — fix effort <H/M/L>
2. ...
3. ...

3 FILLS TO SHIP IN 30 DAYS
Fill 1: <name>
  Stage: <…>
  What gets built: <…>
  Owner: <…>
  Done when: <measurable criterion>
  Expected impact: <metric + magnitude>

Fill 2 …
Fill 3 …

WHAT WE'RE INTENTIONALLY NOT DOING
- <thing> — because <reason>
```

## Output checklist
- [ ] Grid covers all 6 stages with no empty cells (use ❌ if missing, not blank)
- [ ] Asset status visible at a glance with the 3-state tag
- [ ] Blockers ranked by funnel-leak math, not gut feel
- [ ] Each of the 3 fills has owner + done-when + expected impact
- [ ] "Not doing" list included (focus = saying no)
- [ ] References real channels from `{{brand.channel_strategy}}`

## Anti-patterns
- Mapping every channel everywhere — most DTC brands need depth in 2-3 channels, not breadth
- Listing "build a community" as a fill (too vague — define an SKU-shaped output)
- 12 fills "to ship in 30 days" — pick 3
- Skipping advocacy stage because "we don't do referrals yet" — that's the point
