"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, ArrowLeft } from "lucide-react";
import { useCart } from "@/contexts/cart-context";
import { formatPrice } from "@/lib/utils";

export function OrderSummary() {
  const { cart, itemCount } = useCart();

  if (cart.items.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
        <div className="text-center py-8">
          <div className="w-16 h-16 rounded-full bg-maroon/10 flex items-center justify-center mx-auto mb-4">
            <ShoppingBag className="w-8 h-8 text-maroon/50" />
          </div>
          <h3 className="font-serif text-lg font-semibold text-maroon mb-2">
            Your cart is empty
          </h3>
          <p className="text-maroon/60 mb-4">
            Add some delicious items to proceed
          </p>
          <Link
            href="/cakes"
            className="inline-flex items-center gap-2 text-maroon font-medium hover:underline"
          >
            <ArrowLeft size={16} />
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm sticky top-24">
      <h2 className="font-serif text-xl font-semibold text-maroon mb-6">
        Order Summary ({itemCount} {itemCount === 1 ? "item" : "items"})
      </h2>

      {/* Cart Items */}
      <div className="space-y-4 mb-6 max-h-80 overflow-y-auto">
        {cart.items.map((item) => (
          <div
            key={`${item.product.id}-${item.size}-${item.flavor}`}
            className="flex gap-3"
          >
            <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
              <Image
                src={item.product.image}
                alt={item.product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-maroon text-sm truncate">
                {item.product.name}
              </h4>
              {item.size && (
                <p className="text-xs text-maroon/60">{item.size}</p>
              )}
              <div className="flex justify-between items-center mt-1">
                <span className="text-xs text-maroon/60">
                  Qty: {item.quantity}
                </span>
                <span className="text-sm font-medium text-maroon">
                  {formatPrice(item.product.price * item.quantity)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="border-t border-maroon/10 pt-4 space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-maroon/70">Subtotal</span>
          <span className="text-maroon">{formatPrice(cart.subtotal)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-maroon/70">Delivery Fee</span>
          <span className="text-maroon">{formatPrice(cart.deliveryFee)}</span>
        </div>
        <div className="flex justify-between font-semibold text-lg pt-3 border-t border-maroon/10">
          <span className="text-maroon">Total</span>
          <span className="text-maroon">{formatPrice(cart.total)}</span>
        </div>
      </div>

      {/* Edit Cart Link */}
      <Link
        href="/"
        className="flex items-center justify-center gap-2 text-maroon/70 hover:text-maroon text-sm mt-6 transition-colors"
      >
        <ArrowLeft size={14} />
        Continue Shopping
      </Link>
    </div>
  );
}
