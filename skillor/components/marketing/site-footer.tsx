// Footer with 3-column link groups. Brutalist: thin top border, no shadows.

import Link from "next/link";

const productLinks = [
  { href: "/skills", label: "skills" },
  { href: "/pricing", label: "pricing" },
  { href: "/docs", label: "docs" },
  { href: "/about", label: "about" },
];

const legalLinks = [
  { href: "/legal/license", label: "license" },
  { href: "/legal/terms", label: "terms" },
  { href: "/legal/privacy", label: "privacy" },
  { href: "/legal/refund", label: "refund policy" },
];

const contactLinks = [
  { href: "mailto:support@skillor.app", label: "support@skillor.app" },
];

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-[var(--color-border)] mt-24">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          <div>
            <p className="font-mono-ui text-sm">SKILLOR</p>
            <p className="mt-4 text-sm text-[var(--color-text-tertiary)] max-w-xs">
              24 production-grade marketing skills for DTC operators.
            </p>
          </div>

          <FooterColumn title="product" links={productLinks} />
          <FooterColumn title="legal" links={legalLinks} />
          <FooterColumn title="contact" links={contactLinks} />
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row justify-between gap-4">
          <p className="font-mono-ui text-xs text-[var(--color-text-tertiary)]">
            © 2026 SKILLOR // V1.0 // MIT
          </p>
          <p className="font-mono-ui text-xs text-[var(--color-text-tertiary)]">
            BUILT WITH NEXT.JS // DEPLOYED ON VERCEL
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="font-mono-ui text-xs text-[var(--color-text-tertiary)] mb-4">
        {title}
      </p>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-sm text-[var(--color-text-secondary)] hover:opacity-50 transition-opacity"
              style={{ opacity: 1 }}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
