'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppWidget } from '@/components/WhatsAppWidget';
import { CATEGORIES, PRODUCTS } from '@/data/products';
import { Product } from '@/types';

type SortField = 'name' | 'category' | 'storage' | 'battery' | 'price';
type SortDirection = 'asc' | 'desc';

export default function CatalogoTabelaPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [sortField, setSortField] = useState<SortField>('price');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (onlyInStock) {
      result = result.filter((p) => p.inStock);
    }

    if (searchTerm.trim() !== '') {
      const q = searchTerm.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q) ||
          p.badge.text.toLowerCase().includes(q) ||
          (p.sku && p.sku.toLowerCase().includes(q)) ||
          (p.storage && p.storage.toLowerCase().includes(q)) ||
          (p.condition && p.condition.toLowerCase().includes(q))
      );
    }

    result.sort((a, b) => {
      let comparison = 0;
      if (sortField === 'name') {
        comparison = a.name.localeCompare(b.name);
      } else if (sortField === 'category') {
        comparison = a.categoryLabel.localeCompare(b.categoryLabel);
      } else if (sortField === 'storage') {
        comparison = (a.storage || '').localeCompare(b.storage || '');
      } else if (sortField === 'battery') {
        const valA = parseInt(a.batteryHealth || '0', 10);
        const valB = parseInt(b.batteryHealth || '0', 10);
        comparison = valA - valB;
      } else if (sortField === 'price') {
        comparison = a.price - b.price;
      }
      return sortDirection === 'asc' ? comparison : -comparison;
    });

    return result;
  }, [selectedCategory, onlyInStock, searchTerm, sortField, sortDirection]);

  const formatPrice = (val: number) => {
    return val.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  return (
    <>
      <Header searchQuery={searchTerm} onSearchChange={setSearchTerm} />

      <main className="w-full pt-[120px] bg-background flex-1 pb-16">
        <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin py-8">
          <motion.nav
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 text-[13px] font-body-sm text-on-surface-variant mb-6"
          >
            <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">home</span>
              Início
            </Link>
            <span className="text-outline-variant">/</span>
            <Link href="/#catalogo-produtos" className="hover:text-primary transition-colors">
              Catálogo
            </Link>
            <span className="text-outline-variant">/</span>
            <span className="text-on-surface font-semibold">Tabela Comparativa</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-surface-container-lowest rounded-3xl p-6 lg:p-10 shadow-sm border border-outline-variant/40 mb-8"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-mono-spec text-[12px] font-semibold uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[16px]">dataset</span>
                  Inventário Técnico &amp; Preços Atualizados
                </div>
                <h1 className="font-display-hero text-headline-sm lg:text-headline-lg text-on-surface font-extrabold tracking-tight">
                  Tabela Completa de Catálogo &amp; Seminovos
                </h1>
                <p className="font-body-md text-on-surface-variant text-[15px] leading-relaxed">
                  Consulte especificações de armazenamento, saúde da bateria, condições de grade cosmética, prazos de garantia formal balcão e valores à vista ou parcelados com total transparência.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }}>
                  <Link
                    href="/#catalogo-produtos"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-surface-container transition-all border border-outline-variant/40"
                  >
                    <span className="material-symbols-outlined text-[18px]">grid_view</span>
                    <span>Ver em Cards</span>
                  </Link>
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => window.print()}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-surface-container transition-all border border-outline-variant/40"
                  title="Imprimir esta tabela"
                >
                  <span className="material-symbols-outlined text-[18px]">print</span>
                  <span>Imprimir / PDF</span>
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  href="https://wa.me/5583988970601?text=Ol%C3%A1%2C+gostaria+de+consultar+a+tabela+de+produtos+da+Globaltech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-tertiary text-on-tertiary font-label-md text-label-md font-semibold hover:bg-tertiary-container transition-all shadow-sm"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>Dúvida no WhatsApp</span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-outline-variant/40 mb-6 space-y-4"
          >
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <span className="material-symbols-outlined absolute left-3 top-3 text-outline text-[18px]">
                  search
                </span>
                <input
                  type="text"
                  aria-label="Buscar por modelo, SKU ou especificações"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar modelo (ex: iPhone 13), SKU ou memória..."
                  className="w-full h-11 pl-9 pr-8 bg-surface-container-low border border-outline-variant/60 rounded-xl font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
                {searchTerm && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    whileTap={{ scale: 0.85 }}
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 top-3 text-outline hover:text-on-surface"
                  >
                    ✕
                  </motion.button>
                )}
              </div>

              <div className="flex items-center gap-4 flex-wrap">
                <label className="flex items-center gap-2 text-on-surface font-label-md text-label-md cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={onlyInStock}
                    onChange={(e) => setOnlyInStock(e.target.checked)}
                    className="w-4 h-4 rounded text-primary focus:ring-primary border-outline-variant/60 cursor-pointer"
                  />
                  <span>Apenas Pronta Entrega</span>
                </label>

                <div className="h-4 w-px bg-outline-variant/60 hidden sm:block"></div>

                <div className="text-[13px] font-mono-spec text-on-surface-variant">
                  Exibindo <strong className="text-on-surface">{filteredProducts.length}</strong> de{' '}
                  {PRODUCTS.length} itens
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-2 px-1 pr-8 sm:pr-1 no-scrollbar text-nowrap sm:flex-wrap border-t border-surface-container">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <motion.button
                    key={cat.id}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 450, damping: 25 }}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-label-md text-[13px] transition-colors shrink-0 ${
                      isActive
                        ? 'bg-primary text-on-primary font-semibold shadow-sm'
                        : 'bg-surface-container-low text-on-surface-variant font-medium hover:bg-surface-container-high border border-outline-variant/30'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`px-1.5 py-0.2 rounded-full text-[10px] font-mono-spec ${
                        isActive ? 'bg-on-primary/20 text-white' : 'bg-surface-container text-on-surface-variant'
                      }`}
                    >
                      {cat.count}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/40 overflow-hidden"
          >
            <div className="overflow-x-auto no-scrollbar">
              <table className="w-full text-left border-collapse min-w-[960px]">
                <thead>
                  <tr className="bg-surface-container-low border-b border-outline-variant/40 text-[12px] font-mono-spec text-on-surface-variant uppercase tracking-wider">
                    <th
                      className="py-3.5 px-4 cursor-pointer hover:text-primary transition-colors select-none"
                      onClick={() => handleSort('name')}
                    >
                      <div className="flex items-center gap-1">
                        <span>Produto &amp; Modelo</span>
                        <span className="material-symbols-outlined text-[14px]">
                          {sortField === 'name' ? (sortDirection === 'asc' ? 'arrow_upward' : 'arrow_downward') : 'unfold_more'}
                        </span>
                      </div>
                    </th>
                    <th
                      className="py-3.5 px-4 cursor-pointer hover:text-primary transition-colors select-none"
                      onClick={() => handleSort('category')}
                    >
                      <div className="flex items-center gap-1">
                        <span>Categoria</span>
                        <span className="material-symbols-outlined text-[14px]">
                          {sortField === 'category' ? (sortDirection === 'asc' ? 'arrow_upward' : 'arrow_downward') : 'unfold_more'}
                        </span>
                      </div>
                    </th>
                    <th
                      className="py-3.5 px-4 cursor-pointer hover:text-primary transition-colors select-none"
                      onClick={() => handleSort('storage')}
                    >
                      <div className="flex items-center gap-1">
                        <span>Memória / Tam.</span>
                        <span className="material-symbols-outlined text-[14px]">
                          {sortField === 'storage' ? (sortDirection === 'asc' ? 'arrow_upward' : 'arrow_downward') : 'unfold_more'}
                        </span>
                      </div>
                    </th>
                    <th
                      className="py-3.5 px-4 cursor-pointer hover:text-primary transition-colors select-none"
                      onClick={() => handleSort('battery')}
                    >
                      <div className="flex items-center gap-1">
                        <span>Bateria</span>
                        <span className="material-symbols-outlined text-[14px]">
                          {sortField === 'battery' ? (sortDirection === 'asc' ? 'arrow_upward' : 'arrow_downward') : 'unfold_more'}
                        </span>
                      </div>
                    </th>
                    <th className="py-3.5 px-4">Garantia</th>
                    <th
                      className="py-3.5 px-4 cursor-pointer hover:text-primary transition-colors select-none"
                      onClick={() => handleSort('price')}
                    >
                      <div className="flex items-center gap-1">
                        <span>Preço à Vista</span>
                        <span className="material-symbols-outlined text-[14px]">
                          {sortField === 'price' ? (sortDirection === 'asc' ? 'arrow_upward' : 'arrow_downward') : 'unfold_more'}
                        </span>
                      </div>
                    </th>
                    <th className="py-3.5 px-4">Cartão (12x)</th>
                    <th className="py-3.5 px-4">Disponibilidade</th>
                    <th className="py-3.5 px-4 text-center">Ação</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/30 text-on-surface font-body-sm text-[14px]">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((p) => {
                      const isBatteryPercentage = p.batteryHealth && p.batteryHealth.includes('%');
                      return (
                        <tr
                          key={p.id}
                          className="hover:bg-surface-container-low/70 transition-colors group cursor-pointer"
                          onClick={() => setSelectedProduct(p)}
                        >
                          <td className="py-3.5 px-4">
                            <div className="flex items-center gap-3">
                              <div className="relative w-12 h-12 rounded-xl bg-surface-container-low overflow-hidden shrink-0 border border-outline-variant/30">
                                <Image
                                  src={p.image}
                                  alt={p.alt}
                                  fill
                                  sizes="48px"
                                  className="object-contain p-1 group-hover:scale-105 transition-transform"
                                />
                              </div>
                              <div className="min-w-0">
                                <div className="font-headline-sm text-[14px] font-bold text-on-surface group-hover:text-primary transition-colors leading-snug">
                                  {p.name}
                                </div>
                                <div className="flex items-center gap-2 mt-0.5">
                                  <span className="text-[11px] font-mono-spec text-outline">
                                    {p.sku || 'GLB-TECH'}
                                  </span>
                                  {p.condition && (
                                    <span className="text-[11px] font-mono-spec px-1.5 py-0.2 rounded bg-surface-container text-on-surface-variant">
                                      {p.condition}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </td>

                          <td className="py-3.5 px-4">
                            <span className="inline-block px-2.5 py-0.5 rounded-full bg-surface-container font-mono-spec text-[11px] text-on-surface-variant font-medium">
                              {p.categoryLabel}
                            </span>
                          </td>

                          <td className="py-3.5 px-4 font-mono-spec text-[13px] font-semibold text-on-surface">
                            {p.storage || '—'}
                          </td>

                          <td className="py-3.5 px-4">
                            {p.batteryHealth ? (
                              <span
                                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-mono-spec font-bold ${
                                  isBatteryPercentage
                                    ? 'bg-tertiary-fixed text-on-tertiary-fixed'
                                    : 'bg-surface-container text-on-surface-variant'
                                }`}
                              >
                                {isBatteryPercentage && (
                                  <span className="material-symbols-outlined text-[13px]">
                                    battery_charging_full
                                  </span>
                                )}
                                {p.batteryHealth}
                              </span>
                            ) : (
                              <span className="text-outline text-[12px]">—</span>
                            )}
                          </td>

                          <td className="py-3.5 px-4">
                            <span className="inline-flex items-center gap-1 text-[12px] font-medium text-on-surface-variant">
                              <span className="material-symbols-outlined text-primary text-[15px]">
                                verified
                              </span>
                              {p.warranty || '90 Dias Balcão'}
                            </span>
                          </td>

                          <td className="py-3.5 px-4">
                            <div className="font-headline-sm text-[15px] font-extrabold text-on-surface tabular-nums">
                              R$ {formatPrice(p.price)}
                            </div>
                            {p.originalPrice && (
                              <div className="text-[11px] text-outline line-through tabular-nums">
                                R$ {formatPrice(p.originalPrice)}
                              </div>
                            )}
                          </td>

                          <td className="py-3.5 px-4 text-[12px] text-on-surface-variant">
                            {p.installments}
                          </td>

                          <td className="py-3.5 px-4">
                            {p.inStock ? (
                              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono-spec text-tertiary font-semibold">
                                <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
                                Pronta Entrega
                              </span>
                            ) : (
                              <span className="text-[11px] font-mono-spec text-outline">
                                Sob Consulta
                              </span>
                            )}
                          </td>

                          <td className="py-3.5 px-4 text-center" onClick={(e) => e.stopPropagation()}>
                            <motion.a
                              whileHover={{ scale: 1.06 }}
                              whileTap={{ scale: 0.94 }}
                              href={`https://wa.me/5583988970601?text=${encodeURIComponent(p.whatsappMessage)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-tertiary text-on-tertiary font-label-md text-[12px] font-semibold hover:bg-tertiary-container transition-all shadow-sm"
                              title="Solicitar aparelho via WhatsApp"
                            >
                              <span className="material-symbols-outlined text-[16px]">chat</span>
                              <span>Pedir</span>
                            </motion.a>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan={9} className="py-12 text-center text-on-surface-variant">
                        <span className="material-symbols-outlined text-[42px] text-outline mb-2">
                          search_off
                        </span>
                        <div className="font-headline-sm text-[16px] font-bold text-on-surface">
                          Nenhum produto encontrado
                        </div>
                        <p className="text-[13px] text-outline-variant mt-1">
                          Tente alterar os termos de busca ou redefinir os filtros aplicados.
                        </p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="bg-surface-container-low px-4 py-3 border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] font-mono-spec text-on-surface-variant">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                  Garantia Balcão Globaltech
                </span>
                <span>•</span>
                <span>Inspeção em 30 Etapas</span>
                <span>•</span>
                <span>Homologado Anatel</span>
              </div>
              <div>Atualizado hoje • Intermares, Cabedelo/PB</div>
            </div>
          </motion.div>
        </div>
      </main>

      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="bg-surface-container-lowest rounded-3xl max-w-xl w-full p-6 lg:p-8 shadow-2xl relative border border-outline-variant/40"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedProduct(null)}
                aria-label="Fechar detalhes"
                className="absolute top-4 right-4 p-2 rounded-full text-on-surface-variant hover:bg-surface-container transition-colors"
              >
                ✕
              </motion.button>

              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <div className="relative w-44 h-44 bg-surface-container-low rounded-2xl overflow-hidden shrink-0 border border-outline-variant/30">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.alt}
                    fill
                    className="object-contain p-3"
                  />
                </div>

                <div className="flex flex-col flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono-spec text-[11px] text-primary font-semibold uppercase">
                      {selectedProduct.categoryLabel}
                    </span>
                    <span className="text-[11px] font-mono-spec text-outline">
                      {selectedProduct.sku}
                    </span>
                  </div>

                  <h3 className="font-headline-sm text-[18px] font-bold text-on-surface leading-tight mb-2">
                    {selectedProduct.name}
                  </h3>

                  <p className="font-body-sm text-[13px] text-on-surface-variant mb-4">
                    {selectedProduct.specsSummary || 'Aparelho inspecionado em laboratório técnico com peças originais e garantia formal.'}
                  </p>

                  <div className="grid grid-cols-2 gap-2 mb-4 p-3 bg-surface-container-low rounded-xl text-[12px]">
                    <div>
                      <span className="text-outline font-mono-spec block text-[11px]">Memória:</span>
                      <strong className="text-on-surface">{selectedProduct.storage || 'Padrão'}</strong>
                    </div>
                    <div>
                      <span className="text-outline font-mono-spec block text-[11px]">Bateria:</span>
                      <strong className="text-tertiary">{selectedProduct.batteryHealth || '100%'}</strong>
                    </div>
                    <div>
                      <span className="text-outline font-mono-spec block text-[11px]">Garantia:</span>
                      <strong className="text-on-surface">{selectedProduct.warranty || '1 Ano'}</strong>
                    </div>
                    <div>
                      <span className="text-outline font-mono-spec block text-[11px]">Condição:</span>
                      <strong className="text-on-surface">{selectedProduct.condition || 'Impecável'}</strong>
                    </div>
                  </div>

                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="font-label-sm text-[13px] text-on-surface-variant">R$</span>
                    <span className="font-headline-lg text-[26px] font-extrabold text-on-surface tabular-nums">
                      {formatPrice(selectedProduct.price)}
                    </span>
                    <span className="font-body-sm text-[11px] text-tertiary font-semibold">à vista</span>
                  </div>
                  <div className="font-body-sm text-[12px] text-on-surface-variant mb-5">
                    {selectedProduct.installments}
                  </div>

                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.96 }}
                    href={`https://wa.me/5583988970601?text=${encodeURIComponent(selectedProduct.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-tertiary text-on-tertiary font-label-md text-label-md font-semibold hover:bg-tertiary-container transition-all shadow-md"
                  >
                    <span className="material-symbols-outlined text-[18px]">chat</span>
                    <span>Pedir Este Modelo no WhatsApp</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <WhatsAppWidget />
    </>
  );
}
