---
name: ugc_creator_brief
description: Generate a complete UGC creator brief — hook concepts, scene-by-scene shot list, copy direction, voiceover script, do/don't list, deliverables spec, and usage rights. Use when the brand is hiring UGC creators (TikTok, Reels, Shorts), needs a refresh of creative angles, or wants to produce volume without an in-house studio.
license: Skillor Commercial License v1.0
pack: dtc-marketer-mvp
version: 1.0.0
priority_score: 9
dtc_use_case: "Brand hires 5 UGC creators for $200/video. Skill outputs a brief pack with 3 distinct concepts (problem-solve / unboxing / day-in-life), each with hook variants, 3-shot script, music direction, on-screen text, and a do/don't list — so creators ship paid-ad-ready footage on first take."
brand_brain_fields: [voice, positioning, audience, product, compliance.banned_claims]
---

# UGC Creator Brief

Hand a creator something they can shoot in 30 minutes that's actually usable in paid.

## When to invoke
- "Write a UGC brief for our hero product"
- "Hiring TikTok / Reels creators — need a brief"
- "Need fresh creative angles for paid social"
- "Create a brief pack for our agency"
- Scaling creative volume without an in-house team

## Brand Brain context required
- `{{brand.voice}}` — for caption, on-screen text, voiceover tone
- `{{brand.positioning}}` — point of difference must show on screen
- `{{brand.audience}}` — JTBD, objections, identity (so creator stages it correctly)
- `{{brand.product}}` — features that demo well on camera
- `{{brand.compliance.banned_claims}}` — must list explicitly (creators improvise)

## Inputs from user
1. Product(s) creator will feature
2. Creator persona target (age, niche — beauty, fitness, dad, gen-Z, etc.)
3. Concepts wanted (default: 3 distinct angles)
4. Platform priority (TikTok / Reels / Shorts / all)
5. Deliverable count + length (e.g. 3 hooks × 1 main video × 1 alt cut)
6. Usage rights expected (organic only, paid social, whitelisting, all-channels)
7. Budget per creator (informs how much we ask for)

## Process
1. **Pick 3 distinct angles** mapped to objections / JTBDs (e.g. problem-solve, comparison, identity, transformation, unboxing, founder-shoutout, day-in-life, hot-take). Never 3 variations of the same angle.
2. **For each angle:** write 3 hook variants, 3-shot script, on-screen text cues, voiceover or talking-head spec, music direction, prop list.
3. **Write a do/don't list** — universal across angles. Include compliance reminders.
4. **Spec deliverables** — formats, ratios, length, file naming, raw vs edited.
5. **Spell out usage rights** in plain English (creators sign this).
6. **Add success criteria** — what makes a video "usable" in paid (vertical, no copyrighted music, no unauthorized claims, hook in 1.5s).

## Output template

```
UGC CREATOR BRIEF — <product / campaign>

WHO YOU ARE (creator-facing intro)
You're shooting for <brand>, a <one-liner from {{brand.identity}}>.
Vibe: <{{brand.voice}} 3-adjective>.
Audience: <persona name + 1 line>.

WHAT WE'RE TRYING TO DO
We need 3 distinct video angles that show <product> solving <problem> for <persona>. These will run as paid ads, so the first 1.5 seconds matter more than anything else.

—— CONCEPT 1: <angle name> ——
Big idea: <one sentence>
Audience reaction we want: "<…>"

Hook variants (pick the one that feels most natural):
A) <≤8 words, spoken or on-screen at 0:00-0:01.5>
B) <…>
C) <…>

3-shot script:
Shot 1 (0-2s): <visual + action + line>
Shot 2 (2-7s): <visual + action + line>
Shot 3 (7-15s): <visual + action + line + CTA>

On-screen text cues: <…>
Voiceover or talking-head: <which + tone>
Music direction: <energy, BPM range, genre — NO copyrighted tracks>
Prop list: <…>

—— CONCEPT 2: <angle> —— (same structure)
—— CONCEPT 3: <angle> —— (same structure)

UNIVERSAL DO LIST
- Vertical 9:16, 1080p+
- Hook (visual or verbal) in first 1.5s
- Show product in first 3s
- Native captions on (no auto-burn unless specified)
- Show a real face when possible
- End with one clear CTA

UNIVERSAL DON'T LIST
- No copyrighted music (use TikTok commercial library or supplied tracks)
- No medical / before-after claims unless approved (see compliance section)
- No mention of competitors by name
- No lifestyle "vibe shots" without product
- No "link in bio" voice — we're using paid, not organic

COMPLIANCE — CLAIMS YOU CAN MAKE
✅ <claim from {{brand.compliance.allowed_claims}}>
✅ <…>

COMPLIANCE — CLAIMS YOU CANNOT MAKE
❌ <claim from {{brand.compliance.banned_claims}}>
❌ <…>

DELIVERABLES SPEC
- 3 main concepts (1 video each)
- 3 hook variants per concept (so 9 hooks total)
- 1 alt cut per main (different ending or opener)
- Format: <MP4, 1080×1920, ≤60s, ≤200MB>
- Raw footage included
- Naming: <brand>_<concept>_<variant>_v1.mp4

USAGE RIGHTS
- Granted use: <organic / paid social / paid + whitelisting / all-channels>
- Term: <12 months / perpetual>
- Geo: <…>
- Whitelisting handle: <if applicable>
- Exclusivity: <can creator post for competitor? Y/N + window>

PAYMENT + TIMELINE
- Rate: $<>/concept (or flat)
- Revisions: 1 round included
- Delivery: <date>
- Approval window: <72h>
```

## Output checklist
- [ ] 3 distinct angles (not 3 variations of one angle)
- [ ] Each angle has 3 hook variants + a 3-shot script + music + props
- [ ] Hook lands in ≤1.5s
- [ ] Compliance section explicit and split DO/DON'T
- [ ] Deliverables spec includes format, length, file naming, raw inclusion
- [ ] Usage rights stated in plain English (no legalese ambiguity)
- [ ] No claim used from `{{brand.compliance.banned_claims}}`
- [ ] On-brand voice — does the brief itself sound like the brand?

## Anti-patterns
- "Just be authentic" briefs — creators need direction, not vibes
- Over-scripting (line-by-line) — kills natural delivery; give beats, not lines
- Skipping the music direction (creators default to copyrighted, kills paid usability)
- Vague usage rights ("we'll use it for marketing") — be explicit, in writing
- Asking for 10 deliverables at $50 — pay for what you ask for, or ask for less
