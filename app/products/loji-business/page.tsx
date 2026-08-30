import { ProductDetail } from "../../_components/product-detail";
import { products } from "../../_data";
import { createPageMetadata } from "../../_seo";

const product = products.find((item) => item.slug === "loji-business")!;

export const metadata = createPageMetadata({
  title: "Loji Business",
  description: "A hospitality operations platform for bookings, rooms, guests and staff, developed by Zentra Technologies.",
  path: "/products/loji-business",
});

export default function LojiBusinessPage() { return <ProductDetail product={product} />; }
