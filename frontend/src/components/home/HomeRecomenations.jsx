import { ImageWithFallback } from "@/utils/ImageWithFallback";
import { FallbackImage } from "@/utils/secrets";
import { textSlicer } from "@/utils/textSlicer";
import Link from "next/link";
import React from "react";

const recommendations = [
  { id: 1, image: "/temp/placeholder.png", title: "Webcam" },
  { id: 2, image: "/temp/placeholder.png", title: "iPhone" },
  { id: 3, image: "/temp/placeholder.png", title: "Laptop" },
  { id: 4, image: "/temp/placeholder.png", title: "Components" },
  { id: 5, image: "/temp/placeholder.png", title: "Tablet" },
  { id: 6, image: "/temp/placeholder.png", title: "Honor" },
];

export const HomeRecomenations = () => {
  return (
    <div className="max-w-7xl mx-auto my-6 px-4">
      <h3 className="text-lg lg:text-4xl font-bold text-orange-600 py-4 lg:py-6">
        Recommended for you
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 md:gap-4">
        {recommendations &&
          recommendations?.map((data) => (
            <Link href={`#`} key={data?.id}>
              <div className="lg:max-w-48 w-full shadow rounded-md bg-white hover:text-orange-600 duration-300">
                <div className="relative h-45  rounded-t-md overflow-hidden ">
                  <ImageWithFallback
                    className="aspect-video w-full h-full object-cover rounded-t-md transition-transform duration-300 hover:scale-125"
                    width={300}
                    height={300}
                    alt="Today's Best data Image"
                    src={`${data?.image}`}
                    fallbackSrc={FallbackImage}
                  />
                </div>
                <div className="p-3 mt-1">
                  <h3 className="font-medium text-lg leading-6 text-center ">
                    {/* {textSlicer(`${data?.title}`, 30)} */}
                    {textSlicer(`${data?.title}`, 30)}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};
