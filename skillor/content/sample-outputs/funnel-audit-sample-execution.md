<!--
ILLUSTRATIVE SAMPLE OUTPUT — NOT REAL CLIENT DATA
This is a synthetic, plausible-shape execution of the `funnel_audit` skill against a fictional brand.
Numbers are realistic but invented. Use to evaluate the depth a buyer pays for, not as a benchmark source.
-->

# FUNNEL AUDIT — northwind supply co. — 28d window (oct 1 — oct 28)

> Ran by funnel_audit v1.0.0 against brand brain snapshot 2025-10-29.
> Comparable baseline: sep 3 — sep 30 (28d, pre fall sale).

## INPUT SNAPSHOT

| Field | Value |
|---|---|
| Brand | northwind supply co. (synthetic) |
| Category | premium pet supplements ($38 AOV) |
| Theme | dawn 14.0 (shopify) |
| Mobile share | 71% |
| Traffic mix | meta 48% / google 22% / email 18% / direct 12% |
| Recent change | new PDP hero video deployed oct 9 |
| Reporting tools | GA4 + shopify analytics + klaviyo |

## ABSOLUTE FUNNEL

| Stage | Volume | Step CR | Decent | Best | Δ vs decent |
|---|---|---|---|---|---|
| Sessions          | 142,800 | —      | —    | —    | — |
| Product views     | 99,960  | 70.0%  | 65%  | 85%  | **+5.0pp** |
| Add to cart       | 6,498   | 6.5%   | 6%   | 14%  | +0.5pp |
| Initiate checkout | 1,170   | **18.0%** | 30%  | 65%  | **−12.0pp** ← worst |
| Purchase          | 749     | 64.0%  | 50%  | 80%  | +14.0pp |
| Repeat (90d)      | 142     | 19.0%  | 20%  | 45%  | −1.0pp |

## WORST DROP-OFF

**Stage:** ATC → Initiate Checkout
**Current step CR:** 18.0%
**Decent benchmark:** 30%
**Best-in-class:** 65%

**Estimated lost revenue if fixed to decent (30%):** ~$23,400 / 28d (~$305k / yr)
Math: lifting ATC→IC from 18% → 30% adds ~780 ICs; at observed IC→Purchase 64% and AOV $38 = +$18,953. Compounded over the year and including downstream repeat-rate, the fix recovers ~$305k ARR. This is the single highest-ROI lever in this snapshot.

## SLICE: BY SOURCE

| Source | PV→ATC | ATC→IC | IC→Purchase |
|---|---|---|---|
| Meta (paid social) | 5.8% | **14.2%** | 61% |
| Google ads         | 7.4% | 22.0% | 67% |
| Email (klaviyo)    | 9.1% | 31.5% | 72% |
| Organic / direct   | 6.6% | 19.8% | 64% |

**Reading:** the leak is concentrated in **meta paid traffic** — ATC→IC there is 14.2% vs 31.5% for email. Email-warmed buyers convert 2.2× better than paid-cold once they hit the cart. This rules out a generic site-wide checkout problem; it's a **paid-cold trust + offer-mismatch** problem.

## SLICE: MOBILE VS DESKTOP

| Device | PV→ATC | ATC→IC | IC→Purchase |
|---|---|---|---|
| Mobile  | 6.1% | **15.4%** | 58% |
| Desktop | 7.3% | 24.8% | 76% |

**Reading:** mobile ATC→IC (15.4%) is markedly worse than desktop (24.8%), and mobile is 71% of traffic — so the mobile leak dominates the blended number. Two leaks compound: paid traffic skews mobile (meta is ~85% mobile), so the meta leak and the mobile leak are *not independent*. Fixing mobile cart-to-checkout disproportionately fixes the paid-cold leak.

## ROOT-CAUSE HYPOTHESES (ranked)

### 1. Mobile cart drawer hides shipping cost until step 2 of checkout — likelihood HIGH
**Evidence:**
- Mobile ATC→IC drops 9.4pp vs desktop; desktop user sees order summary panel statically.
- AOV $38 with $7.95 flat shipping → buyer crosses $45 mental threshold only after tapping checkout. Surprise-cost = abandonment.
- Heatmap (hotjar export oct 14-28): 41% of mobile cart drawer sessions scroll-tap on the shipping line specifically before bouncing.
- Meta-traffic effect: paid-cold buyers don't have shipping cost cached from prior visits.
**Fix theory:** show shipping cost (or "free shipping over $X") inline in the cart drawer, before the checkout CTA.

