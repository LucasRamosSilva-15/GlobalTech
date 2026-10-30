'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onSearchClick?: () => void;
  searchQuery?: string;
  onSearchChange?: (val: string) => void;
}

const NAV_LINKS = [
  { href: '/#catalogo-produtos', label: 'Catálogo & Seminovos', icon: 'devices', id: 'catalogo-produtos' },
  { href: '/catalogo-tabela', label: 'Tabela de Preços', icon: 'table_chart', id: 'catalogo-tabela', badge: 'Comparar' },
  { href: '/#assistencia-tecnica', label: 'Assistência Técnica', icon: 'build_circle', id: 'assistencia-tecnica' },
  { href: '/#onde-estamos', label: 'Onde Estamos', icon: 'storefront', id: 'onde-estamos' },
];

export const Header: React.FC<HeaderProps> = ({
  searchQuery = '',
  onSearchChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const pathname = usePathname();
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (pathname === '/') {
        const sections = ['catalogo-produtos', 'assistencia-tecnica', 'onde-estamos'];
        const scrollPosition = window.scrollY + 200;

        for (const sectionId of sections) {
          const el = document.getElementById(sectionId);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(sectionId);
              return;
            }
          }
        }
        if (window.scrollY < 300) {
          setActiveSection('');
        }
      } else if (pathname === '/catalogo-tabela') {
        setActiveSection('catalogo-tabela');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const targetId = window.location.hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          const headerOffset = 110;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }, 150);
      }
    }
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    if (pathname === '/' && id !== 'catalogo-tabela') {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 110;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
        window.history.pushState(null, '', `#${id}`);
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] as const }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-surface/95 backdrop-blur-xl shadow-[0_4px_25px_rgba(0,0,0,0.07)] border-b border-outline-variant/30'
          : 'bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-transparent'
        }`}
    >
      <div className="bg-surface-container-low border-b border-outline-variant/30 text-on-surface-variant font-label-sm text-label-sm">
        <div className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin h-9 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="material-symbols-outlined text-primary text-[15px] shrink-0">
              location_on
            </span>
            <span className="truncate text-[12px] sm:text-[13px]">
              Loja física em Intermares (Cabedelo/PB) • Garantia formal balcão &amp; Retirada imediata
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-tertiary/10 text-tertiary font-mono-spec text-[11px] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
              Bancada Técnica Aberta
            </span>
          </div>
        </div>
      </div>

      <div className="h-20 max-w-[1440px] mx-auto px-margin-mobile lg:px-margin flex items-center justify-between gap-4 lg:gap-6">
        <div className="flex items-center gap-5 lg:gap-7 shrink-0">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.08, rotate: -3 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="relative h-10 w-10 rounded-xl overflow-hidden flex items-center justify-center bg-primary/10 shadow-sm border border-primary/20"
            >
              <Image
                src="/logoGrande2.png"
                alt="Globaltech Logo"
                width={36}
                height={36}
                className="object-contain"
                priority
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-headline-sm text-[18px] sm:text-headline-sm font-black text-on-surface tracking-tight group-hover:text-primary transition-colors leading-none">
                GLOBALTECH
              </span>
              <span className="text-[10px] font-mono-spec text-on-surface-variant font-medium tracking-widest uppercase mt-0.5">
                Cabedelo • PB
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 bg-surface-container-low/70 p-1 rounded-2xl border border-outline-variant/30">
            {NAV_LINKS.map((link) => {
              const isActive =
                (pathname === '/catalogo-tabela' && link.id === 'catalogo-tabela') ||
                (pathname === '/' && activeSection === link.id);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={`relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-[13px] font-label-md font-medium transition-all ${isActive
                      ? 'text-primary font-semibold bg-surface-container-lowest shadow-sm'
                      : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container/50'
                    }`}
                >
                  <span className={`material-symbols-outlined text-[16px] ${isActive ? 'text-primary' : 'text-outline'}`}>
                    {link.icon}
                  </span>
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-mono-spec font-bold bg-primary/15 text-primary">
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 flex-1 justify-end max-w-xl">
          <div className="relative hidden md:flex items-center w-full max-w-xs lg:max-w-sm">
            <span className="material-symbols-outlined absolute left-3 text-outline text-[18px] pointer-events-none">
              search
            </span>
            <input
              ref={searchInputRef}
              type="text"
              aria-label="Buscar produtos no catálogo"
              value={searchQuery}
              onChange={(e) => onSearchChange?.(e.target.value)}
              placeholder="Buscar modelo, memória, acessório..."
              className="w-full h-10 pl-9 pr-14 bg-surface-container-lowest border border-outline-variant/60 rounded-xl font-body-sm text-[13px] text-on-surface placeholder:text-outline focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
            />
            {searchQuery ? (
              <button
                onClick={() => onSearchChange?.('')}
                className="absolute right-3 text-outline hover:text-on-surface text-[14px]"
              >
                ✕
              </button>
            ) : (
              <kbd className="absolute right-2.5 px-1.5 py-0.5 text-[10px] font-mono-spec text-on-surface-variant bg-surface-container-high rounded border border-outline-variant/50 pointer-events-none select-none">
                ⌘K
              </kbd>
            )}
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <div className="hidden xl:flex items-center gap-2 pl-2 border-l border-outline-variant/40">
              <div className="relative w-8 h-8 rounded-full overflow-hidden ring-2 ring-surface-container-high shrink-0">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMrB9Knj6TvHJHr43E4uwjtxnNfzs8Tw4QefMer3mN6zPB09b433HIrYYE3xzrPIFtnUyjchS48yysNZnlPT-yzVBaM_imeq5AtwEBE6ijOc9Pmje9ROzVYUftkbZ68uOxWgKR348vq89IRY7gf5uVd4MvKRx0Hk1V2xsoaz_X30P03vv8igilGGmS1EYI3dk6fdIS0RbA9V5CVSz_VcU22hOjRb5dqaialWVrD7hN"
                  alt="Consultor Especialista"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-label-sm text-[11px] leading-tight text-on-surface font-semibold">
                  Consultoria
                </span>
                <span className="text-[10px] text-tertiary leading-tight font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary inline-block animate-pulse"></span>
                  Online
                </span>
              </div>
            </div>

            <motion.a
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 450, damping: 25 }}
              href="https://wa.me/5583988970601?text=Ol%C3%A1%2C+gostaria+de+falar+com+um+consultor+da+Globaltech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com consultor via WhatsApp"
              className="inline-flex items-center gap-2 h-10 px-3.5 sm:px-4 rounded-xl bg-tertiary text-on-tertiary font-label-md text-[13px] font-semibold hover:bg-tertiary-container transition-colors shadow-sm shrink-0"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span className="hidden sm:inline">WhatsApp</span>
            </motion.a>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-on-surface hover:bg-surface-container transition-colors border border-outline-variant/40 flex items-center justify-center w-10 h-10"
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileMenuOpen ? 'close' : 'menu'}
                  initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
                  transition={{ duration: 0.18 }}
                  className="material-symbols-outlined text-[24px] select-none"
                >
                  {mobileMenuOpen ? 'close' : 'menu'}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-nav-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: {
                height: { duration: 0.32, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.25, ease: 'easeOut' },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
                opacity: { duration: 0.2, ease: 'easeIn' },
              },
            }}
            className="lg:hidden overflow-hidden bg-surface-container-lowest border-b border-outline-variant/30 shadow-2xl"
          >
            <div className="px-margin-mobile py-4 flex flex-col space-y-2">
              <div className="relative flex items-center w-full mb-2">
                <span className="material-symbols-outlined absolute left-3 text-outline text-[18px]">
                  search
                </span>
                <input
                  type="text"
                  aria-label="Buscar produtos no catálogo"
                  value={searchQuery}
                  onChange={(e) => onSearchChange?.(e.target.value)}
                  placeholder="Buscar modelo, acessório..."
                  className="w-full h-11 pl-9 pr-3 bg-surface-container-low border border-outline-variant/50 rounded-xl font-body-sm text-[13px] text-on-surface focus:outline-none focus:border-primary"
                />
              </div>

              {NAV_LINKS.map((link) => {
                const isActive =
                  (pathname === '/catalogo-tabela' && link.id === 'catalogo-tabela') ||
                  (pathname === '/' && activeSection === link.id);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      handleNavClick(e, link.href, link.id);
                    }}
                    className={`flex items-center justify-between px-3.5 py-3 rounded-xl font-label-md text-[14px] transition-colors ${isActive
                        ? 'bg-primary/10 text-primary font-bold'
                        : 'text-on-surface hover:bg-surface-container font-medium'
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`material-symbols-outlined text-[20px] ${isActive ? 'text-primary' : 'text-outline'}`}>
                        {link.icon}
                      </span>
                      <span>{link.label}</span>
                    </div>
                    {link.badge && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono-spec font-bold bg-primary text-on-primary">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                );
              })}

              <div className="pt-2 border-t border-surface-container">
                <a
                  href="https://wa.me/5583988970601?text=Ol%C3%A1%2C+gostaria+de+falar+com+um+consultor+da+Globaltech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-tertiary text-on-tertiary font-label-md text-[14px] font-semibold hover:bg-tertiary-container transition-all shadow-md"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>Falar com Consultor no WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
