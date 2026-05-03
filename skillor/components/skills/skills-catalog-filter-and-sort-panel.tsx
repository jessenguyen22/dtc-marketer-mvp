"use client";

// Client island for /skills catalog: search box + sort dropdown + tag filter chips.
// Receives the full skill list from the server page (already loaded + sorted),
// applies user filters in-memory, renders the grid.

import { useMemo, useState } from "react";
import { SkillCatalogCard } from "./skill-catalog-card";

// Local type — we cannot import from skills-catalog-loader.ts in a client
// component because that module touches `node:fs`. Server passes plain JSON.
type Skill = {
  slug: string;
  name: string;
  description: string;
  dtcUseCase: string;
  priorityScore: number;
  version: string;
  license: string;
  brandBrainFields: string[];
  body: string;
};

// Local Skill type (no fs imports). The server passes JSON-serialized skills.

type SortKey = "priority" | "name-asc" | "name-desc";

const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: "priority", label: "PRIORITY ↓" },
  { value: "name-asc", label: "NAME A→Z" },
  { value: "name-desc", label: "NAME Z→A" },
];

export function SkillsCatalogFilterAndSortPanel({
  skills,
}: {
  skills: readonly Skill[];
}) {
  const [query, setQuery] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("priority");
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    skills.forEach((s) => s.brandBrainFields.forEach((t) => tags.add(t)));
    return [...tags].sort();
  }, [skills]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    let list = skills.filter((s) => {
      if (q) {
        const hay = `${s.name} ${s.description} ${s.dtcUseCase}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (activeTags.size > 0) {
        const hasAll = [...activeTags].every((t) =>
          s.brandBrainFields.includes(t),
        );
        if (!hasAll) return false;
      }
      return true;
    });

    list = [...list];
    if (sortKey === "priority") {
      list.sort((a, b) => b.priorityScore - a.priorityScore);
    } else if (sortKey === "name-asc") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      list.sort((a, b) => b.name.localeCompare(a.name));
    }
    return list;
  }, [skills, query, sortKey, activeTags]);

  const toggleTag = (tag: string) => {
    setActiveTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });
  };

  const reset = () => {
    setQuery("");
    setSortKey("priority");
    setActiveTags(new Set());
  };

  const hasActiveFilters =
    query.length > 0 || sortKey !== "priority" || activeTags.size > 0;

  return (
    <>
      <div className="mb-12 border border-[var(--color-border)]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] divide-y md:divide-y-0 md:divide-x divide-[var(--color-border)]">
          {/* Search */}
          <div className="px-4 py-3 flex items-center gap-3">
            <span className="font-mono-ui text-xs text-[var(--color-text-tertiary)]">
              SEARCH
            </span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="ads, klaviyo, retention…"
              className="flex-1 bg-transparent border-0 outline-none text-foreground placeholder:text-[var(--color-text-quaternary)]"
              aria-label="search skills"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="font-mono-ui text-xs text-[var(--color-text-tertiary)] hover:text-foreground"
              >
                CLEAR
              </button>
            )}
          </div>

          {/* Sort */}
          <div className="px-4 py-3 flex items-center gap-3">
            <span className="font-mono-ui text-xs text-[var(--color-text-tertiary)]">
              SORT
            </span>
            <select
              value={sortKey}
              onChange={(e) => setSortKey(e.target.value as SortKey)}
              className="bg-transparent border-0 outline-none font-mono-ui text-xs text-foreground appearance-none pr-4 cursor-pointer"
              aria-label="sort skills"
              style={{
                backgroundImage:
                  'url("data:image/svg+xml;utf8,<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"10\\" height=\\"6\\" viewBox=\\"0 0 10 6\\" fill=\\"none\\"><path d=\\"M1 1l4 4 4-4\\" stroke=\\"white\\"/></svg>")',
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right center",
              }}
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value} className="bg-background">
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Tag chips */}
        {allTags.length > 0 && (
          <div className="border-t border-[var(--color-border)] px-4 py-3 flex items-center flex-wrap gap-2">
            <span className="font-mono-ui text-xs text-[var(--color-text-tertiary)] mr-2">
              TAGS
            </span>
            {allTags.map((tag) => {
              const active = activeTags.has(tag);
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  className={`font-mono-ui text-xs px-2 py-1 border transition-colors ${
                    active
                      ? "btn-primary border-foreground"
                      : "border-[var(--color-border-strong)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)]"
                  }`}
                >
                  {tag.toUpperCase()}
                </button>
              );
            })}
            {hasActiveFilters && (
              <button
                type="button"
                onClick={reset}
                className="ml-auto font-mono-ui text-xs text-[var(--color-text-tertiary)] hover:text-foreground"
              >
                RESET ↻
              </button>
            )}
          </div>
        )}
      </div>

      {/* Result count */}
      <p className="mb-6 font-mono-ui text-xs text-[var(--color-text-tertiary)]">
        {filtered.length} / {skills.length} SKILLS
        {hasActiveFilters && " (FILTERED)"}
      </p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="border border-[var(--color-border)] p-16 text-center">
          <p className="font-mono-ui text-xs text-[var(--color-text-tertiary)] mb-4">
            NO MATCHES
          </p>
          <p className="text-[var(--color-text-secondary)] mb-6">
            no skill matches the current filters.
          </p>
          <button
            type="button"
            onClick={reset}
            className="font-mono-ui text-xs px-4 py-2 border border-[var(--color-border-strong)] hover:bg-[var(--color-surface)] transition-colors"
          >
            RESET FILTERS
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[var(--color-border)]">
          {filtered.map((s) => (
            <SkillCatalogCard key={s.slug} skill={s} />
          ))}
        </div>
      )}
    </>
  );
}
