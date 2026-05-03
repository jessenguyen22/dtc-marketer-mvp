---
name: video_creative_brief
description: Generate production-ready short-form video creative briefs for UGC creators or in-house producers (TikTok, Reels, YouTube Shorts). Returns N concepts × 3-shot scripts, hook variants, B-roll list, on-screen text, music direction, deliverables spec, and do/don't list. Use when the user needs to brief a creator, plan a video shoot, refresh fatigued video creative, or scale a winning hook into multiple variants.
license: Skillor Commercial License v1.0
pack: dtc-marketer-mvp
version: 1.0.0
priority_score: 9
dtc_use_case: "Brand has a winning Meta video at 2.1% CTR but it's fatiguing after $40k spend. Skill returns 6 fresh concepts × 3 hook variants each, with shot-by-shot scripts under 15s, deliverable specs (9:16, captions burned-in, ≤60MB), and a do/don't list tied to the brand's voice. Creator can shoot all 6 in one session."
brand_brain_fields: [voice, audience, product, offers, compliance.banned_claims]
---

# Video Creative Brief

Brief a UGC creator or producer to shoot short-form video that ships, not video that needs three rounds of revisions.

## When to invoke
- "Write a brief for our UGC creator"
- "Need 5 TikTok video concepts for product X"
- "Refresh our video ads — current ones are fatiguing"
- "Scale our winning hook into 5 variants"
- "Brief for an agency producing Reels"
- "What should the creator shoot next month?"

## Brand Brain context required
- `{{brand.voice}}` — tone axes, signature phrases, banned words
- `{{brand.audience}}` — JTBD, objections, identity markers (informs hook + on-camera persona)
- `{{brand.product}}` — feature → benefit → outcome, sensory cues to shoot
- `{{brand.offers}}` — current promo (drives CTA frame)
- `{{brand.compliance.banned_claims}}` — must not appear in script or on-screen text

## Inputs from user
1. Platform target(s): TikTok / Reels / YouTube Shorts / Meta feed (9:16) / mixed
2. Campaign objective: prospecting / retargeting / launch / brand
3. Hero product or collection
4. Number of distinct concepts (default 5)
5. Hook variants per concept (default 3)
6. Runtime target: 6s / 9s / 15s / 30s / 60s
7. Creator profile: founder / employee / paid UGC / agency / mixed
8. Budget tier (informs production value): phone-only / lit-phone / camera+lights / studio
9. Hard requirements (e.g. must show product unboxing, must include disclaimer)

## Process
1. **Pick concepts first, scripts second.** Each concept = one of: founder-POV, problem-solution, before/after, unboxing, listicle (3 reasons), comparison, day-in-the-life, social-proof / testimonial, demo, hot-take. Map each concept to a JTBD or objection from Brand Brain — no concept without an audience reason.
2. **Generate 3 hook variants per concept** following one of: pattern-interrupt (visual), curiosity gap (verbal), called-out audience ("if you're a runner who…"), bold claim with proof, contrarian, question. First 1.5s must contain the hook.
3. **Write 3-shot scripts** — Shot 1 = hook (≤2s), Shot 2 = proof / demo / payoff (60% of runtime), Shot 3 = CTA frame (≤2s). Specify camera angle, action, and exact spoken line per shot.
4. **List B-roll, props, and locations** — concrete and shootable in one session. No "lifestyle vibes" — name the prop.
5. **Specify on-screen text** — every concept must have captions burned in (85% of social video plays muted). Limit text to 6 words per frame.
6. **Music direction** — genre + BPM range + reference track + licensing note (CapCut commercial library / Epidemic / brand-owned). Never reference a track the creator can't legally use.
7. **Deliverables spec** — aspect ratios, codec, max file size, captions, raw vs edited, naming convention.
8. **Do / Don't list** — 5 do's and 5 don'ts pulled from `{{brand.voice}}` and `{{brand.compliance}}`.
9. **Compliance check** — cross-reference `{{brand.compliance.banned_claims}}` against every script line.

## Hook archetypes quick reference

| Archetype | Pattern | When it works |
|---|---|---|
| Pattern interrupt | Sudden visual / sound shift | Saturated feeds, low-intent traffic |
| Curiosity gap | "I tried X for 30 days and…" | Story-driven products |
| Called-out audience | "If you're a [niche], stop scrolling" | Niche ICP, retargeting |
| Bold claim + proof | "This [product] outsold [competitor] 3:1 — here's why" | Comparison-aware buyers |
| Contrarian | "Everyone says X. Wrong." | Educated audience, expert positioning |
| Question | "Why does my [problem] keep happening?" | Problem-aware top-of-funnel |

## Platform delivery spec

