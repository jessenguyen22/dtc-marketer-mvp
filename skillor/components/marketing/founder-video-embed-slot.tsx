// Loom embed slot. Renders nothing if NEXT_PUBLIC_FOUNDER_LOOM_URL is unset
// or doesn't match the expected Loom embed URL prefix.

const LOOM_EMBED_PREFIX = "https://www.loom.com/embed/";

export function FounderVideoEmbedSlot({
  heading = "founder demo",
}: {
  heading?: string;
}) {
  const url = process.env.NEXT_PUBLIC_FOUNDER_LOOM_URL;

  if (!url || !url.startsWith(LOOM_EMBED_PREFIX)) return null;

  return (
    <section>
      <h2 className="text-2xl sm:text-3xl font-light tracking-tight mb-6">
        {heading}
      </h2>
      <div
        className="relative w-full border border-[var(--color-border-strong)]"
        style={{ paddingBottom: "56.25%" }}
      >
        <iframe
          src={url}
          title="founder demo video"
          allowFullScreen
          sandbox="allow-scripts allow-same-origin allow-popups"
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </section>
  );
}
