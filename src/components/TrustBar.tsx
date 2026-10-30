import React from 'react';

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

export const TrustBar: React.FC = () => {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-margin-mobile lg:px-margin py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {TRUST_ITEMS.map((item, index) => (
          <div
            key={index}
            className="bg-surface-container-lowest rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col space-y-3 border border-outline-variant/20 hover:-translate-y-0.5"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.colorClass}`}>
              <span className="material-symbols-outlined text-[26px]">{item.icon}</span>
            </div>
            <h3 className="font-headline-sm text-[17px] font-bold text-on-surface">{item.title}</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

