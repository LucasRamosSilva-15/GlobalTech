'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/30 text-on-surface-variant overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1440px] mx-auto px-margin-mobile lg:px-margin pt-16 pb-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-8 w-8 rounded-lg overflow-hidden flex items-center justify-center bg-primary/10">
                <Image
                  src="/logoGrande2.png"
                  alt="Globaltech Brand Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="font-headline-sm text-headline-sm font-bold text-on-surface tracking-tight">
                GLOBALTECH
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
              Especialistas certificados em dispositivos premium e seminovos em Cabedelo e João Pessoa. Transparência técnica, peças originais e garantia estendida em balcão.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-low border border-outline-variant/40 text-[11px] font-mono-spec text-on-surface">
                <span className="material-symbols-outlined text-primary text-[14px]">verified</span>
                Garantia Balcão 90 Dias
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-low border border-outline-variant/40 text-[11px] font-mono-spec text-on-surface">
                <span className="material-symbols-outlined text-tertiary text-[14px]">check_circle</span>
                Checklist 30 Etapas
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-label-md text-label-md font-semibold text-on-surface uppercase tracking-wider mb-4">
              Categorias
            </h4>
            <ul className="space-y-2.5 font-body-sm text-body-sm">
              <li>
                <a className="hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200" href="#catalogo-produtos">
                  iPhones Seminovos
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200" href="#catalogo-produtos">
                  MacBooks &amp; iPads
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200" href="#catalogo-produtos">
                  Carregadores &amp; Cabos
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200" href="#catalogo-produtos">
                  Capas &amp; Películas 3D
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200" href="#assistencia-tecnica">
                  Troca de Tela &amp; Bateria
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-label-md text-label-md font-semibold text-on-surface uppercase tracking-wider mb-4">
              Suporte
            </h4>
            <ul className="space-y-2.5 font-body-sm text-body-sm">
              <li>
                <a
                  className="hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200"
                  href="https://wa.me/5583988970601?text=Ol%C3%A1%2C+gostaria+de+consultar+minha+ordem+de+servi%C3%A7o"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Status da Ordem de Serviço
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200" href="#assistencia-tecnica">
                  Política de Garantia
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200" href="#onde-estamos">
                  Agendamento Técnico
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200"
                  href="https://wa.me/5583988970601"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Central de Dúvidas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-label-md text-label-md font-semibold text-on-surface uppercase tracking-wider mb-4">
              Unidade Cabedelo
            </h4>
            <div className="space-y-3 font-body-sm text-body-sm">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">
                  store
                </span>
                <span>
                  Rua Seleno Gomes Maropo, 44
                  <br />
                  Intermares, Cabedelo - PB
                  <br />
                  CEP 58102-142
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary text-[18px] shrink-0">
                  call
                </span>
                <a
                  className="font-medium text-on-surface hover:text-primary transition-colors"
                  href="https://wa.me/5583988970601"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +55 83 98897-0601
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-outline text-[18px] shrink-0">
                  schedule
                </span>
                <span>Segunda a Sexta: 08h às 18h</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4 font-body-sm text-body-sm text-outline">
          <p>© {new Date().getFullYear()} Globaltech Cabedelo. CNPJ devidamente registrado. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6 font-label-sm text-label-sm">
            <Link className="hover:text-on-surface transition-colors" href="#">
              Termos de Uso
            </Link>
            <Link className="hover:text-on-surface transition-colors" href="#">
              Privacidade
            </Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};