### 2. PDP hero video (deployed oct 9) regressed mobile ATC quality — likelihood MEDIUM
**Evidence:**
- ATC volume went *up* 8% post-deploy (video drives intent), but ATC→IC stepped *down* from 21.3% (sep) → 18.0% (oct).
- Volume of low-intent ATCs (sessions with ATC but <60s on PDP) rose from 18% → 27% post-deploy.
- This means the video is recruiting more clicks-to-add but the buyer hasn't actually read the value prop.
**Fix theory:** keep the video, but add a 3-bullet text value-prop block above the ATC button that loads even with video paused.

### 3. Discount-code field in checkout creates "wait, do I have a code?" exit — likelihood LOW-MEDIUM
**Evidence:**
- IC→Purchase is healthy at 64%, so this is not the dominant cause.
- However, GA4 shows 11% of mobile checkout-abandoners returned within 24h with a coupon-search query — they're leaving to look for codes.
- Industry pattern (baymard, 2024): the visible code field reduces conversion 4-7% for non-promo brands.
**Fix theory:** collapse the discount field behind a "have a code?" toggle. Lower-priority because it affects step 4, not step 3.

## FIX RANKING

### Ship this week
**Show shipping cost (or free-shipping threshold) inline in the mobile cart drawer.**
- Expected impact: +$18-23k / 28d (~$240-300k ARR)
- Effort: **L** — shopify cart.liquid edit + 30 min QA
- Owner: theme dev or founder
- Measurement: tag mobile cart drawer view in GA4; watch ATC→IC by source for 14d.

### Plan next 30d
**Add 3-bullet value-prop block above PDP ATC button (loads with or without video).**
- Expected impact: +$6-10k / 28d (lift ATC quality, tighter ATC→IC)
- Effort: **L** — content + theme edit
- Dependency: copy approval from founder.

**Set up post-ATC drop-off email flow in klaviyo.**
- Expected impact: +$4-7k / 28d (recover 6-9% of cart-but-no-IC)
- Effort: **M** — klaviyo segment + 3-email sequence + 14d test
- Trigger: added-to-cart event WITHOUT subsequent started-checkout in 30 min, suppress 24h after purchase.

### Do NOT do
**Do NOT redesign the cart page from scratch.**
Reason: IC→Purchase is +14pp above benchmark — checkout itself is performing well. Redesigning a working component while the leak is upstream wastes 2-3 weeks and risks regressing the one thing that's currently a strength. Fix the cart drawer first, measure for 14 days, then decide.

## CONFIDENCE & CAVEATS

- **Sample size:** 6,498 ATCs / 1,170 ICs is robust enough to call the ATC→IC delta significant (n>1000 at each step, χ² p<0.001 vs baseline).
- **Seasonality:** oct vs sep includes the pre-halloween / pre-BFCM run-up; absolute volumes should not be projected to nov-dec.
- **Attribution:** GA4 last-non-direct-click. Meta in-platform CR will look ~30% higher due to view-through; use GA4 for funnel-internal comparison only.
- **What we did NOT audit:** post-purchase repeat economics (90d cohort still maturing), advocacy / referral loop, paid-search keyword-level drop-off (out of scope for this audit; route to `paid_search_audit` skill).

## NEXT-AUDIT TRIGGERS

Re-run this audit when:
- ATC→IC moves more than ±3pp week-over-week
- Theme is updated or PDP layout changes
- New paid channel ramps to >15% of traffic
- AOV shifts more than ±10% (changes the shipping-threshold math)

## OUTPUT CHECKLIST

- [x] Full grid filled including long-tail stages (repeat-90d included)
- [x] Worst drop-off explicitly named with $-impact estimate
- [x] Slice by source AND device
- [x] Root causes ranked with evidence (not guesses)
- [x] One ship-this-week fix
- [x] One "do NOT do" item
- [x] Numbers compared to benchmark, not absolute

---

*Generated by `funnel_audit` v1.0.0 — part of the skillor pack.*
*This is illustrative output. Run it against your own brand brain to get a real audit.*
