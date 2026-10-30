'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  onSearchClick?: () => void;
  searchQuery?: string;
  onSearchChange?: (val: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery = '',
  onSearchChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] transition-all">
      {/* Top micro banner */}
      <div className="bg-surface-container-low border-b border-outline-variant/40 text-on-surface-variant font-label-sm text-label-sm">
        <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin h-10 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="material-symbols-outlined text-primary text-[16px] shrink-0">
              location_on
            </span>
            <span className="truncate">
              Atendimento presencial em Intermares (Cabedelo/PB) &amp; Envios Rápidos | Garantia em todos os produtos
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-tertiary/10 text-tertiary font-mono-spec text-mono-spec">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
              Aberto Agora (Seg-Sex 08h-18h)
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="h-20 max-w-[1440px] mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-4 lg:gap-6">
        <div className="flex items-center gap-6 lg:gap-8 shrink-0">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-9 w-9 rounded-lg overflow-hidden flex items-center justify-center bg-primary/10">
              <Image
                src="/logo.png"
                alt="Globaltech Logo"
                width={36}
                height={36}
                className="object-contain"
                priority
              />
            </div>
            <span className="font-headline-sm text-headline-sm font-bold text-on-surface tracking-tight group-hover:text-primary transition-colors">
              GLOBALTECH
            </span>
          </Link>

          <nav className="hidden xl:flex items-center gap-6">
            <a
              href="#catalogo-produtos"
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors font-medium"
            >
              Catálogo
            </a>
            <a
              href="#catalogo-produtos"
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors font-medium"
            >
              Seminovos
            </a>
            <a
              href="#catalogo-produtos"
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors font-medium"
            >
              Acessórios
            </a>
            <a
              href="#assistencia-tecnica"
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors font-medium"
            >
              Orçamento de Reparo
            </a>
            <a
              href="#onde-estamos"
              className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors font-medium"
            >
              Onde Estamos
            </a>
          </nav>
        </div>

        {/* Search & Actions */}
        <div className="flex items-center gap-3 sm:gap-4 flex-1 justify-end max-w-xl">
          {/* Desktop Search */}
          <div className="relative hidden md:flex items-center w-full max-w-xs lg:max-w-sm">
            <span className="material-symbols-outlined absolute left-3 text-outline text-[18px] pointer-events-none">
              search
            </span>
            <input
              type="text"
              aria-label="Buscar produtos no catálogo"
              value={searchQuery}
              onChange={(e) => onSearchChange?.(e.target.value)}
              placeholder="Buscar iPhone, fones, carregadores..."
              className="w-full h-10 pl-9 pr-12 bg-surface-container-lowest border border-outline-variant/60 rounded-xl font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
            />
            <kbd className="absolute right-2.5 px-1.5 py-0.5 text-[10px] font-mono-spec text-on-surface-variant bg-surface-container-high rounded border border-outline-variant/50 pointer-events-none">
              ⌘K
            </kbd>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Consultant badge */}
            <div className="hidden lg:flex items-center gap-2 pl-2 border-l border-outline-variant/40">
              <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-surface-container-high shrink-0">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMrB9Knj6TvHJHr43E4uwjtxnNfzs8Tw4QefMer3mN6zPB09b433HIrYYE3xzrPIFtnUyjchS48yysNZnlPT-yzVBaM_imeq5AtwEBE6ijOc9Pmje9ROzVYUftkbZ68uOxWgKR348vq89IRY7gf5uVd4MvKRx0Hk1V2xsoaz_X30P03vv8igilGGmS1EYI3dk6fdIS0RbA9V5CVSz_VcU22hOjRb5dqaialWVrD7hN"
                  alt="Consultor Especialista"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="hidden 2xl:flex flex-col text-left">
                <span className="font-label-sm text-[11px] leading-tight text-on-surface font-semibold">
                  Consultoria
                </span>
                <span className="text-[10px] text-tertiary leading-tight font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary inline-block"></span>
                  Online
                </span>
              </div>
            </div>

            {/* Direct WhatsApp button */}
            <a
              href="https://wa.me/5583988970601?text=Ol%C3%A1%2C+gostaria+de+falar+com+um+consultor+da+Globaltech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com consultor via WhatsApp"
              className="inline-flex items-center gap-2 h-10 px-3.5 sm:px-4 rounded-xl bg-tertiary text-on-tertiary font-label-md text-label-md hover:bg-tertiary-container transition-all shadow-sm active:scale-95 shrink-0"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span className="hidden sm:inline">Falar com Consultor</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-on-surface hover:bg-surface-container transition-colors"
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-lowest border-b border-outline-variant/30 px-margin-mobile py-4 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {/* Mobile Search inside drawer */}
            <div className="relative flex items-center w-full mb-2">
              <span className="material-symbols-outlined absolute left-3 text-outline text-[18px]">
                search
              </span>
              <input
                type="text"
                aria-label="Buscar produtos no catálogo"
                value={searchQuery}
                onChange={(e) => onSearchChange?.(e.target.value)}
                placeholder="Buscar no catálogo..."
                className="w-full h-11 pl-9 pr-3 bg-surface-container-low border border-outline-variant/50 rounded-xl font-body-sm text-body-sm text-on-surface"
              />
            </div>
            <a
              href="#catalogo-produtos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-on-surface font-label-md hover:bg-surface-container transition-colors"
            >
              Catálogo de Produtos
            </a>
            <a
              href="#catalogo-produtos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-on-surface font-label-md hover:bg-surface-container transition-colors"
            >
              Seminovos Certificados
            </a>
            <a
              href="#catalogo-produtos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-on-surface font-label-md hover:bg-surface-container transition-colors"
            >
              Acessórios Premium
            </a>
            <a
              href="#assistencia-tecnica"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-on-surface font-label-md hover:bg-surface-container transition-colors"
            >
              Orçamento de Reparo &amp; Bancada
            </a>
            <a
              href="#onde-estamos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-on-surface font-label-md hover:bg-surface-container transition-colors"
            >
              Onde Estamos (Intermares)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
