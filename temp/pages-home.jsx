// pages-home.jsx — Home / About pages

const { useState: useStateHome, useEffect: useEffectHome } = React;

function HomePage({ setPage, heroVariant }) {
  return (
    <div className="page">
      <Hero setPage={setPage} variant={heroVariant} />
      <Marquee />
      <ServicesPreview setPage={setPage} />
      <RoomsBand />
      <ProjectSpotlight setPage={setPage} />
      <Approach />
      <TestimonialBand />
      <CTABand setPage={setPage} />
    </div>
  );
}

function Hero({ setPage, variant = 'fullbleed' }) {
  return (
    <section style={{ position: 'relative', height: 'min(90vh, 880px)', minHeight: 600, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <RoomScene kind="living" tone="warm" />
        <div style={{
          position: 'absolute', inset: 0,
          background: variant === 'fullbleed'
            ? 'linear-gradient(180deg, rgba(247,243,236,.0) 0%, rgba(20,15,8,.18) 50%, rgba(20,15,8,.55) 100%)'
            : 'linear-gradient(90deg, rgba(247,243,236,.85) 0%, rgba(247,243,236,.4) 45%, rgba(247,243,236,0) 70%)',
        }} />
      </div>
      <div className="container" style={{
        position: 'relative', height: '100%',
        display: 'flex', flexDirection: 'column',
        justifyContent: variant === 'split' ? 'center' : 'flex-end',
        alignItems: variant === 'split' ? 'flex-start' : 'center',
        textAlign: variant === 'split' ? 'left' : 'center',
        paddingBottom: variant === 'fullbleed' ? 80 : 0,
        paddingTop: 60,
      }}>
        <div style={{
          maxWidth: variant === 'split' ? 620 : 880,
          color: variant === 'fullbleed' ? '#fbf8f2' : 'var(--ink)',
        }}>
          <div className="kicker fadeup" style={{
            color: variant === 'fullbleed' ? 'rgba(251,248,242,.85)' : 'var(--ink-3)',
            marginBottom: 28,
          }}>
            <span style={{ display: 'inline-block', width: 28, height: 1, background: 'currentColor', verticalAlign: 'middle', marginRight: 12 }} />
            Concept · Civil · Electrical · Execution
          </div>
          <h1 className="display fadeup" style={{
            fontSize: 'clamp(56px, 8vw, 124px)',
            fontStyle: 'italic',
            margin: 0,
            animationDelay: '.1s',
          }}>
            Homes built<br/>end to <em style={{ fontStyle: 'normal' }}>end.</em>
          </h1>
          <p className="lead fadeup" style={{
            color: variant === 'fullbleed' ? 'rgba(251,248,242,.92)' : 'var(--ink-2)',
            margin: variant === 'split' ? '26px 0 0 0' : '26px auto 0',
            fontSize: 18,
            animationDelay: '.18s',
          }}>
            Home Design Studio Interior is a single accountable team for the full
            interior journey — concept and 3D design, civil and electrical
            execution, joinery, and final styling. One contract. One studio.
            One move-in date.
          </p>
          <div className="fadeup" style={{
            display: 'flex', gap: 14,
            marginTop: 38, justifyContent: variant === 'split' ? 'flex-start' : 'center',
            animationDelay: '.26s', flexWrap: 'wrap',
          }}>
            <button className="btn btn-light" onClick={() => setPage('book')}>
              Book a Consultation
              <span>→</span>
            </button>
            <button className="btn btn-ghost" onClick={() => setPage('portfolio')}
              style={variant === 'fullbleed' ? { color: '#fbf8f2', borderColor: 'rgba(251,248,242,.6)' } : {}}>
              View Portfolio
            </button>
          </div>
        </div>
      </div>
      <div style={{
        position: 'absolute', bottom: 28, left: 'var(--pad-x)', right: 'var(--pad-x)',
        display: 'flex', justifyContent: 'space-between',
        color: variant === 'fullbleed' ? 'rgba(251,248,242,.7)' : 'var(--ink-3)',
        fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase',
        pointerEvents: 'none',
      }}>
        <span>HDS · Est. 2018</span>
        <span>1 BHK · 2 BHK · 3 BHK · Villas</span>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ['Concept Design', 'Civil Work', 'Electrical & MEP', 'Modular Joinery', 'Painting & Polish', 'Final Styling', '12-Month Warranty'];
  return (
    <section style={{
      borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)',
      padding: '22px 0', background: 'var(--bg)', overflow: 'hidden',
    }}>
      <div style={{ display: 'flex', gap: 64, whiteSpace: 'nowrap', animation: 'mq 42s linear infinite' }}>
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} style={{
            fontFamily: 'var(--font-display)', fontStyle: 'italic',
            fontSize: 22, color: 'var(--ink-2)',
            display: 'flex', alignItems: 'center', gap: 64,
          }}>
            {t}
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)' }} />
          </span>
        ))}
      </div>
      <style>{`@keyframes mq { from { transform: translateX(0) } to { transform: translateX(-33.33%) } }`}</style>
    </section>
  );
}

