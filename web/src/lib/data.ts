// data.ts — Services, Process, Projects, Testimonials (Kolkata-localized)

export const SITE = {
  name: "Home Design Studio Interior",
  shortName: "HDS Interior",
  tagline: "From estimation to execution.",
  city: "Kolkata",
  serviceArea: "Kolkata · Hooghly · Howrah · 24 Parganas",
  phones: ["7439531441", "9477475405", "7059337758"],
  whatsapp: "917439531441",
  email: "hello@homedesignstudio.in",
  address: "Maniktala, Kolkata, West Bengal",
  hours: "Mon–Sat · 10:00 AM – 7:00 PM",
  established: 2018,
};

export type Service = {
  num: string;
  title: string;
  body: string;
  deliverables: string[];
  slug: string;
};

export const SERVICES: Service[] = [
  {
    num: "01",
    slug: "concept-design",
    title: "Concept & Design",
    body: "Floor plans, 3D visualisations, mood boards. We translate how you live into drawings you can walk through before a single wall is touched.",
    deliverables: ["Space planning", "3D walkthroughs", "Material & finish library", "Lighting design"],
  },
  {
    num: "02",
    slug: "civil-work",
    title: "Civil Work",
    body: "Demolition, masonry, plastering, flooring, false ceilings, waterproofing. Our in-house civil team handles every structural change to spec.",
    deliverables: ["Demolition & masonry", "Flooring & tiling", "False ceiling & POP", "Waterproofing"],
  },
  {
    num: "03",
    slug: "electrical-mep",
    title: "Electrical & MEP",
    body: "Full electrical layout, lighting circuits, HVAC, plumbing routing. Licensed electricians, code-compliant wiring, future-proofed loads.",
    deliverables: ["Electrical layout & wiring", "Lighting fixtures & circuits", "HVAC & ventilation", "Plumbing"],
  },
  {
    num: "04",
    slug: "joinery-furniture",
    title: "Joinery & Furniture",
    body: "Bespoke modular kitchens, wardrobes, vanities, TV units. Manufactured in our partner workshop with a 7-year warranty.",
    deliverables: ["Modular kitchen", "Wardrobes & storage", "TV & display units", "Loose furniture procurement"],
  },
  {
    num: "05",
    slug: "finishing-styling",
    title: "Finishing & Styling",
    body: "Painting, polish, soft furnishings, art curation, lighting bulbs and dimmers. The thousand last details that make a house feel like home.",
    deliverables: ["Paint & polish", "Curtains & soft furnishings", "Decor & art curation", "Final styling"],
  },
  {
    num: "06",
    slug: "handover-aftercare",
    title: "Handover & Aftercare",
    body: "Site cleaning, walkthrough, defect-free handover. A 12-month warranty on civil and joinery work, with on-call studio support.",
    deliverables: ["Snag-list resolution", "Deep clean & handover", "12-month warranty", "On-call aftercare"],
  },
];

export const PROCESS = [
  { num: "01", title: "Discovery", duration: "Week 1", body: "A site visit, measurements, and a long conversation about how you live. We come away with a brief and a clear understanding of constraints." },
  { num: "02", title: "Estimation", duration: "Week 2", body: "A line-by-line proposal: scope of work, timeline, milestone payments. Itemized civil, electrical, joinery, and finishing budgets. No surprises." },
  { num: "03", title: "Concept Design", duration: "Weeks 3–6", body: "Floor plans, 3D walkthroughs, and a curated material library. Three rounds of refinement until every surface feels inevitable." },
  { num: "04", title: "Working Drawings", duration: "Weeks 7–8", body: "Detailed civil, electrical, and joinery drawings. Approvals signed, vendors locked, schedule of works finalized." },
  { num: "05", title: "Execution", duration: "Weeks 9–24", body: "On-site project management. Civil, electrical, joinery, painting — every trade orchestrated by our site supervisor with weekly client reports." },
  { num: "06", title: "Handover", duration: "Final week", body: "Snag list, deep clean, defect-free handover. We hand over the keys to a fully styled, photographed, move-in-ready home." },
];

export type Project = {
  id: string;
  slug: string;
  name: string;
  loc: string;
  year: number;
  area: string;
  bhk: "1BHK" | "2BHK" | "3BHK" | "4BHK" | "Villa";
  scope: string;
  scene: "living" | "bedroom" | "dining" | "kitchen" | "office" | "bath";
  tone: "warm" | "cool" | "dark" | "sage";
  blurb: string;
  duration: string;
};

