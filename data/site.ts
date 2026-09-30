/* Central content model — every fact on the homepage comes from here.
   No invented clients, awards, testimonials or statistics. */

export const profile = {
  initials: "DV",
  name: "Daksh Verma",
  role: "Applied AI Solutions Engineer",
  location: "Faridabad, India",
  phone: "+91 95990 68010",
  phoneHref: "tel:+919599068010",
  email: "vermadaksh120@gmail.com",
  linkedin: "https://www.linkedin.com/in/daksh-verma-613774229/",
  github: "https://github.com/Madav-Verma",
  portfolio: "/projects",
  resumeHref: "/Daksh-Verma-Resume.pdf",
};

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Certifications", href: "/certifications" },
  { label: "Contact", href: "/#contact" },
];

export const hero = {
  eyebrow: "Applied AI Solutions Engineer",
  titleA: "Building Useful",
  titleB: "Software with",
  titleAccent: "AI",
  description:
    "I design and ship production-ready web applications, AI assistants and internal tools that solve real business problems — from idea to deployment.",
  primary: { label: "View My Work", href: "#projects" },
  secondary: { label: "Download Resume", href: profile.resumeHref },
  quote: { a: "Turning ideas", b: "into", accent: "scalable", c: "solutions." },
};

export const services: { icon: string; label: string }[] = [
  { icon: "spark", label: "AI Applications" },
  { icon: "code", label: "Web Development" },
  { icon: "database", label: "ERP / CRM Systems" },
  { icon: "chart", label: "Data & Analytics" },
  { icon: "bolt", label: "Automation Tools" },
];

export type Metric = { icon: string; value: string; label: string };

export const metrics: Metric[] = [
  { icon: "box", value: "2+", label: "Products Live" },
  { icon: "users", value: "10+", label: "Team Members Using ERP" },
  { icon: "grid", value: "50+", label: "Features Shipped" },
  { icon: "folder", value: "3+", label: "Major Projects" },
  { icon: "code", value: "100%", label: "Hands-on Development" },
];

export const metricsNote = {
  main: "Software used",
  sub: "daily by real people",
  handwritten: "10+ team members",
};

export const capabilitiesIntro = {
  label: "What I do",
  heading: "Turning Ideas into Practical Solutions",
  text: "I specialize in building modern web applications, retrieval-grounded AI assistants and automation workflows. I enjoy creating tools that make businesses more efficient.",
};

export type Capability = {
  icon: string;
  tint: string;
  title: string;
  text: string;
  /**
   * Real destination for the whole card link. Every capability below maps
   * to an existing `id` on /skills (components/skills/*Domain.tsx), which is
   * what makes the arrow affordance honest. If one ever stops mapping to a
   * real section, drop the arrow instead of shipping an inert affordance.
   */
  href: string;
};

export const capabilities: Capability[] = [
  {
    icon: "spark",
    tint: "bg-card-cream",
    title: "AI-Powered Applications",
    text: "Build intelligent systems using LLMs, RAG and agentic workflows.",
    href: "/skills#domain-ai",
  },
  {
    icon: "code",
    tint: "bg-card-blue",
    title: "Full-Stack Development",
    text: "Modern, scalable and user-friendly web applications.",
    href: "/skills#domain-fullstack",
  },
  {
    icon: "chart",
    tint: "bg-card-green",
    title: "Data-Driven Solutions",
    text: "Transform data into actionable insights with BI and analytics.",
    href: "/skills#domain-data",
  },
  {
    icon: "bolt",
    tint: "bg-card-beige",
    title: "Automation Tools",
    text: "Tools that save time and improve productivity.",
    href: "/skills#domain-automation",
  },
  {
    icon: "layers",
    tint: "bg-card-gray",
    title: "System Design & Deployment",
    text: "End-to-end solution design, hosting and ongoing support.",
    href: "/skills#domain-deployment",
  },
];

export const projectsIntro = {
  label: "Featured Projects",
  heading: "Projects That Solve Real Problems",
  all: { label: "View All Projects", href: "/projects" },
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string | null;
  alt: string;
  /**
   * Internal case-study destination — the card's whole click target.
   * `#project-0N` is owned by the matching entry's `anchor` in
   * data/projects.ts (same order, 01-04). External live links deliberately
   * stay on the /projects case studies, separate from this internal hop.
   */
  href: string;
  /**
   * Editorial system overview shown in place of a screenshot when no real
   * capture exists. Real documented facts only — it documents the system,
   * it never imitates its interface.
   */
  overview?: {
    label: string;
    proof: { value: string; label: string };
    modules: string[];
    note: string;
  };
};

export const projects: Project[] = [
  {
    title: "Prokon Hi-Tech Website",
    description:
      "Next.js 16 website with 96-model catalogue, RAG assistant and sizing tools.",
    tags: ["Next.js", "TypeScript", "RAG", "SEO/GEO"],
    image: "/projects/prokon-website-home.png",
    alt: "Prokon Hi-Tech website homepage screenshot",
    href: "/projects#project-01",
  },
  {
    title: "Prokon ERP / CRM",
    description:
      "Internal ERP used by 10 staff with 8 modules and real-time dashboards.",
    tags: ["TanStack", "Supabase", "CRM", "Analytics"],
    image: null, // no genuine ERP screenshot exists — use the overview panel
    alt: "Prokon ERP / CRM system overview: eight modules used daily by 10 staff",
    href: "/projects#project-02",
    overview: {
      label: "System overview",
      proof: { value: "10", label: "staff using the ERP daily" },
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
      note: "Internal system — no public link",
    },
  },
  {
    title: "SJS Retail Jewellery Suite",
    description:
      "Offline-first retail suite with billing, HUID tracking and PDF invoices.",
    tags: ["React", "Supabase", "Offline", "Live"],
    image: "/projects/sjs-cards.png",
    alt: "SJS jewellery billing suite screenshot",
    href: "/projects#project-03",
  },
  {
    title: "Employee Attendance System",
    description:
      "Camera QR/barcode check-in with offline sync and Excel export.",
    tags: ["React", "IndexedDB", "QR Code", "Live"],
    image: "/projects/attendance-dashboard.png",
    alt: "Employee attendance system screenshot",
    href: "/projects#project-04",
  },
];

export const closing = {
  label: "Let's Connect",
  heading: "Have a project in mind?",
  text: "I'm always open to discussing new opportunities and interesting ideas.",
  cta: { label: "Get In Touch", href: "mailto:vermadaksh120@gmail.com" },
};
