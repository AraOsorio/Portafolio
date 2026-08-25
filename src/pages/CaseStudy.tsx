import { useState } from "react";
import { useParams, Link, Navigate } from "react-router";
import { getProject } from "../data/projects";
import { useScrollReveal } from "../animations";

const INK    = "#23003F";
const BLUE   = "#8CA7F4";
const ZEST   = "#DBF48C";
const PURPLE = "#D98CF4";
const OAT    = "#FEF8F0";
const CARD_BG = "#2F174D";
const CARD_BD = "#5A3C73";

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
        {project.hook && <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(22px, 3vw, 38px)", fontWeight: 700, color: project.heroText, letterSpacing: "-0.025em", lineHeight: 1.05, maxWidth: 760, margin: "0 0 24px" }}>{project.hook}</p>}
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

function OncoBotSurveyMetric({ label, value, detail }: { label: string; value: number; detail: string }) {
  const reveal = useScrollReveal<HTMLDivElement>({ direction: "right", threshold: 0.1 });
  return (
    <div style={{ border: `1.5px solid ${CARD_BD}`, borderRadius: 4, backgroundColor: CARD_BG, padding: "24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "baseline", marginBottom: 14 }}>
        <span style={{ color: OAT, fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(15px, 1.4vw, 19px)", fontWeight: 700 }}>{label}</span>
        <strong style={{ color: ZEST, fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px, 3vw, 44px)", lineHeight: 1 }}>{value}%</strong>
      </div>
      <div style={{ backgroundColor: "rgba(254,248,240,0.12)", height: 12, overflow: "hidden", marginBottom: 14 }}>
        <div ref={reveal.ref} className={`${reveal.className} oncobot-survey-bar${reveal.isVisible ? " is-visible" : ""}`} style={{ "--survey-value": `${value}%`, backgroundColor: ZEST, height: "100%" } as React.CSSProperties} />
      </div>
      <span style={{ color: OAT, fontFamily: "'Inter', sans-serif", fontSize: 12, lineHeight: 1.5, opacity: 0.65 }}>{detail}</span>
    </div>
  );
}

function OncoBotResearch() {
  return (
    <section style={{ backgroundColor: INK, borderBottom: `3px solid ${INK}` }}>
      <SectionHeader num="03" title="INVESTIGAR ANTES DE DISEÑAR" color={OAT} labelBg={BLUE} labelColor={INK} />
      <div style={{ padding: "0 var(--pad-x) 64px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "0 80px", alignItems: "start" }} className="cs-two-col">
          <div>
            <p style={{ color: ZEST, fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", margin: "0 0 18px" }}>ENCUESTA · GOOGLE FORMS</p>
            <p style={{ color: OAT, fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px, 4vw, 56px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 0.92, margin: 0 }}>7 PARTICIPANTES.<br />18 PREGUNTAS.</p>
          </div>
          <div>
            <p style={{ color: OAT, fontFamily: "'Inter', sans-serif", fontSize: "clamp(15px, 1.3vw, 18px)", lineHeight: 1.65, margin: "0 0 24px", opacity: 0.78 }}>La encuesta buscó caracterizar demográficamente a potenciales usuarios y conocer sus condiciones de acceso digital.</p>
            <div className="motion-stagger is-visible" style={{ display: "grid", gap: 12 }}>
              <OncoBotSurveyMetric label="Mujeres, madres o responsables legales" value={85} detail="85% de las personas encuestadas correspondía a este perfil." />
              <OncoBotSurveyMetric label="Acceso a Wi‑Fi y redes sociales" value={100} detail="El 100% indicó contar con ambas formas de acceso." />
              <OncoBotSurveyMetric label="Acceso a red 4G" value={85} detail="El 85% señaló tener acceso a una red 4G." />
            </div>
          </div>
        </div>

        <div style={{ borderTop: "2px solid rgba(254,248,240,0.15)", marginTop: 64, paddingTop: 48 }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, flexWrap: "wrap", marginBottom: 24 }}>
            <div>
              <p style={{ color: ZEST, fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", margin: "0 0 12px" }}>ENTREVISTAS · VIDEOLLAMADAS</p>
              <h3 style={{ color: OAT, fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 700, letterSpacing: "-0.03em", margin: 0 }}>2 VOCES PARA ENTENDER EL PROCESO.</h3>
            </div>
            <span style={{ color: OAT, fontFamily: "'Inter', sans-serif", fontSize: 13, opacity: 0.55 }}>10 preguntas por entrevista</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: 16 }}>
            {["FOTOGRAFÍA / CECILIA DÍAZ", "FOTOGRAFÍA / KAREN MUÑOZ"].map((label, index) => (
              <div key={label} style={{ border: `1.5px solid ${CARD_BD}`, borderRadius: 4, backgroundColor: CARD_BG }}>
                <ImagePlaceholder label={label} aspectRatio="4/3" bg={index === 0 ? PURPLE : BLUE} />
                <div style={{ borderTop: `1.5px solid ${CARD_BD}`, padding: "20px 24px" }}>
                  <p style={{ color: ZEST, fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", margin: "0 0 10px" }}>{index === 0 ? "CECILIA · 48 AÑOS · ASISTENTE SOCIAL" : "KAREN · 33 AÑOS · TERAPEUTA OCUPACIONAL"}</p>
                  <p style={{ color: OAT, fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.6, margin: 0, opacity: 0.72 }}>Las entrevistas reflejaron la necesidad de orientación y apoyo para saber a quién preguntar y cómo comenzar.</p>
                  <blockquote style={{ borderLeft: `3px solid ${ZEST}`, color: OAT, fontFamily: "'Inter', sans-serif", fontSize: 13, fontStyle: "italic", lineHeight: 1.55, margin: "18px 0 0", paddingLeft: 14, opacity: 0.55 }}>CITA DE ENTREVISTA · AGREGAR TESTIMONIO ORIGINAL</blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const ONCOBOT_BENCHMARK = [
  {
    name: "Hello Doctor",
    works: "Asesoría y consulta por videollamada.",
    problem: "Espaciado y alineación de elementos gráficos.",
    learning: "Mantener una experiencia amigable y sencilla.",
    detail: "2 pasos · Tono informal y técnico · Mensajes acotados · Velocidad rápida.",
  },
  {
    name: "BELONG",
    works: "Red de apoyo internacional con especialistas.",
    problem: "Falta de claridad en la jerarquía y orden de los elementos.",
    learning: "Organizar la información y priorizar las acciones clave.",
    detail: "2 pasos · Tono formal y técnico · Mensajes acotados · Velocidad rápida.",
  },
  {
    name: "Cancer.net",
    works: "Registro de medicamentos, citas e informe de salud.",
    problem: "Diseño anticuado y exceso de texto.",
    learning: "Centralizar el tratamiento sin sobrecargar la interfaz.",
    detail: "2 pasos · Tono formal y técnico · Velocidad rápida.",
  },
  {
    name: "CLC Móvil",
    works: "Botón de emergencia, citas médicas y perfil de usuario.",
    problem: "Falta una sección de exámenes realizados.",
    learning: "Facilitar el acceso directo a emergencia y datos clínicos.",
    detail: "2 pasos · Tono formal y técnico · Mensajes acotados · Velocidad rápida.",
  },
  {
    name: "My Cancer Tracker",
    works: "Registro de diagnóstico, tratamiento y efectos secundarios.",
    problem: "Sin presentación clara; solo en inglés y sin imagen corporativa.",
    learning: "Usar una identidad clara y un ingreso de información simple.",
    detail: "2 pasos · Tono directo y poco texto · Mensajes acotados · Velocidad rápida.",
  },
  {
    name: "MEDS",
    works: "Seguimiento del tratamiento médico.",
    problem: "Demasiados espacios en blanco y falta de flujo de acciones.",
    learning: "Conectar la información con acciones claras y consecutivas.",
    detail: "2 pasos · Tono directo y técnico · Mensajes muy acotados · Velocidad rápida.",
  },
] as const;

function OncoBotBenchmark() {
  const [activeIndex, setActiveIndex] = useState(0);
  const reveal = useScrollReveal<HTMLDivElement>({ direction: "up", threshold: 0.08 });
  const active = ONCOBOT_BENCHMARK[activeIndex];
  const points = [
    ["Qué funciona", active.works],
    ["Problema UX principal", active.problem],
    ["Aprendizaje para OncoBot", active.learning],
    ["Dato relevante", active.detail],
  ];

  return (
    <section style={{ backgroundColor: BLUE, borderBottom: `3px solid ${INK}` }}>
      <SectionHeader num="06" title="APRENDER DEL ECOSISTEMA" />
      <div style={{ padding: "0 var(--pad-x) 64px" }}>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(15px, 1.4vw, 18px)", color: INK, opacity: 0.72, lineHeight: 1.75, maxWidth: 720, margin: "0 0 32px" }}>
          Se analizaron seis aplicaciones para identificar patrones y oportunidades para OncoBot.
        </p>
        <div ref={reveal.ref} className={reveal.className}>
          <div role="tablist" aria-label="Aplicaciones analizadas en el benchmark" style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 24 }}>
            {ONCOBOT_BENCHMARK.map((item, index) => (
              <button key={item.name} type="button" role="tab" aria-selected={activeIndex === index} onClick={() => setActiveIndex(index)} style={{ backgroundColor: activeIndex === index ? INK : OAT, border: `2px solid ${INK}`, color: activeIndex === index ? OAT : INK, cursor: "pointer", fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.04em", minHeight: 46, padding: "12px 16px" }}>
                {item.name}
              </button>
            ))}
          </div>
          <div style={{ backgroundColor: OAT, border: `2px solid ${INK}`, boxShadow: `6px 6px 0 ${INK}`, padding: "clamp(24px, 4vw, 40px)" }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: 16, borderBottom: `2px solid ${INK}`, marginBottom: 28, paddingBottom: 20 }}>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(30px, 4vw, 52px)", fontWeight: 700, color: INK, letterSpacing: "-0.04em", lineHeight: 0.9, margin: 0 }}>{active.name}</h3>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: INK, opacity: 0.55 }}>REFERENTE {activeIndex + 1} / 06</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: 24 }}>
              {points.map(([label, value]) => (
                <div key={label} style={{ borderTop: `2px solid ${INK}`, paddingTop: 14 }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", color: INK, opacity: 0.42, margin: "0 0 10px", textTransform: "uppercase" }}>{label}</p>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(16px, 1.5vw, 21px)", fontWeight: 600, color: INK, lineHeight: 1.25, margin: 0 }}>{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: INK, color: OAT, border: `2px solid ${INK}`, marginTop: 40, padding: "28px" }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: ZEST, margin: "0 0 18px", textTransform: "uppercase" }}>Patrones y oportunidades para OncoBot</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))", gap: 20 }}>
            {["Acceso rápido a información clave.", "Jerarquía y acciones fáciles de entender.", "Mensajes breves, directos y técnicos cuando corresponde.", "Integrar emergencia, tratamiento, citas y ficha clínica."].map((item, index) => <p key={item} style={{ borderTop: `2px solid ${index % 2 === 0 ? ZEST : BLUE}`, paddingTop: 14, fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.6, margin: 0, color: OAT, opacity: 0.82 }}>{item}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function OncoBotCaseStudy({ project }: { project: ReturnType<typeof getProject> }) {
  if (!project) return null;
  const section = (num: string, title: string, children: React.ReactNode, color = OAT, labelBg?: string, labelColor?: string) => (
    <section style={{ backgroundColor: color, borderBottom: `3px solid ${INK}` }}>
      <SectionHeader num={num} title={title} color={color === INK ? OAT : INK} labelBg={labelBg} labelColor={labelColor} />
      <div style={{ padding: "0 var(--pad-x) 64px", color: color === INK ? OAT : INK }}>{children}</div>
    </section>
  );
  const cards = (items: string[], cardColor = "transparent") => {
    const darkCards = cardColor === INK;
    const backgroundColor = darkCards ? CARD_BG : cardColor;
    const borderColor = darkCards ? CARD_BD : INK;
    const textColor = darkCards ? OAT : INK;
    return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))", gap: 16 }}>
      {items.map((item, index) => <div key={item} style={{ border: `1.5px solid ${borderColor}`, borderRadius: 4, padding: "28px", backgroundColor, color: textColor }}><span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 700, color: darkCards ? ZEST : INK, opacity: 0.7 }}>0{index + 1}</span><p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(16px, 1.5vw, 22px)", fontWeight: 700, color: textColor, lineHeight: 1.2, margin: "18px 0 0" }}>{item}</p></div>)}
    </div>
    );
  };
  const note = (text: string, height: number) => (
    <div style={{ backgroundColor: CARD_BG, border: `1.5px solid ${CARD_BD}`, borderRadius: 4, padding: "20px 24px", minHeight: height, display: "flex", alignItems: "center" }}>
      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: OAT, opacity: 0.7, lineHeight: 1.6 }}>{text}</span>
    </div>
  );

  return <>
    {section("01", "CUANDO TODA LA INFORMACIÓN IMPORTA", <div className="cs-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "0 80px" }}><h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(22px, 2.5vw, 32px)", margin: 0 }}>ATENCIÓN ONCOLÓGICA INFANTIL</h3><div><p style={{ fontFamily: "'Inter', sans-serif", fontSize: 17, lineHeight: 1.7, margin: "0 0 20px" }}>OncoBot aborda las necesidades de pacientes oncológicos infantiles y sus tutores, reuniendo información clínica y apoyo en una misma experiencia.</p>{note("Proyecto desarrollado durante un Diplomado UX Design.", 80)}</div></div>, OAT, INK, OAT)}
    {section("02", "EL PROBLEMA", <><p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(24px, 4vw, 52px)", fontWeight: 700, color: OAT, lineHeight: 0.95, maxWidth: 900, margin: "0 0 40px" }}>Reducir el tiempo de espera y facilitar la atención en una emergencia vital.</p>{cards(["Falta de una ficha clínica portátil y accesible.", "Necesidad de asesoría y contención ante una urgencia.", "Falta de priorización en la atención médica."], INK)}</>, INK, OAT, ZEST)}
    <OncoBotResearch />
    {section("04", "ENTENDER A QUIENES CUIDAN", <><h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(22px, 2.5vw, 32px)", margin: "0 0 32px" }}>DOS PROTOPERSONAS, UNA NECESIDAD COMPARTIDA.</h3>{cards(["Cecilia Díaz, 48 años, asistente social: busca una guía y fuente fidedigna.", "Karen Muñoz, 33 años, terapeuta ocupacional: espera agilizar los procesos clínicos.", "Ambas valoran orientación, apoyo y facilidad para la atención."])}</>, OAT)}
    {section("05", "MAPEAR LA EXPERIENCIA", <div className="cs-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "0 80px" }}><h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, margin: 0 }}>CUSTOMER JOURNEY</h3><div><ImagePlaceholder label="CUSTOMER JOURNEY -- ADD ORIGINAL MAP" aspectRatio="16/7" bg={PURPLE} /><p style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.6, margin: "24px 0 0" }}>Se observaron dificultades en onboarding, iconos, ayuda inmediata, importación de proveedores e informes.</p></div></div>, OAT)}
    <OncoBotBenchmark />
    {section("07", "ORDENAR LA EXPERIENCIA", <><ImagePlaceholder label="SITEMAP -- PERFIL, FICHA CLÍNICA, TRATAMIENTO, SOS Y CITAS" aspectRatio="16/7" bg={PURPLE} /><p style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.6, margin: "24px 0 0" }}>La arquitectura reúne perfil, datos del tutor, ficha clínica, medicamentos, recetas, exámenes, tratamiento, equipo médico y citas.</p></>, OAT)}
    {section("08", "DE LA IDEA A LA INTERFAZ", <><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))", gap: 16 }}>{["PAPER PROTOTYPE", "WIREFRAMES", "MOCKUPS", "PROTOTIPO FINAL EN FIGMA"].map((label) => <ImagePlaceholder key={label} label={label} aspectRatio="4/3" bg={PURPLE} />)}</div>{note("El flujo de activación de emergencia necesitó mayor claridad respecto de sus etapas.", 80)}</>, PURPLE)}
    {section("09", "DISEÑAR TAMBIÉN PARA LA URGENCIA", <><p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px, 5vw, 68px)", fontWeight: 700, lineHeight: 0.9, maxWidth: 900, margin: "0 0 40px" }}>SOS: SOLICITAR AYUDA, CONFIRMAR UBICACIÓN, ELEGIR CLÍNICA Y COMPARTIR FICHA.</p><ImagePlaceholder label="SOS USER FLOW -- ADD ORIGINAL FLOW" aspectRatio="16/7" bg={ZEST} /></>, INK, PURPLE, INK)}
    {section("10", "CONSTRUIR UN LENGUAJE VISUAL", <><div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 32 }}>{["#590696", "#A85DF9", "#B8A1DC", "#37E2D5", "#4C7CE5", "#C70A80", "#EE82B3", "#FAF5FF"].map((color) => <span key={color} style={{ backgroundColor: color, border: `2px solid ${INK}`, width: 82, height: 58, padding: 8, fontFamily: "'Inter', sans-serif", fontSize: 10 }}>{color}</span>)}</div><p style={{ fontFamily: "'Inter', sans-serif", lineHeight: 1.6, margin: 0 }}>La guía de estilo definió Sora como tipografía y un moodboard basado en cuidado, protección, calma, organización y seriedad.</p></>, OAT)}
    {section("11", "PROBAR, APRENDER E ITERAR", <>{cards(["Test heurístico: claridad de ayuda y navegación.", "Mejoras: contraste, textos, iconos, encabezados y barra de avance.", "Test de usabilidad: registro, edición de paciente e interacción con SOS.", "Se agregó la opción de añadir más pacientes."])}</>, BLUE)}
    {section("12", "TEST A/B Y MAPAS DE CALOR", <>{cards(["Test A/B: 66,7% prefirió la opción A y 33,3% la opción B.", "73% de 15 indicó que completar la información fue fácil.", "3 personas hicieron clic en el lugar correcto de esa tarea.", "67% de 15 seleccionó correctamente compartir la ficha."])}</>, OAT)}
    {section("13", "RESULTADO Y APRENDIZAJES", <><ImagePlaceholder label="PROTOTIPO FINAL MODELADO EN FIGMA" aspectRatio="16/7" bg={PURPLE} /><p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(26px, 4vw, 56px)", fontWeight: 700, lineHeight: 0.92, margin: "40px 0 0" }}>VALIDAR CON USUARIOS ES PARTE DEL DISEÑO.</p></>, PURPLE)}
    {section("14", "FUNCIONALIDADES CLAVE", <>{cards(["Ficha clínica centralizada.", "Medicamentos, recetas, exámenes y tratamiento.", "Compartir ficha clínica.", "SOS con ubicación, centro preferido y ficha.", "Agregar pacientes como mejora del test."])}</>, INK, PURPLE, INK)}
    <NextProject slug={project.nextSlug} title={project.nextTitle} />
  </>;
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

  if (project.slug === "oncobot") {
    return <div style={{ backgroundColor: OAT }}><CaseNav project={project} /><ProjectHero project={project} /><OncoBotCaseStudy project={project} /></div>;
  }

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
