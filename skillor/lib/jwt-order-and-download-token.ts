// JWT helpers — used twice in the system:
// 1. Order intent token: signed at /api/orders/create, embedded in PayPal `custom_id`.
//    Verified at /api/orders/[id]/capture to detect amount tampering.
// 2. Download token: signed after capture, attached to email link, verified at
//    /api/download/[slug] to gate file delivery (24h expiry).

import "server-only";
import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import jwt from "jsonwebtoken";

function getSecret(): string {
  const s = process.env.JWT_SECRET;
  if (!s || s.length < 32) {
    throw new Error("JWT_SECRET must be set and ≥32 chars");
  }
  return s;
}

// ── Order intent token (custom_id payload) ──────────────────────────────────
// PayPal's `custom_id` is limited to 127 chars. JWTs blow that budget, so we
// use a compact HMAC instead: "t.n.h.eh.sig" where each part is short.
//
//   t  = total USD * 100 (cents), decimal int
//   n  = slug count, decimal int
//   h  = sha256(sorted(slugs))[0..16]   — 16 hex chars
//   eh = sha256(email)[0..8]            — 8  hex chars
//   sig = hmac-sha256(secret, "t.n.h.eh")[0..16] — 16 hex chars
//
// Total length: ~ 5 (t) + 1 (.) + 2 (n) + 1 + 16 + 1 + 8 + 1 + 16 = 51 chars
// well under 127. No expiry baked in — capture happens within seconds and
// PayPal already enforces order TTL on its side.

export type OrderIntentPayload = {
  totalCents: number;
  slugCount: number;
  slugHash: string;
  emailHash: string;
};

function hmacShort(input: string): string {
  return createHmac("sha256", getSecret()).update(input).digest("hex").slice(0, 16);
}

export function emailHash(email: string): string {
  return createHash("sha256").update(email).digest("hex").slice(0, 8);
}

export function signOrderIntent(p: OrderIntentPayload): string {
  const body = `${p.totalCents}.${p.slugCount}.${p.slugHash}.${p.emailHash}`;
  return `${body}.${hmacShort(body)}`;
}

export function verifyOrderIntent(token: string): OrderIntentPayload {
  const parts = token.split(".");
  if (parts.length !== 5) throw new Error("invalid intent token shape");
  const [t, n, h, eh, sig] = parts;
  const body = `${t}.${n}.${h}.${eh}`;
  const expected = hmacShort(body);
  // Constant-time comparison (both inputs same length).
  const sigBuf = Buffer.from(sig);
  const expBuf = Buffer.from(expected);
  if (sigBuf.length !== expBuf.length || !timingSafeEqual(sigBuf, expBuf)) {
    throw new Error("intent signature mismatch");
  }
  return {
    totalCents: Number.parseInt(t, 10),
    slugCount: Number.parseInt(n, 10),
    slugHash: h,
    emailHash: eh,
  };
}

// Stable hash of skill slug list, used to detect tampering between create + capture.
export function hashSlugs(slugs: readonly string[]): string {
  const sorted = [...slugs].sort();
  return createHash("sha256")
    .update(sorted.join(","))
    .digest("hex")
    .slice(0, 16);
}

// ── Download token (email link payload) ─────────────────────────────────────
export type DownloadTokenPayload = {
  orderId: string;
  email: string;
  slug: string; // single skill slug, or BUNDLE_SLUG
};

export function signDownloadToken(payload: DownloadTokenPayload): string {
  return jwt.sign(payload, getSecret(), { expiresIn: "24h" });
}

export function verifyDownloadToken(token: string): DownloadTokenPayload {
  return jwt.verify(token, getSecret()) as DownloadTokenPayload & {
    iat: number;
    exp: number;
  };
}
