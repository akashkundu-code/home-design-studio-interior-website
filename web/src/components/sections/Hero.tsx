import Link from "next/link";
import { SITE } from "@/lib/data";

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        height: "min(90vh, 880px)",
        minHeight: 600,
        overflow: "hidden",
        backgroundImage: "url('/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(247,243,236,.0) 0%, rgba(20,15,8,.12) 50%, rgba(20,15,8,.4) 100%)",
        }}
      />
      <div
        className="container"
        style={{
          position: "relative",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          textAlign: "center",
          paddingBottom: 80,
          paddingTop: 60,
          zIndex: 10,
        }}
      >
        <div style={{ maxWidth: 880, color: "#fbf8f2" }}>
          <div
            className="kicker fadeup"
            style={{ color: "rgba(251,248,242,.85)", marginBottom: 28 }}
          >
            <span
              style={{
                display: "inline-block",
                width: 28,
                height: 1,
                background: "currentColor",
                verticalAlign: "middle",
                marginRight: 12,
              }}
            />
            Concept · Civil · Electrical · Execution
          </div>
          <h1
            className="display fadeup"
            style={{
              fontSize: "clamp(56px, 8vw, 124px)",
              fontStyle: "italic",
              margin: 0,
              animationDelay: ".1s",
              color: "#fbf8f2",
            }}
          >
            Homes built
            <br />
            end to <em style={{ fontStyle: "normal" }}>end.</em>
          </h1>
          <p
            className="lead fadeup"
            style={{
              color: "rgba(251,248,242,.92)",
              margin: "26px auto 0",
              fontSize: 18,
              animationDelay: ".18s",
            }}
          >
            Home Design Studio Interior is a single accountable team for the
            full interior journey — concept and 3D design, civil and electrical
            execution, joinery, and final styling. One contract. One studio. One
            move-in date.
          </p>
          <div
            className="fadeup"
            style={{
              display: "flex",
              gap: 14,
              marginTop: 38,
              justifyContent: "center",
              animationDelay: ".26s",
              flexWrap: "wrap",
            }}
          >
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi, I'd like to know more about your interior design services.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light"
              style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us →
            </a>
            <Link
              href="/portfolio"
              className="btn btn-ghost"
              style={{ color: "#fbf8f2", borderColor: "rgba(251,248,242,.6)" }}
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 28,
          left: "var(--pad-x)",
          right: "var(--pad-x)",
          display: "flex",
          justifyContent: "space-between",
          color: "rgba(251,248,242,.7)",
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: ".18em",
          textTransform: "uppercase",
          pointerEvents: "none",
        }}
      >
        <span>HDS · Kolkata</span>
        <span>1 BHK · 2 BHK · 3 BHK · Villas</span>
      </div>
    </section>
  );
}
