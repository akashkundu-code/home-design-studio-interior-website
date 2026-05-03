// data.jsx — Services, Process, Portfolio, Testimonials

const SERVICES = [
  { num: '01', icon: 'C', title: 'Concept & Design',
    body: 'Floor plans, 3D visualisations, mood boards. We translate how you live into drawings you can walk through before a single wall is touched.',
    deliverables: ['Space planning', '3D walkthroughs', 'Material & finish library', 'Lighting design'] },
  { num: '02', icon: 'C', title: 'Civil Work',
    body: 'Demolition, masonry, plastering, flooring, false ceilings, waterproofing. Our in-house civil team handles every structural change to spec.',
    deliverables: ['Demolition & masonry', 'Flooring & tiling', 'False ceiling & POP', 'Waterproofing'] },
  { num: '03', icon: 'E', title: 'Electrical & MEP',
    body: 'Full electrical layout, lighting circuits, HVAC, plumbing routing. Licensed electricians, code-compliant wiring, future-proofed loads.',
    deliverables: ['Electrical layout & wiring', 'Lighting fixtures & circuits', 'HVAC & ventilation', 'Plumbing'] },
  { num: '04', icon: 'J', title: 'Joinery & Furniture',
    body: 'Bespoke modular kitchens, wardrobes, vanities, TV units. Manufactured in our partner workshop with a 7-year warranty.',
    deliverables: ['Modular kitchen', 'Wardrobes & storage', 'TV & display units', 'Loose furniture procurement'] },
  { num: '05', icon: 'F', title: 'Finishing & Styling',
    body: 'Painting, polish, soft furnishings, art curation, lighting bulbs and dimmers. The thousand last details that make a house feel like home.',
    deliverables: ['Paint & polish', 'Curtains & soft furnishings', 'Decor & art curation', 'Final styling'] },
  { num: '06', icon: 'H', title: 'Handover & Aftercare',
    body: 'Site cleaning, walkthrough, defect-free handover. A 12-month warranty on civil and joinery work, with on-call studio support.',
    deliverables: ['Snag-list resolution', 'Deep clean & handover', '12-month warranty', 'On-call aftercare'] },
];

const PROCESS = [
  { num: '01', title: 'Discovery', duration: 'Week 1',
    body: 'A site visit, measurements, and a long conversation about how you live. We come away with a brief and a clear understanding of constraints.' },
  { num: '02', title: 'Estimation', duration: 'Week 2',
    body: 'A line-by-line proposal: scope of work, timeline, milestone payments. Itemized civil, electrical, joinery, and finishing budgets. No surprises.' },
  { num: '03', title: 'Concept Design', duration: 'Weeks 3–6',
    body: 'Floor plans, 3D walkthroughs, and a curated material library. Three rounds of refinement until every surface feels inevitable.' },
  { num: '04', title: 'Working Drawings', duration: 'Weeks 7–8',
    body: 'Detailed civil, electrical, and joinery drawings. Approvals signed, vendors locked, schedule of works finalized.' },
  { num: '05', title: 'Execution', duration: 'Weeks 9–24',
    body: 'On-site project management. Civil, electrical, joinery, painting — every trade orchestrated by our site supervisor with weekly client reports.' },
  { num: '06', title: 'Handover', duration: 'Final week',
    body: 'Snag list, deep clean, defect-free handover. We hand over the keys to a fully styled, photographed, move-in-ready home.' },
];

const PROJECTS = [
  { id: 'proj-1', name: 'Skyline Heights', loc: 'Bandra West, Mumbai', year: 2025, area: '1,650 sq ft', scope: '3 BHK · Full home', scene: 'living', tone: 'warm',
    blurb: 'A high-rise apartment in oak veneer, fluted panelling, and warm lime plaster.',
    duration: '22 weeks' },
  { id: 'proj-2', name: 'The Garden Flat', loc: 'Koramangala, Bengaluru', year: 2025, area: '1,200 sq ft', scope: '2 BHK · Renovation', scene: 'dining', tone: 'cool',
    blurb: 'Opening up a 1990s plan into a single, light-filled living and dining run.',
    duration: '16 weeks' },
  { id: 'proj-3', name: 'Pavilion 7', loc: 'DLF Phase 5, Gurugram', year: 2024, area: '3,400 sq ft', scope: '4 BHK · New build', scene: 'office', tone: 'warm',
    blurb: 'A new-build home shaped around a central courtyard.',
    duration: '38 weeks' },
  { id: 'proj-4', name: 'The Brownstone', loc: 'Aundh, Pune', year: 2024, area: '1,400 sq ft', scope: '2 BHK · Gut renovation', scene: 'kitchen', tone: 'warm',
    blurb: 'A complete gut and refit — new electrical, new plumbing, new soul.',
    duration: '20 weeks' },
  { id: 'proj-5', name: 'Lakeside House', loc: 'Powai, Mumbai', year: 2024, area: '2,200 sq ft', scope: '3 BHK · Full home', scene: 'bedroom', tone: 'dark',
    blurb: 'Quiet luxury in basalt, walnut, and brushed brass.',
    duration: '26 weeks' },
  { id: 'proj-6', name: 'Studio in the Trees', loc: 'Goregaon East, Mumbai', year: 2023, area: '720 sq ft', scope: '1 BHK · Renovation', scene: 'office', tone: 'sage',
    blurb: 'A compact one-bedroom turned working sanctuary.',
    duration: '12 weeks' },
];

const TESTIMONIALS = [
  { quote: 'They translated a feeling into a home. Civil, electrical, joinery — every trade was on-time and on-spec.',
    name: 'Arjun & Priya Mehta', proj: 'Skyline Heights · 3 BHK' },
  { quote: 'The estimation was the moment we knew. Line-by-line costs other studios wouldn\'t commit to in writing.',
    name: 'Rohan Iyer', proj: 'The Garden Flat · 2 BHK' },
  { quote: 'Two years on, not one defect. The 12-month warranty was honoured to the letter.',
    name: 'Aditi Rao', proj: 'Pavilion 7 · 4 BHK' },
];

Object.assign(window, { SERVICES, PROCESS, PROJECTS, TESTIMONIALS });
