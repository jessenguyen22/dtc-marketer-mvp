---
name: content_calendar_builder
description: Build a 30/60/90-day content calendar across owned channels (organic social, email, blog, SMS) tied to product launches, promo moments, and audience JTBDs. Use when planning a quarter, launching a season, onboarding a content lead, or rebuilding from chaos.
license: Skillor Commercial License v1.0
pack: dtc-marketer-mvp
version: 1.0.0
priority_score: 7
dtc_use_case: "Brand has 3 launches + BFCM in next 90 days. Skill outputs a calendar grid with one anchor moment per week, supporting content per channel, dependencies on creative production, owners, and a focus theme per month."
brand_brain_fields: [audience, product, offers, channel_strategy]
---

# Content Calendar Builder

A focused calendar that gives the team a heartbeat, not a content firehose.

## When to invoke
- "Plan our Q3 content"
- "Build a 90-day content calendar"
- "Tie content to our launches and BFCM"
- New content lead onboarding
- "We're posting reactively — help me get ahead"

## Brand Brain context required
- `{{brand.audience}}` — JTBDs to feed monthly themes
- `{{brand.product}}` — launches, hero SKUs, replenishment moments
- `{{brand.offers.promo_calendar}}` — BFCM, MD, Mother's Day, founder's birthday, etc.
- `{{brand.channel_strategy}}` — which channels we actually run + their role

## Inputs from user
1. Time window (30 / 60 / 90 days)
2. Confirmed launches + dates
3. Promo moments (locked vs tentative)
4. Headcount + production capacity (videos/week, emails/week)
5. Anything off-limits (channel pause, holiday blackout, regulated period)

## Process
1. **Pick 1 anchor per week.** Anchor = the most important moment that week (launch, promo, content drop, founder POV piece). Everything else supports it.
2. **Set monthly theme** — one JTBD or seasonal context.
3. **Distribute across channels** — for each anchor, define what goes out on email, organic social, paid, blog, SMS, push.
4. **Map dependencies** — what creative must be produced by when (creator brief, photoshoot, copy review).
5. **Set guardrails** — max sends/week per channel, blackout windows, frequency caps.
6. **Pre-mortem** — what could break? (stockout, agency delay, regulatory change.)

## Output template

```
CONTENT CALENDAR — <brand> — <window>
Theme by month:
  Month 1: <theme + JTBD>
  Month 2: <theme + JTBD>
  Month 3: <theme + JTBD>

WEEK-BY-WEEK GRID
| Wk | Anchor moment | Email | Organic social (IG/TT) | Blog | SMS | Push | Owner |
|----|---|---|---|---|---|---|---|
| 1 | <launch / promo / drop> | <send #1, #2> | <posts/reels> | <post> | <…> | <…> | <…> |
| 2 | … | … | … | … | … | … | … |
…

PRODUCTION DEPENDENCIES
| Asset | Needed by week | Owner | Status |
|---|---|---|---|
| <hero photo> | wk 2 | <studio> | shot ✅ |
| <UGC concept 3> | wk 4 | <agency> | brief sent |
…

GUARDRAILS
- Max email sends/week: <n>
- Max promo emails/month: <n>
- Frequency cap on push: <…>
- Blackout windows: <e.g. no promo within 24h of news event>

PRE-MORTEM
- If <event> happens, we will <fallback>.
- If <inventory> goes red on <SKU>, we pull anchor wk <n> and shift to <SKU2>.

WHAT WE ARE NOT POSTING
- <cadence/format we're cutting because it doesn't serve an anchor>
```

## Output checklist
- [ ] Each week has exactly ONE anchor (otherwise the team chases multiples)
- [ ] Monthly theme grounded in a real JTBD
- [ ] Each channel has clear coverage (or explicit "skip" for the week)
- [ ] Production dependency table with owner + status
- [ ] Guardrails on send frequency per channel
- [ ] Pre-mortem includes at least one inventory fallback
- [ ] "Not posting" list included (focus, not feed)

## Anti-patterns
- 4 anchors per week ("everything is important" = nothing is)
- Calendar without dependency map (assets miss; weeks die)
- Channel-uniform content (one creative tweaked 5 ways across all channels)
- No frequency caps — burnout on email or SMS by month 2
- Ignoring promo calendar from `{{brand.offers}}` and double-booking moments
