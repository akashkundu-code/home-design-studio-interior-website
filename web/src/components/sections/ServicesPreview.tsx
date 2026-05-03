import Link from "next/link";
import { SERVICES } from "@/lib/data";

export default function ServicesPreview() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "end", marginBottom: 60 }}>
          <div>
            <div className="kicker" style={{ marginBottom: 18 }}>— What we do</div>
            <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: 0 }}>
              Concept to <em style={{ color: "var(--accent-2)" }}>execution.</em>
            </h2>
          </div>
          <div>
            <p className="lead">
              Six in-house disciplines under a single accountable studio. We don&apos;t subcontract the work that matters — civil, electrical, and joinery are run by our own teams.
            </p>
            <Link href="/services" className="btn-link" style={{ marginTop: 20 }}>All Services →</Link>
          </div>
        </div>
        <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "var(--line)", border: "1px solid var(--line)" }}>
          {SERVICES.map((s) => (
            <Link key={s.num} href="/services" style={{ background: "var(--bg)", padding: "36px 32px", minHeight: 240, transition: "background .3s", textDecoration: "none", display: "block", color: "inherit" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24 }}>
                <span className="kicker">{s.num}</span>
                <span className="kicker" style={{ color: "var(--accent-2)" }}>In-house</span>
              </div>
              <h3 className="display" style={{ fontSize: 30, margin: 0, marginBottom: 14 }}>{s.title}</h3>
              <p style={{ color: "var(--ink-2)", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{s.body.slice(0, 130)}…</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
