import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";

interface ProductShowcaseProps {
  title: string;
  subtitle: string;
  products: Product[];
  viewAllLink?: string;
  viewAllText?: string;
}

export function ProductShowcase({
  title,
  subtitle,
  products,
  viewAllLink,
  viewAllText = "View All",
}: ProductShowcaseProps) {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-maroon/70 font-medium tracking-wider uppercase text-sm">
            {subtitle}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-maroon mt-2">
            {title}
          </h2>
        </div>

        {/* Horizontal Scrolling Products */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-none w-80 snap-start group"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.featured && (
                      <span className="absolute top-4 left-4 bg-maroon text-cream text-xs font-medium px-3 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-serif text-xl font-semibold text-maroon">
                      {product.name}
                    </h3>
                    <p className="text-maroon/60 text-sm leading-relaxed">
                      {product.tagline}
                    </p>
                    <p className="text-maroon/80 text-sm line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        {viewAllLink && (
          <div className="text-center mt-8">
            <Button
              asChild
              variant="outline"
              className="border-maroon text-maroon hover:bg-maroon hover:text-cream"
            >
              <Link href={viewAllLink}>
                {viewAllText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
