import Link from "next/link";
import { aboutContent } from "@/content/copy/about-page-content";
import { FounderTrackRecordTimeline } from "@/components/marketing/founder-track-record-timeline";
import { FounderVideoEmbedSlot } from "@/components/marketing/founder-video-embed-slot";
import { FounderSocialLinks } from "@/components/marketing/founder-social-links";

export const metadata = {
  title: "about — skillor",
  description: aboutContent.hero.intro,
};

export default function AboutPage() {
  const c = aboutContent;

  return (
    <article className="w-full px-6 sm:px-8 py-24 max-w-[900px] mx-auto">
      <h1
        className="font-display font-light tracking-tight"
        style={{ fontSize: "clamp(34px, 7vw, 96px)", lineHeight: 1.05 }}
      >
        {c.hero.heading}
      </h1>

      <p className="mt-12 text-lg text-[var(--color-text-secondary)] leading-relaxed">
        {c.hero.intro}
      </p>

      <div className="mt-16">
        <FounderSocialLinks social={c.social} />
      </div>

      <div className="mt-24 space-y-16">
        <FounderTrackRecordTimeline entries={c.timeline} />

        <FounderVideoEmbedSlot />

        {c.sections.map((s, i) => (
          <section key={i}>
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight mb-6">
              {s.heading}
            </h2>
            <div className="text-[var(--color-text-secondary)] leading-relaxed whitespace-pre-line">
              {s.body}
            </div>
            {"bullets" in s && s.bullets && (
              <ul className="mt-6 space-y-3">
                {s.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3 text-sm">
                    <span className="text-[var(--color-text-tertiary)] font-mono-ui">
                      ▸
                    </span>
                    <span className="text-[var(--color-text-secondary)]">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      <div className="mt-24 pt-12 border-t border-[var(--color-border)]">
        <h2 className="text-2xl font-light mb-6">{c.finalCta.heading}</h2>
        <Link
          href={c.finalCta.href}
          className="inline-block font-mono-ui text-sm px-6 py-3 border border-[var(--color-border-strong)] hover:bg-[var(--color-surface)] transition-colors"
          style={{ opacity: 1 }}
        >
          {c.finalCta.label}
        </Link>
      </div>
    </article>
  );
}
