import Link from "next/link";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-maroon text-cream">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream text-maroon font-serif font-bold text-xl">
                Z
              </div>
              <h3 className="font-serif text-xl font-bold">{SITE_CONFIG.name}</h3>
            </div>
            <p className="text-cream/80 text-sm leading-relaxed">
              Crafting sweet memories since 2020. Every cake tells a story, every
              pastry is a work of art.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a
                href={SITE_CONFIG.socials.instagram}
                className="hover:text-cream/70 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={SITE_CONFIG.socials.facebook}
                className="hover:text-cream/70 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={SITE_CONFIG.socials.twitter}
                className="hover:text-cream/70 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/80 hover:text-cream text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-cream/80">
                <Phone size={16} />
                <span>{SITE_CONFIG.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-cream/80">
                <Mail size={16} />
                <span>{SITE_CONFIG.email}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-cream/80">
                <MapPin size={16} />
                <span>{SITE_CONFIG.address}</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-sm text-cream/80">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>8am - 8pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>9am - 9pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>10am - 6pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/20">
        <div className="container mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream/60">
            <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-cream transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-cream transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
