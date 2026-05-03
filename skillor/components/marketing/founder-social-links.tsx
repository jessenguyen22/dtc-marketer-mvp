// Founder social links. Renders nothing if no links provided.
// Mono-ui labels, brutalist style.

export type FounderSocial = {
  linkedin?: string;
  twitter?: string;
  github?: string;
  email?: string;
};

export function FounderSocialLinks({ social }: { social?: FounderSocial }) {
  if (!social) return null;

  const items: Array<{ label: string; href: string }> = [];
  if (social.linkedin) items.push({ label: "linkedin", href: social.linkedin });
  if (social.twitter) items.push({ label: "twitter", href: social.twitter });
  if (social.github) items.push({ label: "github", href: social.github });
  if (social.email)
    items.push({ label: "email", href: `mailto:${social.email}` });

  if (items.length === 0) return null;

  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-2">
      {items.map((it) => (
        <li key={it.label}>
          <a
            href={it.href}
            target={it.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={it.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            className="font-mono-ui text-xs text-[var(--color-text-tertiary)] hover:text-[var(--color-foreground)] underline underline-offset-4"
          >
            {it.label} →
          </a>
        </li>
      ))}
    </ul>
  );
}
