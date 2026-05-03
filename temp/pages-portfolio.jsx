// pages-portfolio.jsx — Portfolio page

function PortfolioPage({ setPage }) {
  const [filter, setFilter] = React.useState('All');
  const filters = ['All', 'Full home', 'Renovation', 'New build', 'Gut renovation'];
  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.scope.includes(filter));
  return (
    <div className="page">
      <section style={{ paddingTop: 120, paddingBottom: 60 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'end' }}>
            <div>
              <div className="kicker" style={{ marginBottom: 24 }}>— Portfolio · 120+ homes completed</div>
              <h1 className="display" style={{ fontSize: 'clamp(56px, 7vw, 112px)', margin: 0, lineHeight: 1 }}>
                Our <em>work.</em>
              </h1>
            </div>
            <p className="lead" style={{ fontSize: 18 }}>
              A selection of recent projects across Mumbai, Bengaluru, Pune
              and the NCR. Each represents a long engagement — from first
              estimation to final styling.
            </p>
          </div>
          <div style={{ display: 'flex', gap: 6, marginTop: 50, borderBottom: '1px solid var(--line)' }}>
            {filters.map(f => (
              <button key={f} onClick={() => setFilter(f)} style={{
                background: 'none', border: 0, padding: '14px 18px', cursor: 'pointer',
                fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase',
                color: filter === f ? 'var(--ink)' : 'var(--ink-3)',
                borderBottom: filter === f ? '1px solid var(--accent-2)' : '1px solid transparent',
                marginBottom: -1, fontWeight: 500,
              }}>{f}</button>
            ))}
          </div>
        </div>
      </section>
      <section style={{ paddingBottom: 'var(--section-pad)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 40 }}>
            {filtered.map((p, i) => (
              <div key={p.id} style={{ gridColumn: i % 3 === 0 ? 'span 2' : 'span 1' }}>
                <ProjectCard p={p} large={i % 3 === 0} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABand setPage={setPage} />
    </div>
  );
}

function ProjectCard({ p, large }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ cursor: 'pointer' }}>
      <div style={{ aspectRatio: large ? '21/9' : '4/5', overflow: 'hidden', marginBottom: 22 }}>
        <div style={{ width: '100%', height: '100%', transition: 'transform .9s ease', transform: hover ? 'scale(1.04)' : 'scale(1)' }}>
          <RoomScene kind={p.scene} tone={p.tone} />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 30 }}>
        <div>
          <div className="display" style={{ fontSize: large ? 38 : 26 }}>{p.name}</div>
          <div style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 4 }}>{p.loc} · {p.year}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div className="kicker">{p.scope}</div>
          <div style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 4 }}>{p.area} · {p.duration}</div>
        </div>
      </div>
      {large && <p style={{ color: 'var(--ink-2)', fontSize: 16, marginTop: 18, maxWidth: '60ch' }}>{p.blurb}</p>}
    </div>
  );
}

Object.assign(window, { PortfolioPage });
