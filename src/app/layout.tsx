import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const bitter = localFont({
  src: [
    { path: "./fonts/Bitter-variable.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Bitter-variable.woff2", weight: "600", style: "normal" },
    { path: "./fonts/Bitter-variable.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-head",
  adjustFontFallback: "Times New Roman",
});

const workSans = localFont({
  src: [
    { path: "./fonts/WorkSans-variable.woff2", weight: "400", style: "normal" },
    { path: "./fonts/WorkSans-variable.woff2", weight: "500", style: "normal" },
    { path: "./fonts/WorkSans-variable.woff2", weight: "600", style: "normal" },
    { path: "./fonts/WorkSans-variable.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Learn to Ski or Snowboard in Arizona | Arizona Alpine Academy",
    template: "%s",
  },
  description:
    "Ski and snowboard lessons and trip prep for Phoenix and Tucson first-timers headed to Arizona Snowbowl, Sunrise Park Resort, and Mount Lemmon Ski Valley. Call 844-967-5247.",
  openGraph: {
    type: "website",
    siteName: SITE.name,
    url: SITE.url,
    images: ["/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bitter.variable} ${workSans.variable}`}>
      <body className="font-body bg-paper text-ink antialiased">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
