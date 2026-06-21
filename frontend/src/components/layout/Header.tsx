"use client";
import { Hexagon, Menu, Search, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Input } from "../ui/input";

const navigationLinks = [{ href: "#", label: "Contact Us" }];

export const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => pathname === href;
  return (
    <header className=" sticky top-0 z-50 w-full bg-black ">
      <nav className="max-w-7xl mx-auto px-4 py-4 w-full flex items-center justify-between ">
        {/* Desktop Navigation */}
        <div className="flex gap-2 items-center">
          <Hexagon className="fill-primary text-white" />
          <Link href="/" className="font-semibold text-2xl text-white">
            kini
          </Link>
        </div>

        <div className="hidden md:flex items-center w-full max-w-xl">
          <Input
            type="text"
            placeholder="Search products..."
            className="bg-white/20 border-none h-10 focus:ring-0 text-sm text-white placeholder:text-white/70"
          />
          <Search className="text-white -mx-10" />
        </div>

        <div className="hidden xl:flex gap-6 items-center">
          {navigationLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-white py-2 mx-2 font-medium transition-all duration-300 cursor-pointer border-b-2 ${
                isActive(link.href)
                  ? "border-b-primary"
                  : "hover:text-primary border-b-transparent hover:border-b-primary duration-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="#" className="flex items-center gap-2">
            <User className="text-white" />
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="xl:hidden">
            <Menu className="text-white" size={24} />
          </SheetTrigger>
          <SheetTitle className="sr-only"></SheetTitle>
          <SheetContent
            side="right"
            className="bg-white/80 border-l border-white/20 p-4"
          >
            <div className="flex flex-col gap-6 mt-8 ">
              {navigationLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-black font-medium transition-all duration-300 cursor-pointer border-b-2 pb-2 ${
                    isActive(link.href)
                      ? "border-b-primary"
                      : "border-b-transparent"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};
