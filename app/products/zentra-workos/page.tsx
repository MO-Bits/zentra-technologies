import { ProductDetail } from "../../_components/product-detail";
import { products } from "../../_data";
import { createPageMetadata } from "../../_seo";

const product = products.find((item) => item.slug === "zentra-workos")!;

export const metadata = createPageMetadata({
  title: "Zentra WorkOS",
  description: "A focused workspace for teams, shared knowledge, tasks, permissions and activity, in development at Zentra Technologies.",
  path: "/products/zentra-workos",
});

export default function ZentraWorkOSPage() { return <ProductDetail product={product} />; }
