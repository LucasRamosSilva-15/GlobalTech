import React from 'react';
import Image from 'next/image';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin py-8 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Typographic Focus */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-primary font-mono-spec text-mono-spec">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
            <span className="font-semibold uppercase tracking-wider">Unidade Cabedelo • Intermares</span>
          </div>

          <h1 className="font-display-hero text-headline-lg-mobile lg:text-display-hero text-on-surface font-extrabold tracking-tight">
            Tecnologia de ponta, seminovos selecionados e{' '}
            <span className="text-primary underline decoration-primary/20 decoration-wavy decoration-2">
              assistência técnica
            </span>
            .
          </h1>

          <p className="font-body-lg text-body-md lg:text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Mais de 30 pontos de inspeção rigorosa, garantia documentada e atendimento exclusivo em
            Intermares e João Pessoa. Transparência balcão a balcão para seu smartphone e acessórios.
          </p>

          {/* Dual Action Buttons (stacked mobile, inline on desktop) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto">
            <a
              href="#catalogo-produtos"
              className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
            >
              <span>Explorar Catálogo</span>
              <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
            </a>
            <a
              href="#assistencia-tecnica"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-container transition-all shadow-sm border border-outline-variant/60 active:scale-95 text-center"
            >
              <span className="material-symbols-outlined text-primary text-[20px]">build_circle</span>
              <span>Solicitar Orçamento de Conserto</span>
            </a>
          </div>

          {/* Social Proof Micro Badge with WCAG AA compliant contrast */}
          <div className="flex flex-wrap items-center gap-4 pt-4 text-on-surface-variant">
            <div className="flex items-center gap-1.5 font-label-md text-label-md font-bold">
              <span
                className="material-symbols-outlined text-amber-600 text-[20px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span className="text-on-surface">4.9/5</span>
              <span className="font-normal text-on-surface-variant text-body-sm">(Google Reviews)</span>
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-outline-variant hidden sm:inline-block"></span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              +2.400 clientes atendidos na Paraíba
            </span>
          </div>
        </div>

        {/* Right Column: Visual Device Showcase & Glassmorphic Highlights */}
        <div className="lg:col-span-5 relative w-full flex items-center justify-center">
          {/* Ambient Decorative Halo */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 via-secondary-container/15 to-tertiary-container/10 rounded-3xl blur-2xl pointer-events-none"></div>

          <div className="relative w-full bg-surface-container-lowest rounded-3xl p-6 lg:p-8 shadow-xl flex flex-col items-center border border-outline-variant/30">
            {/* Top Hardware Status Bar */}
            <div className="w-full flex items-center justify-between pb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-tertiary"></span>
                <span className="font-mono-spec text-mono-spec text-on-surface font-semibold uppercase">
                  Globaltech Certified
                </span>
              </div>
              <span className="font-mono-spec text-mono-spec px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-medium">
                Lote Inspecionado
              </span>
            </div>

            {/* Smartphone Hero Visual */}
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-surface-container flex items-center justify-center">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2aBYBTygcRHn0us_21h0Z_e3KahUqek5xyudzJ7wAFoRNGDzJOtPLvvwuWD6nUrw2QwP6w7B-thYmW8sPvpp-jrmgcKWYRSS-9nox6oxLuO04s594G1zWFgFOg_s75mfHCjzg6Qn0Kffrl5zaMOYC2t3AyUo-7T5EkJAmgQeor14VruydUiePypY_ad0B9-F_LG-G62n8ej2RYdwEr5pBmpjvvYzNGMtgRSUmk_2w"
                alt="Apple iPhone Pro Seminovo Certificado Globaltech"
                fill
                priority
                className="object-cover"
              />

              {/* Glassmorphic Overlay Badges */}
              <div className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 text-on-surface text-[12px] font-semibold">
                <span className="material-symbols-outlined text-primary text-[16px]">verified_user</span>
                Garantia 1 Ano
              </div>

              <div className="absolute bottom-4 left-4 bg-surface-container-lowest/90 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-sm flex items-center gap-2 text-on-surface text-[12px] font-medium">
                <span className="material-symbols-outlined text-tertiary text-[18px]">
                  battery_charging_full
                </span>
                <div>
                  <div className="font-bold text-[11px] leading-tight text-on-surface">Bateria 100%</div>
                  <div className="text-[10px] text-tertiary leading-tight font-medium">Ciclos de fábrica</div>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 text-on-surface text-[11px] font-medium">
                <span className="material-symbols-outlined text-secondary text-[16px]">local_shipping</span>
                Pronta Entrega Cabedelo
              </div>
            </div>

            {/* Bottom Micro Details */}
            <div className="w-full pt-5 flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-tertiary text-[16px]">check_circle</span>
                Procedência Anatel
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-primary text-[16px]">lock</span>
                Checklist 30 Itens
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-outline text-[16px]">receipt_long</span>
                NFe Emitida
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
