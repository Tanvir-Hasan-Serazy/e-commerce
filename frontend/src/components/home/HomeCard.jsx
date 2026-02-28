"use client";
import { ImageWithFallback } from "@/utils/ImageWithFallback";
import { FallbackImage } from "@/utils/secrets";
import { Badge } from "../ui/badge";
import { RatingStars } from "@/utils/RatingStars";
import { textSlicer } from "@/utils/textSlicer";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export const HomeCard = ({ data }) => {
  return (
    <Link href={`#`} key={data?.id}>
      <div className="lg:max-w-60 w-full shadow rounded-md bg-white">
        <div className="relative h-45  rounded-t-md overflow-hidden ">
          <ImageWithFallback
            className="aspect-video w-full h-full object-cover rounded-t-md transition-transform duration-300 hover:scale-125"
            width={300}
            height={300}
            alt="Today's Best data Image"
            src={data?.image}
            fallbackSrc={FallbackImage}
          />
          <Badge className="absolute top-2 left-2" variant="secondary">
            Save {data?.save} %
          </Badge>
        </div>
        <div className="p-3 mt-1">
          <h3 className="font-medium text-lg leading-6">
            {textSlicer(`${data?.title}`, 30)}
          </h3>
          <div className="flex items-center gap-1 pt-2">
            <p className="pt-2 text-lg font-semibold">৳ {data?.price}</p>
            <p className="pt-3 text-sm text-gray-400 font-medium line-through">
              ৳ {data?.mainPrice}
            </p>
          </div>
        </div>
        <div className="px-3 pb-3 flex justify-between">
          <RatingStars rating={data?.rating} />
          <button className="cursor-pointer">
            <ShoppingCart className="text-orange-600 duration-400 hover:bg-orange-600 hover:text-white rounded-full p-2 size-10" />
          </button>
        </div>
      </div>
    </Link>
  );
};
