# Zibahtrove Confectionery

A modern, enterprise-grade e-commerce web application for an artisan bakery specializing in cakes, Nigerian pastries, and international confections.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)

## Overview

Zibahtrove Confectionery is a full-featured bakery e-commerce platform built with Next.js 16 and React 19. The application features a beautiful cream and maroon branded design, complete shopping cart functionality, checkout system, and order management—all optimized for the Nigerian market with NGN currency support.

## Features

### Core Features
- **Product Catalog** - Browse cakes, Nigerian pastries, and international pastries
- **Product Details Modal** - View detailed product information with size and flavor options
- **Shopping Cart** - Persistent cart with localStorage, quantity management
- **Checkout System** - Complete checkout flow with delivery scheduling
- **Order Confirmation** - Professional order confirmation with tracking details

### User Experience
- **Responsive Design** - Mobile-first approach, works on all devices
- **Sticky Navigation** - Easy access to cart and navigation
- **Product Filtering** - Filter products by category
- **Smooth Animations** - Modern transitions and hover effects
- **Accessible** - ARIA labels and keyboard navigation support

### Technical Features
- **Type Safety** - Full TypeScript implementation
- **State Management** - React Context with useReducer pattern
- **Cart Persistence** - localStorage integration
- **Image Optimization** - Next.js Image component with lazy loading
- **SEO Ready** - Metadata configuration for all pages

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16 | React framework with App Router |
| React | 19 | UI library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 4 | Styling |
| shadcn/ui | Latest | UI component library |
| Lucide React | Latest | Icon library |

## Project Structure

```
frontend/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Home page
│   ├── layout.tsx                # Root layout with providers
│   ├── globals.css               # Global styles & theme
│   ├── cakes/
│   │   └── page.tsx              # Cakes catalog
│   ├── nigerian-pastries/
│   │   └── page.tsx              # Nigerian pastries catalog
│   ├── international-pastries/
│   │   └── page.tsx              # International pastries catalog
│   ├── checkout/
│   │   └── page.tsx              # Checkout page
│   └── order-confirmation/
│       └── page.tsx              # Order success page
│
├── components/
│   ├── ui/                       # Base UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── modal.tsx
│   │   ├── slide-over.tsx
│   │   └── ...
│   │
│   ├── layout/                   # Layout components
│   │   ├── header.tsx            # Site header with navigation
│   │   ├── footer.tsx            # Site footer
│   │   └── index.ts              # Barrel export
│   │
│   ├── sections/                 # Page section components
│   │   ├── hero-section.tsx      # Home hero banner
│   │   ├── about-section.tsx     # About the bakery
│   │   ├── product-showcase.tsx  # Featured products carousel
│   │   ├── product-grid.tsx      # Product grid display
│   │   ├── page-header.tsx       # Page title headers
│   │   └── index.ts
│   │
│   ├── products/                 # Product-related components
│   │   ├── product-card.tsx      # Product card display
│   │   ├── product-modal.tsx     # Product details modal
│   │   └── index.ts
│   │
│   ├── cart/                     # Cart components
│   │   ├── cart-item.tsx         # Individual cart item
│   │   ├── cart-sidebar.tsx      # Slide-out cart panel
│   │   └── index.ts
│   │
│   ├── checkout/                 # Checkout components
│   │   ├── checkout-form.tsx     # Checkout form
│   │   ├── order-summary.tsx     # Order summary sidebar
│   │   └── index.ts
│   │
│   └── providers.tsx             # App providers wrapper
│
├── contexts/
│   └── cart-context.tsx          # Cart state management
│
├── data/                         # Product data
│   ├── cakes.ts                  # Cake products
│   ├── nigerian-pastries.ts      # Nigerian pastry products
│   ├── international-pastries.ts # International pastry products
│   └── index.ts
│
├── lib/
│   ├── utils.ts                  # Utility functions
│   └── constants.ts              # App constants
│
├── types/                        # TypeScript type definitions
│   ├── product.ts                # Product types
│   ├── cart.ts                   # Cart types
│   ├── order.ts                  # Order types
│   └── index.ts
│
└── public/                       # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd My_Website/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open in browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## Configuration

### Environment Variables

Create a `.env.local` file in the frontend directory:

```env
# Site URL (for SEO and metadata)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# API endpoint (if using backend)
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

### Site Configuration

