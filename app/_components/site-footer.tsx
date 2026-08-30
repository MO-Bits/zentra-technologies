import { ZentraMark } from "./brand";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-width footer-top">
        <div className="footer-brand">
          <a className="brand brand--dark" href="/" aria-label="Zentra Technologies home">
            <ZentraMark compact />
            <span>Zentra</span>
          </a>
          <p>Practical technology.<br />Engineered for real operations.</p>
        </div>
        <nav aria-label="Footer company links">
          <strong>Company</strong>
          <a href="/about">About Zentra</a>
          <a href="/capabilities">Capabilities</a>
          <a href="/industries">Industries</a>
        </nav>
        <nav aria-label="Footer product links">
          <strong>Products</strong>
          <a href="/products/loji-business">Loji Business</a>
          <a href="/products/pasel">Pasel</a>
          <a href="/products/zentra-workos">Zentra WorkOS</a>
        </nav>
      </div>
      <div className="section-width footer-bottom">
        <span>© {new Date().getFullYear()} Zentra Technologies Ltd</span>
        <span>Built in Tanzania · Designed for scale</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
