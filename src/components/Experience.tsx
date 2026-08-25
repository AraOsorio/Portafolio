import { useState } from "react";

const INK    = "#23003F";
const BLUE   = "#8CA7F4";
const ZEST   = "#DBF48C";
const PURPLE = "#D98CF4";
const OAT    = "#FEF8F0";

const ITEMS = [
  { role: "PRODUCT DESIGNER", org: "Freelance",                 period: "2024 — PRESENT", type: "FREELANCE", accent: ZEST   },
  { role: "UX/UI DESIGNER",   org: "Digital Agency · Santiago", period: "2022 — 2024",    type: "FULL-TIME", accent: PURPLE },
  { role: "JUNIOR DESIGNER",  org: "Creative Studio · Remote",  period: "2021 — 2022",    type: "FULL-TIME", accent: BLUE   },
];

export default function Experience() {
  return (
    <section id="experience" style={{ backgroundColor: BLUE, borderTop: `3px solid ${INK}` }}>
      <div style={{ borderBottom: `2px solid ${INK}` }}>
        <div className="exp-header">
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(28px, 4vw, 60px)",
            fontWeight: 700, color: INK,
            letterSpacing: "-0.03em", margin: 0,
          }}>EXPERIENCE</h2>
          <span className="tag" style={{ backgroundColor: ZEST, color: INK, borderColor: INK }}>
            3 ROLES
          </span>
        </div>
      </div>

      {ITEMS.map((item, i) => (
        <Row key={i} item={item} last={i === ITEMS.length - 1} />
      ))}
    </section>
  );
}

function Row({ item, last }: { item: (typeof ITEMS)[0]; last: boolean }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="exp-row"
      style={{
        borderBottom: last ? "none" : `2px solid ${INK}`,
        backgroundColor: hov ? INK : "transparent",
        transition: "background-color 0.15s",
        cursor: "default",
      }}
    >
      {/* Period */}
      <span style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: 11, fontWeight: 700,
        letterSpacing: "0.1em",
        color: hov ? item.accent : INK,
        opacity: hov ? 1 : 0.42,
        transition: "color 0.15s, opacity 0.15s",
        lineHeight: 1.4,
      }}>{item.period}</span>

      {/* Role + org */}
      <div>
        <h3 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(16px, 2vw, 28px)",
          fontWeight: 700,
          color: hov ? OAT : INK,
          letterSpacing: "-0.01em",
          margin: "0 0 4px",
          transition: "color 0.15s",
        }}>{item.role}</h3>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "clamp(12px, 1vw, 14px)",
          color: hov ? BLUE : INK,
          opacity: hov ? 0.65 : 0.45,
          margin: 0,
          transition: "color 0.15s",
        }}>{item.org}</p>
      </div>

      {/* Type badge */}
      <span className="tag" style={{
        backgroundColor: hov ? item.accent : "transparent",
        color: INK,
        borderColor: hov ? item.accent : INK,
        transition: "all 0.15s",
        flexShrink: 0,
      }}>{item.type}</span>
    </div>
  );
}
