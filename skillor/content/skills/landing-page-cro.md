---
name: landing_page_cro
description: Audit a landing page and ship a prioritized CRO fix list. Use when the user shares a landing page (paid LP, lead-gen, pre-launch, listicle, advertorial), has poor conversion (<2%), wants pre-launch reviews, or needs A/B test ideas grounded in the page's actual weaknesses.
license: Skillor Commercial License v1.0
pack: dtc-marketer-mvp
version: 1.0.0
priority_score: 9
dtc_use_case: "Brand running paid traffic to a single LP at 1.4% CR. Skill audits 18 conversion levers, identifies the 3 with highest fix-impact, rewrites the offer block + form, and proposes 2 A/B tests with sample-size math."
brand_brain_fields: [voice, positioning, audience.objections, product, offers, kpis.site_cr]
---

# Landing Page CRO Audit

Diagnose conversion leaks on a specific landing page and ship a fix backlog with rewrites + A/B tests.

## When to invoke
- User shares an LP URL (paid LP, advertorial, lead gen, pre-launch waitlist)
- "Why is this LP not converting?"
- "Audit my landing page"
- "Give me A/B test ideas for this page"
- New LP about to go live and needs a pre-launch review

## Brand Brain context required
- `{{brand.voice}}` — for any rewrites
- `{{brand.positioning}}` — to ensure value prop ties to point of difference
- `{{brand.audience.objections}}` — top 5, each must be addressed on page
- `{{brand.product}}` — feature → benefit → outcome to use in copy
- `{{brand.offers}}` — to frame the value-anchored CTA
- `{{brand.kpis.site_cr}}` — to ground the "what counts as a win" math

## Inputs from user
1. LP URL (or HTML / screenshot)
2. Traffic source + intent (cold paid social, warm Google, email, organic)
3. Current CR + main goal (purchase / lead / waitlist / consult)
4. Mobile vs desktop split
5. Anything you've already tried (so we don't suggest losing tests)

## Process
1. **Run the 18-lever scorecard** (see template). Each lever 0/1/2.
2. **Identify the top 3 leaks** by impact × fix-effort.
3. **Diagnose intent-source mismatch.** Is the page's promise the same as what the ad/email promised? If not — fix that first.
4. **Rewrite the offer block** — value prop, CTA copy, risk reversal, social proof anchor.
5. **Add or fix above-the-fold** — clarity test (5-second test) → can a stranger answer "what is this and why should I care" in 5 seconds?
6. **Mobile pass** — sticky CTA, form length, tap targets, font ≥16px.
7. **Output 2 A/B tests** — with hypothesis, variable, sample-size requirement (using current traffic), and decision rule.

## Output template

```
LP CRO AUDIT — <page>
URL: <…>   Traffic: <source>   Current CR: <%>   Target: <%>

INTENT-SOURCE MATCH
Ad/email promise: "<…>"
LP delivers:      "<…>"
Match: ✅ / ⚠️ partial / ❌ broken
If broken — fix this BEFORE anything else.

18-LEVER SCORECARD (0/1/2)
Above-the-fold
1. Clarity (5s test pass) ........... <>
2. Single value prop ................ <>
3. Hero visual reinforces claim ..... <>
4. Primary CTA visible w/o scroll ... <>

Persuasion
5. Social proof above fold .......... <>
6. Risk reversal stated ............. <>
7. Specific benefit > feature ....... <>
8. Objection handler section ........ <>
9. Comparison or alternative framed . <>
10. Founder/origin or proof story ... <>

Conversion mechanics
11. CTA copy is value-anchored ...... <>
12. Form ≤ 4 fields (lead gen) ...... <>
13. Trust marks near form/checkout .. <>
14. Sticky mobile CTA ............... <>

Technical
15. LCP < 2.5s ...................... <>
16. CLS < 0.1 ....................... <>
17. Pixel + conversion tracking OK .. <>
18. Schema appropriate to type ...... <>
TOTAL: <__>/36

TOP 3 LEAKS (impact × effort)
1. <leak> — impact <H/M/L> | effort <H/M/L> | hypothesis: <…>
2. ...
3. ...

REWRITES
Hero headline:  <…>
Hero sub:       <…>
Primary CTA:    <…>
Risk reversal:  <…>
Form headline:  <…>

OBJECTION HANDLER (3 max)
Q: <objection>
A: <answer>

A/B TESTS PROPOSED
Test 1: <name>
  Hypothesis: <if X, then Y because Z>
  Variable: <single thing changing>
  Sample size needed: <visitors per arm at current CR + MDE 20%>
  Decision rule: <metric + threshold>
  Estimated test duration: <days at current traffic>

Test 2: <name>
  ...

WEEK-1 SHIP LIST
- [ ] ...
```

## Output checklist
- [ ] Intent-source match assessed first (most LPs fail here, not on the page itself)
- [ ] Scorecard complete with rationale per low score
- [ ] Top 3 leaks ranked with hypothesis (not just "fix the headline")
- [ ] Rewrites use brand voice and brand positioning RTB
- [ ] Each test has sample-size requirement based on current traffic + chosen MDE
- [ ] Mobile-specific issues called out separately
- [ ] All copy claims are within `{{brand.compliance.allowed_claims}}`

## Anti-patterns
- Suggesting 14 tests when current traffic only supports 2 valid ones in 30 days
- Treating LP and PDP as the same thing (LP usually has *one* job, PDP has many)
- Auditing without checking the source ad — the leak may be upstream
- Recommending a "trust badge" without specifying which badge and where
- Rewriting copy without first checking intent-source match
