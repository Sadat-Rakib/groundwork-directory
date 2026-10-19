# Source Audit — Startup & Freelance Resource Directory

**Verification date:** 2026-10-18 (MDT) / 2026-10-19 (UTC)
**Sources in original list:** 63
**Included:** 33
**Excluded:** 30

## Method

Every one of the 63 URLs was fetched directly (HTTP status, redirect target, page title, meta
description and rendered body text captured). Where the homepage was ambiguous, the relevant
jobs / contributor / expert subpage was inspected. Cloudflare-protected and JS-rendered sites
(AlphaSights, Startup Jobs, Neo, Ivy Exec) were re-checked with a rendering-aware fetch.

Decision rules applied:

- **Keep** only sources that give an individual a real path to work or a real path to discover
  startups: freelance/AI-training/annotation/paid-research/microtask platforms, or startup job
  boards and VC portfolio job boards with live roles.
- **Remove** generic corporate job boards, ordinary company directories, recruitment agencies
  serving established companies, remote boards with no startup focus, dead or parked domains,
  and enterprise vendors whose only public entry point is an employee careers page.
- Descriptions on the website are written only from what was actually observed on the page.
- No verification result below is invented; blocked or unreachable pages are recorded as such.

## A. Generalist / Freelance / AI Tasks (32)

| # | Source | Decision | Reason | Checked URL |
|---|--------|----------|--------|-------------|
| 1 | Alignerr | **Keep** | Live AI-training marketplace ("Where experts get paid to train AI"), $80/hr average advertised, open application. | https://www.alignerr.com |
| 2 | AlphaSights | Remove | Client-facing expert network. No public expert application flow verified: `/become-an-expert/` → 404, `/experts/` → 403 (Cloudflare). | https://www.alphasights.com |
| 3 | Appen | **Keep** | Crowd + expert AI data platform with contributor signup; long-running, global. | https://www.appen.com |
| 4 | Clickworker | **Keep** | Self-serve microtask platform (surveys, tagging, data collection); worker registration open. | https://www.clickworker.com |
| 5 | CloudFactory | Remove | B2B data-services vendor. `/careers` is employee hiring; no open contributor marketplace. | https://www.cloudfactory.com/careers |
| 6 | Cloudworkers | **Keep** | Actively recruiting remote chat moderators with a public application form. | https://www.cloudworkers.company/apply |
| 7 | CrowdGen | **Keep** | Appen's expert contributor platform; open "Join now" flow, rates up to $100+/hr. | https://crowdgen.com |
| 8 | DATAmundi | Remove | B2B multilingual data vendor; `/careers/` is internal employment, no contributor signup. | https://datamundi.ai/careers/ |
| 9 | Handshake | **Keep** | Career network with a live Handshake AI expert track plus entry-level/internship roles. | https://joinhandshake.com |
| 10 | Innodata | Remove | Enterprise data/AI vendor; `/careers/` redirects to employee careers site only. | https://innodatacareers.com/ |
| 11 | Ivy Exec | Remove | B2B expert-recruitment agency; site is client-facing, expert participation is drawn from an existing member base (panel page is a JS shell). | https://ivyexec.com/expert-network/ |
| 12 | Lionbridge | Remove | Enterprise localization vendor; careers portal lists employee jobs, no self-serve freelancer onboarding verified. | https://careers.lionbridge.com/ |
| 13 | Mercor | **Keep** | Active expert network for AI labs; "Find work" / join-network flow. | https://www.mercor.com |
| 14 | Meridial | Remove | Parked domain — "Buy this domain", no product. | https://meridial.com |
| 15 | Micro1 | **Keep** | AI data lab recruiting domain experts for training, evals and RL environments. | https://www.micro1.ai |
| 16 | Mindrift | **Keep** | Freelance AI-training platform (built by Toloka), $15–$100+/hr, open application. | https://mindrift.ai |
| 17 | OneForma | **Keep** | Paid remote/in-person projects in annotation, translation, transcription, research; open signup. | https://www.oneforma.com |
| 18 | Outlier | **Keep** | Large freelance AI-trainer platform with open opportunities board. | https://outlier.ai |
| 19 | Prolific | **Keep** | Paid participation platform for research and AI studies. | https://www.prolific.com |
| 20 | Rev | **Keep** | Live freelance application page for transcript, caption and legal work. | https://www.rev.com/freelancers |
| 21 | RWS | Remove | Enterprise localization/AI vendor; `/careers/` is employee recruitment only. | https://www.rws.com/about/careers/ |
| 22 | SME Careers | Remove | Dead page — 114-byte response with no title or content. | https://smecareers.com |
| 23 | Studypool | **Keep** | Active tutoring marketplace; tutors answer questions and set their own rates. (First fetch returned a transient 502; re-check returned 200.) | https://www.studypool.com |
| 24 | Terac | **Keep** | Expert network paying professionals for research interviews and AI projects; 160k+ experts. | https://terac.com |
| 25 | Toloka | **Keep** | Established crowd/AI-data platform with task marketplace. | https://toloka.ai |
| 26 | TransPerfect | Remove | Enterprise language-services vendor; public careers page only, no freelancer signup verified. | https://www.transperfect.com/careers/ |
| 27 | Turing | **Keep** | Developer/expert network with open "Join expert network" path and AI data work. | https://www.turing.com |
| 28 | User Interviews | **Keep** | Paid research-study marketplace with participant signup. | https://www.userinterviews.com |
| 29 | VISASQ / Coleman | **Keep** | Expert network paying professionals for 1-on-1 consultations and surveys; expert app available. | https://www.colemanrg.com |
| 30 | Welocalize | Remove | Enterprise localization vendor; `/careers/` 404 and no verified freelance onboarding route. | https://www.welocalize.com |
| 31 | Wynter | **Keep** | B2B research panel paying verified professionals for surveys and message tests. | https://wynter.com |
| 32 | xAI | Remove | Single company's corporate site/careers — not a marketplace or directory. | https://x.ai |

