'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '@/types';
import { CATEGORIES, PRODUCTS } from '@/data/products';
import { ProductCard } from './ProductCard';

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

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q) ||
          p.badge.text.toLowerCase().includes(q) ||
          (p.sku && p.sku.toLowerCase().includes(q)) ||
          (p.storage && p.storage.toLowerCase().includes(q))
      );
    }

    if (sortBy === 'menor-preco') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'maior-preco') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <section className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin pt-12 pb-16" id="catalogo-produtos">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6"
      >
        <div>
          <div className="font-mono-spec text-mono-spec text-primary font-semibold uppercase tracking-wider mb-1">
            Vitrine Atualizada
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <h2 className="font-headline-lg text-headline-sm lg:text-headline-lg text-on-surface font-bold tracking-tight">
              Catálogo de Produtos &amp; Seminovos
            </h2>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <Link
                href="/catalogo-tabela"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-lowest border border-outline-variant/60 text-on-surface hover:border-primary hover:text-primary transition-all text-[13px] font-label-md font-semibold shadow-sm group"
              >
                <span className="material-symbols-outlined text-[18px] text-primary group-hover:scale-110 transition-transform">
                  table_chart
                </span>
                <span>Ver em Tabela Completa</span>
                <span className="material-symbols-outlined text-[16px] text-outline group-hover:text-primary transition-colors">
                  arrow_forward
                </span>
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full lg:w-auto">
          <div className="relative flex-1 sm:w-64">
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-outline text-[18px]">
              search
            </span>
            <input
              type="text"
              aria-label="Filtrar produtos nesta lista"
              value={searchQuery}
              onChange={(e) => onSearchChange?.(e.target.value)}
              placeholder="Filtrar nesta lista..."
              className="w-full h-11 pl-9 pr-8 rounded-xl bg-surface-container-lowest text-on-surface font-body-sm text-body-sm shadow-sm border border-outline-variant/60 focus:outline-none focus:ring-2 focus:ring-primary/20 placeholder:text-outline transition-all"
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
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-2.5 overflow-x-auto pb-3 pt-1 px-1 pr-8 sm:pr-1 no-scrollbar text-nowrap sm:flex-wrap"
      >
        {CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 450, damping: 25 }}
              onClick={() => setSelectedCategory(cat.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-label-md text-label-md transition-all shrink-0 ${
                isActive
                  ? 'bg-primary text-on-primary font-semibold shadow-md'
                  : 'bg-surface-container-lowest text-on-surface-variant font-medium hover:bg-surface-container-high border border-outline-variant/40 hover:border-outline-variant'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`px-1.5 py-0.5 rounded-full text-[11px] font-mono-spec transition-colors ${
                  isActive ? 'bg-on-primary/20 text-white' : 'bg-surface-container text-on-surface-variant'
                }`}
              >
                {cat.count}
              </span>
            </motion.button>
          );
        })}
      </motion.div>

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4"
        id="product-grid"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelect={(p) => setActiveModalProduct(p)}
              />
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="col-span-full w-full py-16 flex flex-col items-center justify-center text-center bg-surface-container-lowest rounded-2xl border border-outline-variant/30 mt-4"
            >
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
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {activeModalProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 backdrop-blur-md"
            onClick={() => setActiveModalProduct(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="bg-surface-container-lowest rounded-3xl max-w-xl w-full p-6 lg:p-8 shadow-2xl relative border border-outline-variant/40"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setActiveModalProduct(null)}
                aria-label="Fechar detalhes do produto"
                className="absolute top-4 right-4 p-2 rounded-full text-on-surface-variant hover:bg-surface-container transition-colors"
              >
                ✕
              </motion.button>

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

                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                    href={`https://wa.me/5583988970601?text=${encodeURIComponent(
                      activeModalProduct.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-tertiary text-on-tertiary font-label-md text-label-md font-semibold hover:bg-tertiary-container transition-all shadow-md"
                  >
                    <span className="material-symbols-outlined text-[20px]">chat</span>
                    <span>Pedir Agora via WhatsApp</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
