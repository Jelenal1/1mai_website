import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "1 Mai Winterthur",
  description: "1 Mai Winterthur Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={inter.className + " bg-slate-200"}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
