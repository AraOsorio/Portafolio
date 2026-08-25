import { useState } from "react";

const INK    = "#23003F";
const BLUE   = "#8CA7F4";
const ZEST   = "#DBF48C";
const PURPLE = "#D98CF4";
const OAT    = "#FEF8F0";

const LINKS = [
  { label: "EMAIL",    sub: "hello@araosorio.com",       href: "mailto:hello@araosorio.com", accent: ZEST   },
  { label: "LINKEDIN", sub: "linkedin.com/in/araosorio", href: "#",                         accent: BLUE   },
  { label: "GITHUB",   sub: "github.com/araosorio",      href: "#",                         accent: PURPLE },
  { label: "BEHANCE",  sub: "behance.net/araosorio",     href: "#",                         accent: ZEST   },
];

function LinkRow({ item }: { item: (typeof LINKS)[0] }) {
  const [hov, setHov] = useState(false);

  return (
    <a
      href={item.href}
      target={item.href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="contact-link-row"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid rgba(254,248,240,0.15)",
        textDecoration: "none",
        gap: 16,
        transition: "padding-left 0.2s ease",
        paddingLeft: hov ? 16 : 0,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16, minWidth: 0 }}>
        <span style={{
          width: 10, height: 10,
          backgroundColor: hov ? item.accent : "rgba(254,248,240,0.2)",
          border: "1px solid rgba(254,248,240,0.25)",
          borderRadius: "50%",
          flexShrink: 0,
          transition: "background-color 0.2s",
        }} />
        <div style={{ minWidth: 0 }}>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(22px, 3.5vw, 52px)",
            fontWeight: 700,
            color: hov ? item.accent : OAT,
            letterSpacing: "-0.02em",
            display: "block",
            transition: "color 0.2s",
            lineHeight: 1,
          }}>{item.label}</span>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(10px, 1vw, 12px)",
            color: "rgba(254,248,240,0.42)",
            display: "block",
            marginTop: 3,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}>{item.sub}</span>
        </div>
      </div>
      <span style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: "clamp(16px, 1.8vw, 20px)",
        color: hov ? item.accent : "rgba(254,248,240,0.22)",
        flexShrink: 0,
        transition: "color 0.2s, transform 0.2s",
        transform: hov ? "translateX(6px)" : "none",
      }}>→</span>
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contact" style={{ backgroundColor: INK, borderTop: `3px solid ${INK}` }}>
      <div className="contact-inner">
        {/* Headline */}
        <div className="contact-headline">
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(44px, 9vw, 132px)",
            fontWeight: 700, color: OAT,
            letterSpacing: "-0.04em",
            lineHeight: 0.88, margin: 0,
          }}>{"LET'S MAKE"}</h2>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(44px, 9vw, 132px)",
            fontWeight: 700,
            WebkitTextStroke: `2px ${OAT}`,
            color: "transparent",
            letterSpacing: "-0.04em",
            lineHeight: 0.88,
            margin: "6px 0 0",
          }}>SOMETHING.</h2>
        </div>

        {/* Links */}
        <div>
          {LINKS.map((l) => <LinkRow key={l.label} item={l} />)}
        </div>

        {/* Footer */}
        <div className="contact-footer" style={{ borderTop: "1px solid rgba(254,248,240,0.1)" }}>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700, fontSize: 15,
            color: OAT, letterSpacing: "0.04em",
          }}>ARA.OSORIO</span>

          <div style={{ display: "flex", gap: 8 }}>
            {[ZEST, BLUE, PURPLE].map((c) => (
              <span key={c} style={{
                width: 10, height: 10, backgroundColor: c,
                display: "block", border: "1px solid rgba(254,248,240,0.2)",
              }} />
            ))}
          </div>

          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            color: "rgba(254,248,240,0.4)",
            letterSpacing: "0.06em",
          }}>© 2026 · ARACELLI OSORIO</span>
        </div>
      </div>
    </section>
  );
}
