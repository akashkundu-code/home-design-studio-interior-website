import Link from "next/link";
import { SERVICES } from "@/lib/data";
import RoomScene from "@/components/RoomScene";
import CTABand from "@/components/sections/CTABand";
import FAQ from "@/components/sections/FAQ";

export const metadata = { title: "Services — Home Design Studio Interior" };

const tones = ["warm", "cool", "sage", "warm", "cool", "sage"] as const;
const kinds = ["living", "kitchen", "office", "bedroom", "dining", "bath"] as const;

export default function ServicesPage() {
  return (
    <main>
      <section style={{ paddingTop: 120, paddingBottom: 60 }}>
        <div className="container">
          <div className="kicker" style={{ marginBottom: 24 }}>— Services</div>
          <h1 className="display" style={{ fontSize: "clamp(56px, 7vw, 112px)", margin: 0, lineHeight: 1, marginBottom: 40, maxWidth: "14ch" }}>
            Concept to <em style={{ color: "var(--accent-2)" }}>execution.</em>
          </h1>
          <p className="lead" style={{ fontSize: 19, maxWidth: "64ch" }}>
            Six in-house disciplines under one accountable studio. We design the home, demolish the walls, run the wires, build the wardrobes, and hand you the keys — on a single contract.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 60 }}>
        <div className="container">
          {SERVICES.map((s, i) => {
            const reverse = i % 2 === 1;
            const idx = Number(s.num) - 1;
            return (
              <div key={s.num} className="grid-2" style={{ display: "grid", gridTemplateColumns: reverse ? "1fr 1.1fr" : "1.1fr 1fr", gap: 80, alignItems: "center", borderTop: "1px solid var(--line)", padding: "80px 0" }}>
                <div style={{ order: reverse ? 2 : 1 }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 18, marginBottom: 22 }}>
                    <span className="display" style={{ fontSize: 86, color: "var(--accent)", lineHeight: 1, fontStyle: "italic" }}>{s.num}</span>
                    <div className="kicker">In-house team</div>
                  </div>
                  <h2 className="display" style={{ fontSize: "clamp(40px, 4.6vw, 64px)", margin: 0, marginBottom: 22 }}>{s.title}</h2>
                  <p style={{ color: "var(--ink-2)", fontSize: 16, lineHeight: 1.65, marginBottom: 30, maxWidth: "52ch" }}>{s.body}</p>
                  <div style={{ borderTop: "1px solid var(--line)", paddingTop: 22 }}>
                    <div className="kicker" style={{ marginBottom: 14 }}>Includes</div>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                      {s.deliverables.map((d) => (
                        <li key={d} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 14, color: "var(--ink-2)" }}>
                          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--accent)" }} />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div style={{ order: reverse ? 1 : 2, aspectRatio: "4/5" }}>
                  <RoomScene kind={kinds[idx] || "living"} tone={tones[idx]} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <PricingTiers />
      <FAQ />
      <CTABand />
    </main>
  );
}

function PricingTiers() {
  const tiers = [
    { name: "1 BHK", from: "₹6.5 L", desc: "A complete 1 BHK turnkey — civil, electrical, modular kitchen, wardrobes, painting, and styling.", items: ["Full design + 3D walkthroughs", "Civil + electrical execution", "Modular kitchen & wardrobes", "12-month warranty"], featured: false },
    { name: "2 BHK", from: "₹11 L", desc: "Our most-loved engagement size. A complete 2 BHK delivered start to finish.", items: ["Full design + working drawings", "Civil + electrical + plumbing", "Modular joinery throughout", "Final styling & handover"], featured: true },
    { name: "3 BHK & Villas", from: "On request", desc: "Larger homes with bespoke joinery, smart-home wiring, and structural changes.", items: ["Architectural co-ordination", "Bespoke joinery program", "Smart-home & MEP", "Lifetime studio access"], featured: false },
  ];
  return (
    <section style={{ background: "var(--bg-2)", paddingTop: "var(--section-pad)", paddingBottom: "var(--section-pad)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 70 }}>
          <div className="kicker" style={{ marginBottom: 14 }}>— Engagement</div>
          <h2 className="display" style={{ fontSize: "clamp(36px, 4.6vw, 60px)", margin: 0 }}>
            Three ways to <em>begin.</em>
          </h2>
          <p className="lead" style={{ margin: "20px auto 0", textAlign: "center" }}>
            Indicative starting investment for turnkey delivery. Final scope confirmed after a free site visit and consultation.
          </p>
        </div>
        <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {tiers.map((t) => (
            <div key={t.name} style={{ background: t.featured ? "var(--ink)" : "var(--paper)", color: t.featured ? "var(--paper)" : "var(--ink)", padding: "50px 36px", border: "1px solid " + (t.featured ? "var(--ink)" : "var(--line)"), display: "flex", flexDirection: "column" }}>
              <div className="kicker" style={{ color: t.featured ? "rgba(251,248,242,.6)" : "var(--ink-3)", marginBottom: 16 }}>{t.name}</div>
              <div className="display" style={{ fontSize: 56, lineHeight: 1, marginBottom: 12, color: t.featured ? "var(--accent)" : "var(--ink)" }}>{t.from}</div>
              <div style={{ fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", color: t.featured ? "rgba(251,248,242,.5)" : "var(--ink-3)", marginBottom: 28 }}>Starting · turnkey</div>
              <p style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 30, color: t.featured ? "rgba(251,248,242,.85)" : "var(--ink-2)" }}>{t.desc}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12, marginBottom: 32, flex: 1 }}>
                {t.items.map((i) => (
                  <li key={i} style={{ display: "flex", gap: 10, fontSize: 13, color: t.featured ? "rgba(251,248,242,.85)" : "var(--ink-2)", paddingBottom: 12, borderBottom: "1px solid " + (t.featured ? "rgba(251,248,242,.12)" : "var(--line)") }}>
                    <span style={{ color: "var(--accent)" }}>—</span> {i}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className={t.featured ? "btn btn-accent" : "btn btn-ghost"} style={{ justifyContent: "center" }}>
                Book a Consultation
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
