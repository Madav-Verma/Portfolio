export const PROFILE = {
  name: "Daksh Verma",
  initials: "DV",
  role: "Applied AI Solutions Engineer",
  positioning: "Applied AI Solutions Engineer · Forward-Deployed Delivery",
  location: "Faridabad, India",
  email: "vermadaksh120@gmail.com",
  phone: "+91 95990 68010",
  linkedin: "https://www.linkedin.com/in/daksh-verma-613774229/",
  github: "https://github.com/Madav-Verma",
  resume: "/resume/Daksh_Verma_Resume_2026.pdf",
  headline: "Production software, shipped end to end.",
  subline:
    "I orchestrate agentic workflows — OpenCode, Claude, DeepSeek, Gemini — to ship complete products: offline-first, tested, live. And I deploy forward: embedded with the operators who use them.",
  status: "Open to new roles",
}

export const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#now", label: "Now" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#process", label: "Process" },
  { href: "#journey", label: "Journey" },
  { href: "#notes", label: "Notes" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
]

export const HERO_META = [
  { k: "Base", v: "Faridabad, IN" },
  { k: "Focus", v: "Applied AI · Forward-Deployed" },
  { k: "BCA (AI)", v: "9.0 CGPA" },
]

export const MARQUEE = [
  "OpenCode", "Claude", "DeepSeek", "Gemini", "Multi-Model Routing",
  "Agentic Review Loops", "RAG Pipelines", "TypeScript", "Next.js",
  "TanStack Start", "React", "Tailwind CSS", "Python",
  "SQL · T-SQL", "PostgreSQL", "Supabase", "Vercel", "Netlify",
  "Prompt Engineering", "Offline-First", "REST APIs", "Power BI", "Git & GitHub",
]

