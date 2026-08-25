import { useState } from "react";
import { useParams, Link, Navigate } from "react-router";
import { getProject } from "../data/projects";

const INK    = "#23003F";
const BLUE   = "#8CA7F4";
const ZEST   = "#DBF48C";
const PURPLE = "#D98CF4";
const OAT    = "#FEF8F0";

// ── Primitives ────────────────────────────────────────────────────────────────

function SectionLabel({ text, bg = "transparent", color = INK }: { text: string; bg?: string; color?: string }) {
  return (
    <span style={{
      fontFamily: "'Inter', sans-serif",
      fontSize: 10, fontWeight: 700,
      textTransform: "uppercase" as const,
      letterSpacing: "0.18em",
      border: `2px solid ${INK}`,
      padding: "4px 10px",
      display: "inline-block",
      backgroundColor: bg,
      color,
    }}>{text}</span>
  );
}

function SectionHeader({ num, title, color = INK, labelBg, labelColor }: {
  num: string; title: string; color?: string; labelBg?: string; labelColor?: string;
}) {
  const isDark = color === OAT;
  const border = isDark ? "rgba(254,248,240,0.15)" : "rgba(35,0,63,0.15)";
  const numColor = isDark ? "rgba(254,248,240,0.32)" : "rgba(35,0,63,0.32)";
  const titleColor = labelColor ?? color;
  const hasBg = !!labelBg && labelBg !== "transparent";
  return (
    <div style={{ borderBottom: `2px solid ${border}`, padding: "48px var(--pad-x) 40px" }}>
      {num && (
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 14, fontWeight: 700,
          letterSpacing: "0.18em",
          color: numColor,
          display: "block",
          marginBottom: 18,
          textTransform: "uppercase" as const,
        }}>{num}</span>
      )}
      <h2 style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: "clamp(30px, 4vw, 48px)",
        fontWeight: 700,
        letterSpacing: "-0.025em",
        lineHeight: 1.05,
        margin: 0,
        color: titleColor,
        display: hasBg ? "inline-block" : "block",
        backgroundColor: hasBg ? labelBg : "transparent",
        padding: hasBg ? "6px 20px 10px" : 0,
      }}>{title}</h2>
    </div>
  );
}

function Placeholder({ text, height = 56 }: { text: string; height?: number }) {
  return (
    <div style={{
      border: "2px dashed rgba(35,0,63,0.25)",
      padding: "20px 24px",
      minHeight: height,
      display: "flex",
      alignItems: "center",
    }}>
      <span style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: 13,
        color: INK,
        opacity: 0.4,
        fontStyle: "italic",
      }}>{text}</span>
    </div>
  );
}

function ImagePlaceholder({ label, aspectRatio = "16/9", bg = PURPLE }: {
  label: string; aspectRatio?: string; bg?: string;
}) {
  return (
    <div style={{
      backgroundColor: bg,
      border: `2px solid ${INK}`,
      aspectRatio,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,
      width: "100%",
    }}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="2" y="2" width="36" height="36" rx="4" stroke={INK} strokeWidth="2" opacity="0.3" />
        <circle cx="13" cy="14" r="4" fill={INK} opacity="0.25" />
        <path d="M2 26 L12 18 L20 24 L28 16 L38 26" stroke={INK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
      </svg>
      <span style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: 11, fontWeight: 700,
        letterSpacing: "0.1em",
        color: INK,
        opacity: 0.35,
        textTransform: "uppercase" as const,
        textAlign: "center",
        padding: "0 20px",
      }}>{label}</span>
    </div>
  );
}

// ── Sections ──────────────────────────────────────────────────────────────────

function CaseNav({ project }: { project: ReturnType<typeof getProject> }) {
  if (!project) return null;
  return (
    <div style={{
      position: "sticky", top: 0, zIndex: 100,
      backgroundColor: INK, borderBottom: `2px solid ${INK}`,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 var(--pad-x)", height: 60, flexWrap: "wrap", gap: 8,
    }}>
      <Link
        to="/#work"
        style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", color: OAT, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = ZEST)}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = OAT)}
      >{"<- BACK TO WORK"}</Link>
      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.05em", color: PURPLE, opacity: 0.7 }}>ARA.OSORIO</span>
      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: OAT, opacity: 0.45, letterSpacing: "0.08em" }}>{project.tags.join(" · ")}</span>
    </div>
  );
}

