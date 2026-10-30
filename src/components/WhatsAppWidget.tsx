'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="mb-3 w-72 sm:w-80 bg-surface-container-lowest rounded-2xl p-4 shadow-2xl border border-outline-variant/30 origin-bottom-right"
          >
            <div className="flex items-center justify-between pb-3 border-b border-surface-container">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-tertiary animate-pulse"></span>
                <span className="font-headline-sm text-[14px] font-bold text-on-surface">
                  Globaltech Suporte
                </span>
              </div>
              <motion.button
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="text-on-surface-variant hover:text-on-surface text-[14px] p-1"
              >
                ✕
              </motion.button>
            </div>
            <p className="font-body-sm text-[13px] text-on-surface-variant py-3 leading-relaxed">
              Olá! Como podemos ajudar hoje? Você pode tirar dúvidas sobre seminovos ou solicitar um orçamento de reparo rápido.
            </p>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              href="https://wa.me/5583988970601?text=Ol%C3%A1%2C+estou+no+site+e+gostaria+de+atendimento"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-tertiary text-on-tertiary font-label-md text-label-md font-semibold hover:bg-tertiary-container transition-all shadow-md"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              <span>Iniciar Conversa no WhatsApp</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir chat do WhatsApp"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        className="w-14 h-14 rounded-full bg-tertiary text-on-tertiary shadow-xl hover:shadow-2xl flex items-center justify-center transition-shadow group relative"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-bounce"></span>
        <span className="material-symbols-outlined text-[28px] group-hover:rotate-12 transition-transform">
          chat
        </span>
      </motion.button>
    </div>
  );
};
