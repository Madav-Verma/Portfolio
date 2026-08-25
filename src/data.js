export const PROFILE = {
  name: "Daksh Verma",
  initials: "DV",
  role: "Applied AI Solutions Engineer",
  location: "Faridabad, India",
  email: "vermadaksh120@gmail.com",
  phone: "+91 95990 68010",
  linkedin: "https://www.linkedin.com/in/daksh-verma-613774229/",
  github: "https://github.com/Madav-Verma",
  resume: "/resume/Daksh_Verma_Resume_2026.pdf",
  headline: "Production software, shipped end to end.",
  subline:
    "I orchestrate agentic workflows — OpenCode, Claude, DeepSeek, Gemini — to ship complete products: offline-first, tested, live.",
  status: "Open to new roles",
}

export const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#process", label: "Process" },
  { href: "#journey", label: "Journey" },
  { href: "#notes", label: "Notes" },
  { href: "#contact", label: "Contact" },
]

export const HERO_META = [
  { k: "Base", v: "Faridabad, IN" },
  { k: "Focus", v: "Agentic · Full-stack" },
  { k: "BCA (AI)", v: "9.0 CGPA" },
]

export const MARQUEE = [
  "OpenCode", "Claude", "DeepSeek", "Gemini", "Multi-Model Routing",
  "Agent Workflows", "Automated Review Loops", "React", "Vite", "Python",
  "SQL · T-SQL", "Supabase", "Vercel", "Prompt Engineering",
  "Offline-First", "REST APIs", "Power BI", "Git & GitHub",
]

export const ABOUT = {
  title: "From data analyst to applied AI engineer.",
  paragraphs: [
    "I started as a data analyst, learning how spreadsheets become decisions — building BI platforms that saved teams 15–20 hours a month. Then I found a bigger lever: AI as an engineering multiplier.",
    "Today I build end-to-end products with agentic workflows — orchestrating multiple models, running autonomous review loops, shipping whole systems at speed. The models aren't toys; they're my engineering team.",
    "The proof is in production: two live offline-first apps and a leadership BI platform, all built this way.",
  ],
}

export const FILTERS = [
  { id: "all", label: "All work" },
  { id: "production", label: "In production" },
  { id: "shipped", label: "Shipped" },
  { id: "wip", label: "Building now" },
]

