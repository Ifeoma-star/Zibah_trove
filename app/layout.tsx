import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { Providers } from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zibahtrove Confectionery | Artisan Cakes & Pastries",
  description:
    "Welcome to Zibahtrove Confectionery - where passion meets perfection. Discover our exquisite collection of artisan cakes, Nigerian pastries, and international delights crafted with love.",
  keywords: [
    "bakery",
    "cakes",
    "pastries",
    "Nigerian pastries",
    "confectionery",
    "wedding cakes",
    "birthday cakes",
    "Lagos bakery",
  ],
  authors: [{ name: "Zibahtrove Confectionery" }],
  openGraph: {
    title: "Zibahtrove Confectionery | Artisan Cakes & Pastries",
    description:
      "Discover exquisite artisan cakes and pastries crafted with love and passion.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
