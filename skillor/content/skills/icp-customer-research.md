---
name: icp_customer_research
description: Build or refine an Ideal Customer Profile (ICP), persona set, JTBD, and objection list — grounded in real signals (reviews, CS tickets, exit surveys, social listening). Use when launching a brand, repositioning, going into a new segment, or filling the Audience section of the Brand Brain.
license: Skillor Commercial License v1.0
pack: dtc-marketer-mvp
version: 1.0.0
priority_score: 9
dtc_use_case: "Brand has 4,000 reviews and CS tickets but no formal persona doc. Skill ingests review samples + CS macros + exit survey CSV, clusters into 2 personas, extracts top 8 JTBD and top 10 objections with verbatim quotes, ready to paste into Brand Brain section 4."
brand_brain_fields: [identity, positioning, product]
---

# ICP & Customer Research

Build research-grounded personas, JTBD, and objection lists — no vibes, only verbatim signals.

## When to invoke
- "Who is our customer?"
- "Build personas for our brand"
- "What objections should we address?"
- "Fill section 4 of the Brand Brain"
- Pre-launch (use proxy signals: competitor reviews, subreddits) or post-launch (use own reviews + CS)

## Brand Brain context required
- `{{brand.identity}}` — what business we're actually in
- `{{brand.positioning}}` — to test if our current ICP claim is real
- `{{brand.product}}` — to map JTBD to features we actually have

If section 4 is empty, this skill *fills* it; do not assume an ICP.

## Inputs from user
1. **Source signals** (any combination):
   - Recent reviews (≥50 — site, Amazon, Trustpilot, Sephora, etc.)
   - CS ticket macros + top 30 ticket subjects
   - Exit survey responses (CSV or summary)
   - Subreddit / IG comment threads about the category
   - Sales call transcripts (B2B-ish DTC)
2. Current best-guess persona(s), if any (so we can confirm or replace)
3. Order data summary (AOV bands, repeat-rate by source, geo)

## Process
1. **Triage signals** — note coverage gaps. Reviews alone over-index on satisfied customers; CS over-indexes on pain.
2. **Extract verbatims** — quotes that name a *job*, an *objection*, a *trigger*, or an *identity claim*. Keep them verbatim.
3. **Cluster JTBDs.** Use the format: "When `<situation>`, I want to `<motivation>`, so I can `<outcome>`." Aim for 5-10 JTBDs.
4. **Cluster objections.** "I'd buy if not for…" — surface 8-12.
5. **Synthesize personas (max 2 — most DTC brands over-segment).** Each persona = name, demo skeleton, identity, top 3 JTBDs, top 5 objections, switching trigger, channel where they hang out, verbatim quote.
6. **Write the paste-ready Brand Brain block** for section 4.
7. **Flag what's missing.** If you couldn't ground something in a signal, mark it `[ASSUMPTION — needs validation]`.

## Output template

```
ICP RESEARCH — <brand>

SIGNAL INVENTORY
- Reviews ingested: <n> (avg rating <>)
- CS tickets sampled: <n>
- Exit survey responses: <n>
- Other: <…>
Coverage gaps: <…>

VERBATIM POOL (top 30 quotes, tagged)
| Quote | Tag |
|---|---|
| "..." | JTBD-functional |
| "..." | objection-trust |
| "..." | identity-claim |
| "..." | switching-trigger |
…

JTBD CLUSTERS
1. When <situation>, I want to <motivation>, so I can <outcome>. — frequency <n quotes>
2. ...

OBJECTION CLUSTERS
1. <objection> — frequency <n>
   Example verbatim: "..."
   Suggested on-page answer: "..."
2. ...

PERSONAS (MAX 2)

Persona 1 — <memorable name>
  Demo: <age range, gender if relevant, geo, life stage>
  Identity claim: "<their words>"
  Top 3 JTBDs: <…>
  Top 5 objections: <…>
  Switching trigger: <what made them leave the alternative>
  Where they hang out: <subreddits, IG accounts, retailers>
  Anchor verbatim quote: "..."
  Anchor product fit: <which SKU + why>

Persona 2 (only if distinct)
  ...

PASTE-READY BRAND BRAIN UPDATE (section 4)
<copy block ready to drop>

ASSUMPTIONS NEEDING VALIDATION
- [ ASSUMPTION ] <…> — how to validate: <…>
- [ ASSUMPTION ] <…> — how to validate: <…>

RESEARCH GAPS — RECOMMENDED NEXT STEPS
1. <e.g. interview 5 lapsed customers>
2. <e.g. add a single exit-intent survey question>
3. <e.g. tag CS tickets by JTBD for 2 weeks>
```

## Output checklist
- [ ] Signal sources listed with sample size
- [ ] ≥30 verbatim quotes captured and tagged
- [ ] ≥5 JTBDs in standard format
- [ ] ≥8 objections, each with verbatim + suggested on-page answer
- [ ] ≤2 personas (more = over-segmented for DTC)
- [ ] Each persona grounded in at least one anchor verbatim
- [ ] Anything not grounded explicitly flagged `[ASSUMPTION]`
- [ ] Paste-ready Brand Brain section 4 block included

## Anti-patterns
- Inventing personas without signals (the worst sin in DTC research)
- 5+ personas (you can't market to 5 — pick the 1-2 that drive 80% of revenue)
- Demo-only personas ("35yo woman, $80k income") — useless without identity + JTBD
- Quoting paraphrases as "verbatims" — only direct quotes count
- Skipping objections section because "we don't have them" — every brand does, you haven't asked
