import Link from "next/link";
import Logo from "./Logo";
import { SITE } from "@/lib/data";

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg-2)", borderTop: "1px solid var(--line)", paddingTop: 80, paddingBottom: 40, marginTop: 80 }}>
      <div className="container">
        <div className="grid-4" style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr", gap: 60, paddingBottom: 60 }}>
          <div>
            <Logo />
            <p style={{ color: "var(--ink-3)", maxWidth: "32ch", marginTop: 22, fontSize: 14 }}>
              From estimation to execution. A full-service interior design studio crafting considered homes for those who live deliberately.
            </p>
            <div style={{ marginTop: 24, fontSize: 13, color: "var(--ink-2)", lineHeight: 1.7 }}>
              <div>{SITE.address}</div>
              <div>{SITE.hours}</div>
              <div style={{ marginTop: 8 }}>
                {SITE.phones.map((p, i) => (
                  <span key={p}>
                    <a href={`tel:+91${p}`} style={{ color: "var(--ink)" }}>+91 {p}</a>
                    {i < SITE.phones.length - 1 ? " · " : ""}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <FooterCol title="Studio" items={[
            { l: "Our Approach", p: "/about" },
            { l: "Services", p: "/services" },
            { l: "Process", p: "/process" },
            { l: "Portfolio", p: "/portfolio" },
          ]} />
          <FooterCol title="Services" items={[
            { l: "Concept Design", p: "/services" },
            { l: "Civil & Structural", p: "/services" },
            { l: "Electrical & MEP", p: "/services" },
            { l: "Execution & Handover", p: "/services" },
          ]} />
          <div>
            <div style={{ fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: 18 }}>Get in touch</div>
            <p style={{ color: "var(--ink-2)", fontSize: 14, marginBottom: 16 }}>
              Free 30-minute consultation. We respond within one working day.
            </p>
            <Link href="/contact" className="btn btn-ghost btn-sm">Book Consultation →</Link>
            <Link href="/estimate" className="btn-link" style={{ display: "block", marginTop: 22 }}>Get Instant Estimate →</Link>
          </div>
        </div>
        <div style={{ borderTop: "1px solid var(--line)", paddingTop: 30, display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12, color: "var(--ink-3)", letterSpacing: ".04em", flexWrap: "wrap", gap: 16 }}>
          <div>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</div>
          <div style={{ display: "flex", gap: 28 }}>
            <span>Serving {SITE.serviceArea}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { l: string; p: string }[] }) {
  return (
    <div>
      <div style={{ fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: 18 }}>{title}</div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
        {items.map((it, i) => (
          <li key={i}>
            <Link href={it.p} style={{ color: "var(--ink)", fontSize: 14, textDecoration: "none" }}>{it.l}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
