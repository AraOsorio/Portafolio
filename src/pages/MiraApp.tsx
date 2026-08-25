import { useState } from "react";
import { Link } from "react-router";
const miraHeroPhoto = new URL("../imports/ChatGPT_Image_24_ago_2026__15_49_58.png", import.meta.url).href;
const miraHeroPhotoMobile = new URL("../imports/ChatGPT_Image_24_ago_2026__15_55_36.png", import.meta.url).href;

const INK    = "#23003F";
const BLUE   = "#8CA7F4";
const ZEST   = "#DBF48C";
const PURPLE = "#D98CF4";
const OAT    = "#FEF8F0";

// ── Primitives ────────────────────────────────────────────────────────────────

function Label({ text, bg = "transparent", color = INK }: { text: string; bg?: string; color?: string }) {
  return (
    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.18em", border: `2px solid ${INK}`, padding: "4px 10px", display: "inline-block", backgroundColor: bg, color }}>
      {text}
    </span>
  );
}

function Num({ n, color = INK }: { n: string; color?: string }) {
  return <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 44, fontWeight: 700, color, opacity: 0.13, lineHeight: 1, display: "block", marginBottom: 12, letterSpacing: "-0.03em" }}>{n}</span>;
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
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 700, letterSpacing: "0.18em", color: numColor, display: "block", marginBottom: 18, textTransform: "uppercase" as const }}>
          {num}
        </span>
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
      }}>
        {title}
      </h2>
    </div>
  );
}

function ImageBox({ label, aspect = "16/9", bg = BLUE, light = false }: {
  label: string; aspect?: string; bg?: string; light?: boolean;
}) {
  return (
    <div style={{ backgroundColor: bg, border: `2px solid ${INK}`, aspectRatio: aspect, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, width: "100%" }}>
      <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
        <rect x="2" y="2" width="36" height="36" rx="4" stroke={light ? OAT : INK} strokeWidth="2" opacity="0.3" />
        <circle cx="13" cy="14" r="4" fill={light ? OAT : INK} opacity="0.25" />
        <path d="M2 26 L12 18 L20 24 L28 16 L38 26" stroke={light ? OAT : INK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
      </svg>
      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: light ? OAT : INK, opacity: 0.35, textTransform: "uppercase" as const, textAlign: "center", padding: "0 20px" }}>{label}</span>
    </div>
  );
}

function Check({ ok, mira = false }: { ok: boolean; mira?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      {ok
        ? <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 700, color: mira ? INK : "#5E9E6B" }}>✓</span>
        : <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, color: mira ? INK : "rgba(35,0,63,0.25)" }}>—</span>
      }
    </div>
  );
}

// ── Nav ───────────────────────────────────────────────────────────────────────

function CaseNav() {
  return (
    <div style={{ position: "sticky", top: 0, zIndex: 100, backgroundColor: INK, borderBottom: `2px solid ${INK}`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 var(--pad-x)", height: 60, flexWrap: "wrap", gap: 8 }}>
      <Link to="/#work"
        style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", color: OAT, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = ZEST)}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = OAT)}
      >{"<- VOLVER A PROYECTOS"}</Link>
      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.05em", color: BLUE, opacity: 0.7 }}>ARA.OSORIO</span>
      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: OAT, opacity: 0.4, letterSpacing: "0.08em" }}>UX/UI · PRODUCT DESIGN · AI</span>
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section style={{ backgroundColor: BLUE, borderBottom: `3px solid ${INK}` }}>
      <div style={{ borderBottom: `2px solid rgba(35,0,63,0.2)`, padding: "16px var(--pad-x)", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", color: INK, opacity: 0.4 }}>01 / 04</span>
        {["UX/UI", "PRODUCT DESIGN", "AI"].map((t) => (
          <span key={t} style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.12em", border: `2px solid rgba(35,0,63,0.4)`, padding: "3px 9px", color: INK, display: "inline-block" }}>{t}</span>
        ))}
      </div>
      <div style={{ padding: "64px var(--pad-x) 48px" }}>
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(52px, 9vw, 128px)", fontWeight: 700, color: INK, letterSpacing: "-0.04em", lineHeight: 0.88, margin: "0 0 16px" }}>MIRA</h1>
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(18px, 2.5vw, 32px)", fontWeight: 600, color: INK, opacity: 0.7, letterSpacing: "-0.02em", margin: "0 0 32px" }}>App de bienestar mental con IA</p>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(15px, 1.4vw, 18px)", color: INK, opacity: 0.72, lineHeight: 1.65, maxWidth: 640, margin: "0 0 8px" }}>
          MIRA es una aplicación de bienestar mental impulsada por inteligencia artificial que ayuda a las personas a entender sus emociones en menos de 3 minutos al día.
        </p>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: INK, opacity: 0.45, margin: 0 }}>Aracelli Osorio Reyes · Diseñadora UX/UI · 3 semanas · Marzo 2026</p>
      </div>
      <div style={{ borderTop: `2px solid rgba(35,0,63,0.2)` }}>
        <picture>
          <source media="(max-width: 768px)" srcSet={miraHeroPhotoMobile} />
          <img
            src={miraHeroPhoto}
            alt="Pantallas principales de MIRA App — aplicación de bienestar mental con IA"
            style={{ display: "block", width: "100%", objectFit: "contain" }}
          />
        </picture>
      </div>
    </section>
  );
}

// ── 01. Resumen ───────────────────────────────────────────────────────────────

const LAVENDER = "#BCAACF";
const CARD_BG  = "#2F174D";
const CARD_BD  = "#5A3C73";

