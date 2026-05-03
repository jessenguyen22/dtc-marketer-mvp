// Renders a JSON+LD payload as an inline <script type="application/ld+json">.
// Server component — no client JS shipped.

type Props = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export function StructuredDataScript({ data }: Props) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
