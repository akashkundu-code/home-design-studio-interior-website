// shell.jsx — Logo, Nav, Footer, RoomScene SVG placeholder

const { useState, useEffect, useRef } = React;

// ───────── Logo / Wordmark ─────────
function Logo({ small = false, light = false }) {
  const c = light ? '#fbf8f2' : 'var(--ink)';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: small ? 2 : 6, color: c }}>
      <svg width={small ? 22 : 28} height={small ? 22 : 28} viewBox="0 0 32 32" fill="none">
        <path d="M4 14 L16 4 L28 14 V28 H4 Z" stroke={c} strokeWidth="1.2" fill="none"/>
        <path d="M13 28 V19 H19 V28" stroke={c} strokeWidth="1.2" fill="none"/>
      </svg>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontSize: small ? 14 : 17,
        letterSpacing: '.18em',
        textTransform: 'uppercase',
        lineHeight: 1,
      }}>
        HDS<span style={{ color: 'var(--accent)' }}>·</span>Interior
      </div>
      {!small && (
        <div style={{
          fontFamily: 'var(--font-body)',
          fontSize: 9,
          letterSpacing: '.32em',
          textTransform: 'uppercase',
          color: light ? 'rgba(251,248,242,.7)' : 'var(--ink-3)',
          marginTop: 1,
        }}>
          Home Design Studio
        </div>
      )}
    </div>
  );
}

// ───────── Top Nav ─────────
function TopNav({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const left = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
  ];
  const right = [
    { id: 'process', label: 'Process' },
    { id: 'about', label: 'Studio' },
  ];

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: scrolled ? 'rgba(247,243,236,.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px) saturate(140%)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(12px) saturate(140%)' : 'none',
      borderBottom: scrolled ? '1px solid var(--line)' : '1px solid transparent',
      transition: 'background .3s ease, border-color .3s ease',
    }}>
      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        height: 76,
      }}>
        <nav style={{ display: 'flex', gap: 28 }}>
          {left.map(l => (
            <button key={l.id} onClick={() => setPage(l.id)}
              style={navLinkStyle(page === l.id)}>
              {l.label}
            </button>
          ))}
        </nav>
        <button onClick={() => setPage('home')} style={{ background: 'none', border: 0, cursor: 'pointer', padding: 0 }}>
          <Logo />
        </button>
        <nav style={{ display: 'flex', gap: 28, justifyContent: 'flex-end', alignItems: 'center' }}>
          {right.map(l => (
            <button key={l.id} onClick={() => setPage(l.id)}
              style={navLinkStyle(page === l.id)}>
              {l.label}
            </button>
          ))}
          <button className="btn btn-primary btn-sm" onClick={() => setPage('book')}
            style={{ marginLeft: 4 }}>
            Book Consultation
          </button>
        </nav>
      </div>
    </header>
  );
}

function navLinkStyle(active) {
  return {
    background: 'none', border: 0, cursor: 'pointer',
    fontFamily: 'var(--font-body)',
    fontSize: 11.5, letterSpacing: '.18em', textTransform: 'uppercase',
    color: active ? 'var(--accent-2)' : 'var(--ink-2)',
    fontWeight: 500,
    padding: '8px 0',
    borderBottom: active ? '1px solid var(--accent-2)' : '1px solid transparent',
    transition: 'color .2s, border-color .2s',
  };
}

