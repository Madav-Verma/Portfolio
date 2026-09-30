/* /certifications content model — one source of truth for hero, timeline,
   filters, search, stats, featured and archive. Facts transcribed verbatim
   from the published portfolio's data/certifications.ts (title, org, year,
   credential URL). Categories are DERIVED groupings based only on
   title/provider wording — never invented detail. `description` stays null
   everywhere: the source carries no per-certificate copy and none is
   fabricated. Counts are computed downstream, never hand-counted. */

export type CertificationCategory =
  | "Business Analysis"
  | "SQL / Database"
  | "Data / BI"
  | "AI / Technology"
  | "Systems / Infrastructure";

export type Certification = {
  id: string;
  title: string;
  provider: string;
  year: string;
  category: CertificationCategory;
  image: string;
  credentialUrl: string | null;
  description: string | null;
};

export const certifications: Certification[] = [
  {
    id: "ba-strategy-analysis",
    title: "Business Analysis Foundations: Strategy Analysis",
    provider: "LinkedIn Learning · IIBA-endorsed",
    year: "2026",
    category: "Business Analysis",
    image: "/certifications/01.png",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/1262f12054207bc0e3940e7b179eb74503a5de97ced33d036824ddf6ae83a263",
    description: null,
  },
  {
    id: "ba-tools-techniques",
    title: "Business Analysis: Essential Tools & Techniques",
    provider: "LinkedIn Learning",
    year: "2026",
    category: "Business Analysis",
    image: "/certifications/02.png",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/8b961f90ab88e05dadfb871a28408ae5f1ab1897e1746dab720657f2fe0e1a8f",
    description: null,
  },
  {
    id: "sql-server-2022-admin",
    title: "SQL Server 2022 Administration",
    provider: "LinkedIn Learning · Microsoft Press",
    year: "2025",
    category: "SQL / Database",
    image: "/certifications/03.png",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/74c91cf89b2cff72c7dde729cdfecbc4ef160f50ab832795335281164e83669c",
    description: null,
  },
  {
    id: "ms-sql-server-skills",
    title: "Advance Your MS SQL Server Skills",
    provider: "LinkedIn Learning",
    year: "2025",
    category: "SQL / Database",
    image: "/certifications/04.png",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/ad8a61bb0b45ee55caa90d13fcd1f1638fef376ef18e9d1288adf17a9c2c663b",
    description: null,
  },
  {
    id: "transact-sql-intro",
    title: "Introduction to Transact-SQL",
    provider: "LinkedIn Learning",
    year: "2025",
    category: "SQL / Database",
    image: "/certifications/05.png",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/652b8b73b335a447ca3c5ff7d9fd66dec6c1bff434f373907f6a163ba5f2da87",
    description: null,
  },
  {
    id: "power-bi-analysis",
    title: "Power BI for Data Analysis",
    provider: "Vodafone Idea Foundation",
    year: "2025",
    category: "Data / BI",
    image: "/certifications/06.png",
    credentialUrl: null,
    description: null,
  },
  {
    id: "power-bi-reports",
    title: "Build Reports & Dashboards in Power BI",
    provider: "Vodafone Idea Foundation",
    year: "2025",
    category: "Data / BI",
    image: "/certifications/07.png",
    credentialUrl: null,
    description: null,
  },
  {
    id: "soar-ai-aware",
    title: "SOAR — AI to be Aware (NSQF Level 2)",
    provider: "NASSCOM / NCVET",
    year: "2025",
    category: "AI / Technology",
    image: "/certifications/08.png",
    credentialUrl: null,
    description: null,
  },
  {
    id: "mongodb-basics",
    title: "MongoDB Basics for Students",
    provider: "MongoDB · Credly",
    year: "2025",
    category: "SQL / Database",
    image: "/certifications/09.png",
    credentialUrl: "https://www.credly.com/go/RZxqRxHT",
    description: null,
  },
  {
    id: "bi-intro",
    title: "Introduction to Business Intelligence",
    provider: "Infosys Springboard",
    year: "2024",
    category: "Data / BI",
    image: "/certifications/10.png",
    credentialUrl: null,
    description: null,
  },
  {
    id: "os-fundamentals",
    title: "Operating System Fundamentals",
    provider: "NPTEL · IIT Kharagpur",
    year: "2024",
    category: "Systems / Infrastructure",
    image: "/certifications/11.png",
    credentialUrl: null,
    description: null,
  },
  {
    id: "data-science-course",
    title: "Data Science Completion Course",
    provider: "Data Science Program",
    year: "2024",
    category: "Data / BI",
    image: "/certifications/12.png",
    credentialUrl: null,
    description: null,
  },
  {
    id: "numpy-pandas-ml",
    title: "NumPy, SciPy, Matplotlib & Pandas A–Z: ML",
    provider: "Udemy",
    year: "2024",
    category: "AI / Technology",
    image: "/certifications/13.png",
    credentialUrl: null,
    description: null,
  },
  {
    id: "excel-intro",
    title: "Introduction to Microsoft Excel",
    provider: "Coursera",
    year: "2023",
    category: "Data / BI",
    image: "/certifications/14.png",
    credentialUrl: null,
    description: null,
  },
];

/* ---- page meta + copy ---- */

export const certificationsMeta = {
  title: "Certifications — Daksh Verma",
  description:
    "A curated record of the courses, certifications and technical learning shaping Daksh Verma's work across software, AI, data and business systems.",
};

