import type { MetadataRoute } from "next";

const baseUrl = "https://zentra.co.tz";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/products",
    "/products/loji-business",
    "/products/pasel",
    "/products/zentra-workos",
    "/capabilities",
    "/industries",
    "/about",
  ];

  return routes.map((route, index) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : route === "/products" ? 0.9 : 0.75,
  }));
}
