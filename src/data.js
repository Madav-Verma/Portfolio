export const PROFILE = {
  name: 'Daksh Verma',
  firstName: 'Daksh',
  role: 'Applied AI Solutions Engineer',
  location: 'Faridabad, India',
  email: 'vermadaksh120@gmail.com',
  phone: '+91 95990 68010',
  linkedin: 'https://www.linkedin.com/in/daksh-verma-613774229/',
  github: 'https://github.com/Madav-Verma', // paste your GitHub URL here (e.g. 'https://github.com/dakshverma') — links appear in footer + contact automatically
  formspree: '', // ← paste your Formspree endpoint (e.g. 'https://formspree.io/f/xxxxxxxx') for the working contact form; until then the form falls back to opening the visitor's email app
  resume: '/resume/Daksh_Verma_CV.pdf',
  headline:
    'I design and ship end-to-end AI-powered solutions — from data pipelines to production-ready web apps — using OpenCode, AI orchestration and a full-stack mindset.',
  typed: [
    'Applied AI Solutions Engineer',
    'AI Orchestration & Automation',
    'End-to-End Solution Builder',
    'From Data to Decisions',
  ],
}

export const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Work' },
  { href: '#journey', label: 'Journey' },
  { href: '#contact', label: 'Contact' },
]

export const STATS = [
  { value: 9.0, suffix: ' CGPA', decimals: 1, label: 'BCA (AI) — Lingaya’s Vidyapeeth', icon: 'grad' },
  { value: 2, suffix: '', decimals: 0, label: 'Products live in production', icon: 'rocket' },
  { value: 20, suffix: ' hrs/mo', decimals: 0, label: 'Saved via automation & BI', icon: 'clock' },
  { value: 15, suffix: '+', decimals: 0, label: 'Certifications & courses', icon: 'check' },
]

export const TERMINAL = [
  { type: 'cmd', text: 'whoami' },
  { type: 'out', text: 'Applied AI Solutions Engineer @ Prokon Hi-Tech' },
  { type: 'cmd', text: 'cat stack.txt' },
  { type: 'out', text: 'opencode · claude · react · python · sql · power-bi' },
  { type: 'cmd', text: './ship --end-to-end' },
  { type: 'out', text: '✓ 2 products live on netlify · 1 in production' },
  { type: 'cmd', text: 'status' },
  { type: 'out', text: 'system ready — scroll to explore →' },
]

export const MARQUEE = [
  'OpenCode', 'Claude', 'AI Orchestration', 'Prompt Engineering', 'React', 'Vite',
  'Python', 'SQL · T-SQL', 'Power BI', 'Supabase', 'Pandas · NumPy', 'Excel',
  'Git & GitHub', 'Netlify · Vercel', 'Barcode Vision', 'PDF Generation',
  'Local-First Sync', 'REST APIs',
]

export const ABOUT = {
  kicker: 'The Story',
  title: 'From Data Analyst to Applied AI Solutions Engineer',
  paragraphs: [
    "My journey started with a simple question: how do spreadsheets and dashboards become decisions? As a data analyst, I learned to turn raw data into insights people could act on — building BI platforms, automating reports, and saving teams 15–20 hours every month.",
    'Then I discovered something bigger: AI as an engineering multiplier. Today I build end-to-end solutions the modern way — orchestrating tools like OpenCode and Claude, wiring data pipelines to production interfaces, and shipping complete products instead of just reports.',
    'I’m an applied AI solutions engineer: part analyst who understands the business, part engineer who ships the software, and part orchestrator who makes AI do the heavy lifting.',
  ],
  points: [
    {
      title: 'AI-Assisted Engineering',
      desc: 'Building production React apps and Python systems with OpenCode, Claude and agentic workflows — faster and cleaner.',
      icon: 'bot',
    },
    {
      title: 'AI Orchestration',
      desc: 'Composing AI tools into repeatable pipelines that automate analysis, refactoring and delivery end to end.',
      icon: 'flow',
    },
    {
      title: 'Data & Business Intelligence',
      desc: 'SQL, Power BI and Python — turning raw operational data into dashboards, KPIs and revenue insight.',
      icon: 'chart',
    },
    {
      title: 'End-to-End Delivery',
      desc: 'From requirements and database design to UI, deployment and docs — I ship complete, usable products.',
      icon: 'rocket',
    },
  ],
  identity: {
    label: 'Identity card',
    rows: [
      { k: 'Focus', v: 'Applied AI · Automation' },
      { k: 'Base', v: 'Faridabad, India' },
      { k: 'Studies', v: 'BCA (AI) · 9.0 CGPA' },
      { k: 'Status', v: 'Open to AI Engineer roles', live: true },
    ],
  },
}

