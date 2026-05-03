---
name: utm_attribution_setup
description: Stand up a clean UTM + attribution architecture — naming convention, GTM event tracking, GA4 + Shopify mapping, ESP + ad-platform alignment, and a dashboard mapping table. Use when reporting feels broken, channels disagree on attribution, or no UTM standard exists yet.
license: Skillor Commercial License v1.0
pack: dtc-marketer-mvp
version: 1.0.0
priority_score: 6
dtc_use_case: "Brand has 6 ad accounts, Klaviyo, organic, influencers — UTMs are inconsistent and Shopify shows 'direct/none' for 40% of orders. Skill defines naming convention, generates a master spreadsheet template, sets GTM events, and gives a 1-week migration plan."
brand_brain_fields: [channel_strategy, tech_stack]
---

# UTM & Attribution Setup

Make every paid click traceable to the source, the campaign, and the creative.

## When to invoke
- "Our reporting is a mess"
- "Shopify says 40% of orders are direct"
- "Different channels claim the same conversions"
- "Set up UTMs from scratch"
- New tracking stack rollout

## Brand Brain context required
- `{{brand.channel_strategy}}` — every active channel needs UTM coverage
- `{{brand.tech_stack}}` — GA4, GTM, Shopify, Klaviyo, attribution tool

## Inputs from user
1. Active channels + sub-channels (Meta prospecting, Meta RT, Google brand, Google nonbrand, TikTok, etc.)
2. Current naming chaos examples (paste a few real URLs)
3. Attribution tool in use (native, Triple Whale, NorthBeam, Polar, none)
4. Reporting cadence + who consumes
5. ESP + influencer + affiliate links currently used

## Process
1. **Name the standard.** Lowercase, no spaces, hyphens not underscores, no PII. Document in 1 page.
2. **Define each parameter** — utm_source, utm_medium, utm_campaign, utm_content, utm_term, plus any custom (utm_creative_id, utm_audience).
3. **Build the lookup table** — every channel maps to a fixed source/medium pair (so Shopify "Sessions by source" is interpretable).
4. **GTM event spec** — view_item, add_to_cart, begin_checkout, purchase. Verify dataLayer pushes.
5. **Klaviyo URL builder rules** — every flow link gets utm_source=klaviyo, utm_medium=email, utm_campaign=<flow>.
6. **Influencer / affiliate links** — short-link service + UTM auto-append.
7. **Migration plan** — 1 week to update, 1 week of dual-tagging, 1 week to validate.
8. **Dashboard mapping** — what report consumes what UTM combo.

## Output template

```
UTM & ATTRIBUTION STANDARD — <brand>

NAMING RULES
- lowercase only
- hyphens, never underscores
- no spaces, no PII, no commas
- max 50 chars per parameter

PARAMETER DEFINITIONS
| Parameter | Allowed values | Example |
|---|---|---|
| utm_source   | <fixed list per channel> | facebook, google, klaviyo, tiktok, influencer |
| utm_medium   | <fixed list> | cpc, email, organic, sms, affiliate, paid-social |
| utm_campaign | <YYYYMM>-<initiative> | 202604-bfcm-ramp |
| utm_content  | <ad-set or asset id> | ugc-mom-hook-v3 |
| utm_term     | <keyword for search only> | clean-skincare |
| utm_creative_id (custom) | <platform creative id> | 1203984712 |
| utm_audience (custom) | <audience id or label> | rt-atc-7d |

CHANNEL → SOURCE/MEDIUM LOOKUP
| Channel | utm_source | utm_medium |
|---|---|---|
| Meta prospecting | facebook | paid-social |
| Meta retargeting | facebook | paid-social-rt |
| Google brand | google | cpc-brand |
| Google nonbrand | google | cpc-nonbrand |
| Klaviyo welcome flow | klaviyo | email |
| Klaviyo abandoned cart | klaviyo | email |
| Klaviyo SMS | klaviyo | sms |
| TikTok ads | tiktok | paid-social |
| Pinterest ads | pinterest | paid-social |
| Influencer (organic) | influencer | organic-social |
| Affiliate | affiliate | affiliate |

GTM EVENT SPEC (dataLayer)
- view_item: { item_id, item_name, item_category, price, currency }
- add_to_cart: { ...same... }
- begin_checkout: { value, currency, items[] }
- purchase: { transaction_id, value, currency, items[] }

KLAVIYO URL BUILDER RULES
Append to every link in every flow + campaign:
?utm_source=klaviyo&utm_medium=<email|sms>&utm_campaign=<flow-or-campaign-slug>&utm_content=<message-id>

INFLUENCER / AFFILIATE
- Short-link tool: <…>
- Auto-append rule: utm_source=influencer&utm_medium=organic-social&utm_campaign=<creator-handle>&utm_content=<post-type>

MIGRATION PLAN
Week 1: Update all live ads + flows to new standard
Week 2: Run dual-tagged for transition; document edge cases
Week 3: Validate Shopify + GA4 + ad platform numbers reconcile within ±10%

DASHBOARD MAPPING
| Report | Tool | UTM combo it reads | Owner |
|---|---|---|---|
| Daily revenue by channel | Shopify + GA4 | utm_source × utm_medium | <…> |
| Creative performance | Meta + spreadsheet | utm_content + utm_creative_id | <…> |
| Email revenue per campaign | Klaviyo + GA4 | utm_campaign | <…> |
| Cohort attribution | <attribution tool> | utm_audience | <…> |

OWNERSHIP
- Standard owner: <role>
- New campaign URLs reviewed by: <role>
- Quarterly audit: <date>
```

## Output checklist
- [ ] Naming rules unambiguous (any teammate can write a compliant URL)
- [ ] Channel → source/medium lookup covers every active channel
- [ ] GTM event spec defines dataLayer payload, not just event name
- [ ] Klaviyo + influencer URL conventions explicit
- [ ] Migration plan has dual-tag week (avoids data gap)
- [ ] Dashboard mapping shows which UTM combo feeds which report
- [ ] One person owns the standard going forward

## Anti-patterns
- Free-form utm_campaign values (becomes 400 unique campaign names in 6 months)
- Underscores AND hyphens mixed (analytics aggregation breaks)
- No source/medium for "direct" — leave it as "direct/none" so it's identifiable
- Forgetting Klaviyo SMS = different medium than email
- Letting individual marketers invent UTM patterns ad-hoc