function ProjectHero({ project }: { project: ReturnType<typeof getProject> }) {
  if (!project) return null;
  const onDark = project.heroText === OAT || project.heroText === "#FEF8F0";
  return (
    <section style={{ backgroundColor: project.heroBg, borderBottom: `3px solid ${INK}` }}>
      <div style={{ borderBottom: `2px solid ${onDark ? "rgba(254,248,240,0.2)" : INK}`, padding: "16px var(--pad-x)", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", color: project.heroText, opacity: 0.45 }}>{project.num} / 04</span>
        {project.tags.map((t) => (
          <span key={t} style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", border: `2px solid ${onDark ? "rgba(254,248,240,0.35)" : INK}`, padding: "3px 9px", color: project.heroText, display: "inline-block" }}>{t}</span>
        ))}
      </div>
      <div style={{ padding: "64px var(--pad-x) 48px" }}>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(52px, 9vw, 128px)", fontWeight: 700, color: project.heroText, letterSpacing: "-0.04em", lineHeight: 0.88, margin: "0 0 32px" }}>{project.fullTitle}</h1>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(15px, 1.4vw, 18px)", color: project.heroText, opacity: 0.75, lineHeight: 1.65, maxWidth: 600, margin: 0 }}>{project.intro}</p>
      </div>
      <div style={{ padding: "0 var(--pad-x)", borderTop: `2px solid ${onDark ? "rgba(254,248,240,0.2)" : INK}` }}>
        <ImagePlaceholder label="PROJECT HERO IMAGE -- ADD YOUR VISUAL HERE" aspectRatio="16/7" bg={onDark ? "rgba(255,255,255,0.06)" : "rgba(35,0,63,0.06)"} />
      </div>
    </section>
  );
}

function Overview({ project }: { project: ReturnType<typeof getProject> }) {
  if (!project) return null;
  const fields = [
    { label: "ROLE",         value: "[ADD ROLE]" },
    { label: "TEAM",         value: "[ADD TEAM]" },
    { label: "TIMELINE",     value: "[ADD TIMELINE]" },
    { label: "TOOLS",        value: "[ADD TOOLS]" },
    { label: "PROJECT TYPE", value: project.tags.join(" / ") },
    { label: "YEAR",         value: project.year },
  ];
  return (
    <section style={{ backgroundColor: OAT, borderBottom: `3px solid ${INK}` }}>
      <SectionHeader num="01" title="PROJECT OVERVIEW" labelBg={INK} labelColor={OAT} />
      <div style={{ padding: "40px var(--pad-x) 0" }}>
        <Placeholder text="[ADD PROJECT SUMMARY -- 2-3 sentences describing what this project is and what was achieved]" height={96} />
      </div>
      <div className="resumen-grid resumen-grid-mb" style={{ padding: "40px var(--pad-x) 0" }}>
        {fields.map((f) => (
          <div key={f.label} className="resumen-col">
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", color: INK, opacity: 0.4, margin: "0 0 8px", textTransform: "uppercase" as const }}>{f.label}</p>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(13px, 1.1vw, 15px)", fontWeight: 600, color: INK, margin: 0, letterSpacing: "-0.01em", lineHeight: 1.5, whiteSpace: "pre-line" }}>{f.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Context() {
  return (
    <section style={{ backgroundColor: OAT, borderBottom: `3px solid ${INK}` }}>
      <SectionHeader num="02" title="CONTEXT" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "0 80px", padding: "0 var(--pad-x) 64px", alignItems: "start" }} className="cs-two-col">
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 700, color: INK, letterSpacing: "-0.02em", margin: 0, lineHeight: 1.1 }}>WHAT IS THIS PROJECT?</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Placeholder text="[ADD CONTEXT -- What is this product? Who is it for? Why does it exist?]" height={120} />
          <Placeholder text="[ADD BUSINESS OR USER CONTEXT]" height={80} />
        </div>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section style={{ backgroundColor: INK, borderBottom: `3px solid ${INK}` }}>
      <SectionHeader num="03" title="THE PROBLEM" color={OAT} labelBg={ZEST} labelColor={INK} />
      <div style={{ padding: "0 var(--pad-x) 80px" }}>
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: OAT, opacity: 0.4, margin: "0 0 24px", textTransform: "uppercase" as const }}>PROBLEM STATEMENT</p>
        <div style={{ borderLeft: `4px solid ${ZEST}`, paddingLeft: 32, marginBottom: 48 }}>
          <Placeholder text="[ADD PROBLEM STATEMENT -- What is the core challenge this project addresses?]" height={100} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))", gap: 16 }}>
          {[1, 2, 3].map((n) => (
            <div key={n} style={{ border: "2px solid rgba(254,248,240,0.15)", padding: "28px", backgroundColor: "rgba(254,248,240,0.04)" }}>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 700, color: ZEST, opacity: 0.55, display: "block", marginBottom: 14 }}>0{n}</span>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(16px, 1.5vw, 20px)", fontWeight: 700, color: OAT, letterSpacing: "-0.01em", margin: "0 0 12px", lineHeight: 1.25 }}>[ADD CHALLENGE TITLE 0{n}]</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(14px, 1.3vw, 16px)", color: OAT, opacity: 0.6, margin: 0, lineHeight: 1.6 }}>[ADD CHALLENGE DESCRIPTION]</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Research() {
  const METHODS = ["USER INTERVIEWS", "SURVEYS", "DESK RESEARCH", "COMPETITIVE ANALYSIS", "USABILITY TESTING", "USER OBSERVATION"];
  return (
    <section style={{ backgroundColor: BLUE, borderBottom: `3px solid ${INK}` }}>
      <SectionHeader num="04" title="RESEARCH" />
      <div style={{ padding: "0 var(--pad-x) 64px" }}>
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: INK, opacity: 0.45, margin: "0 0 24px", textTransform: "uppercase" as const }}>RESEARCH METHODS -- MARK THOSE USED</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 40 }}>
          {METHODS.map((m) => (
            <div key={m} style={{ border: "2px dashed rgba(35,0,63,0.3)", padding: "10px 16px", display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", border: "2px solid rgba(35,0,63,0.3)", display: "block", flexShrink: 0 }} />
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: INK, opacity: 0.4 }}>{m}</span>
            </div>
          ))}
        </div>
        <Placeholder text="[ADD RESEARCH CONTEXT -- How many users? What was the research goal? What methods were selected?]" height={120} />
      </div>
    </section>
  );
}

