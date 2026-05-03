---
name: ab_test_planner
description: Plan a single A/B (or multivariate) test rigorously — hypothesis, single variable, MDE + sample-size math, run-time estimate, decision rule, and post-test debrief template. Use when proposing any test on PDP, LP, ad creative, email, or pricing.
license: Skillor Commercial License v1.0
pack: dtc-marketer-mvp
version: 1.0.0
priority_score: 8
dtc_use_case: "Founder wants to test 'free shipping above $50' vs 'free shipping always'. Skill writes hypothesis, isolates variable, calculates that current traffic needs 4 weeks for 80% power at MDE 8%, sets kill rule, and writes the post-test debrief template."
brand_brain_fields: [kpis, offers]
---

# A/B Test Planner

Make every test answerable, sized, and worth running.

## When to invoke
- "Should we test X vs Y?"
- "Plan an A/B test for our PDP / LP / ad / email"
- "How long should this test run?"
- "Why was our last test inconclusive?"
- Any time someone says "let's just try it and see"

## Brand Brain context required
- `{{brand.kpis}}` — primary metric + current baseline
- `{{brand.offers}}` — to ensure test variants don't violate offer rules

## Inputs from user
1. What you want to test (in plain English)
2. Where (PDP, LP, ad, email, checkout, push, pricing)
3. Current traffic volume on that surface
4. Current conversion rate on the metric you care about
5. Minimum detectable effect (MDE) — smallest lift that would change a decision (default 10%)
6. Confidence target (default 95%) and power (default 80%)

## Process
1. **Force a hypothesis.** Format: "If we change `<variable>` to `<treatment>`, then `<metric>` will improve by ≥`<MDE>` because `<reason>`."
2. **Isolate one variable.** If the test changes 2+ things, it's not an A/B test — it's a launch. Split or run as multivariate.
3. **Run sample-size math** at the chosen MDE / α / power. State sample size per arm.
4. **Estimate run-time** at current traffic. If >6 weeks, propose a bigger MDE or different surface.
5. **Define decision rule** — what we do at significance, at non-significance with directional lift, at clear loss.
6. **Set guardrails** — secondary metrics that, if broken, kill the test (e.g. CR up but AOV down by 15% → loss).
7. **Write debrief template** the team must fill on day-of-decision.

## Output template

```
A/B TEST PLAN — <name>

HYPOTHESIS
If we change <variable> from <control> to <treatment>,
then <primary metric> will improve by ≥<MDE>%
because <reasoning grounded in {{brand.audience}} or precedent>.

SETUP
Surface:           <PDP / LP / ad / email / checkout>
Variable changed:  <ONE thing — name it>
Control (A):       <…>
Treatment (B):     <…>
Allocation:        <50/50 default; specify if different>
Audience filter:   <new vs returning, geo, device — if relevant>

POWER MATH
Baseline metric:        <%>
MDE (smallest meaningful lift): <%>
α (significance):       <0.05>
Power:                  <0.80>
Sample size per arm:    <n visitors / impressions / sends>
Run-time estimate:      <days at current traffic>

PRIMARY METRIC
<one metric>

SECONDARY (informational only)
- <…>
- <…>

GUARDRAIL METRICS (kill triggers)
- <metric> drops > X% → end test as loss even if primary lifts
- <metric> drops > Y% → end test

DECISION RULES
- If significant lift ≥ MDE on primary, no guardrail breach → ship
- If significant loss → revert, document
- If null result with run-time complete → revert, document
- If directional lift but underpowered → extend ONLY if traffic permits within budget

INSTRUMENTATION CHECKLIST (before launch)
- [ ] Tracking event for primary metric tested + verified
- [ ] Variant rendering verified on mobile + desktop
- [ ] No interaction with other concurrent tests on same surface
- [ ] QA passed in incognito + with real ad click

POST-TEST DEBRIEF (fill on decision day)
- Result: significant lift / significant loss / null / inconclusive
- Lift % + CI:
- Guardrails: held / breached
- Decision: ship / revert / re-test
- What we learned: <1-2 sentences>
- Next test it suggests: <…>
```

## Output checklist
- [ ] Hypothesis in if/then/because format with measurable target
- [ ] Exactly ONE variable changed
- [ ] Sample-size math shown with α, power, MDE, baseline
- [ ] Run-time estimate at current traffic
- [ ] Primary metric is one thing
- [ ] At least 1 guardrail metric defined with kill threshold
- [ ] Decision rules cover all 4 outcomes (lift, loss, null, directional)
- [ ] Instrumentation checklist included for pre-launch QA

## Anti-patterns
- Multi-variable "A/B test" — that's a launch, not a test
- "Run until significant" — guarantees false positives
- No MDE specified — test will read inconclusive forever
- Picking primary metric after results come in (HARK-ing)
- Ignoring guardrails (CR up + LTV down is a loss, not a win)
