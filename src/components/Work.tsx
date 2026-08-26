import { useState } from "react";
import { Link } from "react-router";
import { useScrollReveal } from "../animations";
import miraImage01 from "../assets/mirahome/ChatGPT Image 25 ago 2026, 10_45_17.png";
import miraImage02 from "../assets/mirahome/ChatGPT Image 25 ago 2026, 10_46_54.png";
import miraImage03 from "../assets/mirahome/ChatGPT Image 25 ago 2026, 11_02_22.png";

const INK    = "#23003F";
const BLUE   = "#8CA7F4";
const ZEST   = "#DBF48C";
const PURPLE = "#D98CF4";
const OAT    = "#FEF8F0";
const EMPTY_IMAGES: string[] = [];
const MIRA_IMAGE_01 = miraImage01;
const MIRA_IMAGE_02 = miraImage02;
const MIRA_IMAGE_03 = miraImage03;

// ── SVG mockups ───────────────────────────────────────────────────────────────

function MockupPhone({ fg, accent }: { fg: string; accent: string }) {
  return (
    <svg viewBox="0 0 220 380" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style={{ display: "block", maxHeight: 380 }}>
      <rect x="30" y="10" width="160" height="360" rx="20" fill="none" stroke={fg} strokeWidth="3" opacity="0.55" />
      <rect x="36" y="16" width="148" height="348" rx="16" fill={fg} opacity="0.05" />
      <rect x="80" y="22" width="60" height="10" rx="5" fill={fg} opacity="0.28" />
      <rect x="48" y="50" width="124" height="14" rx="3" fill={accent} opacity="0.65" />
      <rect x="48" y="74" width="80" height="8" rx="2" fill={fg} opacity="0.18" />
      <rect x="48" y="96" width="124" height="72" rx="6" fill={accent} opacity="0.16" />
      <rect x="48" y="96" width="124" height="72" rx="6" fill="none" stroke={fg} strokeWidth="1.5" opacity="0.18" />
      <circle cx="68" cy="120" r="12" fill={fg} opacity="0.14" />
      <rect x="88" y="112" width="56" height="7" rx="2" fill={fg} opacity="0.22" />
      <rect x="88" y="124" width="40" height="5" rx="2" fill={fg} opacity="0.13" />
      <rect x="48" y="148" width="50" height="14" rx="3" fill={accent} opacity="0.48" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="48" y={184 + i * 36} width="124" height="28" rx="4" fill={fg} opacity="0.06" />
          <circle cx="62" cy={198 + i * 36} r="6" fill={fg} opacity="0.18" />
          <rect x="76" y={194 + i * 36} width="60" height="5" rx="2" fill={fg} opacity="0.18" />
          <rect x="76" y={203 + i * 36} width="36" height="4" rx="2" fill={fg} opacity="0.1" />
        </g>
      ))}
      <rect x="48" y="316" width="124" height="36" rx="6" fill={fg} opacity="0.06" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={62 + i * 28} y="328" width="16" height="12" rx="2" fill={i === 1 ? accent : fg} opacity={i === 1 ? 0.55 : 0.18} />
      ))}
    </svg>
  );
}

