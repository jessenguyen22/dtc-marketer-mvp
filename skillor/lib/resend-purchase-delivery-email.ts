// Sends the purchase confirmation email via Resend, with per-skill download
// links signed with 24h JWTs. If RESEND_API_KEY is missing, falls back to
// console.log so local sandbox testing still works without a real key.

import "server-only";
import { Resend } from "resend";
import {
  BUNDLE_SLUG,
  BUNDLE_PRICE_USD,
  SINGLE_SKILL_PRICE_USD,
} from "./cart-pricing-calculator";
import { getAllSkills, formatSkillName } from "./skills-catalog-loader";
import { signDownloadToken } from "./jwt-order-and-download-token";

export type PurchaseDeliveryInput = {
  orderId: string;
  email: string;
  slugs: readonly string[];
  totalUsd: number;
};

type DownloadLink = { slug: string; name: string; url: string };

function buildDownloadLinks(input: PurchaseDeliveryInput): DownloadLink[] {
  const siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ).replace(/\/$/, "");

  // If user bought the bundle, every skill is fair game.
  const slugsToDeliver = input.slugs.includes(BUNDLE_SLUG)
    ? getAllSkills().map((s) => s.slug)
    : (input.slugs as string[]);

  return slugsToDeliver.map((slug) => {
    const token = signDownloadToken({
      orderId: input.orderId,
      email: input.email,
      slug,
    });
    return {
      slug,
      name: formatSkillName(slug),
      url: `${siteUrl}/api/download/${slug}?token=${encodeURIComponent(token)}`,
    };
  });
}

function renderEmailHtml(input: PurchaseDeliveryInput, links: DownloadLink[]): string {
  const isBundle = input.slugs.includes(BUNDLE_SLUG);
  const headline = isBundle
    ? `your ${links.length}-skill bundle is ready`
    : links.length === 1
      ? "your skill is ready"
      : `your ${links.length} skills are ready`;

  const linkRows = links
    .map(
      (l) => `
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.1);">
            <span style="font-family: ui-monospace, Menlo, monospace; font-size: 14px; color: #ffffff;">
              ${escapeHtml(l.name)}
            </span><br />
            <a href="${l.url}"
               style="font-family: ui-monospace, Menlo, monospace; font-size: 12px; color: #ffffff; text-decoration: underline; word-break: break-all;">
              download SKILL.md →
            </a>
          </td>
        </tr>`,
    )
    .join("");

  return `<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8" /><title>Skillor — order confirmed</title></head>
<body style="margin:0;padding:0;background:#1f2228;color:#ffffff;font-family:ui-sans-serif,system-ui,sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#1f2228;">
    <tr><td align="center" style="padding: 48px 24px;">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">
        <tr><td style="padding-bottom:32px;">
          <span style="font-family: ui-monospace, Menlo, monospace; font-size: 14px; letter-spacing: 1.4px; text-transform: uppercase; color: #ffffff;">
            SKILLOR // ORDER CONFIRMED
          </span>
        </td></tr>
        <tr><td style="padding-bottom:24px;">
          <h1 style="margin:0;font-family: ui-monospace, Menlo, monospace; font-size: 32px; font-weight: 300; line-height: 1.2; color: #ffffff;">
            ${escapeHtml(headline)}.
          </h1>
        </td></tr>
        <tr><td style="padding-bottom:32px;">
          <p style="margin:0;font-size:16px;line-height:1.6;color:rgba(255,255,255,0.7);">
            payment received. download links below — they expire 24 hours from now.
            save the file(s) locally; we don't store anything for you to come back to.
          </p>
        </td></tr>

        <tr><td style="padding: 24px 0; border-top: 1px solid rgba(255,255,255,0.2); border-bottom: 1px solid rgba(255,255,255,0.2);">
          <p style="margin:0 0 8px 0;font-family: ui-monospace, Menlo, monospace; font-size: 11px; letter-spacing: 1px; text-transform: uppercase; color: rgba(255,255,255,0.5);">
            DOWNLOADS — ${links.length} FILE${links.length === 1 ? "" : "S"}
          </p>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
            ${linkRows}
          </table>
        </td></tr>

        <tr><td style="padding: 24px 0;">
          <p style="margin:0 0 8px 0;font-family: ui-monospace, Menlo, monospace; font-size: 11px; letter-spacing: 1px; text-transform: uppercase; color: rgba(255,255,255,0.5);">
            HOW TO USE
          </p>
          <p style="margin:0;font-size:14px;line-height:1.6;color:rgba(255,255,255,0.7);">
            drop SKILL.md into <code style="font-family: ui-monospace, Menlo, monospace;">~/.claude/skills/</code>
            or any agent harness that reads markdown skills. claude reads the frontmatter contract,
            follows the process body, returns the artifact.
          </p>
        </td></tr>

        <tr><td style="padding: 32px 0; border-top: 1px solid rgba(255,255,255,0.2);">
          <p style="margin:0;font-family: ui-monospace, Menlo, monospace; font-size: 11px; letter-spacing: 1px; text-transform: uppercase; color: rgba(255,255,255,0.3);">
            ORDER // ${escapeHtml(input.orderId)}
          </p>
          <p style="margin:8px 0 0 0;font-family: ui-monospace, Menlo, monospace; font-size: 11px; letter-spacing: 1px; text-transform: uppercase; color: rgba(255,255,255,0.3);">
            TOTAL // $${input.totalUsd.toFixed(2)} USD
          </p>
        </td></tr>

        <tr><td style="padding: 16px 0;">
          <p style="margin:0;font-size:12px;line-height:1.6;color:rgba(255,255,255,0.5);">
            questions or didn't receive a file? email
            <a href="mailto:support@skillor.app" style="color:#ffffff;">support@skillor.app</a>
            with this order id. refund policy at <a href="${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/legal/refund" style="color:#ffffff;">/legal/refund</a>.
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendPurchaseDeliveryEmail(
  input: PurchaseDeliveryInput,
): Promise<void> {
  const links = buildDownloadLinks(input);
  const html = renderEmailHtml(input, links);
  const subject =
    input.slugs.includes(BUNDLE_SLUG)
      ? "your skillor bundle is ready"
      : "your skillor skills are ready";

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey) {
    console.warn("[delivery] RESEND_API_KEY not set — skipping send (logged below)", {
      to: input.email,
      subject,
      orderId: input.orderId,
      links: links.map((l) => l.slug),
    });
    return;
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: input.email,
    subject,
    html,
  });

  if (error) {
    throw new Error(`Resend send failed: ${JSON.stringify(error)}`);
  }
}

// Re-exported for compatibility with the price-aware checkout flow.
export { BUNDLE_PRICE_USD, SINGLE_SKILL_PRICE_USD };
