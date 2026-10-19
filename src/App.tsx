import { useEffect, useMemo, useRef, useState } from "react";
import ResourceCard from "./components/ResourceCard";
import {
  RESOURCES,
  SECTIONS,
  TAGS,
  TOTAL_EXCLUDED,
  TOTAL_SOURCES_AUDITED,
  VERIFIED_ON,
  type SectionId,
} from "./data/resources";

type Filter = "all" | SectionId;

const REPO_URL = "https://github.com/Sadat-Rakib/groundwork-directory";

export default function App() {
  const [activeSection, setActiveSection] = useState<Filter>("all");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  const sectionCounts = useMemo(
    () => ({
      startup: RESOURCES.filter((r) => r.section === "startup").length,
      freelance: RESOURCES.filter((r) => r.section === "freelance").length,
    }),
    [],
  );

  const availableTags =
    activeSection === "all" ? [...TAGS.startup, ...TAGS.freelance] : TAGS[activeSection];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return RESOURCES.filter((resource) => {
      if (activeSection !== "all" && resource.section !== activeSection) return false;
      if (activeTag && resource.tag !== activeTag) return false;
      if (!q) return true;
      const sectionLabel =
        SECTIONS.find((section) => section.id === resource.section)?.label ?? "";
      return `${resource.name} ${resource.description} ${resource.tag} ${sectionLabel}`
        .toLowerCase()
        .includes(q);
    });
  }, [activeSection, activeTag, query]);

  const groups = useMemo(() => {
    const sections =
      activeSection === "all"
        ? SECTIONS
        : SECTIONS.filter((section) => section.id === activeSection);
    return sections
      .map((section) => ({
        ...section,
        items: filtered.filter((resource) => resource.section === section.id),
      }))
      .filter((group) => group.items.length > 0);
  }, [activeSection, filtered]);

  const isFiltered = query.trim() !== "" || activeTag !== null || activeSection !== "all";

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      const isTyping =
        !!target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable);

      if (event.key === "/" && !isTyping) {
        event.preventDefault();
        searchRef.current?.focus();
      }
      if (event.key === "Escape" && (isTyping || query !== "")) {
        setQuery("");
        searchRef.current?.blur();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [query]);

  function changeSection(next: Filter) {
    setActiveSection(next);
    if (activeTag) {
      const allowed = next === "all" ? [...TAGS.startup, ...TAGS.freelance] : TAGS[next];
      if (!allowed.includes(activeTag)) setActiveTag(null);
    }
  }

  function jumpTo(section: SectionId) {
    setActiveSection("all");
    setActiveTag(null);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  function resetAll() {
    setQuery("");
    setActiveTag(null);
    setActiveSection("all");
    searchRef.current?.focus();
  }

  return (
    <div id="top" className="min-h-screen">
      <a
        href="#directory"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
      >
        Skip to the directory
      </a>

      {/* ------------------------------------------------------------- header */}
      <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-5 sm:px-8">
          <a href="#top" className="flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className="grid h-8 w-8 place-items-center rounded-lg bg-ink font-display text-[17px] leading-none text-paper"
            >
              G
            </span>
            <span className="font-display text-[1.3rem] tracking-tight">Groundwork</span>
          </a>

          <nav aria-label="Sections" className="hidden items-center gap-7 md:flex">
            <button
              type="button"
              onClick={() => jumpTo("startup")}
              className="text-[13px] text-ink-soft transition-colors hover:text-ink"
            >
              Startup jobs
            </button>
            <button
              type="button"
              onClick={() => jumpTo("freelance")}
              className="text-[13px] text-ink-soft transition-colors hover:text-ink"
            >
              Freelance &amp; AI
            </button>
            <span className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
              {RESOURCES.length} resources
            </span>
          </nav>

          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted md:hidden">
            {RESOURCES.length} resources
          </span>
        </div>
      </header>

      {/* --------------------------------------------------------------- hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-40 h-[420px] w-[420px] rounded-full bg-accent-soft/70 blur-3xl"
        />

        <div className="relative mx-auto max-w-[1180px] px-5 pb-12 pt-14 sm:px-8 sm:pb-16 sm:pt-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/90 px-3 py-1 font-mono text-[9.5px] uppercase tracking-[0.18em] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {TOTAL_SOURCES_AUDITED} sources audited · {RESOURCES.length} kept
          </div>

          <h1 className="mt-6 max-w-[15ch] font-display text-[2.6rem] font-normal leading-[0.98] tracking-[-0.03em] text-ink sm:text-[3.6rem] lg:text-[4.4rem]">
            Good places to find startup work.
          </h1>

          <p className="mt-5 max-w-[54ch] text-[15px] leading-relaxed text-ink-soft sm:text-base">
            Startup job boards, VC portfolio boards, and platforms that pay for freelance,
            AI-training and research work. Every link checked by hand — nothing dead, nothing
            generic.
          </p>

          <div className="mt-9 max-w-2xl">
            <label htmlFor="search" className="sr-only">
              Search resources by platform name, category or description
            </label>
            <div className="relative">
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="none"
                className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-muted"
              >
                <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="m13.5 13.5 3 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <input
                id="search"
                ref={searchRef}
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by platform, category or description…"
                autoComplete="off"
                className="h-14 w-full rounded-xl border border-line bg-surface pl-12 pr-14 text-[15px] text-ink shadow-[0_1px_2px_rgba(23,21,15,0.04)] outline-none transition placeholder:text-muted/70 focus:border-accent/40 focus:ring-4 focus:ring-accent/10 [&::-webkit-search-cancel-button]:hidden"
              />
              <kbd
                aria-hidden="true"
                className="pointer-events-none absolute right-3 top-1/2 hidden h-7 w-7 -translate-y-1/2 place-items-center rounded-md border border-line bg-paper font-mono text-[11px] text-muted sm:grid"
              >
                /
              </kbd>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
              <span>Last verified {VERIFIED_ON}</span>
              <span aria-hidden="true" className="text-line-strong">
                /
              </span>
              <span>No accounts</span>
              <span aria-hidden="true" className="text-line-strong">
                /
              </span>
              <span>No scraping</span>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ filters */}
      <div className="sticky top-16 z-30 border-b border-line bg-paper/90 backdrop-blur-md">
        <div className="mx-auto max-w-[1180px] px-5 py-3 sm:px-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div
              role="group"
              aria-label="Filter by section"
              className="no-scrollbar -mx-1 flex max-w-full gap-1 overflow-x-auto rounded-full border border-line bg-surface p-1"
            >
              <FilterTab
                active={activeSection === "all"}
                onClick={() => changeSection("all")}
                label="All"
                count={RESOURCES.length}
              />
              <FilterTab
                active={activeSection === "startup"}
                onClick={() => changeSection("startup")}
                label="Startup jobs"
                count={sectionCounts.startup}
              />
              <FilterTab
                active={activeSection === "freelance"}
                onClick={() => changeSection("freelance")}
                label="Freelance & AI"
                count={sectionCounts.freelance}
              />
            </div>

            <div className="no-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 lg:justify-end">
              {availableTags.map((tag) => {
                const active = activeTag === tag;
                return (
                  <button
                    key={tag}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setActiveTag(active ? null : tag)}
                    className={`shrink-0 rounded-full border px-3 py-1.5 text-[12px] transition-colors ${
                      active
                        ? "border-accent/30 bg-accent-soft font-medium text-accent"
                        : "border-line bg-transparent text-ink-soft hover:border-line-strong hover:text-ink"
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------ results */}
      <main id="directory" className="mx-auto max-w-[1180px] px-5 py-10 sm:px-8 sm:py-14">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <p aria-live="polite" className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">
            {isFiltered
              ? `Showing ${filtered.length} of ${RESOURCES.length} resources`
              : `${RESOURCES.length} resources · ${sectionCounts.startup} startup · ${sectionCounts.freelance} flexible`}
          </p>
          {isFiltered && (
            <button
              type="button"
              onClick={resetAll}
              className="text-[12px] text-ink-soft underline decoration-line-strong underline-offset-4 transition-colors hover:text-ink"
            >
              Clear filters
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-line-strong bg-surface/60 px-6 py-16 text-center">
            <p className="font-display text-2xl tracking-tight">Nothing matches that.</p>
            <p className="mx-auto mt-2 max-w-[42ch] text-sm text-ink-soft">
              Try a broader term — “AI”, “research”, “portfolio”, or a platform name.
            </p>
            <button
              type="button"
              onClick={resetAll}
              className="mt-6 rounded-full bg-ink px-5 py-2.5 text-[13px] font-medium text-paper transition-opacity hover:opacity-85"
            >
              Reset the directory
            </button>
          </div>
        ) : (
          <div className="space-y-14 sm:space-y-16">
            {groups.map((group, index) => (
              <section
                key={group.id}
                id={group.id}
                aria-labelledby={`${group.id}-heading`}
                className="scroll-mt-32"
              >
                <div className="mb-6 flex items-end justify-between gap-4 border-b border-line pb-3">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[10px] text-muted/70" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2
                      id={`${group.id}-heading`}
                      className="font-display text-[1.6rem] leading-none tracking-tight sm:text-[1.9rem]"
                    >
                      {group.label}
                    </h2>
                  </div>
                  <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                    {group.items.length} {group.items.length === 1 ? "resource" : "resources"}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
                  {group.items.map((resource) => (
                    <ResourceCard key={resource.name} resource={resource} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </main>

      {/* ------------------------------------------------------------- footer */}
      <footer className="border-t border-line bg-paper-deep/50">
        <div className="mx-auto max-w-[1180px] px-5 py-12 sm:px-8 sm:py-16">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className="grid h-8 w-8 place-items-center rounded-lg bg-ink font-display text-[17px] leading-none text-paper"
                >
                  G
                </span>
                <span className="font-display text-[1.3rem] tracking-tight">Groundwork</span>
              </div>
              <p className="mt-4 max-w-[38ch] text-[13.5px] leading-relaxed text-ink-soft">
                A curated link directory for people who want to work with startups — or work
                flexibly, on their own terms. No accounts, no job scraping, no noise.
              </p>
            </div>

            <div>
              <h2 className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-muted">
                The list
              </h2>
              <ul className="mt-4 space-y-2.5 text-[13px]">
                <li>
                  <button
                    type="button"
                    onClick={() => jumpTo("startup")}
                    className="text-ink-soft transition-colors hover:text-ink"
                  >
                    Startup jobs &amp; discovery
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => jumpTo("freelance")}
                    className="text-ink-soft transition-colors hover:text-ink"
                  >
                    Freelance, AI tasks &amp; generalist work
                  </button>
                </li>
                <li>
                  <a
                    href="/SOURCE_AUDIT.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-soft transition-colors hover:text-ink"
                  >
                    Full source audit
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-muted">
                The audit
              </h2>
              <dl className="mt-4 space-y-2.5 text-[13px]">
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-soft">Reviewed</dt>
                  <dd className="font-mono text-[12px]">{TOTAL_SOURCES_AUDITED}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-soft">Excluded</dt>
                  <dd className="font-mono text-[12px]">{TOTAL_EXCLUDED}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-soft">Verified</dt>
                  <dd className="font-mono text-[12px]">{VERIFIED_ON}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 text-[11.5px] text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>Every external link opens in a new tab. Descriptions reflect the audited page.</p>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-ink"
            >
              Source on GitHub
              <svg aria-hidden="true" viewBox="0 0 16 16" fill="none" className="h-3 w-3">
                <path
                  d="M5 11 11 5M11 5H6M11 5v5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FilterTab({
  active,
  onClick,
  label,
  count,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  count: number;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[12.5px] transition-colors ${
        active ? "bg-ink font-medium text-paper" : "text-ink-soft hover:bg-paper hover:text-ink"
      }`}
    >
      {label}
      <span
        className={`font-mono text-[10px] ${active ? "text-paper/60" : "text-muted"}`}
        aria-hidden="true"
      >
        {count}
      </span>
    </button>
  );
}
