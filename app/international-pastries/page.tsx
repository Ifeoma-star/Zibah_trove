import { Metadata } from "next";
import { PageHeader, ProductGrid } from "@/components/sections";
import { internationalPastries } from "@/data/international-pastries";

export const metadata: Metadata = {
  title: "International Pastries | Zibahtrove Confectionery",
  description:
    "Explore world-class pastries from France, Italy, America, and beyond. From buttery croissants to creamy tiramisu.",
};

export default function InternationalPastriesPage() {
  return (
    <main>
      {/* Page Header */}
      <PageHeader
        title="International Pastries"
        subtitle="World-Class Flavors"
        description="Embark on a culinary journey around the world with our collection of international pastries. From the buttery layers of French croissants to the creamy indulgence of Italian tiramisu, we bring global flavors to your table."
      />

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {["All", "French", "Italian", "American", "British", "Danish", "German", "Portuguese"].map(
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

      {/* Products Grid */}
      <ProductGrid products={internationalPastries} columns={4} />

      {/* Featured Countries Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-maroon/70 font-medium tracking-wider uppercase text-sm">
              Culinary Heritage
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-maroon mt-2">
              A World of Flavors
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                country: "France",
                flag: "🇫🇷",
                specialty: "Croissants & Macarons",
                description: "The art of patisserie perfected",
              },
              {
                country: "Italy",
                flag: "🇮🇹",
                specialty: "Cannoli & Tiramisu",
                description: "Sweet traditions of la dolce vita",
              },
              {
                country: "America",
                flag: "🇺🇸",
                specialty: "Cheesecake & Apple Pie",
                description: "Comfort desserts done right",
              },
              {
                country: "Portugal",
                flag: "🇵🇹",
                specialty: "Pastel de Nata",
                description: "Lisbon's iconic custard tart",
              },
            ].map((item) => (
              <div
                key={item.country}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="text-4xl mb-4 block">{item.flag}</span>
                <h3 className="font-serif text-xl font-semibold text-maroon mb-1">
                  {item.country}
                </h3>
                <p className="text-maroon font-medium text-sm mb-2">
                  {item.specialty}
                </p>
                <p className="text-maroon/60 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tasting Experience CTA */}
      <section className="py-16 bg-maroon text-cream">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
            Book a Tasting Experience
          </h2>
          <p className="text-cream/80 max-w-2xl mx-auto mb-8">
            Not sure what to choose? Book a private tasting session and sample our
            finest international pastries with expert guidance from our pastry chef.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-cream text-maroon font-medium hover:bg-cream/90 transition-colors"
          >
            Book Tasting Session
          </a>
        </div>
      </section>
    </main>
  );
}
