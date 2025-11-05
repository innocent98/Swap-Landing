import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmileSwap - Join the Future of Currency Exchange",
  description: "Access a pool of businesses to swap your foreign currencies with, seamlessly and very secure powered by our advance escrow technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