export const PROJECTS = [
  {
    id: "sjs",
    sheet: "SJS-01",
    title: "SJS Retail Jewellery Suite",
    domain: "Production system",
    status: "live",
    statusLabel: "Live on Netlify",
    link: "https://retailjewellery.netlify.app/",
    screenshot: "/screenshots/sjs-jewellery.png",
    year: "2026",
    tagline: "Complete retail management for a working jewellery store — billing to backup.",
    bullets: [
      "Billing, stock, purchases, customers & invoices with PDF generation",
      "Live gold-rate price calculator and hallmark HUID splitting engine",
      "Role-based auth, audit trails and offline local database",
      "20+ automated unit tests covering billing, stock and CSV logic",
    ],
    metrics: [
      { v: "20+", l: "unit tests" },
      { v: "4", l: "core modules" },
      { v: "100%", l: "offline-capable" },
    ],
    stack: ["OpenCode", "Claude review agent", "Vitest", "React", "Supabase"],
    caseStudy: {
      challenge:
        "The store ran on paper registers and Excel — stock, hallmarked gold and daily billing had no single source of truth, and the shop's internet is unreliable.",
      approach:
        "Offline-first React app with a local database and queued sync. A live gold-rate calculator and a hallmark HUID splitting engine track each hallmarked item uniquely for GST compliance; PDF invoices and scripted backups protect the data.",
      outcome:
        "Billing, stock, purchases and customer records live in one system the shop uses daily — no internet required.",
    },
    tags: ["React", "Vite", "Supabase", "Offline-First", "PDF", "Testing"],
  },
  {
    id: "attendance",
    sheet: "ATT-02",
    title: "Employee Attendance System",
    domain: "Field operations",
    status: "live",
    statusLabel: "Live on Netlify",
    link: "https://employeeattedance.netlify.app/",
    screenshot: "/screenshots/attendance.png",
    year: "2026",
    tagline: "Camera-based QR/barcode check-in that survives connection dropouts.",
    bullets: [
      "Camera-based QR & barcode check-in for gate entry",
      "Role-based permissions — employee, admin, super admin",
      "Offline-first with online/offline detection and queued sync",
      "Reports with Excel export and full attendance records",
    ],
    metrics: [
      { v: "3", l: "role tiers" },
      { v: "~1s", l: "scan check-in" },
      { v: "0", l: "records lost offline" },
    ],
    stack: ["OpenCode", "DeepSeek code-gen", "Barcode-detector polyfill", "IndexedDB", "React"],
    caseStudy: {
      challenge:
        "Gate attendance was manual — slow queues, easy proxy marking — and connectivity at the entry point drops exactly when check-in happens.",
      approach:
        "Camera-based QR/barcode detection via the barcode-detector polyfill — no native SDK. Role tiers for employee, admin and super admin; writes queue locally and sync when the network returns.",
      outcome:
        "Check-in is a one-second camera scan, proxies are hard, and records stay complete through dropouts.",
    },
    tags: ["React", "Vite", "Barcode Vision", "Offline-First", "Excel Export"],
  },
  {
    id: "dataflow",
    sheet: "BI-03",
    title: "DataFlow Pro — BI Platform",
    domain: "Data & analytics",
    status: "shipped",
    statusLabel: "Shipped at Trossachs",
    link: null,
    repo: "https://github.com/Madav-Verma/DataFlow-Pro",
    screenshot: null,
    year: "2026",
    tagline: "Real-time analytics platform — AI-orchestrated SQL pipelines for leadership.",
    bullets: [
      "Revenue trends, compliance risk and operational KPIs in one view",
      "Saved the firm 15–20 hours/month of manual data processing",
      "Claude + OpenCode routed per phase — SQL refactoring to orchestration",
    ],
    metrics: [
      { v: "15–20h", l: "saved monthly" },
      { v: "3", l: "KPI domains" },
    ],
    stack: ["OpenCode", "Claude SQL refactor", "Power BI", "Python", "T-SQL"],
    caseStudy: {
      challenge:
        "Leadership relied on scattered Excel exports — revenue trends, compliance risk and operational KPIs had no single real-time view, and reporting ate 15–20 hours a month.",
      approach:
        "Built DataFlow Pro on Power BI with AI-orchestrated SQL pipelines — Claude refactored SQL and optimized schemas while OpenCode orchestrated the pipeline, each phase routed to the right model.",
      outcome:
        "Revenue, risk and KPIs live in one dashboard leadership opens daily — 15–20 hours of manual processing saved monthly.",
    },
    tags: ["Power BI", "SQL", "Python", "Multi-Model"],
  },
  {
    id: "prokon",
    sheet: "WF-04",
    title: "Prokon Digital Workflows",
    domain: "Process automation",
    status: "shipped",
    statusLabel: "Shipped at Prokon Hi-Tech",
    link: null,
    repo: null,
    screenshot: null,
    year: "2024",
    tagline: "Paper processes replaced by a Python/MySQL digital pipeline.",
    bullets: [
      "Inventory tracking and AMC management on Python/MySQL",
      "Paper registers replaced with HTML forms & Google Suite",
      "Reporting accuracy improved for the operations team",
    ],
    metrics: [
      { v: "2", l: "workflows digitised" },
      { v: "100%", l: "paper eliminated" },
    ],
    stack: ["Python", "MySQL", "HTML Forms", "Google Suite"],
    caseStudy: {
      challenge:
        "Inventory tracking and AMC management ran on paper registers and manual Excel entries, with no digital trail and error-prone reporting.",
      approach:
        "Digitised both workflows on a Python/MySQL stack with HTML forms and Google Suite integration — my first use of AI-assisted code generation to accelerate delivery.",
      outcome:
        "Paper processes became automated digital pipelines; operations reports from a single accurate source.",
    },
    tags: ["Python", "MySQL", "Workflow Automation"],
  },
  {
    id: "website",
    sheet: "WEB-05",
    title: "Company Website Rebuild",
    domain: "Web platform",
    status: "wip",
    statusLabel: "In production — live soon",
    link: null,
    repo: null,
    screenshot: null,
    year: "2026",
    tagline: "End-to-end build under full agentic orchestration.",
    bullets: [
      "Full agentic pipeline: multi-agent review loops on every commit",
      "Modern stack — Vercel deployment, Supabase backend",
    ],
    metrics: [{ v: "WIP", l: "design + build" }],
    stack: ["OpenCode", "Claude review agent", "React", "Vercel", "Supabase"],
    caseStudy: null,
    tags: ["React", "AI-Assisted", "Agentic"],
  },
]