export const PROJECTS: Project[] = [
  { id: "p1", slug: "salt-lake-2bhk", name: "Salt Lake Sanctuary", loc: "Salt Lake Sector V, Kolkata", year: 2025, area: "1,200 sq ft", bhk: "2BHK", scope: "Full home", scene: "living", tone: "warm", blurb: "A 2BHK reimagined in oak veneer, fluted panelling, and warm lime plaster.", duration: "16 weeks" },
  { id: "p2", slug: "new-town-3bhk", name: "New Town Heights", loc: "New Town, Kolkata", year: 2025, area: "1,650 sq ft", bhk: "3BHK", scope: "Full home", scene: "dining", tone: "warm", blurb: "A high-rise apartment with a single light-filled living and dining run.", duration: "22 weeks" },
  { id: "p3", slug: "ballygunge-villa", name: "Ballygunge Residence", loc: "Ballygunge, South Kolkata", year: 2024, area: "3,400 sq ft", bhk: "Villa", scope: "Gut renovation", scene: "office", tone: "warm", blurb: "An independent home shaped around a central courtyard.", duration: "38 weeks" },
  { id: "p4", slug: "rajarhat-2bhk", name: "Rajarhat Brownstone", loc: "Rajarhat, Kolkata", year: 2024, area: "1,150 sq ft", bhk: "2BHK", scope: "Gut renovation", scene: "kitchen", tone: "warm", blurb: "A complete gut and refit — new electrical, new plumbing, new soul.", duration: "20 weeks" },
  { id: "p5", slug: "alipore-3bhk", name: "Alipore Lakeside", loc: "Alipore, Kolkata", year: 2024, area: "2,200 sq ft", bhk: "3BHK", scope: "Full home", scene: "bedroom", tone: "dark", blurb: "Quiet luxury in basalt, walnut, and brushed brass.", duration: "26 weeks" },
  { id: "p6", slug: "behala-1bhk", name: "Behala Studio", loc: "Behala, Kolkata", year: 2023, area: "720 sq ft", bhk: "1BHK", scope: "Renovation", scene: "office", tone: "sage", blurb: "A compact one-bedroom turned working sanctuary.", duration: "12 weeks" },
  { id: "p7", slug: "howrah-2bhk", name: "Howrah Riverside", loc: "Howrah", year: 2023, area: "1,100 sq ft", bhk: "2BHK", scope: "Full home", scene: "living", tone: "cool", blurb: "Soft cream walls and walnut joinery facing the Hooghly.", duration: "18 weeks" },
  { id: "p8", slug: "hooghly-villa", name: "Hooghly Garden House", loc: "Chinsurah, Hooghly", year: 2023, area: "2,800 sq ft", bhk: "Villa", scope: "New build interior", scene: "dining", tone: "sage", blurb: "An old-world bungalow refit with modern utilities and original character.", duration: "32 weeks" },
];

export const TESTIMONIALS = [
  { quote: "They translated a feeling into a home. Civil, electrical, joinery — every trade was on-time and on-spec.", name: "Arjun & Priya", proj: "Salt Lake · 2 BHK" },
  { quote: "The estimation was the moment we knew. Line-by-line costs other studios wouldn't commit to in writing.", name: "Rohan I.", proj: "New Town · 3 BHK" },
  { quote: "Two years on, not one defect. The 12-month warranty was honoured to the letter.", name: "Aditi R.", proj: "Ballygunge · Villa" },
];

export const STATS = [
  { n: "120+", l: "Homes completed" },
  { n: "12mo", l: "Workmanship warranty" },
  { n: "7+ yrs", l: "In practice" },
  { n: "30+", l: "In-house craftspeople" },
];

// Pricing config for estimate calculator (₹ per sq ft)
export const PRICING = {
  essential: { rate: 1200, label: "Essential", description: "Functional design with quality basics", civil: 0.30, electrical: 0.18, joinery: 0.32, finishing: 0.20 },
  premium:   { rate: 1800, label: "Premium",   description: "Designer materials and full styling", civil: 0.28, electrical: 0.18, joinery: 0.34, finishing: 0.20 },
  luxury:    { rate: 2800, label: "Luxury",    description: "Bespoke joinery, premium imports",     civil: 0.26, electrical: 0.18, joinery: 0.36, finishing: 0.20 },
};
