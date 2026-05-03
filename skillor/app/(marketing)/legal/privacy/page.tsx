import { privacyContent } from "@/content/copy/legal-privacy-policy-content";
import { LegalArticlePageRenderer } from "@/components/marketing/legal-article-page-renderer";

export const metadata = {
  title: "privacy policy — skillor",
  description: "skillor privacy policy.",
};

export default function PrivacyPage() {
  return (
    <LegalArticlePageRenderer
      content={{
        title: privacyContent.title,
        effectiveDate: privacyContent.effectiveDate,
        preamble: privacyContent.preamble,
        disclaimer: privacyContent.disclaimer,
        sections: privacyContent.sections.map((s) => ({
          id: s.id,
          title: s.title,
          body: s.body,
        })),
      }}
    />
  );
}
