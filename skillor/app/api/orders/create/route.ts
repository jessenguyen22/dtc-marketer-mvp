// POST /api/orders/create
// Validates cart on the server, creates a PayPal order, signs the expected
// total + slug-hash into the PayPal `custom_id` so capture can detect tampering.

import { NextResponse } from "next/server";
import {
  BUNDLE_SLUG,
  computeCartTotalUsd,
  describeCartLineItems,
  hasBundleItem,
  isValidEmail,
} from "@/lib/cart-pricing-calculator";
import { getSkillSlugs } from "@/lib/skills-catalog-loader";
import { createPaypalOrder } from "@/lib/paypal-api-client";
import {
  emailHash,
  hashSlugs,
  signOrderIntent,
} from "@/lib/jwt-order-and-download-token";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const { slugs, email } = (body ?? {}) as { slugs?: unknown; email?: unknown };

  if (!Array.isArray(slugs) || slugs.length === 0) {
    return NextResponse.json({ error: "cart empty" }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "invalid email" }, { status: 400 });
  }

  // Whitelist every slug. BUNDLE_SLUG is synthetic — not in skill loader, allow it.
  const validSlugs = new Set([...getSkillSlugs(), BUNDLE_SLUG]);
  const cleanSlugs: string[] = [];
  for (const s of slugs) {
    if (typeof s !== "string" || !validSlugs.has(s)) {
      return NextResponse.json(
        { error: `unknown slug: ${String(s)}` },
        { status: 400 },
      );
    }
    if (!cleanSlugs.includes(s)) cleanSlugs.push(s);
  }

  // If bundle present, normalize cart to bundle-only on the server too.
  const finalSlugs = hasBundleItem(cleanSlugs) ? [BUNDLE_SLUG] : cleanSlugs;
  const totalUsd = computeCartTotalUsd(finalSlugs);

  if (totalUsd <= 0 || totalUsd > 9999) {
    return NextResponse.json({ error: "invalid total" }, { status: 400 });
  }

  // Sign intent — fits PayPal's 127-char `custom_id` budget by design.
  const customId = signOrderIntent({
    totalCents: Math.round(totalUsd * 100),
    slugCount: finalSlugs.length,
    slugHash: hashSlugs(finalSlugs),
    emailHash: emailHash(email),
  });

  if (customId.length > 127) {
    console.error("[orders/create] custom_id overflow", { len: customId.length });
    return NextResponse.json({ error: "internal" }, { status: 500 });
  }

  const items = describeCartLineItems(finalSlugs).map((i) => ({
    name: i.name.slice(0, 127),
    unit_amount: { currency_code: "USD" as const, value: i.unitAmount.toFixed(2) },
    quantity: String(i.quantity),
    category: "DIGITAL_GOODS" as const,
  }));

  try {
    const order = await createPaypalOrder({
      totalUsd,
      items,
      customId,
      brandName: "Skillor",
    });
    return NextResponse.json({ orderId: order.id });
  } catch (err) {
    console.error("[orders/create] paypal error", err);
    return NextResponse.json(
      { error: "payment provider error" },
      { status: 502 },
    );
  }
}
