// src/app/search/page.tsx
'use client';

import React, { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import SearchPageContainer from '@/components/search/SearchPageContainer';
import { SearchResultItem } from '@/types/search';
import { Loader2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

function SearchPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') ?? '';

  function handleNavigate(item: SearchResultItem) {
    if (item.type === 'external_link' || item.url.startsWith('http')) {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    } else {
      router.push(item.url);
    }
  }

  return (
    <div className="min-h-screen bg-[#f4f6f9] text-[#212529]">
      <header className="sticky top-0 z-40 bg-[#1B365D] text-white h-12 shadow px-4 flex items-center justify-between border-b border-blue-900">
        <Link href="/dashboard" className="flex items-center gap-2 text-xs font-semibold hover:text-blue-200 transition">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Dashboard</span>
        </Link>
        <span className="text-xs font-mono text-blue-200">VTOP Search Engine</span>
      </header>

      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <SearchPageContainer
          initialQuery={initialQuery}
          onNavigate={handleNavigate}
        />
      </main>
    </div>
  );
}

export default function StandaloneSearchPage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen items-center justify-center bg-[#f4f6f9]">
          <Loader2 className="w-8 h-8 animate-spin text-[#1B365D]" />
        </div>
      }
    >
      <SearchPageContent />
    </Suspense>
  );
}
