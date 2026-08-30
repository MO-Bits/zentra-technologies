import Link from "next/link";
import { ArrowRight, ZentraMark } from "../_components/brand";
import { createPageMetadata } from "../_seo";

export const metadata = createPageMetadata({
  title: "About",
  description: "Learn about Zentra Technologies Ltd, a Tanzanian software, engineering and innovation company building practical systems for real operations.",
  path: "/about",
});

const principles = [
  ["01", "Useful before impressive", "A product earns its place by making important work clearer, safer or more efficient."],
  ["02", "Evidence before assumptions", "Research, testing and feedback guide decisions throughout development."],
  ["03", "Context before convention", "Local operating realities are design inputs, not problems to hide after launch."],
  ["04", "Scale with discipline", "Architecture, permissions and support must remain dependable as use grows."],
];

export default function AboutPage() {
  return (
    <main id="main-content" className="subpage about-page">
      <section className="subpage-hero route-hero about-route-hero">
        <div className="section-width route-hero-layout">
          <div><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><strong>About</strong></nav><p className="eyebrow"><span /> Zentra Technologies Ltd</p><h1>A technology company<br /><em>built from real problems.</em></h1></div>
          <p className="subpage-lead">We develop and commercialise practical software, engineering and research-led technologies for organisations, institutions and communities.</p>
        </div>
      </section>

      <section className="identity-section">
        <div className="section-width identity-layout">
          <div className="identity-mark"><ZentraMark /><span>Technology · Engineering · Innovation</span></div>
          <div className="identity-copy"><p className="section-kicker">Who we are</p><h2>Tanzanian by origin. Ambitious by design.</h2><p>Zentra brings product thinking, software engineering, biomedical and technical understanding, research discipline and business context into one company.</p><p>Our goal is not to add more technology to an organisation. It is to create the right system for the problem—and build it well enough to last.</p></div>
        </div>
      </section>

      <section className="principles-section">
        <div className="section-width">
          <div className="route-section-heading"><div><p className="section-kicker">How we think</p><h2>Principles that travel across every product.</h2></div><p>Industries differ, but strong technology work requires the same discipline in understanding, building and improving.</p></div>
          <div className="principle-list">{principles.map(([code, title, description]) => <article key={code}><span>{code}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
        </div>
      </section>

      <section className="company-model-section">
        <div className="section-width company-model-layout">
          <div><p className="section-kicker">The Zentra model</p><h2>Products create focus. Partnerships expand impact.</h2></div>
          <div className="model-flow" aria-label="Zentra company model"><span>Real problem</span><i>→</i><span>Research & design</span><i>→</i><span>Working system</span><i>→</i><span>Evidence & scale</span></div>
          <p>We build our own platforms, develop organisation-specific solutions and collaborate with academic, industry, government and international partners where the work benefits from shared expertise.</p>
        </div>
      </section>

      <section className="route-cta route-cta--mint"><div className="section-width route-cta-layout"><div><p className="section-kicker">See the company in action</p><h2>Start with the products Zentra is bringing to market.</h2></div><a href="/products">Explore our products <ArrowRight /></a></div></section>
    </main>
  );
}
