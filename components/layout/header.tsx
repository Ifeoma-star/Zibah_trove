"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/cart-context";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openCart, itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-maroon/10 bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/80">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-maroon text-cream font-serif font-bold text-xl">
            Z
          </div>
          <div className="hidden sm:block">
            <h1 className="font-serif text-xl font-bold text-maroon">
              {SITE_CONFIG.name}
            </h1>
            <p className="text-xs text-maroon/60">Baked with Love</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-maroon",
                pathname === link.href
                  ? "text-maroon border-b-2 border-maroon pb-1"
                  : "text-maroon/70"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Cart & Order Button */}
        <div className="flex items-center gap-3">
          {/* Cart Button */}
          <button
            onClick={openCart}
            className="relative p-2 rounded-full hover:bg-maroon/10 transition-colors text-maroon"
            aria-label="Open cart"
          >
            <ShoppingCart size={24} />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-maroon text-cream text-xs font-bold rounded-full flex items-center justify-center">
                {itemCount > 9 ? "9+" : itemCount}
              </span>
            )}
          </button>

          {/* Order Button - Desktop */}
          <div className="hidden md:block">
            <Button asChild className="bg-maroon hover:bg-maroon/90 text-cream">
              <Link href="/cakes">Order Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-maroon p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-maroon/10 bg-cream">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-maroon py-2",
                  pathname === link.href ? "text-maroon" : "text-maroon/70"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-maroon hover:bg-maroon/90 text-cream w-full mt-2">
              <Link href="/cakes" onClick={() => setMobileMenuOpen(false)}>
                Order Now
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
