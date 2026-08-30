import type { Product } from "../_data";
import { ArrowRight, ArrowUpRight } from "./brand";

export function ProductDetail({ product }: { product: Product }) {
  return (
    <main id="main-content" className="subpage product-detail">
      <section className="subpage-hero product-hero">
        <div className="section-width product-hero-layout">
          <div className="product-hero-copy">
            <nav className="breadcrumbs" aria-label="Breadcrumb">
              <a href="/">Home</a><span>/</span><a href="/products">Products</a><span>/</span><strong>{product.name}</strong>
            </nav>
            <div className="detail-status"><i /> {product.status}</div>
            <p className="eyebrow"><span /> {product.eyebrow}</p>
            <h1>{product.name}</h1>
            <p className="subpage-lead">{product.longDescription}</p>
            <div className="hero-actions">
              {product.externalUrl ? (
                <a className="button button--mint" href={product.externalUrl} target="_blank" rel="noreferrer">
                  {product.externalLabel}<ArrowUpRight />
                </a>
              ) : (
                <span className="button button--muted">Product in development</span>
              )}
              <a className="text-link" href="/products">View all products <ArrowRight /></a>
            </div>
          </div>

          <aside className="product-spec" aria-label={`${product.name} system overview`}>
            <div className="spec-topline"><span>Zentra product / {product.code}</span><span>{product.category}</span></div>
            <div className="spec-core">
              <span className="spec-number">{product.code}</span>
              <div><small>Designed for</small><strong>{product.audience}</strong></div>
            </div>
            <div className="spec-flow">
              {product.system.map((item) => (
                <div key={item.label}><span>{item.label}</span><strong>{item.value}</strong></div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="detail-intro">
        <div className="section-width detail-intro-layout">
          <p className="section-kicker">The operational focus</p>
          <h2>{product.description}</h2>
          <p>
            The product is organised around a complete operational flow, so information stays connected and each person can focus on the actions they are responsible for.
          </p>
        </div>
      </section>

      <section className="feature-section">
        <div className="section-width">
          <div className="route-section-heading">
            <div><p className="section-kicker">What it brings together</p><h2>One system. Clear responsibilities.</h2></div>
            <p>Core capabilities are connected around the operation instead of being treated as isolated tools.</p>
          </div>
          <div className="feature-grid">
            {product.features.map((feature, index) => (
              <article key={feature.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="route-cta route-cta--dark">
        <div className="section-width route-cta-layout">
          <div><p className="section-kicker">The thinking behind the product</p><h2>Built with the same Zentra engineering discipline.</h2></div>
          <a href="/capabilities">Explore our capabilities <ArrowRight /></a>
        </div>
      </section>
    </main>
  );
}
