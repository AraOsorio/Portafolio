export interface ProjectMeta {
  slug: string;
  num: string;
  fullTitle: string;
  tags: string[];
  intro: string;
  year: string;
  heroBg: string;
  heroText: string;
  accentColor: string;
  mockup: string;
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
    fullTitle: "MIRA APP",
    tags: ["UX/UI", "PRODUCT DESIGN"],
    intro: "End-to-end design of a mobile application — from initial research through interaction design, visual design system, and developer handoff.",
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
];

export function getProject(slug: string): ProjectMeta | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
