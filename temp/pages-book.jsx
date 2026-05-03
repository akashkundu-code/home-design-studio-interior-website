// pages-book.jsx — Booking / Consultation form (3 steps)

function BookingPage({ setPage }) {
  const [step, setStep] = React.useState(1);
  const [data, setData] = React.useState({
    type: '', budget: '', timeline: '', name: '', email: '', phone: '', city: '',
    sqft: '', notes: '', date: '', time: '',
  });
  const set = (k, v) => setData({ ...data, [k]: v });

  if (step === 4) {
    return (
      <div className="page">
        <section style={{ paddingTop: 140, paddingBottom: 'var(--section-pad)' }}>
          <div className="container" style={{ maxWidth: 720, textAlign: 'center' }}>
            <div style={{
              width: 72, height: 72, borderRadius: '50%', background: 'var(--accent-tint)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px',
              color: 'var(--accent-2)', fontSize: 28,
            }}>✓</div>
            <div className="kicker" style={{ marginBottom: 18 }}>— Consultation requested</div>
            <h1 className="display" style={{ fontSize: 'clamp(48px, 5.6vw, 84px)', margin: 0, marginBottom: 22 }}>
              We'll be in touch.
            </h1>
            <p className="lead" style={{ margin: '0 auto 14px' }}>
              A studio principal will reach out within two business days to confirm your
              {data.date ? ` ${data.date} at ${data.time}` : ''} consultation.
            </p>
            <p style={{ color: 'var(--ink-3)', fontSize: 14, marginBottom: 40 }}>
              Look for an email from {data.email ? `confirming ${data.email}` : 'studio@hdsinterior.com'}.
            </p>
            <button className="btn btn-ghost" onClick={() => setPage('home')}>Return Home</button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page">
      <section style={{ paddingTop: 80, paddingBottom: 'var(--section-pad)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 90 }}>
            <div style={{ position: 'sticky', top: 100, alignSelf: 'start' }}>
              <div className="kicker" style={{ marginBottom: 22 }}>— Begin a project</div>
              <h1 className="display" style={{ fontSize: 'clamp(48px, 5.6vw, 84px)', margin: 0, lineHeight: 1, marginBottom: 24 }}>
                Book a <em>consultation.</em>
              </h1>
              <p style={{ color: 'var(--ink-2)', fontSize: 16, lineHeight: 1.65, marginBottom: 36, maxWidth: '38ch' }}>
                A free 30-minute introductory call with a principal designer.
                We'll discuss your home, your timeline, and how we work — no
                commitment, no fee.
              </p>
              <div style={{ borderTop: '1px solid var(--line)', paddingTop: 28 }}>
                <BkDetail l="Studio hours" v="Mon–Sat · 10–7 IST" />
                <BkDetail l="Email" v="studio@hdsinterior.com" />
                <BkDetail l="Phone" v="+91 22 5555 0148" />
                <BkDetail l="Locations" v="Mumbai · Bengaluru · Pune" />
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', gap: 6, marginBottom: 36 }}>
                {[1,2,3].map(n => (
                  <div key={n} style={{
                    flex: 1, height: 2,
                    background: step >= n ? 'var(--accent-2)' : 'var(--line)',
                    transition: 'background .3s',
                  }} />
                ))}
              </div>

              {step === 1 && (
                <div>
                  <div className="kicker" style={{ marginBottom: 14 }}>Step 01 / 03</div>
                  <h2 className="display" style={{ fontSize: 38, margin: 0, marginBottom: 28 }}>About your project</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                    <BkRadio label="Home size" value={data.type} onChange={(v) => set('type', v)}
                      options={['1 BHK', '2 BHK', '3 BHK', 'Villa / 4 BHK+']} />
                    <BkRadio label="Approximate budget" value={data.budget} onChange={(v) => set('budget', v)}
                      options={['Under ₹8 L', '₹8 L – ₹15 L', '₹15 L – ₹40 L', '₹40 L +']} />
                    <BkRadio label="When would you like to begin?" value={data.timeline} onChange={(v) => set('timeline', v)}
                      options={['Immediately', 'Within 3 months', '3–6 months', 'Just exploring']} />
                  </div>
                  <button className="btn btn-primary" style={{ marginTop: 36 }}
                    disabled={!data.type || !data.budget || !data.timeline}
                    onClick={() => setStep(2)}>
                    Continue →
                  </button>
                </div>
              )}

              {step === 2 && (
                <div>
                  <div className="kicker" style={{ marginBottom: 14 }}>Step 02 / 03</div>
                  <h2 className="display" style={{ fontSize: 38, margin: 0, marginBottom: 28 }}>About you</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                    <BkField label="Full name" value={data.name} onChange={(v) => set('name', v)} />
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                      <BkField label="Email" value={data.email} onChange={(v) => set('email', v)} type="email" />
                      <BkField label="Phone" value={data.phone} onChange={(v) => set('phone', v)} type="tel" />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 16 }}>
                      <BkField label="City" value={data.city} onChange={(v) => set('city', v)} />
                      <BkField label="Carpet area (sq ft)" value={data.sqft} onChange={(v) => set('sqft', v)} placeholder="1,200" />
                    </div>
                    <div className="field-row">
                      <label className="field-label">Tell us about your project</label>
                      <textarea className="field" value={data.notes} onChange={(e) => set('notes', e.target.value)}
                        placeholder="The rooms, the goals, the feeling you want at the end of it." />
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 12, marginTop: 36 }}>
                    <button className="btn btn-ghost" onClick={() => setStep(1)}>← Back</button>
                    <button className="btn btn-primary" disabled={!data.name || !data.email}
                      onClick={() => setStep(3)}>Continue →</button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <div className="kicker" style={{ marginBottom: 14 }}>Step 03 / 03</div>
                  <h2 className="display" style={{ fontSize: 38, margin: 0, marginBottom: 28 }}>Choose a time</h2>
                  <BkDatePicker date={data.date} time={data.time} setDate={(v) => set('date', v)} setTime={(v) => set('time', v)} />
                  <div style={{ display: 'flex', gap: 12, marginTop: 36 }}>
                    <button className="btn btn-ghost" onClick={() => setStep(2)}>← Back</button>
                    <button className="btn btn-primary" disabled={!data.date || !data.time}
                      onClick={() => setStep(4)}>Confirm Booking →</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function BkField({ label, value, onChange, placeholder, type = 'text' }) {
  return (
    <div className="field-row">
      <label className="field-label">{label}</label>
      <input className="field" type={type} value={value} placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

function BkRadio({ label, value, onChange, options }) {
  return (
    <div>
      <div className="field-label" style={{ marginBottom: 12 }}>{label}</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
        {options.map(o => (
          <button key={o} onClick={() => onChange(o)} style={{
            padding: '16px 18px', cursor: 'pointer', textAlign: 'left',
            background: value === o ? 'var(--ink)' : 'transparent',
            color: value === o ? 'var(--paper)' : 'var(--ink)',
            border: '1px solid ' + (value === o ? 'var(--ink)' : 'var(--line)'),
            fontSize: 14, fontFamily: 'inherit',
            transition: 'all .2s',
          }}>{o}</button>
        ))}
      </div>
    </div>
  );
}

function BkDatePicker({ date, time, setDate, setTime }) {
  const dates = [];
  const d = new Date(); d.setDate(d.getDate() + 1);
  while (dates.length < 12) {
    const day = d.getDay();
    if (day !== 0) dates.push(new Date(d));
    d.setDate(d.getDate() + 1);
  }
  const times = ['10:00 AM', '11:30 AM', '1:00 PM', '3:00 PM', '5:00 PM'];
  const fmt = (dt) => dt.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

  return (
    <div>
      <div className="field-label" style={{ marginBottom: 12 }}>Select a date (IST)</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginBottom: 30 }}>
        {dates.map((dt, i) => {
          const k = fmt(dt);
          return (
            <button key={i} onClick={() => setDate(k)} style={{
              padding: '14px 8px', cursor: 'pointer',
              background: date === k ? 'var(--ink)' : 'transparent',
              color: date === k ? 'var(--paper)' : 'var(--ink)',
              border: '1px solid ' + (date === k ? 'var(--ink)' : 'var(--line)'),
              fontSize: 12, fontFamily: 'inherit', letterSpacing: '.04em',
            }}>{k}</button>
          );
        })}
      </div>
      {date && (
        <div>
          <div className="field-label" style={{ marginBottom: 12 }}>Select a time</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 8 }}>
            {times.map(t => (
              <button key={t} onClick={() => setTime(t)} style={{
                padding: '14px 8px', cursor: 'pointer',
                background: time === t ? 'var(--ink)' : 'transparent',
                color: time === t ? 'var(--paper)' : 'var(--ink)',
                border: '1px solid ' + (time === t ? 'var(--ink)' : 'var(--line)'),
                fontSize: 12, fontFamily: 'inherit', letterSpacing: '.04em',
              }}>{t}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function BkDetail({ l, v }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 16, padding: '14px 0', borderBottom: '1px solid var(--line)' }}>
      <div className="kicker">{l}</div>
      <div style={{ fontSize: 14, color: 'var(--ink)' }}>{v}</div>
    </div>
  );
}

Object.assign(window, { BookingPage });
