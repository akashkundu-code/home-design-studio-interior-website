"use client";
import { useState } from "react";
import RoomScene from "@/components/RoomScene";
import { PROJECTS } from "@/lib/data";
import Link from "next/link";

const FILTERS = ["All", "1BHK", "2BHK", "3BHK", "Villa"] as const;

export default function PortfolioPage() {
  const [filter, setFilter] = useState<string>("All");
  const list = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.bhk === filter);

  return (
    <main>
      <section style={{ paddingTop: 120, paddingBottom: 60 }}>
        <div className="container" style={{ maxWidth: 1080 }}>
          <div className="kicker" style={{ marginBottom: 24 }}>— Portfolio</div>
          <h1 className="display" style={{ fontSize: "clamp(48px, 7vw, 96px)", margin: 0, lineHeight: 1 }}>
            Homes across<br />Kolkata &amp; <em>beyond.</em>
          </h1>
          <p className="lead" style={{ marginTop: 32, fontSize: 18 }}>
            A selection of recent projects across Salt Lake, New Town, Ballygunge, Alipore, Howrah, and Hooghly. From compact 1 BHK refits to villa builds.
          </p>
        </div>
      </section>

      <section style={{ paddingBottom: 40 }}>
        <div className="container">
          <div style={{ display: "flex", gap: 8, borderBottom: "1px solid var(--line)", paddingBottom: 18, flexWrap: "wrap" }}>
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: "8px 18px",
                  border: "1px solid var(--line)",
                  background: filter === f ? "var(--ink)" : "transparent",
                  color: filter === f ? "var(--paper)" : "var(--ink-2)",
                  fontSize: 12,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  fontFamily: "var(--font-body)",
                  transition: "all .2s",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: 100 }}>
        <div className="container">
          <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {list.map((p) => (
              <div key={p.id} className="hover-card" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ aspectRatio: "4/3", overflow: "hidden", background: "var(--bg-2)" }}>
                  <div style={{ width: "100%", height: "100%" }} className="zoom">
                    <RoomScene kind={p.scene} tone={p.tone} />
                  </div>
                </div>
                <div>
                  <div className="kicker" style={{ marginBottom: 6 }}>{p.bhk} · {p.year}</div>
                  <h3 className="display" style={{ fontSize: 26, margin: 0, marginBottom: 4 }}>{p.name}</h3>
                  <div style={{ fontSize: 13, color: "var(--ink-3)", marginBottom: 8 }}>{p.loc} · {p.area}</div>
                  <p style={{ color: "var(--ink-2)", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{p.blurb}</p>
                </div>
              </div>
            ))}
          </div>
          {list.length === 0 && (
            <div style={{ textAlign: "center", padding: 60, color: "var(--ink-3)" }}>
              No projects in this category yet. <Link href="/contact" className="btn-link">Start one with us →</Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
