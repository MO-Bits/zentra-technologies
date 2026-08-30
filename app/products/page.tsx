import Link from "next/link";
import { products } from "../_data";
import { ArrowRight } from "../_components/brand";
import { createPageMetadata } from "../_seo";

export const metadata = createPageMetadata({
  title: "Products",
  description: "Explore Loji Business, Pasel and Zentra WorkOS—focused operating systems developed by Zentra Technologies.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <main id="main-content" className="subpage products-page">
      <section className="subpage-hero route-hero">
        <div className="section-width route-hero-layout">
          <div>
            <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><strong>Products</strong></nav>
            <p className="eyebrow"><span /> Zentra product portfolio</p>
            <h1>Three products.<br /><em>One way of thinking.</em></h1>
          </div>
          <p className="subpage-lead">
            We build focused systems for sectors where clearer information, stronger control and better coordination make a measurable operational difference.
          </p>
        </div>
      </section>

      <section className="product-catalogue">
        <div className="section-width">
          {products.map((product) => (
            <a className="catalogue-row" href={`/products/${product.slug}`} key={product.slug}>
              <span className="catalogue-code">{product.code}</span>
              <div className="catalogue-title"><small>{product.category}</small><h2>{product.name}</h2></div>
              <p>{product.description}</p>
              <span className="catalogue-status"><i /> {product.status}</span>
              <ArrowRight />
            </a>
          ))}
        </div>
      </section>

      <section className="portfolio-principle">
        <div className="section-width portfolio-layout">
          <p className="section-kicker">A connected portfolio</p>
          <h2>Different operations.<br />The same product discipline.</h2>
          <div>
            <p>Every Zentra product starts with a defined operational problem, maps the full workflow and gives each user the right level of control.</p>
            <a href="/about">Learn about Zentra <ArrowRight /></a>
          </div>
        </div>
      </section>
    </main>
  );
}
