export type Product = {
  slug: string;
  code: string;
  name: string;
  category: string;
  eyebrow: string;
  description: string;
  longDescription: string;
  audience: string;
  status: "Available" | "In development";
  externalUrl?: string;
  externalLabel?: string;
  features: { title: string; description: string }[];
  system: { label: string; value: string }[];
};

export const products: Product[] = [
  {
    slug: "loji-business",
    code: "01",
    name: "Loji Business",
    category: "Hospitality operations",
    eyebrow: "For lodges, hotels and guesthouses",
    description:
      "Bookings, rooms, guests and staff brought together in one dependable hospitality system.",
    longDescription:
      "Loji Business gives hospitality teams a clear operational view—from room availability and booking creation to guest stays, staff access and daily property activity.",
    audience: "Property owners, managers, reception teams and hospitality staff",
    status: "Available",
    externalUrl: "https://business.loji.co.tz",
    externalLabel: "Open Loji Business",
    features: [
      { title: "Rooms & availability", description: "See room status, pricing and availability without losing the operational picture." },
      { title: "Booking lifecycle", description: "Create and manage bookings through arrival, stay, payment and checkout." },
      { title: "Guests & stays", description: "Keep guest information and stay history connected to the right property activity." },
      { title: "Staff & access", description: "Invite staff and give each role access to the work it is responsible for." },
      { title: "Property operations", description: "Coordinate check-ins, checkouts, cleaning needs and room updates from one place." },
      { title: "Responsive workspace", description: "Run the property from desktop, tablet or phone with the same operational clarity." },
    ],
    system: [
      { label: "Inputs", value: "Bookings · Guests · Rooms" },
      { label: "Operations", value: "Stay · Staff · Payments" },
      { label: "Outcome", value: "A clearer property" },
    ],
  },
  {
    slug: "pasel",
    code: "02",
    name: "Pasel",
    category: "Parcel operations",
    eyebrow: "For bus and courier operators",
    description:
      "A connected operating system for moving parcels across branches, journeys and regions.",
    longDescription:
      "Pasel connects parcel registration, branch responsibilities, vehicle journeys, manifests, tracking and secure collection so operators can control the full movement of every parcel.",
    audience: "Bus companies, courier operators, branch managers, clerks and drivers",
    status: "Available",
    externalUrl: "https://pasel.co.tz",
    externalLabel: "Open Pasel",
    features: [
      { title: "Parcel registration", description: "Capture sender, recipient, route, value, payment and collection details correctly." },
      { title: "Branch operations", description: "Keep work scoped to the responsible company, branch and staff role." },
      { title: "Journeys & manifests", description: "Plan multi-stop journeys and maintain a clear record of parcels inside each vehicle." },
      { title: "Loading & unloading", description: "Control what enters or leaves a vehicle at the correct stage and location." },
      { title: "Tracking & notifications", description: "Give senders and recipients useful parcel updates and collection information." },
      { title: "Secure handover", description: "Use controlled collection numbers and staff permissions for accountable release." },
    ],
    system: [
      { label: "Inputs", value: "Parcels · Branches · Routes" },
      { label: "Operations", value: "Journeys · Tracking · Handover" },
      { label: "Outcome", value: "Controlled movement" },
    ],
  },
  {
    slug: "zentra-workos",
    code: "03",
    name: "Zentra WorkOS",
    category: "Organisation workspace",
    eyebrow: "For organisations and institutions",
    description:
      "Teams, people, shared knowledge, tasks, permissions and activity in one focused workspace.",
    longDescription:
      "Zentra WorkOS is being developed as a flexible organisation workspace where people can organise teams, build shared knowledge, manage tasks and understand progress without unnecessary complexity.",
    audience: "Companies, schools, NGOs, hospitals, public institutions and growing teams",
    status: "In development",
    features: [
      { title: "Workspaces", description: "Give each organisation a clear home for its people, knowledge and work." },
      { title: "Teams & people", description: "Organise membership, invitations, responsibilities and access around real structures." },
      { title: "Pages & knowledge", description: "Create collaborative pages and documents that remain close to the work." },
      { title: "Tasks", description: "Assign, prioritise and follow work without creating a complicated process layer." },
      { title: "Comments & activity", description: "Keep discussion and operational context connected to the relevant work." },
      { title: "Roles & permissions", description: "Control what members can see and do across the organisation." },
    ],
    system: [
      { label: "Foundation", value: "Workspace · Teams · People" },
      { label: "Work", value: "Pages · Tasks · Comments" },
      { label: "Outcome", value: "Shared progress" },
    ],
  },
];

export const capabilities = [
  { code: "01", title: "Digital products", description: "Web, mobile, cloud and enterprise platforms shaped around the work people actually do." },
  { code: "02", title: "Automation & integration", description: "Connected workflows that reduce repetition, improve visibility and keep operations moving." },
  { code: "03", title: "Data & AI systems", description: "Useful intelligence, structured data and decision tools designed for responsible everyday use." },
  { code: "04", title: "Healthcare & engineering", description: "Specialised technology developed through engineering discipline, research and sector knowledge." },
  { code: "05", title: "R&D and validation", description: "Testing, refinement and commercialisation of practical, scalable and locally relevant innovations." },
  { code: "06", title: "Technology services", description: "Systems analysis, integration, cybersecurity, technical support, training and capacity building." },
];

export const buildSteps = [
  ["01", "Understand the operation", "We begin with the people, constraints and decisions inside the real workflow."],
  ["02", "Engineer the whole system", "Product, software, data and implementation are designed as one connected solution."],
  ["03", "Validate what matters", "Performance, usability, safety and reliability are tested against the intended use."],
  ["04", "Improve and scale", "Evidence from use guides refinement, deployment and sustainable growth."],
];

export const industries = [
  ["Hospitality", "Property and guest operations"],
  ["Logistics", "Branches, journeys and parcel movement"],
  ["Healthcare", "Digital health and engineering technology"],
  ["Education", "Institutional systems and knowledge"],
  ["Business & finance", "Workflows, data and decision support"],
  ["Public institutions", "Administration and service delivery"],
];
