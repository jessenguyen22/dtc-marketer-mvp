export const privacyContent = {
  title: "privacy policy",
  effectiveDate: "2026-05-03",
  preamble:
    "short version: we collect the minimum required to deliver the file you bought and to email you about your purchase. no advertising trackers. no third-party analytics that follow you across the web.",
  disclaimer: "plain-language summary. not legal advice. consult a lawyer for your jurisdiction.",

  sections: [
    {
      id: "what-we-collect",
      title: "1. what we collect",
      body: "- email address (provided by paypal at checkout, used to deliver the file).\n- paypal transaction id (used to verify ownership for support + refunds).\n- basic server logs (ip + user-agent on api requests, retained 30 days for abuse prevention).\n\nwe do not collect: card data, mailing address, phone, browsing history, cross-site cookies.",
    },
    {
      id: "cookies",
      title: "2. cookies",
      body: "one functional cookie: `cart` — stores your shopping cart locally. expires 7 days. no analytics or advertising cookies on this site.",
    },
    {
      id: "paypal",
      title: "3. paypal",
      body: "paypal is our payment processor. when you check out, you interact with paypal directly. paypal's privacy policy applies to that interaction. we receive only: your email, your name (optional), the transaction id, and the captured amount.",
    },
    {
      id: "email",
      title: "4. email",
      body: "we use resend to send: (a) purchase delivery emails with download links, (b) optional release notes when v1.x skills update. resend's privacy policy applies to email delivery. you can opt out of release notes via the unsubscribe link in any email.",
    },
    {
      id: "retention",
      title: "5. retention",
      body: "purchase records (email + transaction id + skills bought): retained for 7 years for tax + dispute purposes. server logs: 30 days.",
    },
    {
      id: "rights",
      title: "6. your rights (GDPR / CCPA)",
      body: "if you live in the eu, uk, or california, you have rights to: access your data, request correction, request deletion (subject to tax retention requirements), export your data, object to processing.\n\nemail support@skillor.app with the subject 'data request' + your purchase email. response within 30 days.",
    },
    {
      id: "minors",
      title: "7. minors",
      body: "skillor is sold to professionals. not directed at children under 16. if you believe a minor purchased, contact support@skillor.app for refund + deletion.",
    },
    {
      id: "security",
      title: "8. security",
      body: "download tokens are signed jwts with 24-hour expiry. payment data is handled exclusively by paypal. our hosting (vercel) provides tls in transit. we do not run a database — purchase records are stateless via signed paypal `custom_id`.",
    },
    {
      id: "changes",
      title: "9. changes",
      body: "material privacy changes will be emailed to past customers. effective date tracks the latest version.",
    },
    {
      id: "contact",
      title: "10. contact",
      body: "privacy questions: support@skillor.app.",
    },
  ],
} as const;
