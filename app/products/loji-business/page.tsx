import type { Metadata } from "next";
import { ProductDetail } from "../../_components/product-detail";
import { products } from "../../_data";

const product = products.find((item) => item.slug === "loji-business")!;

export const metadata: Metadata = {
  title: "Loji Business",
  description: "A hospitality operations platform for bookings, rooms, guests and staff, developed by Zentra Technologies.",
};

export default function LojiBusinessPage() { return <ProductDetail product={product} />; }