function MockupDashboard({ fg, accent }: { fg: string; accent: string }) {
  return (
    <svg viewBox="0 0 480 300" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style={{ display: "block", maxHeight: 300 }}>
      <rect x="10" y="10" width="460" height="280" rx="8" fill="none" stroke={fg} strokeWidth="2.5" opacity="0.45" />
      <rect x="10" y="10" width="460" height="36" rx="8" fill={fg} opacity="0.07" />
      <circle cx="32" cy="28" r="5" fill={fg} opacity="0.28" />
      <circle cx="50" cy="28" r="5" fill={fg} opacity="0.18" />
      <circle cx="68" cy="28" r="5" fill={fg} opacity="0.12" />
      <rect x="90" y="20" width="200" height="16" rx="8" fill={fg} opacity="0.09" />
      <rect x="10" y="46" width="90" height="244" fill={fg} opacity="0.05" />
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <rect x="22" y={64 + i * 36} width="14" height="14" rx="2" fill={i === 0 ? accent : fg} opacity={i === 0 ? 0.65 : 0.16} />
          <rect x="42" y={67 + i * 36} width="44" height="7" rx="2" fill={fg} opacity="0.13" />
        </g>
      ))}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={116 + i * 118} y="56" width="106" height="58" rx="4" fill={i === 0 ? accent : fg} opacity={i === 0 ? 0.18 : 0.06} />
          <rect x={116 + i * 118} y="56" width="106" height="58" rx="4" fill="none" stroke={fg} strokeWidth="1" opacity="0.12" />
          <rect x={126 + i * 118} y="68" width="50" height="8" rx="2" fill={fg} opacity="0.22" />
          <rect x={126 + i * 118} y="82" width="30" height="18" rx="2" fill={i === 0 ? accent : fg} opacity={i === 0 ? 0.55 : 0.18} />
        </g>
      ))}
      <rect x="116" y="126" width="240" height="100" rx="4" fill={fg} opacity="0.04" />
      <rect x="116" y="126" width="240" height="100" rx="4" fill="none" stroke={fg} strokeWidth="1" opacity="0.1" />
      <polyline points="136,196 166,166 196,176 226,146 256,156 286,136 316,148 336,142"
        fill="none" stroke={accent} strokeWidth="2.5" opacity="0.65" strokeLinejoin="round" />
      <rect x="116" y="238" width="240" height="40" rx="4" fill={fg} opacity="0.04" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={126 + i * 70} y="248" width="55" height="6" rx="2" fill={fg} opacity="0.13" />
      ))}
      <rect x="368" y="56" width="90" height="222" rx="4" fill={fg} opacity="0.04" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <circle cx="388" cy={94 + i * 40} r="14" fill={fg} opacity="0.09" />
          <rect x="408" y={88 + i * 40} width="44" height="6" rx="2" fill={fg} opacity="0.16" />
          <rect x="408" y={98 + i * 40} width="30" height="5" rx="2" fill={fg} opacity="0.1" />
        </g>
      ))}
    </svg>
  );
}

function MockupCards({ fg, accent }: { fg: string; accent: string }) {
  return (
    <svg viewBox="0 0 440 280" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style={{ display: "block", maxHeight: 280 }}>
      <rect x="16" y="16" width="196" height="248" rx="8" fill={fg} opacity="0.06" />
      <rect x="16" y="16" width="196" height="248" rx="8" fill="none" stroke={fg} strokeWidth="2" opacity="0.18" />
      <rect x="16" y="16" width="196" height="110" rx="8" fill={accent} opacity="0.28" />
      <circle cx="114" cy="71" r="32" fill={fg} opacity="0.1" />
      <rect x="90" y="55" width="48" height="32" rx="4" fill="none" stroke={fg} strokeWidth="1.5" opacity="0.28" />
      <rect x="30" y="140" width="80" height="8" rx="2" fill={fg} opacity="0.22" />
      <rect x="30" y="156" width="56" height="6" rx="2" fill={fg} opacity="0.13" />
      <rect x="30" y="220" width="70" height="24" rx="3" fill={accent} opacity="0.55" />
      <rect x="228" y="16" width="196" height="116" rx="8" fill={fg} opacity="0.06" />
      <rect x="228" y="16" width="196" height="116" rx="8" fill="none" stroke={fg} strokeWidth="2" opacity="0.18" />
      <rect x="228" y="16" width="196" height="52" rx="8" fill={accent} opacity="0.16" />
      <rect x="242" y="80" width="90" height="7" rx="2" fill={fg} opacity="0.2" />
      <rect x="242" y="94" width="60" height="5" rx="2" fill={fg} opacity="0.13" />
      <rect x="228" y="148" width="196" height="116" rx="8" fill={fg} opacity="0.06" />
      <rect x="228" y="148" width="196" height="116" rx="8" fill="none" stroke={fg} strokeWidth="2" opacity="0.18" />
      <rect x="242" y="164" width="50" height="50" rx="4" fill={accent} opacity="0.22" />
      <rect x="304" y="168" width="100" height="7" rx="2" fill={fg} opacity="0.2" />
      <rect x="304" y="182" width="72" height="6" rx="2" fill={fg} opacity="0.13" />
    </svg>
  );
}

