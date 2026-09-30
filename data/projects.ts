/* Projects page content model — verified resume facts only.
   No invented clients, awards, metrics, URLs, or screenshots. */

export const projectsHero = {
  label: "Selected Work",
  headingA: "Things I've",
  headingB: "Actually Built.",
  text: "Production software, internal systems and AI-powered tools built around real workflows and real users.",
  collage: {
    large: {
      src: "/projects/prokon-website-home.png",
      alt: "Prokon Hi-Tech product catalogue website",
    },
    small: [
      {
        src: "/projects/attendance-dashboard.png",
        alt: "Employee attendance dashboard screenshot",
      },
    ],
  },
};

export const projectsProof = {
  count: "04",
  label: "Featured Projects",
  text: "Selected systems spanning AI, full-stack development, ERP/CRM, analytics and offline-first applications.",
};

export type ProjectFilterKey = "all" | "ai" | "business" | "offline";

export const projectFilters: { key: ProjectFilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "ai", label: "AI" },
  { key: "business", label: "Business Systems" },
  { key: "offline", label: "Offline" },
];

export type CaseStudy = {
  n: string;
  /**
   * DOM id for this chapter, targeted by the homepage project cards via
   * `/projects#<anchor>` (see `projects` in data/site.ts). Explicit rather
   * than derived from `n` so the cross-file contract is auditable in one
   * place — if `n` changes and this doesn't, the deep links break.
   */
  anchor: string;
  category: string;
  tags: Exclude<ProjectFilterKey, "all">[];
  title: string;
  description: string;
  tech: string[];
  proof?: { value: string; label: string };
  stats: { value: string; label: string }[];
  image: string | null;
  imageAlt: string;
  imageCaption?: string;
  imagePosition: "left" | "right";
  modules?: string[];
  liveHref?: string;
  liveLabel?: string;
  note?: string;
  /**
   * Editorial system overview for a project with no public screenshot.
   * Real documented facts only — never a stand-in UI or invented chart.
   */
  overview?: {
    label: string;
    proof: { value: string; label: string };
    modules: string[];
    flow?: string[];
  };
  /**
   * Real screenshots, when they exist. Empty today; populated later this
   * renders above the overview panel with no markup change.
   */
  gallery?: { src: string; alt: string; caption?: string }[];
};

/**
 * The ERP's documented facts, declared once and referenced from both the
 * case-study text column and the editorial system overview — so the "10"
 * and the module list can never drift apart.
 */
const ERP_PROOF = { value: "10", label: "staff using the ERP daily" };
const ERP_MODULES = [
  "CRM",
  "Sales",
  "Inventory",
  "Purchase",
  "Service",
  "Finance",
  "HR",
  "Admin",
];

export const caseStudies: CaseStudy[] = [
  {
    n: "01",
    anchor: "project-01",
    category: "Web Platform / AI",
    tags: ["ai"],
    title: "Prokon Hi-Tech Website",
    description:
      "Next.js 16 website with a 96-model catalogue, retrieval-grounded assistant, sizing tools and SEO/GEO-ready architecture.",
    tech: ["Next.js 16", "TypeScript", "RAG", "SEO/GEO"],
    stats: [
      { value: "24", label: "routes" },
      { value: "96", label: "models in the catalogue" },
    ],
    image: "/projects/prokon-website-home.png",
    imageAlt: "Prokon Hi-Tech product catalogue website",
    imageCaption: "Catalogue home",
    imagePosition: "right",
  },
  {
    n: "02",
    anchor: "project-02",
    category: "ERP / Business System",
    tags: ["business"],
    title: "Prokon ERP / CRM",
    description:
      "An internal business platform used daily by 10 staff, replacing spreadsheet-driven operations with connected workflows, dashboards and priority-based ticket triage.",
    tech: ["TanStack Start", "Supabase", "PostgreSQL"],
    /* `proof` is intentionally omitted here: the overview panel beside this
       text column owns the "10" so the same fact is not printed twice in
       one section. The stats and the internal-system note stay below. */
    stats: [
      { value: "8", label: "modules" },
      { value: "145", label: "routes" },
      { value: "75", label: "tests" },
    ],
    image: null,
    imageAlt: "Prokon ERP dashboard screenshot",
    imagePosition: "left",
    modules: ERP_MODULES,
    overview: {
      label: "System overview",
      proof: ERP_PROOF,
      modules: ERP_MODULES,
      flow: ["CRM", "Sales", "Inventory", "Service", "Finance"],
    },
    note: "Internal system — no public link",
  },
  {
    n: "03",
    anchor: "project-03",
    category: "Offline-First / Retail",
    tags: ["offline"],
    title: "SJS Retail Jewellery Suite",
    description:
      "An offline-first retail suite designed for billing, HUID tracking and PDF invoices, built to continue working without an internet connection.",
    tech: ["React", "Supabase", "IndexedDB", "Vitest"],
    proof: {
      value: "Offline-first.",
      label:
        "Designed to keep retail operations moving even when connectivity isn't available.",
    },
    stats: [{ value: "20+", label: "Vitest tests" }],
    image: "/projects/sjs-app.png",
    imageAlt: "SJS Retail Jewellery dashboard",
    imagePosition: "right",
    liveHref: "https://retailjewellery.netlify.app",
    liveLabel: "retailjewellery.netlify.app",
  },
  {
    n: "04",
    anchor: "project-04",
    category: "Internal Tool / Operations",
    tags: ["offline"],
    title: "Employee Attendance System",
    description:
      "Camera QR/barcode check-in with offline sync, role-based access and Excel export.",
    tech: ["React", "IndexedDB", "QR / Barcode", "Offline Sync"],
    proof: { value: "~1s", label: "scan time" },
    stats: [
      { value: "3", label: "role tiers" },
      { value: "0", label: "records lost offline" },
    ],
    image: "/projects/attendance-dashboard.png",
    imageAlt: "Employee attendance dashboard",
    imagePosition: "left",
    liveHref: "https://employeeattedance.netlify.app",
    liveLabel: "employeeattedance.netlify.app",
  },
];

export const moreDocumented = "More projects are being documented.";

export const snapshot = {
  heading: "Across these projects",
  items: [
    "Next.js",
    "React",
    "TanStack Start",
    "Supabase",
    "PostgreSQL",
    "TypeScript",
    "RAG",
    "IndexedDB",
    "Vitest",
    "Offline Sync",
  ],
};

export const approach = {
  label: "Approach",
  headingA: "I Build for",
  headingB: "the Workflow,",
  headingC: "Not Just the Screen.",
  text: "Good software has to fit the way people actually work. That means understanding the workflow, removing unnecessary steps, designing around constraints and making the system reliable after it ships.",
};

export const projectsClosing = {
  headingA: "Have a project",
  headingB: "worth building?",
  text: "If you have a problem that needs software, AI or automation, let's talk.",
  cta: {
    label: "Let's Work Together",
    href: "mailto:vermadaksh120@gmail.com",
  },
  email: "vermadaksh120@gmail.com",
};
