"use client";

import { ImageWithFallback } from "@/utils/ImageWithFallback";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";

export type CategoryItem = {
  id: number;
  name: string;
  image: string;
  href: string;
};

export const HomeCategories = () => {
  const categories: CategoryItem[] = [
    {
      id: 1,
      name: "Phones",
      image: "/images/home/iphone.jpg",
      href: "#",
    },
    {
      id: 2,
      name: "Laptops",
      image: "/images/home/iphone2.jpg",
      href: "#",
    },
    {
      id: 3,
      name: "GPUs",
      image: "/images/home/iphone.jpg",
      href: "#",
    },
    {
      id: 4,
      name: "Headphones",
      image: "/images/home/iphone2.jpg",
      href: "#",
    },
    {
      id: 5,
      name: "Casings",
      image: "/images/home/iphone.jpg",
      href: "#",
    },
    {
      id: 6,
      name: "Casings",
      image: "/images/home/iphone.jpg",
      href: "#",
    },
  ];
  const scrollRef = useRef<HTMLDivElement>(null);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
  }, []);

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    const observer = new ResizeObserver(checkScroll);
    observer.observe(el);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      observer.disconnect();
    };
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({
      left:
        direction === "left" ? -el.clientWidth * 0.75 : el.clientWidth * 0.75,
      behavior: "smooth",
    });
  };

  if (!categories.length) return null;

  return (
    <section className="bg-amber-50 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6 pb-2">
          <h2 className="text-xl sm:text-2xl font-semibold ">
            Shop by Category
          </h2>
          {categories.length > 5 && (
            <div className="flex gap-2 ">
              <button
                onClick={() => scroll("left")}
                className="cursor-pointer z-10 bg-white rounded-full p-2.5 shadow-lg hover:shadow-xl transition-shadow"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => scroll("right")}
                className="cursor-pointer z-10 bg-white rounded-full p-2.5 shadow-lg hover:shadow-xl transition-shadow"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        <div className="relative group">
          <div
            ref={scrollRef}
            className="flex justify-between gap-4 overflow-x-auto scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories?.map((cat) => (
              <Link
                key={cat?.id}
                href={cat?.href}
                className="shrink-0 group/card relative w-44 lg:w-52 h-52 lg:h-64 rounded-xl overflow-hidden bg-gray-100"
              >
                <ImageWithFallback
                  src={cat?.image}
                  alt={cat?.name}
                  fill
                  sizes="176px"
                  className="object-cover group-hover/card:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-3 left-3 right-3 text-white font-semibold text-sm md:text-base leading-tight">
                  {cat?.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