function MockupReport({ fg, accent }: { fg: string; accent: string }) {
  return (
    <svg viewBox="0 0 500 320" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style={{ display: "block", maxHeight: 320 }}>
      <rect x="80" y="10" width="340" height="300" rx="4" fill={fg} opacity="0.05" />
      <rect x="80" y="10" width="340" height="300" rx="4" fill="none" stroke={fg} strokeWidth="2" opacity="0.16" />
      <rect x="80" y="10" width="340" height="44" rx="4" fill={accent} opacity="0.32" />
      <rect x="96" y="22" width="100" height="10" rx="2" fill={fg} opacity="0.45" />
      <rect x="96" y="36" width="60" height="6" rx="2" fill={fg} opacity="0.28" />
      <circle cx="162" cy="124" r="44" fill="none" stroke={fg} strokeWidth="2" opacity="0.1" />
      <circle cx="162" cy="124" r="44" fill="none" stroke={accent} strokeWidth="12"
        strokeDasharray="138 276" strokeLinecap="round" opacity="0.55" />
      <circle cx="162" cy="124" r="44" fill="none" stroke={fg} strokeWidth="12"
        strokeDasharray="80 276" strokeDashoffset="-138" strokeLinecap="round" opacity="0.16" />
      <circle cx="162" cy="124" r="22" fill="rgba(0,0,0,0.15)" />
      <rect x="220" y="96" width="10" height="10" rx="2" fill={accent} opacity="0.65" />
      <rect x="236" y="98" width="80" height="6" rx="2" fill={fg} opacity="0.18" />
      <rect x="220" y="116" width="10" height="10" rx="2" fill={fg} opacity="0.28" />
      <rect x="236" y="118" width="64" height="6" rx="2" fill={fg} opacity="0.13" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x="96" y={184 + i * 28} width="308" height="20" rx="2"
            fill={i % 2 === 0 ? fg : "transparent"} opacity="0.04" />
          <rect x="104" y={190 + i * 28} width="80" height="6" rx="2" fill={fg} opacity={0.18 - i * 0.02} />
          <rect x="220" y={190 + i * 28} width="48" height="6" rx="2" fill={fg} opacity="0.11" />
          <rect x="310" y={190 + i * 28} width="72" height="6" rx="2" fill={i === 0 ? accent : fg} opacity={i === 0 ? 0.48 : 0.09} />
        </g>
      ))}
    </svg>
  );
}

// ── Visual container ──────────────────────────────────────────────────────────

interface VisualProps { bg: string; fg: string; accent: string; mockup: string; hov: boolean; year: string; images?: string[] }

function VisualBox({ bg, fg, accent, mockup, hov, year, images = EMPTY_IMAGES }: VisualProps) {
  const M = { phone: MockupPhone, dashboard: MockupDashboard, cards: MockupCards, report: MockupReport }[mockup]!;
  const slides = images.slice(0, 3);
  const visualReveal = useScrollReveal<HTMLDivElement>({ direction: "none", threshold: 0.05 });

  return (
    <div style={{
      backgroundColor: bg,
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      height: "100%",
      minHeight: "clamp(240px, 30vw, 480px)",
      transition: "transform 0.35s ease",
      transform: hov ? "scale(1.012)" : "scale(1)",
    }}>
      <div ref={visualReveal.ref} className={visualReveal.className.replace("motion-reveal", "motion-image-reveal")} style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden" }}>
        {slides.length > 1 ? (
          <div className="work-carousel-track" style={{ animationPlayState: "running", width: `${slides.length * 2 * 100}%` }}>
            {[0, 1].flatMap((copy) => slides.map((src, index) => (
              <img key={`${copy}-${src}`} src={src} alt="" style={{ width: `${100 / (slides.length * 2)}%`, height: "100%", objectFit: "cover", flexShrink: 0 }} />
            )))}
          </div>
        ) : (
          <div style={{ display: "flex", height: "100%", width: "100%" }}>
            {slides.length === 1 ? (
              <img src={slides[0]} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            ) : (
            <div className="proj-visual" style={{ width: "100%", maxWidth: 520, opacity: 0.9, flexShrink: 0, margin: "auto" }}>
              <M fg={fg} accent={accent} />
            </div>
            )}
          </div>
        )}
      </div>
      <span style={{
        position: "absolute", top: 14, right: 18,
        fontFamily: "'Inter', sans-serif",
        fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
        color: fg, opacity: 0.3,
      }}>{year}</span>
    </div>
  );
}

