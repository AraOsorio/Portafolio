import { Link, Navigate, useParams } from "react-router";
import { getProject } from "../data/projects";

const INK = "#23003F";
const BLUE = "#8CA7F4";
const ZEST = "#DBF48C";
const PURPLE = "#D98CF4";
const OAT = "#FEF8F0";

type Project = ReturnType<typeof getProject>;

function SectionLabel({ text, bg = "transparent", color = INK }: { text: string; bg?: string; color?: string }) {
  return <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", border: `2px solid ${INK}`, padding: "4px 10px", display: "inline-block", backgroundColor: bg, color }}>{text}</span>;
}

function SectionHeader({ num, title, color = INK, labelBg, labelColor }: { num: string; title: string; color?: string; labelBg?: string; labelColor?: string }) {
  const isDark = color === OAT;
  const border = isDark ? "rgba(254,248,240,0.15)" : "rgba(35,0,63,0.15)";
  const numColor = isDark ? "rgba(254,248,240,0.32)" : "rgba(35,0,63,0.32)";
  const hasBg = !!labelBg && labelBg !== "transparent";
  return (
    <div style={{ borderBottom: `2px solid ${border}`, padding: "48px var(--pad-x) 40px" }}>
      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: "0.18em", color: numColor, display: "block", marginBottom: 18 }}>{num}</span>
      <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.05, margin: 0, color: labelColor ?? color, display: hasBg ? "inline-block" : "block", backgroundColor: hasBg ? labelBg : "transparent", padding: hasBg ? "6px 20px 10px" : 0 }}>{title}</h2>
    </div>
  );
}

function Placeholder({ text, height = 56 }: { text: string; height?: number }) {
  return <div style={{ border: "2px dashed rgba(35,0,63,0.25)", padding: "20px 24px", minHeight: height, display: "flex", alignItems: "center" }}><span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: INK, opacity: 0.4, fontStyle: "italic" }}>{text}</span></div>;
}

function ImagePlaceholder({ label, aspectRatio = "16/9", bg = PURPLE }: { label: string; aspectRatio?: string; bg?: string }) {
  return (
    <div style={{ backgroundColor: bg, border: `2px solid ${INK}`, aspectRatio, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, width: "100%" }}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="2" y="2" width="36" height="36" rx="4" stroke={INK} strokeWidth="2" opacity="0.3" /><circle cx="13" cy="14" r="4" fill={INK} opacity="0.25" /><path d="M2 26 L12 18 L20 24 L28 16 L38 26" stroke={INK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" /></svg>
      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: INK, opacity: 0.35, textTransform: "uppercase", textAlign: "center", padding: "0 20px" }}>{label}</span>
    </div>
  );
}

function CaseNav({ project }: { project: Project }) {
  if (!project) return null;
  return <div style={{ position: "sticky", top: 0, zIndex: 100, backgroundColor: INK, borderBottom: `2px solid ${INK}`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 var(--pad-x)", height: 60, flexWrap: "wrap", gap: 8 }}>
    <Link to="/#work" style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", color: OAT, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>{"<- BACK TO WORK"}</Link>
    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.05em", color: PURPLE, opacity: 0.7 }}>ARA.OSORIO</span>
    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: OAT, opacity: 0.45, letterSpacing: "0.08em" }}>{project.tags.join(" · ")}</span>
  </div>;
}