Edit `lib/constants.ts` to customize:

```typescript
export const SITE_CONFIG = {
  name: "Zibahtrove Confectionery",
  tagline: "Baked with Love",
  description: "...",
  phone: "+234 XXX XXX XXXX",
  email: "hello@zibahtrove.com",
  address: "Lagos, Nigeria",
  // Social media links
  instagram: "https://instagram.com/zibahtrove",
  facebook: "https://facebook.com/zibahtrove",
  twitter: "https://twitter.com/zibahtrove",
};
```

### Theme Customization

The color theme is defined in `app/globals.css`:

```css
:root {
  --maroon: #800020;
  --cream: #FFFDD0;
  --gold: #D4AF37;
}
```

## Architecture

### State Management

The application uses React Context API with the `useReducer` pattern for cart state management:

```
CartContext
├── State: items, isOpen
├── Actions: ADD_ITEM, REMOVE_ITEM, UPDATE_QUANTITY, CLEAR_CART, TOGGLE_CART
└── Persistence: localStorage
```

### Component Architecture

Components follow a hierarchical structure:

1. **UI Components** - Base building blocks (buttons, modals, inputs)
2. **Feature Components** - Domain-specific (product cards, cart items)
3. **Section Components** - Page sections (hero, product grid)
4. **Page Components** - Full pages combining sections

### Data Flow

```
User Action → Component → Context Action → Reducer → New State → Re-render
                                              ↓
                                        localStorage
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, about section, and featured products |
| `/cakes` | Full cake catalog with filtering |
| `/nigerian-pastries` | Nigerian pastries with party package options |
| `/international-pastries` | International confections catalog |
| `/checkout` | Complete checkout form with delivery scheduling |
| `/order-confirmation` | Order success page with details |

## Components

### UI Components

| Component | Description |
|-----------|-------------|
| `Modal` | Reusable modal dialog with overlay |
| `SlideOver` | Slide-out panel (used for cart) |
| `Button` | Styled button with variants |
| `Card` | Content card container |

### Product Components

| Component | Props | Description |
|-----------|-------|-------------|
| `ProductCard` | `product`, `onSelect` | Displays product in grid |
| `ProductModal` | `product`, `isOpen`, `onClose` | Product details with add to cart |

### Cart Components

| Component | Description |
|-----------|-------------|
| `CartSidebar` | Slide-out cart panel with items and summary |
| `CartItem` | Individual item with quantity controls |

### Checkout Components

| Component | Description |
|-----------|-------------|
| `CheckoutForm` | Complete checkout form with validation |
| `OrderSummary` | Sticky order summary with totals |

## Customization

### Adding New Products

1. Edit the appropriate data file in `data/`:

```typescript
// data/cakes.ts
export const cakes: Product[] = [
  {
    id: "new-cake",
    name: "New Cake Name",
    description: "Delicious description",
    price: 25000, // Base price in Naira
    image: "https://images.unsplash.com/...",
    category: "cakes",
    sizes: [
      { name: '6"', price: 25000 },
      { name: '8"', price: 35000 },
    ],
    flavors: ["Vanilla", "Chocolate"],
    featured: false,
  },
  // ...
];
```

### Adding New Categories

1. Create a new data file in `data/`
2. Add the product type to `types/product.ts`
3. Create a new page in `app/[category]/page.tsx`
4. Add navigation link in `lib/constants.ts`

### Styling

The project uses Tailwind CSS with custom theme colors:

- `maroon` - Primary brand color (#800020)
- `cream` - Background color (#FFFDD0)
- `gold` - Accent color (#D4AF37)

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

The application is optimized for performance:

- **Image Optimization** - Next.js Image component with lazy loading
- **Code Splitting** - Automatic route-based code splitting
- **Font Optimization** - Next.js font optimization for Google Fonts
- **CSS** - Tailwind CSS with purging unused styles

## Security

- Input sanitization on all form fields
- No sensitive data stored in localStorage
- HTTPS ready for production deployment

## Future Enhancements

- [ ] User authentication and accounts
- [ ] Order history and tracking
- [ ] Payment gateway integration (Paystack/Flutterwave)
- [ ] Admin dashboard for order management
- [ ] Email notifications
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Search functionality
- [ ] Inventory management

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary software for Zibahtrove Confectionery.

---

Built with ❤️ for Zibahtrove Confectionery