export const CORE_SKILLS = [
  { name: 'AI Orchestration & Tooling', pct: 90, accent: '#22d3ee' },
  { name: 'Full-Stack Engineering (React)', pct: 85, accent: '#818cf8' },
  { name: 'SQL & Data Modeling', pct: 88, accent: '#34d399' },
  { name: 'BI & Dashboarding (Power BI)', pct: 84, accent: '#fbbf24' },
  { name: 'Python & Data Manipulation', pct: 80, accent: '#e879f9' },
  { name: 'Process Automation', pct: 86, accent: '#fb7185' },
]

export const SKILLS = [
  {
    group: 'AI & Orchestration',
    icon: 'bot',
    accent: '#22d3ee',
    tags: [
      'OpenCode', 'Claude', 'AI-Assisted Development', 'Agent Workflows',
      'Prompt Engineering', 'AI Orchestration Pipelines', 'Automation',
    ],
  },
  {
    group: 'Engineering & Product',
    icon: 'code',
    accent: '#a78bfa',
    tags: [
      'React', 'Vite', 'JavaScript', 'Python', 'MySQL', 'Supabase',
      'REST APIs', 'Git & GitHub', 'Netlify / Vercel', 'Barcode Vision',
    ],
  },
  {
    group: 'Data & BI',
    icon: 'chart',
    accent: '#34d399',
    tags: [
      'SQL (T-SQL)', 'Power BI', 'Excel', 'Pandas & NumPy',
      'Predictive Modeling', 'Dashboarding', 'Database Design',
    ],
  },
  {
    group: 'Process & Communication',
    icon: 'users',
    accent: '#fbbf24',
    tags: [
      'Requirements Gathering', 'Workflow Digitization', 'Process Automation',
      'Stakeholder Communication', 'Microsoft Visio', 'KPI Strategy',
    ],
  },
]

export const PROJECTS = [
  {
    title: 'SJS Retail Jewellery Suite',
    status: 'live',
    statusLabel: 'Live on Netlify',
    link: 'https://retailjewellery.netlify.app/',
    preview: 'https://retailjewellery.netlify.app/',
    screenshot: '/screenshots/sjs-jewellery.png',
    year: '2026',
    featured: true,
    gradient: 'linear-gradient(135deg, #0e7490, #6d28d9)',
    tagline: 'Complete retail management system for a jewellery business — the flagship build.',
    bullets: [
      'Billing, stock, purchases, customers & invoices with PDF generation',
      'Live gold-rate price calculator and hallmark HUID splitting engine',
      'Role-based auth, audit trails and offline local database',
      '20+ automated unit tests covering billing, stock and CSV logic',
    ],
    metrics: [
      { v: '20+', l: 'unit tests' },
      { v: '4', l: 'core modules' },
      { v: '100%', l: 'offline-capable' },
    ],
    tags: ['React', 'Vite', 'Supabase', 'Offline-First', 'PDF', 'Testing'],
    caseStudy: {
      challenge: 'The jewellery store ran on paper registers and Excel sheets — stock, hallmarked gold and daily billing had no single source of truth, and the shop\u2019s internet connection is unreliable.',
      approach: 'Built an offline-first React app with a local database and queued sync. Added a live gold-rate calculator and a hallmark HUID splitting engine that tracks each hallmarked item uniquely for GST compliance, with PDF invoices and an automated backup script.',
      outcome: 'Billing, stock, purchases and customer records now live in one system the shop uses daily — no internet required, data protected by scripted backups.',
    },
  },
  {
    title: 'Sewadar Attendance System',
    status: 'live',
    statusLabel: 'Live on Netlify',
    link: 'https://employeeattedance.netlify.app/',
    preview: 'https://employeeattedance.netlify.app/',
    screenshot: '/screenshots/attendance.png',
    year: '2026',
    featured: true,
    gradient: 'linear-gradient(135deg, #0f766e, #2563eb)',
    tagline: 'Offline-first employee attendance with QR/barcode scanning at the gate.',
    bullets: [
      'Camera-based QR & barcode check-in for gate entry',
      'Role-based permissions — employee, admin, super admin',
      'Offline-first with online/offline detection and queued sync',
      'Reports with Excel export and full attendance records',
    ],
    metrics: [
      { v: '3', l: 'role tiers' },
      { v: '1s', l: 'scan check-in' },
      { v: '✓', l: 'offline-first' },
    ],
    tags: ['React', 'Vite', 'Barcode Vision', 'Offline-First', 'Excel Export'],
    caseStudy: {
      challenge: 'Gate attendance was manual — slow queues and easy proxy marking. Connectivity at the entry point also drops, so a cloud-only system would fail exactly when it was needed.',
      approach: 'Used camera-based QR/barcode detection (barcode-detector polyfill) for one-second check-in at the gate, with role-based tiers for employee, admin and super admin. Writes queue locally and sync when the connection returns; reports export to Excel.',
      outcome: 'Check-in is a one-second camera scan, proxies are hard, and attendance records stay complete even through connection dropouts.',
    },
  },
  {
    title: 'DataFlow Pro — BI Platform',
    status: 'shipped',
    statusLabel: 'Shipped at Trossachs',
    link: null,
    year: '2026',
    featured: false,
    gradient: 'linear-gradient(135deg, #7c3aed, #db2777)',
    tagline: 'Real-time analytics platform giving leadership visibility into revenue, risk and KPIs.',
    bullets: [
      'Revenue trends, compliance risk and operational KPIs in one view',
      'Saved the firm 15–20 hours/month of manual data processing',
      'AI-assisted delivery — Claude + OpenCode for SQL refactoring and speed',
    ],
    metrics: [
      { v: '15–20h', l: 'saved monthly' },
      { v: '3', l: 'KPI domains' },
      { v: 'AI', l: 'assisted build' },
    ],
    tags: ['Power BI', 'SQL', 'Python', 'AI-Assisted'],
  },
  {
    title: 'Prokon Digital Workflows',
    status: 'shipped',
    statusLabel: 'Shipped at Prokon Hi-Tech',
    link: null,
    year: '2024',
    featured: false,
    gradient: 'linear-gradient(135deg, #b45309, #dc2626)',
    tagline: 'Digitised manual business workflows into a Python + MySQL system.',
    bullets: [
      'Inventory tracking and AMC management on a Python/MySQL stack',
      'Replaced paper-based processes with HTML forms & Google Suite',
      'Improved reporting accuracy for the operations team',
    ],
    metrics: [
      { v: '0', l: 'paper left' },
      { v: '2', l: 'workflows live' },
      { v: '+', l: 'report accuracy' },
    ],
    tags: ['Python', 'MySQL', 'Workflow Automation'],
  },
  {
    title: 'New Company Website',
    status: 'soon',
    statusLabel: 'In production — live soon',
    link: null,
    year: '2026',
    featured: false,
    gradient: 'linear-gradient(135deg, #0891b2, #4f46e5)',
    tagline: 'Currently designing and building — shipping soon.',
    bullets: [
      'End-to-end build with AI-assisted engineering and orchestration',
      'Modern stack, performance-first architecture',
    ],
    metrics: [
      { v: 'WIP', l: 'design + build' },
      { v: 'AI', l: 'assisted' },
    ],
    tags: ['React', 'AI-Assisted', 'WIP'],
  },
]

