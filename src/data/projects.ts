export interface ProjectMeta {
  slug: string;
  num: string;
  category: "ux-ui" | "graphic-design";
  fullTitle: string;
  tags: string[];
  intro: string;
  year: string;
  heroBg: string;
  heroText: string;
  accentColor: string;
  mockup: string;
  images?: string[];
  nextSlug: string;
  nextTitle: string;
}

const INK    = "#23003F";
const BLUE   = "#8CA7F4";
const ZEST   = "#DBF48C";
const PURPLE = "#D98CF4";
const OAT    = "#FEF8F0";

export const PROJECTS: ProjectMeta[] = [
  {
    slug: "mira-app",
    num: "01",
    category: "ux-ui",
    fullTitle: "MIRA APP",
    tags: ["UX/UI", "PRODUCT DESIGN"],
    intro: "Una app de bienestar mental con IA que transforma el autocuidado en una experiencia más humana, accesible y personalizada.",
    year: "2025",
    heroBg: BLUE,
    heroText: INK,
    accentColor: ZEST,
    mockup: "phone",
    nextSlug: "venture-predictor",
    nextTitle: "VENTURE PREDICTOR",
  },
  {
    slug: "venture-predictor",
    num: "02",
    category: "ux-ui",
    fullTitle: "VENTURE PREDICTOR",
    tags: ["PRODUCT DESIGN", "AI"],
    intro: "An AI-powered platform designed to help early-stage startups evaluate market fit. Led UX strategy, interaction design, and design system creation.",
    year: "2025",
    heroBg: PURPLE,
    heroText: INK,
    accentColor: BLUE,
    mockup: "dashboard",
    nextSlug: "project-builder",
    nextTitle: "PROJECT BUILDER",
  },
  {
    slug: "project-builder",
    num: "03",
    category: "ux-ui",
    fullTitle: "PROJECT BUILDER",
    tags: ["UX/UI", "PRODUCT DESIGN"],
    intro: "A collaborative project management tool designed to reduce cross-functional friction. Research-led design with extensive usability testing.",
    year: "2024",
    heroBg: ZEST,
    heroText: INK,
    accentColor: PURPLE,
    mockup: "cards",
    nextSlug: "rendiciones",
    nextTitle: "RENDICIONES",
  },
  {
    slug: "rendiciones",
    num: "04",
    category: "ux-ui",
    fullTitle: "RENDICIONES",
    tags: ["UX RESEARCH", "PRODUCT DESIGN"],
    intro: "A financial reporting product redesigned from the ground up based on in-depth user research. Simplified a complex administrative flow into a clear, intuitive experience.",
    year: "2024",
    heroBg: INK,
    heroText: OAT,
    accentColor: ZEST,
    mockup: "report",
    nextSlug: "mira-app",
    nextTitle: "MIRA APP",
  },
  {
    slug: "identidad-visual",
    num: "05",
    category: "graphic-design",
    fullTitle: "IDENTIDAD VISUAL",
    tags: ["BRANDING", "ART DIRECTION"],
    intro: "Sistema de identidad visual para una marca emergente, desde la exploración conceptual hasta sus principales aplicaciones gráficas.",
    year: "2025",
    heroBg: PURPLE,
    heroText: INK,
    accentColor: ZEST,
    mockup: "cards",
    nextSlug: "editorial-direccion-de-arte",
    nextTitle: "EDITORIAL & DIRECCIÓN DE ARTE",
  },
  {
    slug: "editorial-direccion-de-arte",
    num: "06",
    category: "graphic-design",
    fullTitle: "EDITORIAL & DIRECCIÓN DE ARTE",
    tags: ["EDITORIAL", "DIRECCIÓN DE ARTE"],
    intro: "Dirección de arte y diseño editorial para una publicación cultural, con una composición que equilibra ritmo, contenido y expresión visual.",
    year: "2025",
    heroBg: ZEST,
    heroText: INK,
    accentColor: PURPLE,
    mockup: "report",
    nextSlug: "identidad-visual",
    nextTitle: "IDENTIDAD VISUAL",
  },
];

export function getProject(slug: string): ProjectMeta | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
