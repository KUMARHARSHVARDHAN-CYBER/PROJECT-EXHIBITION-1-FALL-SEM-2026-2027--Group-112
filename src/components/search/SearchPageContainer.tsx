// src/components/search/SearchPageContainer.tsx
'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Building2,
  Calendar,
  CalendarCheck,
  Check,
  ChevronLeft,
  ChevronRight,
  Copy,
  Download,
  ExternalLink,
  File,
  FileText,
  Filter,
  GraduationCap,
  LayoutGrid,
  Search,
  SlidersHorizontal,
  Users,
  X,
  Sparkles,
  ArrowUpDown,
  BookOpen,
  ShieldCheck,
  RotateCcw,
} from 'lucide-react';
import {
  CATEGORY_LABELS,
  SearchCategory,
  SearchResultItem,
  SearchResultType,
  SortOption,
  TYPE_LABELS,
} from '@/types/search';
import { highlightMatches, useVTOPGlobalSearch } from '@/hooks/useVTOPGlobalSearch';

const CATEGORY_ICONS: Record<SearchCategory, React.ComponentType<{ className?: string }>> = {
  academic_services: GraduationCap,
  exam_and_marks: BookOpen,
  attendance: CalendarCheck,
  course_materials: LayoutGrid,
  faculty_and_proctors: Users,
  administrative: ShieldCheck,
  facilities_and_hostel: Building2,
};

const TYPE_ICONS: Record<SearchResultType, React.ComponentType<{ className?: string }>> = {
  page: FileText,
  pdf: File,
  external_link: ExternalLink,
  schedule: Calendar,
};

const CATEGORY_STYLES: Record<SearchCategory, { badge: string; iconBg: string }> = {
  academic_services: {
    badge: 'bg-blue-50 text-blue-700 border-blue-200',
    iconBg: 'bg-blue-50 text-blue-600',
  },
  exam_and_marks: {
    badge: 'bg-amber-50 text-amber-700 border-amber-200',
    iconBg: 'bg-amber-50 text-amber-600',
  },
  attendance: {
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    iconBg: 'bg-emerald-50 text-emerald-600',
  },
  course_materials: {
    badge: 'bg-violet-50 text-violet-700 border-violet-200',
    iconBg: 'bg-violet-50 text-violet-600',
  },
  faculty_and_proctors: {
    badge: 'bg-teal-50 text-teal-700 border-teal-200',
    iconBg: 'bg-teal-50 text-teal-600',
  },
  administrative: {
    badge: 'bg-slate-100 text-slate-700 border-slate-200',
    iconBg: 'bg-slate-100 text-slate-700',
  },
  facilities_and_hostel: {
    badge: 'bg-rose-50 text-rose-700 border-rose-200',
    iconBg: 'bg-rose-50 text-rose-600',
  },
};

const CATEGORY_TABS: Array<SearchCategory | 'all'> = [
  'all',
  'academic_services',
  'exam_and_marks',
  'attendance',
  'facilities_and_hostel',
  'faculty_and_proctors',
  'administrative',
];

const ALL_TYPES: SearchResultType[] = ['page', 'pdf', 'external_link', 'schedule'];
const SUGGESTED_QUERIES = ['timetable', 'attendance', 'exam schedule', 'marks', 'leave request', 'bonafide', 'proctor'];

function Highlighted({ text, query }: { text: string; query: string }) {
  const segments = useMemo(() => highlightMatches(text, query), [text, query]);
  return (
    <>
      {segments.map((seg, i) =>
        seg.isMatch ? (
          <mark key={i} className="rounded-xs bg-yellow-200 font-semibold text-slate-900 px-0.5">
            {seg.text}
          </mark>
        ) : (
          <span key={i}>{seg.text}</span>
        )
      )}
    </>
  );
}

