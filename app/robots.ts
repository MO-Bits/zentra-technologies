import type { MetadataRoute } from "next";
import { siteUrl } from "./_seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    host: siteUrl,
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
