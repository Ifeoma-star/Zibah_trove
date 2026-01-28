"use client";

import { useState } from "react";
import Image from "next/image";
import { Minus, Plus, ShoppingCart, Check } from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";
import { useCart } from "@/contexts/cart-context";
import { formatPrice } from "@/lib/utils";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const { addToCart, openCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | undefined>();
  const [selectedFlavor, setSelectedFlavor] = useState<string | undefined>();
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [isAdded, setIsAdded] = useState(false);

  if (!product) return null;

  const currentPrice = selectedSize && product.sizes
    ? product.sizes.find((s) => s.name === selectedSize)?.price ?? product.price
    : product.price;

  const handleAddToCart = () => {
    addToCart({
      product: { ...product, price: currentPrice },
      quantity,
      size: selectedSize,
      flavor: selectedFlavor,
      specialInstructions: specialInstructions || undefined,
    });

    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
      openCart();
      // Reset state
      setQuantity(1);
      setSelectedSize(undefined);
      setSelectedFlavor(undefined);
      setSpecialInstructions("");
    }, 500);
  };

  const handleClose = () => {
    onClose();
    setQuantity(1);
    setSelectedSize(undefined);
    setSelectedFlavor(undefined);
    setSpecialInstructions("");
    setIsAdded(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size="xl">
      <div className="grid md:grid-cols-2 gap-0">
        {/* Product Image */}
        <div className="relative aspect-square md:aspect-auto md:h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
          {product.featured && (
            <span className="absolute top-4 left-4 bg-maroon text-cream text-xs font-medium px-3 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>

        {/* Product Details */}
        <div className="p-6 md:p-8 flex flex-col">
          <div className="flex-1 space-y-6">
            {/* Header */}
            <div>
              <span className="text-maroon/60 text-sm uppercase tracking-wider">
                {product.category}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-maroon mt-1">
                {product.name}
              </h2>
              <p className="text-maroon font-medium italic mt-2">
                &ldquo;{product.tagline}&rdquo;
              </p>
            </div>

            {/* Description */}
            <p className="text-maroon/70 leading-relaxed">
              {product.description}
            </p>

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <label className="block text-sm font-medium text-maroon mb-3">
                  Select Size
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size.name}
                      onClick={() => setSelectedSize(size.name)}
                      className={`p-3 rounded-xl border-2 text-left transition-all ${
                        selectedSize === size.name
                          ? "border-maroon bg-maroon/5"
                          : "border-maroon/20 hover:border-maroon/40"
                      }`}
                    >
                      <div className="font-medium text-maroon">{size.name}</div>
                      <div className="text-sm text-maroon/60">
                        {formatPrice(size.price)}
                        {size.serves && ` • ${size.serves}`}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Flavor Selection */}
            {product.flavors && product.flavors.length > 0 && (
              <div>
                <label className="block text-sm font-medium text-maroon mb-3">
                  Select Flavor
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.flavors.map((flavor) => (
                    <button
                      key={flavor}
                      onClick={() => setSelectedFlavor(flavor)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedFlavor === flavor
                          ? "bg-maroon text-cream"
                          : "bg-maroon/10 text-maroon hover:bg-maroon/20"
                      }`}
                    >
                      {flavor}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Special Instructions */}
            <div>
              <label className="block text-sm font-medium text-maroon mb-2">
                Special Instructions (Optional)
              </label>
              <textarea
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                placeholder="Any dietary requirements, allergies, or special requests..."
                className="w-full p-3 rounded-xl border-2 border-maroon/20 focus:border-maroon focus:ring-0 outline-none resize-none h-20 text-maroon placeholder:text-maroon/40"
              />
            </div>
          </div>

          {/* Add to Cart Section */}
          <div className="mt-6 pt-6 border-t border-maroon/10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-bold text-maroon">
                {formatPrice(currentPrice * quantity)}
              </span>

              {/* Quantity Selector */}
              <div className="flex items-center gap-3 bg-cream rounded-full p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-maroon hover:bg-maroon/10 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={18} />
                </button>
                <span className="w-8 text-center font-semibold text-maroon text-lg">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-maroon hover:bg-maroon/10 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            <Button
              onClick={handleAddToCart}
              disabled={isAdded}
              className={`w-full h-14 text-lg font-medium transition-all ${
                isAdded
                  ? "bg-green-600 hover:bg-green-600"
                  : "bg-maroon hover:bg-maroon/90"
              } text-cream`}
            >
              {isAdded ? (
                <>
                  <Check className="mr-2" size={20} />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingCart className="mr-2" size={20} />
                  Add to Cart
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
