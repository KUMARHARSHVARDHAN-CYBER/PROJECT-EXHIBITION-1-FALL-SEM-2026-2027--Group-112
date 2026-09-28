// src/types/search.ts
// TypeScript contracts for the Enhanced VTOP Global Search & Filtering module.

/** Categories a search result can belong to. Mirrors VTOP's service groupings. */
export type SearchCategory =
  | 'academic_services'
  | 'exam_and_marks'
  | 'attendance'
  | 'course_materials'
  | 'faculty_and_proctors'
  | 'administrative'
  | 'facilities_and_hostel';

/** The underlying resource type - drives icon, badge, and available quick actions. */
export type SearchResultType = 'page' | 'pdf' | 'external_link' | 'schedule';

export type SortOption = 'relevance' | 'date' | 'title';

export interface SearchResultMetadata {
  /** Human-readable file size, e.g. "2.4 MB". Only relevant for `pdf` type. */
  fileSize?: string;
  /** Course code this item is scoped to, e.g. "CSE3005". */
  courseCode?: string;
  /** Free-form semester/slot label, e.g. "Winter Semester 2025-26". */
  semester?: string;
  /** Direct department or office contact */
  department?: string;
}

export interface SearchResultItem {
  id: string;
  title: string;
  description: string;
  category: SearchCategory;
  type: SearchResultType;
  /** In-app route or external URL the card navigates to on click. */
  url: string;
  /** Present only when the item supports a direct file download. */
  downloadUrl?: string;
  tags: string[];
  /** ISO-8601 timestamp of last update, used for "date" sorting and relative display. */
  updatedAt: string;
  metadata?: SearchResultMetadata;
}

export interface SearchFacetCount {
  value: string;
  count: number;
}

export interface SearchFacets {
  categories: SearchFacetCount[];
  types: SearchFacetCount[];
  tags: SearchFacetCount[];
}

export interface SearchFilterState {
  query: string;
  selectedCategory: SearchCategory | 'all';
  /** Tag-level facet filters, applied in addition to the category filter. */
  selectedTags: string[];
  /** Type-level facet filters (pdf, link, service page, schedule). */
  selectedTypes: SearchResultType[];
  page: number;
  pageSize: number;
  sortBy: SortOption;
}

export interface SearchResponse {
  items: SearchResultItem[];
  totalResults: number;
  page: number;
  totalPages: number;
  facets: SearchFacets;
}

/** Display metadata for each category - kept alongside the type so UI and data never drift apart. */
export const CATEGORY_LABELS: Record<SearchCategory, string> = {
  academic_services: 'Academic Services',
  exam_and_marks: 'Exam & Marks',
  attendance: 'Attendance',
  course_materials: 'Course Materials',
  faculty_and_proctors: 'Faculty & Proctors',
  administrative: 'Administrative',
  facilities_and_hostel: 'Hostels & Facilities',
};

export const TYPE_LABELS: Record<SearchResultType, string> = {
  page: 'Service Page',
  pdf: 'PDF Document',
  external_link: 'External Link',
  schedule: 'Schedule / Timetable',
};

export const DEFAULT_FILTER_STATE: SearchFilterState = {
  query: '',
  selectedCategory: 'all',
  selectedTags: [],
  selectedTypes: [],
  page: 1,
  pageSize: 8,
  sortBy: 'relevance',
};
