"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { PRICING, SITE } from "@/lib/data";

const BHK_OPTIONS = [
  { v: "1BHK", label: "1 BHK", defaultArea: 600 },
  { v: "2BHK", label: "2 BHK", defaultArea: 1000 },
  { v: "3BHK", label: "3 BHK", defaultArea: 1500 },
  { v: "4BHK", label: "4 BHK", defaultArea: 2200 },
  { v: "Villa", label: "Villa", defaultArea: 3000 },
];

const TIERS = [
  { v: "essential" as const, ...PRICING.essential },
  { v: "premium" as const, ...PRICING.premium },
  { v: "luxury" as const, ...PRICING.luxury },
];

export default function EstimatePage() {
  const [bhk, setBhk] = useState("2BHK");
  const [area, setArea] = useState(1000);
  const [tier, setTier] = useState<"essential" | "premium" | "luxury">("premium");
  const [contact, setContact] = useState({ name: "", phone: "", email: "", city: "Kolkata" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const cfg = PRICING[tier];
  const baseTotal = area * cfg.rate;
  const lo = Math.round((baseTotal * 0.92) / 1000) * 1000;
  const hi = Math.round((baseTotal * 1.12) / 1000) * 1000;

  const breakdown = useMemo(() => ({
    civil: Math.round(baseTotal * cfg.civil),
    electrical: Math.round(baseTotal * cfg.electrical),
    joinery: Math.round(baseTotal * cfg.joinery),
    finishing: Math.round(baseTotal * cfg.finishing),
  }), [baseTotal, cfg]);

  const fmt = (n: number) => `₹${(n / 100000).toFixed(1)}L`;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source: "estimate", bhk, area, tier, ...contact, estimateLow: lo, estimateHigh: hi }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main>
      <section style={{ paddingTop: 120, paddingBottom: 40 }}>
        <div className="container" style={{ maxWidth: 1080 }}>
          <div className="kicker" style={{ marginBottom: 24 }}>— Instant estimate</div>
          <h1 className="display" style={{ fontSize: "clamp(48px, 6vw, 88px)", margin: 0, lineHeight: 1 }}>
            What will your<br /><em>home</em> cost?
          </h1>
          <p className="lead" style={{ marginTop: 28, fontSize: 17 }}>
            Adjust the configuration below for an instant ballpark. We&apos;ll follow up with a detailed line-by-line proposal within one working day.
          </p>
        </div>
      </section>

      <section style={{ paddingBottom: 120 }}>
        <div className="container">
          <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 60, alignItems: "start" }}>

            {/* LEFT: configurator */}
            <div style={{ background: "var(--paper)", border: "1px solid var(--line)", padding: 40 }}>
              <div className="kicker" style={{ marginBottom: 18 }}>01 · Home type</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 36 }}>
                {BHK_OPTIONS.map((o) => (
                  <button
                    key={o.v}
                    onClick={() => { setBhk(o.v); setArea(o.defaultArea); }}
                    style={{
                      padding: "12px 22px",
                      border: "1px solid var(--line)",
                      background: bhk === o.v ? "var(--ink)" : "transparent",
                      color: bhk === o.v ? "var(--paper)" : "var(--ink)",
                      cursor: "pointer",
                      fontFamily: "var(--font-body)",
                      fontSize: 13,
                      letterSpacing: ".1em",
                      transition: "all .2s",
                    }}
                  >
                    {o.label}
                  </button>
                ))}
              </div>

              <div className="kicker" style={{ marginBottom: 18 }}>02 · Carpet area</div>
              <div style={{ marginBottom: 36 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 12 }}>
                  <span className="display" style={{ fontSize: 38 }}>{area.toLocaleString()} <span style={{ fontSize: 16, color: "var(--ink-3)" }}>sq ft</span></span>
                </div>
                <input
                  type="range"
                  min={400}
                  max={5000}
                  step={50}
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  style={{ width: "100%", accentColor: "var(--accent-2)" }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--ink-3)", marginTop: 6 }}>
                  <span>400</span><span>5,000</span>
                </div>
              </div>

              <div className="kicker" style={{ marginBottom: 18 }}>03 · Package</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
                {TIERS.map((t) => (
                  <button
                    key={t.v}
                    onClick={() => setTier(t.v)}
                    style={{
                      padding: "18px 22px",
                      border: "1px solid var(--line)",
                      background: tier === t.v ? "var(--bg-2)" : "transparent",
                      borderColor: tier === t.v ? "var(--accent-2)" : "var(--line)",
                      cursor: "pointer",
                      textAlign: "left",
                      fontFamily: "var(--font-body)",
                      transition: "all .2s",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div>
                        <div className="display" style={{ fontSize: 22 }}>{t.label}</div>
                        <div style={{ fontSize: 13, color: "var(--ink-3)", marginTop: 2 }}>{t.description}</div>
                      </div>
                      <div className="kicker" style={{ color: "var(--accent-2)" }}>₹{t.rate}/sqft</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT: estimate output */}
            <div style={{ position: "sticky", top: 100 }}>
              <div style={{ background: "var(--ink)", color: "var(--paper)", padding: 40, marginBottom: 24 }}>
                <div className="kicker" style={{ color: "rgba(251,248,242,.5)", marginBottom: 16 }}>Estimated range</div>
                <div className="display" style={{ fontSize: "clamp(40px, 5vw, 64px)", margin: 0, color: "var(--paper)", fontStyle: "italic" }}>
                  {fmt(lo)} – {fmt(hi)}
                </div>
                <div style={{ fontSize: 12, color: "rgba(251,248,242,.6)", marginTop: 10, letterSpacing: ".06em" }}>
                  for {area.toLocaleString()} sq ft · {bhk} · {cfg.label}
                </div>

                <div style={{ marginTop: 32, paddingTop: 24, borderTop: "1px solid rgba(251,248,242,.15)" }}>
                  <div className="kicker" style={{ color: "rgba(251,248,242,.5)", marginBottom: 14 }}>Indicative breakdown</div>
                  {[
                    { l: "Civil work", v: breakdown.civil },
                    { l: "Electrical & MEP", v: breakdown.electrical },
                    { l: "Joinery & furniture", v: breakdown.joinery },
                    { l: "Finishing & styling", v: breakdown.finishing },
                  ].map((row) => (
                    <div key={row.l} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", fontSize: 14, color: "rgba(251,248,242,.85)" }}>
                      <span>{row.l}</span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 13 }}>{fmt(row.v)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} style={{ background: "var(--paper)", border: "1px solid var(--line)", padding: 32 }}>
                  <div className="kicker" style={{ marginBottom: 16 }}>Get the detailed quote</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <input className="field" placeholder="Your name" required value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} />
                    <input className="field" placeholder="Phone (10-digit)" pattern="[0-9]{10}" required value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} />
                    <input className="field" type="email" placeholder="Email" required value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} />
                    <select className="field" value={contact.city} onChange={(e) => setContact({ ...contact, city: e.target.value })}>
                      <option>Kolkata</option><option>Hooghly</option><option>Howrah</option><option>24 Parganas</option><option>Other</option>
                    </select>
                    <button type="submit" disabled={submitting} className="btn btn-primary" style={{ marginTop: 6, justifyContent: "center" }}>
                      {submitting ? "Sending…" : "Send detailed quote →"}
                    </button>
                    <p style={{ fontSize: 11, color: "var(--ink-3)", marginTop: 4 }}>
                      We respond within 1 working day. Or WhatsApp us at <a href={`https://wa.me/${SITE.whatsapp}`} style={{ color: "var(--accent-2)" }}>+91 {SITE.phones[0]}</a>.
                    </p>
                  </div>
                </form>
              ) : (
                <div style={{ background: "var(--bg-2)", border: "1px solid var(--accent)", padding: 32 }}>
                  <div className="kicker" style={{ color: "var(--accent-2)", marginBottom: 12 }}>Sent</div>
                  <h3 className="display" style={{ fontSize: 28, margin: 0, marginBottom: 12 }}>Thank you, {contact.name}.</h3>
                  <p style={{ color: "var(--ink-2)", fontSize: 15, marginBottom: 18 }}>
                    Our team will reach out at +91 {contact.phone} within one working day with a detailed line-by-line proposal.
                  </p>
                  <Link href="/portfolio" className="btn-link">Browse our portfolio →</Link>
                </div>
              )}
            </div>
          </div>

          <p style={{ fontSize: 12, color: "var(--ink-3)", textAlign: "center", marginTop: 60, maxWidth: 700, margin: "60px auto 0" }}>
            * Estimates are indicative ranges based on average per-sq-ft rates for this package tier in Kolkata. Final quote depends on site conditions, material choices, and detailed scope. The detailed proposal is itemised and binding.
          </p>
        </div>
      </section>
    </main>
  );
}
