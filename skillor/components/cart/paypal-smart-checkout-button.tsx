"use client";

// PayPal Smart Buttons. Wraps the SDK provider, calls our server endpoints
// (/api/orders/create + /api/orders/[id]/capture), then redirects to /checkout/success.

import { useRouter } from "next/navigation";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useCartStore } from "@/lib/zustand-cart-store";

type Props = {
  email: string;
  disabled?: boolean;
};

export function PaypalSmartCheckoutButton({ email, disabled }: Props) {
  const router = useRouter();
  const slugs = useCartStore((s) => s.slugs);
  const clear = useCartStore((s) => s.clear);

  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

  if (!clientId) {
    return (
      <div className="border border-[var(--color-border-strong)] p-6 text-sm text-[var(--color-text-secondary)]">
        <p className="font-mono-ui text-xs text-[var(--color-text-tertiary)] mb-2">
          PAYPAL NOT CONFIGURED
        </p>
        Set <code>NEXT_PUBLIC_PAYPAL_CLIENT_ID</code> in <code>.env.local</code>{" "}
        to enable checkout.
      </div>
    );
  }

  if (disabled) {
    return (
      <div className="border border-[var(--color-border)] p-6 text-sm text-[var(--color-text-tertiary)]">
        enter a valid email above to enable checkout.
      </div>
    );
  }

  return (
    <PayPalScriptProvider
      options={{
        clientId,
        currency: "USD",
        intent: "capture",
        components: "buttons",
      }}
    >
      <PayPalButtons
        style={{
          layout: "vertical",
          shape: "rect",
          color: "white",
          label: "paypal",
        }}
        createOrder={async () => {
          const res = await fetch("/api/orders/create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ slugs, email }),
          });
          if (!res.ok) {
            const text = await res.text();
            throw new Error(`create order failed: ${text}`);
          }
          const { orderId } = (await res.json()) as { orderId: string };
          return orderId;
        }}
        onApprove={async (data) => {
          const res = await fetch(
            `/api/orders/${encodeURIComponent(data.orderID)}/capture`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ slugs, email }),
            },
          );
          if (!res.ok) {
            const text = await res.text();
            throw new Error(`capture failed: ${text}`);
          }
          clear();
          router.push(`/checkout/success?order=${data.orderID}`);
        }}
        onError={(err) => {
          console.error("[paypal] error", err);
          alert("Payment failed. Try again or contact support@skillor.app.");
        }}
      />
    </PayPalScriptProvider>
  );
}
