import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PriceLens — Compare Prices Instantly",
  description: "Compare prices across Amazon and Flipkart",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className="bg-white text-black dark:bg-black dark:text-white">{children}</body>
    </html>
  );
}

