// Server-only PayPal API helpers. Never import from client components.
// Uses OAuth2 client_credentials flow. Mode toggles sandbox vs live.

import "server-only";

const SANDBOX_BASE = "https://api-m.sandbox.paypal.com";
const LIVE_BASE = "https://api-m.paypal.com";

export function paypalApiBase(): string {
  return process.env.PAYPAL_MODE === "live" ? LIVE_BASE : SANDBOX_BASE;
}

let cachedToken: { value: string; expiresAt: number } | null = null;

export async function getPaypalAccessToken(): Promise<string> {
  const now = Date.now();
  if (cachedToken && cachedToken.expiresAt > now + 60_000) {
    return cachedToken.value;
  }

  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    throw new Error("PAYPAL_CLIENT_ID and PAYPAL_CLIENT_SECRET must be set");
  }

  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const res = await fetch(`${paypalApiBase()}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`PayPal auth failed: ${res.status} ${await res.text()}`);
  }

  const data = (await res.json()) as { access_token: string; expires_in: number };
  cachedToken = {
    value: data.access_token,
    expiresAt: now + data.expires_in * 1000,
  };
  return data.access_token;
}

type PaypalLineItem = {
  name: string;
  unit_amount: { currency_code: "USD"; value: string };
  quantity: string;
  category?: "DIGITAL_GOODS";
};

type CreateOrderInput = {
  totalUsd: number;
  items: PaypalLineItem[];
  customId: string; // signed JWT — used to verify total at capture
  invoiceId?: string;
  brandName?: string;
};

export async function createPaypalOrder(input: CreateOrderInput) {
  const token = await getPaypalAccessToken();
  const totalStr = input.totalUsd.toFixed(2);

  const itemsTotal = input.items
    .reduce((sum, i) => sum + Number(i.unit_amount.value) * Number(i.quantity), 0)
    .toFixed(2);

  const payload = {
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: totalStr,
          breakdown: {
            item_total: { currency_code: "USD", value: itemsTotal },
          },
        },
        items: input.items,
        custom_id: input.customId,
        invoice_id: input.invoiceId,
      },
    ],
    application_context: {
      brand_name: input.brandName ?? "Skillor",
      shipping_preference: "NO_SHIPPING",
      user_action: "PAY_NOW",
    },
  };

  const res = await fetch(`${paypalApiBase()}/v2/checkout/orders`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "PayPal-Request-Id": crypto.randomUUID(),
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`PayPal create order failed: ${res.status} ${await res.text()}`);
  }

  return (await res.json()) as { id: string; status: string };
}

export type PaypalCaptureResponse = {
  id: string;
  status: string;
  purchase_units: Array<{
    custom_id?: string;
    payments?: {
      captures?: Array<{
        id: string;
        status: string;
        amount: { currency_code: string; value: string };
      }>;
    };
    payee?: { email_address?: string };
  }>;
  payer?: { email_address?: string; name?: { given_name?: string } };
};

export async function capturePaypalOrder(
  orderId: string,
): Promise<PaypalCaptureResponse> {
  const token = await getPaypalAccessToken();

  const res = await fetch(
    `${paypalApiBase()}/v2/checkout/orders/${encodeURIComponent(orderId)}/capture`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "PayPal-Request-Id": crypto.randomUUID(),
      },
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error(`PayPal capture failed: ${res.status} ${await res.text()}`);
  }

  return (await res.json()) as PaypalCaptureResponse;
}
