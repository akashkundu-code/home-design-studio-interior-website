import Link from "next/link";
import RoomScene from "../RoomScene";
import { PROJECTS } from "@/lib/data";

export default function ProjectSpotlight() {
  const proj = PROJECTS[0];
  return (
    <section style={{ background: "var(--bg-3)", paddingTop: "var(--section-pad)", paddingBottom: "var(--section-pad)" }}>
      <div className="container">
        <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 70, alignItems: "center" }}>
          <div style={{ aspectRatio: "5/4" }}>
            <RoomScene kind={proj.scene} tone={proj.tone} />
          </div>
          <div>
            <div className="kicker" style={{ marginBottom: 18 }}>— Featured project · {proj.year}</div>
            <h2 className="display" style={{ fontSize: "clamp(36px, 4.4vw, 56px)", margin: "0 0 16px" }}>{proj.name}</h2>
            <div style={{ display: "flex", gap: 18, fontSize: 13, color: "var(--ink-3)", marginBottom: 22, flexWrap: "wrap" }}>
              <span>{proj.loc}</span><span>·</span>
              <span>{proj.area}</span><span>·</span>
              <span>{proj.scope}</span><span>·</span>
              <span>{proj.duration}</span>
            </div>
            <p className="lead" style={{ marginBottom: 28 }}>
              {proj.blurb} A {proj.duration} engagement covering full civil, electrical rewiring, modular joinery, and styled handover.
            </p>
            <Link href="/portfolio" className="btn btn-ghost">See the Project</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
