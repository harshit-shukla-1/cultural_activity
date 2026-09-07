import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sanskriti Sabha | India in celebration",
  description: "A shared cultural journey through India's festivals and stories.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
