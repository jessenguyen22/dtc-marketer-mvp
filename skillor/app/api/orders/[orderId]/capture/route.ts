// POST /api/orders/[orderId]/capture
// Captures the PayPal order, then verifies the captured amount + slugs match
// what we signed at create time (anti-tamper). On success, fires delivery email.

import { NextResponse } from "next/server";
import {
  computeCartTotalUsd,
  hasBundleItem,
  isValidEmail,
  BUNDLE_SLUG,
} from "@/lib/cart-pricing-calculator";
import { capturePaypalOrder } from "@/lib/paypal-api-client";
import {
  emailHash,
  hashSlugs,
  verifyOrderIntent,
} from "@/lib/jwt-order-and-download-token";
import { getSkillSlugs } from "@/lib/skills-catalog-loader";
import { sendPurchaseDeliveryEmail } from "@/lib/resend-purchase-delivery-email";

export const runtime = "nodejs";

type RouteParams = { params: Promise<{ orderId: string }> };

export async function POST(req: Request, { params }: RouteParams) {
  const { orderId } = await params;

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
  // Whitelist slugs against catalog (prevents arbitrary string injection that
  // would later 500 in delivery). Same rule as /api/orders/create.
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
  const finalSlugs = hasBundleItem(cleanSlugs) ? [BUNDLE_SLUG] : cleanSlugs;
  const expectedTotal = computeCartTotalUsd(finalSlugs);

  // 1. Capture with PayPal.
  let capture;
  try {
    capture = await capturePaypalOrder(orderId);
  } catch (err) {
    console.error("[orders/capture] paypal error", err);
    return NextResponse.json(
      { error: "capture failed" },
      { status: 502 },
    );
  }

  if (capture.status !== "COMPLETED") {
    return NextResponse.json(
      { error: `unexpected capture status: ${capture.status}` },
      { status: 502 },
    );
  }

  // 2. Verify the intent we signed at create time matches what user claims now.
  const purchaseUnit = capture.purchase_units?.[0];
  const customId = purchaseUnit?.custom_id;
  if (!customId) {
    console.error("[orders/capture] missing custom_id", orderId);
    return NextResponse.json({ error: "tamper check failed" }, { status: 400 });
  }

  let intent;
  try {
    intent = verifyOrderIntent(customId);
  } catch (err) {
    console.error("[orders/capture] intent verify failed", err);
    return NextResponse.json({ error: "tamper check failed" }, { status: 400 });
  }

  const claimedSlugHash = hashSlugs(finalSlugs);
  const claimedEmailHash = emailHash(email);
  const expectedTotalCents = Math.round(expectedTotal * 100);

  if (
    intent.totalCents !== expectedTotalCents ||
    intent.slugCount !== finalSlugs.length ||
    intent.slugHash !== claimedSlugHash ||
    intent.emailHash !== claimedEmailHash
  ) {
    console.error("[orders/capture] cart mismatch vs intent", {
      orderId,
      intent,
      claimedSlugHash,
      claimedEmailHash,
      expectedTotalCents,
      finalSlugs,
    });
    return NextResponse.json({ error: "cart mismatch" }, { status: 400 });
  }

  // 3. Verify the actual captured amount + currency matches expected.
  const captureRecord = purchaseUnit?.payments?.captures?.[0];
  const capturedValue = captureRecord?.amount?.value;
  const capturedCurrency = captureRecord?.amount?.currency_code;
  if (
    !capturedValue ||
    capturedCurrency !== "USD" ||
    Number(capturedValue).toFixed(2) !== expectedTotal.toFixed(2)
  ) {
    console.error("[orders/capture] amount/currency mismatch", {
      orderId,
      capturedValue,
      capturedCurrency,
      expectedTotal,
    });
    return NextResponse.json({ error: "amount mismatch" }, { status: 400 });
  }

  // 4. Fire delivery email. We do not block the response on it (best-effort);
  // capture has already succeeded and refusing here would leave a paid-but-undelivered
  // order. We log + alert if email fails.
  try {
    await sendPurchaseDeliveryEmail({
      orderId,
      email,
      slugs: finalSlugs,
      totalUsd: expectedTotal,
    });
  } catch (err) {
    console.error("[orders/capture] delivery email failed (capture OK)", err);
    // Still return success to client — buyer can email support if no email.
  }

  return NextResponse.json({
    status: "COMPLETED",
    orderId,
    captureId: captureRecord?.id,
  });
}
