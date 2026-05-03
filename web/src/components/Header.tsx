"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { SITE } from "@/lib/data";

const left = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
];
const right = [
  { href: "/process", label: "Process" },
  { href: "/about", label: "Studio" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname?.startsWith(href));

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: scrolled ? "rgba(247,243,236,.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px) saturate(140%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px) saturate(140%)" : "none",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
        transition: "background .3s ease, border-color .3s ease",
      }}
    >
      <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", height: 76 }}>
        <nav className="nav-links" style={{ display: "flex", gap: 28 }}>
          {left.map((l) => (
            <Link key={l.href} href={l.href} style={navLinkStyle(!!isActive(l.href))}>
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href="/" style={{ background: "none", border: 0, padding: 0 }}>
          <Logo />
        </Link>
        <nav style={{ display: "flex", gap: 28, justifyContent: "flex-end", alignItems: "center" }}>
          <div className="nav-links" style={{ display: "flex", gap: 28 }}>
            {right.map((l) => (
              <Link key={l.href} href={l.href} style={navLinkStyle(!!isActive(l.href))}>
                {l.label}
              </Link>
            ))}
          </div>
          <Link href="/contact" className="btn btn-primary btn-sm" style={{ marginLeft: 4 }}>
            Book Consultation
          </Link>
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi, I'd like to know more about your interior design services.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm"
            style={{ marginLeft: 8 }}
            aria-label="Chat on WhatsApp"
          >
            <span style={{ display: "inline-block", width: 14, height: 14, marginRight: 4 }}>
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "100%", height: "100%" }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </span>
            WhatsApp
          </a>
        </nav>
      </div>
      <a
        href={`tel:+91${SITE.phones[0]}`}
        style={{
          position: "fixed",
          top: 88,
          right: 16,
          fontSize: 11,
          letterSpacing: ".12em",
          color: "var(--ink-2)",
          textDecoration: "none",
          background: "var(--paper)",
          padding: "6px 12px",
          border: "1px solid var(--line)",
          borderRadius: 100,
          zIndex: 49,
        }}
      >
        ☎ +91 {SITE.phones[0]}
      </a>
    </header>
  );
}

function navLinkStyle(active: boolean): React.CSSProperties {
  return {
    background: "none",
    border: 0,
    fontFamily: "var(--font-body)",
    fontSize: 11.5,
    letterSpacing: ".18em",
    textTransform: "uppercase",
    color: active ? "var(--accent-2)" : "var(--ink-2)",
    fontWeight: 500,
    padding: "8px 0",
    borderBottom: active ? "1px solid var(--accent-2)" : "1px solid transparent",
    transition: "color .2s, border-color .2s",
    textDecoration: "none",
  };
}
