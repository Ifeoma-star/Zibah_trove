"use client";

import { ReactNode } from "react";
import { CartProvider } from "@/contexts/cart-context";
import { CartSidebar } from "@/components/cart/cart-sidebar";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <CartProvider>
      {children}
      <CartSidebar />
    </CartProvider>
  );
}
