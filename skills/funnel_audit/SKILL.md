---
name: funnel_audit
description: Audit the full DTC funnel — traffic → PDP → ATC → IC → purchase → repeat → advocacy. Identify the biggest single drop-off, the leak likely root cause, and the highest-ROI fix. Use when CR is dropping, growth is stalling, or you need a one-page diagnosis to share with leadership.
license: MIT
pack: dtc-marketer-mvp
version: 1.0.0
priority_score: 8
dtc_use_case: "Founder asks 'where are we losing money?' Skill ingests funnel-stage metrics, identifies the worst-vs-benchmark drop-off (e.g. ATC → IC at 18% vs 32% benchmark), traces 3 likely causes, and ranks fixes by expected revenue recovery."
brand_brain_fields: [product, offers, kpis, customer_journey]
---

# Funnel Audit

Find the leak that costs the most, fix that one first.

## When to invoke
- "Audit our funnel"
- "Where are we losing money?"
- "CR is dropping but I don't know where"
- Quarterly diagnostic
- New marketer onboarding (start with funnel)

## Brand Brain context required
- `{{brand.product}}` — to interpret leaks (low ATC may be product, not page)
- `{{brand.offers}}` — checkout drops often = shipping/offer mismatch
- `{{brand.kpis}}` — current vs target per stage
- `{{brand.customer_journey}}` — known blockers from journey map

## Inputs from user
1. Funnel-stage data (last 28d): sessions, PV, ATC, IC, purchase, repeat-90d
2. Traffic mix (paid / organic / direct / email)
3. Device split (mobile %)
4. Baseline 28d period (or seasonal comparable)
5. Any recent changes (theme update, ad strategy shift, price change)

## Process
1. **Build the funnel grid** — absolute numbers + step CR per stage.
2. **Compare each step CR to benchmark.** Use category-specific benchmarks; flag the worst delta.
3. **Slice by traffic source.** A site-wide leak vs paid-only leak point to different causes.
4. **Slice by device.** Mobile-only leaks are usually checkout / page weight / sticky CTA.
5. **Hypothesize 3 root causes** for the worst drop-off (ranked by likelihood).
6. **Rank fixes** by expected revenue recovery × effort.
7. **Output 1 fix to ship this week + 2 to plan + 1 thing to NOT do.**

## DTC funnel benchmarks (rough, use as relative not absolute)

| Step | Decent | Good | Best-in-class |
|---|---|---|---|
| Session → PV | 65% | 75% | 85% |
| PV → ATC | 6% | 9% | 14% |
| ATC → IC | 30% | 50% | 65% |
| IC → Purchase | 50% | 65% | 80% |
| First → Repeat (90d) | 20% | 30% | 45% |

## Output template

```
FUNNEL AUDIT — <brand> — <window>

ABSOLUTE FUNNEL
| Stage | Volume | Step CR | Benchmark | Δ vs benchmark |
|---|---|---|---|---|
| Sessions          | <n>  | —      | —    | —    |
| Product views     | <n>  | <%>    | <%>  | <±%> |
| Add to cart       | <n>  | <%>    | <%>  | <±%> |
| Initiate checkout | <n>  | <%>    | <%>  | <±%> |
| Purchase          | <n>  | <%>    | <%>  | <±%> |
| Repeat (90d)      | <n>  | <%>    | <%>  | <±%> |

WORST DROP-OFF
Stage: <X → Y>
Current step CR: <%>
Benchmark: <%>
Estimated lost revenue if fixed: $<>/month

SLICE: BY SOURCE
| Source | PV→ATC | ATC→IC | IC→Purchase |
|---|---|---|---|
| Paid social | <%> | <%> | <%> |
| Google      | <%> | <%> | <%> |
| Email       | <%> | <%> | <%> |
| Organic     | <%> | <%> | <%> |
Reading: <where leak is concentrated>

SLICE: MOBILE VS DESKTOP
| Device | PV→ATC | ATC→IC | IC→Purchase |
|---|---|---|---|
| Mobile  | <%> | <%> | <%> |
| Desktop | <%> | <%> | <%> |
Reading: <…>

ROOT-CAUSE HYPOTHESES (ranked)
1. <cause> — likelihood <H/M/L> — evidence: <…>
2. <cause> — …
3. <cause> — …

FIX RANKING
Ship this week: <fix> — expected impact $<> — effort <H/M/L>
Plan next 30d:  <fix>
Plan next 30d:  <fix>
Do NOT do:      <thing> — because <reason>
```

## Output checklist
- [ ] Full grid filled, including the long-tail stages (don't stop at purchase)
- [ ] Worst drop-off explicitly named with $-impact estimate
- [ ] Slice by source AND device included (one of these usually reveals the leak)
- [ ] Root causes ranked by likelihood with evidence (not just guesses)
- [ ] One ship-this-week fix (not five)
- [ ] One "do NOT do" item — focus comes from saying no
- [ ] Numbers compared to benchmark, not absolute

## Anti-patterns
- Diagnosing "low CR" without slicing by source / device (the leak hides in the average)
- Picking fixes on personal taste vs revenue-recovery math
- Recommending 7 things "to ship this week" — pick 1
- Comparing to global e-commerce benchmark (use category-specific where possible)
- Auditing one period without a comparable baseline
