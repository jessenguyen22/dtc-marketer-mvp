---
name: creative_test_framework
description: Stand up a structured creative testing framework for paid ads — variable hierarchy, testing cadence, sample-size + budget math per cell, win/kill rules, and a creative library taxonomy. Use when creative testing is ad-hoc, when scaling spend, or when teams disagree on what "won".
license: Skillor Commercial License v1.0
pack: dtc-marketer-mvp
version: 1.0.0
priority_score: 7
dtc_use_case: "Brand spends $80k/month on Meta with no testing rhythm. Skill defines variable hierarchy (concept → hook → format → CTA), sets a 6-cell weekly cadence, writes win/kill rules tied to spend thresholds, and templates the creative library so winners get reused."
brand_brain_fields: [voice, audience, product, offers, channel_strategy, kpis]
---

# Creative Testing Framework

Stop arguing about creative. Set the rules once, run them every week.

## When to invoke
- "Build us a creative testing framework"
- "Why does our team always disagree on the winner?"
- "We're scaling spend and creative is the bottleneck"
- New paid lead onboarding

## Brand Brain context required
- `{{brand.voice}}` — boundary for what's testable (we don't test off-brand)
- `{{brand.audience}}` — angle hierarchy comes from objections + JTBDs
- `{{brand.product}}` — what features actually demo well
- `{{brand.offers}}` — testable offer variants (within rules)
- `{{brand.kpis.cac}}` + ROAS target — kill rules tied to break-even

## Inputs from user
1. Monthly paid budget (and split by platform)
2. Average CPM + current CTR + CAC per platform
3. Current creative production capacity (videos / stills per week)
4. Tooling for testing (Meta CBO/ABO, third-party like Motion / AdRipple)
5. Decision-making body (who calls a winner?)

## Process
1. **Pick the variable hierarchy.** Test top of hierarchy first; lower variables only matter if angle works.
   1. Concept (the angle / big idea)
   2. Hook (first 3 sec / 3 words)
   3. Format (UGC vs static vs founder-led vs DPA)
   4. CTA / offer
   5. Length (15s vs 30s)
2. **Set cadence.** Weekly batch — N concepts × M hooks. Define batch size based on budget / CPM / required sample.
3. **Sample-size math per cell.** Need enough impressions to call CTR significant; enough conversions to call CAC. State both.
4. **Win/kill rules.** Cell budget threshold + metric threshold + decision window.
5. **Library taxonomy.** Tag winners by concept + hook + format + offer so we recompose.
6. **Decision-making.** Who calls it (RACI). When (weekly review). What happens to winners (scale rule) and losers (kill or iterate).

## Output template

```
CREATIVE TESTING FRAMEWORK — <brand>

VARIABLE HIERARCHY (test top down)
1. Concept (angle)
2. Hook (first 3s)
3. Format (UGC / static / founder / DPA)
4. CTA / offer
5. Length

WEEKLY CADENCE
Batch size: <N concepts × M hooks per concept>
Cell budget: $<> (covers required sample)
Total weekly creative budget: $<>
Production lead time: <days>

SAMPLE-SIZE MATH PER CELL
At CPM $<>, $<> spend = <impressions>
At CTR baseline <%>, <impressions> = <clicks>
At CR baseline <%>, <clicks> = <conversions>
This is enough to call CTR significant at MDE <%> but NOT CAC. Therefore: judge cells on hook signal at impressions; judge concepts on conversion at $<spend>.

WIN / KILL RULES
At cell spend $<>:
  - CTR > <baseline + X%> → promote to "candidate winner" pool
  - CTR < <baseline - Y%> → kill cell

At cell spend $<> (concept-level decision):
  - CAC ≤ <target> AND volume sustainable → SCALE rule below
  - CAC > <target × 1.3> → kill concept
  - CAC between → iterate (new hook on same concept)

SCALE RULE
- 1.2x daily budget every 48h while CAC ≤ target
- Cap per concept: <X% of daily total>
- Cool-off if CPM jumps > 25% (audience saturation)

CREATIVE LIBRARY TAXONOMY
Each asset tagged: concept_<name>__hook_<style>__format_<type>__offer_<id>__win_status
Reuse rules:
- Winning hook can be ported to new concepts
- Winning format can be ported to new hooks
- Concept-format-offer combo that worked is the recompose unit

DECISION RACI
- Calls winners: <role>
- Approves kills: <role>
- Owns production briefs: <role>
- Reviews weekly: <role + day>

ANTI-PATTERN GUARDRAILS
- No mid-test creative edits ("just changed the music")
- No comparing cells with different audiences
- No promoting winners without min spend threshold reached
```

## Output checklist
- [ ] Variable hierarchy in priority order
- [ ] Weekly batch size + cell budget specified
- [ ] Sample-size math shown for both CTR and CAC decisions
- [ ] Win + kill rules tied to spend thresholds (not just metric thresholds)
- [ ] Scale rule with daily ramp + cap
- [ ] Creative library taxonomy is concrete (anyone can tag a new asset)
- [ ] RACI for who decides

## Anti-patterns
- Testing CTAs before testing concept (lower-impact variable first = wasted spend)
- "Best creative wins" with no spend threshold (early winners often regress)
- Killing on CTR alone (a low-CTR ad with high CR can be a winner)
- One person calling all decisions in their head (process unrepeatable)
- Reusing only the static asset, not the underlying concept (the concept is the IP)
