import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "1 Mai Winterthur",
  description: "1 Mai Winterthur Website",
  keywords: "1 Mai Winterthur, 1 Mai, 1 Mai Winterthur Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={"bg-amber-100"}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
