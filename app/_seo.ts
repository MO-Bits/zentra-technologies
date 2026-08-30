import type { Metadata } from "next";

export const siteName = "Zentra Technologies";
export const legalName = "Zentra Technologies Ltd";
export const siteUrl = "https://www.zentra.co.tz";
export const defaultDescription =
  "Zentra Technologies is a Tanzanian software and engineering company building digital products, automation, AI and research-led systems for real operations.";

type PageMetadata = {
  title: string;
  description: string;
  path: `/${string}` | "/";
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadata): Metadata {
  const socialTitle = `${title} | ${siteName}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "en_TZ",
      url: path,
      siteName,
      title: socialTitle,
      description,
    },
    twitter: {
      card: "summary",
      title: socialTitle,
      description,
    },
  };
}
