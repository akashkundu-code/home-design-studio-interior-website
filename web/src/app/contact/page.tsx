"use client";
import { useState } from "react";
import Link from "next/link";
import { SITE } from "@/lib/data";

type Data = {
  type: string; budget: string; timeline: string;
  name: string; email: string; phone: string; city: string; sqft: string; notes: string;
  date: string; time: string;
};

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [data, setData] = useState<Data>({
    type: "", budget: "", timeline: "",
    name: "", email: "", phone: "", city: "Kolkata", sqft: "", notes: "",
    date: "", time: "",
  });
  const set = <K extends keyof Data>(k: K, v: Data[K]) => setData((d) => ({ ...d, [k]: v }));

  async function confirm() {
    setSubmitting(true);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "booking", ...data }),
      });
    } catch {}
    setSubmitting(false);
    setStep(4);
  }

  if (step === 4) {
    return (
      <main>
        <section style={{ paddingTop: 140, paddingBottom: "var(--section-pad)" }}>
          <div className="container" style={{ maxWidth: 720, textAlign: "center" }}>
            <div style={{ width: 72, height: 72, borderRadius: "50%", background: "var(--accent-tint)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 28px", color: "var(--accent-2)", fontSize: 28 }}>✓</div>
            <div className="kicker" style={{ marginBottom: 18 }}>— Consultation requested</div>
            <h1 className="display" style={{ fontSize: "clamp(48px, 5.6vw, 84px)", margin: 0, marginBottom: 22 }}>
              We&apos;ll be in touch.
            </h1>
            <p className="lead" style={{ margin: "0 auto 14px" }}>
              A studio principal will reach out within two business days to confirm your {data.date && `${data.date} at ${data.time}`} consultation.
            </p>
            <p style={{ color: "var(--ink-3)", fontSize: 14, marginBottom: 40 }}>
              Look for an email confirming {data.email || SITE.email}.
            </p>
            <Link className="btn btn-ghost" href="/">Return Home</Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section style={{ paddingTop: 80, paddingBottom: "var(--section-pad)" }}>
        <div className="container">
          <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 90 }}>
            <aside style={{ position: "sticky", top: 100, alignSelf: "start" }}>
              <div className="kicker" style={{ marginBottom: 22 }}>— Begin a project</div>
              <h1 className="display" style={{ fontSize: "clamp(48px, 5.6vw, 84px)", margin: 0, lineHeight: 1, marginBottom: 24 }}>
                Book a <em>consultation.</em>
              </h1>
              <p style={{ color: "var(--ink-2)", fontSize: 16, lineHeight: 1.65, marginBottom: 36, maxWidth: "38ch" }}>
                A free 30-minute introductory call with a principal designer. We&apos;ll discuss your home, your timeline, and how we work — no commitment, no fee.
              </p>
              <div style={{ borderTop: "1px solid var(--line)", paddingTop: 28 }}>
                <Detail l="Studio hours" v={SITE.hours} />
                <Detail l="Phone" v={SITE.phones.map((p) => `+91 ${p}`).join(" · ")} />
                <Detail l="WhatsApp" v={`+91 ${SITE.phones[0]}`} />
                <Detail l="Studio" v={SITE.address} />
                <Detail l="Service area" v={SITE.serviceArea} />
              </div>
            </aside>

            <div>
              <div style={{ display: "flex", gap: 6, marginBottom: 36 }}>
                {[1, 2, 3].map((n) => (
                  <div key={n} style={{ flex: 1, height: 2, background: step >= n ? "var(--accent-2)" : "var(--line)", transition: "background .3s" }} />
                ))}
              </div>

              {step === 1 && (
                <div>
                  <div className="kicker" style={{ marginBottom: 14 }}>Step 01 / 03</div>
                  <h2 className="display" style={{ fontSize: 38, margin: 0, marginBottom: 28 }}>About your project</h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                    <Radio label="Home size" value={data.type} onChange={(v) => set("type", v)}
                      options={["1 BHK", "2 BHK", "3 BHK", "Villa / 4 BHK+"]} />
                    <Radio label="Approximate budget" value={data.budget} onChange={(v) => set("budget", v)}
                      options={["Under ₹8 L", "₹8 L – ₹15 L", "₹15 L – ₹40 L", "₹40 L +"]} />
                    <Radio label="When would you like to begin?" value={data.timeline} onChange={(v) => set("timeline", v)}
                      options={["Immediately", "Within 3 months", "3–6 months", "Just exploring"]} />
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
                  <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                    <Field label="Full name" value={data.name} onChange={(v) => set("name", v)} />
                    <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                      <Field label="Email" value={data.email} onChange={(v) => set("email", v)} type="email" />
                      <Field label="Phone" value={data.phone} onChange={(v) => set("phone", v)} type="tel" />
                    </div>
                    <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 16 }}>
                      <Field label="City" value={data.city} onChange={(v) => set("city", v)} />
                      <Field label="Carpet area (sq ft)" value={data.sqft} onChange={(v) => set("sqft", v)} placeholder="1,200" />
                    </div>
                    <div>
                      <label className="field-label">Tell us about your project</label>
                      <textarea className="field" rows={4} value={data.notes}
                        onChange={(e) => set("notes", e.target.value)}
                        placeholder="The rooms, the goals, the feeling you want at the end of it." />
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 12, marginTop: 36 }}>
                    <button className="btn btn-ghost" onClick={() => setStep(1)}>← Back</button>
                    <button className="btn btn-primary" disabled={!data.name || !data.email || !data.phone}
                      onClick={() => setStep(3)}>Continue →</button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <div className="kicker" style={{ marginBottom: 14 }}>Step 03 / 03</div>
                  <h2 className="display" style={{ fontSize: 38, margin: 0, marginBottom: 28 }}>Choose a time</h2>
                  <DatePicker date={data.date} time={data.time} setDate={(v) => set("date", v)} setTime={(v) => set("time", v)} />
                  <div style={{ display: "flex", gap: 12, marginTop: 36 }}>
                    <button className="btn btn-ghost" onClick={() => setStep(2)}>← Back</button>
                    <button className="btn btn-primary" disabled={!data.date || !data.time || submitting} onClick={confirm}>
                      {submitting ? "Confirming…" : "Confirm Booking →"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Detail({ l, v }: { l: string; v: string }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 16, padding: "14px 0", borderBottom: "1px solid var(--line)" }}>
      <div className="kicker">{l}</div>
      <div style={{ fontSize: 14, color: "var(--ink)" }}>{v}</div>
    </div>
  );
}

