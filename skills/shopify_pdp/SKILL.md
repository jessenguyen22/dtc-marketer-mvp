---
name: shopify_pdp
description: Audit and rewrite a Shopify Product Detail Page (PDP) for conversion. Use when the user shares a PDP URL, asks "how do I improve this product page", needs above-the-fold rewrite, wants to add social proof / objection handling / bundles, or has a low add-to-cart rate.
license: MIT
pack: dtc-marketer-mvp
version: 1.0.0
priority_score: 10
dtc_use_case: "Founder pastes a Shopify PDP URL with 0.8% add-to-cart. Skill returns a prioritized fix list (above-fold rewrite, 3 social-proof modules, 2 objection answers, sticky ATC mobile) with copy ready to paste into the theme."
brand_brain_fields: [voice, positioning, audience.objections, product, offers, kpis.site_cr, tech_stack.storefront]
---

# Shopify PDP Optimizer

Audit a live PDP and ship a prioritized rewrite focused on add-to-cart rate, AOV, and post-click revenue.

## When to invoke
- User shares a Shopify (or any DTC) product URL and asks for feedback
- "Why isn't this PDP converting?"
- "Help me write a better hero section / above-the-fold"
- "Add social proof / FAQ / bundles to this page"
- Low add-to-cart rate (<2%) or low PDP-to-checkout conversion

## Brand Brain context required
Pull from `BRAND_BRAIN.md`:
- `{{brand.voice}}` — for headline + body rewrites
- `{{brand.positioning}}` — point of difference + RTB to weave into hero
- `{{brand.audience.objections}}` — to surface and answer on-page
- `{{brand.product}}` — feature → benefit → outcome table, comparison table
- `{{brand.offers}}` — free-ship threshold, subscription incentive
- `{{brand.tech_stack.storefront}}` — theme + page builder constraints

## Inputs from user
1. Live PDP URL (or HTML/screenshot)
2. Current add-to-cart rate + PDP→checkout rate (from GA4 or Shopify Analytics)
3. Top 3 objections heard in CS / reviews (if not already in Brand Brain)
4. Mobile vs desktop traffic split

## Process
1. **Audit using the 12-block PDP scorecard** (see template). Each block scored 0/1/2.
2. **Diagnose the two biggest leaks** (typically: weak above-fold value prop + missing objection handling).
3. **Rewrite hero block** — headline (≤8 words), sub (≤15 words), 3 benefit bullets, primary CTA.
4. **Insert social proof modules** — review snippet count, photo reviews, press logos, UGC carousel placement.
5. **Add objection-handler section** — Q&A or comparison table answering top 3 objections.
6. **Bundle / subscription module** — math shown ("save $X / month"), default selection rule.
7. **Mobile-first checks** — sticky ATC, image-first scroll, tap target sizes, font sizes ≥16px.
8. **Output prioritized backlog** — Impact × Effort matrix, top 5 ship-this-week items.

## Output template

```
PDP AUDIT: <product>
URL: <…>     CURRENT ATC: <%>     TARGET: <%>

12-BLOCK SCORECARD (0/1/2)
1. Above-fold value prop ............ <score>
2. Hero image set (≥5, lifestyle+spec) <score>
3. Reviews surfacing (≥50, ≥4.5★) ... <score>
4. Press / cert badges .............. <score>
5. Feature→benefit→outcome ribbon ... <score>
6. Comparison vs alternative ........ <score>
7. Objection handler (FAQ or Q&A) ... <score>
8. Risk reversal (returns / guarantee) <score>
9. Bundle / subscription upsell ..... <score>
10. Sticky mobile ATC ............... <score>
11. Page speed (LCP <2.5s) .......... <score>
12. Schema (Product, Offer, Review) . <score>
TOTAL: <__>/24

TOP 5 LEAKS (ranked by impact × effort)
1. <fix> — impact <H/M/L> | effort <H/M/L>
2. ...

REWRITE: ABOVE-THE-FOLD
Headline:   <…>
Sub:        <…>
Bullets:    • <benefit + outcome>
            • <benefit + outcome>
            • <benefit + outcome>
Primary CTA: <verb + value>
Secondary:   <subscription option>

SOCIAL PROOF INSERTS
- After hero: <module> — <copy>
- Mid-page:   <module> — <copy>

OBJECTION ANSWERS (Q&A block)
Q: <objection 1>
A: <answer using {{brand.product}} proof>

BUNDLE MATH
Single: $<>   |   2-pack: $<> (save $<>)   |   Subscription: $<> (save $<>/mo)
Default selection: <which>

WEEK-1 SHIP LIST
- [ ] ...
```

## Output checklist
- [ ] Scorecard fully filled with rationale, not just numbers
- [ ] Top 5 fixes ranked with explicit impact × effort
- [ ] Above-fold rewrite uses brand voice and positioning RTB
- [ ] Each top objection from `{{brand.audience.objections}}` is answered on-page
- [ ] Bundle math correct and matches `{{brand.offers}}` rules
- [ ] Mobile-specific fixes called out separately
- [ ] No claim used that isn't in `{{brand.compliance.allowed_claims}}`

## Anti-patterns
- Long paragraph descriptions (DTC PDPs scan, not read)
- Lifestyle-only image set with no specs / texture / scale shots
- Reviews hidden below fold without count + average shown above fold
- Discount offered before establishing value (race-to-the-bottom)
- One generic CTA ("Shop now") instead of value-anchored CTA ("Get my starter set — $39")
