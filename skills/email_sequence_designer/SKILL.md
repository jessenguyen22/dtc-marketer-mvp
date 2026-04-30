---
name: email_sequence_designer
description: Design any email sequence end-to-end — triggers, branching logic, subject lines, body copy, send timing, segmentation rules — for any ESP (Klaviyo, Mailchimp, HubSpot, Customer.io). Use when the user wants a launch sequence, nurture, onboarding, education, event, post-purchase, or any sequence that's NOT a Klaviyo-specific lifecycle flow (use klaviyo_email for those).
license: MIT
pack: dtc-marketer-mvp
version: 1.0.0
priority_score: 8
dtc_use_case: "Brand launching new collection in 3 weeks. Skill designs a 6-email pre-launch sequence (waitlist signup → tease 1 → tease 2 → unlock → reminder → last call) with subject lines, segmentation by waitlist source, send-time logic, and a goal metric per email."
brand_brain_fields: [voice, audience.objections, product, offers]
---

# Email Sequence Designer

ESP-agnostic sequence design. Outputs are ready to implement in Klaviyo, Mailchimp, HubSpot, or Customer.io.

## When to invoke
- "Design a launch sequence for our new SKU"
- "Build a 5-email nurture for waitlist signups"
- "Onboarding emails for first-time buyers"
- "Pre-event email sequence"
- "Re-engagement emails for stale leads"
- Any non-Klaviyo-lifecycle sequence (use `klaviyo_email` for welcome / cart / win-back)

## Brand Brain context required
- `{{brand.voice}}` — for subjects + body
- `{{brand.audience.objections}}` — to address one per message
- `{{brand.product}}` — feature → benefit → outcome to weave in
- `{{brand.offers}}` — to anchor any incentive logic

## Inputs from user
1. Sequence type (launch / nurture / onboarding / education / event / re-engagement / promotional / custom)
2. Goal metric (signups, sales, RSVPs, content opens, repeat orders)
3. Audience segment + entry trigger
4. Number of messages (or let the skill recommend)
5. ESP in use (constraints: Klaviyo flow logic, HubSpot smart lists, Mailchimp customer journeys)
6. Existing assets to reuse (videos, blog posts, lookbooks, founder note)

## Process
1. **Define entry trigger + exit conditions.** Always include "converted" as exit.
2. **Design timing skeleton** — # / delay / channel / intent. Resist >7 messages without a strong reason.
3. **Assign one job per message.** No message should have 2 goals.
4. **Map each message to one objection** from `{{brand.audience.objections}}` (variety prevents fatigue).
5. **Write subjects + previews + body briefs.** Subjects ≤45 chars; preview ≤90; one CTA per email.
6. **Add branching logic.** Open/click splits, segment splits, urgency overlays.
7. **Spec measurement** — primary KPI, secondary signals, kill rules per message (e.g. unsub > 0.5%).
8. **ESP implementation notes** — list any tags, properties, custom events the team must create first.

## Output template

```
SEQUENCE: <name>
TYPE: <launch / nurture / etc.>
GOAL: <metric + target>
AUDIENCE: <segment + entry trigger>
EXIT: <converted, unsubscribed, completed sequence>

TIMING SKELETON
| # | Delay | Channel | Job | Objection addressed |
|---|---|---|---|---|
| 1 | 0h    | Email | hook + expectation set | — |
| 2 | 24h   | Email | proof + RTB           | "is this real?" |
| 3 | 48h   | Email | objection (price)     | "is it worth it?" |
| 4 | 72h   | Email | identity + community  | "is this for me?" |
| 5 | 96h   | Email | offer + urgency       | "why now?" |
| 6 | 120h  | SMS   | last call             | reminder |

—— EMAIL #1 ——
Subject (A): <≤45 chars>
Subject (B): <variant>
Preview:    <≤90 chars>
Body brief: <3 short blocks; lead block; proof block; CTA block>
CTA:        <verb-led, ≤4 words>
Asset link: <existing asset to reuse>
KPI:        <open % / click %>
Kill rule:  <if unsub > X%, pause and rewrite>

…repeat per message…

BRANCHING
- After Email #2: clicked → fast-track to #5; didn't open → re-send with new subject 24h later
- After Email #3: VIP segment → swap to founder-note variant
- Conversion → exit + suppress for 90 days

SEGMENTATION TO BUILD FIRST
- <segment name>: <ESP-specific definition>

ESP IMPLEMENTATION NOTES (<ESP>)
- Tags to create: <…>
- Custom properties: <…>
- Triggers: <…>
- Smart-send window: <e.g. 9am-9pm recipient local time>

MEASUREMENT FRAME
- Primary KPI: <…>
- Secondary signals: open, CTR, unsub, complaint, conversion
- Decision date: <after X recipients have completed>
```

## Output checklist
- [ ] Entry trigger + exit conditions explicit (incl. "converted")
- [ ] Each message has exactly one job + one CTA
- [ ] Each message addresses one objection (no repeats unless rebuttal sequence)
- [ ] All subjects ≤45 chars, all previews ≤90 chars
- [ ] At least 2 subject variants on the highest-stakes message
- [ ] Branching defined (open/click splits, conversion exit)
- [ ] Kill rule per message (unsub or complaint threshold)
- [ ] ESP-specific tags/properties listed for the user to build first

## Anti-patterns
- 10+ message sequences without re-engagement check (you're training people to ignore you)
- Same offer repeated in every email (escalate or vary)
- No conversion exit — converted customers keep getting "buy now" messages
- All subjects use the same pattern (curiosity-only, or all stat-led) — vary the style
- Implementation-first design (writing copy before the trigger + segment exist)
