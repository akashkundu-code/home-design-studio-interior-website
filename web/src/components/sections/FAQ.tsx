"use client";
import { useState } from "react";

const faqs = [
  { q: "Do you handle civil and electrical work yourselves?", a: "Yes — civil and electrical are run by our in-house teams, not subcontractors. Our site supervisor coordinates every trade and is on site daily." },
  { q: "How does the estimation process work?", a: "After a free site visit, we deliver a line-item proposal within seven days: scope, schedule, milestone payments, and itemized civil, electrical, joinery, and finishing budgets. Estimation is free." },
  { q: "How long does a typical 2 BHK take?", a: "A 2 BHK turnkey runs 14–18 weeks from kickoff to handover. 1 BHK runs 10–12 weeks. 3 BHK and villas run 22–30+ weeks depending on scope." },
  { q: "What is your warranty?", a: "12 months on civil, electrical, and joinery. We resolve any defect on a single call. Modular furniture carries a 7-year warranty from our manufacturing partner." },
  { q: "Do you take on smaller jobs — one room only?", a: "We focus on whole-home projects (1 BHK and up). For single rooms, our minimum engagement is concept-only design with handover to your contractor." },
  { q: "How are payments structured?", a: "Five milestone payments tied to site progress: signing, design sign-off, civil completion, joinery installation, and handover. No advance lump-sums." },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section">
      <div className="container">
        <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80 }}>
          <div>
            <div className="kicker" style={{ marginBottom: 18 }}>— FAQ</div>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4.4vw, 56px)", margin: 0 }}>
              Common <em>questions.</em>
            </h2>
          </div>
          <div>
            {faqs.map((f, i) => (
              <div key={i} style={{ borderTop: i === 0 ? "1px solid var(--line)" : "none", borderBottom: "1px solid var(--line)" }}>
                <button onClick={() => setOpen(open === i ? -1 : i)} style={{ width: "100%", textAlign: "left", background: "none", border: 0, padding: "24px 0", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, fontFamily: "var(--font-display)", fontSize: 22, color: "var(--ink)" }}>
                  {f.q}
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--accent-2)", transition: "transform .3s", transform: open === i ? "rotate(45deg)" : "rotate(0)" }}>+</span>
                </button>
                <div style={{ maxHeight: open === i ? 240 : 0, overflow: "hidden", transition: "max-height .4s ease, opacity .3s", opacity: open === i ? 1 : 0 }}>
                  <p style={{ color: "var(--ink-2)", fontSize: 15, lineHeight: 1.65, padding: "0 0 24px", margin: 0, maxWidth: "60ch" }}>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