function Insights() {
  return (
    <section style={{ backgroundColor: OAT, borderBottom: `3px solid ${INK}` }}>
      <SectionHeader num="05" title="KEY INSIGHTS" labelBg={ZEST} labelColor={INK} />
      <div style={{ padding: "0 var(--pad-x) 64px" }}>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 700, color: INK, letterSpacing: "-0.02em", margin: "0 0 40px" }}>WHAT WE DISCOVERED</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))", gap: 16 }}>
          {[1, 2, 3].map((n) => (
            <div key={n} style={{ border: `2px solid ${INK}`, boxShadow: `6px 6px 0 ${INK}`, padding: "32px 28px", backgroundColor: n === 2 ? BLUE : "transparent" }}>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 48, fontWeight: 700, color: INK, opacity: 0.12, lineHeight: 1, display: "block", marginBottom: 16, letterSpacing: "-0.03em" }}>0{n}</span>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(16px, 1.5vw, 20px)", fontWeight: 700, color: INK, letterSpacing: "-0.01em", margin: "0 0 12px", lineHeight: 1.25 }}>[ADD INSIGHT TITLE 0{n}]</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(14px, 1.3vw, 16px)", color: INK, opacity: 0.65, margin: 0, lineHeight: 1.6 }}>[ADD INSIGHT DESCRIPTION]</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DesignDecisions() {
  const items = [
    { num: "01", title: "[ADD DECISION TITLE]", desc: "[Describe the key design decision and why it was made. What problem did it solve?]" },
    { num: "02", title: "[ADD DECISION TITLE]", desc: "[Describe the key design decision and why it was made. What problem did it solve?]" },
    { num: "03", title: "[ADD DECISION TITLE]", desc: "[Describe the key design decision and why it was made. What problem did it solve?]" },
    { num: "04", title: "[ADD DECISION TITLE]", desc: "[Describe the key design decision and why it was made. What problem did it solve?]" },
  ];
  return (
    <section style={{ backgroundColor: OAT, borderBottom: `3px solid ${INK}` }}>
      <SectionHeader num="06" title="EACH DECISION HAD TO REDUCE FRICTION" labelBg={INK} labelColor={OAT} />
      <div style={{ padding: "48px var(--pad-x) 80px" }}>
        <div className="decisions-split">

          {/* LEFT — vertical decision list */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {items.map((d, i) => (
              <div key={d.num} style={{
                borderTop: `${i === 0 ? "2px" : "1px"} solid rgba(35,0,63,${i === 0 ? "0.25" : "0.12"})`,
                padding: "32px 0",
              }}>
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 13, fontWeight: 700, letterSpacing: "0.1em",
                  color: INK, opacity: 0.3, display: "block", marginBottom: 10,
                }}>{d.num}</span>
                <h3 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "clamp(20px, 2.2vw, 28px)", fontWeight: 700,
                  color: INK, letterSpacing: "-0.02em",
                  margin: "0 0 12px", lineHeight: 1.15,
                }}>{d.title}</h3>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(14px, 1.3vw, 17px)", color: INK, opacity: 0.65,
                  margin: 0, lineHeight: 1.7,
                }}>{d.desc}</p>
              </div>
            ))}
            <div style={{ borderTop: "1px solid rgba(35,0,63,0.12)" }} />
          </div>

          {/* RIGHT — image column (sticky on desktop) */}
          <div className="decisions-image-col">
            <ImagePlaceholder
              label="ADD UI SCREENS OR MOCKUP RELATED TO DESIGN DECISIONS"
              aspectRatio="3/4"
              bg={`${PURPLE}22`}
            />
          </div>

        </div>
      </div>
    </section>
  );
}

