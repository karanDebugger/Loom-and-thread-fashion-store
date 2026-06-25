import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Urban Vogue | Modern Clothing Store",
  description: "Shop stylish men and women fashion with curated products."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
