import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata = {
  title: "E-Commerce",
  description: "This is an E-commerce App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
