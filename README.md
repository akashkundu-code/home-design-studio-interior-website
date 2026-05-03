# Home Design Studio Interior — Website

A modern, professional website for **Home Design Studio Interior**, a Kolkata-based interior design and execution company. Built with Next.js 16, React 19, and Tailwind CSS 4.

**Live:** [homedesignstudio.in](https://homedesignstudio.in) (coming soon)

---

## Features

### Core Pages
- **Home** — Hero section, service teaser, room showcase, portfolio spotlight, process overview, testimonials
- **Services** — 6 in-house disciplines with pricing tiers (₹6.5L / ₹11L / On request)
- **Process** — 6-phase project timeline with sticky sidebar (14–18 weeks typical)
- **Portfolio** — Project gallery with BHK filters (1BHK / 2BHK / 3BHK+)
- **About** — Studio story, team info, key stats
- **Estimate** — Live pricing calculator (BHK + sqft → price range)
- **Contact** — 3-step booking wizard with date/time picker

### Lead Capture
- **Booking Form** — Captures project requirements and client info
- **WhatsApp FAB** — Floating action button with click-to-chat (wa.me link)
- **Click-to-Call** — Sticky header with 3 phone numbers (owner's contacts)
- **Lead API** — POST endpoint logs to console + `.leads.jsonl` for dev

### Design
- **Design System** — CSS custom properties for color, spacing, typography
- **Fonts** — Cormorant Garamond (display), Inter (body), JetBrains Mono (labels)
- **Responsive** — Mobile-first, breakpoints at 900px / 600px
- **Accessibility** — Semantic HTML, ARIA labels, keyboard navigation

### Services & Pricing
| BHK Type | Starting Price | Includes |
|---|---|---|
| 1 BHK | ₹6.5 L | Design, Civil, Electrical, Modular Kitchen, Wardrobes, Painting |
| 2 BHK | ₹11 L | Full design, Civil, Electrical, Plumbing, Joinery, Styling |
| 3 BHK+ | On Request | Architectural coordination, Bespoke joinery, Smart-home, Lifetime support |

---

## Getting Started

### Prerequisites
- Node.js 20+
- npm or yarn

### Installation

```bash
cd web
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
cd web
npm run build
npm start
```

---

## Project Structure

```
.
├── web/                          # Next.js 16 app (App Router)
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx          # Home page
│   │   │   ├── services/page.tsx # Services + pricing + FAQ
│   │   │   ├── process/page.tsx  # 6-phase process timeline
│   │   │   ├── portfolio/page.tsx # Project gallery with filters
│   │   │   ├── about/page.tsx    # Studio story + stats
│   │   │   ├── estimate/page.tsx # Pricing calculator
│   │   │   ├── contact/page.tsx  # 3-step booking wizard
│   │   │   ├── api/lead/route.ts # Lead capture endpoint
│   │   │   ├── layout.tsx        # Root layout, fonts
│   │   │   └── globals.css       # Design tokens, utilities
│   │   ├── components/
│   │   │   ├── Header.tsx        # Sticky header, CTA
│   │   │   ├── Footer.tsx        # 4-column footer
│   │   │   ├── WhatsAppFAB.tsx   # Floating action button
│   │   │   ├── RoomScene.tsx     # SVG room placeholders
│   │   │   └── sections/         # Home page sections
│   │   └── lib/
│   │       └── data.ts           # SITE config, SERVICES, PROCESS, PROJECTS, etc.
│   ├── package.json
│   ├── next.config.ts
│   └── tsconfig.json
├── PRD.md                        # Product requirements document
└── README.md                     # This file
```

---

## Configuration

### Content & Branding

Edit `web/src/lib/data.ts` to customize:
- **SITE** — Phone numbers, hours, address, service area
- **SERVICES** — 6 disciplines with descriptions and deliverables
- **PROCESS** — 6 phases with duration and details
- **PROJECTS** — Portfolio items (title, BHK, sqft, location, etc.)
- **TESTIMONIALS** — Client quotes
- **STATS** — Key numbers (projects, years, team size, etc.)

### Design Tokens

Edit `web/src/app/globals.css` CSS custom properties:
- `--bg` / `--bg-2` / `--bg-3` — Background colors
- `--ink` / `--ink-2` / `--ink-3` — Text colors
- `--accent` / `--accent-2` / `--accent-tint` — Brand colors
- `--paper` — Card/input background
- `--line` — Dividers
- `--font-display` / `--font-body` / `--font-mono` — Typography

---

## Development

### Run Dev Server
```bash
cd web
npm run dev
```

### Type Check
```bash
cd web
npm run check
```

### Deploy to Vercel

1. Connect repo to [Vercel](https://vercel.com)
2. Set root to `./web`
3. Deploy

```bash
npm install -g vercel
vercel --cwd web
```

---

## Lead Capture

### Development
Leads are logged to console and saved to `web/.leads.jsonl`:
```json
{ "source": "booking", "name": "...", "email": "...", "phone": "...", "type": "2 BHK", ... }
```

### Production
Wire `/api/lead` to:
- **Email**: [Resend](https://resend.com) API
- **Spreadsheet**: Google Sheets API
- **CRM**: Custom integration

See `web/src/app/api/lead/route.ts` for implementation.

---

## Roadmap

### Phase 1 ✅ (Done)
- [ ] 7 pages + booking wizard
- [ ] Lead capture (console + JSON)
- [ ] Design system & responsive layout
- [ ] Portfolio gallery with filters

### Phase 2 (Next)
- [ ] Real project photos (replace SVG placeholders)
- [ ] Portfolio detail pages (`/portfolio/[slug]`)
- [ ] Email integration (Resend)
- [ ] Google Sheets sync
- [ ] Domain registration (homedesignstudio.in)

### Phase 3 (Post-Launch)
- [ ] SEO optimization & schema markup
- [ ] Blog (case studies, design tips)
- [ ] Before/after image slider
- [ ] Theme switcher (Warm / Earthy / Moody)
- [ ] Bengali language toggle

---

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) (App Router)
- **UI**: [React 19](https://react.dev)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Fonts**: Google Fonts (Cormorant Garamond, Inter, JetBrains Mono)
- **Icons**: Inline SVG
- **Deploy**: [Vercel](https://vercel.com)

---

## Contact

**Home Design Studio Interior**
- **Phone**: +91 7439531441, +91 9477475405, +91 7059337758
- **WhatsApp**: +91 7439531441
- **Email**: [inquiry@homedesignstudio.in](mailto:inquiry@homedesignstudio.in)
- **Address**: Kolkata, India
- **Service Area**: Kolkata, Hooghly, Howrah, North 24 Parganas

---

## License

This project is proprietary. All rights reserved.

---

**Built by Akash** | Freelance Developer | Claude Code
