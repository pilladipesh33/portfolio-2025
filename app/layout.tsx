import type { Metadata } from "next";
import { Inter, Libre_Caslon_Text } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/provider/lenis-provider";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const libreCaslonText = Libre_Caslon_Text({
  variable: "--font-libre-caslon",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

const interSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: "variable",
});

export const metadata: Metadata = {
  title: "dip3sh portfolio",
  description: "Portfolio @2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${libreCaslonText.variable} ${interSans.variable} antialiased`}
      >
        <LenisProvider> {children}</LenisProvider>
      </body>
    </html>
  );
}