// ───────── Footer ─────────
function Footer({ setPage }) {
  return (
    <footer style={{
      background: 'var(--bg-2)',
      borderTop: '1px solid var(--line)',
      paddingTop: 80, paddingBottom: 40, marginTop: 80,
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
          gap: 60,
          paddingBottom: 60,
        }}>
          <div>
            <Logo />
            <p style={{ color: 'var(--ink-3)', maxWidth: '32ch', marginTop: 22, fontSize: 14 }}>
              From estimation to execution. A full-service interior design studio crafting
              considered homes for those who live deliberately.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
              {['IG', 'PT', 'BH'].map(s => (
                <a key={s} href="#" style={{
                  width: 36, height: 36, borderRadius: '50%',
                  border: '1px solid var(--line)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 10, letterSpacing: '.1em', color: 'var(--ink-2)',
                }}>{s}</a>
              ))}
            </div>
          </div>
          <FooterCol title="Studio" items={[
            { l: 'Our Approach', p: 'about' },
            { l: 'Services', p: 'services' },
            { l: 'Process', p: 'process' },
            { l: 'Portfolio', p: 'portfolio' },
          ]} setPage={setPage} />
          <FooterCol title="Services" items={[
            { l: 'Concept Design', p: 'services' },
            { l: 'Civil & Structural', p: 'services' },
            { l: 'Electrical & MEP', p: 'services' },
            { l: 'Execution & Handover', p: 'services' },
          ]} setPage={setPage} />
          <div>
            <div style={{
              fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase',
              color: 'var(--ink-3)', marginBottom: 18,
            }}>Newsletter</div>
            <p style={{ color: 'var(--ink-2)', fontSize: 14, marginBottom: 16 }}>
              Quarterly notes on craft, sourcing, and projects. No noise.
            </p>
            <div style={{ display: 'flex', borderBottom: '1px solid var(--ink)' }}>
              <input className="field" placeholder="your@email.com"
                style={{ border: 0, padding: '0 0 8px 0', height: 40, background: 'transparent' }} />
              <button style={{
                background: 'none', border: 0, padding: '0 0 8px 0',
                fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase',
                color: 'var(--ink)', cursor: 'pointer', fontWeight: 500,
              }}>Subscribe →</button>
            </div>
          </div>
        </div>
        <div style={{
          borderTop: '1px solid var(--line)',
          paddingTop: 30,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontSize: 12, color: 'var(--ink-3)', letterSpacing: '.04em',
        }}>
          <div>© 2026 Home Design Studio Interior. All rights reserved.</div>
          <div style={{ display: 'flex', gap: 28 }}>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Trade Program</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items, setPage }) {
  return (
    <div>
      <div style={{
        fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase',
        color: 'var(--ink-3)', marginBottom: 18,
      }}>{title}</div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map((it, i) => (
          <li key={i}>
            <button onClick={() => setPage(it.p)} style={{
              background: 'none', border: 0, padding: 0, cursor: 'pointer',
              color: 'var(--ink)', fontSize: 14, fontFamily: 'inherit',
            }}>{it.l}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ───────── Room Scene (SVG placeholder, looks like styled rooms) ─────────
// Simple geometric "scenes" to evoke rooms without ever attempting realistic SVG illustration.
function RoomScene({ kind = 'living', tone = 'warm' }) {
  // Color palette per tone
  const palettes = {
    warm: { wall: '#efe1c8', floor: '#b8956a', floor2: '#9a7a52', accent: '#7a5a38', soft: '#dfc9a6', shade: '#caa97c' },
    cool: { wall: '#e6dfd1', floor: '#a99a82', floor2: '#8a7d68', accent: '#5d5443', soft: '#cfc5b1', shade: '#b3a48a' },
    dark: { wall: '#322a1f', floor: '#1f1a13', floor2: '#15110a', accent: '#c39568', soft: '#3e3324', shade: '#2a2317' },
    sage: { wall: '#d8d8c4', floor: '#aab19a', floor2: '#8b9078', accent: '#5e6651', soft: '#c2c8b0', shade: '#9da487' },
  };
  const p = palettes[tone] || palettes.warm;

  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice"
         style={{ width: '100%', height: '100%', display: 'block' }}>
      {/* wall */}
      <rect x="0" y="0" width="400" height="200" fill={p.wall} />
      {/* floor */}
      <rect x="0" y="200" width="400" height="100" fill={p.floor} />
      {/* floor planks */}
      {[0,1,2,3].map(i => (
        <line key={i} x1="0" y1={210 + i * 22} x2="400" y2={210 + i * 22}
          stroke={p.floor2} strokeWidth=".6" opacity=".55"/>
      ))}
      {/* window */}
      <rect x="38" y="32" width="120" height="130" fill={p.soft} opacity=".7" stroke={p.shade} strokeWidth=".6"/>
      <line x1="98" y1="32" x2="98" y2="162" stroke={p.shade} strokeWidth=".6"/>
      <line x1="38" y1="97" x2="158" y2="97" stroke={p.shade} strokeWidth=".6"/>

      {kind === 'living' && (
        <g>
          {/* sofa */}
          <rect x="190" y="180" width="170" height="50" rx="8" fill={p.soft}/>
          <rect x="190" y="170" width="170" height="20" rx="6" fill={p.soft} stroke={p.shade} strokeWidth=".4"/>
          <rect x="200" y="155" width="40" height="22" rx="4" fill={p.shade} opacity=".55"/>
          <rect x="245" y="155" width="40" height="22" rx="4" fill={p.shade} opacity=".55"/>
          {/* coffee table */}
          <ellipse cx="120" cy="240" rx="55" ry="10" fill={p.accent} opacity=".85"/>
          <rect x="115" y="240" width="10" height="22" fill={p.accent}/>
          {/* plant */}
          <rect x="35" y="218" width="22" height="28" rx="3" fill={p.accent} opacity=".7"/>
          <path d="M46 218 Q40 200 34 195 M46 218 Q52 200 58 196 M46 218 Q46 198 46 188"
            stroke={p.accent} strokeWidth="1" fill="none" opacity=".7"/>
        </g>
      )}
      {kind === 'bedroom' && (
        <g>
          {/* bed */}
          <rect x="60" y="190" width="240" height="80" rx="6" fill={p.soft}/>
          <rect x="60" y="170" width="240" height="32" rx="4" fill={p.shade}/>
          <rect x="80" y="178" width="60" height="20" rx="3" fill={p.soft} opacity=".95"/>
          <rect x="220" y="178" width="60" height="20" rx="3" fill={p.soft} opacity=".95"/>
          {/* bedside */}
          <rect x="320" y="220" width="50" height="50" fill={p.accent}/>
          <circle cx="345" cy="200" r="10" fill={p.soft}/>
          <rect x="343" y="208" width="4" height="12" fill={p.accent}/>
        </g>
      )}
      {kind === 'dining' && (
        <g>
          {/* table */}
          <ellipse cx="220" cy="245" rx="120" ry="22" fill={p.accent}/>
          <rect x="215" y="245" width="10" height="35" fill={p.accent}/>
          {/* chairs */}
          {[110, 180, 250, 320].map((x,i)=>(
            <g key={i}>
              <rect x={x-12} y="220" width="24" height="6" fill={p.shade}/>
              <rect x={x-12} y="226" width="24" height="35" fill={p.soft}/>
              <line x1={x-10} y1="261" x2={x-10} y2="278" stroke={p.shade} strokeWidth="1.2"/>
              <line x1={x+10} y1="261" x2={x+10} y2="278" stroke={p.shade} strokeWidth="1.2"/>
            </g>
          ))}
          {/* pendant */}
          <line x1="220" y1="0" x2="220" y2="60" stroke={p.shade} strokeWidth=".6"/>
          <ellipse cx="220" cy="68" rx="22" ry="8" fill={p.accent} opacity=".9"/>
        </g>
      )}
      {kind === 'office' && (
        <g>
          {/* desk */}
          <rect x="100" y="200" width="200" height="10" fill={p.accent}/>
          <rect x="108" y="210" width="6" height="60" fill={p.accent}/>
          <rect x="286" y="210" width="6" height="60" fill={p.accent}/>
          {/* chair */}
          <rect x="180" y="230" width="40" height="6" fill={p.shade}/>
          <rect x="190" y="200" width="20" height="34" fill={p.soft}/>
          {/* lamp */}
          <circle cx="265" cy="190" r="10" fill={p.soft}/>
          <line x1="265" y1="200" x2="265" y2="210" stroke={p.shade} strokeWidth="1.4"/>
          {/* books */}
          <rect x="115" y="180" width="6" height="20" fill={p.shade}/>
          <rect x="123" y="184" width="6" height="16" fill={p.accent}/>
          <rect x="131" y="178" width="6" height="22" fill={p.soft}/>
        </g>
      )}
      {kind === 'kitchen' && (
        <g>
          {/* counter */}
          <rect x="40" y="200" width="320" height="14" fill={p.shade}/>
          <rect x="40" y="214" width="320" height="56" fill={p.accent} opacity=".7"/>
          {/* upper cabinets */}
          <rect x="220" y="60" width="140" height="60" fill={p.accent} opacity=".55"/>
          <line x1="290" y1="60" x2="290" y2="120" stroke={p.shade} strokeWidth=".6"/>
          {/* stools */}
          {[120, 180, 240, 300].map((x,i) => (
            <g key={i}>
              <rect x={x-10} y="220" width="20" height="6" fill={p.shade}/>
              <line x1={x-7} y1="226" x2={x-7} y2="280" stroke={p.shade} strokeWidth="1.4"/>
              <line x1={x+7} y1="226" x2={x+7} y2="280" stroke={p.shade} strokeWidth="1.4"/>
            </g>
          ))}
        </g>
      )}
      {kind === 'bath' && (
        <g>
          {/* tub */}
          <rect x="50" y="200" width="200" height="60" rx="20" fill={p.soft}/>
          <rect x="60" y="208" width="180" height="44" rx="14" fill={p.wall} opacity=".5"/>
          {/* tap */}
          <rect x="155" y="180" width="3" height="22" fill={p.shade}/>
          <rect x="148" y="180" width="17" height="3" fill={p.shade}/>
          {/* towel rack */}
          <rect x="290" y="180" width="60" height="3" fill={p.shade}/>
          <rect x="295" y="183" width="22" height="40" fill={p.soft}/>
          <rect x="320" y="183" width="22" height="40" fill={p.soft} opacity=".7"/>
        </g>
      )}

      {/* light overlay (window light) */}
      <rect x="0" y="0" width="400" height="300" fill="url(#g1)" opacity=".5"/>
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".25"/>
          <stop offset="1" stopColor="#000" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

Object.assign(window, { Logo, TopNav, Footer, RoomScene });
