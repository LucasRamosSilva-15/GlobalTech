'use client';

import React, { useState, useMemo } from 'react';
import { Product } from '@/types';
import { CATEGORIES, PRODUCTS } from '@/data/products';
import { ProductCard } from './ProductCard';
import Image from 'next/image';

interface CatalogProps {
  searchQuery?: string;
  onSearchChange?: (val: string) => void;
}

export const Catalog: React.FC<CatalogProps> = ({
  searchQuery = '',
  onSearchChange,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('populares');
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  // Filter & sort logic
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Search query filter
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q) ||
          p.badge.text.toLowerCase().includes(q)
      );
    }

    // Sort
    if (sortBy === 'menor-preco') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'maior-preco') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <section className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin pt-12 pb-16" id="catalogo-produtos">
      {/* Catalog Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
        <div>
          <div className="font-mono-spec text-mono-spec text-primary font-semibold uppercase tracking-wider mb-1">
            Vitrine Atualizada
          </div>
          <h2 className="font-headline-lg text-headline-sm lg:text-headline-lg text-on-surface font-bold tracking-tight">
            Catálogo de Produtos &amp; Seminovos
          </h2>
        </div>

        {/* Search & Sort Controls */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-outline text-[18px]">
              search
            </span>
            <input
              type="text"
              aria-label="Filtrar produtos nesta lista"
              value={searchQuery}
              onChange={(e) => onSearchChange?.(e.target.value)}
              placeholder="Filtrar nesta lista..."
              className="w-full h-11 pl-9 pr-8 rounded-xl bg-surface-container-lowest text-on-surface font-body-sm text-body-sm shadow-sm border border-outline-variant/60 focus:outline-none focus:ring-2 focus:ring-primary/20 placeholder:text-outline"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange?.('')}
                aria-label="Limpar filtro de busca"
                className="absolute right-3 top-3 text-outline hover:text-on-surface text-[14px]"
              >
                ✕
              </button>
            )}
          </div>
          <select
            value={sortBy}
            aria-label="Ordenar produtos"
            onChange={(e) => setSortBy(e.target.value)}
            className="h-11 px-3.5 rounded-xl bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm border border-outline-variant/60 focus:outline-none focus:ring-2 focus:ring-primary/20 cursor-pointer"
          >
            <option value="populares">Mais Vendidos</option>
            <option value="menor-preco">Menor Preço</option>
            <option value="maior-preco">Maior Preço</option>
            <option value="recentes">Mais Recentes</option>
          </select>
        </div>
      </div>

      {/* Segmented Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 pt-1 no-scrollbar text-nowrap">
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-label-md text-label-md transition-all active:scale-95 ${
                isActive
                  ? 'bg-primary text-on-primary font-semibold shadow-sm'
                  : 'bg-surface-container-lowest text-on-surface-variant font-medium hover:bg-surface-container-high border border-outline-variant/40'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`px-1.5 py-0.5 rounded-full text-[11px] font-mono-spec ${
                  isActive ? 'bg-on-primary/20 text-white' : 'bg-surface-container text-on-surface-variant'
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4" id="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={(p) => setActiveModalProduct(p)}
            />
          ))}
        </div>
      ) : (
        <div className="w-full py-16 flex flex-col items-center justify-center text-center bg-surface-container-lowest rounded-2xl border border-outline-variant/30 mt-4">
          <span className="material-symbols-outlined text-[48px] text-outline mb-2">
            search_off
          </span>
          <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-1">
            Nenhum produto encontrado
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Não encontramos itens para o termo &quot;{searchQuery}&quot;. Tente buscar por iPhone, fones, capas ou carregador.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              onSearchChange?.('');
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-primary text-on-primary font-label-md text-label-md"
          >
            Limpar Filtros
          </button>
        </div>
      )}

      {/* Quick View Modal */}
      {activeModalProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setActiveModalProduct(null)}
        >
          <div
            className="bg-surface-container-lowest rounded-3xl max-w-xl w-full p-6 lg:p-8 shadow-2xl relative border border-outline-variant/40 animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalProduct(null)}
              aria-label="Fechar detalhes do produto"
              className="absolute top-4 right-4 p-2 rounded-full text-on-surface-variant hover:bg-surface-container transition-colors"
            >
              ✕
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <div className="relative w-48 h-48 bg-surface-container-low rounded-2xl overflow-hidden shrink-0">
                <Image
                  src={activeModalProduct.image}
                  alt={activeModalProduct.alt}
                  fill
                  className="object-contain p-4"
                />
              </div>

              <div className="flex flex-col flex-1">
                <span className="font-mono-spec text-mono-spec text-primary font-semibold uppercase">
                  {activeModalProduct.categoryLabel}
                </span>
                <h3 className="font-headline-sm text-[20px] font-bold text-on-surface mt-1 mb-2">
                  {activeModalProduct.name}
                </h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-mono-spec text-[11px] font-semibold">
                    {activeModalProduct.badge.text}
                  </span>
                  <span className="text-tertiary font-mono-spec text-[11px] font-semibold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-tertiary"></span> Pronta Entrega
                  </span>
                </div>

                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-label-sm text-[14px] text-on-surface-variant">R$</span>
                  <span className="font-headline-lg text-[28px] font-extrabold text-on-surface tabular-nums">
                    {activeModalProduct.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                  <span className="font-body-sm text-[12px] text-tertiary font-semibold">à vista</span>
                </div>
                <div className="font-body-sm text-[13px] text-on-surface-variant mb-6">
                  {activeModalProduct.installments}
                </div>

                <a
                  href={`https://wa.me/5583988970601?text=${encodeURIComponent(
                    activeModalProduct.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-tertiary text-on-tertiary font-label-md text-label-md font-semibold hover:bg-tertiary-container transition-all shadow-md active:scale-95"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  <span>Pedir Agora via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
