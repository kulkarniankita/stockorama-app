import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stockorama",
  description:
    "Inventory management app that allows you to add, remove products from the warehouse and like them to assess the demand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <header>
          <div className="flex-1"></div>
          <Link href="/">
            <h1 className={`${dancingScript.className}`}>Stockorama</h1>
          </Link>
          <div className="flex-1 flex justify-end xl:pr-6 pr-4">
            <Link href="/products">Products</Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
