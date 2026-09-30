/* Experience page content model — documented resume facts only.
   Dates are preserved verbatim and overlapping roles are presented as
   engineering layers rather than a corrected linear chronology. */

export const experienceMeta = {
  title: "Experience — Daksh Verma",
  description:
    "Where Daksh Verma has worked, what he owned, and how his engineering responsibility evolved across software, data, and applied AI systems.",
};

export const experienceHero = {
  label: "Experience",
  headingA: "The Work",
  headingB: "Behind the Work.",
  intro:
    "From software development to data and applied AI engineering, my work has increasingly moved toward owning complete systems, not just individual features.",
  snapshot: [
    { period: "2024", focus: "Software Development" },
    { period: "2025–Present", focus: "Applied AI Solutions Engineering" },
    { period: "2026", focus: "Data & Business Analytics" },
  ],
};

export const careerIntro = {
  label: "Career",
  headingA: "I Didn’t Start",
  headingB: "With AI.",
  text: "My work has moved through software development, data and business analysis, and into applied AI engineering.",
};

export type ResponsibilityBlock = {
  n: string;
  title: string;
  text: string;
};

export type TimelineEntry = {
  n: string;
  date: string;
  role: string;
  company: string;
  category: string;
  title: string;
  description: string;
};

export const softwareIntern: TimelineEntry & {
  technicalLabels: string[];
  blocks: ResponsibilityBlock[];
  stack: string[];
} = {
  n: "01",
  date: "Jun 2024 – Jul 2024",
  role: "Software Developer Intern",
  company: "Prokon Hi-Tech Systems",
  category: "Software Development",
  title: "Software Developer Intern",
  description:
    "Worked on digitising inventory and AMC workflows into a Python/MySQL system.",
  technicalLabels: ["Python", "MySQL", "Inventory", "AMC"],
  blocks: [
    {
      n: "01",
      title: "Inventory Digitisation",
      text: "Digitised inventory workflows into a software-based system.",
    },
    {
      n: "02",
      title: "AMC Workflows",
      text: "Worked on AMC-related operational workflows.",
    },
    {
      n: "03",
      title: "Database-backed System",
      text: "Worked with Python/MySQL for the underlying application.",
    },
  ],
  stack: ["Python", "MySQL", "Inventory", "AMC"],
};

export const dataAnalyst: TimelineEntry & {
  bigNumber: string;
  bigLabel: string;
  stack: string[];
  coverage: string[];
  signals: string[];
  dashboard: string;
} = {
  n: "02",
  date: "Jan 2026 – May 2026",
  role: "Data & Business Analyst Intern",
  company: "Trossachs Corporate Advisors",
  category: "Data / Business Intelligence",
  title: "Data & Business Analyst Intern",
  description:
    "Built a real-time BI platform combining Revenue, Compliance Risk and Operational KPIs into a single Power BI dashboard.",
  bigNumber: "15–20",
  bigLabel: "hours/month of manual reporting saved",
  stack: ["Power BI", "SQL", "Python"],
  coverage: ["Dashboard", "Data Pipelines", "Business Intelligence"],
  signals: ["Revenue", "Compliance Risk", "Operational KPIs"],
  dashboard: "Real-time dashboard",
};

export const primaryExperience = {
  n: "03",
  date: "2025 – Present",
  role: "Applied AI Solutions Engineer",
  company: "Prokon Hi-Tech Systems",
  category: "Applied AI / Full-Stack / Systems",
  titleA: "Applied AI",
  titleB: "Solutions Engineer",
  descriptions: [
    "Own the company web platform and internal ERP/CRM end to end, covering architecture, database/schema, UI and deployment.",
    "Also built a Next.js website with a retrieval-grounded assistant and sizing tools, and developed an agentic build pipeline with multi-model generation and independent review.",
  ],
  responsibilities: [
    {
      n: "01",
      title: "Architecture",
      text: "Application architecture and technical decisions.",
    },
    {
      n: "02",
      title: "Product",
      text: "Web platforms and internal business systems.",
    },
    {
      n: "03",
      title: "AI",
      text: "RAG assistants and agentic workflows.",
    },
    {
      n: "04",
      title: "Deployment",
      text: "Production delivery and infrastructure.",
    },
  ] as ResponsibilityBlock[],
  ownershipLabel: "Owned end to end",
  ownershipFlow: [
    "Architecture",
    "Database",
    "Frontend",
    "AI",
    "Testing",
    "Deployment",
  ],
  webPlatform: {
    src: "/projects/prokon-website-home.png",
    alt: "Prokon Hi-Tech product catalogue website",
    caption: "Company web platform — real screenshot",
  },
};

