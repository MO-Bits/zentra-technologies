import { ProductDetail } from "../../_components/product-detail";
import { products } from "../../_data";
import { createPageMetadata } from "../../_seo";

const product = products.find((item) => item.slug === "pasel")!;

export const metadata = createPageMetadata({
  title: "Pasel",
  description: "A parcel operating system for bus and courier operators, developed by Zentra Technologies.",
  path: "/products/pasel",
});

export default function PaselPage() { return <ProductDetail product={product} />; }
