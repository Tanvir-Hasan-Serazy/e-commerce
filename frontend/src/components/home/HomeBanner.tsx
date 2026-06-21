"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";
import { ImageWithFallback } from "@/utils/ImageWithFallback";
import { Laptop } from "lucide-react";
import { FaLaptopCode } from "react-icons/fa6";
import { PiSirenBold } from "react-icons/pi";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { MdMiscellaneousServices } from "react-icons/md";

const slides = [
  {
    subtitle: "New Arrival",
    title: "iPhone 16 Pro Max",
    description: "Experience the power of the latest A18 Pro chip.",
    buttonLabel: "Shop Now",
    imageSrc: "/images/home/iphone.jpg",
    href: "#",
  },
  {
    subtitle: "Best Seller",
    title: "MacBook Air M4",
    description: "Lightweight. Powerful. Built for AI.",
    buttonLabel: "Shop Now",
    imageSrc: "/images/home/iphone2.jpg",
    href: "#",
  },
  {
    subtitle: "Limited Offer",
    title: "AirPods Pro 3",
    description: "Adaptive audio. Up to 2x more Active Noise Cancellation.",
    buttonLabel: "Get Yours",
    imageSrc: "/images/home/iphone.jpg",
    href: "#",
  },
];

export const HomeBanner = () => {
  return (
    <section className="min-h-screen bg-amber-50">
      {/* Swiper */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        loop
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-7xl mx-auto flex flex-col-reverse gap-12 xl:flex-row items-center px-4 py-8 lg:py-12 min-h-125">
              <div className="flex-1 space-y-6">
                <span className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                  {slide?.subtitle}
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {slide?.title}
                </h2>
                <p className="text-lg text-gray-600 max-w-md">
                  {slide?.description}
                </p>
                <Link
                  href={slide?.href || "#"}
                  className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
                >
                  {slide?.buttonLabel}
                </Link>
              </div>
              <div>
                <ImageWithFallback
                  src={slide?.imageSrc}
                  alt={slide?.title}
                  width={400}
                  height={400}
                  loading="eager"
                  className="object-contain rounded-md h-auto max-w-96 w-full"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Category Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 pb-16">
        {/* Laptop Finder */}
        <Link
          href="#"
          className="bg-black/90 text-amber-50 rounded-md p-6 space-y-3 hover:bg-black/85 transition-colors flex gap-4 lg:gap-6 items-center"
        >
          <div>
            <FaLaptopCode className="w-10 h-10" />
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-bold">Laptop Finder</h3>
            <p className="text-amber-50 text-sm">Find Your Laptop Easily</p>
          </div>
        </Link>

        {/* Complain */}
        <Link
          href="#"
          className="bg-black/90 text-amber-50 rounded-md p-6 space-y-3 hover:bg-black/85 transition-colors flex gap-4 justify-center items-center"
        >
          <div>
            <PiSirenBold className="w-10 h-10" />
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-bold">Complain</h3>
            <p className="text-amber-50 text-sm">Get Help When You Need It</p>
          </div>
        </Link>

        {/* Home Service */}
        <Link
          href="#"
          className="bg-black/90 text-amber-50 rounded-md p-6 space-y-3 hover:bg-black/85 transition-colors flex gap-4 md:gap-6 items-center"
        >
          <div>
            <HiOutlineHomeModern className="w-10 h-10" />
          </div>
          <div className="space-y-1">
            <h3 className="lg:text-2xl text-xl font-bold">Home Service</h3>
            <p className="text-amber-50 text-sm">Device at Your Doorstep.</p>
          </div>
        </Link>

        {/* Servicing Center */}
        <Link
          href="#"
          className="bg-black/90 text-amber-50 rounded-md p-6 space-y-3 hover:bg-black/85 transition-colors flex gap-4  items-center"
        >
          <div>
            <MdMiscellaneousServices className="w-10 h-10" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl md:text-2xl font-bold">Servicing Center</h3>
            <p className="text-amber-50 text-sm">
              Professional Repair Services
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
};
