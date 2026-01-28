"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle,
  Package,
  Truck,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import { Order } from "@/types/order";
import { SITE_CONFIG } from "@/lib/constants";

export default function OrderConfirmationPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    const storedOrder = sessionStorage.getItem("lastOrder");
    if (storedOrder) {
      setOrder(JSON.parse(storedOrder));
    }
  }, []);

  if (!order) {
    return (
      <main className="min-h-screen bg-cream py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-2xl text-maroon mb-4">
            Order not found
          </h1>
          <Link href="/" className="text-maroon underline">
            Return to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-cream py-12">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-maroon mb-3">
            Order Confirmed!
          </h1>
          <p className="text-maroon/70 text-lg">
            Thank you for your order. We&apos;ve received it and will start preparing
            your treats.
          </p>
        </div>

        {/* Order ID Card */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className="text-sm text-maroon/60 mb-1">Order Number</p>
              <p className="font-mono text-2xl font-bold text-maroon">
                {orderId}
              </p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-maroon/10 rounded-full">
              <Package className="w-5 h-5 text-maroon" />
              <span className="font-medium text-maroon">Order Received</span>
            </div>
          </div>
        </div>

        {/* Order Details Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Delivery Details */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="font-serif text-lg font-semibold text-maroon mb-4 flex items-center gap-2">
              <Truck className="w-5 h-5" />
              Delivery Details
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-maroon/60 mt-0.5" />
                <div>
                  <p className="font-medium text-maroon">
                    {order.shippingAddress?.firstName} {order.shippingAddress?.lastName}
                  </p>
                  <p className="text-maroon/70">{order.shippingAddress?.address}</p>
                  <p className="text-maroon/70">
                    {order.shippingAddress?.city}, {order.shippingAddress?.state}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-maroon/60" />
                <span className="text-maroon/70">{order.shippingAddress?.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-maroon/60" />
                <span className="text-maroon/70">{order.shippingAddress?.email}</span>
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="font-serif text-lg font-semibold text-maroon mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Delivery Schedule
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-maroon/60" />
                <span className="text-maroon/70">
                  {order.deliveryDetails?.date
                    ? new Date(order.deliveryDetails.date).toLocaleDateString("en-NG", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "Not specified"}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-maroon/60" />
                <span className="text-maroon/70">
                  {order.deliveryDetails?.time || "Not specified"}
                </span>
              </div>
              {order.deliveryDetails?.instructions && (
                <div className="pt-2 border-t border-maroon/10">
                  <p className="text-maroon/60 text-xs mb-1">Special Instructions:</p>
                  <p className="text-maroon/70">{order.deliveryDetails.instructions}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm mb-8">
          <h2 className="font-serif text-lg font-semibold text-maroon mb-6">
            Order Items
          </h2>
          <div className="space-y-4">
            {order.items?.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 pb-4 border-b border-maroon/10 last:border-0 last:pb-0"
              >
                <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-maroon">{item.product.name}</h3>
                  {item.size && (
                    <p className="text-sm text-maroon/60">Size: {item.size}</p>
                  )}
                  {item.flavor && (
                    <p className="text-sm text-maroon/60">Flavor: {item.flavor}</p>
                  )}
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-maroon/60">
                      Qty: {item.quantity}
                    </span>
                    <span className="font-medium text-maroon">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Total */}
          <div className="mt-6 pt-6 border-t border-maroon/10 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-maroon/70">Subtotal</span>
              <span className="text-maroon">{formatPrice(order.subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-maroon/70">Delivery Fee</span>
              <span className="text-maroon">{formatPrice(order.deliveryFee)}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg pt-2">
              <span className="text-maroon">Total</span>
              <span className="text-maroon">{formatPrice(order.total)}</span>
            </div>
          </div>
        </div>

        {/* What's Next */}
        <div className="bg-maroon/5 rounded-2xl p-6 md:p-8 mb-8">
          <h2 className="font-serif text-lg font-semibold text-maroon mb-4">
            What&apos;s Next?
          </h2>
          <ol className="space-y-3">
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-maroon text-cream text-sm flex items-center justify-center flex-shrink-0">
                1
              </span>
              <p className="text-maroon/70">
                You&apos;ll receive an email confirmation with your order details
              </p>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-maroon text-cream text-sm flex items-center justify-center flex-shrink-0">
                2
              </span>
              <p className="text-maroon/70">
                Our team will start preparing your delicious treats
              </p>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-maroon text-cream text-sm flex items-center justify-center flex-shrink-0">
                3
              </span>
              <p className="text-maroon/70">
                We&apos;ll notify you when your order is out for delivery
              </p>
            </li>
          </ol>
        </div>

        {/* Contact & Continue Shopping */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            variant="outline"
            className="border-maroon text-maroon hover:bg-maroon hover:text-cream"
          >
            <a href={`tel:${SITE_CONFIG.phone}`}>
              <Phone className="mr-2 h-4 w-4" />
              Contact Us
            </a>
          </Button>
          <Button asChild className="bg-maroon hover:bg-maroon/90 text-cream">
            <Link href="/">
              Continue Shopping
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