export const EXPERIENCE = [
  {
    role: 'Applied AI Solutions Engineer',
    company: 'Prokon Hi-Tech Systems',
    period: 'Present',
    current: true,
    points: [
      'Building end-to-end AI-powered solutions for the company using OpenCode, Claude and AI orchestration workflows',
      'Shipping a new company website — from architecture to production (live soon)',
      'Combining data analysis, engineering and AI tooling to deliver complete products rather than point solutions',
    ],
    tags: ['OpenCode', 'AI Orchestration', 'React', 'End-to-End Delivery'],
  },
  {
    role: 'Data & Business Analyst Intern',
    company: 'Trossachs Corporate Advisors',
    period: 'Jan 2026 – May 2026',
    current: false,
    points: [
      'Delivered DataFlow Pro — a BI & analytics platform with real-time visibility into revenue trends, compliance risk and operational KPIs',
      'Saved leadership 15–20 hours/month of manual data processing and reporting',
      'Used AI-assisted tools (Claude, OpenCode) to accelerate delivery and SQL refactoring',
    ],
    tags: ['Power BI', 'SQL', 'Python', 'AI-Assisted'],
  },
  {
    role: 'Software Developer Intern',
    company: 'Prokon Hi-Tech Systems',
    period: 'Jun 2024 – Jul 2024',
    current: false,
    points: [
      'Digitised manual business workflows — inventory tracking and AMC management — into a Python/MySQL system',
      'Replaced paper-based processes with HTML forms and Google Suite, cutting administrative turnaround time',
    ],
    tags: ['Python', 'MySQL', 'HTML', 'Automation'],
  },
]

export const EDUCATION = [
  {
    degree: 'Bachelor of Computer Applications — AI',
    school: "Lingaya's Vidyapeeth, Faridabad",
    period: '2023 – 2026',
    note: 'Specialising in AI & ML foundations',
    highlight: '9.0',
    highlightLabel: 'CGPA',
    icon: 'grad',
  },
  {
    degree: 'Senior Secondary — Commerce',
    school: 'Grand Columbus International School, Faridabad',
    period: '2021 – 2023',
    note: 'Class 12: 93% · Class 10: 90%',
    highlight: '93%',
    highlightLabel: 'Class 12',
    icon: 'school',
  },
]

