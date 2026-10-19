import type { Resource } from "../data/resources";

const TILE_COLORS = [
  { bg: "#e7ede4", fg: "#2f4a33" },
  { bg: "#f3e7d8", fg: "#7a4a21" },
  { bg: "#e4e9f1", fg: "#2e4364" },
  { bg: "#f1e4e2", fg: "#7a3a32" },
  { bg: "#ebe6f1", fg: "#4a3a66" },
  { bg: "#e2eeea", fg: "#245045" },
];

function hash(value: string): number {
  let h = 0;
  for (let i = 0; i < value.length; i += 1) {
    h = (h * 31 + value.charCodeAt(i)) % 9973;
  }
  return h;
}

function initials(name: string): string {
  const words = name
    .replace(/[^A-Za-z0-9 ]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

export default function ResourceCard({ resource }: { resource: Resource }) {
  const color = TILE_COLORS[hash(resource.name) % TILE_COLORS.length];

  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${resource.name} — ${resource.description} (opens in a new tab)`}
      className="group relative flex h-full flex-col rounded-2xl border border-line bg-surface p-5 transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_24px_48px_-30px_rgba(23,21,15,0.5)] focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-2 focus-visible:ring-offset-paper sm:p-6"
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <span
          aria-hidden="true"
          className="grid h-11 w-11 shrink-0 place-items-center rounded-xl font-mono text-[13px] font-medium tracking-tight"
          style={{ backgroundColor: color.bg, color: color.fg }}
        >
          {initials(resource.name)}
        </span>
        <span className="rounded-full border border-line px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.14em] text-muted">
          {resource.tag}
        </span>
      </div>

      <h3 className="font-display text-[1.35rem] leading-[1.2] tracking-tight text-ink">
        {resource.name}
      </h3>

      <p className="mt-2 flex-1 text-[13.5px] leading-relaxed text-ink-soft">
        {resource.description}
      </p>

      <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
        <span className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-accent">
          Visit website
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            fill="none"
            className="h-3.5 w-3.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            <path
              d="M5 11 11 5M11 5H6M11 5v5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-muted/60">
          External
        </span>
      </div>
    </a>
  );
}
