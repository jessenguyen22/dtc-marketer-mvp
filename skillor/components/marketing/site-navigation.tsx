// Top navigation bar — full width, dark, GeistMono brand left + links right.
// Mobile: simple text-link list collapses below brand on <640px.

import Link from "next/link";
import { CartIconButtonWithCountBadge } from "@/components/cart/cart-icon-button-with-count-badge";

const links = [
  { href: "/skills", label: "skills" },
  { href: "/pricing", label: "pricing" },
  { href: "/docs", label: "docs" },
  { href: "/about", label: "about" },
];

export function SiteNavigation() {
  return (
    <header className="w-full border-b border-[var(--color-border)]">
      <nav
        aria-label="primary"
        className="max-w-[1200px] mx-auto px-6 sm:px-8 h-16 flex items-center justify-between gap-6"
      >
        <Link
          href="/"
          className="font-mono-ui text-sm hover:opacity-100"
          style={{ opacity: 1 }}
        >
          SKILLOR
        </Link>

        <ul className="flex items-center gap-6 sm:gap-8">
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
          <li>
            <CartIconButtonWithCountBadge />
          </li>
        </ul>
      </nav>
    </header>
  );
}
