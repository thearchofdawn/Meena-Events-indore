import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/config/site";
import { display, sans } from "./fonts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { JsonLd } from "@/components/ui/JsonLd";
import { localBusinessJsonLd, websiteJsonLd } from "@/lib/schema";

const isPreview = process.env.VERCEL_ENV === "preview" || process.env.NODE_ENV !== "production";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Meena Events | Wedding Planner & Event Management in Indore",
    template: "%s | Meena Events Indore",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  openGraph: {
    siteName: site.name,
    locale: site.locale,
    type: "website",
  },
  robots: {
    index: !isPreview,
    follow: !isPreview,
    ...(isPreview ? { googleBot: { index: false, follow: false } } : {}),
  },
  formatDetection: {
    telephone: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#4b1729",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${sans.variable}`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ivory focus:px-4 focus:py-2 focus:text-charcoal"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <JsonLd data={localBusinessJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
      </body>
    </html>
  );
}
