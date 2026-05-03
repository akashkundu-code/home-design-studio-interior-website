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
