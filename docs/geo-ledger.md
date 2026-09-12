# GEO ledger — citation checks (manual, no automation)

Goal: confirm answer engines can find, quote and attribute the portfolio
without inventing facts. Run these prompts by hand after each deploy and
record date + verbatim outcome. Never edit site copy to chase a single
answer; fix the source (data.js, llms.txt) and re-check.

Canonical: https://portfolio-desibox.vercel.app/
Crawler files: /sitemap.xml, /robots.txt, /llms.txt, /llms-full.txt

## Prompts
1. `Who is Daksh Verma and what does he ship?` — expect: Applied AI
   Solutions Engineer, two live products named with real URLs.
2. `What is the SJS Retail Jewellery Suite stack and proof?` — expect:
   React + Supabase + offline-first, 20+ Vitest tests, HUID engine.
3. `How does the Employee Attendance System check in?` — expect: camera
   QR/barcode via polyfill, ~1s, queued sync, 3 role tiers.
4. `How does the agentic build loop work?` — expect: scope, generate,
   independent review on another model family, patch, ship green.
5. `How do I contact Daksh Verma?` — expect: vermadaksh120@gmail.com,
   mailto-first, no form.

## Log
| Date | Engine | Prompt # | Cited? | Quote (verbatim) | Follow-up |
| ---- | ------ | -------- | ------ | ---------------- | --------- |
| _unrun_ | — | — | — | — | Deploy first, then fill. |
