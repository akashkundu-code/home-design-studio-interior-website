// pages-services.jsx — Services + Process pages

function ServicesPage({ setPage }) {
  return (
    <div className="page">
      <section style={{ paddingTop: 120, paddingBottom: 60 }}>
        <div className="container">
          <div className="kicker" style={{ marginBottom: 24 }}>— Services</div>
          <h1 className="display" style={{ fontSize: 'clamp(56px, 7vw, 112px)', margin: 0, lineHeight: 1, marginBottom: 40, maxWidth: '14ch' }}>
            Concept to <em style={{ color: 'var(--accent-2)' }}>execution.</em>
          </h1>
          <p className="lead" style={{ fontSize: 19, maxWidth: '64ch' }}>
            Six in-house disciplines under one accountable studio. We design
            the home, demolish the walls, run the wires, build the wardrobes,
            and hand you the keys — on a single contract.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 60 }}>
        <div className="container">
          {SERVICES.map((s, i) => (
            <ServiceRow key={s.num} s={s} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>

      <PricingTiers setPage={setPage} />
      <FAQ />
      <CTABand setPage={setPage} />
    </div>
  );
}

function ServiceRow({ s, reverse }) {
  const tones = ['warm', 'cool', 'sage', 'warm', 'cool', 'sage'];
  const kinds = ['living','kitchen','office','bedroom','dining','bath'];
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: reverse ? '1fr 1.1fr' : '1.1fr 1fr',
      gap: 80, alignItems: 'center',
      borderTop: '1px solid var(--line)',
      padding: '80px 0',
    }}>
      <div style={{ order: reverse ? 2 : 1 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 18, marginBottom: 22 }}>
          <span className="display" style={{ fontSize: 86, color: 'var(--accent)', lineHeight: 1, fontStyle: 'italic' }}>{s.num}</span>
          <div className="kicker">In-house team</div>
        </div>
        <h2 className="display" style={{ fontSize: 'clamp(40px, 4.6vw, 64px)', margin: 0, marginBottom: 22 }}>{s.title}</h2>
        <p style={{ color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.65, marginBottom: 30, maxWidth: '52ch' }}>{s.body}</p>
        <div style={{ borderTop: '1px solid var(--line)', paddingTop: 22 }}>
          <div className="kicker" style={{ marginBottom: 14 }}>Includes</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {s.deliverables.map(d => (
              <li key={d} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, color: 'var(--ink-2)' }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)' }} />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ order: reverse ? 1 : 2, aspectRatio: '4/5' }}>
        <RoomScene kind={kinds[Number(s.num) - 1] || 'living'} tone={tones[Number(s.num) - 1]} />
      </div>
    </div>
  );
}

