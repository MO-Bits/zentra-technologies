import { ArrowRight, ZentraMark } from "./_components/brand";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found-page">
      <div className="section-width not-found-layout">
        <div className="not-found-mark"><ZentraMark /></div>
        <div><p className="eyebrow"><span /> Error 404</p><h1>This route does not exist.</h1><p>The page may have moved, or the address may be incomplete. Return to the Zentra homepage or explore our products.</p><div className="hero-actions"><a className="button button--mint" href="/">Go to homepage <ArrowRight /></a><a className="text-link" href="/products">Explore products <ArrowRight /></a></div></div>
      </div>
    </main>
  );
}
