import { Metadata } from "next";
import { PageHeader, ProductGrid } from "@/components/sections";
import { nigerianPastries } from "@/data/nigerian-pastries";

export const metadata: Metadata = {
  title: "Nigerian Pastries | Zibahtrove Confectionery",
  description:
    "Discover authentic Nigerian pastries - meat pies, puff puff, chin chin, and more. Traditional recipes made with modern expertise.",
};

export default function NigerianPastriesPage() {
  return (
    <main>
      {/* Page Header */}
      <PageHeader
        title="Nigerian Pastries"
        subtitle="A Taste of Home"
        description="Experience the authentic flavors of Nigerian street food and traditional snacks. From crispy meat pies to fluffy puff puff, each pastry is made with love and traditional recipes passed down through generations."
      />

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {["All", "Savory", "Sweet"].map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full text-sm font-medium transition-colors bg-cream text-maroon hover:bg-maroon hover:text-cream border border-maroon/20"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <ProductGrid products={nigerianPastries} columns={4} />

      {/* Party Packages */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-maroon/70 font-medium tracking-wider uppercase text-sm">
                Special Offers
              </span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-maroon mt-2">
                Party & Event Packages
              </h2>
              <p className="text-maroon/70 mt-4">
                Planning a party? We offer bulk orders and party packages for all
                occasions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Small Chops Tray",
                  description: "Perfect for intimate gatherings",
                  items: "50 pieces assorted",
                },
                {
                  name: "Party Pack",
                  description: "Great for medium-sized events",
                  items: "100 pieces assorted",
                },
                {
                  name: "Event Special",
                  description: "For large celebrations",
                  items: "200+ pieces assorted",
                },
              ].map((pkg) => (
                <div
                  key={pkg.name}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-serif text-xl font-semibold text-maroon mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-maroon/60 text-sm mb-2">{pkg.description}</p>
                  <p className="text-maroon font-medium">{pkg.items}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a
                href="#"
                className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-maroon text-cream font-medium hover:bg-maroon/90 transition-colors"
              >
                Order Party Package
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
