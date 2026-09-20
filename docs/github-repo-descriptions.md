# GitHub Repo Presentation Plan — Madav-Verma

Goal (from Phase 4.2 of the portfolio rebuild plan): a recruiter scanning the public profile sees 6 real products, not `git_test`. Every description below is keyword-rich and ≤120 characters. Nothing here claims a metric, employer, or technology beyond what `src/data.js`, `PRODUCT.md`, and the verified GitHub audit support.

## Per-repo plan

| Repo | One-line description to set | Visibility | Why |
|---|---|---|---|
| `retail-jewellery-software` | Offline-first retail suite — billing, stock, HUID, PDF invoices, 20+ tests. Live: retailjewellery.netlify.app | **Keep public** | Live product verified HTTP 200; the strongest single proof on the profile. |
| `employee-attendance` | Camera QR/barcode gate check-in — offline-first, role tiers, Excel reports. Live: employeeattedance.netlify.app | **Keep public** | Live product verified HTTP 200; second strongest proof. |
| `Portfolio` | Applied AI engineer portfolio — Vite + React SPA. Live: portfolio-desibox.vercel.app | **Keep public** | The portfolio itself, live and verified; recruiters arrive here from the site. |
| `DesiBox` | Owner decision (2026-09-21): make private. No description is needed once private. | **Make private** | Its scope was never verifiable from the sanctioned sources, so keeping it public would leave an unexplained repo in the listing that a recruiter reads as abandoned. |
| `git_test` | Git sandbox (2024) — learning experiments, not product work. Keeping private. | **Make private** | Untouched since 2024; pure noise that a recruiter reads as "not maintained." Archive only if history must stay public. |
| `bhati-server-phase-2` | Phase-2 server code for the bhati project — legacy, not maintained. Keeping private. | **Make private** | Phase-labeled work that doesn't demonstrate the applied-AI positioning. Archive only if history must stay public. |
| `bhati-dashboard` | Dashboard UI for the bhati project — legacy, not maintained. Keeping private. | **Make private** | No published product or description behind it; keep the listing scannable. Archive only if history must stay public. |
| `Barcode-Badge-Scanner---Faridabad-Area` | Early badge/barcode scanner experiment; the maintained scanner is employee-attendance. | **Make private** | Prototype naming (raw name, location tag) signals unfinished work; the production scanner already lives in `employee-attendance`. Archive only if history must stay public. |
| `barcode-scanner-web` | Owner to confirm scope — likely related to the barcode work above; keep private unless it is real shipped product. | **Make private** | The bundle/link audit identified this as the 9th repo. What it ships is not verifiable from the sanctioned sources, so it gets the same rule: public only for real product work. |

## Notes

- **`DesiBox` → private (owner decision, 2026-09-21).** It carried no description and what it ships was never verifiable from the sanctioned sources, so it is not kept public. Once private it needs no description.
- **`DataFlow-Pro` is not public** — do not pin it, do not link it anywhere. When it is made public later, give it a description ("Real-time analytics platform — AI-orchestrated SQL pipelines, 15–20 hrs/month of reporting saved") and promote it into the top pin slots.
- **A 9th public repo is now identified.** The bundle/link audit enumerated `GET api.github.com/users/Madav-Verma/repos`: the 9 are `Portfolio`, `retail-jewellery-software`, `employee-attendance`, `DesiBox`, `bhati-server-phase-2`, `bhati-dashboard`, `Barcode-Badge-Scanner---Faridabad-Area`, `barcode-scanner-web`, `git_test`. `barcode-scanner-web` was the previously unnamed one; it gets the same rule (public only if real product work, else private) and needs the owner to confirm what it ships.

## Ranked pin order (6 pins)

1. `retail-jewellery-software` — live product first; one click from the profile lands on a working app.
2. `employee-attendance` — second live product, same reason.
3. `Portfolio` — the site recruiters leave the profile to visit; pins it back.
4. *(reserved)* `DataFlow-Pro` — promote here the day it becomes public (real BI numbers: 15–20 hrs/month saved).
5. *(reserved)* — leave empty.
6. *(reserved)* — leave empty.

Only **3 of 6 pins are fillable today, and that is the correct number.** The owner keeps the Prokon website and ERP internal (employer confidentiality — decision of 2026-09-21), and `DesiBox` goes private. GitHub shows only what is pinned, so leaving three slots empty is markedly cleaner than padding the grid with `git_test` or the `bhati` repos.

## Profile fields (Plan Task 4.2, Step 2)

- bio: "Applied AI Solutions Engineer — ships production software with agentic build loops."
- location: Faridabad, India
- blog: https://portfolio-desibox.vercel.app
- Pinned repos get a README with one screenshot and setup steps before pinning.