import Image from "next/image";
import React from "react";
import logo from "@/public/logo.png";
import Link from "next/link";
import { Search, ShoppingCart, User, UserRound } from "lucide-react";
import { Input } from "../ui/input";

const Navbar = () => {
  return (
    <>
      {/* for mobile */}
      <div className="block lg:hidden ">This is navbar</div>

      {/* For desktop */}
      <div className="hidden lg:block min-h-[91px] px-4 max-w-[1276px] mx-auto">
        <div className="flex justify-between">
          <div className="flex items-center ">
            <div className="relative h-[91px] w-[125px]">
              <Link href={"/"}>
                <Image
                  src={logo}
                  alt="Logo"
                  fill
                  // height={91}
                  // width={125}
                  className="absolute"
                  objectFit="contain"
                />
              </Link>
            </div>
          </div>
          <div className="flex min-w-[600px] items-center">
            <Input className=" min-h-[40px] max-w-[600px] focus-visible:border-gray-300 border border-gray-300 rounded-sm focus-visible:ring-0" />
            <Search className="ml-[-30px] cursor-pointer" />
          </div>
          <div className="flex items-center min-w-[280px] gap-6">
            <Link href={"#"}>Home</Link>
            <Link href={"#"}>Shop</Link>
            <Link href={"#"}>Contact</Link>
            <div className="flex gap-4">
              <Link href={"#"}>
                <User />
              </Link>
              <Link href={"#"}>
                <ShoppingCart />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
