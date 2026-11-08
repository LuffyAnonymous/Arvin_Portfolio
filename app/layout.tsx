import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const textFont = IBM_Plex_Sans({ variable: "--font-plex-sans", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const monoFont = IBM_Plex_Mono({ variable: "--font-plex-mono", subsets: ["latin"], weight: ["400", "500"] });
const title = "Arvin Philip Poliga | IT Professional, Automation & Software Development";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${site.name}` },
  description: site.tagline,
  keywords: ["IT professional Dubai", "technical support UAE", "systems operations", "workflow automation", "Python", "SQL", "software development"],
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_AE", url: site.url, siteName: site.name, title, description: site.tagline, images: [{ url: "/arvin-photo.jpg", width: 1024, height: 1024, alt: "Arvin Philip Poliga" }] },
  twitter: { card: "summary_large_image", title, description: site.tagline, images: ["/arvin-photo.jpg"] },
};

export const viewport: Viewport = { themeColor: "#FFFFFF" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${textFont.variable} ${monoFont.variable}`}><body><Header /><main>{children}</main><Footer /></body></html>;
}
