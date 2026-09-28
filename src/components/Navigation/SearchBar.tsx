// src/components/Navigation/SearchBar.tsx
'use client';

import React, { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Search,
  X,
  Clock,
  ArrowRight,
  BookOpen,
  Calendar,
  CalendarCheck,
  Building2,
  Users,
  GraduationCap,
  Sparkles,
  Command,
  CornerDownLeft,
  FileText,
  File,
  ExternalLink,
  Loader2,
  ShieldCheck,
  Home,
} from 'lucide-react';
import {
  CATEGORY_LABELS,
  SearchCategory,
  SearchResultItem,
  SearchResultType,
  TYPE_LABELS,
} from '@/types/search';
import { highlightMatches, useVTOPGlobalSearch } from '@/hooks/useVTOPGlobalSearch';

const CATEGORY_ICONS: Record<SearchCategory, React.ComponentType<{ className?: string }>> = {
  academic_services: GraduationCap,
  exam_and_marks: BookOpen,
  attendance: CalendarCheck,
  course_materials: FileText,
  faculty_and_proctors: Users,
  administrative: ShieldCheck,
  facilities_and_hostel: Building2,
};

const CATEGORY_STYLES: Record<SearchCategory, { badge: string; iconBg: string }> = {
  academic_services: {
    badge: 'bg-blue-50 text-blue-700 border-blue-200',
    iconBg: 'bg-blue-100 text-blue-700',
  },
  exam_and_marks: {
    badge: 'bg-amber-50 text-amber-700 border-amber-200',
    iconBg: 'bg-amber-100 text-amber-700',
  },
  attendance: {
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    iconBg: 'bg-emerald-100 text-emerald-700',
  },
  course_materials: {
    badge: 'bg-violet-50 text-violet-700 border-violet-200',
    iconBg: 'bg-violet-100 text-violet-700',
  },
  faculty_and_proctors: {
    badge: 'bg-teal-50 text-teal-700 border-teal-200',
    iconBg: 'bg-teal-100 text-teal-700',
  },
  administrative: {
    badge: 'bg-slate-100 text-slate-700 border-slate-200',
    iconBg: 'bg-slate-200 text-slate-700',
  },
  facilities_and_hostel: {
    badge: 'bg-rose-50 text-rose-700 border-rose-200',
    iconBg: 'bg-rose-100 text-rose-700',
  },
};

const QUICK_CATEGORIES: Array<{ key: SearchCategory | 'all'; label: string }> = [
  { key: 'all', label: 'All' },
  { key: 'academic_services', label: 'Academics' },
  { key: 'exam_and_marks', label: 'Exams & Marks' },
  { key: 'attendance', label: 'Attendance' },
  { key: 'course_materials', label: 'Course Materials' },
  { key: 'facilities_and_hostel', label: 'Hostel & Facilities' },
  { key: 'faculty_and_proctors', label: 'Proctors' },
  { key: 'administrative', label: 'Administrative' },
];

const SUGGESTED_SHORTCUTS = [
  { label: 'Timetable', query: 'timetable' },
  { label: 'Leave Request', query: 'leave' },
  { label: 'Attendance', query: 'attendance' },
  { label: 'Exam Schedule', query: 'exam' },
  { label: 'Marks', query: 'marks' },
  { label: 'Bonafide', query: 'bonafide' },
];

