import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pijuan.dev"),
  title: "Clint Pijuan",
  description: "The personal website of Clint Pijuan.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Clint Pijuan",
    description: "A new home for my work, notes, and experiments on the web.",
    url: "https://pijuan.dev",
    siteName: "Clint Pijuan",
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
      <body>{children}</body>
    </html>
  );
}