// ── Shared types ──────────────────────────────────────────────────────────────

interface ProjData {
  num: string; title: string[]; tags: string[];
  category: "ux-ui" | "graphic-design";
  hook: string;
  description: string; year: string;
  sectionBg: string; visualBg: string;
  textColor: string; accentColor: string;
  mockup: string; slug: string; images?: string[];
}

function ProjHook({ text, textColor }: { text: string; textColor: string }) {
  return (
    <p style={{
      fontFamily: "'Inter', sans-serif",
      fontSize: "clamp(14px, 1.4vw, 20px)",
      fontWeight: 400,
      fontStyle: "italic",
      color: textColor,
      opacity: 0.65,
      lineHeight: 1.4,
      margin: "0 0 16px",
      maxWidth: 520,
    }}>{text}</p>
  );
}

function ProjTag({ label, textColor, borderAlpha }: { label: string; textColor: string; borderAlpha: number }) {
  return (
    <span style={{
      fontFamily: "'Inter', sans-serif",
      fontSize: 10, fontWeight: 700,
      textTransform: "uppercase" as const,
      letterSpacing: "0.12em",
      border: `2px solid ${textColor}`,
      opacity: borderAlpha,
      padding: "3px 9px",
      color: textColor,
      display: "inline-block",
      lineHeight: 1.4,
    }}>{label}</span>
  );
}

function CTA({ hov, to = "/" }: { hov: boolean; to?: string }) {
  return (
    <Link to={to} className="motion-press" style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "'Space Grotesk', sans-serif",
      fontSize: 12, fontWeight: 700,
      letterSpacing: "0.12em",
      color: INK,
      backgroundColor: ZEST,
      border: `2px solid ${INK}`,
      boxShadow: hov ? `6px 6px 0 ${INK}` : `4px 4px 0 ${INK}`,
      transform: hov ? "translate(-2px,-2px)" : "none",
      padding: "13px 24px",
      textDecoration: "none",
      transition: "all 0.2s ease",
      width: "fit-content",
      whiteSpace: "nowrap",
    }}>VIEW CASE STUDY →</Link>
  );
}

function projectPath(project: ProjData) {
  return project.category === "graphic-design"
    ? `/graphic-projects/${project.slug}`
    : `/works/${project.slug}`;
}

// ── Project 01: visual LEFT, info RIGHT (Soft Blue) ──────────────────────────

function Project01({ p }: { p: ProjData }) {
  const [hov, setHov] = useState(false);

  return (
    <article className="motion-hover-brutalist" onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ backgroundColor: p.sectionBg, borderBottom: `3px solid ${INK}` }}>

      <div className="proj-strip" style={{ borderBottom: `2px solid rgba(35,0,63,0.2)` }}>
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", color: INK, opacity: 0.4 }}>{p.num} / 06</span>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>{p.tags.map((t) => <ProjTag key={t} label={t} textColor={INK} borderAlpha={0.5} />)}</div>
      </div>

      <div className="proj01-grid">
        <div style={{ borderRight: `2px solid rgba(35,0,63,0.2)` }} className="proj-visual-col">
          <VisualBox bg={p.visualBg} fg={INK} accent={p.accentColor} mockup={p.mockup} hov={hov} year={p.year} images={p.images ?? EMPTY_IMAGES} />
        </div>
        <div className="proj-info proj-info--r">
          <div>
            <ProjHook text={p.hook} textColor={INK} />
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(40px, 5.5vw, 50px)", fontWeight: 700, color: INK, letterSpacing: "-0.04em", lineHeight: 0.88, margin: "0 0 28px" }}>
              {p.title.map((l, i) => <span key={i} style={{ display: "block" }}>{l}</span>)}
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(13px, 1.2vw, 16px)", color: INK, opacity: 0.68, lineHeight: 1.7, margin: "0 0 28px" }}>{p.description}</p>
          </div>
          <CTA hov={hov} to={projectPath(p)} />
        </div>
      </div>
    </article>
  );
}

