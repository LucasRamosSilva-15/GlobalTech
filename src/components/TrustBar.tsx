'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

const TRUST_ITEMS = [
  {
    icon: 'verified',
    colorClass: 'bg-primary-fixed text-primary',
    title: 'Garantia Real',
    description:
      'Aparelhos e reparos com garantia total de procedência documentada e suporte local direto em balcão.',
  },
  {
    icon: 'memory',
    colorClass: 'bg-secondary-fixed text-secondary',
    title: 'Bancada Especializada',
    description:
      'Diagnóstico computadorizado e técnicos certificados para a linha Apple e modelos premium Android.',
  },
  {
    icon: 'store',
    colorClass: 'bg-tertiary-fixed text-tertiary',
    title: 'Pronta Entrega Local',
    description:
      'Retirada imediata em nossa loja física em Intermares ou envio expresso seguro para Cabedelo e JP.',
  },
  {
    icon: 'format_image_left',
    colorClass: 'bg-surface-container-high text-on-surface',
    title: 'Compra 100% Segura',
    description:
      'Mais de 30 testes rigorosos de tela, câmeras, biometria e conectividade antes de ser entregue.',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export const TrustBar: React.FC = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin py-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {TRUST_ITEMS.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -6, scale: 1.015 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow flex flex-col space-y-3 border border-outline-variant/30 cursor-default group"
          >
            <motion.div
              whileHover={{ rotate: [0, -8, 8, 0] }}
              transition={{ duration: 0.5 }}
              className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.colorClass} shadow-sm`}
            >
              <span className="material-symbols-outlined text-[26px]">{item.icon}</span>
            </motion.div>
            <h3 className="font-headline-sm text-[17px] font-bold text-on-surface group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
