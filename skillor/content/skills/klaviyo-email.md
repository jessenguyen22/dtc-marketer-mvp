---
name: klaviyo_email
description: Build, audit, or rewrite Klaviyo email/SMS flows for a DTC brand. Use when the user asks about welcome series, abandoned cart, browse abandonment, post-purchase, win-back, replenishment, VIP, sunset, or any lifecycle automation in Klaviyo. Covers flow logic, segmentation, send-time, deliverability, and on-brand copy.
license: Skillor Commercial License v1.0
pack: dtc-marketer-mvp
version: 1.0.0
priority_score: 10
dtc_use_case: "Founder says 'our welcome flow is just one email and converts 1.2%' — this skill audits it and ships a 5-email rebuild ready to paste into Klaviyo with subject lines, body copy, segmentation rules, and send-time logic."
brand_brain_fields: [voice, audience.objections, product.hero, product.aov, offers, kpis.email_rev_per_recipient, tech_stack.klaviyo]
---

# Klaviyo Email & SMS Flow Builder

Expert guidance for designing, auditing, and rewriting Klaviyo flows for DTC brands. Outputs are paste-ready for Klaviyo's flow builder.

## When to invoke
- "Build a welcome flow" / "abandoned cart" / "post-purchase" / "win-back" / "replenishment"
- "Audit my Klaviyo flows"
- "Rewrite this email to be more on-brand"
- "Why is my flow not converting?"
- Any mention of Klaviyo, lifecycle email, transactional triggers, or SMS automation

## Brand Brain context required
Pull from `BRAND_BRAIN.md`:
- `{{brand.voice}}` — tone, signature phrases, banned words
- `{{brand.audience.objections}}` — to pre-empt in body copy
- `{{brand.product.hero}}` + `{{brand.product.aov}}` — for upsell math
- `{{brand.offers}}` — default offer + free-ship threshold
- `{{brand.tech_stack.klaviyo}}` — which flows already exist (avoid duplicates)

If any field is empty, stop and tell the user which one to fill — do not invent brand voice.

## Inputs from user
1. Flow type (welcome / abandoned cart / browse / post-purchase / win-back / replenishment / VIP / sunset)
2. Existing flow exports (HTML or screenshots) if auditing
3. Goal metric (revenue/recipient, placed-order rate, click rate)
4. SMS allowed? (yes/no, opt-in count if yes)

## Process
1. **Map the trigger + entry filter.** State the Klaviyo metric (e.g. "Started Checkout") and exclusions (e.g. "Placed Order in last 30 days").
2. **Design the timing skeleton** before writing copy. Show send #, delay, channel, intent.
3. **Write each message** using brand voice. Each message has: subject, preview, hero block, body, CTA, P.S.
4. **Add splits** — at minimum: subscriber vs non-subscriber, first-time vs returning, AOV-tier.
5. **Specify deliverability guards** — list-cleaning rule, engagement-based send, plain-text variant.
6. **Hand off** with implementation notes: tags to create, segments needed, A/B test slot.

## Output template

```
FLOW: <name>
TRIGGER: <metric> | ENTRY FILTERS: <...>
GOAL: <metric>+<%> uplift over baseline

TIMING SKELETON
| # | Delay | Channel | Intent |
|---|---|---|---|
| 1 | 0h    | Email  | <hook + offer remind> |
| 2 | 4h    | SMS    | <urgency nudge> |
| 3 | 24h   | Email  | <objection #1> |
| 4 | 48h   | Email  | <social proof> |
| 5 | 72h   | Email  | <last call> |

—— EMAIL #1 ——
Subject (A): <≤45 chars>
Subject (B): <variant>
Preview:    <≤90 chars, do not repeat subject>
Body:
<3-5 short blocks; lead with biggest objection>
CTA:        <verb-led, ≤4 words>
P.S.:       <secondary nudge>

…repeat per message…

SEGMENTATION TO CREATE
- <segment name>: <Klaviyo definition>

A/B TEST SLOT
- Variable: <subject / hero image / CTA>
- Sample size: <recipients per variant>
- Decision rule: <metric + threshold>

DELIVERABILITY GUARDS
- Engagement filter: opened in 90d
- Plain-text variant included
- List-cleaning trigger: bounce ≥2 → suppress
```

## Output checklist
- [ ] Each message named, timed, channel-typed
- [ ] Every subject ≤45 chars and every preview ≤90 chars
- [ ] At least one objection from `{{brand.audience.objections}}` addressed per message
- [ ] No banned words from `{{brand.voice.banned}}`
- [ ] Offer logic matches `{{brand.offers}}` and never breaches discount floor
- [ ] Entry/exit filters explicitly stated
- [ ] A/B test variable + decision rule specified
- [ ] Segmentation requirements listed for the user to build first

## Anti-patterns
- Generic "Hi {first_name}, welcome to our family" openers — replace with brand-specific hook
- Using a discount on the very first welcome send (anchors price expectations down)
- More than 1 CTA per email (pick one action)
- Sending SMS without value (no SMS for "Email #2 reminder" — only for time-sensitive nudges)
- Letting the same person hit multiple flows simultaneously without a smart-send guard
