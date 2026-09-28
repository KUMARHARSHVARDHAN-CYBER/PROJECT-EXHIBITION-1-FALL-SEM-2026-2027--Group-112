// src/app/dashboard/search/page.tsx
'use client';

import React, { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import SearchPageContainer from '@/components/search/SearchPageContainer';
import { SearchResultItem } from '@/types/search';
import { Loader2 } from 'lucide-react';

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
    <SearchPageContainer
      initialQuery={initialQuery}
      onNavigate={handleNavigate}
    />
  );
}

export default function DashboardSearchPage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-64 items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-[#1B365D]" />
        </div>
      }
    >
      <SearchPageContent />
    </Suspense>
  );
}
