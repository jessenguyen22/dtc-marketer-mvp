---
name: win_loss_customer_interview
description: Generate a structured win/loss/churn customer interview script + analysis framework. Produces a 12-question script tuned to outcome (won, lost, churned, never-purchased), recording + transcription instructions, and a post-interview synthesis template (themes, surprises, repeat-quotable lines) that feeds back into ICP and positioning skills. Use after sales calls (B2B-ish DTC) or post-purchase / cancellation flows.
license: Skillor Commercial License v1.0
pack: dtc-marketer-mvp
version: 1.0.0
priority_score: 8
dtc_use_case: "Brand churned 320 subscribers last quarter, refund ticket macros say 'didn't work for me' — vague. Skill outputs a 12-question churn interview script (5 of which probe the trigger event before cancellation), a $25 incentive plan, transcription via otter.ai instructions, and a synthesis template that surfaces the *real* reason: switched routines after a life event the product didn't fit. Findings paste into ICP skill section 4 + positioning skill objection list."
brand_brain_fields: [audience, positioning, product, offers]
---

# Win / Loss / Churn Customer Interview

Survey data tells you *what*. Interviews tell you *why*. The job is to extract repeat-quotable lines you can paste into ad copy.

## When to invoke
- "Why are people churning?"
- "Why did this enterprise deal die?" (B2B-ish DTC: subscription, B2B wholesale, custom-orders)
- "Run win/loss after our last 20 sales calls"
- "Post-purchase interview script for new customers"
- "Lost-deal interview after they picked a competitor"
- Pre-positioning audit (feed `{{brand.positioning}}` with real quotes)
- Pre-ICP refresh (feed `icp_customer_research` with verbatim signals)

## Brand Brain context required
- `{{brand.audience}}` — to confirm/expand persona definitions with signal
- `{{brand.positioning}}` — to test if our claim survives contact with the customer
- `{{brand.product}}` — to map dropped features / unused features
- `{{brand.offers}}` — pricing / promo / subscription mechanics that may be the actual driver

## Inputs from user
1. Outcome category — pick one:
   - **WON** — purchased, currently active
   - **LOST** — got to consideration, picked a competitor or "no decision"
   - **CHURNED** — purchased, then cancelled / stopped repurchasing
   - **NEVER-PURCHASED** — high-intent visitor who bounced (cart abandon, sample-only)
2. Product/SKU or plan
3. Segment (which persona, which channel they came in on)
4. Recency window (interview within 30 days of the event — older = unreliable memory)
5. Incentive plan ($25-100 gift card typical for DTC, $200-500 for B2B)
6. Volume target (8-12 interviews per outcome category — diminishing returns past 12)

## Process
1. **Pick outcome category first.** The script for *churned* differs from *lost* differs from *won*. Never use one universal script — you'll get one universal answer.
2. **Recruit within 30 days of the event.** Memory of "why I cancelled" decays fast. After 60 days, you're getting a rationalization, not a reason.
3. **Use a 12-question script** (see template). 8 are required, 4 are situational. Stop at 45 minutes.
4. **Record + transcribe.** Always ask permission. Use Otter.ai / Fathom / Grain / Riverside. Without transcription, you cannot extract verbatims — and verbatims are the entire point.
5. **Probe for the trigger event.** "What happened in the week before you cancelled?" — the trigger is rarely the product, it's a life/context shift.
6. **Probe for the alternative.** Won → "What were you using before?" Lost → "Who did you go with, and why them?" Churned → "What are you using now, if anything?"
7. **Capture verbatims.** During synthesis, mark quotes that are: (a) pasteable into ad copy, (b) name an objection, (c) name a JTBD, (d) name a switching trigger.
8. **Synthesize across 8-12.** Single interviews are anecdotes. Themes need ≥3 mentions across interviews to be a real signal.
9. **Tag surprises.** Anything that contradicts the brand's current `{{brand.positioning}}` or `{{brand.audience}}` — flag explicitly. These are the highest-value findings.
10. **Feed back into other skills.** Output a paste-ready block for `icp_customer_research` (verbatims) + `positioning_brief` (objections + switching triggers).

## Output template

