---
name: brand_voice_builder
description: Develop or refine brand voice — tone axes, signature phrases, banned words, do/don't examples, and a tone matrix per channel. Use when launching a brand, rebranding, onboarding new copywriters, fixing inconsistent copy across channels, or filling the Voice section of the Brand Brain.
license: Skillor Commercial License v1.0
pack: dtc-marketer-mvp
version: 1.0.0
priority_score: 9
dtc_use_case: "New DTC founder has product but no voice doc. Skill interviews them in 8 questions, then outputs a 1-page voice guide with 5 tone axes, 10 do/don't pairs, signature phrases, banned words, and channel-specific tone shifts (PDP vs IG caption vs CS reply)."
brand_brain_fields: [identity, positioning, audience]
---

# Brand Voice Builder

Generate a usable, opinionated brand voice doc that copywriters can apply on day one.

## When to invoke
- "Help me build my brand voice"
- "Our copy sounds inconsistent across channels"
- "Fill in the voice section of my Brand Brain"
- New brand launch / rebrand
- Onboarding a new agency or copywriter

## Brand Brain context required
- `{{brand.identity}}` — origin story, mission, founders' personality
- `{{brand.positioning}}` — point of difference, reasons to believe
- `{{brand.audience}}` — how they talk (verbatim quotes if captured)

If voice section is empty, this skill *fills* it; do not read from `{{brand.voice}}`.

## Inputs from user (the 8-question interview)
1. **3 brands you sound like.** And one specific reason for each.
2. **3 brands you'd never sound like.** And one specific reason.
3. **A real customer review you love.** (Verbatim — voice is downstream of audience.)
4. **A piece of your own copy you're proud of.** And a piece you regret.
5. **Founder's actual speaking style** in 1 sentence.
6. **2-3 categories you compete in** (sets jargon expectations).
7. **What's the *feeling* a customer should have after reading your copy?**
8. **What's a thing your customers complain about in the category that you'd never do?**

## Process
1. **Calibrate tone axes** (5 standard sliders). Place a marker on each.
2. **Extract voice DNA** — 3-adjective summary, two reference brands, two anti-references.
3. **Generate signature phrases** (5-10) — recurring sentence shapes the brand can own.
4. **Compile banned words** — category jargon, hype words, anything the founder regretted.
5. **Build a do/don't matrix** — 10 paired examples covering greetings, headlines, body, error states, CTAs.
6. **Channel tone shifts** — same voice, different volume per surface (PDP, ad, IG caption, CS, email subject, push).
7. **Stress test** — write 5 micro-pieces (one per channel) so the user sees voice in action.

## Output template

```
BRAND VOICE GUIDE — <brand>

VOICE IN ONE SENTENCE
<…>

3-ADJECTIVE SUMMARY
<adj 1>, <adj 2>, <adj 3>

WE SOUND LIKE
- <ref brand 1> — for <reason>
- <ref brand 2> — for <reason>

WE DO NOT SOUND LIKE
- <anti-ref 1> — because <reason>
- <anti-ref 2> — because <reason>

TONE AXES (X marks current setting)
serious        |---X-----------|  playful
formal         |--------X------|  casual
respectful     |---X-----------|  irreverent
matter-of-fact |-----X---------|  enthusiastic
expert         |---X-----------|  peer

SIGNATURE PHRASES
- "<phrase>"
- "<phrase>"
- "<phrase>"
- "<phrase>"
- "<phrase>"

BANNED WORDS
| Word/phrase | Why we don't use it |
|---|---|
| game-changing | empty hype |
| revolutionary | overclaim |
| <…> | <…> |

DO / DON'T MATRIX
| Context | DO write | DON'T write |
|---|---|---|
| Hero headline | <…> | <…> |
| Subject line | <…> | <…> |
| Empty cart | <…> | <…> |
| Out of stock | <…> | <…> |
| Apology | <…> | <…> |
| Add-to-cart CTA | <…> | <…> |
| Subscription pitch | <…> | <…> |
| Review request | <…> | <…> |
| Welcome email open | <…> | <…> |
| Win-back open | <…> | <…> |

CHANNEL TONE SHIFTS
| Surface | Volume | Length | Notes |
|---|---|---|---|
| PDP body | medium | short | proof > poetry |
| IG caption | high | medium | hook in line 1 |
| Email subject | medium | ≤45 chars | curiosity OK, clickbait no |
| Push | high | ≤10 words | one verb, one noun |
| CS reply | low | as long as needed | sound human, never templated |
| Ad primary text | high | <125 chars | hook in 3 words |

VOICE STRESS TEST (5 micro-pieces)
PDP hero:        <…>
Email subject:   <…>
IG caption:      <…>
Push:            <…>
CS reply (refund): <…>

PASTE-READY BRAND BRAIN UPDATE
(Copy this into BRAND_BRAIN.md → section 3)
<…>
```

## Output checklist
- [ ] Voice expressed in 1 sentence + 3 adjectives
- [ ] At least 2 reference + 2 anti-reference brands with rationale
- [ ] All 5 tone axes marked
- [ ] ≥5 signature phrases (not generic ones)
- [ ] Banned word list includes a *reason* per word, not just the word
- [ ] Do/don't matrix has 10 paired rows covering different surfaces
- [ ] Channel tone shifts cover at least 5 surfaces
- [ ] Stress test pieces actually sound different from each other while keeping the same voice
- [ ] Final block is paste-ready for `BRAND_BRAIN.md` section 3

## Anti-patterns
- Generic adjective stacks ("authentic, bold, innovative" — say something specific)
- Listing tones without showing them in copy (a voice doc with no examples is useless)
- Forbidding all category jargon (some signals expertise — be selective)
- Banning emojis globally (specify per channel; they may belong on IG, not PDP)
- Over-formalizing a peer-to-peer brand (or vice versa) — let founder voice show through
