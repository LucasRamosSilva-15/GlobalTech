'use client';

import React, { useState } from 'react';
import { DIAGNOSTIC_SERVICES } from '@/data/products';

const BRANDS = ['Apple iPhone', 'Xiaomi / Poco', 'Samsung Galaxy', 'Motorola'];

const FAULT_OPTIONS = [
  { id: 'tela', label: 'Troca de Tela / Vidro', time: '~ 45 min', price: 'R$ 180' },
  { id: 'bateria', label: 'Bateria / Saúde Baixa', time: '~ 30 min', price: 'R$ 150' },
  { id: 'conector', label: 'Conector de Carga / USB', time: '~ 40 min', price: 'R$ 120' },
  { id: 'camera', label: 'Câmera / Vidro Traseiro', time: '~ 50 min', price: 'R$ 140' },
  { id: 'placa', label: 'Placa / Não Liga / Água', time: '~ 2h a 4h', price: 'Sob avaliação' },
];

export const TechnicalAssistance: React.FC = () => {
  const [selectedBrand, setSelectedBrand] = useState('Apple iPhone');
  const [selectedFault, setSelectedFault] = useState(FAULT_OPTIONS[0]);

  const whatsappQuoteUrl = `https://wa.me/5583988970601?text=${encodeURIComponent(
    `Olá! Gostaria de um orçamento para meu aparelho ${selectedBrand} com problema de ${selectedFault.label}.`
  )}`;

  return (
    <section className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin py-8" id="assistencia-tecnica">
      <div className="bg-inverse-surface rounded-3xl p-8 lg:p-14 text-inverse-on-surface shadow-2xl relative overflow-hidden border border-outline/20">
        {/* Glow Accent */}
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/20 text-inverse-primary font-mono-spec text-mono-spec">
              <span className="material-symbols-outlined text-[16px]">precision_manufacturing</span>
              <span>Laboratório Próprio em Intermares</span>
            </div>

            <h2 className="font-display-hero text-headline-lg-mobile lg:text-headline-lg font-bold tracking-tight text-white leading-tight">
              Seu celular quebrou ou a bateria descarrega rápido?
            </h2>

            <p className="font-body-lg text-body-md lg:text-body-lg text-outline-variant max-w-xl">
              Realizamos diagnósticos precisos em bancada limpa com componentes originais e garantia formal. Saia com o aparelho pronto no mesmo dia.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-tertiary-container text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[16px]">check</span>
                </span>
                <span className="font-body-md text-white font-medium">Troca de tela original em até 1 hora</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-tertiary-container text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[16px]">check</span>
                </span>
                <span className="font-body-md text-white font-medium">Troca de bateria com 100% de saúde</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-tertiary-container text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[16px]">check</span>
                </span>
                <span className="font-body-md text-white font-medium">Reparo avançado de micro solda em placa</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-tertiary-container text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[16px]">check</span>
                </span>
                <span className="font-body-md text-white font-medium">Desoxidação e limpeza ultrassônica</span>
              </div>
            </div>

            {/* Interactive Diagnostic Quick Selector */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
              <span className="font-mono-spec text-[12px] text-inverse-primary uppercase tracking-wider block">
                Simulador Rápido de Reparo
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="select-brand" className="text-[11px] text-white/80 font-mono-spec block mb-1">
                    Marca / Aparelho:
                  </label>
                  <select
                    id="select-brand"
                    aria-label="Selecionar marca do aparelho"
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="w-full h-10 px-3 rounded-xl bg-inverse-surface border border-white/20 text-white text-body-sm focus:outline-none focus:border-primary cursor-pointer"
                  >
                    {BRANDS.map((b) => (
                      <option key={b} value={b} className="bg-inverse-surface text-white">
                        {b}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="select-fault" className="text-[11px] text-white/80 font-mono-spec block mb-1">
                    Problema Identificado:
                  </label>
                  <select
                    id="select-fault"
                    aria-label="Selecionar tipo de problema"
                    value={selectedFault.id}
                    onChange={(e) => {
                      const found = FAULT_OPTIONS.find((f) => f.id === e.target.value);
                      if (found) setSelectedFault(found);
                    }}
                    className="w-full h-10 px-3 rounded-xl bg-inverse-surface border border-white/20 text-white text-body-sm focus:outline-none focus:border-primary cursor-pointer"
                  >
                    {FAULT_OPTIONS.map((f) => (
                      <option key={f.id} value={f.id} className="bg-inverse-surface text-white">
                        {f.label} ({f.time})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href={whatsappQuoteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-tertiary text-on-tertiary font-label-md text-label-md font-bold hover:bg-tertiary-container transition-all shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="material-symbols-outlined text-[22px]">chat</span>
                <span>Calcular Reparo Online via WhatsApp</span>
              </a>
              <span className="text-white/90 text-[13px] font-mono-spec">
                Estimativa: <strong className="text-white">{selectedFault.time}</strong> • <strong className="text-tertiary-fixed">{selectedFault.price}</strong>
              </span>
            </div>
          </div>

          {/* Technical Diagnostic Visual Mockup */}
          <div className="lg:col-span-5 flex flex-col bg-surface/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="font-mono-spec text-mono-spec text-inverse-primary uppercase tracking-wider">
                Status do Laboratório
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-tertiary-container/30 text-tertiary-fixed font-mono-spec text-[11px]">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary-fixed animate-pulse"></span>
                Bancada Ativa
              </span>
            </div>

            <div className="space-y-3 font-body-sm text-[13px]">
              {DIAGNOSTIC_SERVICES.map((service) => (
                <div
                  key={service.id}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <span className="text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary-fixed text-[18px]">
                      {service.icon}
                    </span>
                    {service.title}
                  </span>
                  <span className="text-inverse-primary font-mono-spec">{service.estimatedTime}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 text-center text-outline-variant font-mono-spec text-[11px]">
              Checklist digital entregue via WhatsApp ao final do serviço com garantia formal.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
