import { commercialLicenseContent } from "@/content/copy/legal-commercial-license-content";
import { LegalArticlePageRenderer } from "@/components/marketing/legal-article-page-renderer";

export const metadata = {
  title: "license — skillor",
  description:
    "skillor commercial license terms. perpetual single-buyer use, no redistribution, modifications private.",
};

export default function LicensePage() {
  return (
    <LegalArticlePageRenderer
      content={{
        title: commercialLicenseContent.title,
        effectiveDate: commercialLicenseContent.effectiveDate,
        preamble: commercialLicenseContent.preamble,
        disclaimer: commercialLicenseContent.disclaimer,
        sections: commercialLicenseContent.sections.map((s) => ({
          id: s.id,
          title: s.title,
          body: s.body,
        })),
      }}
    />
  );
}
