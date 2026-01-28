export const SITE_CONFIG = {
  name: "Zibahtrove Confectionery",
  tagline: "Where Every Bite Tells a Sweet Story",
  description:
    "Welcome to Zibahtrove Confectionery, where passion meets perfection in every delectable creation. We are artisans of sweetness, crafting exquisite cakes and pastries that transform ordinary moments into extraordinary memories.",
  phone: "+234 XXX XXX XXXX",
  email: "hello@zibahtrove.com",
  address: "Lagos, Nigeria",
  socials: {
    instagram: "#",
    facebook: "#",
    twitter: "#",
  },
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/cakes", label: "Cakes" },
  { href: "/nigerian-pastries", label: "Nigerian Pastries" },
  { href: "/international-pastries", label: "International Pastries" },
] as const;