function IAFlow() {
  return (
    <section style={{ backgroundColor: INK, borderBottom: `3px solid ${INK}` }}>
      <SectionHeader num="07" title="IA + USER FLOW" color={OAT} labelBg={PURPLE} labelColor={INK} />
      <div style={{ padding: "0 var(--pad-x) 64px" }}>
        <ImagePlaceholder label="ADD YOUR IA DIAGRAM, USER FLOW OR SITEMAP -- EXPORT FROM FIGMA" aspectRatio="16/8" bg="rgba(140,167,244,0.1)" />
        <div style={{ marginTop: 24 }}>
          <Placeholder text="[ADD DESCRIPTION -- Explain the structure or flow and the decisions behind it]" height={80} />
        </div>
      </div>
    </section>
  );
}

function Wireframes() {
  return (
    <section style={{ backgroundColor: PURPLE, borderBottom: `3px solid ${INK}` }}>
      <SectionHeader num="08" title="WIREFRAMES" />
      <div style={{ padding: "0 var(--pad-x) 64px" }}>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 700, color: INK, letterSpacing: "-0.02em", margin: "0 0 40px" }}>LOW-FIDELITY EXPLORATIONS</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 360px), 1fr))", gap: 16, marginBottom: 16 }}>
          {["MAIN FLOW -- WIREFRAME 01", "MAIN FLOW -- WIREFRAME 02", "MOBILE -- WIREFRAME 03"].map((l) => (
            <ImagePlaceholder key={l} label={l} aspectRatio="4/3" bg="rgba(35,0,63,0.06)" />
          ))}
        </div>
        <ImagePlaceholder label="FULL WIREFRAME OVERVIEW -- ADD YOUR EXPORT HERE" aspectRatio="21/9" bg="rgba(35,0,63,0.06)" />
        <div style={{ marginTop: 24 }}>
          <Placeholder text="[ADD WIREFRAME CONTEXT -- What was being explored? What key decisions were made at this stage?]" height={80} />
        </div>
      </div>
    </section>
  );
}

function UIDesign() {
  return (
    <section style={{ backgroundColor: OAT, borderBottom: `3px solid ${INK}` }}>
      <SectionHeader num="09" title="UI DESIGN" labelBg={INK} labelColor={OAT} />
      <div style={{ padding: "0 var(--pad-x) 64px" }}>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 700, color: INK, letterSpacing: "-0.02em", margin: "0 0 40px" }}>FINAL UI SCREENS</h3>
        <div style={{ marginBottom: 16 }}>
          <ImagePlaceholder label="HERO SCREEN -- ADD YOUR MAIN UI VISUAL" aspectRatio="16/9" bg={PURPLE} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 400px), 1fr))", gap: 16, marginBottom: 16 }}>
          <ImagePlaceholder label="SCREEN 02 -- DESKTOP" aspectRatio="4/3" bg={PURPLE} />
          <ImagePlaceholder label="SCREEN 03 -- DESKTOP" aspectRatio="4/3" bg={PURPLE} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 200px), 1fr))", gap: 16 }}>
          {["MOBILE 01", "MOBILE 02", "MOBILE 03", "MOBILE 04"].map((l) => (
            <ImagePlaceholder key={l} label={l} aspectRatio="9/16" bg={PURPLE} />
          ))}
        </div>
        <div style={{ marginTop: 32 }}>
          <Placeholder text="[ADD UI DESIGN DESCRIPTION -- Key design decisions, rationale, component highlights]" height={80} />
        </div>
      </div>
    </section>
  );
}

