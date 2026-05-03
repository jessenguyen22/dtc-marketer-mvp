---
name: seo_content_repurposing
description: Take one long-form asset (blog post, podcast, webinar, transcript, YouTube video) and atomize it into 8-12 derived units across email, social, and ads. Returns source-asset audit, derived-unit table with platform + hook + format, posting cadence over 30 days, and an internal-link map back to the source. Use when the user has a single hero asset and wants leverage, or when the content calendar is starving and there's a recent long-form piece to mine.
license: Skillor Commercial License v1.0
pack: dtc-marketer-mvp
version: 1.0.0
priority_score: 7
dtc_use_case: "Brand publishes a 2,400-word founder-story blog post per quarter. Skill audits the post, extracts 11 derived units (3 emails, 4 social posts across IG/X/LinkedIn, 2 short-form videos, 2 retargeting ad concepts), schedules them across 30 days, and maps every unit back to the source URL with anchor text — turning one writing day into a month of content."
brand_brain_fields: [voice, audience, offers, kpis]
---

# SEO Content Repurposing

One hero asset, twelve atomic units, thirty days of content. Make the writing day pay for itself.

## When to invoke
- "We just published a long blog — how do we repurpose it?"
- "Turn this podcast into social posts"
- "Atomize this webinar transcript"
- "Content calendar is empty, I have a YouTube video from last week"
- "Repurpose our founder-story post"
- "How do I get more juice out of this guide?"

## Brand Brain context required
- `{{brand.voice}}` — tone axes, signature phrases (must carry across atomized units)
- `{{brand.audience}}` — JTBD, objections, channel preference (informs platform mix)
- `{{brand.offers}}` — for any unit with a CTA back to a paid action
- `{{brand.kpis}}` — to weight unit selection (e.g. email-driven CVR vs IG reach)

## Inputs from user
1. Source asset: URL, file, or pasted text/transcript
2. Asset type: blog / podcast / webinar / YouTube / Twitter thread / case study / whitepaper
3. Asset length (rough word count or runtime)
4. Primary goal: SEO (drive backlinks/clicks to source) / list growth / brand / product launch
5. Output unit count target (default 10, range 8-12)
6. Channels active: Email, IG, TikTok, X, LinkedIn, Pinterest, YouTube Shorts, Meta Ads, retargeting
7. Posting cadence window (default 30 days)
8. Any "must include" beats (specific quote, stat, customer name)