```
WIN/LOSS/CHURN INTERVIEW PACK — <brand> — outcome: <won/lost/churned/never>

—— PART 1: SCRIPT (12 questions, 30-45 min) ——

OPENING (3 min)
"Thanks for jumping on. This isn't a sales call — I'm trying to understand <your decision / your experience>, and I'll be honest with you that what we learn shapes what we build and how we communicate. I'll ask permission to record so I can re-listen later — recordings stay internal. Sound okay?"

CONTEXT-SETTING (questions 1-3 — REQUIRED)
1. Walk me through the moment you first realized you needed something like <category>. What was happening?
   [Probe: trigger event, life context, alternative they tried first]
2. Before <our brand>, what did you try? Why didn't it work?
   [Probe: number of alternatives, switching costs, what specifically broke]
3. How did you hear about us? What made you click / consider?
   [Probe: channel, ad creative, word-of-mouth, search intent]

DECISION (questions 4-7 — REQUIRED)
4. [WON] What almost stopped you from buying? What was the last objection?
   [LOST] What made you go with <competitor> instead of us?
   [CHURNED] What happened in the week or two before you cancelled?
   [NEVER] What were you hoping to find when you came to the site that you didn't find?
5. Who else was involved in the decision? (partner, household, team, manager)
6. If you had to explain <our brand> to a friend in one sentence, what would you say?
   [This is the gold question. The answer is your real positioning.]
7. What's the one thing about <our brand / category> you wish more people understood?

EXPERIENCE / PRODUCT (questions 8-10 — REQUIRED for WON/CHURNED, situational for LOST/NEVER)
8. Walk me through how you actually used <product>. When, where, with what?
   [Probe: real use case, not the marketed use case]
9. Was there a moment you thought "this is working" — or "this isn't working"? What happened?
10. What did we promise that didn't show up? What did we deliver that you didn't expect?

CLOSE (questions 11-12 — REQUIRED)
11. If we changed one thing tomorrow, what should it be?
12. Anyone you know who'd be a perfect fit (or perfectly wrong fit) for us? Why them?

OPTIONAL PROBES (use 4 of these if time)
- "How did you justify the price to yourself / your partner?"
- "Did you read reviews before buying? Whose? What changed your mind?"
- "Were you on a subscription or one-time? Why?"
- "Have you recommended us to anyone? What did you say?"
- "If we shut down tomorrow, what would you do instead?"

CLOSING
"Two more things: (a) is it okay if we follow up via email if a quote we want to anonymize comes up? (b) <send incentive>. Thank you — this is genuinely useful."

—— PART 2: RECORDING + TRANSCRIPTION INSTRUCTIONS ——

Tools (pick one):
- Riverside.fm — best audio quality, separate tracks
- Fathom — auto-transcribes Zoom, free tier fine for <10 calls/mo
- Otter.ai — works on phone calls if recorded via Otter app
- Grain — for sales-call replays already in CRM

Permission script:
"I'm going to hit record so I can listen back later — it stays internal, no AI training, and I can delete on request. Cool?"

Post-call within 24h:
1. Save raw recording to <drive folder>: `<outcome>_<initials>_<YYYY-MM-DD>.mp4`
2. Auto-transcribe → save .txt next to the recording
3. Skim transcript, highlight 5-10 quotes
4. Tag each quote: [JTBD] [OBJECTION] [TRIGGER] [SWITCHING] [QUOTABLE-AD-COPY] [SURPRISE]
5. Drop tagged quotes into the synthesis sheet

—— PART 3: POST-INTERVIEW SYNTHESIS TEMPLATE ——

Per-interview note (one per call, 5-10 min to write):

INTERVIEW: <participant initials>     DATE: <…>     OUTCOME: <won/lost/churned/never>     SEGMENT: <persona>

THE STORY IN 3 SENTENCES
<sentence 1: who they were before>
<sentence 2: what they tried, what triggered the decision>
<sentence 3: how it ended / where they are now>

TRIGGER EVENT
<the moment something changed that drove the decision — not the product, the *life event*>

ALTERNATIVE / COMPETITOR NAMED
<…>   Why them: <…>

TOP 5 VERBATIM QUOTES (with tags)
1. "..." [TAG]
2. "..." [TAG]
3. "..." [TAG]
4. "..." [TAG]
5. "..." [TAG]

SURPRISES (anything that contradicts current brand positioning / audience claim)
- <…>
- <…>

NEXT-PASS HYPOTHESIS
<one-line hypothesis to test in the next interview>

—— PART 4: CROSS-INTERVIEW SYNTHESIS (after 8-12 calls) ——

THEMES (≥3 mentions = real signal)
| Theme | # mentions | Example verbatim |
|---|---|---|
| <…> | <n> | "..." |
| <…> | <n> | "..." |

TOP REPEAT-QUOTABLE LINES (paste-ready into ad copy / landing-page social proof)
1. "..." — <persona, outcome>
2. "..." — <persona, outcome>
3. "..." — <persona, outcome>

OBJECTIONS SURFACED (≥2 mentions)
1. <objection> — frequency <n> — suggested page-level answer: "..."
2. ...

SWITCHING TRIGGERS
- <e.g. ran out, moved cities, partner complained, found a cheaper alternative, life-stage shift>

POSITIONING TEST
Brand currently claims: "<line from {{brand.positioning}}>"
Customers actually said: "..."
Verdict: <holds / partially holds / contradicted — explain>

FEED-BACK BLOCKS

→ Paste-ready into `icp_customer_research` (section: VERBATIM POOL):
| Quote | Tag | Source |
|---|---|---|
| "..." | <…> | <interview ID> |

→ Paste-ready into `positioning_brief` (section: objections):
1. <objection> — answer: "..." — verbatim source: "..."

→ Flagged for product/CX team:
- <…>
```

