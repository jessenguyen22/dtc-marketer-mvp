import { SiteNavigation } from "@/components/marketing/site-navigation";
import { SiteFooter } from "@/components/marketing/site-footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteNavigation />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  );
}