function Resumen() {
  const fields = [
    { label: "ROL",          value: "Diseñadora UX/UI\nProduct Designer" },
    { label: "DURACIÓN",     value: "3 semanas" },
    { label: "FECHA",        value: "Marzo 2026" },
    { label: "ENFOQUE",      value: "UX Research · Product Design\nAI × Design · Accesibilidad" },
    { label: "HERRAMIENTAS", value: "Figma · Claude AI\nGoogle Stitch · Figma Make\nClaude Code · React · Vite" },
    { label: "TIPO",         value: "UX/UI · Product Design · AI" },
  ];

  const stats = [
    { value: "1 de cada 4", desc: "personas en Chile tiene síntomas de ansiedad (ACHS-UC, 2025)" },
    { value: "BARRERA DE ACCESO", desc: "Costo y tiempo: los principales obstáculos para buscar ayuda profesional" },
  ];

  return (
    <section style={{ backgroundColor: INK, borderBottom: `2px solid rgba(254,248,240,0.08)` }}>
      <div style={{ padding: "64px var(--pad-x) 56px" }}>
        <div className="resumen-hero-split">
          {/* ── Left ── */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 600, color: LAVENDER }}>01</span>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 700, backgroundColor: ZEST, color: INK, padding: "5px 14px", borderRadius: 3, letterSpacing: "0.04em", display: "inline-block" }}>RESUMEN</span>
            </div>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(64px, 10vw, 120px)", fontWeight: 700, color: OAT, letterSpacing: "-0.04em", lineHeight: 0.88, margin: "0 0 20px" }}>MIRA</h2>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(20px, 2.2vw, 30px)", fontWeight: 600, color: LAVENDER, margin: "0 0 24px", letterSpacing: "-0.01em", lineHeight: 1.2 }}>App de bienestar mental con IA</p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(15px, 1.3vw, 18px)", color: OAT, opacity: 0.78, lineHeight: 1.65, maxWidth: 520, margin: "0 0 28px" }}>
              MIRA es una aplicación de bienestar mental impulsada por inteligencia artificial que ayuda a las personas a entender sus emociones en menos de 3 minutos al día.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(13px, 1vw, 15px)", color: LAVENDER, margin: 0, lineHeight: 1.6 }}>
              Aracelli Osorio Reyes · Diseñadora UX/UI · 3 semanas · Marzo 2026
            </p>
          </div>

          {/* ── Right: stat blocks ── */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, alignContent: "center" }}>
            {stats.map((s) => (
              <div key={s.value} style={{ backgroundColor: CARD_BG, border: `1.5px solid ${CARD_BD}`, padding: "28px 24px", borderRadius: 4 }}>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(24px, 2.8vw, 44px)", fontWeight: 700, color: ZEST, letterSpacing: "-0.03em", margin: "0 0 12px", lineHeight: 1.05 }}>{s.value}</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(13px, 1.1vw, 15px)", color: OAT, opacity: 0.7, margin: 0, lineHeight: 1.55 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Info grid ── */}
      <div className="resumen-grid resumen-grid-mb" style={{ padding: "0 var(--pad-x)", borderTop: "1px solid rgba(254,248,240,0.08)" }}>
        {fields.map((f) => (
          <div key={f.label} className="resumen-col-dark">
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", color: OAT, opacity: 0.3, margin: "0 0 8px", textTransform: "uppercase" as const }}>{f.label}</p>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(12px, 1vw, 14px)", fontWeight: 600, color: OAT, opacity: 0.65, margin: 0, letterSpacing: "-0.01em", lineHeight: 1.5, whiteSpace: "pre-line" }}>{f.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── 02. El Problema ───────────────────────────────────────────────────────────

function ElProblema() {
  const challenges = [
    { title: "LAS APPS SE SIENTEN COMO OTRA OBLIGACIÓN", desc: "Las aplicaciones de bienestar pueden sentirse como una tarea adicional y no como un espacio de alivio." },
    { title: "EL JOURNALING EN BLANCO GENERA BLOQUEO", desc: "Frente a una página vacía, muchas personas no saben qué escribir ni cómo comenzar." },
    { title: "LAS RACHAS PUEDEN GENERAR CULPA", desc: "Los sistemas de rachas transforman la constancia en presión cuando el usuario rompe su rutina." },
    { title: "LA IA NO SIEMPRE ES REALMENTE PERSONALIZADA", desc: "Muchas experiencias con IA se basan en prompts fijos y no aprenden del contexto real del usuario." },
    { title: "LOS INSIGHTS PUEDEN SER GENÉRICOS", desc: "Los usuarios necesitan entender patrones de su propia experiencia, no consejos generales de autoayuda." },
    { title: "LAS NECESIDADES COGNITIVAS SON POCO CONSIDERADAS", desc: "Las aplicaciones existentes no necesariamente contemplan diferentes formas de procesar información." },
  ];

  return (
    <section style={{ backgroundColor: INK, borderBottom: `3px solid ${INK}` }}>
      <SectionHeader num="02" title="EL PROBLEMA NO ERA SOLO EL BIENESTAR" color={OAT} labelBg={ZEST} labelColor={INK} />
      <div style={{ padding: "0 var(--pad-x) 64px" }}>
        {/* Stat destacado */}
        <div style={{ borderLeft: `4px solid ${ZEST}`, paddingLeft: 32, marginBottom: 56 }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(24px, 3.5vw, 48px)", fontWeight: 700, color: OAT, letterSpacing: "-0.03em", lineHeight: 1.1, margin: "0 0 10px" }}>
            En Chile, <span style={{ color: ZEST }}>1 de cada 4</span> personas tiene síntomas de ansiedad.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: OAT, opacity: 0.3, margin: 0 }}>Termómetro de Salud Mental ACHS-UC, 2025</p>
        </div>

        {/* ── EL CONTEXTO ── */}
        <div style={{ marginBottom: 64 }}>
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(30px, 3.5vw, 48px)", fontWeight: 700, color: ZEST, letterSpacing: "-0.02em", margin: "0 0 24px", lineHeight: 1.0 }}>EL CONTEXTO</h3>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(16px, 1.5vw, 20px)", color: OAT, opacity: 0.78, lineHeight: 1.65, maxWidth: 700, margin: "0 0 48px" }}>
            El bienestar mental digital ha crecido como una alternativa para quienes buscan herramientas de autocuidado accesibles y disponibles en cualquier momento. Sin embargo, tener acceso a una aplicación no significa necesariamente sentirse acompañado durante el proceso.
          </p>
          <div className="contexto-grid">
            {[
              { num: "01", title: "ACCESO",          desc: "Las herramientas digitales pueden reducir algunas barreras de acceso al acompañamiento y permitir que las personas exploren su bienestar desde cualquier lugar." },
              { num: "02", title: "EXPERIENCIA",     desc: "Muchas aplicaciones se centran en registrar hábitos, emociones o avances, pero pueden convertir el autocuidado en otra tarea que cumplir." },
              { num: "03", title: "ACOMPAÑAMIENTO",  desc: "El desafío no es solamente entregar información o registrar cómo se siente una persona, sino crear una experiencia que la ayude a comprender su propio contexto sin sentirse juzgada." },
            ].map((b, i, arr) => (
              <div key={b.num} style={{ padding: "0 32px 0 0", borderRight: i < arr.length - 1 ? `1px solid rgba(254,248,240,0.15)` : "none" }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 600, color: LAVENDER, display: "block", marginBottom: 16, letterSpacing: "0.08em" }}>{b.num}</span>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(17px, 1.6vw, 21px)", fontWeight: 700, color: OAT, letterSpacing: "-0.01em", margin: "0 0 14px", lineHeight: 1.2 }}>{b.title}</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(14px, 1.3vw, 17px)", color: OAT, opacity: 0.62, margin: 0, lineHeight: 1.6 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ¿QUÉ ESTÁ PASANDO? */}
        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 700, color: ZEST, letterSpacing: "-0.02em", margin: "0 0 32px", lineHeight: 1.05 }}>¿QUÉ ESTÁ PASANDO?</h3>

        {/* 4-col challenge grid */}
        <div className="challenges-grid" style={{ marginBottom: 56 }}>
          {challenges.map((c, i) => (
            <div key={i} style={{ backgroundColor: CARD_BG, border: `1.5px solid ${CARD_BD}`, padding: "28px 22px", borderRadius: 4 }}>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 700, color: ZEST, display: "block", marginBottom: 14 }}>0{i + 1}</span>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(14px, 1.3vw, 17px)", fontWeight: 700, color: "#FAFAFA", letterSpacing: "-0.01em", margin: "0 0 10px", lineHeight: 1.3 }}>{c.title}</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(13px, 1.1vw, 15px)", color: "#FAFAFA", opacity: 0.6, margin: 0, lineHeight: 1.55 }}>{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Hipótesis */}
        <div style={{ backgroundColor: ZEST, border: `2px solid ${INK}`, boxShadow: `8px 8px 0 rgba(254,248,240,0.1)`, padding: "36px 40px" }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: INK, opacity: 0.5, margin: "0 0 16px", textTransform: "uppercase" as const }}>HIPÓTESIS DE DISEÑO</p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(15px, 1.4vw, 18px)", color: INK, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>
            "Si una aplicación de journaling utiliza IA real para personalizar la experiencia desde el primer día, ofrece múltiples modos de registro para distintas formas de pensar y elimina los mecanismos que generan culpa, las personas podrían utilizarla de forma más consistente porque se sentiría como un alivio y no como una tarea."
          </p>
        </div>
      </div>
    </section>
  );
}

// ── 03. Investigación ─────────────────────────────────────────────────────────

const BENCHMARK_CRITERIA = [
  "Registro rápido (< 2 min)",
  "IA que aprende del usuario",
  "Múltiples modos de registro",
  "Insights personalizados",
  "Sin rachas / sin culpa",
  "Dashboard de patrones desde día 1",
  "Resumen compartible",
  "Transparencia sobre la IA",
];