function GraphicHero({ project }: { project: Project }) {
  if (!project) return null;
  return <section style={{ backgroundColor: project.heroBg, borderBottom: `3px solid ${INK}` }}>
    <div style={{ borderBottom: `2px solid ${INK}`, padding: "16px var(--pad-x)", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", color: project.heroText, opacity: 0.45 }}>{project.num} / 06</span>
      <SectionLabel text="GRAPHIC DESIGN" color={project.heroText} />
      {project.tags.map((tag) => <span key={tag} style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", border: `2px solid ${project.heroText}`, padding: "3px 9px", color: project.heroText }}>{tag}</span>)}
    </div>
    <div style={{ padding: "64px var(--pad-x) 48px" }}>
      <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(52px, 9vw, 128px)", fontWeight: 700, color: project.heroText, letterSpacing: "-0.04em", lineHeight: 0.88, margin: "0 0 32px", maxWidth: 1100 }}>{project.fullTitle}</h1>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(15px, 1.4vw, 18px)", color: project.heroText, opacity: 0.75, lineHeight: 1.65, maxWidth: 600, margin: 0 }}>{project.intro}</p>
    </div>
    <div style={{ padding: "0 var(--pad-x)", borderTop: `2px solid ${INK}` }}><ImagePlaceholder label="PROJECT HERO IMAGE -- ADD YOUR VISUAL HERE" aspectRatio="16/7" bg={project.heroText === OAT ? "rgba(255,255,255,0.06)" : "rgba(35,0,63,0.06)"} /></div>
  </section>;
}

function ContextSection({ project }: { project: Project }) {
  if (!project) return null;
  return <section style={{ backgroundColor: OAT, borderBottom: `3px solid ${INK}` }}>
    <SectionHeader num="01" title="CONTEXTO" labelBg={INK} labelColor={OAT} />
    <div className="cs-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "0 80px", padding: "0 var(--pad-x) 64px", alignItems: "start" }}>
      <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 700, color: INK, letterSpacing: "-0.02em", margin: 0, lineHeight: 1.1 }}>UNA MARCA CON ALGO QUE DECIR.</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}><p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(15px, 1.3vw, 18px)", lineHeight: 1.65, margin: 0 }}>{project.intro}</p><Placeholder text="[ADD CONTEXT -- origen, audiencia y oportunidad del proyecto]" height={80} /></div>
    </div>
  </section>;
}

function ConceptSection() {
  return <section style={{ backgroundColor: INK, borderBottom: `3px solid ${INK}` }}><SectionHeader num="02" title="CONCEPTO" color={OAT} labelBg={ZEST} labelColor={INK} /><div style={{ padding: "0 var(--pad-x) 80px" }}><p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px, 5vw, 72px)", fontWeight: 700, color: OAT, letterSpacing: "-0.05em", lineHeight: 0.9, maxWidth: 900, margin: "0 0 40px" }}>UNA IDEA SIMPLE PUEDE TENER MUCHAS FORMAS.</p><Placeholder text="[ADD CONCEPT -- la idea rectora y las decisiones que le dieron dirección]" height={96} /></div></section>;
}

function VisualExploration() {
  return <section style={{ backgroundColor: BLUE, borderBottom: `3px solid ${INK}` }}><SectionHeader num="03" title="EXPLORACIÓN VISUAL" /><div style={{ padding: "0 var(--pad-x) 64px" }}><h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 700, color: INK, margin: "0 0 40px", letterSpacing: "-0.02em" }}>FORMAS, COLOR Y TIPOGRAFÍA</h3><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))", gap: 16 }}>{["MOODBOARD", "TYPE STUDIES", "COLOR STUDIES", "COMPOSITION"].map((label, index) => <ImagePlaceholder key={label} label={label} aspectRatio={index === 0 ? "4/3" : "1/1"} bg={index % 2 === 0 ? PURPLE : ZEST} />)}</div></div></section>;
}

function ArtDirection() {
  return <section style={{ backgroundColor: OAT, borderBottom: `3px solid ${INK}` }}><SectionHeader num="04" title="DIRECCIÓN DE ARTE" labelBg={INK} labelColor={OAT} /><div style={{ padding: "0 var(--pad-x) 64px" }}><div className="cs-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "0 80px", alignItems: "start" }}><h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(22px, 2.5vw, 32px)", fontWeight: 700, color: INK, letterSpacing: "-0.02em", margin: 0 }}>UN LENGUAJE CONSISTENTE EN CADA ESCENA.</h3><ImagePlaceholder label="ART DIRECTION -- HERO IMAGE OR CAMPAIGN BOARD" aspectRatio="16/9" bg={PURPLE} /></div></div></section>;
}

