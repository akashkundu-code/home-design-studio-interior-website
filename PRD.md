# Product Requirements Document (PRD)
## Home Design Studio Interior — Company Website

**Document Version:** 1.0
**Date:** 2026-05-03
**Owner:** Akash (Freelance Developer)
**Client:** Home Design Studio Interior, Kolkata
**Status:** Draft — pending owner discovery call

---

## 1. Project Overview

### 1.1 Background
Home Design Studio Interior is a Kolkata-based interior design and execution company. The business currently relies on JustDial listings, Google Business Profile, and word-of-mouth referrals for lead generation. They have no dedicated website. The company offers end-to-end services: client consultation → estimation (by BHK type and area) → design → civil work → electrical → final handover.

### 1.2 Goals
1. Establish a credible, professional online presence that converts referral traffic into qualified leads.
2. Provide a 24/7 lead capture channel (form + WhatsApp + click-to-call).
3. Rank organically on Google for local interior design searches in Kolkata, Hooghly, and Howrah.
4. Showcase completed projects in a way that JustDial and Instagram cannot.
5. Differentiate from larger competitors (Livspace, HomeLane, Bonito Designs) through transparent pricing and process.

### 1.3 Non-Goals
- E-commerce / online product sales.
- Online payment processing (Phase 1).
- Customer login / project tracking portal (Phase 2 candidate).
- Multi-language support beyond English (Bengali toggle is Phase 2).

### 1.4 Success Metrics
| Metric | Target (3 months post-launch) | Target (6 months) |
|---|---|---|
| Organic Google traffic | 200 visits/month | 800 visits/month |
| Leads via website form | 8/month | 25/month |
| WhatsApp clicks from site | 15/month | 50/month |
| Avg. session duration | 1:30 min | 2:30 min |
| Mobile bounce rate | < 60% | < 45% |
| Google Maps profile views (uplift from site referral) | +20% | +60% |

---

## 2. Target Audience

### 2.1 Primary Persona — "The First-Time Homebuyer"
- **Age:** 28–40
- **Location:** Kolkata, Hooghly, Howrah, North 24 Parganas
- **Income:** ₹8–25 LPA household
- **Just bought:** 1BHK / 2BHK / 3BHK flat (often in a new-build society)
- **Pain points:** Doesn't know what interior work costs; afraid of being overcharged; overwhelmed by choices; needs civil + electrical + design under one roof.
- **Decision drivers:** Transparent pricing, real project photos from nearby areas, warranty, Google reviews.
- **Device:** 80% mobile.

### 2.2 Secondary Persona — "The Renovation Family"
- **Age:** 40–60
- **Owns:** 2–4 BHK flat or independent house, 10+ years old, needs gut renovation.
- **Pain points:** Coordinating multiple vendors; previous bad experience with contractors; quality concerns.
- **Decision drivers:** Single-contract simplicity, in-house teams, project timeline reliability.

### 2.3 Tertiary — "The Villa / Premium Client"
- HNI clients building or refitting independent homes, ₹50L+ project value.
- Decision drivers: Portfolio quality, principal-designer access, premium materials.

---

## 3. Business Context

### 3.1 Client Profile
- **Business Name:** Home Design Studio Interior
- **Location:** Maniktala area / North Kolkata (per JustDial; coordinates suggest Sodepur–Khardaha belt)
- **Contact Numbers:** 7439531441, 9477475405, 7059337758
- **Existing Online Presence:** Google Business Profile (category: Interior Designer), JustDial listing
- **Service Area:** Kolkata + greater Kolkata metro (Hooghly, Howrah, North/South 24 Parganas)

### 3.2 Service Offering (per client brief)
1. **Consultation** — Initial call/visit, requirement gathering.
2. **Estimation** — Pricing based on BHK type (1/2/3) and carpet area in sq ft.
3. **Design** — Concept, 3D visualisation, material selection.
4. **Execution — Civil** — Demolition, masonry, flooring, false ceiling, waterproofing.
5. **Execution — Electrical** — Wiring, lighting circuits, MEP.
6. **Joinery & Finishing** — Modular kitchens, wardrobes, paint, polish.
7. **Handover** — Final walkthrough, defect resolution, warranty.

### 3.3 Competitive Landscape
| Competitor | Strength | Gap We Exploit |
|---|---|---|
| Livspace | Brand, scale, financing | Price-inflated, less personal |
| HomeLane | Tech tools, package pricing | Limited customisation |
| Bonito Designs | Premium positioning | Premium-only, expensive |
| Local contractors | Cheap | No design, no warranty, no accountability |

**Our positioning:** *"One studio, one contract, end-to-end — without the corporate markup."*

---

## 4. Functional Requirements

