'use client';

import React from 'react';
import Image from 'next/image';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  onSelect?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const formatPrice = (val: number) => {
    return val.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const getBadgeStyle = (variant: Product['badge']['variant']) => {
    switch (variant) {
      case 'tertiary':
        return 'bg-tertiary-fixed text-on-tertiary-fixed';
      case 'secondary':
        return 'bg-secondary-fixed text-on-secondary-fixed';
      case 'primary':
        return 'bg-primary-fixed text-on-primary-fixed';
      case 'surface':
      default:
        return 'bg-surface-container-high text-on-surface';
    }
  };

  const whatsappUrl = `https://wa.me/5583988970601?text=${encodeURIComponent(product.whatsappMessage)}`;

  return (
    <div className="product-item bg-surface-container-lowest rounded-2xl p-5 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group border border-outline-variant/30 hover:border-primary/20">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span
            className={`px-2.5 py-1 rounded-full font-mono-spec text-[11px] font-semibold ${getBadgeStyle(
              product.badge.variant
            )}`}
          >
            {product.badge.text}
          </span>
          <div className="flex items-center gap-1.5 text-tertiary font-mono-spec text-[11px]">
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
            Em Estoque
          </div>
        </div>

        <div
          onClick={() => onSelect?.(product)}
          className="relative w-full aspect-square rounded-xl bg-surface-container-low overflow-hidden mb-4 flex items-center justify-center p-3 group-hover:scale-[1.02] transition-transform cursor-pointer"
        >
          <Image
            src={product.image}
            alt={product.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-contain p-2"
          />
        </div>

        <div className="font-mono-spec text-mono-spec text-on-surface-variant uppercase mb-1">
          {product.categoryLabel}
        </div>
        <h3
          onClick={() => onSelect?.(product)}
          className="font-headline-sm text-[16px] font-bold text-on-surface leading-snug line-clamp-2 cursor-pointer hover:text-primary transition-colors"
        >
          {product.name}
        </h3>
      </div>

      <div className="pt-5 mt-4 border-t border-surface-container">
        <div className="flex items-baseline gap-1">
          <span className="font-label-sm text-[13px] text-on-surface-variant font-medium">R$</span>
          <span className="font-headline-md text-headline-sm font-extrabold text-on-surface tabular-nums">
            {formatPrice(product.price)}
          </span>
          <span className="font-body-sm text-[12px] text-tertiary font-medium">à vista</span>
        </div>
        <div className="font-body-sm text-[12px] text-on-surface-variant pb-4">
          {product.installments}
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-tertiary text-on-tertiary font-label-md text-label-md hover:bg-tertiary-container transition-all shadow-sm active:scale-95"
        >
          <span className="material-symbols-outlined text-[18px]">chat</span>
          <span>Pedir no WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

