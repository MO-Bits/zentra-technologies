import type { Metadata } from "next";
import { ProductDetail } from "../../_components/product-detail";
import { products } from "../../_data";

const product = products.find((item) => item.slug === "zentra-workos")!;

export const metadata: Metadata = {
  title: "Zentra WorkOS",
  description: "A focused workspace for teams, shared knowledge, tasks, permissions and activity, in development at Zentra Technologies.",
};

export default function ZentraWorkOSPage() { return <ProductDetail product={product} />; }
