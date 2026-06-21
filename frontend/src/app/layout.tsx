import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const overpass = Overpass({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "E-commerce",
  description:
    "An e-commerce website built with Next.js, TypeScript, Tailwind CSS, and Prisma.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${overpass.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
