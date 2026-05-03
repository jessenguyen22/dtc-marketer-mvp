"use client";

// Top navigation bar — full width, dark, GeistMono brand left + cart right.
// Desktop (md+): horizontal links inline.
// Mobile (<md): hamburger toggle expands a stacked menu panel below the bar.

import Link from "next/link";
import { useState } from "react";
import { CartIconButtonWithCountBadge } from "@/components/cart/cart-icon-button-with-count-badge";

const links = [
  { href: "/skills", label: "skills" },
  { href: "/pricing", label: "pricing" },
  { href: "/docs", label: "docs" },
  { href: "/about", label: "about" },
];

export function SiteNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-[var(--color-border)]">
      <nav
        aria-label="primary"
        className="max-w-[1200px] mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-3"
      >
        <Link
          href="/"
          className="font-mono-ui text-sm shrink-0"
          style={{ opacity: 1 }}
          onClick={() => setOpen(false)}
        >
          SKILLOR
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7 lg:gap-8">
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

        {/* Right side: cart (always) + hamburger (mobile only) */}
        <div className="flex items-center gap-2">
          <CartIconButtonWithCountBadge />
          <button
            type="button"
            aria-label={open ? "close menu" : "open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu-panel"
            onClick={() => setOpen((s) => !s)}
            className="md:hidden font-mono-ui text-xs px-3 py-2 border border-[var(--color-border-strong)] hover:bg-[var(--color-surface)] transition-colors"
          >
            {open ? "✕" : "≡"}
          </button>
        </div>
      </nav>

      {/* Mobile expandable panel */}
      {open && (
        <div
          id="mobile-menu-panel"
          className="md:hidden border-t border-[var(--color-border)] bg-background"
        >
          <ul className="max-w-[1200px] mx-auto px-4 py-4 flex flex-col">
            {links.map((l) => (
              <li
                key={l.href}
                className="border-b border-[var(--color-border)] last:border-b-0"
              >
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base text-foreground"
                  style={{ opacity: 1 }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
