import { Product } from "@/types/product";

export const nigerianPastries: Product[] = [
  {
    id: "ng-1",
    name: "Meat Pie",
    tagline: "The golden pocket of savory goodness",
    description:
      "Flaky, buttery pastry shell embracing a hearty filling of seasoned minced meat, potatoes, and carrots. A Nigerian classic perfected.",
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=600&h=600&fit=crop",
    category: "Savory",
    price: 1500,
    sizes: [
      { name: "Single", price: 1500 },
      { name: "6 pieces", price: 8000 },
      { name: "12 pieces", price: 15000 },
    ],
    featured: true,
  },
  {
    id: "ng-2",
    name: "Puff Puff",
    tagline: "Pillowy clouds of fried perfection",
    description:
      "Light, airy, and irresistibly sweet. These golden balls of joy are deep-fried to perfection and dusted with powdered sugar.",
    image: "https://images.unsplash.com/photo-1558745087-055fd56e3dbd?w=600&h=600&fit=crop",
    category: "Sweet",
    price: 2000,
    sizes: [
      { name: "Small (10 pcs)", price: 2000 },
      { name: "Medium (20 pcs)", price: 3500 },
      { name: "Large (50 pcs)", price: 7500 },
    ],
    featured: true,
  },
  {
    id: "ng-3",
    name: "Chin Chin",
    tagline: "Crunchy bites of nostalgia",
    description:
      "Crispy, crunchy strips of fried dough with a hint of nutmeg. The perfect snack that takes you back to childhood memories.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=600&fit=crop",
    category: "Sweet",
    price: 2500,
    sizes: [
      { name: "Small Pack", price: 2500 },
      { name: "Medium Pack", price: 4500 },
      { name: "Large Pack", price: 8000 },
    ],
  },
  {
    id: "ng-4",
    name: "Sausage Roll",
    tagline: "Savory spiral of delight",
    description:
      "Premium pork sausage wrapped in layers of golden, flaky puff pastry. Seasoned to perfection with our secret blend of spices.",
    image: "https://images.unsplash.com/photo-1605039882834-ae8af3fce130?w=600&h=600&fit=crop",
    category: "Savory",
    price: 1200,
    sizes: [
      { name: "Single", price: 1200 },
      { name: "6 pieces", price: 6500 },
      { name: "12 pieces", price: 12000 },
    ],
  },
  {
    id: "ng-5",
    name: "Fish Roll",
    tagline: "Ocean freshness wrapped in gold",
    description:
      "Succulent fish filling seasoned with onions and peppers, enclosed in crispy, golden pastry. A coastal favorite loved nationwide.",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=600&h=600&fit=crop",
    category: "Savory",
    price: 1000,
    sizes: [
      { name: "Single", price: 1000 },
      { name: "6 pieces", price: 5500 },
      { name: "12 pieces", price: 10000 },
    ],
  },
  {
    id: "ng-6",
    name: "Buns (Nigerian Buns)",
    tagline: "Sweet, spiced, and simply satisfying",
    description:
      "Dense yet tender fried dough balls with hints of nutmeg and vanilla. Perfectly crispy outside, soft and fluffy inside.",
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=600&h=600&fit=crop",
    category: "Sweet",
    price: 1500,
    sizes: [
      { name: "6 pieces", price: 1500 },
      { name: "12 pieces", price: 2800 },
      { name: "24 pieces", price: 5000 },
    ],
  },
  {
    id: "ng-7",
    name: "Egg Roll",
    tagline: "Breakfast wrapped for the go",
    description:
      "A perfectly boiled egg encased in seasoned meat and wrapped in crispy pastry. Protein-packed and absolutely delicious.",
    image: "https://images.unsplash.com/photo-1584776296944-ab6fb57b0bbc?w=600&h=600&fit=crop",
    category: "Savory",
    price: 1800,
    sizes: [
      { name: "Single", price: 1800 },
      { name: "6 pieces", price: 9500 },
      { name: "12 pieces", price: 18000 },
    ],
    featured: true,
  },
  {
    id: "ng-8",
    name: "Spring Roll",
    tagline: "Crispy rolls of vegetable bliss",
    description:
      "Delicate wrappers filled with seasoned vegetables and optional protein, fried until golden. Light, crispy, and addictive.",
    image: "https://images.unsplash.com/photo-1606525437679-037aca74a3c9?w=600&h=600&fit=crop",
    category: "Savory",
    price: 800,
    sizes: [
      { name: "6 pieces", price: 800 },
      { name: "12 pieces", price: 1500 },
      { name: "24 pieces", price: 2800 },
    ],
  },
  {
    id: "ng-9",
    name: "Coconut Candy",
    tagline: "Tropical sweetness crystallized",
    description:
      "Chewy, sweet coconut treats caramelized to perfection. A beloved Nigerian confection that melts in your mouth.",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=600&fit=crop",
    category: "Sweet",
    price: 2000,
    sizes: [
      { name: "Small Pack", price: 2000 },
      { name: "Medium Pack", price: 3500 },
      { name: "Large Pack", price: 6000 },
    ],
  },
  {
    id: "ng-10",
    name: "Doughnut",
    tagline: "Rings of sugary happiness",
    description:
      "Soft, fluffy doughnuts glazed with sugar or chocolate. Our Nigerian-style doughnuts are airy, sweet, and utterly addictive.",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&h=600&fit=crop",
    category: "Sweet",
    price: 800,
    sizes: [
      { name: "Single", price: 800 },
      { name: "6 pieces", price: 4500 },
      { name: "12 pieces", price: 8500 },
    ],
    flavors: ["Sugar Glazed", "Chocolate", "Cinnamon Sugar"],
  },
  {
    id: "ng-11",
    name: "Samosa",
    tagline: "Triangles of spiced perfection",
    description:
      "Crispy triangular pastries filled with spiced potatoes and vegetables. A beloved snack with roots in Nigerian street food culture.",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&h=600&fit=crop",
    category: "Savory",
    price: 500,
    sizes: [
      { name: "6 pieces", price: 500 },
      { name: "12 pieces", price: 900 },
      { name: "24 pieces", price: 1700 },
    ],
  },
  {
    id: "ng-12",
    name: "Queen Cake",
    tagline: "Royalty in every bite",
    description:
      "Individual butter cakes with currants, baked to golden perfection. A tea-time favorite that brings elegance to any occasion.",
    image: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=600&h=600&fit=crop",
    category: "Sweet",
    price: 600,
    sizes: [
      { name: "6 pieces", price: 600 },
      { name: "12 pieces", price: 1100 },
      { name: "24 pieces", price: 2000 },
    ],
  },
];

export const featuredNigerianPastries = nigerianPastries.filter(
  (pastry) => pastry.featured
);