export const certificationsHero = {
  label: "Certifications",
  headingA: "Proof of",
  headingB: "Learning.",
  text: "A curated record of the courses, certifications and technical learning that have shaped how I work across software, AI, data and business systems.",
  meta: ["2023", "→", "2026", "Continuous learning"],
  annotation: "Still learning.",
  bottomLine: ["Courses", "Certifications", "Applied Work"],
};

export const learningAreas = {
  label: "Learning areas",
  headingA: "Different Subjects.",
  headingB: "One Engineering Practice.",
  text: "The certifications span software, data, business analysis, AI awareness and infrastructure — areas that increasingly intersect in the systems I build.",
  visualWord: "Learn",
  bands: [
    { n: "01", title: "Software Engineering", word: "Software" },
    { n: "02", title: "Data & Analytics", word: "Data" },
    { n: "03", title: "AI & Emerging Technology", word: "AI" },
    { n: "04", title: "Business Analysis", word: "Business" },
    { n: "05", title: "Systems & Infrastructure", word: "Systems" },
  ],
};

export const knowledgeMap = {
  center: "Daksh",
  branches: [
    {
      id: "software",
      label: "Software",
      items: ["SQL", "Programming", "Operating Systems"],
    },
    {
      id: "data",
      label: "Data",
      items: ["Power BI", "Data Science", "Python", "Analytics"],
    },
    {
      id: "ai",
      label: "AI",
      items: ["AI awareness", "Machine learning"],
    },
    {
      id: "business",
      label: "Business",
      items: ["Business analysis", "Strategy", "Tools & techniques"],
    },
    {
      id: "systems",
      label: "Systems",
      items: ["SQL Server", "MongoDB", "Operating Systems"],
    },
  ],
};

/* ---- derived selectors (never hand-counted) ---- */

export const certificationCategories: ("All" | CertificationCategory)[] = [
  "All",
  "Business Analysis",
  "Data / BI",
  "SQL / Database",
  "AI / Technology",
  "Systems / Infrastructure",
];

/** Visual editorial selection: the most recent record. Not a ranking. */
export const featuredCertification: Certification = certifications[0];

export const certificationStats = {
  total: certifications.length,
  years: new Set(certifications.map((c) => c.year)).size,
  latest: certifications
    .map((c) => Number(c.year))
    .reduce((a, b) => Math.max(a, b), 0),
  categories: new Set(certifications.map((c) => c.category)).size,
};

export function filterCertifications(
  category: "All" | CertificationCategory,
  query: string
): Certification[] {
  const q = query.trim().toLowerCase();
  return certifications.filter((c) => {
    if (category !== "All" && c.category !== category) return false;
    if (!q) return true;
    return [c.title, c.provider, c.category, c.year]
      .join(" ")
      .toLowerCase()
      .includes(q);
  });
}

export const certificationArchive = {
  label: "Certification archive",
  headingA: "The Complete",
  headingB: "Record.",
  searchPlaceholder: "Search certifications...",
  emptyText: "No certifications found.",
};

export const learningEvolution = {
  label: "Evolution",
  headingA: "What The",
  headingB: "Learning Added.",
  note: "Areas represented across the learning record.",
  stages: [
    {
      word: "Foundations",
      areas: ["Spreadsheets", "Programming basics", "Technical foundations"],
    },
    {
      word: "Data",
      areas: ["Power BI", "Data analysis", "Data science"],
    },
    {
      word: "Business",
      areas: ["Business analysis", "Strategy analysis", "Tools & techniques"],
    },
    {
      word: "AI",
      areas: ["AI awareness", "Machine learning coursework"],
    },
    {
      word: "Applied engineering",
      areas: ["Databases", "Systems", "Applied workflows"],
    },
  ],
};

export const learningToWork = {
  label: "From learning to work",
  headingA: "Learning Becomes Useful",
  headingB: "When It Reaches the Product.",
  groups: [
    {
      from: "SQL / Data",
      to: ["ERP / CRM", "BI platform"],
    },
    {
      from: "AI / Technology",
      to: ["RAG assistant", "Agentic workflows"],
    },
    {
      from: "Software / Systems",
      to: ["Web applications", "Internal tools"],
    },
  ],
  flow: [
    { word: "Learning", items: ["Courses", "Certifications"] },
    { word: "Knowledge", items: ["SQL", "Data", "AI", "Business"] },
    { word: "Engineering", items: ["React", "Next.js", "Python", "Systems"] },
    { word: "Product", items: ["ERP", "AI Assistant", "Web Platform", "Analytics"] },
  ],
};

export const learningStatement = {
  line: "Learning is part of the engineering process.",
  text: "Technology changes quickly. The goal is not to collect certificates — it is to keep expanding the ability to understand, build and adapt.",
};

export const certificationsNavigation = {
  previousLabel: "Previous",
  previous: { label: "Skills", href: "/skills" },
  nextLabel: "Next",
  next: { label: "Contact", href: "/#contact" },
};

export const certificationsClosing = {
  label: "Let's Connect",
  headingA: "Always Learning.",
  headingB: "Always Building.",
  text: "Have a project that sits at the intersection of software, AI and real business problems?",
  cta: { label: "Let's Connect", href: "mailto:vermadaksh120@gmail.com" },
  email: "vermadaksh120@gmail.com",
};
