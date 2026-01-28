"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { CartItem as CartItemType } from "@/types/cart";
import { useCart } from "@/contexts/cart-context";
import { formatPrice } from "@/lib/utils";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleIncrement = () => {
    updateQuantity(item.product.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.product.id, item.quantity - 1);
    } else {
      removeFromCart(item.product.id);
    }
  };

  const handleRemove = () => {
    removeFromCart(item.product.id);
  };

  return (
    <div className="flex gap-4 p-4 bg-cream/50 rounded-xl">
      {/* Product Image */}
      <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
        <Image
          src={item.product.image}
          alt={item.product.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-maroon truncate">
          {item.product.name}
        </h4>
        {item.size && (
          <p className="text-sm text-maroon/60">Size: {item.size}</p>
        )}
        {item.flavor && (
          <p className="text-sm text-maroon/60">Flavor: {item.flavor}</p>
        )}
        <p className="font-medium text-maroon mt-1">
          {formatPrice(item.product.price)}
        </p>
      </div>

      {/* Quantity Controls */}
      <div className="flex flex-col items-end justify-between">
        <button
          onClick={handleRemove}
          className="p-1 text-maroon/50 hover:text-maroon transition-colors"
          aria-label="Remove item"
        >
          <Trash2 size={16} />
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handleDecrement}
            className="w-7 h-7 flex items-center justify-center rounded-full bg-maroon/10 text-maroon hover:bg-maroon/20 transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus size={14} />
          </button>
          <span className="w-6 text-center font-medium text-maroon">
            {item.quantity}
          </span>
          <button
            onClick={handleIncrement}
            className="w-7 h-7 flex items-center justify-center rounded-full bg-maroon/10 text-maroon hover:bg-maroon/20 transition-colors"
            aria-label="Increase quantity"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