## Process
1. **Audit the source asset.** Extract: thesis (1 sentence), 5-9 key claims, 3-5 quotable lines, 2-4 stats/numbers, 1-2 visual hooks (charts, screenshots, b-roll moments), 1 CTA the asset already drives toward.
2. **Score reusability.** Each extracted element gets a tag: `email-friendly`, `social-quote`, `data-card`, `video-hook`, `thread-spine`, `ad-angle`. Elements with no tag get cut, not forced.
3. **Map elements to platforms.** Use channel/format fit table below. One element can fan out to 2-3 platforms but each derived unit gets its own hook.
4. **Generate derived units.** Each unit = {platform, format, hook, body skeleton, source-link CTA, internal-link anchor text}. Minimum 8, maximum 12 — past 12, quality drops and posts cannibalize.
5. **Schedule across cadence.** Stagger by channel to avoid cross-platform repetition fatigue (don't post the same quote on IG and X same day). Front-load the highest-leverage unit (usually the email or thread) within first 7 days while source is fresh.
6. **Build internal-link map.** Every unit includes a click path back to source with specific anchor text. Source itself gets a "what's next" CTA that respects the goal (list signup, product page, related guide).
7. **Add a kill list.** 2-3 angles to NOT pursue and why (off-brand, weak data, cannibalizes a stronger unit).

## Channel × format fit

| Channel | Best derived format from long-form | Hook style |
|---|---|---|
| Email (broadcast) | Curated highlights + 1 new angle | Subject = curiosity gap or stat |
| IG feed | Quote card or carousel (5-10 slides) | Visual-first, slide 1 = hook |
| IG Reels / TikTok / Shorts | 15-30s talking-head distilling 1 claim | First 1.5s pattern interrupt |
| X / Twitter | Thread (5-9 posts) or single banger quote | Line 1 = bold claim |
| LinkedIn | 3-paragraph post or carousel | Hook = personal stake or contrarian |
| Pinterest | Stat card / step-by-step graphic | Title carries SEO keyword |
| Meta retargeting ad | Quote from post + "read full" CTA | Use highest-engagement social proof |
| YouTube community | Poll seeded by post claim | Frames the conversation |

## Output template

```
REPURPOSING PLAN — <source title> — <date>

SOURCE-ASSET AUDIT
- Source URL/path: <…>
- Asset type:      <…>
- Length:          <words/runtime>
- Thesis:          <1 sentence>
- Key claims (5-9):
  1. <…>
  2. <…>
  …
- Quotable lines (3-5):
  - "<…>"
  - "<…>"
- Stats / data:
  - <stat + source>
- Visual hooks:
  - <chart / screenshot / b-roll moment>
- Source CTA:      <what the asset drives toward>

DERIVED UNITS (target: <n>)
| # | Channel | Format | Hook (first line / first frame) | Source element used | CTA / anchor text |
|---|---|---|---|---|---|
| 1 | Email | Broadcast | "<subject>" | thesis + claim 2 | "Read the full post" |
| 2 | X | Thread (7) | "<line 1>" | claims 1, 3, 5 + quote A | "Full breakdown →" |
| 3 | IG | Carousel (8) | "<slide 1 line>" | stat + claim 4 | swipe to "link in bio" |
| … | … | … | … | … | … |

—— UNIT 1 — Email broadcast ——
Subject (A): <≤45 chars>
Subject (B): <≤45 chars>
Preview text: <≤90 chars>
Body skeleton:
  - Hook (1 line, picks up subject)
  - 2-3 highlight bullets pulling from source
  - 1 new angle not in source (gives email standalone value)
  - CTA → source URL with anchor "<text>"
Send window: <day in cadence>

—— UNIT 2 — X thread ——
Hook tweet:    <≤220 chars>
Spine (numbered claims): 1 → 2 → 3 → 4 → 5
Quote card:    <yes/no, which line>
CTA tweet:     "<full breakdown>" + source URL
Schedule:      <day in cadence>

…repeat per unit…

POSTING CADENCE (30 days)
| Day | Channel | Unit # | Notes |
|---|---|---|---|
| 1 | Email | 1 | Front-load while source is fresh |
| 2 | X | 2 | Drives email → site |
| 4 | IG | 3 | Visual fan-out |
| 7 | LinkedIn | 4 | … |
| 10 | TikTok | 5 | … |
| … | … | … | … |

INTERNAL-LINK MAP
- Source → <related guide URL> via "what's next" CTA at end of post
- Email → source via subject-aligned anchor
- X thread → source via final tweet
- IG carousel → source via "link in bio" rotator
- Each ad creative → source via UTM-tagged URL: ?utm_source=<channel>&utm_campaign=<source-slug>

KILL LIST
- <angle>: not pursued because <reason>
- <angle>: not pursued because <reason>
```

## Output checklist
- [ ] Source-asset audit completed before generating units (thesis, claims, quotes, stats, visuals)
- [ ] Unit count between 8 and 12 — not more, not less
- [ ] Every unit names which source element it pulls from (no orphan units)
- [ ] Hooks are channel-native (no copy-paste across platforms)
- [ ] Cadence schedule staggers channels (no same-quote double-post same day)
- [ ] Every unit has a source-link CTA with explicit anchor text
- [ ] Email unit adds at least one new angle not in source (avoids "click to read what I just said")
- [ ] Kill list explains what was cut and why
- [ ] UTM convention specified for paid units back to source

## Anti-patterns
- Posting the same quote card on IG, X, and LinkedIn the same week — that's spam, not leverage
- Generating 20 units to feel productive — past 12, signal/noise collapses
- Email that just says "read our new post" — no standalone value, low CTR
- Repurposing without an internal-link map — wastes the SEO compounding play
- Forcing every claim onto every channel — some claims are platform-specific (LinkedIn ≠ TikTok)
- No kill list — implies every angle is worth shipping, which is never true
- Ignoring the source CTA — derived units should reinforce, not compete with, the original conversion path
- Repurposing a 6-month-old post without a fresh angle — readers smell zombie content

## Edge cases
- **Source is a 60-min webinar:** Add a transcription step first (timestamp the 6-9 strongest claims with mm:ss); use timestamps as deep-links in derived units.
- **Source is gated (lead magnet PDF):** Derived units must tease, not give away the asset. Each unit ends with a gated-asset CTA, not the public source URL.
- **Brand has thin social presence on a listed channel:** Drop that channel from the unit mix rather than forcing presence — note it in kill list.
- **Source is evergreen and already fully repurposed once:** Treat as a refresh — only generate units with NEW angles (e.g. updated stats, this-year contextualization, comment/reply-driven angles); cap at 5-6 units, not 12.
- **Source is a podcast where guest says the best lines:** Confirm rights to clip; default to paraphrase + attribution if rights unclear.
