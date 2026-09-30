/* Skills page content model — documented resume facts only.
   Technology membership follows data/about.ts `techStack` plus the
   RAG/agentic/DataFlow Pro facts in data/about.ts and data/experience.ts.
   No proficiency scores, no invented tools, no invented descriptions. */

export const skillsMeta = {
  title: "Skills — Daksh Verma",
  description:
    "The engineering stack behind Daksh Verma's systems: AI and agentic engineering, full-stack development, data, analytics, automation and deployment — and how they connect.",
};

export const skillsHero = {
  label: "Engineering Stack",
  headingA: "The Stack",
  headingB: "Behind the Systems.",
  text: "I work across AI, full-stack development, data, automation and deployment — combining the right tools to build software that works beyond the prototype.",
  meta: ["AI", "Full-Stack", "Data", "Systems", "Deployment"],
};

/** Hero constellation: central node + four branches of real logos. */
export const constellation = {
  branches: [
    {
      id: "ai",
      label: "AI",
      logos: ["opencode", "claude", "deepseek", "googlegemini"],
    },
    {
      id: "web",
      label: "Web",
      logos: ["typescript", "nextdotjs", "react", "tanstack"],
    },
    {
      id: "data",
      label: "Data",
      logos: ["supabase", "postgresql", "pandas"],
    },
    {
      id: "deploy",
      label: "Deploy",
      logos: ["vercel", "netlify", "git", "github"],
    },
  ],
};

export const stackStatement = {
  lineA: "Technologies are tools.",
  lineB: "Systems are the outcome.",
};

export const domainsIntro = {
  label: "Engineering domains",
  headingA: "Six Layers.",
  headingB: "One Engineering Stack.",
  domains: [
    { n: "01", title: "AI & Agentic Engineering", href: "#domain-ai" },
    { n: "02", title: "Frontend Engineering", href: "#domain-fullstack" },
    { n: "03", title: "Backend & Data", href: "#domain-data" },
    { n: "04", title: "Analytics", href: "#domain-analytics" },
    { n: "05", title: "Automation & Systems", href: "#domain-automation" },
    { n: "06", title: "Deployment & Infrastructure", href: "#domain-deployment" },
  ],
};

/**
 * Where each domain is actually evidenced, keyed by section id. Derived from
 * the `projectMatrix` rows below — a project only appears where a dot is
 * documented — plus `automationDomain.examples`. Capped at two per domain so
 * the link row stays scannable; titles mirror data/site.ts `projects`.
 */
export const domainProjects: Record<
  string,
  { label: string; href: string }[]
> = {
  "domain-ai": [
    { label: "Prokon Hi-Tech Website", href: "/projects#project-01" },
  ],
  "domain-fullstack": [
    { label: "Prokon Hi-Tech Website", href: "/projects#project-01" },
    { label: "Prokon ERP / CRM", href: "/projects#project-02" },
  ],
  "domain-data": [
    { label: "Prokon ERP / CRM", href: "/projects#project-02" },
    { label: "SJS Retail Jewellery", href: "/projects#project-03" },
  ],
  "domain-analytics": [
    { label: "Prokon ERP / CRM", href: "/projects#project-02" },
  ],
  "domain-automation": [
    { label: "Employee Attendance", href: "/projects#project-04" },
    { label: "Prokon ERP / CRM", href: "/projects#project-02" },
  ],
  "domain-deployment": [
    { label: "SJS Retail Jewellery", href: "/projects#project-03" },
    { label: "Employee Attendance", href: "/projects#project-04" },
  ],
};

/** Sections the in-page section nav links to, beyond the six domains. */
export const referenceSections = [
  { title: "The full toolkit", href: "#tech-index" },
  { title: "Where it's used", href: "#project-matrix" },
];

export const aiDomain = {
  label: "AI",
  headingA: "AI That Fits",
  headingB: "Inside Real Products.",
  text: "Models become useful when they sit inside real software — grounded in structured knowledge, routed between models, and backed by deterministic checks where reliability matters.",
  logos: ["opencode", "claude", "deepseek", "googlegemini"],
  capabilities: [
    "Multi-model task routing",
    "Agentic review loops",
    "Prompt engineering",
    "RAG",
    "Knowledge-base indexing",
    "LLM routing",
    "Rule-engine fallback",
  ],
};

export const ragFlow = {
  label: "RAG architecture",
  caption: "Retrieval keeps every answer tied to documented knowledge.",
  steps: [
    "User",
    "Application",
    "Knowledge Base",
    "Retrieval",
    "Context",
    "LLM Routing",
    "Model",
    "Validation / Rules",
    "Response",
  ],
};

