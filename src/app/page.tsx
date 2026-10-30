'use client';

import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TrustBar } from '@/components/TrustBar';
import { Catalog } from '@/components/Catalog';
import { TechnicalAssistance } from '@/components/TechnicalAssistance';
import { StoreLocation } from '@/components/StoreLocation';
import { Footer } from '@/components/Footer';
import { WhatsAppWidget } from '@/components/WhatsAppWidget';

export default function HomePage() {
  const [globalSearch, setGlobalSearch] = useState('');

  const handleSearchChange = (query: string) => {
    setGlobalSearch(query);
    if (query.trim().length > 0 && typeof window !== 'undefined') {
      const el = document.getElementById('catalogo-produtos');
      if (el) {
        const topOffset = el.getBoundingClientRect().top + window.scrollY - 140;
        if (window.scrollY < topOffset - 200) {
          window.scrollTo({ top: topOffset, behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      <Header
        searchQuery={globalSearch}
        onSearchChange={handleSearchChange}
      />
      <main className="w-full pt-[120px] bg-background flex-1">
        <div className="flex flex-col w-full">
          <Hero />
          <TrustBar />
          <Catalog
            searchQuery={globalSearch}
            onSearchChange={setGlobalSearch}
          />
          <TechnicalAssistance />
          <StoreLocation />
        </div>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
