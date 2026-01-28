import Image from "next/image";
import { Award, Heart, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every creation is crafted with passion and dedication",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Only the finest ingredients make it into our kitchen",
  },
  {
    icon: Clock,
    title: "Fresh Daily",
    description: "Baked fresh every morning for maximum freshness",
  },
  {
    icon: Users,
    title: "Family Recipes",
    description: "Traditional recipes passed down through generations",
  },
];

export function AboutSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-maroon rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-maroon rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=500&fit=crop"
                  alt="Chocolate cake"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400&h=400&fit=crop"
                  alt="Fresh pastries"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=400&h=400&fit=crop"
                  alt="Cupcakes"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=500&fit=crop"
                  alt="Wedding cake"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <span className="text-maroon/70 font-medium tracking-wider uppercase text-sm">
                Our Story
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-maroon mt-2">
                Crafting Sweet Memories Since Day One
              </h2>
            </div>

            <div className="space-y-4 text-maroon/70 leading-relaxed">
              <p>
                Welcome to Zibahtrove Confectionery, where passion meets perfection
                in every delectable creation. Founded with a dream to bring joy
                through exceptional baked goods, we have grown into a beloved
                destination for cake and pastry enthusiasts.
              </p>
              <p>
                Our master bakers combine traditional techniques with innovative
                flavors to create confections that are as beautiful as they are
                delicious. From classic Nigerian treats to international favorites,
                every item is crafted with meticulous attention to detail.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              {features.map((feature) => (
                <div key={feature.title} className="space-y-2">
                  <div className="w-10 h-10 rounded-lg bg-maroon/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-maroon" />
                  </div>
                  <h3 className="font-semibold text-maroon">{feature.title}</h3>
                  <p className="text-sm text-maroon/60">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
