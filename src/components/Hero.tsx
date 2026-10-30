'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin py-8 lg:py-16 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high text-primary font-mono-spec text-mono-spec shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
            <span className="font-semibold uppercase tracking-wider">Unidade Cabedelo • Intermares</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display-hero text-headline-lg-mobile lg:text-display-hero text-on-surface font-extrabold tracking-tight"
          >
            Tecnologia de ponta, seminovos selecionados e{' '}
            <span className="text-primary">
              assistência técnica
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="font-body-lg text-body-md lg:text-body-lg text-on-surface-variant max-w-2xl leading-relaxed"
          >
            Mais de 30 pontos de inspeção rigorosa, garantia documentada e atendimento exclusivo em
            Intermares e João Pessoa. Transparência balcão a balcão para seu smartphone e acessórios.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto"
          >
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              href="#catalogo-produtos"
              className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container shadow-md hover:shadow-xl transition-all text-center"
            >
              <span>Explorar Catálogo</span>
              <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              href="#assistencia-tecnica"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-container transition-all shadow-sm border border-outline-variant/60 text-center"
            >
              <span className="material-symbols-outlined text-primary text-[20px]">build_circle</span>
              <span>Solicitar Orçamento de Conserto</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.52 }}
            className="flex flex-wrap items-center gap-4 pt-4 text-on-surface-variant"
          >
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
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative w-full flex items-center justify-center">
          <motion.div
            animate={{
              scale: [1, 1.06, 1],
              opacity: [0.55, 0.85, 0.55],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute -inset-4 bg-gradient-to-tr from-primary/15 via-secondary-container/20 to-tertiary-container/15 rounded-3xl blur-2xl pointer-events-none"
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="relative w-full bg-surface-container-lowest rounded-3xl p-6 lg:p-8 shadow-xl flex flex-col items-center border border-outline-variant/30 transition-shadow duration-300 hover:shadow-2xl"
          >
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

            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-surface-container flex items-center justify-center group">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2aBYBTygcRHn0us_21h0Z_e3KahUqek5xyudzJ7wAFoRNGDzJOtPLvvwuWD6nUrw2QwP6w7B-thYmW8sPvpp-jrmgcKWYRSS-9nox6oxLuO04s594G1zWFgFOg_s75mfHCjzg6Qn0Kffrl5zaMOYC2t3AyUo-7T5EkJAmgQeor14VruydUiePypY_ad0B9-F_LG-G62n8ej2RYdwEr5pBmpjvvYzNGMtgRSUmk_2w"
                alt="Apple iPhone Pro Seminovo Certificado Globaltech"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              <motion.div
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 text-on-surface text-[12px] font-semibold"
              >
                <span className="material-symbols-outlined text-primary text-[16px]">verified_user</span>
                Garantia 1 Ano
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute bottom-4 left-4 bg-surface-container-lowest/90 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-sm flex items-center gap-2 text-on-surface text-[12px] font-medium"
              >
                <span className="material-symbols-outlined text-tertiary text-[18px]">
                  battery_charging_full
                </span>
                <div>
                  <div className="font-bold text-[11px] leading-tight text-on-surface">Bateria 100%</div>
                  <div className="text-[10px] text-tertiary leading-tight font-medium">Ciclos de fábrica</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="absolute bottom-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 text-on-surface text-[11px] font-medium"
              >
                <span className="material-symbols-outlined text-secondary text-[16px]">local_shipping</span>
                Pronta Entrega Cabedelo
              </motion.div>
            </div>

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
          </motion.div>
        </div>
      </div>
    </section>
  );
};
