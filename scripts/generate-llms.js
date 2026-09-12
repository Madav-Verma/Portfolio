#!/usr/bin/env node
// Keeps crawler artifacts honest: llms.txt mirrors the sitemap canonical,
// lists both live products with their real URLs, and names the resume files
// that actually exist in public/resume. Zero deps. Fails loudly on drift.
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const fail = (msg) => {
  console.error(`generate:llms FAIL — ${msg}`);
  process.exit(1);
};

const llms = readFileSync(join(root, "public/llms.txt"), "utf8");
const full = readFileSync(join(root, "public/llms-full.txt"), "utf8");
const sitemap = readFileSync(join(root, "public/sitemap.xml"), "utf8");
const robots = readFileSync(join(root, "public/robots.txt"), "utf8");
const index = readFileSync(join(root, "index.html"), "utf8");

const canonical = "https://portfolio-desibox.vercel.app/";

// 1. Single canonical everywhere.
for (const [name, text] of [["llms.txt", llms], ["sitemap.xml", sitemap], ["robots.txt", robots], ["index.html", index]]) {
  if (!text.includes(canonical)) fail(`${name} missing canonical ${canonical}`);
}

// 2. Both live products named with real URLs (from src/data.js, not memory).
for (const url of ["https://retailjewellery.netlify.app", "https://employeeattedance.netlify.app"]) {
  if (!llms.includes(url)) fail(`llms.txt missing live product ${url}`);
  if (!full.includes(url)) fail(`llms-full.txt missing live product ${url}`);
}

// 3. Resume files referenced must exist.
for (const f of ["public/resume/Daksh_Verma_Resume_2026.pdf", "public/resume/Daksh_Verma_Resume_2026.html"]) {
  if (!existsSync(join(root, f))) fail(`missing ${f}`);
  if (!full.includes("Daksh_Verma_Resume_2026.pdf")) fail("llms-full.txt missing resume reference");
}

// 4. Sitemap lists what exists: home + both resume variants.
for (const loc of [
  "<loc>https://portfolio-desibox.vercel.app/</loc>",
  "Daksh_Verma_Resume_2026.pdf",
  "Daksh_Verma_Resume_2026.html",
]) {
  if (!sitemap.includes(loc)) fail(`sitemap.xml missing ${loc}`);
}

// 5. AI bots explicitly welcome (GEO transparency; * already allows, this documents it).
for (const bot of ["GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended"]) {
  if (!robots.includes(bot)) fail(`robots.txt missing ${bot}`);
}

console.log("generate:llms OK — canonical, products, resume files, sitemap and robots in sync.");
