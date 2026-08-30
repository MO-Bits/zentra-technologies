import type { MetadataRoute } from "next";
import { defaultDescription, siteName } from "./_seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zentra Technologies Ltd",
    short_name: siteName,
    description: defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#071411",
    theme_color: "#071411",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
