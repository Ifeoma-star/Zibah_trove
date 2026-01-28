"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { CreditCard, Banknote, Truck, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/cart-context";
import { formatPrice, generateOrderId } from "@/lib/utils";
import { CheckoutFormData, PaymentMethod } from "@/types/order";

const nigerianStates = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue",
  "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu",
  "FCT", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi",
  "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun",
  "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara"
];

const timeSlots = [
  "9:00 AM - 11:00 AM",
  "11:00 AM - 1:00 PM",
  "1:00 PM - 3:00 PM",
  "3:00 PM - 5:00 PM",
  "5:00 PM - 7:00 PM",
];

export function CheckoutForm() {
  const router = useRouter();
  const { cart, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<CheckoutFormData>({
    shipping: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      postalCode: "",
      country: "Nigeria",
    },
    delivery: {
      date: "",
      time: "",
      instructions: "",
    },
    paymentMethod: "card",
  });

  const handleInputChange = (
    section: "shipping" | "delivery",
    field: string,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handlePaymentMethodChange = (method: PaymentMethod) => {
    setFormData((prev) => ({ ...prev, paymentMethod: method }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const orderId = generateOrderId();

    // Store order details in sessionStorage for confirmation page
    sessionStorage.setItem(
      "lastOrder",
      JSON.stringify({
        id: orderId,
        items: cart.items,
        shipping: formData.shipping,
        delivery: formData.delivery,
        paymentMethod: formData.paymentMethod,
        subtotal: cart.subtotal,
        deliveryFee: cart.deliveryFee,
        total: cart.total,
        createdAt: new Date().toISOString(),
      })
    );

    clearCart();
    router.push(`/order-confirmation?orderId=${orderId}`);
  };

  // Get minimum date (tomorrow)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Shipping Information */}
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
        <h2 className="font-serif text-xl font-semibold text-maroon mb-6 flex items-center gap-2">
          <Truck className="w-5 h-5" />
          Delivery Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-maroon mb-2">
              First Name *
            </label>
            <input
              type="text"
              required
              value={formData.shipping.firstName}
              onChange={(e) =>
                handleInputChange("shipping", "firstName", e.target.value)
              }
              className="w-full p-3 rounded-xl border-2 border-maroon/20 focus:border-maroon focus:ring-0 outline-none text-maroon"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-maroon mb-2">
              Last Name *
            </label>
            <input
              type="text"
              required
              value={formData.shipping.lastName}
              onChange={(e) =>
                handleInputChange("shipping", "lastName", e.target.value)
              }
              className="w-full p-3 rounded-xl border-2 border-maroon/20 focus:border-maroon focus:ring-0 outline-none text-maroon"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-maroon mb-2">
              Email Address *
            </label>
            <input
              type="email"
              required
              value={formData.shipping.email}
              onChange={(e) =>
                handleInputChange("shipping", "email", e.target.value)
              }
              className="w-full p-3 rounded-xl border-2 border-maroon/20 focus:border-maroon focus:ring-0 outline-none text-maroon"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-maroon mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              required
              value={formData.shipping.phone}
              onChange={(e) =>
                handleInputChange("shipping", "phone", e.target.value)
              }
              placeholder="+234"
              className="w-full p-3 rounded-xl border-2 border-maroon/20 focus:border-maroon focus:ring-0 outline-none text-maroon"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-maroon mb-2">
              Delivery Address *
            </label>
            <input
              type="text"
              required
              value={formData.shipping.address}
              onChange={(e) =>
                handleInputChange("shipping", "address", e.target.value)
              }
              placeholder="Street address, house number"
              className="w-full p-3 rounded-xl border-2 border-maroon/20 focus:border-maroon focus:ring-0 outline-none text-maroon"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-maroon mb-2">
              City *
            </label>
            <input
              type="text"
              required
              value={formData.shipping.city}
              onChange={(e) =>
                handleInputChange("shipping", "city", e.target.value)
              }
              className="w-full p-3 rounded-xl border-2 border-maroon/20 focus:border-maroon focus:ring-0 outline-none text-maroon"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-maroon mb-2">
              State *
            </label>
            <select
              required
              value={formData.shipping.state}
              onChange={(e) =>
                handleInputChange("shipping", "state", e.target.value)
              }
              className="w-full p-3 rounded-xl border-2 border-maroon/20 focus:border-maroon focus:ring-0 outline-none text-maroon bg-white"
            >
              <option value="">Select State</option>
              {nigerianStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Delivery Date & Time */}
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
        <h2 className="font-serif text-xl font-semibold text-maroon mb-6 flex items-center gap-2">
          <Calendar className="w-5 h-5" />
          Delivery Schedule
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-maroon mb-2">
              Delivery Date *
            </label>
            <input
              type="date"
              required
              min={minDate}
              value={formData.delivery.date}
              onChange={(e) =>
                handleInputChange("delivery", "date", e.target.value)
              }
              className="w-full p-3 rounded-xl border-2 border-maroon/20 focus:border-maroon focus:ring-0 outline-none text-maroon"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-maroon mb-2">
              Preferred Time *
            </label>
            <select
              required
              value={formData.delivery.time}
              onChange={(e) =>
                handleInputChange("delivery", "time", e.target.value)
              }
              className="w-full p-3 rounded-xl border-2 border-maroon/20 focus:border-maroon focus:ring-0 outline-none text-maroon bg-white"
            >
              <option value="">Select Time Slot</option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-maroon mb-2">
              Delivery Instructions (Optional)
            </label>
            <textarea
              value={formData.delivery.instructions}
              onChange={(e) =>
                handleInputChange("delivery", "instructions", e.target.value)
              }
              placeholder="Gate code, landmark, or special instructions..."
              className="w-full p-3 rounded-xl border-2 border-maroon/20 focus:border-maroon focus:ring-0 outline-none text-maroon resize-none h-24"
            />
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
        <h2 className="font-serif text-xl font-semibold text-maroon mb-6 flex items-center gap-2">
          <CreditCard className="w-5 h-5" />
          Payment Method
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            type="button"
            onClick={() => handlePaymentMethodChange("card")}
            className={`p-4 rounded-xl border-2 text-left transition-all ${
              formData.paymentMethod === "card"
                ? "border-maroon bg-maroon/5"
                : "border-maroon/20 hover:border-maroon/40"
            }`}
          >
            <CreditCard className="w-6 h-6 text-maroon mb-2" />
            <div className="font-medium text-maroon">Card Payment</div>
            <div className="text-sm text-maroon/60">
              Pay securely with your card
            </div>
          </button>

          <button
            type="button"
            onClick={() => handlePaymentMethodChange("bank_transfer")}
            className={`p-4 rounded-xl border-2 text-left transition-all ${
              formData.paymentMethod === "bank_transfer"
                ? "border-maroon bg-maroon/5"
                : "border-maroon/20 hover:border-maroon/40"
            }`}
          >
            <Banknote className="w-6 h-6 text-maroon mb-2" />
            <div className="font-medium text-maroon">Bank Transfer</div>
            <div className="text-sm text-maroon/60">
              Transfer to our account
            </div>
          </button>

          <button
            type="button"
            onClick={() => handlePaymentMethodChange("cash_on_delivery")}
            className={`p-4 rounded-xl border-2 text-left transition-all ${
              formData.paymentMethod === "cash_on_delivery"
                ? "border-maroon bg-maroon/5"
                : "border-maroon/20 hover:border-maroon/40"
            }`}
          >
            <Truck className="w-6 h-6 text-maroon mb-2" />
            <div className="font-medium text-maroon">Pay on Delivery</div>
            <div className="text-sm text-maroon/60">
              Cash or transfer on arrival
            </div>
          </button>
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting || cart.items.length === 0}
        className="w-full h-14 bg-maroon hover:bg-maroon/90 text-cream text-lg font-medium"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <span className="w-5 h-5 border-2 border-cream/30 border-t-cream rounded-full animate-spin" />
            Processing Order...
          </span>
        ) : (
          `Place Order • ${formatPrice(cart.total)}`
        )}
      </Button>
    </form>
  );
}
