import type { Metadata } from "next";
import { ArrowRight } from "../_components/brand";

export const metadata: Metadata = {
  title: "Industries",
  description: "Zentra Technologies develops locally relevant systems for hospitality, logistics, healthcare, education, business and public institutions.",
};

const sectors = [
  { code: "01", name: "Hospitality", focus: "Property and guest operations", challenge: "Bookings, availability, guests, rooms and staff must stay coordinated throughout the day.", response: "Connected hospitality workflows that give each property a reliable operational picture.", product: "Loji Business", url: "/products/loji-business" },
  { code: "02", name: "Logistics", focus: "Branches, journeys and parcel movement", challenge: "Every parcel changes hands across people, branches, vehicles and destinations.", response: "Controlled registration, movement, tracking and collection across the full delivery journey.", product: "Pasel", url: "/products/pasel" },
  { code: "03", name: "Healthcare", focus: "Digital health and engineering technology", challenge: "Technology must meet practical clinical needs while respecting safety, reliability and evidence.", response: "Research-led digital and engineering solutions developed with appropriate validation pathways." },
  { code: "04", name: "Education", focus: "Institutional systems and shared knowledge", challenge: "People, information and responsibilities often sit across disconnected tools and departments.", response: "Focused systems for administration, collaboration, knowledge and service delivery." },
  { code: "05", name: "Business & finance", focus: "Workflows, data and decisions", challenge: "Growth becomes difficult when important work depends on manual repetition and fragmented information.", response: "Automation, integration and decision tools built around accountable business processes." },
  { code: "06", name: "Public institutions", focus: "Administration and service delivery", challenge: "Systems must serve many users, remain understandable and support transparent responsibilities.", response: "Practical platforms designed for institutional structures, access controls and long-term operation." },
];

export default function IndustriesPage() {
  return (
    <main id="main-content" className="subpage industries-page">
      <section className="subpage-hero route-hero industries-route-hero">
        <div className="section-width route-hero-layout">
          <div><nav className="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><strong>Industries</strong></nav><p className="eyebrow"><span /> Technology in context</p><h1>Built around how<br /><em>the work happens.</em></h1></div>
          <p className="subpage-lead">Sector knowledge changes the quality of every technology decision. We start with the operation, then engineer the system around it.</p>
        </div>
      </section>

      <section className="sector-section">
        <div className="section-width">
          <div className="route-section-heading"><div><p className="section-kicker">Sector focus</p><h2>Different environments. One standard of clarity.</h2></div><p>We do not treat industry context as a layer added after development. It is part of the product definition.</p></div>
          <div className="sector-list">
            {sectors.map((sector) => (
              <article key={sector.name}>
                <span className="sector-code">{sector.code}</span>
                <div className="sector-title"><small>{sector.focus}</small><h3>{sector.name}</h3>{sector.url && <a href={sector.url}>{sector.product} <ArrowRight /></a>}</div>
                <div><small>Operational reality</small><p>{sector.challenge}</p></div>
                <div><small>Zentra response</small><p>{sector.response}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="context-section"><div className="section-width context-layout"><p className="section-kicker">A shared principle</p><h2>Technology should strengthen the operation—not ask the operation to work around it.</h2><div><p>That means understanding infrastructure, skills, responsibilities, risk and growth before defining the final system.</p><a href="/capabilities">How we build <ArrowRight /></a></div></div></section>
    </main>
  );
}