const BENCHMARK_PRODUCTS = [
  { name: "Daylio",      checks: [true,  false, false, false, false, true,  false, false] },
  { name: "Reflectly",   checks: [false, false, false, false, false, false, false, false] },
  { name: "Calm",        checks: [false, false, false, false, true,  false, false, false] },
  { name: "Headspace",   checks: [false, false, false, false, false, false, false, false] },
  { name: "MIRA",        checks: [true,  true,  true,  true,  true,  true,  true,  true] },
];

const PERSONAS = [
  {
    name: "SOFÍA HERRERA", age: "30 años", role: "Diseñadora freelance", city: "Santiago",
    quote: "No necesito que me digan que todo va a estar bien. Necesito entender qué me está pasando.",
    frustraciones: ["Las apps se sienten como otra obligación", "Se bloquea con la hoja en blanco", "Las rachas le generan culpa"],
    necesita: ["Registro rápido", "Que la guíen cuando no sabe qué expresar", "Ver sus datos a lo largo del tiempo"],
    motivaciones: ["Entender sus patrones emocionales", "Un espacio sin juicio ni presión", "Una herramienta que la conozca"],
    bg: PURPLE,
  },
  {
    name: "DIEGO ROJAS", age: "29 años", role: "Desarrollador remoto", city: "Valparaíso",
    quote: "No necesito que me digan que todo va a estar bien. Necesito ver mis datos.",
    frustraciones: ["Las apps son demasiado vagas y emocionales", "Sin métricas no sabe si algo funciona", "El tono motivacional lo aleja"],
    necesita: ["Registro con escalas numéricas", "Dashboard con visualización de datos", "Máximo 2 minutos por sesión"],
    motivaciones: ["Ver patrones reales en gráficos concretos", "Detectar tendencias antes de que sean un problema"],
    bg: BLUE,
  },
  {
    name: "CATALINA MENDOZA", age: "34 años", role: "Ejecutiva de RRHH", city: "Concepción",
    quote: "No estoy mal. Solo quiero conocerme mejor. ¿Es mucho pedir que sea entretenido?",
    frustraciones: ["Apps hechas para personas en crisis", "El journaling se siente forzado", "Se aburre de lo repetitivo"],
    necesita: ["Contenido variado", "Tono liviano y no clínico", "Insights que pueda compartir"],
    motivaciones: ["Conocerse mejor emocionalmente", "Algo entretenido, no una tarea", "Compartir insights con amigas"],
    bg: ZEST,
  },
];

// Simple geometric avatar SVG per persona
function Avatar({ color }: { color: string }) {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="64" height="64" rx="32" fill={color} opacity="0.18" />
      <circle cx="32" cy="24" r="11" fill={color} opacity="0.7" />
      <path d="M12 54c0-11.046 8.954-20 20-20s20 8.954 20 20" stroke={color} strokeWidth="3" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

// App identifier badge for benchmark
function AppBadge({ name, color, initial }: { name: string; color: string; initial: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
      <div style={{ width: 28, height: 28, borderRadius: 6, backgroundColor: color, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 700, color: name === "MIRA" ? INK : OAT }}>{initial}</span>
      </div>
      <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "0.08em", color: name === "MIRA" ? ZEST : OAT, opacity: name === "MIRA" ? 1 : 0.6 }}>{name}</span>
    </div>
  );
}

const APP_BADGES = [
  { name: "Daylio",     color: "#E8753A", initial: "D" },
  { name: "Reflectly",  color: "#6B8DD6", initial: "R" },
  { name: "Calm",       color: "#3A9EBE", initial: "C" },
  { name: "Headspace",  color: "#F47C3C", initial: "H" },
  { name: "MIRA",       color: ZEST,      initial: "M" },
];

const PROCESS_STEPS = [
  { num: "01", title: "BENCHMARK",      desc: "Análisis de apps de bienestar digital para identificar patrones y oportunidades." },
  { num: "02", title: "ENTREVISTAS",    desc: "Síntesis de experiencias de usuario basada en patrones documentados y reseñas reales." },
  { num: "03", title: "SÍNTESIS",       desc: "Organización de hallazgos con apoyo de Claude AI para identificar patrones clave." },
  { num: "04", title: "USER PERSONAS",  desc: "Construcción de perfiles representativos a partir de los patrones identificados." },
  { num: "05", title: "OPORTUNIDADES",  desc: "Definición de brechas de diseño y principios que guiaron las decisiones de MIRA." },
];

const METHODS = [
  {
    num: "01", label: "BENCHMARK",
    que: "Se analizaron aplicaciones de bienestar digital para identificar patrones, funcionalidades y oportunidades dentro del mercado.",
    para: "Identificar brechas y detectar oportunidades de diferenciación.",
    bg: "transparent",
  },
  {
    num: "02", label: "RESEARCH ASISTIDO POR IA",
    que: "Claude AI apoyó la síntesis de información y la exploración de patrones a partir de los datos disponibles para el proyecto.",
    para: "Organizar y sintetizar hallazgos de forma más eficiente durante la fase de discovery.",
    bg: PURPLE,
  },
  {
    num: "03", label: "USER PERSONAS",
    que: "Se sintetizaron patrones de comportamiento, necesidades y frustraciones para construir perfiles representativos de usuario.",
    para: "Comprender diferentes tipos de necesidades y orientar las decisiones de diseño.",
    bg: "transparent",
  },
];

const QUE_APRENDIMOS = [
  { label: "PATRONES",      desc: "Las personas necesitan registrar de manera rápida y sin fricción, con múltiples formas de expresión disponibles." },
  { label: "NECESIDADES",   desc: "Guía sin imposición, sin presión de rachas, y con información que provenga de su propio historial." },
  { label: "FRUSTRACIONES", desc: "Las apps actuales pueden sentirse como una obligación más, con contenido genérico que no conecta con la experiencia real del usuario." },
  { label: "OPORTUNIDADES", desc: "Una IA que guíe sin reemplazar, que personalice sin invadir y que presente los datos con claridad y sin juicio." },
];

