import type { MetadataRoute } from "next";
import { siteUrl } from "./_seo";

const routes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/products", changeFrequency: "monthly", priority: 0.9 },
  { path: "/products/loji-business", changeFrequency: "monthly", priority: 0.8 },
  { path: "/products/pasel", changeFrequency: "monthly", priority: 0.8 },
  { path: "/products/zentra-workos", changeFrequency: "monthly", priority: 0.75 },
  { path: "/capabilities", changeFrequency: "monthly", priority: 0.8 },
  { path: "/industries", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about", changeFrequency: "monthly", priority: 0.75 },
];

const contentLastUpdated = new Date("2026-08-30T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: contentLastUpdated,
    changeFrequency,
    priority,
  }));
}
