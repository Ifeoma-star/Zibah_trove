import { Product } from "@/types/product";

export const internationalPastries: Product[] = [
  {
    id: "int-1",
    name: "French Croissant",
    tagline: "Buttery layers of Parisian perfection",
    description:
      "Authentic French croissants with 27 flaky layers of laminated dough. Golden, crispy exterior with a soft, airy interior.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&h=600&fit=crop",
    category: "French",
    price: 2500,
    sizes: [
      { name: "Single", price: 2500 },
      { name: "4 pieces", price: 9000 },
      { name: "8 pieces", price: 17000 },
    ],
    featured: true,
  },
  {
    id: "int-2",
    name: "Pain au Chocolat",
    tagline: "Chocolate dreams in flaky layers",
    description:
      "Premium dark chocolate batons wrapped in buttery croissant dough. The ultimate French breakfast indulgence.",
    image: "https://images.unsplash.com/photo-1623334044303-241021148842?w=600&h=600&fit=crop",
    category: "French",
    price: 3000,
    sizes: [
      { name: "Single", price: 3000 },
      { name: "4 pieces", price: 11000 },
      { name: "8 pieces", price: 21000 },
    ],
  },
  {
    id: "int-3",
    name: "French Macarons",
    tagline: "Delicate clouds of color and flavor",
    description:
      "Light, crispy shells with chewy centers, sandwiching flavorful ganache. Available in an array of beautiful colors and flavors.",
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=600&h=600&fit=crop",
    category: "French",
    price: 6000,
    sizes: [
      { name: "6 pieces", price: 6000 },
      { name: "12 pieces", price: 11000 },
      { name: "24 pieces", price: 20000 },
    ],
    flavors: ["Vanilla", "Chocolate", "Pistachio", "Raspberry", "Salted Caramel", "Lavender"],
    featured: true,
  },
  {
    id: "int-4",
    name: "Éclair",
    tagline: "Lightning strikes of deliciousness",
    description:
      "Choux pastry filled with vanilla or chocolate pastry cream, topped with glossy chocolate glaze. A French classic.",
    image: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=600&h=600&fit=crop",
    category: "French",
    price: 3500,
    sizes: [
      { name: "Single", price: 3500 },
      { name: "4 pieces", price: 13000 },
    ],
    flavors: ["Vanilla", "Chocolate", "Coffee"],
  },
  {
    id: "int-5",
    name: "Mille-Feuille",
    tagline: "A thousand layers of heaven",
    description:
      "Three layers of puff pastry alternating with vanilla pastry cream, topped with fondant icing. Pure elegance.",
    image: "https://images.unsplash.com/photo-1612203985729-70726954388c?w=600&h=600&fit=crop",
    category: "French",
    price: 4500,
  },
  {
    id: "int-6",
    name: "Italian Cannoli",
    tagline: "Sicilian treasure tubes",
    description:
      "Crispy, fried pastry shells filled with sweet, creamy ricotta and studded with chocolate chips. A taste of Sicily.",
    image: "https://images.unsplash.com/photo-1631206753348-db44968fd440?w=600&h=600&fit=crop",
    category: "Italian",
    price: 3000,
    sizes: [
      { name: "Single", price: 3000 },
      { name: "6 pieces", price: 16000 },
    ],
    featured: true,
  },
  {
    id: "int-7",
    name: "Tiramisu",
    tagline: "Pick me up with every spoonful",
    description:
      "Layers of espresso-soaked ladyfingers and mascarpone cream, dusted with cocoa. The beloved Italian classic.",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&h=600&fit=crop",
    category: "Italian",
    price: 8000,
    sizes: [
      { name: "Individual", price: 8000 },
      { name: "6 inch", price: 25000 },
      { name: "8 inch", price: 38000 },
    ],
  },
  {
    id: "int-8",
    name: "Panna Cotta",
    tagline: "Silky Italian elegance",
    description:
      "Creamy vanilla custard set to silky perfection, served with fresh berry compote. Delicate, light, and irresistible.",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=600&fit=crop",
    category: "Italian",
    price: 4500,
    sizes: [
      { name: "Single", price: 4500 },
      { name: "4 pieces", price: 16000 },
    ],
  },
  {
    id: "int-9",
    name: "New York Cheesecake",
    tagline: "Creamy, dreamy, unmistakably New York",
    description:
      "Dense, rich, and impossibly creamy. Our authentic New York-style cheesecake with a graham cracker crust.",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&h=600&fit=crop",
    category: "American",
    price: 35000,
    sizes: [
      { name: "6 inch", price: 35000, serves: "8-10" },
      { name: "8 inch", price: 50000, serves: "12-15" },
    ],
    featured: true,
  },
  {
    id: "int-10",
    name: "Cinnamon Roll",
    tagline: "Swirls of cinnamon heaven",
    description:
      "Soft, pillowy dough rolled with brown sugar and cinnamon, topped with cream cheese frosting. Warm comfort in every bite.",
    image: "https://images.unsplash.com/photo-1609127102567-8a9a21dc27d8?w=600&h=600&fit=crop",
    category: "American",
    price: 2500,
    sizes: [
      { name: "Single", price: 2500 },
      { name: "6 pieces", price: 14000 },
    ],
  },
  {
    id: "int-11",
    name: "Apple Pie",
    tagline: "As American as it gets",
    description:
      "Flaky, buttery crust filled with cinnamon-spiced apples, baked to golden perfection. Best served warm with vanilla ice cream.",
    image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=600&h=600&fit=crop",
    category: "American",
    price: 18000,
    sizes: [
      { name: "8 inch", price: 18000, serves: "6-8" },
      { name: "10 inch", price: 25000, serves: "10-12" },
    ],
  },
  {
    id: "int-12",
    name: "Danish Pastry",
    tagline: "Scandinavian breakfast royalty",
    description:
      "Flaky, buttery pastry with cream cheese filling and fruit topping. Light, sweet, and utterly irresistible.",
    image: "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?w=600&h=600&fit=crop",
    category: "Danish",
    price: 2800,
    sizes: [
      { name: "Single", price: 2800 },
      { name: "4 pieces", price: 10000 },
    ],
    flavors: ["Apple", "Berry", "Cream Cheese"],
  },
  {
    id: "int-13",
    name: "British Scones",
    tagline: "Teatime tradition perfected",
    description:
      "Tender, crumbly scones served with clotted cream and strawberry jam. The perfect companion to afternoon tea.",
    image: "https://images.unsplash.com/photo-1558303590-a6c5a6097a56?w=600&h=600&fit=crop",
    category: "British",
    price: 3500,
    sizes: [
      { name: "4 pieces", price: 3500 },
      { name: "8 pieces", price: 6500 },
    ],
    flavors: ["Plain", "Raisin", "Cheese"],
  },
  {
    id: "int-14",
    name: "Victoria Sponge",
    tagline: "Her Majesty would approve",
    description:
      "Light vanilla sponge layered with jam and whipped cream, dusted with powdered sugar. A British afternoon tea essential.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop",
    category: "British",
    price: 28000,
    sizes: [
      { name: "6 inch", price: 28000, serves: "8-10" },
      { name: "8 inch", price: 40000, serves: "12-15" },
    ],
  },
  {
    id: "int-15",
    name: "Black Forest Cake",
    tagline: "German romance in every layer",
    description:
      "Chocolate sponge soaked in cherry liqueur, layered with cherries and whipped cream. Decorated with chocolate shavings.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&h=600&fit=crop",
    category: "German",
    price: 38000,
    sizes: [
      { name: "6 inch", price: 38000, serves: "8-10" },
      { name: "8 inch", price: 55000, serves: "12-15" },
    ],
  },
  {
    id: "int-16",
    name: "Pastel de Nata",
    tagline: "Lisbon's legendary custard tart",
    description:
      "Crispy, flaky pastry cups filled with caramelized egg custard. Best enjoyed warm with a dusting of cinnamon.",
    image: "https://images.unsplash.com/photo-1587248720327-8eb72564be1e?w=600&h=600&fit=crop",
    category: "Portuguese",
    price: 4000,
    sizes: [
      { name: "4 pieces", price: 4000 },
      { name: "8 pieces", price: 7500 },
      { name: "12 pieces", price: 10500 },
    ],
  },
];

export const featuredInternationalPastries = internationalPastries.filter(
  (pastry) => pastry.featured
);
