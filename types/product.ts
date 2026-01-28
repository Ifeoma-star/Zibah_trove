export interface ProductSize {
  name: string;
  price: number;
  serves?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  tagline: string;
  image: string;
  category: string;
  price: number;
  sizes?: ProductSize[];
  flavors?: string[];
  featured?: boolean;
  inStock?: boolean;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  slug: string;
}
