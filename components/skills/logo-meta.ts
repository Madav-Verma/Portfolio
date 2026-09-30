/**
 * LOGO_META — display names, categories and official brand colors for every
 * logo in /public/logos. Slugs match Simple Icons (source of the SVGs);
 * hex values are the official Simple Icons brand colors, used ONLY as the
 * hover accent. Logos render monochrome by default.
 */
export const LOGO_META: Record<
  string,
  { label: string; category: string; brand: string }
> = {
  opencode: { label: "OpenCode", category: "AI", brand: "#000000" },
  claude: { label: "Claude", category: "AI", brand: "#D97757" },
  deepseek: { label: "DeepSeek", category: "AI", brand: "#5786FE" },
  googlegemini: { label: "Gemini", category: "AI", brand: "#8E75B2" },
  typescript: { label: "TypeScript", category: "Full-stack", brand: "#3178C6" },
  nextdotjs: { label: "Next.js", category: "Full-stack", brand: "#000000" },
  react: { label: "React", category: "Full-stack", brand: "#61DAFB" },
  tanstack: { label: "TanStack", category: "Full-stack", brand: "#8A7B2E" },
  tailwindcss: { label: "Tailwind CSS", category: "Full-stack", brand: "#06B6D4" },
  javascript: { label: "JavaScript", category: "Full-stack", brand: "#B89B00" },
  python: { label: "Python", category: "Full-stack · Data", brand: "#3776AB" },
  zod: { label: "Zod", category: "Full-stack", brand: "#408AFF" },
  reacthookform: {
    label: "React Hook Form",
    category: "Full-stack",
    brand: "#EC5990",
  },
  supabase: { label: "Supabase", category: "Data", brand: "#3FCF8E" },
  postgresql: { label: "PostgreSQL", category: "Data", brand: "#4169E1" },
  sqlite: { label: "SQLite", category: "Data", brand: "#003B57" },
  pandas: { label: "Pandas", category: "Data", brand: "#150458" },
  numpy: { label: "NumPy", category: "Data", brand: "#013243" },
  vercel: { label: "Vercel", category: "Deployment", brand: "#000000" },
  netlify: { label: "Netlify", category: "Deployment", brand: "#00C7B7" },
  git: { label: "Git", category: "Deployment", brand: "#F03C2E" },
  github: { label: "GitHub", category: "Deployment", brand: "#181717" },
};

export function logoMeta(slug: string) {
  return (
    LOGO_META[slug] ?? {
      label: slug,
      category: "Stack",
      brand: "#1D4ED8",
    }
  );
}