## Output checklist
- [ ] Outcome category named (won / lost / churned / never)
- [ ] 12-question script provided, with REQUIRED vs situational marked
- [ ] Recording + transcription tool recommended + permission script included
- [ ] Per-interview note template included (3-sentence story + trigger + verbatims + surprises)
- [ ] Cross-interview synthesis template (themes ≥3 mentions, repeat-quotables, objections)
- [ ] Positioning test block (does brand claim survive customer language?)
- [ ] Feed-back blocks for `icp_customer_research` and `positioning_brief`
- [ ] Incentive plan stated ($25-100 DTC / $200-500 B2B)
- [ ] Recency rule stated (≤30 days from event)
- [ ] Volume guidance stated (8-12 per outcome)

## Anti-patterns
- One universal script across won/lost/churned — different outcomes need different question 4
- Interviewing >60 days after the event — you get rationalization, not the real reason
- Skipping recording because "I'll just take notes" — you lose the verbatims, which are the entire deliverable
- Asking "would you buy again?" instead of "what would change your mind?" — leading questions get leading answers
- Stopping at 1 theme mention — needs ≥3 across interviews to count as signal
- Letting product team interview their own customers about the product (defensive listening) — use a neutral interviewer
- Survey-style yes/no questions — interviews are for *stories*, not data points; use a survey if you want data
- Not asking the "explain to a friend in one sentence" question — it's the highest-signal positioning probe
- Doing 50 interviews — diminishing returns past 12, signal saturates
- Interviewing only happy customers (won) — you'll never hear the objection that's killing your conversion
- Discarding the surprises section because it contradicts current brand strategy — surprises are the most valuable finding

## Edge cases
- **B2B-ish DTC (wholesale, custom corporate, subscription bulk)**: extend script to 18 questions, add buying-committee questions ("who else signed off?"), and budget cycle ("when's your next renewal review?"). Incentive: charity donation often outperforms gift cards in B2B.
- **Refund / cancellation flows**: don't interview at the moment of cancellation (they're emotional). Wait 14 days, then reach out. They'll be more honest.
- **No-show rate**: budget for 50% no-show on cold-recruited churned customers. Confirm 24h before. Day-of text reminder.
- **Anonymity**: if interviewing for ad-copy verbatims, ask explicit permission to use the quote attributed to a first name + city, OR fully anonymized as "verified customer". Get this in writing.
- **Multi-buyer households (DTC food, beauty, wellness)**: the buyer and the user may differ. Always ask "who actually used it?" — interview the user, not the buyer, when possible.
- **NPS detractors vs churned**: a 0-6 NPS who hasn't churned yet is the highest-value interview pool — they'll churn next quarter, you can intervene.
- **Lost deals where prospect went with "no decision"**: this is a signal that *category itself* is unclear, not that competitor won. Probe the category-education gap explicitly.
- **Subscription churn from price increase**: do not ask "was it the price?" (everyone says yes). Ask "if price had stayed the same, would you still be subscribed?" and probe the answer.
- **Founder bias on synthesis**: if the founder is reading transcripts, they will hear what they want to hear. Have a non-founder do the first synthesis pass; founder reviews surprises only.
- **Translation / non-English customers**: do NOT translate verbatims for ad copy use — the cadence and word choice IS the value. Quote in original language with translation parens.
- **Sample bias toward articulate customers**: customers who agree to a 45-minute interview are typically more engaged + verbal than the median. Cross-check themes against survey data before treating as universal.