function Investigacion() {
  return (
    <section style={{ backgroundColor: OAT, borderBottom: `3px solid ${INK}` }}>
      <SectionHeader num="03" title="PRIMERO TUVIMOS QUE ENTENDER A QUIÉN ESTÁBAMOS DISEÑANDO" />
      <div style={{ padding: "64px var(--pad-x) 0" }}>

        {/* Intro */}
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(15px, 1.4vw, 18px)", color: INK, opacity: 0.72, lineHeight: 1.75, maxWidth: 700, marginBottom: 64 }}>
          El proceso de investigación combinó análisis competitivo, entrevistas en profundidad y síntesis asistida por IA. El objetivo fue comprender cómo las personas interactúan actualmente con herramientas de bienestar digital, identificar patrones de experiencia y detectar oportunidades para diseñar una experiencia más accesible y personalizada.
        </p>

        {/* ── ¿CÓMO INVESTIGAMOS? ── */}
        <div style={{ marginBottom: 72 }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: INK, opacity: 0.38, margin: "0 0 24px", textTransform: "uppercase" as const }}>¿CÓMO INVESTIGAMOS?</p>
          <div className="process-flow">
            {PROCESS_STEPS.map((s, i) => (
              <div key={s.num} style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
                  <div style={{ border: `2px solid ${INK}`, padding: "16px 20px", backgroundColor: i === 4 ? INK : "transparent", flex: 1 }}>
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, color: i === 4 ? ZEST : INK, opacity: i === 4 ? 1 : 0.35, display: "block", marginBottom: 6 }}>{s.num}</span>
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(12px, 1.1vw, 14px)", fontWeight: 700, color: i === 4 ? OAT : INK, letterSpacing: "0.02em" }}>{s.title}</span>
                  </div>
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(11px, 0.9vw, 13px)", color: INK, opacity: 0.55, lineHeight: 1.55, margin: "12px 0 0", paddingRight: 8 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── MÉTODOS ── */}
        <div style={{ marginBottom: 72 }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: INK, opacity: 0.38, margin: "0 0 24px", textTransform: "uppercase" as const }}>MÉTODOS</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))", gap: 16 }}>
            {METHODS.map((m) => (
              <div key={m.label} style={{ border: `2px solid ${INK}`, padding: "28px", backgroundColor: m.bg }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, color: m.bg === PURPLE ? INK : INK, opacity: 0.35, display: "block", marginBottom: 12 }}>{m.num}</span>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(15px, 1.4vw, 18px)", fontWeight: 700, color: INK, letterSpacing: "-0.01em", margin: "0 0 20px", lineHeight: 1.2 }}>{m.label}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {[{ tag: "QUÉ SE HIZO", text: m.que }, { tag: "PARA QUÉ", text: m.para }].map((row) => (
                    <div key={row.tag}>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.13em", color: INK, opacity: 0.38, margin: "0 0 5px", textTransform: "uppercase" as const }}>{row.tag}</p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(13px, 1.1vw, 15px)", color: INK, opacity: 0.7, margin: 0, lineHeight: 1.6 }}>{row.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── BENCHMARK ── */}
        <div style={{ marginBottom: 72 }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: INK, opacity: 0.38, margin: "0 0 24px", textTransform: "uppercase" as const }}>BENCHMARK COMPETITIVO</p>
          <div style={{ border: `2px solid ${INK}`, overflowX: "auto" }}>
            <div style={{ minWidth: 600 }}>
              {/* Header */}
              <div style={{ display: "grid", gridTemplateColumns: "2fr repeat(5, 1fr)", backgroundColor: INK }}>
                <div style={{ padding: "14px 16px" }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: OAT, opacity: 0.35, textTransform: "uppercase" as const }}>CRITERIO</span>
                </div>
                {APP_BADGES.map((app) => (
                  <div key={app.name} style={{ padding: "12px 8px", borderLeft: "1px solid rgba(254,248,240,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <AppBadge {...app} />
                  </div>
                ))}
              </div>
              {/* Rows */}
              {BENCHMARK_CRITERIA.map((crit, ci) => (
                <div key={crit} style={{ display: "grid", gridTemplateColumns: "2fr repeat(5, 1fr)", borderTop: `1px solid ${INK}`, backgroundColor: ci % 2 === 0 ? "transparent" : "rgba(35,0,63,0.03)" }}>
                  <div style={{ padding: "14px 16px", borderRight: `1px solid rgba(35,0,63,0.12)` }}>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(11px, 1vw, 13px)", color: INK, opacity: 0.75 }}>{crit}</span>
                  </div>
                  {BENCHMARK_PRODUCTS.map((p) => (
                    <div key={p.name} style={{ borderLeft: `1px solid rgba(35,0,63,0.08)`, backgroundColor: p.name === "MIRA" ? `${ZEST}18` : "transparent" }}>
                      <Check ok={p.checks[ci]} mira={p.name === "MIRA"} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── USER PERSONAS ── */}
        <div style={{ marginBottom: 72 }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: INK, opacity: 0.38, margin: "0 0 24px", textTransform: "uppercase" as const }}>USER PERSONAS</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))", gap: 20 }}>
            {PERSONAS.map((p) => (
              <div key={p.name} style={{ border: `2px solid ${INK}`, boxShadow: `6px 6px 0 ${INK}` }}>
                {/* Header */}
                <div style={{ backgroundColor: p.bg, padding: "28px 28px 24px", borderBottom: `2px solid ${INK}`, display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0 }}><Avatar color={INK} /></div>
                  <div>
                    <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(16px, 1.5vw, 20px)", fontWeight: 700, color: INK, letterSpacing: "-0.02em", margin: "0 0 6px", lineHeight: 1.1 }}>{p.name}</p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: INK, opacity: 0.65, margin: 0, lineHeight: 1.4 }}>{p.age} · {p.role}</p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: INK, opacity: 0.45, margin: "2px 0 0" }}>{p.city}</p>
                  </div>
                </div>
                {/* Quote */}
                <div style={{ backgroundColor: INK, padding: "20px 28px", borderBottom: `2px solid ${INK}` }}>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(14px, 1.2vw, 16px)", color: OAT, fontStyle: "italic", lineHeight: 1.6, margin: 0, opacity: 0.85 }}>
                    "{p.quote}"
                  </p>
                </div>
                {/* Body */}
                <div style={{ padding: "24px 28px", backgroundColor: OAT, display: "flex", flexDirection: "column", gap: 18 }}>
                  {[
                    { label: "FRUSTRACIONES", items: p.frustraciones },
                    { label: "NECESITA",       items: p.necesita },
                    { label: "MOTIVACIONES",   items: p.motivaciones },
                  ].map((s) => (
                    <div key={s.label}>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", color: INK, opacity: 0.35, margin: "0 0 8px", textTransform: "uppercase" as const }}>{s.label}</p>
                      <ul style={{ margin: 0, paddingLeft: 16, display: "flex", flexDirection: "column", gap: 5 }}>
                        {s.items.map((item) => (
                          <li key={item} style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(13px, 1.1vw, 15px)", color: INK, opacity: 0.75, lineHeight: 1.5 }}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── ¿QUÉ APRENDIMOS? ── */}
        <div style={{ marginBottom: 64, border: `2px solid ${INK}` }}>
          <div style={{ backgroundColor: INK, padding: "24px 28px" }}>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(18px, 2vw, 26px)", fontWeight: 700, color: ZEST, letterSpacing: "-0.01em", margin: 0 }}>¿QUÉ APRENDIMOS?</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))" }}>
            {QUE_APRENDIMOS.map((q, i) => (
              <div key={q.label} style={{ padding: "28px", borderRight: `1px solid rgba(35,0,63,0.12)`, borderBottom: `1px solid rgba(35,0,63,0.12)` }}>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", color: INK, opacity: 0.38, margin: "0 0 10px", textTransform: "uppercase" as const }}>0{i + 1} — {q.label}</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(13px, 1.2vw, 15px)", color: INK, opacity: 0.72, margin: 0, lineHeight: 1.65 }}>{q.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// ── 04. Insights Clave ────────────────────────────────────────────────────────

const INSIGHTS = [
  { title: "EL TIEMPO ES EL RECURSO MÁS ESCASO", desc: "El registro diario debe poder realizarse en menos de dos minutos." },
  { title: "LAS PERSONAS NECESITAN DIFERENTES FORMAS DE EXPRESARSE", desc: "Texto libre · Preguntas guiadas · Escalas numéricas" },
  { title: "LOS INSIGHTS DEBEN BASARSE EN DATOS REALES", desc: "Evitar consejos genéricos de autoayuda y conectar los insights con el historial del usuario." },
  { title: "SIN PRESIÓN, SIN CULPA", desc: "Eliminar rachas y notificaciones agresivas." },
  { title: "LA IA DEBE GUIAR, NO IMPONER", desc: "La inteligencia artificial proporciona una pregunta inicial personalizada sin quitarle el control al usuario." },
];

function InsightsClave() {
  return (
    <section style={{ backgroundColor: ZEST, borderBottom: `3px solid ${INK}` }}>
      <SectionHeader num="04" title="LOS USUARIOS NO NECESITABAN OTRA TAREA" labelBg={INK} labelColor={OAT} />
      <div style={{ padding: "64px var(--pad-x)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))", gap: 16 }}>
          {INSIGHTS.map((ins, i) => (
            <div key={i} style={{ border: `2px solid ${INK}`, boxShadow: `6px 6px 0 ${INK}`, padding: "32px 28px", backgroundColor: i === 2 ? INK : i === 4 ? PURPLE : OAT }}>
              <Num n={`0${i + 1}`} color={i === 2 ? OAT : i === 4 ? INK : INK} />
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(16px, 1.5vw, 20px)", fontWeight: 700, color: i === 2 ? OAT : INK, letterSpacing: "-0.01em", margin: "0 0 12px", lineHeight: 1.25 }}>{ins.title}</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(14px, 1.3vw, 16px)", color: i === 2 ? OAT : INK, opacity: 0.65, margin: 0, lineHeight: 1.6 }}>{ins.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 05. Decisiones de Diseño ──────────────────────────────────────────────────

const DECISIONS = [
  {
    num: "01",
    title: "LA IA INICIA LA CONVERSACIÓN",
    problema: "El journaling en blanco genera bloqueo. Muchas personas quieren registrar cómo se sienten pero no saben por dónde empezar, lo que lleva al abandono antes de completar el primer registro.",
    decision: "Elimina el bloqueo del journaling en blanco al guiar al usuario desde el primer momento.",
    accentBg: false,
  },
  {
    num: "02",
    title: "TRES MODOS DE REGISTRO",
    problema: "Las personas necesitan diferentes formas de expresarse según su estado de ánimo y contexto. Un único formato de entrada excluye a quienes no siempre pueden o quieren escribir.",
    decision: "Texto libre · Preguntas guiadas · Escalas numéricas. Esta decisión surge de las diferentes necesidades identificadas durante el research.",
    accentBg: true,
  },
  {
    num: "03",
    title: "SIN RACHAS NI PRESIÓN",
    problema: "Las mecánicas de gamificación en apps de bienestar pueden convertirse en una fuente de culpa cuando el usuario falla un día o una semana, contradiciendo el objetivo terapéutico del producto.",
    decision: "Se eliminan mecánicas que pueden generar culpa o dependencia.",
    accentBg: false,
  },
  {
    num: "04",
    title: "INSIGHTS PERSONALIZADOS",
    problema: "Los consejos genéricos de autoayuda no conectan con la experiencia real del usuario. Recibir información que no viene de su propio historial genera desconfianza y desinterés.",
    decision: "La aplicación muestra patrones reales basados en el historial del usuario.",
    accentBg: true,
  },
  {
    num: "05",
    title: "TRANSPARENCIA DE LA IA",
    problema: "Los usuarios necesitan saber cuándo están interactuando con contenido generado por IA. La ambigüedad puede erosionar la confianza en el producto y en la información presentada.",
    decision: "El contenido generado por IA está claramente identificado en la interfaz.",
    accentBg: false,
  },
];

function DecisionesDiseno() {
  return (
    <section style={{ backgroundColor: OAT, borderBottom: `3px solid ${INK}` }}>
      <SectionHeader num="05" title="DISEÑAR PARA ACOMPAÑAR, NO PARA PRESIONAR" />
      <div style={{ padding: "48px var(--pad-x) 80px" }}>

        {/* Two-column split: list left, image right */}
        <div className="decisions-split">

          {/* LEFT — vertical decision list */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {DECISIONS.map((d, i) => (
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
                  margin: 0, lineHeight: 1.7, maxWidth: 520,
                }}>{d.decision}</p>
              </div>
            ))}
            <div style={{ borderTop: "1px solid rgba(35,0,63,0.12)" }} />
          </div>

          {/* RIGHT — image column */}
          <div className="decisions-image-col">
            <div style={{
              border: `2px solid ${INK}`,
              backgroundColor: `${LAVENDER}18`,
              height: "100%",
              minHeight: 480,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 20,
              padding: 40,
            }}>
              {/* Phone outline silhouette */}
              <svg width="72" height="120" viewBox="0 0 72 120" fill="none">
                <rect x="2" y="2" width="68" height="116" rx="10" stroke={INK} strokeWidth="2" opacity="0.15" />
                <rect x="26" y="8" width="20" height="4" rx="2" fill={INK} opacity="0.1" />
                <rect x="8" y="20" width="56" height="80" rx="3" fill={INK} opacity="0.04" />
                <circle cx="36" cy="108" r="4" stroke={INK} strokeWidth="1.5" opacity="0.12" />
              </svg>
              <p style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 10, fontWeight: 700, letterSpacing: "0.14em",
                color: INK, opacity: 0.3, textAlign: "center",
                textTransform: "uppercase" as const, margin: 0, lineHeight: 1.6,
              }}>PANTALLAS DE MIRA{"\n"}Agregar export de Figma</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

// ── 06. Flujo de Pantallas ────────────────────────────────────────────────────

const SCREEN_STEPS = [
  {
    num: "01",
    name: "BIENVENIDA",
    screens: "2 pantallas",
    desc: "El usuario conoce MIRA y elige comenzar. La interfaz transmite calma desde el primer instante, sin presión ni formularios inmediatos.",
    count: 2,
  },
  {
    num: "02",
    name: "ACCESIBILIDAD Y PREFERENCIAS",
    screens: "4 pantallas",
    desc: "Antes de cualquier registro, MIRA pregunta cómo prefiere el usuario interactuar. La accesibilidad cognitiva y visual se configura desde el inicio, no como un ajuste posterior.",
    count: 4,
  },
  {
    num: "03",
    name: "HOME",
    screens: "1 pantalla",
    desc: "La pantalla principal presenta el insight de IA visible desde el primer día, antes del CTA de registro diario. El dashboard es limpio y orientado a la acción sin sobrecargar.",
    count: 1,
  },
  {
    num: "04",
    name: "REGISTRO DIARIO",
    screens: "10 pantallas",
    desc: "El corazón de la experiencia. Tres modos de registro — texto, voz y expresión rápida — para diferentes contextos y estados de ánimo. La IA comienza su análisis al inicio del flujo.",
    count: 3,
  },
  {
    num: "05",
    name: "REFLEXIÓN CON IA",
    screens: "4 pantallas",
    desc: "Después del registro, la IA presenta observaciones personalizadas basadas en el historial del usuario. No da consejos genéricos: refleja patrones reales y hace preguntas abiertas.",
    count: 2,
  },
];

function ScreenMockup({ label, accent = false }: { label: string; accent?: boolean }) {
  return (
    <div style={{
      border: `2px solid ${INK}`,
      borderRadius: 0,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* phone top bar */}
      <div style={{ backgroundColor: INK, height: 32, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, flexShrink: 0 }}>
        <div style={{ width: 48, height: 4, borderRadius: 2, backgroundColor: "rgba(254,248,240,0.2)" }} />
      </div>
      {/* screen area */}
      <div style={{ backgroundColor: accent ? `${BLUE}18` : "rgba(35,0,63,0.04)", aspectRatio: "9/16", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, padding: 24 }}>
        <div style={{ width: 32, height: 32, border: `2px solid ${accent ? BLUE : INK}`, opacity: 0.3 }} />
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(9px, 0.9vw, 11px)", fontWeight: 700, color: INK, opacity: 0.4, textAlign: "center", letterSpacing: "0.1em", margin: 0, textTransform: "uppercase" as const, lineHeight: 1.4 }}>{label}</p>
      </div>
    </div>
  );
}

function FlujoPantallas() {
  return (
    <section style={{ backgroundColor: OAT, borderBottom: `3px solid ${INK}` }}>
      <SectionHeader num="06" title="LA EXPERIENCIA EMPIEZA ANTES DEL PRIMER REGISTRO" />
      <div style={{ padding: "64px var(--pad-x) 80px" }}>

        {/* Intro */}
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(14px, 1.3vw, 17px)", color: INK, opacity: 0.65, lineHeight: 1.75, maxWidth: 600, marginBottom: 80 }}>
          Cada pantalla fue diseñada en Figma con Auto Layout, componentes reutilizables y anotaciones de accesibilidad. El flujo completo cubre cinco etapas clave de la experiencia.
        </p>

        {/* Steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {SCREEN_STEPS.map((step, si) => (
            <div key={step.num}>
              {/* Step block */}
              <div className="flow-step-row" style={{ borderTop: `2px solid rgba(35,0,63,0.12)`, paddingTop: 48, paddingBottom: 64 }}>

                {/* Step label */}
                <div className="flow-step-label">
                  <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(10px, 0.9vw, 12px)", fontWeight: 700, letterSpacing: "0.14em", backgroundColor: ZEST, color: INK, padding: "4px 10px" }}>{step.num}</span>
                    <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(10px, 0.85vw, 11px)", fontWeight: 600, color: INK, opacity: 0.35, letterSpacing: "0.12em" }}>{step.screens}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(20px, 2.2vw, 32px)", fontWeight: 700, color: INK, letterSpacing: "-0.02em", margin: "0 0 16px", lineHeight: 1.1 }}>{step.name}</h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(13px, 1.1vw, 15px)", color: INK, opacity: 0.65, margin: 0, lineHeight: 1.7, maxWidth: 360 }}>{step.desc}</p>
                </div>

                {/* Screen images */}
                <div className="flow-step-screens" style={{ gridTemplateColumns: `repeat(${Math.min(step.count, 3)}, 1fr)` }}>
                  {Array.from({ length: Math.min(step.count, 3) }).map((_, k) => (
                    <ScreenMockup
                      key={k}
                      label={`${step.name} — pantalla ${k + 1}\nAgregar export de Figma`}
                      accent={si === 3}
                    />
                  ))}
                </div>
              </div>

              {/* Arrow connector between steps */}
              {si < SCREEN_STEPS.length - 1 && (
                <div style={{ display: "flex", alignItems: "center", gap: 12, paddingBottom: 0 }}>
                  <div style={{ width: 1, height: 32, backgroundColor: INK, opacity: 0.15, marginLeft: 2 }} />
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, color: INK, opacity: 0.25, fontWeight: 700 }}>↓</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Full flow placeholder */}
        <div style={{ marginTop: 80, borderTop: `2px solid rgba(35,0,63,0.12)`, paddingTop: 48 }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: INK, opacity: 0.35, margin: "0 0 24px", textTransform: "uppercase" as const }}>EXPORT COMPLETO DEL FLUJO</p>
          <ImageBox label="FLUJO COMPLETO DE PANTALLAS — AGREGAR EXPORT DE FIGMA" aspect="21/9" bg="rgba(35,0,63,0.04)" />
        </div>

      </div>
    </section>
  );
}

// ── 07. Accesibilidad ─────────────────────────────────────────────────────────

const ACCESS_ITEMS = [
  { title: "CONFIGURACIONES DESDE EL PRIMER MOMENTO", desc: "La accesibilidad se considera desde el onboarding, no como una etapa posterior." },
  { title: "CONTRASTE", desc: "Contraste alineado con WCAG 2.1 AA en todos los estados visuales." },
  { title: "LENGUAJE CLARO Y NO CLÍNICO", desc: "La interfaz utiliza un lenguaje comprensible y evita términos clínicos innecesarios." },
  { title: "NAVEGACIÓN SIMPLE Y PREDECIBLE", desc: "La navegación busca reducir la carga cognitiva y mantener patrones consistentes." },
];

function Accesibilidad() {
  return (
    <section style={{ backgroundColor: BLUE, borderBottom: `3px solid ${INK}` }}>
      <SectionHeader num="07" title="LA INTERFAZ TAMBIÉN TENÍA QUE SABER ESCUCHAR" />
      <div style={{ padding: "64px var(--pad-x)" }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 700, color: INK, letterSpacing: "-0.03em", margin: "0 0 16px" }}>DISEÑAR PARA DIFERENTES FORMAS DE PENSAR</h2>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(14px, 1.3vw, 17px)", color: INK, opacity: 0.7, lineHeight: 1.75, maxWidth: 640, marginBottom: 48 }}>
          MIRA fue diseñada para ser accesible no solo visualmente, sino también cognitivamente.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))", gap: 16 }}>
          {ACCESS_ITEMS.map((a, i) => (
            <div key={i} style={{ borderTop: `4px solid ${i % 2 === 0 ? INK : PURPLE}`, paddingTop: 20 }}>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(13px, 1.1vw, 14px)", fontWeight: 700, color: INK, letterSpacing: "0.04em", margin: "0 0 10px" }}>{a.title}</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(13px, 1.1vw, 14px)", color: INK, opacity: 0.65, margin: 0, lineHeight: 1.6 }}>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 08. La IA en MIRA ─────────────────────────────────────────────────────────

function IAenMira() {
  return (
    <section style={{ backgroundColor: INK, borderBottom: `3px solid ${INK}` }}>
      <SectionHeader num="08" title="LA IA QUE ACOMPAÑA SIN REEMPLAZAR" color={OAT} labelBg={PURPLE} labelColor={INK} />
      <div style={{ padding: "64px var(--pad-x)" }}>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(14px, 1.3vw, 17px)", color: OAT, opacity: 0.6, lineHeight: 1.75, maxWidth: 560, marginBottom: 48 }}>
          Uso estratégico de la inteligencia artificial en dos dimensiones.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="cs-two-col">
          {/* Dimensión 01 */}
          <div style={{ border: "2px solid rgba(254,248,240,0.15)", padding: "36px 32px" }}>
            <Label text="DIMENSIÓN 01" bg={BLUE} color={INK} />
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 700, color: OAT, letterSpacing: "-0.02em", margin: "20px 0 24px" }}>IA COMO HERRAMIENTA DEL PROCESO DE DISEÑO</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { tool: "CLAUDE AI", desc: "Partner de investigación para simular entrevistas, sintetizar hallazgos y construir personas." },
                { tool: "GOOGLE STITCH", desc: "Generación de wireframes iniciales a partir de prompts detallados." },
                { tool: "FIGMA MAKE", desc: "Animación de componentes específicos." },
                { tool: "CLAUDE CODE", desc: "Construcción del MVP en React leyendo directamente el archivo de Figma mediante MCP." },
              ].map((t) => (
                <div key={t.tool} style={{ borderTop: "1px solid rgba(254,248,240,0.1)", paddingTop: 14 }}>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: ZEST, display: "block", marginBottom: 6 }}>{t.tool}</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(12px, 1vw, 14px)", color: OAT, opacity: 0.55, lineHeight: 1.6 }}>{t.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dimensión 02 */}
          <div style={{ border: "2px solid rgba(254,248,240,0.15)", padding: "36px 32px", backgroundColor: "rgba(217,140,244,0.08)" }}>
            <Label text="DIMENSIÓN 02" bg={PURPLE} color={INK} />
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 700, color: OAT, letterSpacing: "-0.02em", margin: "20px 0 24px" }}>IA COMO FUNCIONALIDAD CENTRAL DEL PRODUCTO</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                "Genera preguntas personalizadas al inicio basándose en el historial del usuario.",
                "Proporciona una pregunta inicial en escritura libre para eliminar el bloqueo de la hoja en blanco.",
                "Muestra un insight personalizado en el resumen basado en el patrón de la sesión.",
                "Genera consejos detectando tendencias a lo largo del tiempo.",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ width: 6, height: 6, backgroundColor: PURPLE, borderRadius: "50%", flexShrink: 0, marginTop: 7 }} />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(13px, 1.1vw, 15px)", color: OAT, opacity: 0.65, lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── 09. Design System ─────────────────────────────────────────────────────────

const MIRA_GREENS = ["#F2F7F2", "#DAEBDA", "#B4D5B4", "#88B588", "#5E9E6B", "#4A8C5C", "#386F46", "#295233", "#1C3823", "#0F1E13"];
const MIRA_PURPLES = ["#F5F2FF", "#EAE4FF", "#D4C6FF", "#B8A2FF", "#9E7EEE", "#8B68D8", "#7655BE", "#6041A3", "#4A2F87", "#351E6B"];

const MIRA_TYPE = [
  { name: "H1", spec: "32px / 40px · Bold",     sample: "Hola, Sofía" },
  { name: "H2", spec: "24px / 32px · SemiBold",  sample: "Tu registro de hoy" },
  { name: "H3", spec: "20px / 28px · SemiBold",  sample: "¿Cómo te sientes?" },
  { name: "Body",    spec: "16px · Regular",    sample: "Escribe libremente lo que quieras expresar." },
  { name: "Caption", spec: "12px · Regular",    sample: "Registro del 15 de marzo" },
  { name: "Label",   spec: "12px · Medium",     sample: "MODO LIBRE" },
];

function DesignSystemMira() {
  return (
    <section style={{ backgroundColor: OAT, borderBottom: `3px solid ${INK}` }}>
      <SectionHeader num="09" title="UN SISTEMA QUE HABLA EL LENGUAJE DEL BIENESTAR" labelBg={INK} labelColor={OAT} />
      <div style={{ padding: "64px var(--pad-x)" }}>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(13px, 1.1vw, 15px)", color: INK, opacity: 0.55, fontStyle: "italic", marginBottom: 48 }}>
          Esta sección muestra el Design System del producto MIRA, independiente del portafolio.
        </p>

        {/* Color palettes */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 56 }} className="cs-two-col">
          {[
            { label: "VERDE — CALMA Y SEGURIDAD", desc: "El verde transmite calma y seguridad.", colors: MIRA_GREENS },
            { label: "MORADO — INTELIGENCIA ARTIFICIAL", desc: "El morado identifica elementos relacionados con IA.", colors: MIRA_PURPLES },
          ].map((palette) => (
            <div key={palette.label}>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: INK, opacity: 0.45, margin: "0 0 6px", textTransform: "uppercase" as const }}>{palette.label}</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: INK, opacity: 0.5, margin: "0 0 14px" }}>{palette.desc}</p>
              <div style={{ display: "flex", gap: 0, border: `2px solid ${INK}`, overflow: "hidden" }}>
                {palette.colors.map((c) => (
                  <div key={c} style={{ flex: 1, backgroundColor: c, height: 48 }} title={c} />
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, color: INK, opacity: 0.3 }}>{palette.colors[0]}</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 9, color: INK, opacity: 0.3 }}>{palette.colors[9]}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Typography */}
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: INK, opacity: 0.4, margin: "0 0 24px", textTransform: "uppercase" as const }}>TIPOGRAFÍA — DM SANS</p>
        <div style={{ border: `2px solid ${INK}`, marginBottom: 40 }}>
          {MIRA_TYPE.map((t, i) => (
            <div key={t.name} style={{ display: "grid", gridTemplateColumns: "64px 140px 1fr", gap: "0 24px", alignItems: "center", padding: "16px 24px", borderBottom: i < MIRA_TYPE.length - 1 ? `1px solid rgba(35,0,63,0.1)` : "none" }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", color: INK, opacity: 0.35, textTransform: "uppercase" as const }}>{t.name}</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: INK, opacity: 0.4 }}>{t.spec}</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: t.name === "H1" ? 20 : t.name === "H2" ? 16 : t.name === "H3" ? 14 : 13, fontWeight: t.spec.includes("Bold") ? 700 : t.spec.includes("SemiBold") ? 600 : t.spec.includes("Medium") ? 500 : 400, color: INK }}>{t.sample}</span>
            </div>
          ))}
        </div>

        <div>
          <ImageBox label="COMPONENTES DEL DESIGN SYSTEM — BUTTONS, INPUTS, CARDS — AGREGAR EXPORT DE FIGMA" aspect="16/7" bg="rgba(35,0,63,0.04)" />
        </div>
      </div>
    </section>
  );
}

// ── 10. MVP Funcional ─────────────────────────────────────────────────────────

function MVPFuncional() {
  const stack = [
    { label: "React",         desc: "Módulos reutilizables" },
    { label: "TypeScript",    desc: "Tipado estricto" },
    { label: "Vite",          desc: "Build optimizado" },
    { label: "React Router",  desc: "Routing completo" },
    { label: "API de Claude", desc: "Insights en tiempo real" },
    { label: "Vercel",        desc: "Deploy automático" },
  ];

  return (
    <section style={{ backgroundColor: INK, borderBottom: `3px solid ${INK}` }}>
      <SectionHeader num="10" title="DE LA HIPÓTESIS A UNA EXPERIENCIA REAL" color={OAT} labelBg={ZEST} labelColor={INK} />
      <div style={{ padding: "64px var(--pad-x)" }}>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(14px, 1.3vw, 17px)", color: OAT, opacity: 0.65, lineHeight: 1.75, maxWidth: 640, marginBottom: 48 }}>
          Claude Code construyó el MVP completo utilizando el MCP de Figma — una integración que permite leer directamente el archivo de diseño y convertirlo en código React.
        </p>

        {/* Pipeline visual */}
        <div style={{ display: "flex", alignItems: "center", gap: 0, marginBottom: 56, flexWrap: "wrap" }}>
          {["FIGMA", "MCP", "REACT", "VERCEL"].map((step, i, arr) => (
            <div key={step} style={{ display: "flex", alignItems: "center" }}>
              <div style={{ border: `2px solid ${ZEST}`, padding: "16px 24px", backgroundColor: i === 0 ? PURPLE : i === arr.length - 1 ? ZEST : "transparent" }}>
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(12px, 1.2vw, 15px)", fontWeight: 700, letterSpacing: "0.08em", color: i === arr.length - 1 ? INK : i === 0 ? INK : OAT }}>{step}</span>
              </div>
              {i < arr.length - 1 && (
                <div style={{ width: "clamp(20px, 3vw, 40px)", height: 2, backgroundColor: ZEST, opacity: 0.4 }} />
              )}
            </div>
          ))}
        </div>

        {/* Stack grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 200px), 1fr))", gap: 2, marginBottom: 48 }}>
          {stack.map((s) => (
            <div key={s.label} style={{ border: "2px solid rgba(254,248,240,0.12)", padding: "20px 20px" }}>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 700, color: ZEST, margin: "0 0 4px" }}>{s.label}</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: OAT, opacity: 0.45, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {[
          { label: "DESIGN TOKENS", desc: "Extraídos directamente del archivo de Figma mediante MCP." },
          { label: "ANIMACIONES", desc: "CSS custom properties con soporte para prefers-reduced-motion." },
          { label: "HOSTING", desc: "Vercel · Deploy automático desde GitHub." },
          { label: "INTEGRACIÓN DE IA", desc: "API de Claude · Insights generados en tiempo real." },
        ].map((f) => (
          <div key={f.label} style={{ borderTop: "1px solid rgba(254,248,240,0.1)", padding: "16px 0", display: "flex", gap: 24, flexWrap: "wrap", alignItems: "baseline" }}>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: BLUE, minWidth: 160 }}>{f.label}</span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(13px, 1.1vw, 14px)", color: OAT, opacity: 0.55 }}>{f.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Producto Final ────────────────────────────────────────────────────────────

function ProductoFinal() {
  const screens = [
    { label: "ONBOARDING — PRIMERAS PANTALLAS", aspect: "9/16" },
    { label: "HOME — INSIGHT DE IA", aspect: "9/16" },
    { label: "REGISTRO DIARIO — MODO LIBRE", aspect: "9/16" },
    { label: "MODOS DE REGISTRO — SELECTOR", aspect: "9/16" },
    { label: "INSIGHT PERSONALIZADO", aspect: "9/16" },
    { label: "DASHBOARD DE METAS", aspect: "9/16" },
    { label: "PERFIL Y ACCESIBILIDAD", aspect: "9/16" },
    { label: "CONFIGURACIÓN", aspect: "9/16" },
  ];
  return (
    <section style={{ backgroundColor: BLUE, borderBottom: `3px solid ${INK}` }}>
      <SectionHeader num="11" title="ASÍ SE VE MIRA EN USO" labelBg={INK} labelColor={OAT} />
      <div style={{ padding: "64px var(--pad-x)" }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 700, color: INK, letterSpacing: "-0.04em", lineHeight: 0.9, margin: "0 0 16px" }}>MIRA</h2>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(14px, 1.3vw, 17px)", color: INK, opacity: 0.65, marginBottom: 48, lineHeight: 1.65 }}>Las pantallas más importantes del producto final.</p>
        {/* Hero screen */}
        <div style={{ marginBottom: 16 }}>
          <ImageBox label="PANTALLA PRINCIPAL — AGREGAR LA PANTALLA HOME REAL DE MIRA" aspect="16/8" bg="rgba(35,0,63,0.08)" />
        </div>
        {/* 4-up mobile screens */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 180px), 1fr))", gap: 16 }}>
          {screens.map((s) => (
            <ImageBox key={s.label} label={s.label} aspect={s.aspect} bg="rgba(35,0,63,0.07)" />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── 11. Aprendizajes ──────────────────────────────────────────────────────────

function Aprendizajes() {
  const funcionó = [
    "El proceso de research asistido por IA aceleró enormemente la fase de discovery sin sacrificar la calidad de los insights.",
    "Definir los tres modos de registro temprano simplificó las decisiones posteriores. Todo el producto fluye de esa decisión.",
    "La conexión entre Figma y Claude Code vía MCP fue un diferenciador técnico real.",
    "El onboarding de accesibilidad al inicio del flujo es una de las decisiones de diseño más impactantes del proyecto.",
  ];
  const diferente = [
    "Realizar testing con usuarios reales antes de construir el MVP.",
    "El prototipo de Figma es suficiente para validar los flujos antes de pasar a implementación.",
    "Explorar Dark Mode desde el inicio, considerando las necesidades de usuarios con sensibilidad sensorial.",
  ];

  return (
    <section style={{ backgroundColor: ZEST, borderBottom: `3px solid ${INK}` }}>
      <SectionHeader num="12" title="¿QUÉ CAMBIÓ DESPUÉS DE DISEÑARLA?" labelBg={INK} labelColor={OAT} />
      <div style={{ padding: "64px var(--pad-x)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }} className="cs-two-col">
          <div>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: INK, opacity: 0.5, margin: "0 0 24px", textTransform: "uppercase" as const }}>LO QUE FUNCIONÓ</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {funcionó.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <span style={{ width: 24, height: 24, backgroundColor: INK, color: OAT, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Space Grotesk', sans-serif", fontSize: 10, fontWeight: 700, flexShrink: 0 }}>0{i + 1}</span>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(13px, 1.1vw, 15px)", color: INK, opacity: 0.75, margin: 0, lineHeight: 1.65 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", color: INK, opacity: 0.5, margin: "0 0 24px", textTransform: "uppercase" as const }}>LO QUE HARÍA DIFERENTE</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {diferente.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <span style={{ width: 24, height: 24, border: `2px solid ${INK}`, color: INK, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Space Grotesk', sans-serif", fontSize: 10, fontWeight: 700, flexShrink: 0 }}>0{i + 1}</span>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(13px, 1.1vw, 15px)", color: INK, opacity: 0.75, margin: 0, lineHeight: 1.65 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Próximos Pasos ────────────────────────────────────────────────────────────

const NEXT_STEPS = [
  { title: "RECOMENDACIONES PERSONALIZADAS", desc: "Música, libros y actividades sugeridas por IA según el estado emocional del usuario." },
  { title: "RESUMEN SEMANAL", desc: "La IA detecta tendencias emocionales a lo largo del tiempo." },
  { title: "INSIGHT COMPARTIBLE", desc: "Tarjeta de insight diseñada para compartir como Story de Instagram." },
  { title: "TESTING FORMAL", desc: "Testing con 5 usuarios del perfil objetivo para validar el flujo." },
  { title: "INTEGRACIÓN CON SPOTIFY", desc: "Recomendaciones de música en tiempo real según el estado emocional." },
];

function ProximosPasos() {
  return (
    <section style={{ backgroundColor: OAT, borderBottom: `3px solid ${INK}` }}>
      <div style={{ borderBottom: `2px solid rgba(35,0,63,0.15)`, padding: "48px var(--pad-x) 40px" }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-0.025em", lineHeight: 1.05, margin: "0 0 16px", color: INK }}>
          LO QUE MIRA TODAVÍA PUEDE APRENDER A HACER
        </h2>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", border: `2px solid rgba(35,0,63,0.2)`, padding: "4px 10px", color: "rgba(35,0,63,0.4)", display: "inline-block", textTransform: "uppercase" as const }}>
          FUTURAS MEJORAS — NO IMPLEMENTADAS
        </span>
      </div>
      <div style={{ padding: "64px var(--pad-x)" }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 700, color: INK, letterSpacing: "-0.03em", margin: "0 0 48px" }}>MIRA V2.0</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))", gap: 16 }}>
          {NEXT_STEPS.map((s, i) => (
            <div key={i} style={{ border: `2px solid ${INK}`, padding: "28px", backgroundColor: i === 0 ? PURPLE : i === 2 ? BLUE : "transparent" }}>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: i === 0 || i === 2 ? INK : INK, opacity: i === 0 || i === 2 ? 0.5 : 0.3, display: "block", marginBottom: 12 }}>0{i + 1}</span>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(13px, 1.1vw, 14px)", fontWeight: 700, color: INK, letterSpacing: "0.02em", margin: "0 0 10px" }}>{s.title}</p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(12px, 1vw, 14px)", color: INK, opacity: 0.62, margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Next Project ──────────────────────────────────────────────────────────────

function NextProject() {
  const [hov, setHov] = useState(false);
  return (
    <section style={{ backgroundColor: INK }}>
      <Link
        to="/works/oncobot"
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{ display: "block", padding: "80px var(--pad-x)", textDecoration: "none", backgroundColor: hov ? "#160026" : INK, transition: "background-color 0.2s" }}
      >
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", color: ZEST, margin: "0 0 20px", textTransform: "uppercase" as const }}>SIGUIENTE PROYECTO</p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(40px, 7vw, 100px)", fontWeight: 700, color: hov ? ZEST : OAT, letterSpacing: "-0.04em", lineHeight: 0.9, margin: 0, transition: "color 0.2s" }}>VENTURE PREDICTOR</h2>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(24px, 4vw, 56px)", fontWeight: 700, color: hov ? ZEST : "rgba(254,248,240,0.2)", transition: "color 0.2s, transform 0.2s", display: "inline-block", transform: hov ? "translateX(12px)" : "translateX(0)" }}>{">"}</span>
        </div>
      </Link>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function MiraApp() {
  return (
    <div style={{ backgroundColor: OAT }}>
      <CaseNav />
      <Hero />
      <ElProblema />
      <Investigacion />
      <InsightsClave />
      <DecisionesDiseno />
      <FlujoPantallas />
      <Accesibilidad />
      <IAenMira />
      <DesignSystemMira />
      <MVPFuncional />
      <ProductoFinal />
      <Aprendizajes />
      <ProximosPasos />
      <NextProject />
    </div>
  );
}
