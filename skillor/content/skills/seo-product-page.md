---
name: seo_product_page
description: Optimize a product or collection page for organic search — keyword targeting, on-page structure, schema markup, internal linking, and content depth. Use when ranking flat or low for branded/non-branded queries, launching a new SKU, or scaling category pages programmatically.
license: Skillor Commercial License v1.0
pack: dtc-marketer-mvp
version: 1.0.0
priority_score: 7
dtc_use_case: "New SKU launching next week. Skill outputs target keyword cluster, optimized title/H1/meta, FAQ schema block (10 Q&A), internal-link recommendations from 3 existing posts, and Product + Offer + Review schema ready to paste into theme."
brand_brain_fields: [voice, positioning, product, audience]
---

# SEO Product Page

Make a PDP or collection page rank without breaking conversion.

## When to invoke
- "Optimize this product page for SEO"
- "We're launching a new SKU — set up SEO from day 1"
- "Why isn't this collection page ranking?"
- Programmatic scaling of category pages

## Brand Brain context required
- `{{brand.voice}}` — for body copy + FAQ tone
- `{{brand.positioning}}` — point of difference becomes a unique-content angle
- `{{brand.product}}` — feature → benefit → outcome to deepen content
- `{{brand.audience}}` — long-tail query intent comes from real objections

## Inputs from user
1. URL (or proposed slug for new SKU)
2. Target query cluster (or let skill propose)
3. Top 3 ranking competitors for that query
4. Theme + page builder (constraints on schema injection)
5. Internal site assets (blog posts, guides, comparison pages) for linking

## Process
1. **Cluster keywords.** Primary head term, 2-3 modifiers, 5-10 long-tail (objection-led).
2. **Map intent.** Transactional vs informational. Don't try to rank a PDP for an info query — propose a content piece + link instead.
3. **On-page slots:** title (≤60 chars), meta (≤155 chars), H1, H2 cadence, alt text, URL slug.
4. **Content depth.** Add 200-400 words of unique copy beyond product spec — answer top 3 objections + 1 differentiator paragraph.
5. **FAQ schema block** — 6-10 Q&As pulled from `{{brand.audience.objections}}`.
6. **Schema markup** — Product + Offer + AggregateRating + FAQPage.
7. **Internal linking** — 3 inbound from related posts/collections, 2 outbound to deeper guides.
8. **Output ship-list** with paste-ready JSON-LD + copy blocks.

## Output template

```
SEO PAGE BRIEF — <url or slug>
Page type: PDP / Collection
Target intent: <transactional / informational / mixed>

KEYWORD CLUSTER
Primary: <head term, monthly volume, KD>
Modifiers: <…>
Long-tail (objection-led): <…>

ON-PAGE SLOTS
Title (60c):  <…>
Meta (155c):  <…>
H1:           <…>
URL slug:     <…>
H2 cadence:
  - <…>
  - <…>
  - <…>
Alt text rules: <…>

UNIQUE CONTENT BLOCK (200-400 words)
<paste-ready paragraph using brand voice>

FAQ SCHEMA (6-10 Q&As — paste-ready JSON-LD)
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "<q>", "acceptedAnswer": { "@type": "Answer", "text": "<a>" } }
  ]
}

PRODUCT SCHEMA (paste-ready)
<JSON-LD with brand, sku, price, availability, aggregateRating>

INTERNAL LINKING PLAN
Inbound:
  - From <post URL>: anchor "<…>"
  - From <post URL>: anchor "<…>"
Outbound:
  - To <guide URL>: anchor "<…>"

COMPETITIVE GAP
- <competitor> ranks because: <reason>
- We win on: <angle that's both true and rankable>

WEEK-1 SHIP LIST
- [ ] update title + meta
- [ ] inject FAQ schema
- [ ] add unique content block
- [ ] internal links live
```

## Output checklist
- [ ] Intent classified before slots written
- [ ] Title ≤60 chars, meta ≤155 chars, H1 distinct from title
- [ ] FAQ schema has 6+ Qs grounded in real objections
- [ ] Product schema includes brand, sku, price, availability, aggregateRating
- [ ] Internal links specify both source URL and anchor text
- [ ] No keyword stuffing — primary keyword max 4 mentions on page
- [ ] No claim used outside `{{brand.compliance.allowed_claims}}`

## Anti-patterns
- Trying to rank a PDP for an informational query — split into post + PDP
- Keyword-stuffed H2s ("Buy Best Cheap [Product] Online")
- FAQ schema invented (Q&As not actually on the page) — Google penalizes
- Internal links from low-relevance pages (waste link equity)
- Ignoring the conversion side — SEO copy that kills CR is a loss
