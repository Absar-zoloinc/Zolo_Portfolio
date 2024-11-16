import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Zolo Inc",
  description: "Portfolio for Zolo Inc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-white.svg" sizes="any" />
      </head>
      <body className={`${lexend.className} antialiased`}>{children}</body>
    </html>
  );
}
