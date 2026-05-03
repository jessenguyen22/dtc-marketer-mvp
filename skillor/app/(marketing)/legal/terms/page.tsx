import { termsContent } from "@/content/copy/legal-terms-of-service-content";
import { LegalArticlePageRenderer } from "@/components/marketing/legal-article-page-renderer";

export const metadata = {
  title: "terms of service — skillor",
  description: "skillor terms of service.",
};

export default function TermsPage() {
  return (
    <LegalArticlePageRenderer
      content={{
        title: termsContent.title,
        effectiveDate: termsContent.effectiveDate,
        preamble: termsContent.preamble,
        disclaimer: termsContent.disclaimer,
        sections: termsContent.sections.map((s) => ({
          id: s.id,
          title: s.title,
          body: s.body,
        })),
      }}
    />
  );
}
