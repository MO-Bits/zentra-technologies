import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "./globals.css";
import { MotionSystem } from "./_components/motion-system";
import { SiteFooter } from "./_components/site-footer";
import { SiteHeader } from "./_components/site-header";
import {
  defaultDescription,
  legalName,
  siteName,
  siteUrl,
} from "./_seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  creator: legalName,
  publisher: legalName,
  category: "technology",
  title: {
    default: "Zentra Technologies | Software & Engineering Tanzania",
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Zentra Technologies",
    "software company Tanzania",
    "custom software development Tanzania",
    "business automation Tanzania",
    "AI solutions Tanzania",
    "digital transformation Tanzania",
    "engineering and technology research",
    "hospitality software Tanzania",
    "parcel logistics software Tanzania",
  ],
  authors: [{ name: legalName, url: siteUrl }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_TZ",
    url: "/",
    siteName,
    title: "Zentra Technologies | Software & Engineering Tanzania",
    description: defaultDescription,
  },
  twitter: {
    card: "summary",
    title: "Zentra Technologies | Software & Engineering Tanzania",
    description: defaultDescription,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        legalName,
        url: siteUrl,
        logo: `${siteUrl}/favicon.svg`,
        areaServed: {
          "@type": "Country",
          name: "Tanzania",
        },
        description: defaultDescription,
        knowsAbout: [
          "Software development",
          "Digital transformation",
          "Business automation",
          "Data and artificial intelligence",
          "Healthcare technology",
          "Engineering research",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        description: defaultDescription,
        inLanguage: "en-TZ",
        publisher: { "@id": `${siteUrl}/#organization` },
      },
    ],
  };

  return (
    <html lang="en-TZ">
      <body id="top">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <MotionSystem />
        {children}
        <SiteFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
