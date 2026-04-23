import type { Metadata } from "next";
import "./globals.css";
import { Archivo_Black, Space_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-head",
  display: "swap",
});

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Devink",
  description: "TO DO",
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={cn(archivoBlack.variable, space.variable, "font-sans bg-background")}>
        <div className="max-w-360 mx-auto">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