// ── Project 02: info LEFT, visual RIGHT (Pastel Purple) ──────────────────────

function Project02({ p }: { p: ProjData }) {
  const [hov, setHov] = useState(false);

  return (
    <article className="motion-hover-brutalist" onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ backgroundColor: p.sectionBg, borderBottom: `3px solid ${INK}` }}>

      <div className="proj-strip" style={{ borderBottom: `2px solid rgba(35,0,63,0.2)` }}>
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", color: INK, opacity: 0.4 }}>{p.num} / 06</span>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>{p.tags.map((t) => <ProjTag key={t} label={t} textColor={INK} borderAlpha={0.5} />)}</div>
      </div>

      <div className="proj02-grid">
        <div className="proj-info proj-info--l" style={{ borderRight: `2px solid rgba(35,0,63,0.2)` }}>
          <div>
            <ProjHook text={p.hook} textColor={INK} />
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(40px, 5.5vw, 50px)", fontWeight: 700, color: INK, letterSpacing: "-0.04em", lineHeight: 0.88, margin: "0 0 28px" }}>
              {p.title.map((l, i) => <span key={i} style={{ display: "block" }}>{l}</span>)}
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(13px, 1.2vw, 16px)", color: INK, opacity: 0.68, lineHeight: 1.7, margin: "0 0 28px" }}>{p.description}</p>
          </div>
          <CTA hov={hov} to={projectPath(p)} />
        </div>
        <div className="proj-visual-col">
          <VisualBox bg={p.visualBg} fg={INK} accent={p.accentColor} mockup={p.mockup} hov={hov} year={p.year} images={p.images} />
        </div>
      </div>
    </article>
  );
}

// ── Project 03: full-width visual, info row beneath (Yuzu Zest) ──────────────

function Project03({ p }: { p: ProjData }) {
  const [hov, setHov] = useState(false);

  return (
    <article className="motion-hover-brutalist" onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ backgroundColor: p.sectionBg, borderBottom: `3px solid ${INK}` }}>

      <div className="proj-strip" style={{ borderBottom: `2px solid rgba(35,0,63,0.2)` }}>
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", color: INK, opacity: 0.4 }}>{p.num} / 06</span>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>{p.tags.map((t) => <ProjTag key={t} label={t} textColor={INK} borderAlpha={0.5} />)}</div>
      </div>

      <div style={{ borderBottom: `2px solid rgba(35,0,63,0.2)` }}>
        <VisualBox bg={p.visualBg} fg={INK} accent={p.accentColor} mockup={p.mockup} hov={hov} year={p.year} images={p.images} />
      </div>

      <div className="proj03-info">
        <ProjHook text={p.hook} textColor={INK} />
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(36px, 5vw, 50px)", fontWeight: 700, color: INK, letterSpacing: "-0.04em", lineHeight: 0.9, margin: 0 }}>
          {p.title.map((l, i) => <span key={i} style={{ display: "block" }}>{l}</span>)}
        </h3>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(13px, 1.2vw, 16px)", color: INK, opacity: 0.68, lineHeight: 1.7, margin: "0 0 28px" }}>{p.description}</p>
        <CTA hov={hov} to={projectPath(p)} />
      </div>
    </article>
  );
}


// ── Data ──────────────────────────────────────────────────────────────────────