function HighlightedText({ text, query }: { text: string; query: string }) {
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

export interface SearchBarProps {
  onNavigate?: (item: SearchResultItem) => void;
  className?: string;
}

export default function SearchBar({ onNavigate, className = '' }: SearchBarProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMac, setIsMac] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const dialogId = useId();

  const {
    filters,
    inputValue,
    setQuery,
    setCategory,
    isSearching,
    response,
    recentSearches,
    addRecentSearch,
    removeRecentSearch,
    clearRecentSearches,
  } = useVTOPGlobalSearch({ debounceMs: 120 });

  // Detect OS for shortcut key rendering (⌘K vs Ctrl K)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMac(/(Mac|iPhone|iPod|iPad)/i.test(navigator.userAgent));
    }
  }, []);

  // Global keyboard shortcut: Ctrl+K / Cmd+K or "/"
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        e.preventDefault();
        setIsOpen(true);
      } else if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Focus input on modal open
  useEffect(() => {
    if (isOpen) {
      setActiveIndex(0);
      const timer = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const results = useMemo(() => response.items.slice(0, 6), [response.items]);
  const hasQuery = inputValue.trim().length > 0;

  // Handle result selection & navigation
  const commitSelection = useCallback(
    (item: SearchResultItem) => {
      addRecentSearch(inputValue.trim() || item.title);
      setIsOpen(false);

      if (onNavigate) {
        onNavigate(item);
        return;
      }

      if (item.type === 'external_link' || item.url.startsWith('http')) {
        window.open(item.url, '_blank', 'noopener,noreferrer');
      } else {
        router.push(item.url);
      }
    },
    [addRecentSearch, inputValue, onNavigate, router]
  );

  const handleOpenFullSearch = useCallback(
    (q?: string) => {
      const targetQuery = q !== undefined ? q : inputValue.trim();
      if (targetQuery) addRecentSearch(targetQuery);
      setIsOpen(false);
      router.push(`/dashboard/search?q=${encodeURIComponent(targetQuery)}`);
    },
    [addRecentSearch, inputValue, router]
  );

  // Keyboard navigation inside omnibar
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (results.length > 0) {
        setActiveIndex((prev) => (prev + 1) % results.length);
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (results.length > 0) {
        setActiveIndex((prev) => (prev - 1 + results.length) % results.length);
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (hasQuery && results.length > 0 && results[activeIndex]) {
        commitSelection(results[activeIndex]);
      } else if (hasQuery) {
        handleOpenFullSearch();
      }
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* ================= Trigger Button (Dense Header Native) ================= */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group relative flex items-center justify-between w-full max-w-xs md:max-w-sm lg:max-w-md h-8 px-2.5 rounded-md bg-white/15 hover:bg-white/25 text-white/90 hover:text-white border border-white/20 transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-blue-300"
        title="Search Portal (Ctrl + K)"
        aria-label="Search VTOP portal routes, services, and materials"
      >
        <div className="flex items-center gap-2 truncate">
          <Search className="w-3.5 h-3.5 text-blue-200 group-hover:text-white shrink-0" />
          <span className="text-xs text-blue-100 group-hover:text-white font-normal truncate">
            Search timetable, marks, services...
          </span>
        </div>
        <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono font-medium rounded bg-blue-950/50 text-blue-200 border border-blue-400/30 shrink-0 ml-2">
          {isMac ? '⌘K' : 'Ctrl K'}
        </kbd>
      </button>

      {/* ================= Omnibar Modal Backdrop ================= */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center p-3 sm:p-6 md:p-12 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby={dialogId}
        >
          {/* ================= Modal Container ================= */}
          <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-150">
            {/* Input Header */}
            <div className="flex items-center gap-3 px-3.5 py-3 border-b border-slate-200 bg-slate-50/50">
              <Search className="w-5 h-5 text-[#1B365D] shrink-0" />
              <input
                ref={inputRef}
                id={dialogId}
                type="text"
                value={inputValue}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleInputKeyDown}
                placeholder="Type to search timetable, grades, leave request, faculty..."
                className="flex-1 bg-transparent text-sm sm:text-base text-slate-800 placeholder-slate-400 focus:outline-none font-medium"
                autoComplete="off"
                spellCheck="false"
              />

              {isSearching && <Loader2 className="w-4 h-4 text-blue-600 animate-spin shrink-0" />}

              {hasQuery && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="p-1 rounded text-slate-400 hover:text-slate-600 hover:bg-slate-200/60 transition"
                  title="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-2 py-0.5 text-xs font-medium text-slate-500 hover:text-slate-800 bg-slate-200/70 hover:bg-slate-200 rounded border border-slate-300 transition"
              >
                ESC
              </button>
            </div>

            {/* Category Quick Filter Chips */}
            <div className="flex items-center gap-1.5 px-3.5 py-2 border-b border-slate-100 bg-white overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {QUICK_CATEGORIES.map((cat) => {
                const isSelected = filters.selectedCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    type="button"
                    onClick={() => setCategory(cat.key)}
                    className={`px-2.5 py-1 text-xs rounded-full font-medium whitespace-nowrap transition-colors ${
                      isSelected
                        ? 'bg-[#1B365D] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto px-2 py-2">
              {/* State 1: No query entered yet */}
              {!hasQuery && (
                <div className="py-2 px-2 space-y-4">
                  {/* Recent Searches */}
                  {recentSearches.length > 0 && (
                    <div>
                      <div className="flex items-center justify-between px-2 pb-1.5">
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                          Recent Searches
                        </span>
                        <button
                          type="button"
                          onClick={clearRecentSearches}
                          className="text-[11px] text-blue-600 hover:underline"
                        >
                          Clear all
                        </button>
                      </div>
                      <div className="space-y-1">
                        {recentSearches.map((term) => (
                          <div
                            key={term}
                            className="group flex items-center justify-between px-2.5 py-1.5 rounded-lg hover:bg-slate-100 text-xs text-slate-700 transition"
                          >
                            <button
                              type="button"
                              onClick={() => setQuery(term)}
                              className="flex items-center gap-2 flex-1 text-left"
                            >
                              <Clock className="w-3.5 h-3.5 text-slate-400" />
                              <span className="font-medium">{term}</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => removeRecentSearch(term)}
                              className="p-1 rounded text-slate-300 group-hover:text-slate-500 hover:bg-slate-200 transition"
                              title="Remove"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Suggested Portal Shortcuts */}
                  <div>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2 block mb-2">
                      Popular Portal Destinations
                    </span>
                    <div className="flex flex-wrap gap-1.5 px-2">
                      {SUGGESTED_SHORTCUTS.map((item) => (
                        <button
                          key={item.label}
                          type="button"
                          onClick={() => setQuery(item.query)}
                          className="flex items-center gap-1 px-2.5 py-1 rounded-md text-xs bg-blue-50 text-blue-800 border border-blue-200 hover:bg-blue-100 transition"
                        >
                          <Sparkles className="w-3 h-3 text-blue-600" />
                          <span>{item.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* State 2: Searching with Query */}
              {hasQuery && (
                <>
                  {results.length === 0 ? (
                    <div className="py-10 text-center px-4">
                      <p className="text-sm font-semibold text-slate-700">
                        No results found for &ldquo;{inputValue}&rdquo;
                      </p>
                      <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                        Try searching with alternate keywords like &quot;timetable&quot;, &quot;attendance&quot;, &quot;marks&quot;, or &quot;leave&quot;.
                      </p>
                    </div>
                  ) : (
                    <ul ref={listRef} className="space-y-1" role="listbox">
                      {results.map((item, idx) => {
                        const IconComponent = CATEGORY_ICONS[item.category] || GraduationCap;
                        const styles = CATEGORY_STYLES[item.category] || CATEGORY_STYLES.administrative;
                        const isSelected = idx === activeIndex;

                        return (
                          <li
                            key={item.id}
                            role="option"
                            aria-selected={isSelected}
                            onMouseEnter={() => setActiveIndex(idx)}
                          >
                            <button
                              type="button"
                              onClick={() => commitSelection(item)}
                              className={`w-full flex items-start gap-3 p-2.5 rounded-lg text-left transition ${
                                isSelected
                                  ? 'bg-blue-50/80 border border-blue-200 shadow-2xs'
                                  : 'hover:bg-slate-50 border border-transparent'
                              }`}
                            >
                              <div
                                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${styles.iconBg}`}
                              >
                                <IconComponent className="w-4 h-4" />
                              </div>

                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-semibold text-slate-900 truncate">
                                    <HighlightedText text={item.title} query={inputValue} />
                                  </span>
                                  <span
                                    className={`text-[10px] px-1.5 py-0.2 rounded border font-medium uppercase tracking-wider shrink-0 ${styles.badge}`}
                                  >
                                    {CATEGORY_LABELS[item.category]}
                                  </span>
                                </div>

                                <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                                  <HighlightedText text={item.description} query={inputValue} />
                                </p>

                                <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-400">
                                  <span className="font-mono text-blue-700 bg-blue-50/50 px-1 rounded">
                                    {item.url}
                                  </span>
                                  {item.metadata?.semester && (
                                    <span>• {item.metadata.semester}</span>
                                  )}
                                  {item.metadata?.fileSize && (
                                    <span>• {item.metadata.fileSize}</span>
                                  )}
                                </div>
                              </div>

                              <div className="self-center shrink-0 text-slate-300 group-hover:text-blue-600">
                                <ArrowRight className="w-4 h-4" />
                              </div>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}

                  {/* See full search results link */}
                  {response.totalResults > results.length && (
                    <button
                      type="button"
                      onClick={() => handleOpenFullSearch()}
                      className="w-full mt-2 py-2 px-3 text-xs font-semibold text-[#1B365D] bg-blue-50 hover:bg-blue-100 rounded-lg flex items-center justify-center gap-1.5 transition"
                    >
                      <span>See all {response.totalResults} results on full search page</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </>
              )}
            </div>

            {/* Footer keyboard hints */}
            <div className="flex items-center justify-between px-4 py-2 border-t border-slate-100 bg-slate-50 text-[11px] text-slate-500">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-mono text-[10px]">
                    ↑
                  </kbd>
                  <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-mono text-[10px]">
                    ↓
                  </kbd>
                  navigate
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-mono text-[10px]">
                    ↵
                  </kbd>
                  select
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-white border border-slate-200 rounded font-mono text-[10px]">
                    esc
                  </kbd>
                  close
                </span>
              </div>

              <button
                type="button"
                onClick={() => handleOpenFullSearch()}
                className="text-blue-700 hover:underline font-semibold"
              >
                Advanced Search
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
