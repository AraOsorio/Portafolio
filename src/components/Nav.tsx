import { useState, useEffect } from "react";

const LINKS = ["TRABAJOS", "ACERCA DE MI", "EXPERIENCIA", "HABLEMOS:)"] as const;

const INK    = "#23003F";
const BLUE   = "#8CA7F4";
const ZEST   = "#DBF48C";
const PURPLE = "#D98CF4";
const OAT    = "#FEF8F0";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          backgroundColor: scrolled ? OAT : "transparent",
          borderBottom: scrolled ? `2px solid ${INK}` : "2px solid transparent",
          transition: "background-color 0.25s ease, border-color 0.25s ease",
        }}
      >
        <div className="nav-inner">
          <a href="#top" className="nav-logo">
            ARA OSORIO REYES
          </a>

          <ul className="nav-links">
            {LINKS.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="nav-link">{l}</a>
              </li>
            ))}
          </ul>

          <button
            className="nav-burger motion-press"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span style={{ transform: open ? "rotate(45deg) translate(5px, 5px)" : "none", transition: "transform 0.2s" }} />
            <span style={{ opacity: open ? 0 : 1, transition: "opacity 0.2s" }} />
            <span style={{ transform: open ? "rotate(-45deg) translate(5px, -5px)" : "none", transition: "transform 0.2s" }} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 190,
          backgroundColor: INK,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 24px 48px",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.77, 0, 0.18, 1)",
        }}
      >
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
          {LINKS.map((l, i) => (
            <li key={l} style={{ borderBottom: i < LINKS.length - 1 ? "1px solid rgba(254,248,240,0.12)" : "none" }}>
              <a
                href={`#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(40px, 10vw, 64px)",
                  fontWeight: 700,
                  color: OAT,
                  textDecoration: "none",
                  letterSpacing: "-0.02em",
                  display: "block",
                  padding: "16px 0",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = ZEST)}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = OAT)}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: 48, display: "flex", gap: 12 }}>
          {[ZEST, BLUE, PURPLE].map((c) => (
            <span key={c} style={{ width: 32, height: 32, backgroundColor: c, border: `2px solid rgba(254,248,240,0.3)`, display: "block" }} />
          ))}
        </div>
      </div>
    </>
  );
}
