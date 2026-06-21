import { Hexagon } from "lucide-react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook, FaWhatsapp } from "react-icons/fa6";

const footerSections = [
  {
    title: "Company",
    links: [
      { href: "#", label: "About Us" },
      { href: "#", label: "Careers" },
      { href: "#", label: "Blog" },
    ],
  },
  {
    title: "Customer Service",
    links: [
      { href: "#", label: "Help Center" },
      { href: "#", label: "Returns & Exchanges" },
      { href: "#", label: "Shipping Info" },
      { href: "#", label: "Contact Us" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { href: "#", label: "Gift Cards" },
      { href: "#", label: "Size Guide" },
      { href: "#", label: "Track Order" },
      { href: "#", label: "FAQ" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="mt-auto bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center">
              <Hexagon className="fill-primary text-white" />
              <span className="font-semibold text-2xl">kini</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Your destination for premium products. Quality, style, and
              satisfaction guaranteed.
            </p>
            <div className="flex gap-3">
              <Link
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <FaFacebook className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <FaWhatsapp className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <FaInstagram className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Link Sections */}
          {footerSections.map((section) => (
            <div key={section?.title}>
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-4">
                {section?.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {section?.links.map((link) => (
                  <li key={link?.label}>
                    <Link
                      href={link?.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {link?.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 w-full flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/70">
          <p>&copy; {new Date().getFullYear()} kini. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
