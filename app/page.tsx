import { HeroSection, AboutSection, ProductShowcase } from "@/components/sections";
import { featuredCakes } from "@/data/cakes";
import { featuredNigerianPastries } from "@/data/nigerian-pastries";
import { featuredInternationalPastries } from "@/data/international-pastries";
import { SITE_CONFIG } from "@/lib/constants";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection
        title={SITE_CONFIG.name}
        subtitle={SITE_CONFIG.tagline}
        description={SITE_CONFIG.description}
        image="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=800&fit=crop"
      />

      {/* About Section */}
      <AboutSection />

      {/* Featured Cakes */}
      <ProductShowcase
        title="Our Signature Cakes"
        subtitle="Handcrafted with Love"
        products={featuredCakes}
        viewAllLink="/cakes"
        viewAllText="Explore All Cakes"
      />

      {/* Featured Nigerian Pastries */}
      <section className="py-20 bg-white">
        <ProductShowcase
          title="Nigerian Favorites"
          subtitle="Taste of Home"
          products={featuredNigerianPastries}
          viewAllLink="/nigerian-pastries"
          viewAllText="View All Nigerian Pastries"
        />
      </section>

      {/* Featured International Pastries */}
      <ProductShowcase
        title="International Delights"
        subtitle="World-Class Flavors"
        products={featuredInternationalPastries}
        viewAllLink="/international-pastries"
        viewAllText="Explore International Collection"
      />

      {/* Call to Action Section */}
      <section className="py-20 bg-maroon text-cream">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Ready to Place an Order?
          </h2>
          <p className="text-cream/80 text-lg max-w-2xl mx-auto mb-8">
            Whether it&apos;s a birthday celebration, wedding, or just a sweet craving,
            we&apos;re here to make your moments special with our delicious creations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-cream text-maroon font-medium hover:bg-cream/90 transition-colors"
            >
              Call Us Now
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="inline-flex items-center justify-center h-12 px-8 rounded-full border-2 border-cream text-cream font-medium hover:bg-cream/10 transition-colors"
            >
              Send an Email
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
