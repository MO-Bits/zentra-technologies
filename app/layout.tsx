import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "./_components/site-footer";
import { SiteHeader } from "./_components/site-header";
import { MotionSystem } from "./_components/motion-system";

export const metadata: Metadata = {
  metadataBase: new URL("https://zentra.co.tz"),
  title: {
    default: "Zentra Technologies",
    template: "%s | Zentra Technologies",
  },
  description:
    "Zentra Technologies designs practical software, automation and engineering systems for organisations in Tanzania and beyond.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Zentra Technologies",
    "Tanzania technology company",
    "business software Tanzania",
    "digital transformation",
    "engineering technology",
  ],
  openGraph: {
    type: "website",
    siteName: "Zentra Technologies",
    title: "Zentra Technologies",
    description: "Practical software, automation and engineering systems built for real operations.",
  },
  twitter: {
    card: "summary",
    title: "Zentra Technologies",
    description: "Practical software, automation and engineering systems built for real operations.",
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
  return (
    <html lang="en">
      <body id="top">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Zentra Technologies Ltd",
              url: "https://zentra.co.tz",
              logo: "https://zentra.co.tz/favicon.svg",
              areaServed: "Tanzania",
              description: "A Tanzanian technology and engineering company developing practical digital products, automation systems and specialised innovations.",
              knowsAbout: ["Software development", "Digital transformation", "Automation", "Data and AI", "Healthcare technology", "Engineering research"],
            }),
          }}
        />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <MotionSystem />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