function Field({ label, value, onChange, placeholder, type = "text" }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string }) {
  return (
    <div>
      <label className="field-label">{label}</label>
      <input className="field" type={type} value={value} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

function Radio({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <div>
      <div className="field-label" style={{ marginBottom: 12 }}>{label}</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
        {options.map((o) => (
          <button key={o} type="button" onClick={() => onChange(o)} style={{
            padding: "16px 18px", cursor: "pointer", textAlign: "left",
            background: value === o ? "var(--ink)" : "transparent",
            color: value === o ? "var(--paper)" : "var(--ink)",
            border: "1px solid " + (value === o ? "var(--ink)" : "var(--line)"),
            fontSize: 14, fontFamily: "inherit", transition: "all .2s",
          }}>{o}</button>
        ))}
      </div>
    </div>
  );
}

function DatePicker({ date, time, setDate, setTime }: { date: string; time: string; setDate: (v: string) => void; setTime: (v: string) => void }) {
  const dates: Date[] = [];
  const d = new Date(); d.setDate(d.getDate() + 1);
  while (dates.length < 12) {
    if (d.getDay() !== 0) dates.push(new Date(d));
    d.setDate(d.getDate() + 1);
  }
  const times = ["10:00 AM", "11:30 AM", "1:00 PM", "3:00 PM", "5:00 PM"];
  const fmt = (dt: Date) => dt.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });

  return (
    <div>
      <div className="field-label" style={{ marginBottom: 12 }}>Select a date (IST)</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 30 }}>
        {dates.map((dt, i) => {
          const k = fmt(dt);
          return (
            <button key={i} type="button" onClick={() => setDate(k)} style={{
              padding: "14px 8px", cursor: "pointer",
              background: date === k ? "var(--ink)" : "transparent",
              color: date === k ? "var(--paper)" : "var(--ink)",
              border: "1px solid " + (date === k ? "var(--ink)" : "var(--line)"),
              fontSize: 12, fontFamily: "inherit", letterSpacing: ".04em",
            }}>{k}</button>
          );
        })}
      </div>
      {date && (
        <div>
          <div className="field-label" style={{ marginBottom: 12 }}>Select a time</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 8 }}>
            {times.map((t) => (
              <button key={t} type="button" onClick={() => setTime(t)} style={{
                padding: "14px 8px", cursor: "pointer",
                background: time === t ? "var(--ink)" : "transparent",
                color: time === t ? "var(--paper)" : "var(--ink)",
                border: "1px solid " + (time === t ? "var(--ink)" : "var(--line)"),
                fontSize: 12, fontFamily: "inherit", letterSpacing: ".04em",
              }}>{t}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
