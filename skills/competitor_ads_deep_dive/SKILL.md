---
name: competitor_ads_deep_dive
description: Pull and analyze competitor ads from public ad libraries (Meta Ad Library, Google Ads Transparency, TikTok Creative Center, LinkedIn Ad Library) to surface messaging patterns, creative formats, hooks, and positioning gaps the brand can exploit. Use when planning a new campaign, refreshing creative, entering a new category, or wanting to know "what's working" for competitors.
license: MIT
pack: dtc-marketer-mvp
version: 1.0.0
priority_score: 9
dtc_use_case: "Before launching a new SKU, brand wants to know what messaging and creative formats top 3 competitors are running. Skill returns categorized ad themes, hook patterns, format mix, longest-running ads (proxy for winners), and 5 specific positioning gaps to attack."
brand_brain_fields: [positioning, audience, product, voice]
---

# Competitor Ads Deep-Dive

Systematic intelligence pull from public ad libraries — themes, hooks, formats, longevity, gaps.

## When to invoke
- "What ads is <competitor> running?"
- "What's working in <category>?"
- Before launching a new product or campaign
- When refreshing fatigued creative and need fresh angles
- Entering a new geo or audience segment

## Brand Brain context required
- `{{brand.positioning}}` — to identify gaps (we want to find what they ignore)
- `{{brand.audience}}` — to filter for ads targeting our ICP
- `{{brand.product}}` — for feature-by-feature comparison
- `{{brand.voice}}` — to identify "white space" tones we can own

## Inputs from user
1. Competitor list (3-5 max — more = noise)
2. Geo focus (country / region)
3. Category context (helps interpret common claims)
4. Time window (default: ads active in last 90 days)
5. Specific question if any (e.g. "are they running BFCM yet?")

## Process
1. **Source list.** Use Meta Ad Library, Google Ads Transparency Center, TikTok Creative Center / Ad Library, LinkedIn Ad Library. State which sources cover which competitor (some don't run on all).
2. **Sample target.** 30-50 ads per competitor minimum; if fewer exist, note it.
3. **Tag each ad** along: format (image/carousel/video/UGC), angle (problem/proof/promo/identity/founder/comparison/UGC-testimonial), hook style (question/stat/contrarian/demo/transformation), CTA type, offer presence, longevity (days running — winners run long).
4. **Cluster themes** — what message families repeat across competitors? Which are owned by one? Which are unowned?
5. **Find the gap.** The unowned territory + our `{{brand.positioning}}` point of difference = our wedge.
6. **Output 5 attack angles** the brand can run that competitors aren't.

## Output template

```
COMPETITOR ADS DEEP-DIVE — <category>
Geo: <…>   Window: <…>   Sources used: <…>

PER-COMPETITOR SNAPSHOT
| Competitor | # ads sampled | Format mix | Top angle | Longest-running ad |
|---|---|---|---|---|
| A | 47 | 60% video / 30% UGC / 10% carousel | problem→proof | "<headline>" — running 142 days |
| B | … | … | … | … |
| C | … | … | … | … |

THEME CLUSTERS (across all competitors)
1. <theme> — owned by <competitor> — frequency <%>
2. <theme> — saturated (all 3 running it) — frequency <%>
3. <theme> — emerging (only B running, ramping) — frequency <%>

HOOK PATTERN INVENTORY
- Question hooks: <example, count>
- Stat hooks: <example, count>
- Contrarian hooks: <example, count>
- Demo hooks: <example, count>
- Transformation hooks: <example, count>

FORMAT TRENDS
- UGC % rising / stable / falling
- Static vs video split
- Carousel usage on prospecting vs retargeting

OFFER BENCHMARKS
| Competitor | Default discount | Free ship threshold | Subscription incentive |
|---|---|---|---|
| A | <> | <> | <> |
| B | <> | <> | <> |

POSITIONING GAPS WE CAN ATTACK
1. <gap> — why competitors miss it: <…> — our claim: <…>
2. <gap> — …
3. <gap> — …
4. <gap> — …
5. <gap> — …

5 ATTACK ANGLES (briefs)
Angle 1: <name>
  - Why now: <…>
  - Hook: <…>
  - Proof: <…>
  - Format suggested: <…>
  - Sample primary text: <…>
Angle 2 …

CONFIDENCE NOTES
- <ad library coverage gaps, sample size caveats, geo limitations>
```

## Output checklist
- [ ] Sources listed per competitor (don't claim TikTok data if TikTok library doesn't cover them)
- [ ] Sample size per competitor stated (and called out if <30)
- [ ] Longest-running ad identified per competitor (proxy for "what's working")
- [ ] At least 5 distinct themes clustered with frequency
- [ ] Gaps explicitly tied to our `{{brand.positioning}}`
- [ ] Each attack angle has hook + proof + format + sample copy
- [ ] No claim about a competitor's *spend* or *results* (libraries don't expose those — never invent)

## Anti-patterns
- Counting *all* ads as equally valid (a 3-day ad is not a winner — longevity > volume)
- Drawing conclusions from <20 sampled ads
- Inferring spend or ROAS from public libraries (not exposed)
- Picking a "gap" that's actually a category-wide regulatory restriction
- Copying a competitor's exact angle (the goal is the gap, not the mimic)