export const CAPABILITIES = [
  {
    domain: "Agentic Orchestration",
    focus: "Autonomous build loops — generation, independent review, auto-patch — across multiple model families.",
    tools: ["OpenCode", "Claude", "DeepSeek", "Gemini", "Sub-agent loops", "Prompt engineering"],
  },
  {
    domain: "Engineering & Product",
    focus: "Complete product delivery: database design to UI to deployment, tested and documented.",
    tools: ["React", "Vite", "JavaScript", "Python", "Supabase", "REST APIs", "Git", "Vercel", "Netlify"],
  },
  {
    domain: "Data & BI",
    focus: "Raw operational data to leadership-ready dashboards, pipelines and predictive models.",
    tools: ["SQL (T-SQL)", "Power BI", "Pandas & NumPy", "Database design", "Dashboarding"],
  },
  {
    domain: "Delivery & Process",
    focus: "Requirements to rollout at startup speed — offline-first architecture for real-world conditions.",
    tools: ["Rapid prototyping", "Offline-first", "Workflow digitisation", "Stakeholder communication"],
  },
]

export const PROCESS = {
  title: "How every build runs.",
  intro:
    "One loop, five phases. An independent reviewer on a different model family audits every diff before anything merges — no rubber-stamping.",
  steps: [
    { step: "01", label: "Scope", desc: "Define the feature, constraints and acceptance criteria.", trace: "spec.md → constraints + acceptance criteria" },
    { step: "02", label: "Generate", desc: "A coding agent implements with full project context.", trace: "$ opencode \"implement feature\"" },
    { step: "03", label: "Review", desc: "An independent agent on another model family audits the diff.", trace: "$ claude --review --diff HEAD~1" },
    { step: "04", label: "Patch", desc: "Flagged issues are fixed before merge — zero rubber-stamping.", trace: "✓ 3 issues flagged → patched" },
    { step: "05", label: "Ship", desc: "Deploy with automated test coverage protecting the build.", trace: "$ deploy → tests green → live" },
  ],
}

