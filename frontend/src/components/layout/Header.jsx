"use client";
import { Handbag, Mail, Phone, Search, User, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [offer, setOffer] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <>
      {offer && (
        <div className="bg-black py-4 px-4 lg:px-8 text-white flex items-center justify-between">
          <div className="flex gap-4">
            <div className="flex gap-4">
              <Phone /> 01883266793
            </div>
            <div className="flex gap-4">
              <Mail />
              thserazy@gmail.com
            </div>
          </div>
          <h1>Enjoy Free Shipping on orders over ৳50!</h1>
        </div>
      )}

      {/* Desktop Only */}
      <div className="hidden lg:flex justify-between px-8 py-4 ">
        <div className=" flex items-center gap-10">
          <Link href={`/`} className="text-4xl text-orange-600 font-semibold">
            Enterprice
          </Link>

          {/* Links */}
          <nav className="flex gap-6 font-medium text-lg">
            <Link href="#">Products</Link>
            <Link href="#">Shop</Link>
            <Link href="#">Custom Orders</Link>
            <Link href="#">Deal</Link>
            <Link href="#">About</Link>
            <Link href="#">Contact</Link>
          </nav>
        </div>

        {/* Right Side */}
        <div className="flex justify-between items-center gap-4">
          <div className="flex relative items-center min-w-70 w-full">
            <Input className="rounded-full" placeholder="Search any product" />
            <div className="p-1.5 bg-orange-600 absloute -ml-8 rounded-full">
              <Search className=" text-white size-5 cursor-pointer" />
            </div>
          </div>

          <div className="p-2 bg-gray-200 rounded-full">
            <Handbag className="text-orange-600 cursor-pointer" />
          </div>
          <div className="p-2 bg-gray-200 rounded-full">
            <User className="text-orange-600 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Mobile and Tabs */}
      <div className="flex lg:hidden px-4 py-2">
        {/* Mobile Header */}
        <div className="flex lg:hidden items-center justify-between w-full py-2 border-b">
          <Button
            className="bg-white text-black p-0!"
            onClick={() => setOpen(true)}
          >
            <Menu className="size-7" />
          </Button>

          <Link href={`/`} className="text-2xl text-orange-600 font-semibold">
            Enterprice
          </Link>

          <div className="flex gap-3">
            <Handbag className="text-orange-600" />
            <User className="text-orange-600" />
          </div>
        </div>
        <div
          className={cn(
            "fixed inset-0 bg-white z-40 transition-opacity duration-300",
            open ? " opacity-100 visible" : "opacity-0 invisible",
          )}
        >
          {/* Headers */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-semibold text-orange-600">Menu</h2>
            <Button
              className="bg-white text-black p-0!"
              onClick={() => setOpen(false)}
            >
              <X className="size-8" />
            </Button>
          </div>
          {/* Links */}
          <nav className="flex flex-col p-4 gap-4 text-lg font-medium">
            <Link href="#" onClick={() => setOpen(false)}>
              Products
            </Link>
            <Link href="#" onClick={() => setOpen(false)}>
              Shop
            </Link>
            <Link href="#" onClick={() => setOpen(false)}>
              Custom Orders
            </Link>
            <Link href="#" onClick={() => setOpen(false)}>
              Deal
            </Link>
            <Link href="#" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="#" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </nav>

          {/* Contact section */}
          <div className="border-t p-4 mt-4 text-sm text-gray-600 space-y-3">
            <div className="flex items-center gap-2">
              <Phone size={18} /> +8801883266793
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} /> thserazy@gmail.com
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