function DesignSystemSection({ accentColor }: { accentColor: string }) {
  const tokens = [
    { label: "COLOR",      items: ["Primary", "Secondary", "Accent", "Background", "Surface"] },
    { label: "TYPOGRAPHY", items: ["Display / 700", "H1 / 700", "H2 / 600", "Body / 400", "Caption / 500"] },
    { label: "COMPONENTS", items: ["Buttons", "Cards", "Input fields", "Navigation", "Modals"] },
  ];
  return (
    <section style={{ backgroundColor: INK, borderBottom: `3px solid ${INK}` }}>
      <SectionHeader num="10" title="DESIGN SYSTEM" color={OAT} labelBg={accentColor} labelColor={INK} />
      <div style={{ padding: "0 var(--pad-x) 64px" }}>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 700, color: OAT, letterSpacing: "-0.02em", margin: "0 0 40px" }}>VISUAL COMPONENTS</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 320px), 1fr))", gap: 2, marginBottom: 24 }}>
          {tokens.map((t) => (
            <div key={t.label} style={{ border: "2px solid rgba(254,248,240,0.12)", padding: "28px" }}>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: ZEST, margin: "0 0 16px", textTransform: "uppercase" as const }}>{t.label}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {t.items.map((item) => (
                  <div key={item} style={{ borderBottom: "1px solid rgba(254,248,240,0.08)", paddingBottom: 8 }}>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: OAT, opacity: 0.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <ImagePlaceholder label="ADD YOUR DESIGN SYSTEM EXPORT -- COLORS, TYPE, COMPONENTS" aspectRatio="16/7" bg="rgba(140,167,244,0.1)" />
      </div>
    </section>
  );
}

function Prototype() {
  return (
    <section style={{ backgroundColor: OAT, borderBottom: `3px solid ${INK}` }}>
      <SectionHeader num="11" title="PROTOTYPE" />
      <div style={{ padding: "0 var(--pad-x) 64px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "0 64px", alignItems: "center" }} className="cs-two-col">
          <div>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 700, color: INK, letterSpacing: "-0.02em", margin: "0 0 24px" }}>INTERACTIVE PROTOTYPE</h3>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", color: INK, backgroundColor: ZEST, border: `2px solid ${INK}`, boxShadow: `5px 5px 0 ${INK}`, padding: "13px 24px", textDecoration: "none" }}>VIEW PROTOTYPE</a>
          </div>
          <ImagePlaceholder label="EMBED FIGMA PROTOTYPE, LOOM RECORDING OR VIDEO HERE" aspectRatio="16/9" bg={PURPLE} />
        </div>
      </div>
    </section>
  );
}

function FinalProduct({ heroBg, heroText }: { heroBg: string; heroText: string }) {
  const onDark = heroBg === INK;
  return (
    <section style={{ backgroundColor: heroBg, borderBottom: `3px solid ${INK}` }}>
      <SectionHeader
        num="12"
        title="THE FINAL PRODUCT"
        color={onDark ? OAT : INK}
        labelBg={onDark ? OAT : INK}
        labelColor={onDark ? INK : OAT}
      />
      <div style={{ padding: "0 var(--pad-x) 64px" }}>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(40px, 6vw, 88px)", fontWeight: 700, color: heroText, letterSpacing: "-0.04em", lineHeight: 0.9, margin: "0 0 40px" }}>THE SOLUTION</h3>
        <div style={{ marginBottom: 16 }}>
          <ImagePlaceholder label="FINAL PRODUCT -- HERO VISUAL -- ADD YOUR BEST SCREENS HERE" aspectRatio="16/8" bg={onDark ? "rgba(140,167,244,0.12)" : "rgba(35,0,63,0.08)"} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 360px), 1fr))", gap: 16 }}>
          <ImagePlaceholder label="FINAL SCREEN 02" aspectRatio="4/3" bg={onDark ? "rgba(140,167,244,0.12)" : "rgba(35,0,63,0.08)"} />
          <ImagePlaceholder label="FINAL SCREEN 03" aspectRatio="4/3" bg={onDark ? "rgba(140,167,244,0.12)" : "rgba(35,0,63,0.08)"} />
        </div>
        <div style={{ marginTop: 32 }}>
          <Placeholder text="[ADD FINAL SOLUTION DESCRIPTION -- What is the final product? What does it solve?]" height={80} />
        </div>
      </div>
    </section>
  );
}