export const agenticFlow = {
  label: "Agentic engineering",
  headingA: "Generate.",
  headingB: "Review. Ship.",
  text: "One model generates, an independent review agent audits the diff, and only approved changes ship.",
  steps: [
    { title: "Task", sub: "Scoped work" },
    { title: "Model A", sub: "Generate" },
    { title: "Model B", sub: "Review" },
    { title: "Diff", sub: "Inspect" },
    { title: "Approve", sub: "Decide" },
    { title: "Ship", sub: "Deploy" },
  ],
};

export const fullstackDomain = {
  label: "Full-stack",
  headingA: "From Interface",
  headingB: "to Application.",
  text: "Interfaces backed by real application logic — typed end to end, validated at the boundary, and connected to live data.",
  logos: [
    "typescript",
    "nextdotjs",
    "react",
    "tanstack",
    "tailwindcss",
    "javascript",
    "python",
    "zod",
    "reacthookform",
  ],
};

export const fullstackLayers = {
  label: "Typical system composition",
  note: "How the layers usually fit together — not the exact architecture of every project.",
  layers: [
    { layer: "User", tech: [] as string[] },
    { layer: "UI", tech: ["react"] },
    { layer: "Application", tech: ["nextdotjs", "typescript"] },
    { layer: "APIs", tech: ["zod"] },
    { layer: "Data", tech: ["supabase", "postgresql"] },
    { layer: "Deployment", tech: ["vercel", "netlify"] },
  ],
};

export const dataDomain = {
  label: "Data",
  headingA: "Data Is Part",
  headingB: "of the Product.",
  text: "Storage, queries and transformations designed as product surface — the dashboard is only as honest as the layer beneath it.",
  logos: ["supabase", "postgresql", "sqlite", "pandas", "numpy"],
  wordmarks: ["SQL", "IndexedDB"],
};

export const dataFlow = {
  label: "Data flow",
  steps: ["Input", "Database", "Query / Transform", "Application", "User / Dashboard"],
  tech: ["postgresql", "supabase", "pandas", "numpy"],
  wordmarks: ["SQL", "Python"],
};

export const analyticsDomain = {
  label: "Analytics",
  headingA: "Turning Data",
  headingB: "Into Decisions.",
  text: "Revenue, compliance risk and operational KPIs combined into one real-time decision surface.",
  project: "DataFlow Pro",
  wordmarks: ["Power BI", "SQL", "Python"],
  streams: ["Revenue", "Compliance Risk", "Operational KPIs"],
  target: "Decision Interface",
};

export const automationDomain = {
  label: "Automation",
  headingA: "Software That",
  headingB: "Removes Repetition.",
  text: "Manual workflows encoded into software — the same logic, without the repeated effort.",
  logos: ["python", "typescript", "supabase"],
  wordmarks: ["REST APIs", "IndexedDB"],
  steps: ["Input", "Logic", "Automation", "Result"],
  examples: ["Inventory", "AMC", "Attendance", "ERP workflows"],
};

export const deploymentDomain = {
  label: "Deployment",
  headingA: "From Localhost",
  headingB: "to Production.",
  text: "Versioned, built and shipped to production — domains, certificates and delivery pipelines included.",
  logos: ["vercel", "netlify", "git", "github"],
  wordmarks: ["DNS", "SSL/TLS", "CI Pipelines"],
};

export const deploymentPipeline = {
  label: "Delivery pipeline",
  steps: ["Code", "Git", "CI", "Build", "Deploy", "Production"],
  hosts: ["vercel", "netlify"],
  wordmarks: ["DNS", "SSL/TLS"],
};

export type IndexItem = { name: string; slug?: string };

export type IndexGroup = { label: string; items: IndexItem[] };

export const technologyIndex: IndexGroup[] = [
  {
    label: "AI & Agentic Engineering",
    items: [
      { name: "OpenCode", slug: "opencode" },
      { name: "Claude", slug: "claude" },
      { name: "DeepSeek", slug: "deepseek" },
      { name: "Gemini", slug: "googlegemini" },
      { name: "Prompt Engineering" },
      { name: "Multi-model Task Routing" },
      { name: "Agentic Review Loops" },
    ],
  },
  {
    label: "Full-Stack",
    items: [
      { name: "TypeScript", slug: "typescript" },
      { name: "Next.js 16", slug: "nextdotjs" },
      { name: "React 19", slug: "react" },
      { name: "TanStack Start", slug: "tanstack" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "JavaScript", slug: "javascript" },
      { name: "Python", slug: "python" },
      { name: "REST APIs" },
      { name: "Zod", slug: "zod" },
      { name: "React Hook Form", slug: "reacthookform" },
    ],
  },
  {
    label: "Data",
    items: [
      { name: "Supabase", slug: "supabase" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "SQLite", slug: "sqlite" },
      { name: "SQL" },
      { name: "IndexedDB" },
      { name: "Pandas", slug: "pandas" },
      { name: "NumPy", slug: "numpy" },
    ],
  },
  {
    label: "Analytics",
    items: [{ name: "Power BI" }],
  },
  {
    label: "Deployment",
    items: [
      { name: "Vercel", slug: "vercel" },
      { name: "Netlify", slug: "netlify" },
      { name: "DNS" },
      { name: "SSL/TLS" },
      { name: "CI Pipelines" },
      { name: "Git", slug: "git" },
      { name: "GitHub", slug: "github" },
    ],
  },
  {
    label: "RAG",
    items: [
      { name: "Retrieval Grounding" },
      { name: "Knowledge-base Indexing" },
      { name: "LLM Routing" },
      { name: "Rule-engine Fallback" },
      { name: "Lead Capture" },
    ],
  },
];

