export default function Marquee() {
  const items = ["Concept Design", "Civil Work", "Electrical & MEP", "Modular Joinery", "Painting & Polish", "Final Styling", "12-Month Warranty"];
  return (
    <section style={{ borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "22px 0", background: "var(--bg)", overflow: "hidden" }}>
      <div style={{ display: "flex", gap: 64, whiteSpace: "nowrap", animation: "mq 42s linear infinite" }}>
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 22, color: "var(--ink-2)", display: "flex", alignItems: "center", gap: 64 }}>
            {t}
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)" }} />
          </span>
        ))}
      </div>
    </section>
  );
}