## B. Startup-Focused Sources (19)

| # | Source | Decision | Reason | Checked URL |
|---|--------|----------|--------|-------------|
| 1 | Y Combinator Directory | **Keep** | Full directory of YC-funded companies, filterable by industry/batch — strong startup discovery. | https://www.ycombinator.com/companies |
| 2 | Y Combinator Jobs | **Keep** | Live startup job board across 1,000+ YC companies. | https://www.ycombinator.com/jobs |
| 3 | Sequoia Capital | **Keep** | Live portfolio job board with role, location and company-stage filters. | https://jobs.sequoiacap.com/jobs |
| 4 | a16z | **Keep** | Live portfolio board — "690 companies. 18,560 jobs." | https://jobs.a16z.com |
| 5 | General Catalyst | **Keep** | Live portfolio job board covering seed-stage through growth companies. | https://jobs.generalcatalyst.com/jobs |
| 6 | Creandum | **Keep** | European early-stage VC job board with on-site/remote filters. | https://careers.creandum.com/jobs |
| 7 | Neo | Remove | `/startups` redirects to a portfolio marketing page; `/jobs` redirects to homepage. No job board. | https://neo.com/startups |
| 8 | Pear VC | Remove | Portfolio directory only; `/jobs/` and `/talent/` both 404. No roles listed. | https://pear.vc/companies/ |
| 9 | Wellfound | **Keep** | Startup-native job marketplace; companies post roles directly. | https://wellfound.com |
| 10 | Startup Jobs | **Keep** | Active startup board (founding-engineer and early-team roles visible on homepage). | https://startup.jobs |
| 11 | VentureLoop | **Keep** | Venture-backed job board, 63,055 roles indexed at time of check. | https://ventureloop.com/jobs |
| 12 | The Hub | **Keep** | Nordic startup job board with country and remote filters. | https://thehub.io |
| 13 | StartupBlink | Remove | Ecosystem ranking/research product for governments; not a jobs or startup-hiring resource. | https://www.startupblink.com |
| 14 | Startups Map | Remove | Thin directory (70 startups mapped) with no meaningful live job inventory. | https://startupsmap.co.in |
| 15 | Built In SF | Remove | General regional tech job board covering large enterprises, not startup-specific. | https://www.builtinsf.com |
| 16 | NextDoor.Company | **Keep** | Map-based startup hiring directory: 500+ startups, 1,200+ live openings, work-mode filters. | https://nextdoor.company |
| 17 | Cutshort | Remove | General tech hiring platform serving enterprises (Infosys, Flipkart, Uber); not startup-focused. | https://cutshort.io |
| 18 | Uplers | Remove | Recruitment agency placing Indian engineers with companies; not a startup discovery resource. | https://www.uplers.com |
| 19 | Crunchboard | Remove | Domain does not resolve (connection failure, HTTP 000); TechCrunch's `/jobs/` also 404. | https://crunchboard.com |