const PROJECTS: ProjData[] = [
  {
    num: "01", title: ["¿Puede la IA acompañar nuestras emociones sin decirnos qué sentir?"], tags: ["UX/UI", "PRODUCT DESIGN"], category: "ux-ui",
    hook: "MIRA APP",
    description: "Una app de bienestar mental con IA que transforma el autocuidado en una experiencia más humana, accesible y personalizada.",
    year: "2025", sectionBg: BLUE, visualBg: "#6e8de0", images: [MIRA_IMAGE_01, MIRA_IMAGE_02, MIRA_IMAGE_03],
    textColor: INK, accentColor: ZEST, mockup: "phone", slug: "mira-app",
  },
  {
    num: "02", title: ["¿Y si pudieras tener toda la información del paciente al instante?"], tags: ["UX/UI", "UX RESEARCH", "PRODUCT DESIGN"], category: "ux-ui",
    hook: "ONCOBOT",
    description: "Proyecto UX/UI para centralizar la información de pacientes oncológicos infantiles y facilitar la orientación de sus tutores durante la atención médica.",
    year: "2025", sectionBg: PURPLE, visualBg: "#c270e0",
    textColor: INK, accentColor: BLUE, mockup: "dashboard", slug: "oncobot",
  },
  {
    num: "03", title: ["PROJECT", "BUILDER"], tags: ["UX/UI", "PRODUCT DESIGN"], category: "ux-ui",
    hook: "¿Cómo reducir la fricción entre equipos sin añadir otra herramienta más?",
    description: "Collaborative project management tool designed to reduce cross-functional friction. Research-led design with extensive usability testing.",
    year: "2024", sectionBg: ZEST, visualBg: "#b8d06a",
    textColor: INK, accentColor: PURPLE, mockup: "cards", slug: "project-builder",
  },
  
  {
    num: "05", title: ["IDENTIDAD", "VISUAL"], tags: ["BRANDING", "ART DIRECTION"], category: "graphic-design",
    hook: "¿Cómo hacer visible la personalidad de una marca desde el primer contacto?",
    description: "Sistema de identidad visual para una marca emergente, desde la exploración conceptual hasta sus principales aplicaciones gráficas.",
    year: "2025", sectionBg: PURPLE, visualBg: "#c270e0",
    textColor: INK, accentColor: ZEST, mockup: "cards", slug: "identidad-visual",
  },
  {
    num: "06", title: ["EDITORIAL", "& DIRECCIÓN", "DE ARTE"], tags: ["EDITORIAL", "DIRECCIÓN DE ARTE"], category: "graphic-design",
    hook: "¿Cómo convertir una idea editorial en un sistema visual que invite a detenerse?",
    description: "Dirección de arte y diseño editorial para una publicación cultural, con una composición que equilibra ritmo, contenido y expresión visual.",
    year: "2025", sectionBg: ZEST, visualBg: "#b8d06a",
    textColor: INK, accentColor: PURPLE, mockup: "report", slug: "editorial-direccion-de-arte",
  },
];

// ── Section ───────────────────────────────────────────────────────────────────

export default function Work() {
  const [filter, setFilter] = useState<"all" | ProjData["category"]>("all");
  const sectionReveal = useScrollReveal<HTMLHeadingElement>();
  const visibleProjects = filter === "all" ? PROJECTS : PROJECTS.filter((project) => project.category === filter);

  return (
    <section id="work" style={{ borderTop: `3px solid ${INK}` }}>
      {/* Header */}
      <div style={{ backgroundColor: OAT, borderBottom: `3px solid ${INK}` }}>
        <div className="proj-section-header motion-stagger is-visible">
          <div>
            <h2 ref={sectionReveal.ref} className={sectionReveal.className} style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(24px, 3vw, 48px)", fontWeight: 700, color: INK, letterSpacing: "-0.03em", margin: 0, lineHeight: 1 }}>
              SELECTED WORK
            </h2>
            <div className="work-filters" role="group" aria-label="Filter projects by category">
              {([
                ["all", "ALL"],
                ["ux-ui", "UX/UI & PRODUCT"],
                ["graphic-design", "DISEÑO GRÁFICO"],
              ] as const).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  className={`work-filter${filter === value ? " is-active" : ""}`}
                  onClick={() => setFilter(value)}
                  aria-pressed={filter === value}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 10, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", border: `2px solid ${INK}`, padding: "4px 10px", backgroundColor: ZEST, color: INK, whiteSpace: "nowrap" }}>
            6 CASE STUDIES — 2024/2025
          </span>
        </div>
      </div>

      {visibleProjects.map((project) => {
        if (project.num === "01") return <Project01 key={project.slug} p={project} />;
        if (project.num === "02") return <Project02 key={project.slug} p={project} />;
        if (project.num === "03") return <Project03 key={project.slug} p={project} />;
        return <Project01 key={project.slug} p={project} />;
      })}
    </section>
  );
}