function Outcome() {
  const blocks = [
    { label: "RESULTS",      placeholder: "[ADD RESULTS -- What changed after launch or delivery?]" },
    { label: "IMPACT",       placeholder: "[ADD IMPACT -- Who was affected and how?]" },
    { label: "WHAT CHANGED", placeholder: "[ADD WHAT CHANGED -- How did the product improve the experience?]" },
  ];
  return (
    <section style={{ backgroundColor: OAT, borderBottom: `3px solid ${INK}` }}>
      <SectionHeader num="13" title="OUTCOME" labelBg={ZEST} labelColor={INK} />
      <div style={{ padding: "0 var(--pad-x) 64px" }}>
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 700, color: INK, letterSpacing: "-0.02em", margin: "0 0 40px" }}>RESULTS AND IMPACT</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))", border: `2px solid ${INK}` }}>
          {blocks.map((b, i) => (
            <div key={b.label} style={{ padding: "36px 32px", borderRight: i < blocks.length - 1 ? `2px solid ${INK}` : "none" }}>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: INK, opacity: 0.4, margin: "0 0 16px", textTransform: "uppercase" as const }}>{b.label}</p>
              <Placeholder text={b.placeholder} height={80} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Learnings() {
  return (
    <section style={{ backgroundColor: BLUE, borderBottom: `3px solid ${INK}` }}>
      <SectionHeader num="14" title="WHAT I LEARNED" />
      <div style={{ padding: "0 var(--pad-x) 64px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))", gap: 24 }}>
          {[1, 2, 3, 4].map((n) => (
            <div key={n} style={{ borderTop: `4px solid ${n % 2 === 0 ? ZEST : INK}`, paddingTop: 20 }}>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", color: INK, opacity: 0.35, display: "block", marginBottom: 14 }}>0{n}</span>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(16px, 1.5vw, 20px)", fontWeight: 700, color: INK, letterSpacing: "-0.01em", margin: "0 0 10px", lineHeight: 1.25 }}>[ADD LEARNING TITLE 0{n}]</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(14px, 1.3vw, 16px)", color: INK, opacity: 0.65, margin: 0, lineHeight: 1.6 }}>[ADD LEARNING DESCRIPTION]</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NextProject({ slug, title }: { slug: string; title: string }) {
  const [hov, setHov] = useState(false);
  return (
    <section style={{ backgroundColor: INK }}>
      <Link
        to={`/works/${slug}`}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{ display: "block", padding: "80px var(--pad-x)", textDecoration: "none", backgroundColor: hov ? "#160026" : INK, transition: "background-color 0.2s" }}
      >
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", color: ZEST, margin: "0 0 20px", textTransform: "uppercase" as const }}>NEXT PROJECT</p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(40px, 7vw, 100px)", fontWeight: 700, color: hov ? ZEST : OAT, letterSpacing: "-0.04em", lineHeight: 0.9, margin: 0, transition: "color 0.2s" }}>{title}</h2>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(24px, 4vw, 56px)", fontWeight: 700, color: hov ? ZEST : "rgba(254,248,240,0.25)", transition: "color 0.2s, transform 0.2s", display: "inline-block", transform: hov ? "translateX(12px)" : "translateX(0)" }}>{">"}</span>
        </div>
      </Link>
    </section>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProject(slug ?? "");

  if (!project) return <Navigate to="/" replace />;

  return (
    <div style={{ backgroundColor: OAT }}>
      <CaseNav project={project} />
      <ProjectHero project={project} />
      <Overview project={project} />
      <Context />
      <Problem />
      <Research />
      <Insights />
      <DesignDecisions />
      <IAFlow />
      <Wireframes />
      <UIDesign />
      <DesignSystemSection accentColor={project.accentColor} />
      <Prototype />
      <FinalProduct heroBg={project.heroBg} heroText={project.heroText} />
      <Outcome />
      <Learnings />
      <NextProject slug={project.nextSlug} title={project.nextTitle} />
    </div>
  );
}
