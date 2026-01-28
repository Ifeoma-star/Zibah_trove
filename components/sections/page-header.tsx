interface PageHeaderProps {
  title: string;
  subtitle: string;
  description: string;
}

export function PageHeader({ title, subtitle, description }: PageHeaderProps) {
  return (
    <section className="relative py-20 bg-cream overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
          <defs>
            <pattern id="header-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-maroon" />
              <path d="M0,50 Q25,25 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-maroon" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#header-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-maroon/70 font-medium tracking-wider uppercase text-sm">
            {subtitle}
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-maroon mt-3 mb-6">
            {title}
          </h1>
          <p className="text-maroon/70 text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