function ServicesPreview({ setPage }) {
  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'end', marginBottom: 60 }}>
          <div>
            <div className="kicker" style={{ marginBottom: 18 }}>— What we do</div>
            <h2 className="display" style={{ fontSize: 'clamp(40px, 5vw, 72px)', margin: 0 }}>
              Concept to <em style={{ color: 'var(--accent-2)' }}>execution.</em>
            </h2>
          </div>
          <div>
            <p className="lead">
              Six in-house disciplines under a single accountable studio.
              We don't subcontract the work that matters — civil, electrical,
              and joinery are run by our own teams.
            </p>
            <button className="btn-link" onClick={() => setPage('services')} style={{ marginTop: 20 }}>
              All Services →
            </button>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1, background: 'var(--line)', border: '1px solid var(--line)' }}>
          {SERVICES.map((s) => (
            <div key={s.num}
              onClick={() => setPage('services')}
              style={{
                background: 'var(--bg)', padding: '36px 32px', minHeight: 240,
                transition: 'background .3s', cursor: 'pointer',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--paper)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--bg)'}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
                <span className="kicker">{s.num}</span>
                <span className="kicker" style={{ color: 'var(--accent-2)' }}>In-house</span>
              </div>
              <h3 className="display" style={{ fontSize: 30, margin: 0, marginBottom: 14 }}>{s.title}</h3>
              <p style={{ color: 'var(--ink-2)', fontSize: 14, lineHeight: 1.6, margin: 0 }}>{s.body.slice(0, 130)}…</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RoomsBand() {
  const rooms = [
    { name: '1 BHK', sub: 'Compact homes', scene: 'living', tone: 'warm' },
    { name: '2 BHK', sub: 'The most loved size', scene: 'bedroom', tone: 'warm' },
    { name: '3 BHK', sub: 'Family homes', scene: 'dining', tone: 'cool' },
    { name: 'Villas', sub: 'Large independent homes', scene: 'kitchen', tone: 'sage' },
  ];
  return (
    <section style={{ background: 'var(--bg-2)', paddingTop: 'var(--section-pad)', paddingBottom: 'var(--section-pad)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="kicker" style={{ marginBottom: 14 }}>— Spaces we transform</div>
          <h2 className="display" style={{ fontSize: 'clamp(40px, 5vw, 64px)', margin: 0 }}>
            From 1 BHK to <em>villas.</em>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
          {rooms.map((c) => (
            <div key={c.name} className="hover-card"
              style={{ display: 'flex', flexDirection: 'column', gap: 18, cursor: 'default' }}>
              <div style={{ aspectRatio: '4/5', overflow: 'hidden' }}>
                <div style={{ width: '100%', height: '100%', transition: 'transform .8s ease' }} className="zoom">
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
      <style>{`.hover-card:hover .zoom { transform: scale(1.05) }`}</style>
    </section>
  );
}

function ProjectSpotlight({ setPage }) {
  const proj = PROJECTS[0];
  return (
    <section style={{ background: 'var(--bg-3)', paddingTop: 'var(--section-pad)', paddingBottom: 'var(--section-pad)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 70, alignItems: 'center' }}>
          <div style={{ aspectRatio: '5/4' }}>
            <RoomScene kind={proj.scene} tone={proj.tone} />
          </div>
          <div>
            <div className="kicker" style={{ marginBottom: 18 }}>— Featured project · {proj.year}</div>
            <h2 className="display" style={{ fontSize: 'clamp(36px, 4.4vw, 56px)', margin: '0 0 16px' }}>
              {proj.name}
            </h2>
            <div style={{ display: 'flex', gap: 18, fontSize: 13, color: 'var(--ink-3)', marginBottom: 22, flexWrap: 'wrap' }}>
              <span>{proj.loc}</span><span>·</span>
              <span>{proj.area}</span><span>·</span>
              <span>{proj.scope}</span><span>·</span>
              <span>{proj.duration}</span>
            </div>
            <p className="lead" style={{ marginBottom: 28 }}>
              {proj.blurb} A 22-week engagement covering full civil, electrical
              rewiring, modular joinery, and styled handover.
            </p>
            <button className="btn btn-ghost" onClick={() => setPage('portfolio')}>
              See the Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Approach() {
  const stats = [
    { n: '120+', l: 'Homes completed' },
    { n: '12mo', l: 'Workmanship warranty' },
    { n: '6 yrs', l: 'In practice' },
    { n: '38', l: 'In-house craftspeople' },
  ];
  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 90 }}>
          <div>
            <div className="kicker" style={{ marginBottom: 18 }}>— Our approach</div>
            <h2 className="display" style={{ fontSize: 'clamp(36px, 4.4vw, 60px)', margin: 0 }}>
              One studio.<br/>One <em>contract.</em>
            </h2>
          </div>
          <div>
            <p className="lead" style={{ marginBottom: 22 }}>
              We deliver homes on a single fixed-fee contract that covers concept,
              civil, electrical, joinery, and finishing. No multiple vendors. No
              co-ordination headaches. No surprise costs.
            </p>
            <p style={{ color: 'var(--ink-2)', fontSize: 15, marginBottom: 40 }}>
              Every project moves through six predictable phases — discovery,
              estimation, design, working drawings, execution, and handover —
              led by one principal designer and one site supervisor who is
              accountable from day one to handover.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, borderTop: '1px solid var(--line)', paddingTop: 32 }}>
              {stats.map(s => (
                <div key={s.l}>
                  <div className="display" style={{ fontSize: 38, color: 'var(--accent-2)' }}>{s.n}</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-3)', letterSpacing: '.04em', marginTop: 4 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialBand() {
  const [idx, setIdx] = useStateHome(0);
  useEffectHome(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);
  const t = TESTIMONIALS[idx];
  return (
    <section style={{ background: 'var(--ink)', color: 'var(--paper)', paddingTop: 120, paddingBottom: 120 }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: 920, margin: '0 auto' }}>
        <div style={{
          fontFamily: 'var(--font-display)', fontStyle: 'italic',
          fontSize: 64, color: 'var(--accent)', lineHeight: .6, marginBottom: 24,
        }}>"</div>
        <p key={idx} className="display fadeup" style={{
          fontSize: 'clamp(26px, 3vw, 40px)',
          fontStyle: 'italic', lineHeight: 1.25, margin: 0, color: 'var(--paper)',
        }}>
          {t.quote}
        </p>
        <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 32, height: 1, background: 'rgba(251,248,242,.4)' }} />
          <div style={{ fontSize: 13, letterSpacing: '.04em' }}>{t.name}</div>
          <div className="kicker" style={{ color: 'rgba(251,248,242,.5)' }}>{t.proj}</div>
        </div>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 36 }}>
          {TESTIMONIALS.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} style={{
              width: 24, height: 2, border: 0, padding: 0, cursor: 'pointer',
              background: i === idx ? 'var(--accent)' : 'rgba(251,248,242,.2)',
              transition: 'background .3s',
            }} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABand({ setPage }) {
  return (
    <section className="section">
      <div className="container">
        <div style={{
          background: 'var(--bg-2)',
          border: '1px solid var(--line)',
          padding: '90px var(--pad-x)',
          textAlign: 'center',
        }}>
          <div className="kicker" style={{ marginBottom: 18 }}>— Begin</div>
          <h2 className="display" style={{ fontSize: 'clamp(40px, 5vw, 72px)', margin: 0, marginBottom: 18 }}>
            A home, well made.
          </h2>
          <p className="lead" style={{ margin: '0 auto 36px', textAlign: 'center' }}>
            Schedule a free 30-minute consultation. Tell us about your home —
            1 BHK, 2 BHK, 3 BHK, or villa — and we'll come back with a clear
            scope and ballpark within a week.
          </p>
          <button className="btn btn-primary" onClick={() => setPage('book')}>
            Book a Consultation →
          </button>
        </div>
      </div>
    </section>
  );
}

// ─────── About / Studio page ───────
function AboutPage({ setPage }) {
  const team = [
    { name: 'Iris Halden', role: 'Principal · Founder', tone: 'warm' },
    { name: 'Marcus Olin', role: 'Senior Designer', tone: 'cool' },
    { name: 'Sage Pennington', role: 'Site Director · Civil', tone: 'sage' },
    { name: 'Theo Ravenna', role: 'Electrical Lead', tone: 'warm' },
  ];
  return (
    <div className="page">
      <section style={{ paddingTop: 120, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 1080 }}>
          <div className="kicker" style={{ marginBottom: 24 }}>— The studio</div>
          <h1 className="display" style={{ fontSize: 'clamp(56px, 7vw, 112px)', margin: 0, lineHeight: 1 }}>
            One team for the<br/>whole project.
          </h1>
        </div>
      </section>
      <section style={{ paddingBottom: 100 }}>
        <div className="container">
          <div style={{ aspectRatio: '21/9', marginBottom: 70 }}>
            <RoomScene kind="living" tone="warm" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80 }}>
            <div className="kicker">Our principles</div>
            <div>
              <p className="display" style={{ fontSize: 'clamp(28px, 3vw, 40px)', lineHeight: 1.25, fontStyle: 'italic', margin: 0, marginBottom: 32 }}>
                Home Design Studio Interior was founded on a simple
                conviction: a home is best built by one team that owns every
                trade — from the first sketch to the last switch plate.
              </p>
              <p style={{ color: 'var(--ink-2)', fontSize: 16, marginBottom: 20 }}>
                We are a 38-person studio. Designers, civil supervisors,
                licensed electricians, joiners, painters — all in-house. We
                take on roughly 30 projects a year, each led by a principal
                designer and a dedicated site supervisor.
              </p>
              <p style={{ color: 'var(--ink-2)', fontSize: 16 }}>
                Our schedules are honest. Our milestone payments are tied to
                site progress. Our 12-month warranty covers civil, electrical,
                and joinery — and is honoured to the letter.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section style={{ background: 'var(--bg-2)', paddingTop: 100, paddingBottom: 100 }}>
        <div className="container">
          <div className="kicker" style={{ marginBottom: 18 }}>— The team</div>
          <h2 className="display" style={{ fontSize: 'clamp(36px, 4.4vw, 56px)', margin: 0, marginBottom: 60 }}>
            Designers, supervisors, and <em>trades.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {team.map(p => (
              <div key={p.name}>
                <div style={{ aspectRatio: '4/5', marginBottom: 16 }}>
                  <RoomScene kind="office" tone={p.tone} />
                </div>
                <div className="display" style={{ fontSize: 22 }}>{p.name}</div>
                <div style={{ fontSize: 12, color: 'var(--ink-3)', letterSpacing: '.04em', marginTop: 2 }}>{p.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABand setPage={setPage} />
    </div>
  );
}

Object.assign(window, { HomePage, AboutPage, CTABand });