export const CERTIFICATIONS = [
  { title: 'Business Analysis Foundations: Strategy Analysis', org: 'LinkedIn Learning · IIBA-endorsed', year: '2026', img: '/certifications/01.webp', verify: 'https://www.linkedin.com/learning/certificates/1262f12054207bc0e3940e7b179eb74503a5de97ced33d036824ddf6ae83a263', recent: true },
  { title: 'Business Analysis: Essential Tools & Techniques', org: 'LinkedIn Learning', year: '2026', img: '/certifications/02.webp', verify: 'https://www.linkedin.com/learning/certificates/8b961f90ab88e05dadfb871a28408ae5f1ab1897e1746dab720657f2fe0e1a8f', recent: true },
  { title: 'SQL Server 2022 Administration', org: 'LinkedIn Learning · Microsoft Press', year: '2025', img: '/certifications/03.webp', verify: 'https://www.linkedin.com/learning/certificates/74c91cf89b2cff72c7dde729cdfecbc4ef160f50ab832795335281164e83669c', recent: true },
  { title: 'Advance Your MS SQL Server Skills', org: 'LinkedIn Learning', year: '2025', img: '/certifications/04.webp', verify: 'https://www.linkedin.com/learning/certificates/ad8a61bb0b45ee55caa90d13fcd1f1638fef376ef18e9d1288adf17a9c2c663b', recent: true },
  { title: 'Introduction to Transact-SQL', org: 'LinkedIn Learning', year: '2025', img: '/certifications/05.webp', verify: 'https://www.linkedin.com/learning/certificates/652b8b73b335a447ca3c5ff7d9fd66dec6c1bff434f373907f6a163ba5f2da87', recent: true },
  { title: 'Power BI for Data Analysis', org: 'Vodafone Idea Foundation', year: '2025', img: '/certifications/06.webp', recent: true },
  { title: 'Build Reports & Dashboards in Power BI', org: 'Vodafone Idea Foundation', year: '2025', img: '/certifications/07.webp', recent: true },
  { title: 'SOAR — AI to be Aware (NSQF Level 2)', org: 'NASSCOM / NCVET', year: '2025', img: '/certifications/08.webp', recent: true },
  { title: 'MongoDB Basics for Students', org: 'MongoDB · Credly', year: '2025', img: '/certifications/09.webp', verify: 'https://www.credly.com/go/RZxqRxHT', recent: true },
  { title: 'Introduction to Business Intelligence', org: 'Infosys Springboard', year: '2024', img: '/certifications/10.webp' },
  { title: 'Operating System Fundamentals', org: 'NPTEL · IIT Kharagpur', year: '2024', img: '/certifications/11.webp' },
  { title: 'Data Science Completion Course', org: 'Data Science Program', year: '2024', img: '/certifications/12.webp' },
  { title: 'NumPy, SciPy, Matplotlib & Pandas A–Z: ML', org: 'Udemy', year: '2024', img: '/certifications/13.webp' },
  { title: 'Introduction to Microsoft Excel', org: 'Coursera', year: '2023', img: '/certifications/14.webp' },
]

export const TESTIMONIALS = [
  // Add real quotes here — the section stays hidden until at least one exists.
  // {
  //   quote: 'Daksh delivered a system we actually use every day...',
  //   name: 'Full Name',
  //   role: 'Title',
  //   company: 'Company',
  // },
]

export const POSTS = [
  {
    title: 'Shipping with AI orchestration — how OpenCode changed my build workflow',
    date: 'Aug 2026',
    tag: 'AI Engineering',
    excerpt: 'I now build production features with a three-agent workflow: a specialist coder, an independent reviewer on a different model family, and a test writer. Here is the loop that keeps quality high while shipping fast.',
    body: [
      'The pattern is simple: scope the feature, delegate the implementation to a coding agent, then hand the diff to an independent review agent before calling anything done. The reviewer runs on a different model family, so it genuinely catches blind spots instead of rubber-stamping.',
      'This portfolio itself — every section, the cert wall, the reveal system — was built and audited this way. The review pass alone caught critical bugs (an invisible hero, counters that never ran) before they ever reached production.',
    ],
  },
  {
    title: 'What going offline-first taught me about real-world software',
    date: 'Jul 2026',
    tag: 'Engineering Notes',
    excerpt: 'Two of my shipped projects — a jewellery retail suite and a gate attendance system — run offline-first because the real world has patchy internet. A few lessons on local-first architecture that planning docs never mention.',
    body: [
      'Design for the moment the network drops, not the happy path. Both projects queue writes locally and sync when connectivity returns, and both were built because the users literally could not rely on a cloud-only system.',
      'The barcode-detector polyfill made camera-based check-in work without a native SDK, and vitest + testing-library gave the retail suite 20+ automated tests over billing, stock and CSV logic — worth every minute when the shop depends on it daily.',
    ],
  },
]