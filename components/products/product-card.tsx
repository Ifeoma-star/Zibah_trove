"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <div
      onClick={() => onSelect(product)}
      className="group bg-cream rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Quick add button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect(product);
          }}
          className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-cream text-maroon flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-white shadow-lg"
          aria-label="Add to cart"
        >
          <ShoppingCart size={20} />
        </button>

        {/* Featured badge */}
        {product.featured && (
          <span className="absolute top-4 left-4 bg-maroon text-cream text-xs font-medium px-3 py-1 rounded-full">
            Featured
          </span>
        )}

        {/* Category tag on hover */}
        <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <span className="inline-block bg-cream text-maroon text-xs font-medium px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-serif text-xl font-semibold text-maroon group-hover:text-maroon/80 transition-colors">
            {product.name}
          </h3>
          <span className="font-bold text-maroon whitespace-nowrap">
            {formatPrice(product.price)}
          </span>
        </div>
        <p className="text-maroon font-medium text-sm italic">
          &ldquo;{product.tagline}&rdquo;
        </p>
        <p className="text-maroon/60 text-sm leading-relaxed line-clamp-2">
          {product.description}
        </p>
      </div>
    </div>
  );
}
