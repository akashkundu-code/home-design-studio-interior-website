import { PROCESS } from "@/lib/data";
import CTABand from "@/components/sections/CTABand";

export const metadata = { title: "Our Process — Home Design Studio Interior" };

export default function ProcessPage() {
  return (
    <main>
      <section style={{ paddingTop: 120, paddingBottom: 60 }}>
        <div className="container">
          <div className="kicker" style={{ marginBottom: 24 }}>— The process</div>
          <h1 className="display" style={{ fontSize: "clamp(56px, 7vw, 112px)", margin: 0, lineHeight: 1, marginBottom: 40, maxWidth: "14ch" }}>
            How a home <em style={{ color: "var(--accent-2)" }}>gets built.</em>
          </h1>
          <p className="lead" style={{ fontSize: 19, maxWidth: "64ch" }}>
            A predictable six-phase journey. Free discovery and estimation — you only commit at the design phase, with milestone payments tied to site progress.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 60 }}>
            <aside style={{ position: "sticky", top: 110, alignSelf: "start" }}>
              <div className="kicker" style={{ marginBottom: 14 }}>Total timeline</div>
              <div className="display" style={{ fontSize: 64, color: "var(--accent-2)", lineHeight: 1 }}>14–18</div>
              <div style={{ fontSize: 13, color: "var(--ink-3)", marginTop: 6 }}>weeks for a typical 2 BHK</div>
              <div style={{ marginTop: 36, padding: "20px 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
                <div className="kicker" style={{ marginBottom: 8 }}>Free until</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 24 }}>Phase 03 · Design</div>
                <p style={{ fontSize: 13, color: "var(--ink-3)", marginTop: 8 }}>
                  Discovery and estimation are complimentary. You commit only when the design phase begins.
                </p>
              </div>
            </aside>
            <div>
              {PROCESS.map((p, i) => (
                <div key={p.num} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 40, paddingBottom: 60, marginBottom: 60, borderBottom: i === PROCESS.length - 1 ? "none" : "1px solid var(--line)" }}>
                  <div>
                    <div className="display" style={{ fontSize: 56, color: "var(--accent)", lineHeight: 1, fontStyle: "italic" }}>{p.num}</div>
                  </div>
                  <div>
                    <div className="kicker" style={{ marginBottom: 8, color: "var(--accent-2)" }}>{p.duration}</div>
                    <h3 className="display" style={{ fontSize: "clamp(30px, 3.4vw, 44px)", margin: 0, marginBottom: 14 }}>{p.title}</h3>
                    <p style={{ color: "var(--ink-2)", fontSize: 16, lineHeight: 1.65, margin: 0, maxWidth: "54ch" }}>{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </main>
  );
}
