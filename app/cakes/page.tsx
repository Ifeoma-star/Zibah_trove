import { Metadata } from "next";
import { PageHeader, ProductGrid } from "@/components/sections";
import { cakes } from "@/data/cakes";

export const metadata: Metadata = {
  title: "Cakes | Zibahtrove Confectionery",
  description:
    "Explore our exquisite collection of cakes - from classic vanilla and chocolate to specialty creations for weddings, birthdays, and every celebration.",
};

export default function CakesPage() {
  return (
    <main>
      {/* Page Header */}
      <PageHeader
        title="Our Cake Collection"
        subtitle="Masterfully Crafted"
        description="From classic flavors to custom creations, each cake is a masterpiece of taste and artistry. Whether you're celebrating a milestone or simply craving something sweet, find your perfect cake here."
      />

      {/* Cake Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {["All", "Chocolate", "Vanilla", "Red Velvet", "Fruit", "Specialty", "Cupcakes", "Wedding"].map(
              (category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-full text-sm font-medium transition-colors bg-cream text-maroon hover:bg-maroon hover:text-cream border border-maroon/20"
                >
                  {category}
                </button>
              )
            )}
          </div>
        </div>
      </section>

      {/* Cakes Grid */}
      <ProductGrid products={cakes} columns={3} />

      {/* Custom Order CTA */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-maroon mb-4">
              Looking for Something Custom?
            </h2>
            <p className="text-maroon/70 mb-8">
              We specialize in custom cakes tailored to your vision. From wedding
              masterpieces to themed birthday cakes, let us bring your dream cake
              to life.
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-maroon text-cream font-medium hover:bg-maroon/90 transition-colors"
            >
              Request Custom Cake
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
