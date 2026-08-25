import { useState } from "react";

const INK    = "#23003F";
const BLUE   = "#8CA7F4";
const ZEST   = "#DBF48C";
const PURPLE = "#D98CF4";
const OAT    = "#FEF8F0";

const ROW1 = [
  { label: "UX/UI DESIGN",   hoverBg: BLUE,   hoverText: INK },
  { label: "PRODUCT DESIGN", hoverBg: INK,    hoverText: OAT },
  { label: "UX RESEARCH",    hoverBg: PURPLE, hoverText: INK },
  { label: "DESIGN SYSTEMS", hoverBg: INK,    hoverText: OAT },
];
const ROW2 = [
  { label: "AI × DESIGN", hoverBg: PURPLE, hoverText: INK },
  { label: "FRONTEND",    hoverBg: BLUE,   hoverText: INK },
  { label: "FIGMA",       hoverBg: INK,    hoverText: OAT },
  { label: "REACT",       hoverBg: ZEST,   hoverText: INK },
];

function Chip({ label, hoverBg, hoverText }: { label: string; hoverBg: string; hoverText: string }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 700,
        fontSize: "clamp(18px, 2.5vw, 36px)",
        letterSpacing: "-0.01em",
        backgroundColor: hov ? hoverBg : "transparent",
        color: hov ? hoverText : INK,
        border: `2px solid ${INK}`,
        boxShadow: hov ? `6px 6px 0 ${INK}` : "none",
        transform: hov ? "translate(-3px,-3px)" : "none",
        padding: "12px 22px",
        transition: "all 0.15s ease",
        cursor: "default",
        userSelect: "none",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </div>
  );
}

export default function Skills() {
  return (
    <section style={{
      backgroundColor: OAT,
      borderTop: `3px solid ${INK}`,
      borderBottom: `3px solid ${INK}`,
    }}>
      <div style={{
        borderBottom: `2px solid ${INK}`,
        padding: "13px var(--pad-x)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 11, fontWeight: 700,
          letterSpacing: "0.2em", color: INK,
        }}>AREAS OF EXPERTISE</span>
        <span style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 11, color: INK, opacity: 0.45,
        }}>08 SKILLS</span>
      </div>

      <div style={{ padding: "52px var(--pad-x) 60px", overflow: "hidden" }}>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 10 }}>
          {ROW1.map((s) => <Chip key={s.label} {...s} />)}
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {ROW2.map((s) => <Chip key={s.label} {...s} />)}
        </div>
      </div>
    </section>
  );
}
