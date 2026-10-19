# Groundwork — Startup & Freelance Resource Directory

A hand-checked directory of **33 curated resources** for finding startup work and flexible, expert-driven gigs. Every link was visited, verified and rejected if it didn’t offer a real path to work or real startup discovery.

- **33 included** — startup job boards, VC portfolio boards, freelance/AI-training platforms, paid research panels and startup communities.
- **30 excluded** — generic corporate job boards, dead links, parked domains, and enterprise vendors with employee-only careers pages.
- **63 sources audited in total** — see [`SOURCE_AUDIT.md`](SOURCE_AUDIT.md) for every decision and reasoning.

**Live site:** [groundwork-directory.vercel.app](https://groundwork-directory.vercel.app)  
**Audit:** [groundwork-directory.vercel.app/SOURCE_AUDIT.md](https://groundwork-directory.vercel.app/SOURCE_AUDIT.md)

---

## What's inside

- **Startup Jobs & Discovery** (12 resources) — YC Jobs, Sequoia/a16z/GC portfolio boards, Wellfound, VentureLoop, The Hub, NextDoor.Company, Startup CPG, and more.
- **Freelance, AI Tasks & Generalist Work** (21 resources) — AI training (Alignerr, Mindrift, Outlier, Toloka), paid research (Prolific, Terac, Wynter), freelance services (Rev, Studypool, OneForma), and microtasks (Clickworker).

Every card includes:
- Verified, working external link
- Accurate one-line description from the actual page
- Tag and category

---

## Tech stack

- React + TypeScript + Vite
- Tailwind CSS
- Playwright (e2e tests for search, filters, links, mobile)

---

## Develop

```bash
npm install
npm run dev        # localhost:5173
npm run build      # production build
npm run test:e2e   # Playwright tests
```

> **Note:** If your project folder path contains `&`, `npm run` may fail on Windows because of shell escaping. Use `node node_modules/vite/bin/vite.js` and `node node_modules/@playwright/test/cli.js` directly instead.

---

## Audit methodology

1. Every candidate URL was fetched (HTTP status, redirects, page title, meta description and visible text).
2. Relevant subpages (jobs, /freelancers, /experts, /apply) were inspected.
3. Cloudflare-protected or JS-rendered pages were re-checked with a rendering-aware fetch.
4. Sources were kept only if they provided a real, individual path to work or startup discovery.

---

## License

MIT — feel free to fork and curate your own list.
