import RoomScene from "@/components/RoomScene";
import CTABand from "@/components/sections/CTABand";
import { STATS, SITE } from "@/lib/data";

export const metadata = { title: "Studio — Home Design Studio Interior" };

export default function AboutPage() {
  return (
    <main>
      <section style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 1080 }}>
          <div className="kicker" style={{ marginBottom: 24 }}>— The studio</div>
          <h1 className="display" style={{ fontSize: "clamp(56px, 7vw, 112px)", margin: 0, lineHeight: 1 }}>
            One team for the<br />whole project.
          </h1>
        </div>
      </section>
      <section style={{ paddingBottom: 100 }}>
        <div className="container">
          <div style={{ aspectRatio: "21/9", marginBottom: 70 }}>
            <RoomScene kind="living" tone="warm" />
          </div>
          <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80 }}>
            <div className="kicker">Our principles</div>
            <div>
              <p className="display" style={{ fontSize: "clamp(28px, 3vw, 40px)", lineHeight: 1.25, fontStyle: "italic", margin: 0, marginBottom: 32 }}>
                {SITE.name} was founded on a simple conviction: a home is best built by one team that owns every trade — from the first sketch to the last switch plate.
              </p>
              <p style={{ color: "var(--ink-2)", fontSize: 16, marginBottom: 20 }}>
                We are a Kolkata-based studio working across the city and greater metro — Hooghly, Howrah, North and South 24 Parganas. Designers, civil supervisors, electricians, joiners, painters — all in-house. We take on a careful number of projects each year, each led by a principal designer and a dedicated site supervisor.
              </p>
              <p style={{ color: "var(--ink-2)", fontSize: 16 }}>
                Our schedules are honest. Our milestone payments are tied to site progress. Our 12-month warranty covers civil, electrical, and joinery — and is honoured to the letter.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: "var(--bg-2)", paddingTop: 100, paddingBottom: 100 }}>
        <div className="container">
          <div className="kicker" style={{ marginBottom: 18 }}>— By the numbers</div>
          <h2 className="display" style={{ fontSize: "clamp(36px, 4.4vw, 56px)", margin: 0, marginBottom: 60 }}>
            Track record over <em>seven years.</em>
          </h2>
          <div className="grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {STATS.map((s) => (
              <div key={s.l} style={{ borderTop: "1px solid var(--line)", paddingTop: 24 }}>
                <div className="display" style={{ fontSize: 56, color: "var(--accent-2)" }}>{s.n}</div>
                <div style={{ fontSize: 13, color: "var(--ink-3)", letterSpacing: ".04em", marginTop: 8 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </main>
  );
}
