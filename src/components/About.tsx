import { useState } from "react";

const INK    = "#23003F";
const BLUE   = "#8CA7F4";
const ZEST   = "#DBF48C";
const PURPLE = "#D98CF4";
const OAT    = "#FEF8F0";

const DISCIPLINES = [
  { label: "UX/UI",          bg: ZEST,          text: INK },
  { label: "PRODUCT DESIGN", bg: "transparent",  text: OAT },
  { label: "RESEARCH",       bg: "transparent",  text: OAT },
  { label: "DESIGN SYSTEMS", bg: BLUE,           text: INK },
  { label: "AI",             bg: "transparent",  text: OAT },
  { label: "FRONTEND",       bg: PURPLE,         text: INK },
];

function DisciplineChip({ label, bg, text }: { label: string; bg: string; text: string }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        border: "2px solid rgba(254,248,240,0.25)",
        padding: "10px 14px",
        backgroundColor: hov ? ZEST : bg,
        transition: "background-color 0.15s",
        cursor: "default",
      }}>
      <span style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: 11, fontWeight: 700,
        letterSpacing: "0.1em",
        color: hov ? INK : text,
        transition: "color 0.15s",
      }}>{label}</span>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" style={{ backgroundColor: INK, borderTop: `3px solid ${INK}` }}>
      {/* Ticker — Yuzu Zest strip */}
      <div style={{ backgroundColor: ZEST, borderBottom: `2px solid ${INK}`, overflow: "hidden", whiteSpace: "nowrap", padding: "14px 0" }}>
        <div className="ticker-track">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="ticker-item">
              ARACELLI OSORIO · PRODUCT DESIGNER · UX/UI ·&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Split */}
      <div className="about-split">
        {/* Left */}
        <div className="about-left" style={{ borderRight: "2px solid rgba(254,248,240,0.14)" }}>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(40px, 5.5vw, 80px)",
            fontWeight: 700, color: OAT,
            letterSpacing: "-0.03em",
            lineHeight: 0.95, margin: "0 0 40px",
          }}>
            I DESIGN.
            <br />
            <span style={{ WebkitTextStroke: `2.5px ${ZEST}`, color: "transparent", display: "block" }}>
              I RESEARCH.
            </span>
            I BUILD.
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 40 }}>
            {DISCIPLINES.map((d) => <DisciplineChip key={d.label} {...d} />)}
          </div>

          <a href="#contact" className="btn-primary">LET'S TALK →</a>
        </div>

        {/* Right */}
        <div className="about-right">
          {/* Availability indicator */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            border: "2px solid rgba(254,248,240,0.22)",
            padding: "13px 18px",
            marginBottom: 36,
            boxShadow: `5px 5px 0 ${ZEST}`,
            width: "fit-content",
            maxWidth: "100%",
          }}>
            <span style={{
              display: "inline-block",
              width: 10, height: 10,
              backgroundColor: ZEST,
              borderRadius: "50%",
              border: `1px solid ${ZEST}`,
              flexShrink: 0,
              animation: "pulse 2s ease-in-out infinite",
            }} />
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 11, fontWeight: 700,
              letterSpacing: "0.12em", color: OAT,
              whiteSpace: "nowrap",
            }}>AVAILABLE FOR WORK</span>
          </div>

          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(14px, 1.4vw, 18px)", lineHeight: 1.75, color: OAT, marginBottom: 20 }}>
            I'm Aracelli — a Product Designer and UX/UI Designer based in Chile, working at the
            intersection of strategy, research, and visual craft.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(14px, 1.4vw, 18px)", lineHeight: 1.75, color: OAT, opacity: 0.7, marginBottom: 20 }}>
            I turn ambiguous problems into clear, human-centered digital experiences — from discovery
            and research through high-fidelity design and developer handoff.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(14px, 1.4vw, 18px)", lineHeight: 1.75, color: OAT, opacity: 0.7 }}>
            Lately I've been exploring how AI can augment creative workflows, and how to close the gap
            between design and frontend development.
          </p>

          <div style={{
            marginTop: 36,
            backgroundColor: PURPLE,
            border: `2px solid ${INK}`,
            boxShadow: `6px 6px 0 rgba(254,248,240,0.18)`,
            padding: "18px 22px",
          }}>
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(11px, 1vw, 13px)",
              fontWeight: 700,
              letterSpacing: "0.08em",
              color: INK, margin: 0,
            }}>
              OPEN TO FULL-TIME & FREELANCE — REMOTE OR SANTIAGO, CHILE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
