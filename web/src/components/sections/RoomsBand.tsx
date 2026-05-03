import RoomScene from "../RoomScene";

const rooms = [
  { name: "1 BHK", sub: "Compact homes", scene: "living" as const, tone: "warm" as const },
  { name: "2 BHK", sub: "The most loved size", scene: "bedroom" as const, tone: "warm" as const },
  { name: "3 BHK", sub: "Family homes", scene: "dining" as const, tone: "cool" as const },
  { name: "Villas", sub: "Large independent homes", scene: "kitchen" as const, tone: "sage" as const },
];

export default function RoomsBand() {
  return (
    <section style={{ background: "var(--bg-2)", paddingTop: "var(--section-pad)", paddingBottom: "var(--section-pad)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="kicker" style={{ marginBottom: 14 }}>— Spaces we transform</div>
          <h2 className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)", margin: 0 }}>
            From 1 BHK to <em>villas.</em>
          </h2>
        </div>
        <div className="grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }}>
          {rooms.map((c) => (
            <div key={c.name} className="hover-card" style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ aspectRatio: "4/5", overflow: "hidden" }}>
                <div style={{ width: "100%", height: "100%" }} className="zoom">
                  <RoomScene kind={c.scene} tone={c.tone} />
                </div>
              </div>
              <div>
                <div className="display" style={{ fontSize: 28 }}>{c.name}</div>
                <div className="kicker" style={{ marginTop: 4 }}>{c.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
