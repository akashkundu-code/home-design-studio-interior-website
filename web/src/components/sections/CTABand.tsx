import Link from "next/link";

export default function CTABand() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ background: "var(--bg-2)", border: "1px solid var(--line)", padding: "90px var(--pad-x)", textAlign: "center" }}>
          <div className="kicker" style={{ marginBottom: 18 }}>— Begin</div>
          <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 72px)", margin: 0, marginBottom: 18 }}>A home, well made.</h2>
          <p className="lead" style={{ margin: "0 auto 36px", textAlign: "center" }}>
            Schedule a free 30-minute consultation. Tell us about your home — 1 BHK, 2 BHK, 3 BHK, or villa — and we&apos;ll come back with a clear scope and ballpark within a week.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-primary">Book a Consultation →</Link>
            <Link href="/estimate" className="btn btn-ghost">Get Instant Estimate</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