function Identity() {
  return <section style={{ backgroundColor: PURPLE, borderBottom: `3px solid ${INK}` }}><SectionHeader num="05" title="IDENTIDAD" /><div style={{ padding: "0 var(--pad-x) 64px" }}><ImagePlaceholder label="IDENTITY SYSTEM -- LOGO, TYPE AND VISUAL LANGUAGE" aspectRatio="16/7" bg={ZEST} /><div style={{ marginTop: 24 }}><Placeholder text="[ADD IDENTITY DESCRIPTION -- cómo el sistema se vuelve reconocible y flexible]" height={80} /></div></div></section>;
}

function Applications() {
  const items = ["PACKAGING Y SOPORTES FÍSICOS", "CAMPAÑA Y DIRECCIÓN DE ARTE", "COMUNICACIÓN DIGITAL"];
  return <section style={{ backgroundColor: OAT, borderBottom: `3px solid ${INK}` }}><SectionHeader num="06" title="APLICACIONES" color={INK} labelBg={ZEST} labelColor={INK} /><div style={{ padding: "0 var(--pad-x) 64px" }}><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))", gap: 16 }}>{items.map((item, index) => <ImagePlaceholder key={item} label={`0${index + 1} -- ${item}`} aspectRatio="4/3" bg={index === 1 ? BLUE : PURPLE} />)}</div></div></section>;
}

function Result() {
  return <section style={{ backgroundColor: INK, borderBottom: `3px solid ${INK}` }}><SectionHeader num="07" title="RESULTADO" color={OAT} labelBg={PURPLE} labelColor={INK} /><div style={{ padding: "0 var(--pad-x) 80px" }}><ImagePlaceholder label="FINAL PROJECT IMAGE -- THE COMPLETE VISUAL SYSTEM IN USE" aspectRatio="16/7" bg="rgba(140,167,244,0.12)" /><p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px, 5vw, 64px)", fontWeight: 700, color: OAT, letterSpacing: "-0.04em", lineHeight: 0.9, maxWidth: 900, margin: "40px 0 0" }}>UNA IDENTIDAD LISTA PARA CRECER.</p></div></section>;
}

function Learnings() {
  const items = ["La consistencia también puede ser flexible.", "El concepto guía cada decisión visual.", "Las aplicaciones revelan la fuerza del sistema."];
  return <section style={{ backgroundColor: BLUE, borderBottom: `3px solid ${INK}` }}><SectionHeader num="08" title="APRENDIZAJES" /><div style={{ padding: "0 var(--pad-x) 64px" }}><div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))", gap: 24 }}>{items.map((text, index) => <div key={text} style={{ borderTop: `4px solid ${index % 2 === 0 ? ZEST : INK}`, paddingTop: 20 }}><span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", opacity: 0.35 }}>0{index + 1}</span><p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(18px, 1.7vw, 24px)", fontWeight: 700, letterSpacing: "-0.01em", margin: "14px 0 0", lineHeight: 1.25 }}>{text}</p></div>)}</div></div></section>;
}

function NextProject({ slug, title }: { slug: string; title: string }) {
  return <section style={{ backgroundColor: INK }}><Link to={`/graphic-projects/${slug}`} style={{ display: "block", padding: "80px var(--pad-x)", textDecoration: "none" }}><p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", color: ZEST, margin: "0 0 20px" }}>NEXT PROJECT</p><h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(40px, 7vw, 100px)", fontWeight: 700, color: OAT, letterSpacing: "-0.04em", lineHeight: 0.9, margin: 0 }}>{title}</h2></Link></section>;
}

export default function GraphicProject() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProject(slug ?? "");
  if (!project || project.category !== "graphic-design") return <Navigate to="/#work" replace />;
  return <div style={{ backgroundColor: OAT }}><CaseNav project={project} /><GraphicHero project={project} /><ContextSection project={project} /><ConceptSection /><VisualExploration /><ArtDirection /><Identity /><Applications /><Result /><Learnings /><NextProject slug={project.nextSlug} title={project.nextTitle} /><div style={{ backgroundColor: OAT, borderTop: `3px solid ${INK}`, padding: "24px var(--pad-x)" }}><Link to="/#work" style={{ color: INK, fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textDecoration: "none" }}>BACK TO WORK →</Link></div></div>;
}
