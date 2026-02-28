"use client";
import { ImageWithFallback } from "@/utils/ImageWithFallback";
import { FallbackImage } from "@/utils/secrets";
import Link from "next/link";
import React from "react";

const categories = [
  { name: "Smartphone", image: "/temp/placeholder.png" },
  { name: "Tablet", image: "/temp/placeholder.png" },
  { name: "Laptop", image: "/temp/placeholder.png" },
  { name: "Smart Watch", image: "/temp/placeholder.png" },
  { name: "Apple", image: "/temp/placeholder.png" },
  { name: "Accessories", image: "/temp/placeholder.png" },
  { name: "Gadgets", image: "/temp/placeholder.png" },
  { name: "Used Device", image: "/temp/placeholder.png" },
];

export const HomeCategory = () => {
  return (
    <div className="max-w-7xl px-4 mx-auto py-4 lg:py-6 lg:mt-6">
      <h3 className="text-lg lg:text-4xl font-bold text-orange-600">
        Most Popular Categories
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-8   items-center sm:grid-cols-3 gap-4">
        {categories?.map((category) => (
          <div className="max-w-30 w-full lg:max-w-40" key={category?.name}>
            <div className="w-30 h-30 lg:w-35 lg:h-35 p-8 lg:p-8 bg-gray-100 rounded-full mt-4 lg:mt-10">
              <Link href="#">
                <div className="relative w-14 h-14 lg:w-20 lg:h-20 mx-auto ">
                  <ImageWithFallback
                    src={`${category?.image}`}
                    alt="Category Image"
                    fallbackSrc={FallbackImage}
                    width={120}
                    height={120}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
              </Link>
            </div>
            <h3 className="text-center text-lg py-2  w-full">
              {category?.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};
