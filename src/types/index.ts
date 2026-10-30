export interface Product {
  id: string;
  sku?: string;
  name: string;
  category: string;
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  installments: string;
  image: string;
  alt: string;
  badge: {
    text: string;
    variant: 'secondary' | 'tertiary' | 'primary' | 'surface';
  };
  inStock: boolean;
  warranty?: string;
  condition?: string;
  storage?: string;
  batteryHealth?: string;
  specsSummary?: string;
  whatsappMessage: string;
}

export interface CategoryOption {
  id: string;
  label: string;
  count: number;
}

export interface DiagnosticService {
  id: string;
  title: string;
  estimatedTime: string;
  icon: string;
  startingPrice?: string;
  description: string;
}
