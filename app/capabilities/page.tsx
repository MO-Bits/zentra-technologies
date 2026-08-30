import Link from "next/link";
import { ArrowRight } from "../_components/brand";
import { capabilities } from "../_data";
import { createPageMetadata } from "../_seo";

export const metadata = createPageMetadata({
  title: "Capabilities",
  description: "Software, automation, AI, engineering, research and technology services from Zentra Technologies.",
  path: "/capabilities",
});

const lifecycle = [
  ["01", "Understand", "Map the users, decisions, constraints and existing operation."],
  ["02", "Design", "Shape the product, system architecture and implementation path together."],
  ["03", "Build", "Develop the smallest complete solution that can do useful work."],
  ["04", "Validate", "Test performance, usability, reliability and safety where relevant."],
  ["05", "Scale", "Improve from evidence and prepare the system for sustainable growth."],
];

export default function CapabilitiesPage() {
  return (
    <main id="main-content" className="subpage capability-page">
      <section className="subpage-hero route-hero">
        <div className="section-width route-hero-layout">
          <div>
            <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><strong>Capabilities</strong></nav>
            <p className="eyebrow"><span /> Product · Engineering · Research</p>
            <h1>We build beyond<br /><em>the interface.</em></h1>
          </div>
          <p className="subpage-lead">Zentra connects product strategy, software, data, engineering and implementation so the finished system works as one dependable whole.</p>
        </div>
      </section>

      <section className="capability-route-grid">
        <div className="section-width">
          <div className="route-section-heading">
            <div><p className="section-kicker">Core capabilities</p><h2>The range to solve the whole problem.</h2></div>
            <p>We select the right mix of technology for the operation instead of forcing every problem into the same product shape.</p>
          </div>
          <div className="feature-grid feature-grid--dark">
            {capabilities.map((item) => <article key={item.title}><span>{item.code}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="lifecycle-section">
        <div className="section-width lifecycle-layout">
          <div className="lifecycle-intro"><p className="section-kicker">Our delivery model</p><h2>A disciplined path from uncertainty to operation.</h2><p>Each stage creates evidence for the next. That keeps decisions clear and reduces the cost of solving the wrong problem.</p></div>
          <div className="lifecycle-list">
            {lifecycle.map(([code, title, description]) => <article key={code}><span>{code}</span><h3>{title}</h3><p>{description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="engagement-section">
        <div className="section-width engagement-layout">
          <div><p className="section-kicker">Ways we create value</p><h2>Our own products—and focused technology partnerships.</h2></div>
          <div className="engagement-columns">
            <article><span>01</span><h3>Zentra products</h3><p>We identify repeated operational problems and build scalable platforms such as Loji Business, Pasel and Zentra WorkOS.</p></article>
            <article><span>02</span><h3>Organisation solutions</h3><p>We analyse important workflows and develop or integrate systems suited to a specific institution or sector.</p></article>
            <article><span>03</span><h3>Research collaboration</h3><p>We work with academic, industry and public partners on technology development, validation and commercialisation.</p></article>
          </div>
        </div>
      </section>

      <section className="route-cta route-cta--mint"><div className="section-width route-cta-layout"><div><p className="section-kicker">See the work in product form</p><h2>Explore the systems already taking shape at Zentra.</h2></div><a href="/products">View our products <ArrowRight /></a></div></section>
    </main>
  );
}
