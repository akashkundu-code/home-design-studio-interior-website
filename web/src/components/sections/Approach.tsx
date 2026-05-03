import { STATS } from "@/lib/data";

export default function Approach() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 90 }}>
          <div>
            <div className="kicker" style={{ marginBottom: 18 }}>— Our approach</div>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4.4vw, 60px)", margin: 0 }}>
              One studio.<br />One <em>contract.</em>
            </h2>
          </div>
          <div>
            <p className="lead" style={{ marginBottom: 22 }}>
              We deliver homes on a single fixed-fee contract that covers concept, civil, electrical, joinery, and finishing. No multiple vendors. No co-ordination headaches. No surprise costs.
            </p>
            <p style={{ color: "var(--ink-2)", fontSize: 15, marginBottom: 40 }}>
              Every project moves through six predictable phases — discovery, estimation, design, working drawings, execution, and handover — led by one principal designer and one site supervisor who is accountable from day one to handover.
            </p>
            <div className="grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, borderTop: "1px solid var(--line)", paddingTop: 32 }}>
              {STATS.map((s) => (
                <div key={s.l}>
                  <div className="display" style={{ fontSize: 38, color: "var(--accent-2)" }}>{s.n}</div>
                  <div style={{ fontSize: 12, color: "var(--ink-3)", letterSpacing: ".04em", marginTop: 4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
