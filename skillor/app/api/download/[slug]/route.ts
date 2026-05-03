// GET /api/download/[slug]?token=<jwt>
// Verifies the JWT, ensures slug matches the token's slug, then streams the
// SKILL.md as an attachment download.

import fs from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";
import {
  verifyDownloadToken,
} from "@/lib/jwt-order-and-download-token";
import { getSkillBySlug } from "@/lib/skills-catalog-loader";
import { BUNDLE_SLUG } from "@/lib/cart-pricing-calculator";

export const runtime = "nodejs";

type RouteParams = { params: Promise<{ slug: string }> };

export async function GET(req: Request, { params }: RouteParams) {
  const { slug } = await params;

  // Path traversal defense: slug must match a known skill.
  const skill = getSkillBySlug(slug);
  if (!skill) {
    return new NextResponse("not found", { status: 404 });
  }

  const token = new URL(req.url).searchParams.get("token");
  if (!token) {
    return new NextResponse("missing token", { status: 401 });
  }

  let payload;
  try {
    payload = verifyDownloadToken(token);
  } catch {
    return new NextResponse("invalid or expired token", { status: 401 });
  }

  // Token must be either a per-skill token (matching slug) OR a bundle token
  // (which authorizes any skill).
  const tokenAllowsSlug =
    payload.slug === slug || payload.slug === BUNDLE_SLUG;
  if (!tokenAllowsSlug) {
    return new NextResponse("token slug mismatch", { status: 401 });
  }

  const filePath = path.join(process.cwd(), "content", "skills", `${slug}.md`);
  let body: string;
  try {
    body = fs.readFileSync(filePath, "utf8");
  } catch {
    return new NextResponse("file missing", { status: 500 });
  }

  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Disposition": `attachment; filename="${slug}.md"`,
      "Cache-Control": "no-store, max-age=0",
    },
  });
}