export const EXPERIENCE = [
  {
    role: "AI-Native Solutions Engineer",
    company: "Prokon Hi-Tech Systems",
    period: "2025 — Present",
    current: true,
    points: [
      "Building end-to-end AI-powered solutions with agentic workflows — multi-model orchestration and autonomous review loops",
      "Shipping a full company website rebuild through the agentic pipeline, architecture to production",
      "Routing OpenCode, Claude, DeepSeek and Gemini per phase — the right model for the right task",
    ],
  },
  {
    role: "Data & Business Analyst Intern",
    company: "Trossachs Corporate Advisors",
    period: "Jan 2026 — May 2026",
    current: false,
    points: [
      "Delivered DataFlow Pro — real-time BI visibility into revenue trends, compliance risk and operational KPIs",
      "Saved leadership 15–20 hours/month of manual data processing and reporting",
      "Used Claude + OpenCode to accelerate SQL refactoring and delivery",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Prokon Hi-Tech Systems",
    period: "Jun 2024 — Jul 2024",
    current: false,
    points: [
      "Digitised inventory tracking and AMC management into a Python/MySQL system",
      "Replaced paper-based processes with HTML forms and Google Suite, cutting administrative turnaround",
    ],
  },
]

export const EDUCATION = [
  {
    degree: "Bachelor of Computer Applications — AI",
    school: "Lingaya's Vidyapeeth, Faridabad",
    period: "2023 — 2026",
    note: "Specialising in AI & ML foundations",
    highlight: "9.0 CGPA",
  },
  {
    degree: "Senior Secondary — Commerce",
    school: "Grand Columbus International School, Faridabad",
    period: "2021 — 2023",
    note: "Class 10: 90%",
    highlight: "93%",
  },
]

export const NOTES = [
  {
    title: "Building with agentic loops",
    date: "Aug 2026",
    tag: "AI Engineering",
    excerpt:
      "Scope it, delegate implementation to a coding agent, hand the diff to an independent reviewer on a different model family before calling it done. The loop keeps quality high while shipping fast — it caught critical bugs in this very site before they reached production.",
  },
  {
    title: "Multi-model routing: the right model for the phase",
    date: "Jul 2026",
    tag: "Architecture",
    excerpt:
      "Code generation ≠ code review ≠ architecture planning. Claude reasons and reviews, DeepSeek generates fast, Gemini handles multimodal analysis. Routing tasks across model families is not a nice-to-have — it's the competitive advantage.",
  },
  {
    title: "What offline-first taught me about real software",
    date: "Jun 2026",
    tag: "Engineering Notes",
    excerpt:
      "Two shipped projects run offline-first because the real world has patchy internet. Design for the moment the network drops, not the happy path: queue writes locally, sync on return, and test what users depend on daily.",
  },
]

export const CERTIFICATIONS = [
  { title: "Business Analysis Foundations: Strategy Analysis", org: "LinkedIn Learning · IIBA-endorsed", year: "2026", img: "/certifications/01.webp", verify: "https://www.linkedin.com/learning/certificates/1262f12054207bc0e3940e7b179eb74503a5de97ced33d036824ddf6ae83a263" },
  { title: "Business Analysis: Essential Tools & Techniques", org: "LinkedIn Learning", year: "2026", img: "/certifications/02.webp", verify: "https://www.linkedin.com/learning/certificates/8b961f90ab88e05dadfb871a28408ae5f1ab1897e1746dab720657f2fe0e1a8f" },
  { title: "SQL Server 2022 Administration", org: "LinkedIn Learning · Microsoft Press", year: "2025", img: "/certifications/03.webp", verify: "https://www.linkedin.com/learning/certificates/74c91cf89b2cff72c7dde729cdfecbc4ef160f50ab832795335281164e83669c" },
  { title: "Advance Your MS SQL Server Skills", org: "LinkedIn Learning", year: "2025", img: "/certifications/04.webp", verify: "https://www.linkedin.com/learning/certificates/ad8a61bb0b45ee55caa90d13fcd1f1638fef376ef18e9d1288adf17a9c2c663b" },
  { title: "Introduction to Transact-SQL", org: "LinkedIn Learning", year: "2025", img: "/certifications/05.webp", verify: "https://www.linkedin.com/learning/certificates/652b8b73b335a447ca3c5ff7d9fd66dec6c1bff434f373907f6a163ba5f2da87" },
  { title: "Power BI for Data Analysis", org: "Vodafone Idea Foundation", year: "2025", img: "/certifications/06.webp", verify: null },
  { title: "Build Reports & Dashboards in Power BI", org: "Vodafone Idea Foundation", year: "2025", img: "/certifications/07.webp", verify: null },
  { title: "SOAR — AI to be Aware (NSQF Level 2)", org: "NASSCOM / NCVET", year: "2025", img: "/certifications/08.webp", verify: null },
  { title: "MongoDB Basics for Students", org: "MongoDB · Credly", year: "2025", img: "/certifications/09.webp", verify: "https://www.credly.com/go/RZxqRxHT" },
  { title: "Introduction to Business Intelligence", org: "Infosys Springboard", year: "2024", img: "/certifications/10.webp", verify: null },
  { title: "Operating System Fundamentals", org: "NPTEL · IIT Kharagpur", year: "2024", img: "/certifications/11.webp", verify: null },
  { title: "Data Science Completion Course", org: "Data Science Program", year: "2024", img: "/certifications/12.webp", verify: null },
  { title: "NumPy, SciPy, Matplotlib & Pandas A–Z: ML", org: "Udemy", year: "2024", img: "/certifications/13.webp", verify: null },
  { title: "Introduction to Microsoft Excel", org: "Coursera", year: "2023", img: "/certifications/14.webp", verify: null },
]
