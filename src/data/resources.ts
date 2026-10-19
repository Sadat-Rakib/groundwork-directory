export type SectionId = "startup" | "freelance";

export interface Resource {
  /** Display name of the platform */
  name: string;
  /** One or two lines, written from the audited page itself */
  description: string;
  /** Primary section of the directory */
  section: SectionId;
  /** Filter chip */
  tag: string;
  /** Verified, canonical destination */
  url: string;
}

export const SECTIONS: { id: SectionId; label: string; short: string }[] = [
  {
    id: "startup",
    label: "Startup Jobs & Discovery",
    short: "Startup jobs",
  },
  {
    id: "freelance",
    label: "Freelance, AI Tasks & Generalist Work",
    short: "Freelance & AI work",
  },
];

export const TAGS: Record<SectionId, string[]> = {
  startup: ["Job board", "VC portfolio", "Discovery", "Community"],
  freelance: ["AI training", "Paid research", "Freelance services", "Microtasks"],
};

export const RESOURCES: Resource[] = [
  // ---------------------------------------------------------------- startup
  {
    name: "Y Combinator Jobs",
    description:
      "Roles at 1,000+ YC-backed startups, from first engineering hires to growth positions. Curated by Y Combinator.",
    section: "startup",
    tag: "Job board",
    url: "https://www.ycombinator.com/jobs",
  },
  {
    name: "Y Combinator Startup Directory",
    description:
      "Every company YC has funded, filterable by industry, batch and team size — the fastest way to find early-stage startups by sector.",
    section: "startup",
    tag: "Discovery",
    url: "https://www.ycombinator.com/companies",
  },
  {
    name: "Wellfound",
    description:
      "Startup-first job marketplace where founders post roles directly, with salary and equity shown on the listing.",
    section: "startup",
    tag: "Job board",
    url: "https://wellfound.com",
  },
  {
    name: "Sequoia Capital Jobs",
    description:
      "Open roles across Sequoia's portfolio companies, searchable by skill, location and company stage.",
    section: "startup",
    tag: "VC portfolio",
    url: "https://jobs.sequoiacap.com/jobs",
  },
  {
    name: "a16z Jobs",
    description:
      "Roles across 690+ a16z portfolio companies — 18,000+ openings with role, location and stage filters.",
    section: "startup",
    tag: "VC portfolio",
    url: "https://jobs.a16z.com",
  },
  {
    name: "General Catalyst Jobs",
    description:
      "Portfolio job board spanning seed-stage startups through growth companies across the General Catalyst network.",
    section: "startup",
    tag: "VC portfolio",
    url: "https://jobs.generalcatalyst.com/jobs",
  },
  {
    name: "Creandum Jobs",
    description:
      "European early-stage VC job board with on-site and remote filters across the Creandum network.",
    section: "startup",
    tag: "VC portfolio",
    url: "https://careers.creandum.com/jobs",
  },
  {
    name: "Startup Jobs",
    description:
      "Startup-focused board heavy on founding-engineer and early-team roles, with remote and location filters.",
    section: "startup",
    tag: "Job board",
    url: "https://startup.jobs",
  },
  {
    name: "VentureLoop",
    description:
      "Venture-backed job board indexing 60,000+ roles at VC-funded companies, with company profiles and hot-company lists.",
    section: "startup",
    tag: "Job board",
    url: "https://ventureloop.com/jobs",
  },
  {
    name: "The Hub",
    description:
      "Nordic startup job board connecting talent with early-stage companies in Denmark, Finland, Iceland, Norway, Sweden and remote.",
    section: "startup",
    tag: "Job board",
    url: "https://thehub.io",
  },
  {
    name: "NextDoor.Company",
    description:
      "Map-based directory of 500+ startups hiring nearby, with live openings, funding details and remote/hybrid filters.",
    section: "startup",
    tag: "Job board",
    url: "https://nextdoor.company",
  },
  {
    name: "Startup CPG",
    description:
      "Free Slack community of 40,000+ consumer-goods founders and operators, plus shared resources, databases and industry opportunities.",
    section: "startup",
    tag: "Community",
    url: "https://startupcpg.com/join/",
  },

  // -------------------------------------------------------------- freelance
  {
    name: "Alignerr",
    description:
      "Labelbox's expert marketplace: get paid hourly to train and evaluate AI models in your field. $80/hr average advertised.",
    section: "freelance",
    tag: "AI training",
    url: "https://www.alignerr.com",
  },
  {
    name: "Appen",
    description:
      "Long-running crowd and expert platform for AI data collection, annotation and model-evaluation projects.",
    section: "freelance",
    tag: "AI training",
    url: "https://www.appen.com",
  },
  {
    name: "CrowdGen",
    description:
      "Appen's expert contributor platform for frontier-AI projects, with rates up to $100+/hr depending on domain.",
    section: "freelance",
    tag: "AI training",
    url: "https://crowdgen.com",
  },
  {
    name: "Mercor",
    description:
      "Expert network supplying AI labs with professionals for evaluations, benchmarks and agent training.",
    section: "freelance",
    tag: "AI training",
    url: "https://mercor.com",
  },
  {
    name: "Micro1",
    description:
      "AI data lab recruiting domain experts for model training, evaluations and real-world RL environments.",
    section: "freelance",
    tag: "AI training",
    url: "https://www.micro1.ai",
  },
  {
    name: "Mindrift",
    description:
      "Project-based AI training work from Toloka: $15–$30/hr entry level, $60–$100+/hr for domain experts.",
    section: "freelance",
    tag: "AI training",
    url: "https://mindrift.ai",
  },
  {
    name: "Outlier",
    description:
      "Freelance AI-training platform with flexible hours and no prior AI experience required.",
    section: "freelance",
    tag: "AI training",
    url: "https://outlier.ai",
  },
  {
    name: "Toloka",
    description:
      "Crowd platform for AI training data, annotation and evaluation tasks across dozens of languages.",
    section: "freelance",
    tag: "AI training",
    url: "https://toloka.ai",
  },
  {
    name: "Turing",
    description:
      "Developer and expert network placing technologists on AI projects and frontier-lab data work.",
    section: "freelance",
    tag: "AI training",
    url: "https://www.turing.com",
  },
  {
    name: "Handshake",
    description:
      "Career network for students and graduates, plus Handshake AI expert projects that pay for domain knowledge.",
    section: "freelance",
    tag: "AI training",
    url: "https://joinhandshake.com",
  },
  {
    name: "AlignList",
    description:
      "Curated board of 1,000+ AI-training roles from top labs and data companies — RLHF, labeling and prompt work.",
    section: "freelance",
    tag: "AI training",
    url: "https://alignlist.com/jobs",
  },
  {
    name: "Prolific",
    description:
      "Get paid to take part in research and AI studies run by universities and product teams.",
    section: "freelance",
    tag: "Paid research",
    url: "https://www.prolific.com",
  },
  {
    name: "User Interviews",
    description:
      "Marketplace for paid user-research studies: interviews, usability tests and surveys.",
    section: "freelance",
    tag: "Paid research",
    url: "https://www.userinterviews.com",
  },
  {
    name: "Terac",
    description:
      "Expert network paying professionals for research interviews and AI-training projects; 160,000+ experts registered.",
    section: "freelance",
    tag: "Paid research",
    url: "https://terac.com",
  },
  {
    name: "VISASQ / Coleman",
    description:
      "Expert network paying professionals for one-on-one consultations and expert surveys.",
    section: "freelance",
    tag: "Paid research",
    url: "https://www.colemanrg.com",
  },
  {
    name: "Wynter",
    description:
      "B2B research panel that pays verified professionals for surveys and message tests.",
    section: "freelance",
    tag: "Paid research",
    url: "https://wynter.com",
  },
  {
    name: "Rev",
    description:
      "Freelance transcription, captioning and legal transcription work with self-scheduled assignments.",
    section: "freelance",
    tag: "Freelance services",
    url: "https://www.rev.com/freelancers",
  },
  {
    name: "Studypool",
    description:
      "Tutoring marketplace where you answer student questions on your schedule and set your own rates.",
    section: "freelance",
    tag: "Freelance services",
    url: "https://www.studypool.com",
  },
  {
    name: "OneForma",
    description:
      "Paid remote and in-person projects in annotation, translation, transcription and research, open worldwide.",
    section: "freelance",
    tag: "Freelance services",
    url: "https://www.oneforma.com",
  },
  {
    name: "Cloudworkers",
    description:
      "Remote chat moderator roles with flexible, part-time shifts and multilingual openings.",
    section: "freelance",
    tag: "Freelance services",
    url: "https://www.cloudworkers.company",
  },
  {
    name: "Clickworker",
    description:
      "Self-serve microtask platform: short surveys, tagging, data collection and writing jobs paid per task.",
    section: "freelance",
    tag: "Microtasks",
    url: "https://www.clickworker.com",
  },
];

export const TOTAL_SOURCES_AUDITED = 63;
export const TOTAL_EXCLUDED = TOTAL_SOURCES_AUDITED - RESOURCES.length;
export const VERIFIED_ON = "18 October 2026";
