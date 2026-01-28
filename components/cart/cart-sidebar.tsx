"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { SlideOver } from "@/components/ui/slide-over";
import { Button } from "@/components/ui/button";
import { CartItem } from "./cart-item";
import { useCart } from "@/contexts/cart-context";
import { formatPrice } from "@/lib/utils";

export function CartSidebar() {
  const { cart, isCartOpen, closeCart, itemCount } = useCart();

  return (
    <SlideOver
      isOpen={isCartOpen}
      onClose={closeCart}
      title={`Your Cart (${itemCount})`}
    >
      {cart.items.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full p-8 text-center">
          <div className="w-20 h-20 rounded-full bg-maroon/10 flex items-center justify-center mb-4">
            <ShoppingBag className="w-10 h-10 text-maroon/50" />
          </div>
          <h3 className="font-serif text-xl font-semibold text-maroon mb-2">
            Your cart is empty
          </h3>
          <p className="text-maroon/60 mb-6">
            Looks like you haven&apos;t added any delicious treats yet.
          </p>
          <Button onClick={closeCart} className="bg-maroon hover:bg-maroon/90 text-cream">
            Start Shopping
          </Button>
        </div>
      ) : (
        <div className="flex flex-col h-full">
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {cart.items.map((item) => (
              <CartItem key={`${item.product.id}-${item.size}-${item.flavor}`} item={item} />
            ))}
          </div>

          {/* Cart Summary */}
          <div className="border-t border-maroon/10 p-6 bg-white space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-maroon/70">Subtotal</span>
                <span className="text-maroon">{formatPrice(cart.subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-maroon/70">Delivery Fee</span>
                <span className="text-maroon">{formatPrice(cart.deliveryFee)}</span>
              </div>
              <div className="flex justify-between font-semibold text-lg pt-2 border-t border-maroon/10">
                <span className="text-maroon">Total</span>
                <span className="text-maroon">{formatPrice(cart.total)}</span>
              </div>
            </div>

            <div className="space-y-3">
              <Button
                asChild
                className="w-full bg-maroon hover:bg-maroon/90 text-cream h-12"
                onClick={closeCart}
              >
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>
              <Button
                variant="outline"
                className="w-full border-maroon text-maroon hover:bg-maroon/5 h-12"
                onClick={closeCart}
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        </div>
      )}
    </SlideOver>
  );
}