export const ABOUT = {
  title: "From data analyst to applied AI engineer.",
  paragraphs: [
    "I started as a data analyst, learning how spreadsheets become decisions — building BI platforms that saved teams 15–20 hours a month. Then I found a bigger lever: AI as an engineering multiplier.",
    "Today I work two ways. As an applied AI engineer I orchestrate agentic workflows — OpenCode, Claude, DeepSeek, Gemini — with independent review loops on every diff. As a forward-deployed builder I sit with the operators, from jewellery-store counters to factory gates, and ship into their constraints instead of a clean spec.",
    "The proof is in production: two live offline-first apps, a leadership BI platform — and at Prokon Hi-Tech, a company website launching now and an ERP/CRM that 10 staff run every day.",
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
    id: "prokon-website",
    sheet: "WEB-01",
    title: "Prokon Hi-Tech Website",
    domain: "Marketing site + catalogue",
    status: "wip",
    statusLabel: "In development — hosting in progress",
    link: null,
    repo: null,
    screenshot: "/screenshots/prokon-website-home.png",
    shots: [
      { src: "/screenshots/prokon-website-home.png", label: "Homepage — hero, trust badges, product card" },
      { src: "/screenshots/prokon-website-catalogue.png", label: "Catalogue — faceted search over 96 models" },
      { src: "/screenshots/prokon-website-product.png", label: "Product page — gallery, price box, 60+ spec rows" },
      { src: "/screenshots/prokon-website-chatbot.png", label: "Prokon Assistant — grounded answers, lead capture" },
      { src: "/screenshots/prokon-website-calculator.png", label: "Backup-load calculator — instant recommendation" },
    ],
    year: "2026",
    metric: "96-model catalogue · RAG assistant",
    tagline: "Company site rebuild — a catalogue that sells, an assistant that answers, tools that recommend.",
    bullets: [
      "96-model APC catalogue with faceted search, side-by-side compare and full spec pages, fed by a structured SQLite product database",
      "Prokon Assistant — RAG chatbot (Gemini 2.0 Flash / GPT-4o-mini) grounded in the product knowledge base, with a rule-engine fallback so it never dead-ends; quick replies plus lead capture",
      "Interactive backup-load calculator and IO-spec chart that recommend the right UPS on the page",
      "SEO/GEO-ready: sitemap, JSON-LD structured data, llms.txt — built to be found by search and answer engines",
    ],
    metrics: [
      { v: "24", l: "routes" },
      { v: "96", l: "catalogue models" },
      { v: "60+", l: "spec rows, flagship page" },
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Gemini 2.0 Flash", "GPT-4o-mini", "SQLite"],
    caseStudy: {
      challenge:
        "The live company site doesn't sell — thin product information, no way to compare models, no self-serve answers, and inbound questions all land on the phone.",
      approach:
        "Full rebuild on Next.js 16 with TypeScript: a modelled product catalogue (search, facets, compare, 60+ spec rows per flagship page), a retrieval-grounded assistant that answers from the knowledge base and falls back to deterministic rules instead of hallucinating, and interactive tools that recommend hardware on the page.",
      outcome:
        "Launching — the catalogue, assistant and tools are built and verified; hosting is in progress.",
    },
    tags: ["Next.js", "TypeScript", "RAG", "Catalogue", "SEO/GEO"],
  },
  {
    id: "prokon-erp",
    sheet: "ERP-02",
    title: "Prokon ERP / CRM",
    domain: "Operations platform",
    status: "shipped",
    statusLabel: "In daily use · Prokon Hi-Tech",
    link: null,
    repo: null,
    screenshot: null,
    year: "2026",
    metric: "8 modules · used daily by 10 staff",
    tagline: "Company-wide operations platform — CRM, sales, inventory and field service in one system.",
    bullets: [
      "Own the build end-to-end (TypeScript, React, TanStack Start, Supabase) — 8 modules: CRM, sales, inventory, purchase, service/AMC, finance, HR & payroll, admin; 145 routes, 189 components, 113 migrations, 75 tests",
      "CRM runs the full arc: leads → quotations → orders → invoices, with incentives and AI-assisted recommendations",
      "Tickets carry P1 (most urgent) to P5 priority — the admin list and each engineer's queue sort P1 first; overdue-beyond-24h tickets, expiring AMCs and overdue PM visits surface on the dashboard",
      "Field-engineer portal: Today / Carry-forward / Waiting-for-parts queue, and a 3-step ticket flow with compulsory serial photo + GPS, field-service report and photo upload",
      "Ticket and AMC dashboard counts update live over database subscriptions as the team works",
    ],
    metrics: [
      { v: "10", l: "staff daily" },
      { v: "8", l: "modules" },
      { v: "145", l: "routes" },
    ],
    stack: ["TanStack Start", "TypeScript", "Supabase", "PostgreSQL + RLS", "Radix UI", "Tailwind CSS"],
    caseStudy: {
      challenge:
        "Sales, inventory and field service ran on spreadsheets and memory — error-prone records, end-of-day consolidation, urgent jobs buried in arrival order, and at-risk service accounts invisible until they churned.",
      approach:
        "One system as the single source of truth: a modelled Postgres schema with row-level security, priority-based ticket triage (P1–P5), a field portal built around serial-photo + GPS proof, and live ticket/AMC dashboards over database subscriptions — ≈154k lines of TypeScript across 113 migrations.",
      outcome:
        "10 staff run it daily. Manual record errors are gone with the system as the single source of truth, managers read real-time reports instead of end-of-day consolidation, urgent jobs surface first, and service-quality signals flag at-risk accounts before they churn.",
    },
    tags: ["ERP/CRM", "TypeScript", "Supabase", "Field Service", "Realtime"],
  },
  {
    id: "sjs",
    sheet: "SJS-03",
    title: "SJS Retail Jewellery Suite",
    domain: "Production system",
    status: "live",
    statusLabel: "Live on Netlify",
    link: "https://retailjewellery.netlify.app/",
    screenshot: "/screenshots/sjs-jewellery.png",
    year: "2026",
    metric: "20+ automated tests · 100% offline-capable",
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
    sheet: "ATT-04",
    title: "Employee Attendance System",
    domain: "Field operations",
    status: "live",
    statusLabel: "Live on Netlify",
    link: "https://employeeattedance.netlify.app/",
    screenshot: "/screenshots/attendance.png",
    year: "2026",
    metric: "~1s camera check-in · 0 records lost offline",
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
    sheet: "BI-05",
    title: "DataFlow Pro — BI Platform",
    domain: "Data & analytics",
    status: "shipped",
    statusLabel: "Shipped at Trossachs",
    link: null,
    // No public reference exists: github.com/Madav-Verma/DataFlow-Pro returns HTTP 404
    // (verified twice, and the repo is absent from the account's 9 public repos). The
    // work shipped internally at Trossachs and was never published, so there is nothing
    // honest to link. This project renders typographically, never as a fake screenshot.
    repo: null,
    screenshot: null,
    year: "2026",
    metric: "15–20 hrs/month of reporting saved",
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
    sheet: "WF-06",
    title: "Prokon Digital Workflows",
    domain: "Process automation",
    status: "shipped",
    statusLabel: "Shipped at Prokon Hi-Tech",
    link: null,
    repo: null,
    screenshot: null,
    year: "2024",
    metric: "2 workflows digitised · paper eliminated",
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
]

export const NOW = [
  {
    id: "now-website",
    title: "Prokon Hi-Tech Website",
    status: "wip",
    statusLabel: "In development — hosting in progress",
    desc: "24 routes, 96-model catalogue, RAG assistant, interactive tools. Launching.",
    link: null,
  },
  {
    id: "now-erp",
    title: "Prokon ERP / CRM",
    status: "shipped",
    statusLabel: "In daily use · 10 staff",
    desc: "CRM, sales, inventory, field service — priority triage, live dashboards, real-time reporting.",
    link: null,
  },
]

export const CAPABILITIES = [
  {
    domain: "Agentic Orchestration",
    focus: "Autonomous build loops — generation, independent review, auto-patch — across multiple model families.",
    tools: ["OpenCode", "Claude", "DeepSeek", "Gemini", "Sub-agent loops", "Prompt engineering"],
  },
  {
    domain: "Forward-Deployed Engineering",
    focus: "Embedded delivery — discovery with operators, solution design under real-world constraints, rollout and adoption.",
    tools: ["On-site discovery", "Solution design", "Offline-first delivery", "Stakeholder communication", "Adoption & support"],
  },
  {
    domain: "Engineering & Product",
    focus: "Complete product delivery: database design to UI to deployment, tested and documented.",
    tools: ["TypeScript", "Next.js", "TanStack Start", "React", "Vite", "JavaScript", "Python", "Supabase", "PostgreSQL", "REST APIs", "Git", "Vercel", "Netlify"],
  },
  {
    domain: "Catalogue & Commerce Systems",
    focus: "Product data modelling to faceted search, compare and spec pages that sell.",
    tools: ["Faceted search", "Model compare", "Spec data modelling", "SQLite / Postgres catalogues", "SEO & GEO"],
  },
  {
    domain: "AI Assistants (RAG)",
    focus: "Grounded assistants that answer from your data — and admit when they can't.",
    tools: ["Retrieval grounding", "KB indexing", "LLM routing (Gemini, GPT)", "Rule-engine fallback", "SSE streaming", "Lead capture"],
  },
  {
    domain: "Hosting & Deployment",
    focus: "Build to live URL — domains, TLS, CI deploys, cache and security headers.",
    tools: ["Vercel", "Netlify", "DNS & domains", "SSL/TLS", "Cache-control & security headers", "CI build pipelines"],
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

export const RECEIPTS = [
  {
    rank: "signature",
    catch: "Annotation overlap",
    by: "Sub-agent handoff flag",
    evidence: "Desktop labels extend left into the hero gutter and overlap the proof strip. Flagged at handoff; shipped anyway. This pass resolves it.",
    commit: "(this pass)",
  },
  {
    rank: "strong",
    catch: "24-pages claim failed Jev verification",
    by: "jev_verify",
    evidence: "Copy said '24 pages shipped'. Recount proved 24 route files, not pages. Wording corrected before publishing.",
    commit: "98f0b9c",
  },
  {
    rank: "notable",
    catch: "Dead filter matching zero rows",
    by: "Automated verify pass",
    evidence: "'In production' filter returned 0 projects — no status 'production' exists; live + shipped was the intended set.",
    commit: "860a764",
  },
  {
    rank: "background",
    catch: "React DOM-prop warning in console",
    by: "Playwright console capture",
    evidence: "fetchPriority on <img> should be fetchpriority. DOM-prop warning reached the console until fixed.",
    commit: "860a764",
  },
];

export const EXPERIENCE = [
  {
    role: "Applied AI Solutions Engineer",
    company: "Prokon Hi-Tech Systems",
    period: "2025 — Present",
    current: true,
    points: [
      "Own the company's web platform and internal ERP/CRM end-to-end — architecture, Postgres schema and row-level security, UI, deployment — for a system 10 staff run daily",
      "Shipping the company website rebuild (Next.js 16, TypeScript): 96-model catalogue, retrieval-grounded assistant, interactive tools; in development with hosting in progress",
      "Replaced spreadsheet-run operations with priority-based ticket triage (P1–P5), live ticket/AMC dashboards and real-time reporting — record errors down, urgent jobs first, at-risk service issues visible before they churn",
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
    title: "Shipping a catalogue that sells",
    date: "Sep 2026",
    tag: "Product Engineering",
    excerpt:
      "A catalogue is a conversion engine, not a list. Faceted search narrows, side-by-side compare decides, and 60+ spec rows answer the question before the phone rings. The assistant on top only works because the data underneath is modelled — RAG over a mess is just faster confusion.",
  },
  {
    title: "What an ERP teaches about data integrity",
    date: "Sep 2026",
    tag: "Engineering Notes",
    excerpt:
      "Ten people share one truth or ten people keep ten truths. Row-level security, a single source of record, and dashboards that update as colleagues work — integrity is architecture, not discipline. Priority triage only works when the queue itself is trustworthy.",
  },
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

export const FAQS = [
  {
    q: "What does Daksh Verma do?",
    a: "Applied AI Solutions Engineer in Faridabad, India, working in a forward-deployed way — embedded with the operators who use the software. I ship complete production products with agentic workflows, orchestrating OpenCode, Claude, DeepSeek and Gemini from scope to deploy. Currently at Prokon Hi-Tech and open to new roles.",
  },
  {
    q: "What is a forward-deployed engineer, and how does that fit you?",
    a: "Someone who ships software inside the customer's reality instead of a clean spec — discovery on site, design under real constraints, rollout and adoption. My jewellery-store suite is offline-first because the shop's internet is unreliable; the gate attendance system assumes connectivity drops at check-in; the Prokon ERP replaced spreadsheets 10 staff touch daily. That is forward-deployed work.",
  },
  {
    q: "Which products are live right now?",
    a: "Two. SJS Retail Jewellery Suite at retailjewellery.netlify.app covers billing, stock, HUID tracking and PDF invoices with 20+ automated tests and full offline support. Employee Attendance System at employeeattedance.netlify.app does camera QR and barcode check-in in about a second with zero records lost offline.",
  },
  {
    q: "What is the Prokon website rebuild?",
    a: "A full Next.js 16 + TypeScript rebuild of the company site: a 96-model APC catalogue with faceted search and side-by-side compare, a retrieval-grounded assistant (Gemini / GPT) that answers from the product knowledge base, and interactive tools like a backup-load calculator. In development now, hosting in progress.",
  },
  {
    q: "What does the Prokon ERP/CRM do?",
    a: "A company-wide operations platform in daily use by 10 staff: CRM from leads to invoices with incentives, sales and purchase flows, serial-tracked inventory, and field service with P1-to-P5 ticket triage plus an engineer portal (photo + GPS proof, field-service reports). Ticket and AMC dashboards update live as the team works.",
  },
  {
    q: "How does the agentic build loop work?",
    a: "One loop, five phases. Scope the feature with acceptance criteria, generate with a coding agent, review with an independent agent on a different model family, patch every flagged issue before merge, then ship with automated tests green.",
  },
  {
    q: "What is the proof behind the speed claims?",
    a: "DataFlow Pro at Trossachs saved leadership 15 to 20 hours a month of manual reporting. Prokon digitised 2 paper workflows to zero paper. The ERP replaced spreadsheet operations for 10 daily staff. Both live products run offline-first because shop and gate connectivity drops in the real world.",
  },
  {
    q: "What is the background?",
    a: "BCA in Artificial Intelligence at Lingaya's Vidyapeeth, 2023 to 2026, 9.0 CGPA. Class 12 commerce at 93%. Data and business analyst intern at Trossachs, software developer intern at Prokon Hi-Tech in 2024.",
  },
  {
    q: "How do I get in touch?",
    a: "Email vermadaksh120@gmail.com directly, I read every message myself. Phone plus LinkedIn and GitHub links sit in the contact plate. No contact form by choice, mailto first, resume PDF linked in the hero and footer.",
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

/* Hero proof strip — derived from the data above so counts can never drift
   from the source of truth (live apps and certifications are computed). */
export const PROOF_POINTS = [
  { k: "Live production apps", v: String(PROJECTS.filter((p) => p.status === "live").length) },
  { k: "Staff on the ERP daily", v: "10" },
  { k: "Reporting hrs saved / month", v: "15–20h" },
  { k: "Verifiable certifications", v: String(CERTIFICATIONS.length) },
]
