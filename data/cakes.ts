import { Product } from "@/types/product";

export const cakes: Product[] = [
  // Chocolate Cakes
  {
    id: "choc-1",
    name: "Belgian Chocolate Truffle",
    tagline: "Decadently rich, sinfully delicious",
    description:
      "A masterpiece of Belgian chocolate layers, filled with velvety ganache and topped with hand-crafted chocolate curls. Pure indulgence in every bite.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop",
    category: "Chocolate",
    price: 35000,
    sizes: [
      { name: "6 inch", price: 35000, serves: "8-10" },
      { name: "8 inch", price: 50000, serves: "12-15" },
      { name: "10 inch", price: 75000, serves: "20-25" },
    ],
    featured: true,
  },
  {
    id: "choc-2",
    name: "Triple Chocolate Fudge",
    tagline: "Three times the chocolate, infinite pleasure",
    description:
      "Dark, milk, and white chocolate come together in this symphony of cocoa perfection. Moist layers with fudge frosting that melts on your tongue.",
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&h=600&fit=crop",
    category: "Chocolate",
    price: 32000,
    sizes: [
      { name: "6 inch", price: 32000, serves: "8-10" },
      { name: "8 inch", price: 48000, serves: "12-15" },
      { name: "10 inch", price: 70000, serves: "20-25" },
    ],
  },
  {
    id: "choc-3",
    name: "Chocolate Lava Cake",
    tagline: "A molten center of pure bliss",
    description:
      "Break through the delicate outer shell to discover a flowing river of warm, rich chocolate. Best served warm with vanilla ice cream.",
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=600&h=600&fit=crop",
    category: "Chocolate",
    price: 5000,
  },
  {
    id: "van-1",
    name: "Classic Vanilla Dream",
    tagline: "Timeless elegance, unforgettable taste",
    description:
      "Light, fluffy vanilla sponge layered with Madagascar vanilla bean cream. Crowned with delicate buttercream rosettes and edible pearls.",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=600&fit=crop",
    category: "Vanilla",
    price: 28000,
    sizes: [
      { name: "6 inch", price: 28000, serves: "8-10" },
      { name: "8 inch", price: 42000, serves: "12-15" },
      { name: "10 inch", price: 60000, serves: "20-25" },
    ],
    featured: true,
  },
  {
    id: "van-2",
    name: "Wedding Elegance",
    tagline: "Where dreams meet perfection",
    description:
      "A stunning multi-tiered masterpiece adorned with handcrafted sugar flowers and delicate lace patterns. Perfect for your special day.",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&h=600&fit=crop",
    category: "Wedding",
    price: 150000,
    sizes: [
      { name: "2 Tier", price: 150000, serves: "50-60" },
      { name: "3 Tier", price: 250000, serves: "80-100" },
      { name: "4 Tier", price: 350000, serves: "120-150" },
    ],
  },
  {
    id: "rv-1",
    name: "Classic Red Velvet",
    tagline: "The crown jewel of Southern baking",
    description:
      "Velvety crimson layers paired with our signature cream cheese frosting. A perfect balance of subtle cocoa and tangy sweetness.",
    image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=600&h=600&fit=crop",
    category: "Red Velvet",
    price: 35000,
    sizes: [
      { name: "6 inch", price: 35000, serves: "8-10" },
      { name: "8 inch", price: 52000, serves: "12-15" },
      { name: "10 inch", price: 78000, serves: "20-25" },
    ],
    featured: true,
  },
  {
    id: "rv-2",
    name: "Red Velvet Cheesecake",
    tagline: "Two classics, one extraordinary dessert",
    description:
      "Creamy New York cheesecake swirled with red velvet cake and topped with cream cheese frosting. The best of both worlds.",
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=600&h=600&fit=crop",
    category: "Red Velvet",
    price: 40000,
    sizes: [
      { name: "6 inch", price: 40000, serves: "8-10" },
      { name: "8 inch", price: 58000, serves: "12-15" },
    ],
  },
  {
    id: "fruit-1",
    name: "Strawberry Bliss",
    tagline: "Fresh, fruity, absolutely divine",
    description:
      "Layers of vanilla sponge filled with fresh strawberry compote and whipped cream. Topped with glazed strawberries that glisten like jewels.",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=600&fit=crop",
    category: "Fruit",
    price: 38000,
    sizes: [
      { name: "6 inch", price: 38000, serves: "8-10" },
      { name: "8 inch", price: 55000, serves: "12-15" },
    ],
  },
  {
    id: "fruit-2",
    name: "Lemon Zest Delight",
    tagline: "Sunshine in every slice",
    description:
      "Bright, tangy lemon curd nestled between citrus-infused sponge layers. Finished with Italian meringue that torches to golden perfection.",
    image: "https://images.unsplash.com/photo-1519869325930-281384f7e564?w=600&h=600&fit=crop",
    category: "Fruit",
    price: 32000,
    sizes: [
      { name: "6 inch", price: 32000, serves: "8-10" },
      { name: "8 inch", price: 48000, serves: "12-15" },
    ],
  },
  {
    id: "fruit-3",
    name: "Tropical Paradise",
    tagline: "Escape to island flavors",
    description:
      "Coconut sponge layered with mango mousse and passion fruit curd. Decorated with tropical fruits and toasted coconut flakes.",
    image: "https://images.unsplash.com/photo-1562440499-64c9a111f713?w=600&h=600&fit=crop",
    category: "Fruit",
    price: 42000,
    sizes: [
      { name: "6 inch", price: 42000, serves: "8-10" },
      { name: "8 inch", price: 60000, serves: "12-15" },
    ],
  },
  {
    id: "spec-1",
    name: "Caramel Drip Cake",
    tagline: "Sweet indulgence meets artistry",
    description:
      "Buttery caramel cake with salted caramel buttercream, featuring a dramatic caramel drip and gold-dusted decorations.",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=600&h=600&fit=crop",
    category: "Specialty",
    price: 45000,
    sizes: [
      { name: "6 inch", price: 45000, serves: "8-10" },
      { name: "8 inch", price: 65000, serves: "12-15" },
    ],
    featured: true,
  },
  {
    id: "spec-2",
    name: "Coffee Tiramisu Cake",
    tagline: "Italian romance in every layer",
    description:
      "Espresso-soaked sponge with mascarpone cream and dusted with premium cocoa. A cake that coffee lovers dream about.",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&h=600&fit=crop",
    category: "Specialty",
    price: 38000,
    sizes: [
      { name: "6 inch", price: 38000, serves: "8-10" },
      { name: "8 inch", price: 55000, serves: "12-15" },
    ],
  },
  {
    id: "spec-3",
    name: "Rainbow Celebration",
    tagline: "Color your world delicious",
    description:
      "Six vibrant layers of colorful vanilla cake stacked high with cream cheese frosting. Perfect for birthdays and celebrations.",
    image: "https://images.unsplash.com/photo-1557925923-cd4648e211a0?w=600&h=600&fit=crop",
    category: "Celebration",
    price: 40000,
    sizes: [
      { name: "6 inch", price: 40000, serves: "8-10" },
      { name: "8 inch", price: 58000, serves: "12-15" },
      { name: "10 inch", price: 85000, serves: "20-25" },
    ],
  },
  {
    id: "cup-1",
    name: "Assorted Cupcake Box",
    tagline: "A little taste of everything",
    description:
      "A delightful selection of our most popular cupcake flavors, each topped with swirled buttercream and unique decorations.",
    image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=600&h=600&fit=crop",
    category: "Cupcakes",
    price: 15000,
    sizes: [
      { name: "6 pieces", price: 15000 },
      { name: "12 pieces", price: 28000 },
      { name: "24 pieces", price: 52000 },
    ],
    flavors: ["Chocolate", "Vanilla", "Red Velvet", "Carrot", "Lemon"],
  },
  {
    id: "cup-2",
    name: "Rose Garden Cupcakes",
    tagline: "Edible flowers that taste heavenly",
    description:
      "Vanilla cupcakes adorned with hand-piped buttercream roses in romantic shades. Almost too beautiful to eat.",
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&h=600&fit=crop",
    category: "Cupcakes",
    price: 18000,
    sizes: [
      { name: "6 pieces", price: 18000 },
      { name: "12 pieces", price: 34000 },
    ],
  },
];

export const featuredCakes = cakes.filter((cake) => cake.featured);