## C. Remote / Additional Job Sources (10)

| # | Source | Decision | Reason | Checked URL |
|---|--------|----------|--------|-------------|
| 1 | Remote OK | Remove | General remote board; no meaningful startup focus. | https://remoteok.com |
| 2 | We Work Remotely | Remove | General remote board; no meaningful startup focus. | https://weworkremotely.com |
| 3 | Remotejobify | Remove | General remote-by-country aggregator; no startup focus. | https://remotejobify.app/remote-jobs/ |
| 4 | AlignList | **Keep** | Curated AI-training job board — "1,000 open positions from top AI training companies" (RLHF, labeling, prompt work). | https://alignlist.com/jobs |
| 5 | RemoteInTech | Remove | GitHub list of remote-friendly companies; general remote directory, no startup focus. | https://github.com/remoteintech/remote-jobs |
| 6 | Awesome Remote Job | Remove | General remote-work link list; no startup focus, no live roles. | https://github.com/lukasz-madon/awesome-remote-job |
| 7 | Remote Jobs Brazil | Remove | Regional remote company list; no startup focus. | https://github.com/lerrua/remote-jobs-brazil |
| 8 | SimplifyJobs | Remove | New-grad positions repo across large tech employers; not startup-specific. | https://github.com/SimplifyJobs/New-Grad-Positions |
| 9 | JobList | Remove | Meta-list of remote job sites; duplicate of other entries, no direct opportunities. | https://github.com/rogerluan/JobList |
| 10 | The Consensus | Remove | Site down — Cloudflare 521, origin unreachable. | https://theconsensus.dev |

## D. Startup Communities (2)

| # | Source | Decision | Reason | Checked URL |
|---|--------|----------|--------|-------------|
| 1 | Startup CPG | **Keep** | Active free community of 40,000+ CPG founders/operators with resources, databases and industry opportunities — genuine startup discovery. | https://startupcpg.com/join/ |
| 2 | InnovatorsRoom | Remove | Site replaced with "The new InnovatorsRoom is coming soon"; no jobs available. | https://www.innovatorsroom.com/techjobs |

## Excluded — grouped reasons

- **Dead / parked / unreachable (5):** Meridial, SME Careers, Crunchboard, The Consensus, InnovatorsRoom.
- **Enterprise vendor with employee careers only (7):** CloudFactory, DATAmundi, Innodata, Lionbridge, RWS, TransPerfect, Welocalize.
- **Corporate / general job board, not startup-specific (6):** Built In SF, Cutshort, Remote OK, We Work Remotely, Remotejobify, SimplifyJobs.
- **Recruitment agency or client-side network (4):** AlphaSights, Ivy Exec, Uplers, xAI (single-company careers).
- **Directory/meta list without live roles (6):** StartupBlink, Startups Map, Neo, Pear VC, RemoteInTech, Awesome Remote Job, Remote Jobs Brazil, JobList.

## Notes

- Two entries were **retained with a corrected/verified URL**: Rev (`/freelancers`, verified 200) and
  Terac (`terac.com`, the canonical target of `terac.ai`).
- `www.nextdoor.company` redirects to `nextdoor.company`; the canonical URL is used on the site.
- Studypool returned a transient Cloudflare 502 on first request and 200 on re-check, so it is kept.
- All 33 included links were re-tested programmatically after the build; results are in
  `audit/link-check.txt`.
