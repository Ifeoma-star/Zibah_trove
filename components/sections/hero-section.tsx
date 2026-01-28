import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  showCta?: boolean;
  ctaText?: string;
  ctaLink?: string;
}

export function HeroSection({
  title,
  subtitle,
  description,
  image,
  showCta = true,
  ctaText = "Explore Our Collection",
  ctaLink = "/cakes",
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Marbling Pattern */}
      <div className="absolute inset-0 bg-cream">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <defs>
              <pattern id="marbling" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <path
                  d="M0,100 Q50,50 100,100 T200,100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-maroon"
                />
                <path
                  d="M0,150 Q50,100 100,150 T200,150"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-maroon"
                />
                <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1" className="text-maroon" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#marbling)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            <span className="inline-block text-maroon/70 font-medium tracking-wider uppercase text-sm">
              {subtitle}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-maroon leading-tight">
              {title}
            </h1>
            <p className="text-maroon/70 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              {description}
            </p>
            {showCta && (
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button asChild size="lg" className="bg-maroon hover:bg-maroon/90 text-cream">
                  <Link href={ctaLink}>{ctaText}</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-maroon text-maroon hover:bg-maroon/5">
                  <Link href="/nigerian-pastries">View Pastries</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative circles */}
              <div className="absolute -top-4 -right-4 w-full h-full rounded-full border-2 border-maroon/20" />
              <div className="absolute -bottom-4 -left-4 w-full h-full rounded-full border-2 border-maroon/10" />

              {/* Main image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-maroon/30 shadow-2xl">
                <Image
                  src={image}
                  alt="Featured bakery item"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