### 4.1 Site Map (Phase 1)

```
/                        Home
/services                Services overview
/services/[slug]         Individual service detail (6 services)
/process                 Our 6-step process
/portfolio               Project gallery (filterable)
/portfolio/[slug]        Individual project case study
/about                   Studio / team
/estimate                Estimation calculator
/contact                 Contact + booking form
/blog                    Blog index (Phase 1.5)
/blog/[slug]             Individual blog post
```

### 4.2 Page-by-Page Requirements

#### 4.2.1 Home Page
- Hero with tagline + primary CTA ("Get Free Estimate") + secondary CTA ("View Portfolio")
- Hero background: high-res photo or video of finished project
- Trust strip: years in business, projects completed, warranty
- Services preview (6 cards linking to /services)
- "Spaces We Transform" — 1BHK / 2BHK / 3BHK / Villa cards
- Featured project spotlight
- Process snapshot (6 steps)
- Testimonials carousel
- Google Reviews embed
- Final CTA section
- WhatsApp floating button (sitewide)
- Sticky phone CTA in header

#### 4.2.2 Services Page
- Overview with 6 service tiles
- Each service expandable with: deliverables, what's included, what's not
- "Request quote for this service" CTA per service

#### 4.2.3 Process Page
- 6-phase timeline: Discovery → Estimation → Design → Drawings → Execution → Handover
- Per phase: duration, what client provides, what we deliver, payment milestone
- FAQ accordion at bottom

#### 4.2.4 Portfolio Page
- **Filters:** BHK type (1/2/3/Villa), Style (Modern/Classic/Minimal), Area (Kolkata/Hooghly/Howrah), Year
- Grid of project cards (photo + name + area + sq ft)
- Lazy-loaded images
- Click → project case study page

#### 4.2.5 Project Case Study (per project)
- Hero photo
- Project facts: location, area, BHK, duration, scope
- Before/after slider
- Photo gallery (10–20 images)
- Materials & finishes list
- Client testimonial
- "Start a similar project" CTA

#### 4.2.6 About Page
- Founder story
- Team grid (designers, site supervisors)
- Awards / certifications (if any)
- Studio photos

#### 4.2.7 Estimation Calculator ⭐ (key differentiator)
**Inputs:**
- BHK type: 1 / 2 / 3 / 4 / Villa
- Carpet area (sq ft) — slider or input
- Package tier: Essential / Premium / Luxury
- Scope: Full home / Kitchen only / Bedroom only / Civil only / Electrical only
- City (Kolkata / Hooghly / Howrah / Other)
- Contact details (name, phone, email)

**Output:**
- Instant price range (e.g. ₹6.5L–₹8.2L)
- Breakdown: Civil X% / Electrical Y% / Joinery Z% / Finishing W%
- Estimated project duration
- "Get detailed quote" CTA → captures lead

**Backend:**
- Calculation logic stored in JSON config (rates per sq ft per tier)
- Lead saved to Google Sheet + emailed to owner + WhatsApp notification

#### 4.2.8 Contact / Book Consultation
- Form fields: Name, Phone, Email, BHK type, Area (sq ft), City, Message, Preferred call time
- Phone numbers (clickable `tel:`)
- WhatsApp deep link
- Google Maps embed (Maniktala location)
- Office hours
- Form submissions → email + Google Sheet + auto-reply

### 4.3 Sitewide Components
- **Header:** Logo, nav, phone CTA, "Book Consultation" button
- **Footer:** Logo, quick links, services, contact, social, newsletter
- **WhatsApp FAB:** Bottom-right, opens `wa.me/91XXXXX` with prefilled message
- **Cookie banner** (basic, GDPR-lite)
- **404 page** with back-to-home CTA