| Platform | Aspect | Max length (best perf) | Caption rule | Notes |
|---|---|---|---|---|
| TikTok | 9:16 | 15-30s | Burned-in + native captions | Hook in 1.5s; native music boost |
| Reels | 9:16 | 7-15s | Burned-in + native captions | Avoid TikTok watermark (downranked) |
| YouTube Shorts | 9:16 | 15-45s | Burned-in | Loops well; vertical safe zone matters |
| Meta feed (paid) | 9:16 or 4:5 | ≤15s | Burned-in (sound off default) | Brand/product visible by 3s |

## Output template

```
VIDEO CREATIVE BRIEF — <brand> — <campaign> — <date>

CONCEPT MATRIX
| # | Concept | JTBD/Objection | Hook archetype | Runtime |
|---|---|---|---|---|
| 1 | <e.g. founder-POV> | <ref> | curiosity gap | 15s |
| 2 | ... | ... | ... | ... |

—— CONCEPT 1 — <name> ——
JTBD addressed: <…>
Tone: <pulled from brand.voice>

HOOK VARIANTS
A. (visual) <description>  | (spoken) "<line — ≤8 words>"
B. (visual) <description>  | (spoken) "<line>"
C. (visual) <description>  | (spoken) "<line>"

3-SHOT SCRIPT (using Hook A)
Shot 1 — Hook (0:00-0:02)
  Frame:        <camera angle, subject, action>
  Spoken:       "<exact line>"
  On-screen:    "<≤6 words>"
Shot 2 — Proof (0:02-0:11)
  Frame:        <…>
  Spoken:       "<…>"
  On-screen:    "<…>"
  B-roll cuts:  <list>
Shot 3 — CTA (0:11-0:15)
  Frame:        <product hero or creator pointing>
  Spoken:       "<CTA — match brand.offers>"
  On-screen:    "<offer + CTA>"

PROPS / LOCATIONS / WARDROBE
- <list — shootable in one session>

MUSIC DIRECTION
- Genre / BPM:  <…>
- Reference:    <track name + source>
- Licensing:    <CapCut Commercial / Epidemic / brand-owned / native TikTok>

…repeat per concept…

DELIVERABLES SPEC
- Aspect ratios:  <9:16 primary; 1:1 + 4:5 cutdowns if requested>
- Codec / size:   H.264, ≤60MB, 30fps
- Captions:       Burned-in, sans-serif, high-contrast, bottom-third safe
- Raw footage:    Yes / No — if yes, deliver via <Frame.io / Drive>
- Naming:         <brand>_<concept#>_<hookletter>_<aspect>.mp4
- Due date:       <…>

DO / DON'T
DO:
- <pulled from brand voice — e.g. "Use the word 'kit', not 'bundle'">
- <…>
- <…>
- <…>
- <…>
DON'T:
- <e.g. "Don't say 'clinically proven' — banned claim">
- <…>
- <…>
- <…>
- <…>

COMPLIANCE CHECK
- Banned claims scanned: ✅
- Disclaimers required: <list, with placement instruction>
```

## Output checklist
- [ ] Number of concepts matches input; each maps to a distinct JTBD or objection
- [ ] Every concept has 3 structurally different hook variants (not reworded)
- [ ] Hook is in the first 1.5s of every script
- [ ] On-screen text on every shot (sound-off viewing assumed)
- [ ] Props / locations are concrete — no "lifestyle vibes"
- [ ] Music direction names a real, licensable track or library
- [ ] Deliverables spec includes aspect ratio, codec, max size, naming
- [ ] Do/Don't list pulls from `{{brand.voice}}` (not generic)
- [ ] Banned claims explicitly checked against every script line
- [ ] CTA frame matches a live offer in `{{brand.offers}}`

## Anti-patterns
- Briefs that read like mood boards — "vibrant, joyful, premium" tells the creator nothing
- Hooks that only differ by word order — they should be structurally different archetypes
- Asking for 60s videos for paid Meta feed (kills CPM efficiency past 15s)
- Specifying music the creator can't license (commercial track on brand-paid post = takedown)
- No on-screen text — assumes sound-on, which is wrong 85% of the time
- Including a CTA for an offer that isn't actually live
- One brief, six concepts, no JTBD mapping — concepts become arbitrary
- Asking for "studio quality" while paying UGC rates — mismatched production tier

## Edge cases
- **Founder is camera-shy:** Default to voice-over + B-roll; specify VO script and on-screen text carry the message.
- **Regulated category (supplements, beauty claims):** Add a mandatory disclaimer frame (≥2s, legible) and double-check `{{brand.compliance.banned_claims}}` line-by-line.
- **Creator delivers raw footage only:** Add an editing brief subsection with cut points, captions style, and music sync notes.
- **Repurposing one shoot across platforms:** Specify primary aspect (9:16) and which cutdowns are derivatives, not separate shoots.
- **Brand has no Brand Brain yet:** Ask for voice + audience + 3 banned words inline, do not invent voice from generic DTC tropes.