export const erpSnapshot = {
  label: "Internal ERP / CRM",
  headingA: "Eight modules,",
  headingB: "one working system.",
  text: "An internal ERP/CRM used daily by 10 staff, replacing spreadsheet-driven operations with connected workflows.",
  modulesCount: "8",
  modulesLabel: "modules",
  modules: [
    "CRM",
    "Sales",
    "Inventory",
    "Purchase",
    "Service",
    "Finance",
    "HR",
    "Admin",
  ],
  proof: [
    { value: "145", label: "routes" },
    { value: "75", label: "tests" },
    { value: "10", label: "daily staff users" },
  ],
};

export const ragAssistant = {
  label: "RAG Assistant",
  headingA: "Making AI Useful",
  headingB: "Inside the Product.",
  text: "Built a retrieval-grounded assistant using knowledge-base indexing, LLM routing and rule-engine fallback.",
  flow: [
    "Knowledge Base",
    "Retrieval",
    "Context",
    "LLM Routing",
    "Rule Engine",
    "User",
  ],
};

export const agenticWorkflow = {
  label: "Agentic Engineering",
  headingA: "Generate.",
  headingB: "Review.",
  headingC: "Ship.",
  text: "Built an agentic build pipeline where one model generates code and an independent review agent audits diffs before merge.",
  flow: [
    { title: "Model A", sub: "Generate" },
    { title: "Review Agent", sub: "Audit" },
    { title: "Diff", sub: "Inspect" },
    { title: "Merge", sub: "Ship" },
  ],
};

export const careerProgression = {
  label: "Progression",
  headingA: "From Building Features",
  headingB: "to Owning Systems.",
  note: "These roles overlap in time, so read this as different layers of engineering experience rather than a strict chronological sequence.",
  layers: [
    { period: "2024", focus: "Software Development" },
    { period: "2026", focus: "Data & Business Analysis" },
    { period: "2025–Present", focus: "Applied AI + Systems Engineering" },
  ],
  matrixColumns: ["Software", "Data", "AI", "Systems"],
  matrix: [
    { period: "2024", cells: [true, false, false, false] },
    { period: "2026", cells: [false, true, false, false] },
    { period: "2025–Present", cells: [true, true, true, true] },
  ],
  expanded: [
    { from: "Writing software", to: "Owning systems" },
    { from: "Working with data", to: "Turning data into decisions" },
    { from: "Building AI features", to: "Embedding AI into products" },
    { from: "Shipping code", to: "Owning deployment" },
  ],
};

export const experienceMetrics = {
  label: "Documented impact",
  headingA: "The numbers",
  headingB: "already on record.",
  items: [
    { value: "10", label: "ERP users" },
    { value: "8", label: "ERP modules" },
    { value: "145", label: "ERP routes" },
    { value: "75", label: "tests" },
    { value: "15–20", label: "hours/month reporting time saved" },
    { value: "96", label: "catalogue models" },
    { value: "50+", label: "features shipped" },
  ],
};

export const ownershipSection = {
  label: "Ownership",
  headingA: "What",
  headingB: "I Own",
  items: [
    {
      n: "01",
      title: "Product",
      text: "Company web platform and internal ERP/CRM used by real staff.",
    },
    {
      n: "02",
      title: "Architecture",
      text: "Application structure, database schema and technical decisions.",
    },
    {
      n: "03",
      title: "Data",
      text: "Operational data, dashboards and reporting pipelines.",
    },
    {
      n: "04",
      title: "AI",
      text: "Retrieval-grounded assistants and agentic build workflows.",
    },
    {
      n: "05",
      title: "Deployment",
      text: "Production delivery, domains and ongoing support.",
    },
  ],
};

export const experienceClosingStatement = {
  lineA: "I like building software",
  lineB: "that survives contact with",
  lineC: "the real world.",
  text: "Products have constraints. Users have habits. Businesses have workflows. Good engineering has to account for all three.",
};

export const experienceNavigation = {
  previousLabel: "Previous",
  previous: { label: "Projects", href: "/projects" },
  nextLabel: "Next",
  next: { label: "Skills", href: "/skills" },
};

export const experienceClosing = {
  label: "Let’s Connect",
  headingA: "Building something",
  headingB: "interesting?",
  text: "Let’s talk about the problem before we talk about the technology.",
  cta: {
    label: "Let’s Connect",
    href: "mailto:vermadaksh120@gmail.com",
  },
  email: "vermadaksh120@gmail.com",
};
