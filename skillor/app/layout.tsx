import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LenisSmoothScrollProvider } from "@/components/site/lenis-smooth-scroll-provider";

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
  title: "Skillor — DTC marketing skills, executable.",
  description:
    "24 production-grade marketing skills for DTC operators. $19 each, $99 for the full set. Buy once, run anywhere Claude runs.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://skillor.app"),
  openGraph: {
    title: "Skillor",
    description: "24 production-grade marketing skills for DTC operators.",
    type: "website",
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
        {children}
      </body>
    </html>
  );
}