function ResultCard({
  item,
  query,
  onNavigate,
}: {
  item: SearchResultItem;
  query: string;
  onNavigate?: (item: SearchResultItem) => void;
}) {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const CategoryIcon = CATEGORY_ICONS[item.category] || GraduationCap;
  const TypeIcon = TYPE_ICONS[item.type] || FileText;
  const styles = CATEGORY_STYLES[item.category] || CATEGORY_STYLES.administrative;

  async function handleCopyLink(e: React.MouseEvent) {
    e.stopPropagation();
    try {
      const absoluteUrl = item.url.startsWith('http')
        ? item.url
        : `${typeof window !== 'undefined' ? window.location.origin : ''}${item.url}`;
      await navigator.clipboard.writeText(absoluteUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Ignore clipboard fallback
    }
  }

  function handleCardClick() {
    if (onNavigate) {
      onNavigate(item);
      return;
    }
    if (item.type === 'external_link' || item.url.startsWith('http')) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    } else {
      router.push(item.url);
    }
  }

  return (
    <div
      onClick={handleCardClick}
      className="group cursor-pointer rounded-xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs transition hover:border-blue-400 hover:shadow-md flex flex-col justify-between"
    >
      <div>
        <div className="flex items-start gap-3.5">
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${styles.iconBg}`}
          >
            <CategoryIcon className="h-5 w-5" />
          </span>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-medium border ${styles.badge}`}
              >
                {CATEGORY_LABELS[item.category]}
              </span>
              <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                <TypeIcon className="h-3 w-3" />
                {TYPE_LABELS[item.type]}
              </span>
              {item.metadata?.semester && (
                <span className="text-[11px] font-medium text-slate-400">
                  {item.metadata.semester}
                </span>
              )}
            </div>

            <h3 className="mt-2 text-base font-semibold text-slate-900 group-hover:text-[#1B365D] transition-colors">
              <Highlighted text={item.title} query={query} />
            </h3>

            <p className="mt-1 text-xs text-slate-500 line-clamp-2 leading-relaxed">
              <Highlighted text={item.description} query={query} />
            </p>
          </div>
        </div>

        {/* Tags */}
        {item.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5 pl-0 sm:pl-[54px]">
            {item.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded bg-slate-50 border border-slate-200 px-1.5 py-0.5 text-[10px] font-mono text-slate-600"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Footer / Quick Actions */}
      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-400">
        <span className="font-mono text-[11px] text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">
          {item.url}
        </span>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={handleCopyLink}
            className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
            title="Copy direct link"
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 text-emerald-600" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
          </button>
          {item.downloadUrl && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                window.open(item.downloadUrl, '_blank');
              }}
              className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-blue-700 transition"
              title="Download resource"
            >
              <Download className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export interface SearchPageContainerProps {
  initialQuery?: string;
  initialCategory?: SearchCategory | 'all';
  onNavigate?: (item: SearchResultItem) => void;
}

export default function SearchPageContainer({
  initialQuery = '',
  initialCategory = 'all',
  onNavigate,
}: SearchPageContainerProps) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const {
    filters,
    inputValue,
    setQuery,
    setCategory,
    toggleTag,
    toggleType,
    setPage,
    setSortBy,
    clearAllFilters,
    response,
    allFilteredResults,
  } = useVTOPGlobalSearch({
    initialQuery,
    initialCategory,
  });

  // Keep query in sync if initialQuery changes
  useEffect(() => {
    if (initialQuery && initialQuery !== inputValue) {
      setQuery(initialQuery);
    }
  }, [initialQuery]);

  const activeFiltersCount =
    (filters.selectedCategory !== 'all' ? 1 : 0) +
    filters.selectedTypes.length +
    filters.selectedTags.length;

  return (
    <div className="space-y-6">
      {/* ================= Header Banner ================= */}
      <div className="rounded-2xl bg-gradient-to-r from-[#1B365D] to-[#254b82] p-6 sm:p-8 text-white shadow-md">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-blue-200 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Enhanced VTOP Global Directory</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Portal Search & Resource Index
          </h1>
          <p className="mt-2 text-sm text-blue-100 leading-relaxed">
            Quickly search and jump to any student service, timetable slot, exam mark breakdown,
            outpass request, or official circular across VIT Bhopal Campus.
          </p>

          {/* Search Input in Hero */}
          <div className="mt-5 relative max-w-2xl">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search across all academic services, timetable, faculty, fees, outpass..."
              className="w-full pl-11 pr-10 py-3 rounded-xl bg-white text-slate-900 placeholder-slate-400 shadow-lg text-sm sm:text-base focus:outline-none focus:ring-4 focus:ring-blue-400/40"
            />
            {inputValue && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Popular shortcuts */}
          <div className="mt-3 flex flex-wrap items-center gap-1.5 text-xs text-blue-100">
            <span className="font-semibold text-blue-200">Suggestions:</span>
            {SUGGESTED_QUERIES.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => setQuery(q)}
                className="px-2 py-0.5 bg-white/15 hover:bg-white/25 rounded-md text-xs font-medium text-white transition"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ================= Category Tabs ================= */}
      <div className="border-b border-slate-200 bg-white rounded-xl shadow-xs p-1">
        <div className="flex items-center gap-1 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-2 py-1">
          {CATEGORY_TABS.map((cat) => {
            const isSelected = filters.selectedCategory === cat;
            const count =
              cat === 'all'
                ? allFilteredResults.length
                : response.facets.categories.find((c) => c.value === cat)?.count ?? 0;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`flex items-center gap-2 shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  isSelected
                    ? 'bg-[#1B365D] text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <span>{cat === 'all' ? 'All Services' : CATEGORY_LABELS[cat]}</span>
                <span
                  className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ================= Main Grid: Sidebar Filters + Results ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Filters */}
        <aside className="lg:col-span-1 space-y-5">
          <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2 font-semibold text-sm text-slate-800">
                <SlidersHorizontal className="w-4 h-4 text-blue-700" />
                <span>Filters & Facets</span>
              </div>
              {activeFiltersCount > 0 && (
                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="flex items-center gap-1 text-xs text-blue-700 hover:underline font-medium"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Reset</span>
                </button>
              )}
            </div>

            {/* Sort Option */}
            <div className="py-3 border-b border-slate-100">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                Sort Order
              </label>
              <select
                value={filters.sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="w-full text-xs font-medium bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="relevance">Most Relevant First</option>
                <option value="date">Recently Updated</option>
                <option value="title">Alphabetical (A - Z)</option>
              </select>
            </div>

            {/* Resource Type Filter */}
            <div className="py-3 border-b border-slate-100">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                Resource Type
              </label>
              <div className="space-y-1.5">
                {ALL_TYPES.map((type) => {
                  const isChecked = filters.selectedTypes.includes(type);
                  const count =
                    response.facets.types.find((t) => t.value === type)?.count ?? 0;
                  const TypeIcon = TYPE_ICONS[type];

                  return (
                    <label
                      key={type}
                      className="flex items-center justify-between text-xs text-slate-700 hover:bg-slate-50 p-1.5 rounded cursor-pointer transition"
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleType(type)}
                          className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                        />
                        <TypeIcon className="w-3.5 h-3.5 text-slate-400" />
                        <span>{TYPE_LABELS[type]}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono">({count})</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Available Tags */}
            <div className="pt-3">
              <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                Top Keywords
              </label>
              <div className="flex flex-wrap gap-1.5">
                {response.facets.tags.slice(0, 12).map(({ value: tag, count }) => {
                  const isSelected = filters.selectedTags.includes(tag);
                  return (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleTag(tag)}
                      className={`text-[11px] px-2 py-0.5 rounded-md font-mono transition ${
                        isSelected
                          ? 'bg-blue-600 text-white font-medium shadow-xs'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      #{tag} <span className="opacity-70 text-[9px]">({count})</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </aside>

        {/* Results List / Grid */}
        <main className="lg:col-span-3 space-y-4">
          {/* Status summary */}
          <div className="flex items-center justify-between text-xs text-slate-500 px-1">
            <span>
              Showing{' '}
              <strong className="text-slate-800">{response.items.length}</strong> of{' '}
              <strong className="text-slate-800">{response.totalResults}</strong> matching results
              {inputValue && (
                <>
                  {' '}for &ldquo;<span className="font-semibold text-slate-900">{inputValue}</span>&rdquo;
                </>
              )}
            </span>
          </div>

          {/* Results Grid */}
          {response.items.length === 0 ? (
            <div className="bg-white rounded-xl border border-slate-200 p-12 text-center shadow-xs">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400 mb-3">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-800">No resources found</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1">
                We couldn&apos;t find anything matching your active search and filter criteria.
              </p>
              <button
                type="button"
                onClick={clearAllFilters}
                className="mt-4 px-4 py-2 bg-[#1B365D] hover:bg-[#254b82] text-white text-xs font-semibold rounded-lg shadow-xs transition"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {response.items.map((item) => (
                <ResultCard
                  key={item.id}
                  item={item}
                  query={inputValue}
                  onNavigate={onNavigate}
                />
              ))}
            </div>
          )}

          {/* Pagination */}
          {response.totalPages > 1 && (
            <div className="flex items-center justify-between border-t border-slate-200 bg-white rounded-xl p-3 shadow-xs">
              <button
                type="button"
                disabled={response.page <= 1}
                onClick={() => setPage(response.page - 1)}
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <span className="text-xs font-medium text-slate-600">
                Page <span className="font-bold text-slate-900">{response.page}</span> of{' '}
                <span className="font-bold text-slate-900">{response.totalPages}</span>
              </span>

              <button
                type="button"
                disabled={response.page >= response.totalPages}
                onClick={() => setPage(response.page + 1)}
                className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:pointer-events-none"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
