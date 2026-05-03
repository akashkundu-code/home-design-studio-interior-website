"use client";
import { useEffect, useState } from "react";
import { TESTIMONIALS } from "@/lib/data";

export default function TestimonialBand() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(t);
  }, []);
  const t = TESTIMONIALS[idx];
  return (
    <section style={{ background: "var(--ink)", color: "var(--paper)", paddingTop: 120, paddingBottom: 120 }}>
      <div className="container" style={{ textAlign: "center", maxWidth: 920, margin: "0 auto" }}>
        <div style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 64, color: "var(--accent)", lineHeight: 0.6, marginBottom: 24 }}>&ldquo;</div>
        <p key={idx} className="display fadeup" style={{ fontSize: "clamp(26px, 3vw, 40px)", fontStyle: "italic", lineHeight: 1.25, margin: 0, color: "var(--paper)" }}>
          {t.quote}
        </p>
        <div style={{ marginTop: 40, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
          <div style={{ width: 32, height: 1, background: "rgba(251,248,242,.4)" }} />
          <div style={{ fontSize: 13, letterSpacing: ".04em" }}>{t.name}</div>
          <div className="kicker" style={{ color: "rgba(251,248,242,.5)" }}>{t.proj}</div>
        </div>
        <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 36 }}>
          {TESTIMONIALS.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} aria-label={`Testimonial ${i + 1}`} style={{ width: 24, height: 2, border: 0, padding: 0, cursor: "pointer", background: i === idx ? "var(--accent)" : "rgba(251,248,242,.2)", transition: "background .3s" }} />
          ))}
        </div>
      </div>
    </section>
  );
}
