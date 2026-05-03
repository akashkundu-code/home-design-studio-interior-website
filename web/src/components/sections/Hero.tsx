import Link from "next/link";
import RoomScene from "../RoomScene";

export default function Hero() {
  return (
    <section style={{ position: "relative", height: "min(90vh, 880px)", minHeight: 600, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0 }}>
        <RoomScene kind="living" tone="warm" />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(247,243,236,.0) 0%, rgba(20,15,8,.18) 50%, rgba(20,15,8,.55) 100%)" }} />
      </div>
      <div className="container" style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", textAlign: "center", paddingBottom: 80, paddingTop: 60 }}>
        <div style={{ maxWidth: 880, color: "#fbf8f2" }}>
          <div className="kicker fadeup" style={{ color: "rgba(251,248,242,.85)", marginBottom: 28 }}>
            <span style={{ display: "inline-block", width: 28, height: 1, background: "currentColor", verticalAlign: "middle", marginRight: 12 }} />
            Concept · Civil · Electrical · Execution
          </div>
          <h1 className="display fadeup" style={{ fontSize: "clamp(56px, 8vw, 124px)", fontStyle: "italic", margin: 0, animationDelay: ".1s", color: "#fbf8f2" }}>
            Homes built<br />end to <em style={{ fontStyle: "normal" }}>end.</em>
          </h1>
          <p className="lead fadeup" style={{ color: "rgba(251,248,242,.92)", margin: "26px auto 0", fontSize: 18, animationDelay: ".18s" }}>
            Home Design Studio Interior is a single accountable team for the full interior journey — concept and 3D design, civil and electrical execution, joinery, and final styling. One contract. One studio. One move-in date.
          </p>
          <div className="fadeup" style={{ display: "flex", gap: 14, marginTop: 38, justifyContent: "center", animationDelay: ".26s", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-light">
              Book a Consultation
              <span>→</span>
            </Link>
            <Link href="/portfolio" className="btn btn-ghost" style={{ color: "#fbf8f2", borderColor: "rgba(251,248,242,.6)" }}>
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 28, left: "var(--pad-x)", right: "var(--pad-x)", display: "flex", justifyContent: "space-between", color: "rgba(251,248,242,.7)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", pointerEvents: "none" }}>
        <span>HDS · Kolkata</span>
        <span>1 BHK · 2 BHK · 3 BHK · Villas</span>
      </div>
    </section>
  );
}
