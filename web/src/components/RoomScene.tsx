// SVG room placeholder — to be replaced with real photos later

type Tone = "warm" | "cool" | "dark" | "sage";
type Kind = "living" | "bedroom" | "dining" | "kitchen" | "office" | "bath";

const palettes: Record<Tone, Record<string, string>> = {
  warm: { wall: "#efe1c8", floor: "#b8956a", floor2: "#9a7a52", accent: "#7a5a38", soft: "#dfc9a6", shade: "#caa97c" },
  cool: { wall: "#e6dfd1", floor: "#a99a82", floor2: "#8a7d68", accent: "#5d5443", soft: "#cfc5b1", shade: "#b3a48a" },
  dark: { wall: "#322a1f", floor: "#1f1a13", floor2: "#15110a", accent: "#c39568", soft: "#3e3324", shade: "#2a2317" },
  sage: { wall: "#d8d8c4", floor: "#aab19a", floor2: "#8b9078", accent: "#5e6651", soft: "#c2c8b0", shade: "#9da487" },
};

export default function RoomScene({ kind = "living", tone = "warm" }: { kind?: Kind; tone?: Tone }) {
  const p = palettes[tone];
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%", display: "block" }}>
      <rect x="0" y="0" width="400" height="200" fill={p.wall} />
      <rect x="0" y="200" width="400" height="100" fill={p.floor} />
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1="0" y1={210 + i * 22} x2="400" y2={210 + i * 22} stroke={p.floor2} strokeWidth=".6" opacity=".55" />
      ))}
      <rect x="38" y="32" width="120" height="130" fill={p.soft} opacity=".7" stroke={p.shade} strokeWidth=".6" />
      <line x1="98" y1="32" x2="98" y2="162" stroke={p.shade} strokeWidth=".6" />
      <line x1="38" y1="97" x2="158" y2="97" stroke={p.shade} strokeWidth=".6" />

      {kind === "living" && (
        <g>
          <rect x="190" y="180" width="170" height="50" rx="8" fill={p.soft} />
          <rect x="190" y="170" width="170" height="20" rx="6" fill={p.soft} stroke={p.shade} strokeWidth=".4" />
          <rect x="200" y="155" width="40" height="22" rx="4" fill={p.shade} opacity=".55" />
          <rect x="245" y="155" width="40" height="22" rx="4" fill={p.shade} opacity=".55" />
          <ellipse cx="120" cy="240" rx="55" ry="10" fill={p.accent} opacity=".85" />
          <rect x="115" y="240" width="10" height="22" fill={p.accent} />
          <rect x="35" y="218" width="22" height="28" rx="3" fill={p.accent} opacity=".7" />
          <path d="M46 218 Q40 200 34 195 M46 218 Q52 200 58 196 M46 218 Q46 198 46 188" stroke={p.accent} strokeWidth="1" fill="none" opacity=".7" />
        </g>
      )}
      {kind === "bedroom" && (
        <g>
          <rect x="60" y="190" width="240" height="80" rx="6" fill={p.soft} />
          <rect x="60" y="170" width="240" height="32" rx="4" fill={p.shade} />
          <rect x="80" y="178" width="60" height="20" rx="3" fill={p.soft} opacity=".95" />
          <rect x="220" y="178" width="60" height="20" rx="3" fill={p.soft} opacity=".95" />
          <rect x="320" y="220" width="50" height="50" fill={p.accent} />
          <circle cx="345" cy="200" r="10" fill={p.soft} />
          <rect x="343" y="208" width="4" height="12" fill={p.accent} />
        </g>
      )}
      {kind === "dining" && (
        <g>
          <ellipse cx="220" cy="245" rx="120" ry="22" fill={p.accent} />
          <rect x="215" y="245" width="10" height="35" fill={p.accent} />
          {[110, 180, 250, 320].map((x, i) => (
            <g key={i}>
              <rect x={x - 12} y="220" width="24" height="6" fill={p.shade} />
              <rect x={x - 12} y="226" width="24" height="35" fill={p.soft} />
              <line x1={x - 10} y1="261" x2={x - 10} y2="278" stroke={p.shade} strokeWidth="1.2" />
              <line x1={x + 10} y1="261" x2={x + 10} y2="278" stroke={p.shade} strokeWidth="1.2" />
            </g>
          ))}
          <line x1="220" y1="0" x2="220" y2="60" stroke={p.shade} strokeWidth=".6" />
          <ellipse cx="220" cy="68" rx="22" ry="8" fill={p.accent} opacity=".9" />
        </g>
      )}
      {kind === "office" && (
        <g>
          <rect x="100" y="200" width="200" height="10" fill={p.accent} />
          <rect x="108" y="210" width="6" height="60" fill={p.accent} />
          <rect x="286" y="210" width="6" height="60" fill={p.accent} />
          <rect x="180" y="230" width="40" height="6" fill={p.shade} />
          <rect x="190" y="200" width="20" height="34" fill={p.soft} />
          <circle cx="265" cy="190" r="10" fill={p.soft} />
          <line x1="265" y1="200" x2="265" y2="210" stroke={p.shade} strokeWidth="1.4" />
          <rect x="115" y="180" width="6" height="20" fill={p.shade} />
          <rect x="123" y="184" width="6" height="16" fill={p.accent} />
          <rect x="131" y="178" width="6" height="22" fill={p.soft} />
        </g>
      )}
      {kind === "kitchen" && (
        <g>
          <rect x="40" y="200" width="320" height="14" fill={p.shade} />
          <rect x="40" y="214" width="320" height="56" fill={p.accent} opacity=".7" />
          <rect x="220" y="60" width="140" height="60" fill={p.accent} opacity=".55" />
          <line x1="290" y1="60" x2="290" y2="120" stroke={p.shade} strokeWidth=".6" />
          {[120, 180, 240, 300].map((x, i) => (
            <g key={i}>
              <rect x={x - 10} y="220" width="20" height="6" fill={p.shade} />
              <line x1={x - 7} y1="226" x2={x - 7} y2="280" stroke={p.shade} strokeWidth="1.4" />
              <line x1={x + 7} y1="226" x2={x + 7} y2="280" stroke={p.shade} strokeWidth="1.4" />
            </g>
          ))}
        </g>
      )}
      {kind === "bath" && (
        <g>
          <rect x="50" y="200" width="200" height="60" rx="20" fill={p.soft} />
          <rect x="60" y="208" width="180" height="44" rx="14" fill={p.wall} opacity=".5" />
          <rect x="155" y="180" width="3" height="22" fill={p.shade} />
          <rect x="148" y="180" width="17" height="3" fill={p.shade} />
          <rect x="290" y="180" width="60" height="3" fill={p.shade} />
          <rect x="295" y="183" width="22" height="40" fill={p.soft} />
          <rect x="320" y="183" width="22" height="40" fill={p.soft} opacity=".7" />
        </g>
      )}

      <rect x="0" y="0" width="400" height="300" fill="url(#g1)" opacity=".5" />
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".25" />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
