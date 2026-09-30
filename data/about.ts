/* About page content model — verified resume facts only.
   No invented clients, awards, companies, revenue, or achievements. */

export const aboutHero = {
  index: "01",
  label: "About",
  headingA: "More Than",
  headingB: "Just Writing Code.",
  role: "Applied AI Solutions Engineer building software from idea to deployment.",
  intro:
    "I work across product thinking, frontend engineering, backend systems, data, AI assistants and deployment — turning business requirements into software that people actually use.",
  image: "/hero/daksh-hero.jpg",
  imageAlt:
    "Editorial portrait crop of Daksh Verma in his home office work setup",
  annotation: ["Building,", "testing,", "shipping."],
};

export const profileSection = {
  index: "02",
  label: "Profile",
  headingA: "I Build Systems,",
  headingB: "Not Just Interfaces.",
  statement:
    "I design and ship production software end to end — from TypeScript/React web applications and internal business systems to retrieval-grounded AI assistants and agentic engineering workflows.",
  splitHeading:
    "I like working where software meets real business problems.",
  splitBodyA:
    "My work isn't limited to writing features. I think about how a system is structured, how data moves through it, how users interact with it, how it is deployed, and how it continues to work after launch.",
  splitBodyB:
    "I have worked on company websites, ERP/CRM systems, BI platforms, inventory workflows, attendance systems and AI-assisted applications.",
};

export type ProcessStage = { n: string; title: string; text: string };

export const buildProcess = {
  index: "03",
  label: "What I Actually Do",
  headingA: "From Idea",
  headingB: "to Production.",
  stages: [
    {
      n: "01",
      title: "Understand",
      text: "Understand the business problem, users, constraints and existing workflow.",
    },
    {
      n: "02",
      title: "Design",
      text: "Translate requirements into a practical technical solution.",
    },
    {
      n: "03",
      title: "Build",
      text: "Develop the frontend, backend, data layer and integrations.",
    },
    {
      n: "04",
      title: "Validate",
      text: "Test the system, review changes, and refine the implementation.",
    },
    {
      n: "05",
      title: "Deploy",
      text: "Ship the product, monitor it, and support real users.",
    },
  ] as ProcessStage[],
};

export const ownership = {
  index: "04",
  label: "Engineering Ownership",
  headingA: "I Don't Just Build Features.",
  headingB: "I Own Systems.",
  statement:
    "At Prokon Hi-Tech Systems, I own the company web platform and internal ERP/CRM end to end — from architecture and database design to UI and deployment.",
  blocks: [
    {
      title: "Architecture",
      text: "Application structure, database design and system decisions.",
    },
    {
      title: "Product",
      text: "Turning business workflows into usable software.",
    },
    {
      title: "AI",
      text: "Retrieval-grounded assistants, LLM routing and agentic workflows.",
    },
    {
      title: "Deployment",
      text: "Hosting, domains, SSL/TLS, CI and production delivery.",
    },
  ],
};

export const realWorld = {
  index: "05",
  label: "Built for Real Users",
  headingA: "Software That",
  headingB: "Gets Used.",
  bigNumber: "10+",
  bigLabel: "Team members using the ERP daily.",
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
};

export const appliedAI = {
  index: "06",
  label: "Applied AI",
  headingA: "AI That Works",
  headingB: "Inside Real Systems.",
  text: "My AI work focuses on making models useful inside actual software — grounding responses in structured knowledge, routing tasks between models, and combining AI with deterministic fallbacks where reliability matters.",
  points: [
    "Retrieval grounding",
    "Knowledge-base indexing",
    "LLM routing",
    "Rule-engine fallback",
    "Lead capture",
  ],
  flow: [
    "Knowledge Base",
    "Retrieval",
    "Context",
    "LLM",
    "Validation / Rules",
    "User",
  ],
};

export const agentic = {
  headingA: "Building With AI,",
  headingB: "Reviewing With AI.",
  text: "I use multi-model workflows where generated code can be independently reviewed before changes are merged.",
  flow: [
    { title: "Model A", sub: "Generate" },
    { title: "Independent Review Agent", sub: "Audit" },
    { title: "Human / Engineering Decision", sub: "Approve" },
    { title: "Production", sub: "Ship" },
  ],
};

export const dataBusiness = {
  index: "07",
  label: "Data & Business",
  headingA: "I Think Beyond",
  headingB: "the Interface.",
  text: "My work also sits at the intersection of software, data and business operations.",
  project: "DataFlow Pro",
  projectText:
    "A BI platform combining revenue, compliance risk and operational KPIs into a real-time dashboard.",
  areas: ["Revenue", "Compliance Risk", "Operational KPIs"],
  bigNumber: "15–20",
  bigLabel: "hours/month of manual reporting saved",
  stack: ["Power BI", "SQL", "Python"],
};

export const principles = {
  index: "08",
  label: "Principles",
  headingA: "How I Like",
  headingB: "to Build.",
  items: [
    {
      n: "01",
      title: "Useful over impressive.",
      text: "If it doesn't help someone do their job, it doesn't ship.",
    },
    {
      n: "02",
      title: "Simple systems over unnecessary complexity.",
      text: "The simplest system that survives real users wins.",
    },
    {
      n: "03",
      title: "Real users over theoretical features.",
      text: "Features are guesses until someone uses them every day.",
    },
    {
      n: "04",
      title: "Ship, observe, improve.",
      text: "Launch small, watch closely, iterate quickly.",
    },
  ],
};

export const techStack = {
  heading: "Tools I Work With.",
  groups: [
    {
      label: "AI & Agentic",
      items: ["OpenCode", "Claude", "DeepSeek", "Gemini"],
    },
    {
      label: "Frontend",
      items: ["TypeScript", "Next.js", "React", "TanStack Start", "Tailwind CSS"],
    },
    {
      label: "Backend / Data",
      items: ["Python", "REST APIs", "Supabase", "PostgreSQL", "SQLite", "SQL"],
    },
    {
      label: "Analytics",
      items: ["Power BI", "Pandas", "NumPy"],
    },
    {
      label: "Deployment",
      items: ["Vercel", "Netlify", "Git", "GitHub", "CI/CD", "DNS", "SSL/TLS"],
    },
  ],
};

export const education = {
  index: "09",
  label: "Education",
  headingA: "The",
  headingB: "Foundation.",
  schools: [
    {
      degree: "Bachelor of Computer Applications — AI",
      school: "Lingaya's Vidyapeeth, Faridabad",
      period: "2023–2026",
      result: "CGPA 9.0",
    },
    {
      degree: "Senior Secondary — Commerce",
      school: "Grand Columbus International School",
      period: "2021–2023",
      result: "93%",
    },
  ],
};

export const personalDetail = {
  image: "/hero/daksh-hero.jpg",
  imageAlt: "Small portrait detail of Daksh Verma",
  textA: "Based in Faridabad, India.",
  textB: "Building software for the real world.",
};

export const aboutClosing = {
  statementA: "Good software should make",
  statementB: "something difficult feel simple.",
  text: "If you're building something interesting, I'd be happy to talk.",
  cta: {
    label: "Let's Work Together",
    href: "mailto:vermadaksh120@gmail.com",
  },
  email: "vermadaksh120@gmail.com",
};
