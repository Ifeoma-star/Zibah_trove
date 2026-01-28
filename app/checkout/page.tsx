import { Metadata } from "next";
import { CheckoutForm, OrderSummary } from "@/components/checkout";

export const metadata: Metadata = {
  title: "Checkout | Zibahtrove Confectionery",
  description: "Complete your order and have delicious treats delivered to your doorstep.",
};

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-cream py-12">
      <div className="container mx-auto px-4 md:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-maroon">
            Checkout
          </h1>
          <p className="text-maroon/70 mt-2">
            Complete your order and we&apos;ll have your treats ready for delivery
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <CheckoutForm />
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <OrderSummary />
          </div>
        </div>
      </div>
    </main>
  );
}
