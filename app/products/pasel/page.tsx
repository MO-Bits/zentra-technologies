import type { Metadata } from "next";
import { ProductDetail } from "../../_components/product-detail";
import { products } from "../../_data";

const product = products.find((item) => item.slug === "pasel")!;

export const metadata: Metadata = {
  title: "Pasel",
  description: "A parcel operating system for bus and courier operators, developed by Zentra Technologies.",
};

export default function PaselPage() { return <ProductDetail product={product} />; }
