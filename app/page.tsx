import Image from "next/image";
import { ArrowRight, ZentraMark } from "./_components/brand";
import { buildSteps, capabilities, industries, products } from "./_data";

export default function Home() {
  return (
    <main id="main-content">
      <div className="hero-shell">
        <section className="hero section-width">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Software · Engineering · Research</p>
            <h1>Technology built for <em>real operations.</em></h1>
            <p className="hero-lead">
              Zentra Technologies designs and commercialises practical digital and engineering systems for organisations that need work to move.
            </p>
            <div className="hero-actions">
              <a className="button button--light" href="/products">Explore what we build <ArrowRight /></a>
              <a className="text-link" href="/about">Why Zentra <ArrowRight /></a>
            </div>
          </div>

          <figure className="systems-visual" aria-labelledby="systems-title">
            <div className="visual-topline">
              <span id="systems-title">Zentra / product systems</span>
              <span className="live-label"><i /> Built in Tanzania</span>
            </div>
            <div className="systems-map">
              <div className="systems-core"><ZentraMark /><span>One engineering core</span></div>
              <div className="systems-branches" aria-label="Product portfolio">
                <a className="system-node" href="/products/loji-business"><span>Hospitality</span><strong>Loji Business</strong></a>
                <a className="system-node system-node--active" href="/products/pasel"><span>Logistics</span><strong>Pasel</strong></a>
                <a className="system-node" href="/products/zentra-workos"><span>Collaboration</span><strong>Zentra WorkOS</strong></a>
              </div>
            </div>
            <figcaption><span>Local understanding</span><span>Product discipline</span><span>Scalable architecture</span></figcaption>
          </figure>
        </section>

        <div className="hero-foot section-width" aria-label="Zentra principles">
          <span>Practical by design</span><span>Built for organisations</span><span>Engineered to scale</span>
        </div>
      </div>

      <section className="products-section" id="products">
        <div className="section-width">
          <div className="section-heading section-heading--split">
            <div><p className="section-kicker">Our products</p><h2>Focused systems.<br />Connected thinking.</h2></div>
            <div className="heading-action">
              <p>Each product starts with a specific operational problem and turns it into a simpler, more dependable way of working.</p>
              <a href="/products">View the product portfolio <ArrowRight /></a>
            </div>
          </div>

          <div className="product-list">
            {products.map((product) => (
              <article className="product-row" key={product.name}>
                <span className="product-code">{product.code}</span>
                <div className="product-name"><span>{product.category}</span><h3>{product.name}</h3></div>
                <p>{product.description}</p>
                <a href={`/products/${product.slug}`}><span>Explore product</span><ArrowRight /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="capabilities-section" id="capabilities">
        <div className="section-width">
          <div className="section-heading section-heading--split capabilities-heading">
            <div><p className="section-kicker">What we do</p><h2>From first problem<br />to reliable product.</h2></div>
            <div className="heading-action">
              <p>Zentra combines software, engineering and research to build technology that can survive everyday operations.</p>
              <a href="/capabilities">Explore all capabilities <ArrowRight /></a>
            </div>
          </div>
          <div className="capability-grid">
            {capabilities.map((capability) => (
              <article className="capability-item" key={capability.title}><span>{capability.code}</span><h3>{capability.title}</h3><p>{capability.description}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="build-section">
        <div className="section-width build-layout">
          <figure className="brand-visual">
            <Image
              src="/zentra-connected-systems.webp"
              alt="Abstract network showing connected technology systems"
              width={1536}
              height={1024}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
            <figcaption><span>Systems, not isolated features</span><span>Zentra engineering model</span></figcaption>
          </figure>
          <div className="build-content">
            <p className="section-kicker">How we build</p>
            <h2>Local context is part of the architecture.</h2>
            <p className="build-intro">A useful system must fit the environment around it. We connect technology choices to real users, existing operations and the evidence needed to improve.</p>
            <div className="build-steps">
              {buildSteps.map(([code, title, description]) => <article key={code}><span>{code}</span><div><h3>{title}</h3><p>{description}</p></div></article>)}
            </div>
            <a className="inline-route-link" href="/about">See how Zentra thinks <ArrowRight /></a>
          </div>
        </div>
      </section>

      <section className="industries-section" id="industries">
        <div className="section-width">
          <div className="industries-heading">
            <p className="section-kicker">Where we work</p>
            <h2>Built around the way sectors actually operate.</h2>
            <div className="heading-action"><p>The technology changes. The standard stays the same: dependable systems designed for their real environment.</p><a href="/industries">Explore industries <ArrowRight /></a></div>
          </div>
          <div className="industry-list">
            {industries.map(([name, description], index) => <article key={name}><span>{String(index + 1).padStart(2, "0")}</span><h3>{name}</h3><p>{description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="company-section" id="company">
        <div className="section-width company-layout">
          <div className="company-statement"><p className="section-kicker">The company</p><h2>Tanzania is our starting point. Scale is the standard.</h2></div>
          <div className="company-copy">
            <p>Zentra Technologies Ltd is a Tanzanian technology and engineering company developing practical digital products, automation systems and specialised innovations for organisations and communities.</p>
            <p>We combine product thinking, software engineering, research and sector understanding—giving us the range to create our own platforms and partner on complex technology challenges.</p>
            <a className="inline-route-link inline-route-link--dark" href="/about">About Zentra Technologies <ArrowRight /></a>
          </div>
        </div>
      </section>

      <section className="product-cta">
        <div className="section-width cta-layout">
          <div><p className="section-kicker">Start with your operation</p><h2>Use the Zentra product built for the work in front of you.</h2></div>
          <div className="cta-links">
            <a href="/products/loji-business"><span><small>For hospitality</small>Explore Loji Business</span><ArrowRight /></a>
            <a href="/products/pasel"><span><small>For parcel operations</small>Explore Pasel</span><ArrowRight /></a>
          </div>
        </div>
      </section>
    </main>
  );
}
