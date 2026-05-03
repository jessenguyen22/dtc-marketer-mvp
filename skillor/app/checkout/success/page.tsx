import Link from "next/link";

export const metadata = {
  title: "thanks — skillor",
  robots: { index: false, follow: false },
};

type SearchParams = Promise<{ order?: string }>;

export default async function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { order } = await searchParams;

  return (
    <main className="min-h-screen w-full px-6 sm:px-8 py-24 flex items-center">
      <div className="max-w-[800px] mx-auto text-center">
        <span className="font-mono-ui text-xs text-[var(--color-text-tertiary)] border border-[var(--color-border-strong)] px-2 py-1">
          ORDER COMPLETE
        </span>

        <h1
          className="mt-12 font-display font-light tracking-tight"
          style={{ fontSize: "clamp(32px, 7vw, 88px)", lineHeight: 1.05 }}
        >
          thank you.
        </h1>

        <p className="mt-12 text-lg text-[var(--color-text-secondary)] leading-relaxed">
          payment received. download links are on their way to your email.
          links expire 24 hours after delivery — save the file locally.
        </p>

        {order && (
          <p className="mt-8 font-mono-ui text-xs text-[var(--color-text-tertiary)]">
            ORDER ID // {order}
          </p>
        )}

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[var(--color-border)] text-left">
          <div className="bg-background border border-[var(--color-border)] p-8">
            <p className="font-mono-ui text-xs text-[var(--color-text-tertiary)] mb-2">
              NO EMAIL?
            </p>
            <p className="text-sm text-[var(--color-text-secondary)]">
              check spam, then email{" "}
              <a
                className="underline"
                href="mailto:support@skillor.app"
                style={{ opacity: 1 }}
              >
                support@skillor.app
              </a>{" "}
              with your order id. we resend within 24h.
            </p>
          </div>
          <div className="bg-background border border-[var(--color-border)] p-8">
            <p className="font-mono-ui text-xs text-[var(--color-text-tertiary)] mb-2">
              HOW TO USE
            </p>
            <p className="text-sm text-[var(--color-text-secondary)]">
              drop the SKILL.md into <code>~/.claude/skills/</code> or any
              agent harness that reads markdown skills.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/skills"
            className="font-mono-ui text-sm px-6 py-3 border border-[var(--color-border-strong)] hover:bg-[var(--color-surface)] transition-colors"
            style={{ opacity: 1 }}
          >
            BROWSE SKILLS
          </Link>
          <Link
            href="/"
            className="font-mono-ui text-sm px-6 py-3 btn-primary transition-opacity"
            style={{ opacity: 1 }}
          >
            BACK TO HOME
          </Link>
        </div>
      </div>
    </main>
  );
}