### 4.4 Lead Capture & Routing
- All forms route to:
  1. Email to owner (all 3 numbers' associated emails — TBD)
  2. Google Sheet (master lead log)
  3. WhatsApp notification (via free service like CallMeBot or paid Twilio)
  4. Auto-reply email to lead with brochure PDF

---

## 5. Non-Functional Requirements

### 5.1 Performance
- Lighthouse score ≥ 90 on mobile (Performance, SEO, Accessibility, Best Practices)
- Largest Contentful Paint < 2.5s on 4G
- Total page weight < 1.5MB on home page
- All images served via Next.js Image (auto WebP/AVIF, responsive sizes)

### 5.2 SEO
- Server-side rendered pages (Next.js SSR/SSG)
- Per-page meta title + description
- Schema.org markup: `LocalBusiness`, `InteriorDesigner`, `Service`, `Review`
- XML sitemap auto-generated
- robots.txt
- Open Graph + Twitter Card tags for shareability
- Target keywords (Phase 1):
  - "interior designer in Kolkata"
  - "2 BHK interior design Kolkata"
  - "modular kitchen Kolkata"
  - "home interior cost Kolkata"
  - "interior designer Maniktala / Hooghly / Howrah"

### 5.3 Accessibility
- WCAG 2.1 AA compliance (best effort)
- Alt text on all images
- Keyboard navigable
- Color contrast ratios met
- Form labels properly associated

### 5.4 Browser Support
- Chrome, Safari, Edge, Firefox (last 2 versions)
- iOS Safari 14+, Chrome Android (last 2 versions)

### 5.5 Security
- HTTPS only (Vercel default)
- Form submissions: rate-limited, honeypot/captcha (hCaptcha)
- No sensitive data stored client-side
- Environment variables for API keys

### 5.6 Hosting & Domain
- **Hosting:** Vercel (free tier sufficient for Phase 1)
- **Domain:** `homedesignstudio.in` or `hdsinterior.in` (~₹800/yr)
- **Email:** Zoho Mail (free tier) or Google Workspace (₹125/user/mo)
- **CDN:** Vercel Edge Network (built-in)

---

## 6. Technical Specifications

### 6.1 Tech Stack
| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js 14+ (App Router) | SSR for SEO, image optimization, file-based routing |
| Language | TypeScript | Type safety, better DX |
| Styling | Tailwind CSS | Fast dev, design system consistency |
| UI Components | shadcn/ui | Accessible, customisable, no lock-in |
| CMS | Sanity.io (free tier) | Owner can edit projects/blog without code |
| Forms | React Hook Form + Zod | Validation, accessibility |
| Form Backend | Resend (email) + Google Sheets API | Free tiers, reliable |
| Analytics | Plausible (paid, ₹500/mo) or GA4 (free) | Privacy-friendly preferred |
| Hosting | Vercel | Zero-config Next.js deployment |
| Image hosting | Sanity CDN | Auto-optimized, no separate setup |
| Fonts | Google Fonts: Cormorant Garamond + Inter | Already in prototype, premium feel |

### 6.2 Repository Structure (planned)
```
/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx              # Home
│   │   ├── services/
│   │   ├── process/
│   │   ├── portfolio/
│   │   ├── about/
│   │   ├── estimate/
│   │   ├── contact/
│   │   └── blog/
│   ├── api/
│   │   ├── lead/route.ts         # Lead form handler
│   │   └── estimate/route.ts     # Calculator handler
│   └── layout.tsx
├── components/
│   ├── ui/                       # shadcn components
│   ├── sections/                 # Page sections
│   └── shared/                   # Header, Footer, WhatsAppFAB
├── lib/
│   ├── sanity.ts                 # CMS client
│   ├── leads.ts                  # Lead routing
│   └── pricing.ts                # Estimate calc logic
├── sanity/                       # Sanity studio + schemas
└── public/                       # Static assets
```

### 6.3 Third-Party Integrations
- Google Maps Embed API (location)
- Google Reviews (via Place ID)
- WhatsApp Business deep links
- Resend (transactional email)
- Google Sheets API (lead log)
- Sanity (CMS)
- Vercel Analytics

---

## 7. Content Requirements (from Client)

The owner must provide before development can complete:

### 7.1 Brand Assets
- [ ] Logo (vector preferred, or high-res PNG)
- [ ] Brand colors (or approval to use prototype palette: warm cream/oak/clay)
- [ ] Tagline / mission statement

### 7.2 Photos
- [ ] 20–40 high-res project photos (min 1920px wide)
- [ ] Before/after pairs for at least 5 projects
- [ ] Studio / office photos
- [ ] Team headshots (if About page includes team)
- [ ] Owner photo for founder section

### 7.3 Project Data (per project, min 8 projects)
- [ ] Project name + location (area in Kolkata)
- [ ] Year completed
- [ ] BHK type, carpet area in sq ft
- [ ] Scope (full home / partial)
- [ ] Duration (weeks)
- [ ] 10–20 photos
- [ ] Client name (with permission to display)
- [ ] Client testimonial

### 7.4 Service Details
- [ ] Confirmation of 6 services (or revised list)
- [ ] What's included / excluded per service
- [ ] Warranty terms (if any) in writing

### 7.5 Pricing Inputs (for calculator)
- [ ] Per sq ft rate for Essential package (e.g. ₹1,200/sq ft)
- [ ] Per sq ft rate for Premium package (e.g. ₹1,800/sq ft)
- [ ] Per sq ft rate for Luxury package (e.g. ₹2,500/sq ft)
- [ ] What each package includes
- [ ] Civil / Electrical / Joinery / Finishing percentage breakdown

### 7.6 Company Info
- [ ] Year founded
- [ ] Number of completed projects (real)
- [ ] Team size
- [ ] Office address (full)
- [ ] Office hours
- [ ] GSTIN, registration details (for footer credibility)

### 7.7 Testimonials
- [ ] 5–10 written client testimonials with name + project reference + photo (optional)

### 7.8 Legal
- [ ] Privacy policy content (or budget for lawyer-drafted version)
- [ ] Terms & conditions
- [ ] Refund / cancellation policy if applicable

---

## 8. Project Phases & Timeline

### Phase 0: Discovery (Week 1)
- Owner discovery call
- Content collection kickoff
- Domain registration
- Brand asset review
- Final scope sign-off

### Phase 1: Design & Build (Weeks 2–4)
- Wireframes → owner approval
- Visual design (use prototype as base)
- Next.js scaffolding
- Sanity schema setup
- Build all pages (sans dynamic content)
- Estimation calculator development
- Form integrations

### Phase 2: Content & QA (Week 5)
- Owner uploads project content via Sanity
- Copy editing
- Cross-browser testing
- Mobile testing on real devices
- Lighthouse + accessibility audit
- Lead routing end-to-end test

### Phase 3: Launch (Week 6)
- Domain DNS configuration
- Vercel production deploy
- Google Search Console + Sitemap submission
- Google Business Profile linkage to website
- Soft launch + monitoring

### Phase 4: Post-Launch (Ongoing)
- SEO content (1 blog post/month minimum)
- Review monitoring
- Analytics review (monthly)
- Phase 2 features evaluation

**Total Timeline:** 6 weeks from kickoff to launch.

---

## 9. Pricing & Commercials

### 9.1 Suggested Quote to Client (Freelance, Kolkata Market)
| Tier | Scope | Price Range (INR) |
|---|---|---|
| **Basic** | WordPress + Elementor, 6 pages, no calculator, basic SEO | ₹15,000 – ₹25,000 |
| **Standard** ⭐ Recommended | Next.js custom, 8 pages, estimation calculator, CMS, lead routing | ₹40,000 – ₹65,000 |
| **Premium** | Standard + custom illustrations, blog, advanced SEO, 3 months support | ₹75,000 – ₹1,20,000 |

### 9.2 Recurring Costs (Client's responsibility)
| Item | Annual Cost (INR) |
|---|---|
| Domain | ₹800 |
| Email (Zoho free or Google Workspace) | ₹0 – ₹1,500 |
| Sanity CMS (free tier) | ₹0 |
| Vercel hosting (free tier) | ₹0 |
| Optional: Plausible analytics | ₹6,000 |
| Optional: Maintenance retainer | ₹3,000–₹5,000/mo |

### 9.3 Payment Milestones (Standard tier example)
- 30% on signed agreement (kickoff)
- 30% on design approval
- 30% on staging deploy with all content
- 10% on go-live

---

## 10. Risks & Mitigation

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Owner delays content collection | High | High | Set hard deadlines per asset type; lock scope to what's delivered by D-day |
| Owner doesn't have high-quality photos | High | High | Budget ₹8–15k for half-day professional shoot of 3–5 completed homes |
| Scope creep ("can you also add...") | High | Medium | Written scope doc; change requests billed separately |
| Calculator pricing logic disputed by owner | Medium | Medium | Get pricing config in writing before build |
| SEO results slow (3–6 mo realistic) | High | Low | Set expectations upfront; pair with paid Google Ads for fast traction |
| Owner can't manage CMS | Medium | Low | Record video walkthrough; offer ₹3k/mo content-update retainer |
| Domain typosquatting / IP concerns | Low | Low | Register .in + .com; trademark name if budget allows |

---

## 11. Open Questions (to resolve in discovery call)

1. Confirm exact business address and service area boundary.
2. Which of the 3 phone numbers is primary for WhatsApp Business?
3. Owner's email address for lead routing?
4. Does the owner have an Instagram / Facebook page to link?
5. Existing project photos — what's available, what's missing?
6. Budget range owner is comfortable with?
7. Is there a partner/co-founder who also needs to approve?
8. Preferred launch date / any seasonal urgency?
9. Will the owner write blog posts, or do they want them outsourced?
10. Real stats: years in business, projects completed, team size?
11. Pricing per sq ft for each tier — confirmed numbers?
12. Are testimonials available with client photo + permission?
13. Bengali language version — Phase 1 or Phase 2?
14. Do they want a separate Trade / B2B page (for builders, real estate)?

---

## 12. Approval

| Role | Name | Sign-off Date |
|---|---|---|
| Developer | Akash | _______________ |
| Client (Owner) | _______________ | _______________ |

---

*End of Document*
