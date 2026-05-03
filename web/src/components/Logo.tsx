export default function Logo({ small = false, light = false }: { small?: boolean; light?: boolean }) {
  const c = light ? "#fbf8f2" : "var(--ink)";
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: small ? 2 : 6, color: c }}>
      <svg width={small ? 22 : 28} height={small ? 22 : 28} viewBox="0 0 32 32" fill="none">
        <path d="M4 14 L16 4 L28 14 V28 H4 Z" stroke={c} strokeWidth="1.2" fill="none" />
        <path d="M13 28 V19 H19 V28" stroke={c} strokeWidth="1.2" fill="none" />
      </svg>
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 500, fontSize: small ? 14 : 17, letterSpacing: ".18em", textTransform: "uppercase", lineHeight: 1 }}>
        HDS<span style={{ color: "var(--accent)" }}>·</span>Interior
      </div>
      {!small && (
        <div style={{ fontFamily: "var(--font-body)", fontSize: 9, letterSpacing: ".32em", textTransform: "uppercase", color: light ? "rgba(251,248,242,.7)" : "var(--ink-3)", marginTop: 1 }}>
          Home Design Studio
        </div>
      )}
    </div>
  );
}