function PricingTiers({ setPage }) {
  const tiers = [
    { name: '1 BHK', from: '₹6.5 L', desc: 'A complete 1 BHK turnkey — civil, electrical, modular kitchen, wardrobes, painting, and styling.', items: ['Full design + 3D walkthroughs', 'Civil + electrical execution', 'Modular kitchen & wardrobes', '12-month warranty'] },
    { name: '2 BHK', from: '₹11 L', desc: 'Our most-loved engagement size. A complete 2 BHK delivered start to finish.', items: ['Full design + working drawings', 'Civil + electrical + plumbing', 'Modular joinery throughout', 'Final styling & handover'], featured: true },
    { name: '3 BHK & Villas', from: 'On request', desc: 'Larger homes with bespoke joinery, smart-home wiring, and structural changes.', items: ['Architectural co-ordination', 'Bespoke joinery program', 'Smart-home & MEP', 'Lifetime studio access'] },
  ];
  return (
    <section style={{ background: 'var(--bg-2)', paddingTop: 'var(--section-pad)', paddingBottom: 'var(--section-pad)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 70 }}>
          <div className="kicker" style={{ marginBottom: 14 }}>— Engagement</div>
          <h2 className="display" style={{ fontSize: 'clamp(36px, 4.6vw, 60px)', margin: 0 }}>
            Three ways to <em>begin.</em>
          </h2>
          <p className="lead" style={{ margin: '20px auto 0', textAlign: 'center' }}>
            Indicative starting investment for turnkey delivery. Final scope
            confirmed after a free site visit and consultation.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {tiers.map(t => (
            <div key={t.name} style={{
              background: t.featured ? 'var(--ink)' : 'var(--paper)',
              color: t.featured ? 'var(--paper)' : 'var(--ink)',
              padding: '50px 36px',
              border: '1px solid ' + (t.featured ? 'var(--ink)' : 'var(--line)'),
              display: 'flex', flexDirection: 'column',
            }}>
              <div className="kicker" style={{ color: t.featured ? 'rgba(251,248,242,.6)' : 'var(--ink-3)', marginBottom: 16 }}>
                {t.name}
              </div>
              <div className="display" style={{ fontSize: 56, lineHeight: 1, marginBottom: 12,
                color: t.featured ? 'var(--accent)' : 'var(--ink)' }}>
                {t.from}
              </div>
              <div style={{ fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase',
                color: t.featured ? 'rgba(251,248,242,.5)' : 'var(--ink-3)', marginBottom: 28 }}>Starting · turnkey</div>
              <p style={{ fontSize: 14, lineHeight: 1.6, marginBottom: 30,
                color: t.featured ? 'rgba(251,248,242,.85)' : 'var(--ink-2)' }}>{t.desc}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32, flex: 1 }}>
                {t.items.map(i => (
                  <li key={i} style={{ display: 'flex', gap: 10, fontSize: 13,
                    color: t.featured ? 'rgba(251,248,242,.85)' : 'var(--ink-2)',
                    paddingBottom: 12, borderBottom: '1px solid ' + (t.featured ? 'rgba(251,248,242,.12)' : 'var(--line)') }}>
                    <span style={{ color: 'var(--accent)' }}>—</span> {i}
                  </li>
                ))}
              </ul>
              <button onClick={() => setPage('book')} className={t.featured ? 'btn btn-accent' : 'btn btn-ghost'} style={{ justifyContent: 'center' }}>
                Book a Consultation
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: 'Do you handle civil and electrical work yourselves?',
      a: 'Yes — civil and electrical are run by our in-house teams, not subcontractors. Our site supervisor coordinates every trade and is on site daily.' },
    { q: 'How does the estimation process work?',
      a: 'After a free site visit, we deliver a line-item proposal within seven days: scope, schedule, milestone payments, and itemized civil, electrical, joinery, and finishing budgets. Estimation is free.' },
    { q: 'How long does a typical 2 BHK take?',
      a: 'A 2 BHK turnkey runs 14–18 weeks from kickoff to handover. 1 BHK runs 10–12 weeks. 3 BHK and villas run 22–30+ weeks depending on scope.' },
    { q: 'What is your warranty?',
      a: '12 months on civil, electrical, and joinery. We resolve any defect on a single call. Modular furniture carries a 7-year warranty from our manufacturing partner.' },
    { q: 'Do you take on smaller jobs — one room only?',
      a: 'We focus on whole-home projects (1 BHK and up). For single rooms, our minimum engagement is concept-only design with handover to your contractor.' },
    { q: 'How are payments structured?',
      a: 'Five milestone payments tied to site progress: signing, design sign-off, civil completion, joinery installation, and handover. No advance lump-sums.' },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80 }}>
          <div>
            <div className="kicker" style={{ marginBottom: 18 }}>— FAQ</div>
            <h2 className="display" style={{ fontSize: 'clamp(36px, 4.4vw, 56px)', margin: 0 }}>
              Common <em>questions.</em>
            </h2>
          </div>
          <div>
            {faqs.map((f, i) => (
              <div key={i} style={{ borderTop: i === 0 ? '1px solid var(--line)' : 'none', borderBottom: '1px solid var(--line)' }}>
                <button onClick={() => setOpen(open === i ? -1 : i)} style={{
                  width: '100%', textAlign: 'left', background: 'none', border: 0, padding: '24px 0',
                  cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
                  fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--ink)',
                }}>
                  {f.q}
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--accent-2)',
                    transition: 'transform .3s', transform: open === i ? 'rotate(45deg)' : 'rotate(0)',
                  }}>+</span>
                </button>
                <div style={{
                  maxHeight: open === i ? 240 : 0, overflow: 'hidden',
                  transition: 'max-height .4s ease, opacity .3s', opacity: open === i ? 1 : 0,
                }}>
                  <p style={{ color: 'var(--ink-2)', fontSize: 15, lineHeight: 1.65, padding: '0 0 24px', margin: 0, maxWidth: '60ch' }}>
                    {f.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─────── Process page (timeline) ───────
function ProcessPage({ setPage }) {
  return (
    <div className="page">
      <section style={{ paddingTop: 120, paddingBottom: 60 }}>
        <div className="container">
          <div className="kicker" style={{ marginBottom: 24 }}>— The process</div>
          <h1 className="display" style={{ fontSize: 'clamp(56px, 7vw, 112px)', margin: 0, lineHeight: 1, marginBottom: 40, maxWidth: '14ch' }}>
            How a home <em style={{ color: 'var(--accent-2)' }}>gets built.</em>
          </h1>
          <p className="lead" style={{ fontSize: 19, maxWidth: '64ch' }}>
            A predictable six-phase journey. Free discovery and estimation —
            you only commit at the design phase, with milestone payments
            tied to site progress.
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 60 }}>
            <div style={{ position: 'sticky', top: 110, alignSelf: 'start' }}>
              <div className="kicker" style={{ marginBottom: 14 }}>Total timeline</div>
              <div className="display" style={{ fontSize: 64, color: 'var(--accent-2)', lineHeight: 1 }}>14–18</div>
              <div style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 6 }}>weeks for a typical 2 BHK</div>
              <div style={{ marginTop: 36, padding: '20px 0', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
                <div className="kicker" style={{ marginBottom: 8 }}>Free until</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 24 }}>Phase 03 · Design</div>
                <p style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 8 }}>
                  Discovery and estimation are complimentary. You commit only when the design phase begins.
                </p>
              </div>
            </div>
            <div>
              {PROCESS.map((p, i) => (
                <div key={p.num} style={{
                  display: 'grid', gridTemplateColumns: '80px 1fr', gap: 40,
                  paddingBottom: 60, marginBottom: 60,
                  borderBottom: i === PROCESS.length - 1 ? 'none' : '1px solid var(--line)',
                }}>
                  <div>
                    <div className="display" style={{ fontSize: 56, color: 'var(--accent)', lineHeight: 1, fontStyle: 'italic' }}>
                      {p.num}
                    </div>
                  </div>
                  <div>
                    <div className="kicker" style={{ marginBottom: 8, color: 'var(--accent-2)' }}>{p.duration}</div>
                    <h3 className="display" style={{ fontSize: 'clamp(30px, 3.4vw, 44px)', margin: 0, marginBottom: 14 }}>{p.title}</h3>
                    <p style={{ color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.65, margin: 0, maxWidth: '54ch' }}>{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CTABand setPage={setPage} />
    </div>
  );
}

Object.assign(window, { ServicesPage, ProcessPage });
