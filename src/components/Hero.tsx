import { useState, useEffect } from "react";

const INK    = "#23003F";
const BLUE   = "#8CA7F4";
const ZEST   = "#DBF48C";
const PURPLE = "#D98CF4";
const OAT    = "#FEF8F0";

const TITLES = ["PRODUCT DESIGNER", "UX/UI DESIGNER", "CREATIVE DEVELOPER"];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setFading(true);
      setTimeout(() => { setIdx((i) => (i + 1) % TITLES.length); setFading(false); }, 280);
    }, 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="top"
      className="hero-section"
      style={{
        backgroundColor: OAT,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ── Decorative shapes ── */}

      {/* Soft Blue square — top right */}
      <div aria-hidden style={{
        position: "absolute", top: "8%", right: "-4%",
        width: "clamp(120px, 20vw, 300px)", height: "clamp(120px, 20vw, 300px)",
        backgroundColor: BLUE, border: `3px solid ${INK}`,
        transform: "rotate(16deg)", zIndex: 0, pointerEvents: "none",
      }} />

      {/* Yuzu Zest circle — mid right */}
      <div aria-hidden style={{
        position: "absolute", top: "52%", right: "6%",
        width: "clamp(60px, 8vw, 120px)", height: "clamp(60px, 8vw, 120px)",
        backgroundColor: ZEST, border: `2px solid ${INK}`,
        borderRadius: "50%", zIndex: 0, pointerEvents: "none",
      }} />

      {/* Pastel Purple square — left side */}
      <div aria-hidden style={{
        position: "absolute", top: "38%", left: "2%",
        width: "clamp(32px, 4vw, 72px)", height: "clamp(32px, 4vw, 72px)",
        backgroundColor: PURPLE, border: `2px solid ${INK}`,
        transform: "rotate(-10deg)", zIndex: 0, pointerEvents: "none",
      }} />

      {/* Ink vertical bar */}
      <div aria-hidden style={{
        position: "absolute", top: "30%", right: "20%",
        width: "clamp(14px, 2vw, 32px)", height: "clamp(80px, 12vw, 180px)",
        backgroundColor: INK, border: `2px solid ${INK}`,
        transform: "rotate(3deg)", zIndex: 0, pointerEvents: "none",
      }} />

      {/* 4-pointed star */}
      <svg aria-hidden width="40" height="40" viewBox="0 0 48 48"
        style={{ position: "absolute", top: "22%", right: "34%", zIndex: 0, opacity: 0.35, pointerEvents: "none" }}>
        <path d="M24 0 L26.2 21.8 L48 24 L26.2 26.2 L24 48 L21.8 26.2 L0 24 L21.8 21.8 Z" fill={INK} />
      </svg>

      {/* Dashed circle */}
      <svg aria-hidden width="100" height="100" viewBox="0 0 120 120"
        style={{ position: "absolute", bottom: "12%", left: "4%", zIndex: 0, opacity: 0.16, pointerEvents: "none" }}>
        <circle cx="60" cy="60" r="56" fill="none" stroke={INK} strokeWidth="2" strokeDasharray="8 6" />
      </svg>

      {/* Cross */}
      <svg aria-hidden width="28" height="28" viewBox="0 0 32 32"
        style={{ position: "absolute", top: "18%", left: "12%", zIndex: 0, opacity: 0.22, pointerEvents: "none" }}>
        <line x1="16" y1="0" x2="16" y2="32" stroke={INK} strokeWidth="2.5" />
        <line x1="0" y1="16" x2="32" y2="16" stroke={INK} strokeWidth="2.5" />
      </svg>

      {/* Nav spacer */}
      <div style={{ height: 72, flexShrink: 0 }} />

      {/* Content */}
      <div className="hero-wrap">
        {/* Chile label */}
        <div style={{ marginBottom: 16 }}>
          <span className="tag" style={{ backgroundColor: INK, color: OAT, borderColor: INK }}>
            BASED IN CHILE · 2026
          </span>
        </div>

        {/* Main headline */}
        <h1 className="hero-headline">DISEÑO PARA HACER LAS COSAS MÁS HUMANAS.</h1>

        {/* Identity */}
        <div style={{ position: "relative", lineHeight: 1 }}>
          <h2 className="hero-name" style={{ position: "relative", zIndex: 1 }}>ARACELLI OSORIO</h2>
        </div>

        {/* Footer row */}
        <div className="hero-footer">
          {/* Rotating badge */}
          <div
            className="hero-badge"
            style={{
              backgroundColor: PURPLE,
              border: `2px solid ${INK}`,
              boxShadow: `5px 5px 0 ${INK}`,
            }}
          >
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(10px, 1.1vw, 12px)",
              letterSpacing: "0.14em",
              color: INK,
              margin: 0,
              opacity: fading ? 0 : 1,
              transition: "opacity 0.28s ease",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}>
              {TITLES[idx]}
            </p>
          </div>

          {/* Statement */}
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(13px, 1.3vw, 17px)",
            color: INK, lineHeight: 1.65,
            margin: 0, opacity: 0.68,
          }}>
            Designing digital experiences where people, technology and creativity meet.
          </p>

          {/* CTA */}
          <a href="#work" className="btn-primary">VIEW MY WORK →</a>
        </div>
      </div>

      {/* Bottom border */}
      <div style={{ height: 3, backgroundColor: INK, flexShrink: 0 }} />
    </section>
  );
}
