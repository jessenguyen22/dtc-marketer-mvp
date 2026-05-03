---
name: influencer_creator_brief
description: Generate a partnership-grade brief for paid macro/micro influencers (10K–1M followers) — deliverables matrix, do/don't talking points, brand-safe content rules, FTC disclosure, exclusivity + usage rights, KPI + reporting cadence, and contract clauses. Use when the brand is sponsoring a creator (gifted, flat-fee, affiliate, or equity), not hiring UGC freelancers.
license: Skillor Commercial License v1.0
pack: dtc-marketer-mvp
version: 1.0.0
priority_score: 8
dtc_use_case: "Brand pays a 240K-follower wellness creator $8,500 + 15% affiliate for 1 Reel + 3 Stories + 1 podcast mention. Skill outputs a brief with deliverables matrix, on-camera talking points (do/don't), exclusivity (90 days vs direct competitors), 12-month paid usage rights, FTC #ad disclosure rules, and a KPI sheet (CPM, EMV, attributed revenue, promo-code redemptions) — so legal + creator + brand sign one doc, not three."
brand_brain_fields: [voice, audience, offers, positioning, compliance.banned_claims]
---

# Influencer / Creator Partnership Brief

Paid creators are media buys with a face. Brief them like a media plan, not a vibe board.

## When to invoke
- "Write a brief for our influencer partnership"
- "We're paying <creator> $X — what do we send them?"
- "Need an affiliate creator brief"
- "Set up exclusivity + usage rights for a sponsored Reel"
- "FTC disclosure rules for a paid creator"
- Distinct from UGC freelancers (those don't have a following — see `ugc_creator_brief`)

## Brand Brain context required
- `{{brand.voice}}` — talking points must sound like the brand without scripting the creator into a corporate ad
- `{{brand.audience}}` — to confirm creator's audience overlaps the ICP
- `{{brand.offers}}` — affiliate code, promo, gift bundle, equity terms
- `{{brand.positioning}}` — point of difference the creator must communicate (or the partnership is just reach)
- `{{brand.compliance.banned_claims}}` — creator improvises live; banned list must be explicit + signed

## Inputs from user
1. Creator handle(s) + follower count + primary platform
2. Partnership tier — pick one: **gifted** (product only), **flat-fee paid**, **flat-fee + affiliate**, **affiliate-only / commission**, **equity / long-term ambassador**
3. Creator vertical (beauty / fitness / dad-content / finance / outdoor / parenting / food / etc.)
4. Deliverable mix — Story frames, Feed post, Reel, TikTok, YouTube integration, Shorts, podcast read, livestream, blog, newsletter
5. Total budget (cash + product value)
6. Exclusivity ask — category exclusivity window (e.g. 60/90/180 days vs direct competitors)
7. Usage rights ask — organic only / paid social boost / whitelisting (Spark Ads / Meta Branded Content) / all-channels / term in months
8. FTC / region — US, UK ASA, EU, AU — affects disclosure language
9. KPI priority — awareness (CPM, EMV) vs performance (code redemptions, attributed revenue, CAC)

## Process
1. **Confirm fit before briefing.** If audience overlap with `{{brand.audience}}` is <40% (creator vertical or geo mismatch), flag it and recommend a different creator tier — don't brief them. Cite the gap.
2. **Pick the partnership tier and the cash/value split.** Match expected deliverables to fee — rule of thumb: ~$10/CPM on engaged followers for a Reel (US), ~$5/CPM for Stories. Affiliate-only without flat fee = expect <50% of asks to go live.
3. **Build the deliverables matrix.** Format, count, length, posting window, draft-review window, repost rights, archival window (Stories 24h vs highlight pinning).
4. **Write talking points (do/don't).** 5-7 DO bullets — brand point of difference, 2-3 product features that demo on camera, the offer/code, the human reason to recommend. 5-7 DON'T bullets — banned claims, competitor mentions, off-tone language, raw before/after, medical claims.
5. **Set brand-safe content rules.** No alcohol/firearms in shot if banned by retail partners; no political content adjacency; no AI-generated voice cloning the creator without consent; no minors on camera if not the creator's child.
6. **Spell out FTC / disclosure.** US: `#ad` or `Paid partnership` tag at start of caption + Meta Branded Content tool toggle on. UK: `#ad` not `#sp`/`#sponsored`/`#gifted` (ASA explicit). Stories: visible `#ad` in first frame, not buried at the end.
7. **Define exclusivity.** Name the competitor list (≥3-5 specific brands), the window, the geo. "No competitors" with no list is unenforceable.
8. **Define usage rights.** Plain English: where we can run it, how long, whether we can edit, whitelisting handle if applicable. Default: organic creator post only. Paid boost = +25-50% fee. Whitelisting = +50-100%. Perpetual = 2x.
9. **Set KPIs + reporting cadence.** Awareness deal → CPM, reach, engagement rate, EMV, save rate. Performance deal → unique code redemptions, attributed revenue (UTM + code + post-purchase survey), CAC, AOV from creator-acquired customers. Reporting: 7-day post-launch + 30-day final. Creator shares insights screenshots within 48h of post.
10. **Output contract clauses checklist** — for legal to operationalize. Don't draft the contract itself.

## Output template

```
INFLUENCER PARTNERSHIP BRIEF — <creator handle> × <brand>

PARTNERSHIP SNAPSHOT
Tier: <gifted | flat-fee | flat-fee + affiliate | affiliate-only | equity / ambassador>
Cash fee: $<>     Product value: $<>     Affiliate %: <>%
Total deliverables: <n posts across n platforms>
Exclusivity: <n days, vs [list competitors]>
Usage rights: <organic / paid / whitelisting / all-channels — term in months>
Posting window: <start date – end date>
Region: <US / UK / EU / AU / global>

WHY THIS CREATOR
- Audience overlap: <% match to {{brand.audience}}> — based on <signals>
- Avg engagement rate: <%> (vs vertical median <%>)
- Past brand work to reference: <…>
- Past brand work to AVOID overlap with: <…>

DELIVERABLES MATRIX
| # | Format | Platform | Length | Posting window | Draft review | Repost rights |
|---|---|---|---|---|---|---|
| 1 | Reel | IG | 30-60s | <date range> | 48h | yes / no |
| 2 | Story frames (3) | IG | <…> | <…> | <…> | <…> |
| 3 | Podcast read | <pod> | 60s | <…> | n/a | n/a |
| 4 | <…> | <…> | <…> | <…> | <…> | <…> |

TALKING POINTS — DO
- Lead with <point of difference from {{brand.positioning}}>
- Demo <feature 1> + <feature 2> on camera
- Use the offer code <CODE> for <discount> — say it out loud
- Mention <one human reason you actually use this>
- Sound like yourself — we hired you for your voice, not ours
- Tag @<brand handle> in caption + on-screen
- Disclose at the start: <"Paid partnership" / "#ad">

TALKING POINTS — DON'T
- ❌ Don't claim <banned claim from {{brand.compliance.banned_claims}}>
- ❌ Don't compare to <competitor> by name
- ❌ Don't show <other-category product> in same frame
- ❌ Don't post raw before/after without approval
- ❌ Don't bury #ad at the end of the caption
- ❌ Don't use AI voice clone, ChatGPT-generated script as-is, or deepfaked footage
- ❌ Don't repost to other platforms without paid-rights upgrade

BRAND-SAFE CONTENT RULES
- Allowed adjacencies: <…>
- Disallowed adjacencies: <alcohol, firearms, political content, gambling, MLM-adjacent, etc.>
- Minors on camera: <allowed if creator's own child + parental release / not allowed>
- Setting/location restrictions: <…>

FTC / DISCLOSURE RULES (region: <…>)
- Caption: starts with `#ad` or `Paid partnership with @<brand>`
- Meta Branded Content tool: ON (creator toggles, brand approves)
- Stories: `#ad` visible in first frame, on-screen not just sticker
- Reel/TikTok: verbal disclosure within first 5s if no on-screen tag
- Affiliate links: must include disclosure even if no flat fee
- Region-specific: <ASA "ad" not "sp" — UK / "Werbung" — DE / etc.>

OFFER / CODE
- Affiliate code: <CODE>
- Discount: <%> off / $<> off
- Customer-side validity: <window>
- Affiliate commission: <%> on attributed revenue
- Attribution window: <30 / 60 / 90 days, last-click via <network>>

KPI + REPORTING
Primary KPI: <choose one — CPM | code redemptions | attributed revenue | CAC>
Secondary KPIs: <reach, ER, EMV, save rate, follow-through-rate>
Targets:
- CPM: ≤ $<>
- Engagement rate: ≥ <%>
- Code redemptions: ≥ <n>
- Attributed revenue: ≥ $<>
Reporting cadence:
- T+48h: creator sends Stories/Reels insights screenshot
- T+7d: 7-day performance dashboard
- T+30d: final report (incl. attributed revenue + AOV from creator code)

CONTRACT CLAUSES CHECKLIST (for legal — not the contract itself)
- [ ] Scope of deliverables matches matrix above
- [ ] Exclusivity window + named competitor list
- [ ] Usage rights: channels + term + edit rights + whitelisting handle
- [ ] FTC disclosure language clause (creator warrants compliance)
- [ ] Banned claims clause (creator warrants no medical / banned claims)
- [ ] Approval / draft review window + revisions included (default: 1 round)
- [ ] Kill fee if creator pulls post-approval
- [ ] Make-good clause if KPI <50% of target (re-post / additional Story)
- [ ] Payment terms (Net 30 / 50 on signing + 50 on post / fully on completion)
- [ ] IP: who owns raw footage, who owns finished post
- [ ] Morality clause (mutual)
- [ ] Confidentiality: brief itself + fee
- [ ] Governing law / region
```

## Output checklist
- [ ] Audience overlap stated with a number, not vibes
- [ ] Partnership tier + fee + affiliate % spelled out
- [ ] Deliverables matrix with format / length / posting window / repost rights
- [ ] DO list ≥5 bullets, DON'T list ≥5 bullets
- [ ] FTC disclosure rules for the actual region — not generic
- [ ] Exclusivity window has a *named* competitor list (or stated as "no exclusivity")
- [ ] Usage rights stated as channels + term + edit rights — not "for marketing"
- [ ] KPI targets are *numbers*, not adjectives
- [ ] Reporting cadence explicit (T+48h, T+7d, T+30d)
- [ ] Contract clauses checklist included for legal handoff

## Anti-patterns
- Briefing without checking audience overlap — paying for reach that doesn't match the ICP
- Scripting the creator line-by-line — defeats the entire point of paying for a creator's voice
- "No competitors" exclusivity without naming them — unenforceable, ends in dispute
- "We'll use it in marketing" usage rights — vague language voids paid usage when legal reviews
- Disclosure tucked at the end of caption or with `#sp` — FTC + ASA explicitly call this out
- Performance KPI deals with no attribution mechanism (no code, no UTM) — creator gets blamed for "not converting" when attribution was never set up
- Using a UGC-style flat $200/video brief for a 240K creator — they'll ghost you
- Same brief copy-pasted to 10 creators — kills the partnership signal, both sides notice
- Skipping the make-good clause — if a Reel does 10% of expected reach, you have no recourse
- Treating gifted as free — gifted still needs FTC disclosure, exclusivity, and usage rights

## Edge cases
- **Equity / long-term ambassador deals**: do not put deliverables on a per-post matrix; switch to monthly/quarterly content quotas + vesting schedule. Brief becomes an MOU + brand bible, not a one-off.
- **Affiliate-only with no flat fee**: expect 30-50% of asks to never go live. Don't include exclusivity (creator has no incentive to honor it). Provide ready-made hooks/talking points to lower their effort.
- **Podcast hosts**: brief is talking points + segue + offer code, NOT a script. Host-read ads die when read verbatim. Send a 5-bullet "what to know" doc and a 30-second sample read.
- **Whitelisted Spark Ads / Meta Branded Content**: creator must add the brand as a paid partner *before* posting (cannot retroactively whitelist a Reel). Add a checklist step in the posting window.
- **Cross-platform reposts**: a creator who posts a Reel + crossposts to TikTok = 2 deliverables for usage-rights purposes, even if the asset is identical. Price accordingly.
- **Pre-launch / NDA windows**: if briefing before public launch, add a "do not post until <date> 9am ET" clause + an NDA carve-out for the creator's manager.
- **Region with stricter disclosure (UK ASA, France Loi Influence, Germany)**: use the local legal language verbatim (`#Werbung`, `#publicité`) — `#ad` alone may fail compliance.
- **Children / family content creators**: explicit parental release, no product placement that conflicts with platform child-safety policies (e.g. YouTube COPPA), and avoid claims about child outcomes.
- **Underperformance**: if 7-day KPIs are <50% of target, trigger the make-good clause — additional Story or one repost — instead of clawback. Clawbacks burn the relationship and rarely close.