/** Logo wall: the most recognisable logo-bearing technologies only. */
export const logoWall: string[] = [
  "typescript",
  "nextdotjs",
  "react",
  "tanstack",
  "tailwindcss",
  "javascript",
  "python",
  "zod",
  "supabase",
  "postgresql",
  "sqlite",
  "pandas",
  "numpy",
  "opencode",
  "claude",
  "deepseek",
  "googlegemini",
  "git",
  "github",
  "vercel",
  "netlify",
];

export const stackMap = {
  label: "Stack connections",
  headingA: "How the Stack",
  headingB: "Connects.",
  center: "Daksh",
  branches: [
    { id: "build", label: "Build", items: ["React", "Next.js", "TypeScript"] },
    { id: "data", label: "Data", items: ["Supabase", "PostgreSQL", "SQL", "Power BI"] },
    { id: "ai", label: "AI", items: ["RAG", "LLM Routing", "Agentic Review"] },
    { id: "deploy", label: "Deploy", items: ["GitHub", "CI", "Vercel", "Netlify"] },
  ],
};

export type MatrixRow = {
  project: string;
  /** Deep link into the /projects case study. Mirrors the `href`
   *  on the matching entry in data/site.ts `projects`. */
  href: string;
  tech: string[];
  cells: [boolean, boolean, boolean, boolean, boolean, boolean];
};

export const projectMatrix = {
  label: "Project usage",
  headingA: "Where the Stack",
  headingB: "Gets Used.",
  note: "Dots mark documented technology use per project — not proficiency, not coverage.",
  columns: ["Frontend", "Data", "AI", "Offline", "Analytics", "Deployment"],
  rows: [
    {
      project: "Prokon Hi-Tech Website",
      href: "/projects#project-01",
      tech: ["Next.js", "TypeScript", "RAG", "SEO/GEO"],
      cells: [true, false, true, false, false, false],
    },
    {
      project: "Prokon ERP / CRM",
      href: "/projects#project-02",
      tech: ["TanStack", "Supabase", "PostgreSQL", "CRM", "Analytics"],
      cells: [true, true, false, false, true, false],
    },
    {
      project: "SJS Retail Jewellery",
      href: "/projects#project-03",
      tech: ["React", "Supabase", "IndexedDB", "Vitest"],
      cells: [true, true, false, true, false, true],
    },
    {
      project: "Employee Attendance",
      href: "/projects#project-04",
      tech: ["React", "IndexedDB", "QR / Barcode", "Offline Sync"],
      cells: [true, false, false, true, false, true],
    },
  ] as MatrixRow[],
};

export const engineeringBreadth = {
  line: "Frontend is only one layer.",
  layers: ["Interface", "Application", "Data", "AI", "Automation", "Deployment"],
};

export const engineeringApproach = {
  label: "Approach",
  headingA: "Tools Follow",
  headingB: "the Problem.",
  text: "I don't treat a technology stack as a checklist. The problem, workflow and constraints determine the tools.",
  principles: [
    { n: "01", title: "Problem first" },
    { n: "02", title: "Complexity where it helps" },
    { n: "03", title: "Reliability after launch" },
  ],
};

export const skillsNavigation = {
  previousLabel: "Previous",
  previous: { label: "Experience", href: "/experience" },
  nextLabel: "Next",
  next: { label: "Certifications", href: "/certifications" },
};

export const skillsClosing = {
  label: "Let's Connect",
  headingA: "Have a Technical Problem",
  headingB: "Worth Solving?",
  text: "Let's talk about the system before we decide on the stack.",
  cta: { label: "Let's Connect", href: "mailto:vermadaksh120@gmail.com" },
  email: "vermadaksh120@gmail.com",
};
