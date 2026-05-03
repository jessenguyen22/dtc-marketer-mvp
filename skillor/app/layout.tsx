import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LenisSmoothScrollProvider } from "@/components/site/lenis-smooth-scroll-provider";
import { StructuredDataScript } from "@/components/site/structured-data-script";
import { siteMeta } from "@/lib/site-meta-config";
import { buildOrganizationSchema } from "@/lib/structured-data-builders";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.url),
  title: {
    default: siteMeta.defaultTitle,
    template: siteMeta.titleTemplate,
  },
  description: siteMeta.description,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    url: siteMeta.url,
    siteName: siteMeta.name,
    title: siteMeta.defaultTitle,
    description: siteMeta.description,
    images: [
      {
        url: siteMeta.ogImage,
        width: siteMeta.ogImageWidth,
        height: siteMeta.ogImageHeight,
        alt: siteMeta.name,
      },
    ],
  },
  twitter: {
    card: siteMeta.twitterCard,
    title: siteMeta.defaultTitle,
    description: siteMeta.description,
    images: [siteMeta.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col bg-background text-foreground"
        suppressHydrationWarning
      >
        <LenisSmoothScrollProvider />
        <StructuredDataScript data={buildOrganizationSchema()} />
        {children}
      </body>
    </html>
  );
}
