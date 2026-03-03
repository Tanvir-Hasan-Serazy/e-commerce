"use client";
import { CircleFadingArrowUp, MapPinned } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const Footer = () => {
  return (
    <div className="mt-4 lg:mt-10 bg-orange-500/20">
      <div className="max-w-7xl px-4 mx-auto py-4 lg:py-8">
        <div className="flex flex-col lg:flex-row gap-4 justify-between ">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-16 ">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg lg:text-2xl font-semibold text-orange-600">
                About US
              </h3>
              <Link href="#" className="text-sm lg:text-base">
                Regarding Us
              </Link>
              <Link href="#" className="text-sm lg:text-base">
                Terms and Conditions
              </Link>
              <Link href="#" className="text-sm lg:text-base">
                Track My Order
              </Link>
              <Link href="#" className="text-sm lg:text-base">
                Career
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg lg:text-2xl font-semibold text-orange-600">
                Policy
              </h3>
              <Link href="#" className="text-sm lg:text-base">
                Delivery Policy
              </Link>
              <Link href="#" className="text-sm lg:text-base">
                Point Policy
              </Link>
              <Link href="#" className="text-sm lg:text-base">
                Return Policy
              </Link>
              <Link href="#" className="text-sm lg:text-base">
                Refund Policy
              </Link>
              <Link href="#" className="text-sm lg:text-base">
                Cancellation Policy
              </Link>
              <Link href="#" className="text-sm lg:text-base">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm lg:text-base">
                Warrenty Policy
              </Link>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg lg:text-2xl font-semibold text-orange-600">
                Help
              </h3>
              <Link href="#" className="text-sm lg:text-base">
                Contact Us
              </Link>
              <Link href="#" className="text-sm lg:text-base">
                Exchanage
              </Link>
              <Link href="#" className="text-sm lg:text-base">
                Announcement
              </Link>
              <Link href="#" className="text-sm lg:text-base">
                EMI Charge
              </Link>{" "}
              <Link href="#" className="text-sm lg:text-base">
                Bank Transfer
              </Link>
            </div>
          </div>
          <div className="flex flex-col lg:min-w-60 gap-2 lg:gap-4">
            <h3 className="text-lg lg:text-2xl font-semibold text-orange-600 text-center lg:text-start">
              Stay Connected
            </h3>
            <p className="text-sm lg:text-base">H Corp Limited</p>
            <p className="text-sm lg:text-base">contact@hcorp.com</p>
            <Link href="tel:+8801883266793">+8801883266793</Link>
            <div className="flex items-center gap-2">
              <Link href="#">
                <FaFacebook className="bg-white size-10 rounded-full p-2 hover:bg-black hover:text-white duration-500" />{" "}
              </Link>
              <Link href="#">
                <FaWhatsapp className="bg-white size-10 rounded-full p-2 hover:bg-black hover:text-white duration-500" />
              </Link>
              <Link href="#">
                <FaInstagram className="bg-white size-10 rounded-full p-2 hover:bg-black hover:text-white duration-500" />
              </Link>
              <Link href="#">
                <FaYoutube className="bg-white size-10 rounded-full p-2 hover:bg-black hover:text-white duration-500" />
              </Link>
              <Link href="#">
                <FaTiktok className="bg-white size-10 rounded-full p-2 hover:bg-black hover:text-white duration-500" />
              </Link>
            </div>
            <Link
              href="#"
              className="p-2 bg-orange-500 text-white text-lg font-semibold flex gap-3 rounded-md mt-4 justify-center"
            >
              Store Location <MapPinned />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white border-y border-gray-300">
        <div className="max-w-7xl px-4 mx-auto py-4 lg:py-8  bg-white ">
          <div className="flex flex-col lg:flex-row items-center gap-4 justify-between">
            <div>
              <h3 className="text-sm lg:text-base">
                &copy; {new Date().getFullYear()} H Corp All rights
                reserved{" "}
              </h3>
            </div>

            <div className="relative w-auto max-w-44 h-10">
              <Image
                src="/temp/payment__logos.webp"
                alt="Payment Logos"
                priority
                width={176}
                height={40}
                sizes="100%"
                className="rounded-2xl object-cover w-auto h-full"
              />
            </div>

            <div>
              <button
                className="flex gap-2 cursor-pointer text-orange-600"
                onClick={scrollToTop}
              >
                Scroll To Top <CircleFadingArrowUp />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
