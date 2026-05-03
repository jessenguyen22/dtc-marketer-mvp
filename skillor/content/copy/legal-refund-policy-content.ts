export const refundContent = {
  title: "refund policy",
  effectiveDate: "2026-05-03",
  windowDays: 7,
  preamble:
    "short version: 7 days, full refund, provided you have not clicked the download link. once the file is downloaded, the sale is final. this is industry standard for digital goods and how we keep prices low.",

  sections: [
    {
      heading: "eligible for refund",
      body: "- within 7 calendar days of purchase, AND\n- download link has not been clicked (server logs the first click), AND\n- you contact support@skillor.app from the email used at checkout, with the paypal transaction id.",
    },
    {
      heading: "not eligible",
      body: "- more than 7 days after purchase.\n- download link has been clicked (file delivered).\n- chargebacks filed without contacting support first will be disputed.",
    },
    {
      heading: "how to request",
      body: "1. email support@skillor.app from the purchase email.\n2. subject: 'refund request — [paypal transaction id]'.\n3. include reason (optional but appreciated for product feedback).\n\nwe reply within 24 hours. approved refunds processed via paypal within 3 business days.",
    },
    {
      heading: "library refunds",
      body: "library ($99) refunds follow the same rules: full refund within 7 days if no skill in the library has been downloaded. if any single skill in the library has been downloaded, the library is considered delivered and is non-refundable.",
    },
  ],

  edgeCases: [
    {
      case: "duplicate purchase",
      rule: "automatic full refund on the duplicate, regardless of download status. email us with both transaction ids.",
    },
    {
      case: "wrong skill bought",
      rule: "if you bought a single skill and meant another, we'll swap it for free within 7 days, no need to refund + repurchase.",
    },
    {
      case: "delivery email never arrived",
      rule: "we resend within 24h. if still failing after 48h, full refund regardless of download status (because no delivery occurred).",
    },
  ],

  finalCta: {
    heading: "questions before buying?",
    body: "email support@skillor.app first. better to clarify than to buy + refund.",
  },
} as const;
