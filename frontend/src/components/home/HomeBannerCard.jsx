import Image from "next/image";
import Link from "next/link";
import React from "react";

export const HomeBannerCard = () => {
  return (
    <div className="w-full h-60 lg:h-120">
      <Link href="#">
        <div className="relative w-full max-w-full h-full">
          <Image
            src={`/temp/exclusiveOffer.png`}
            alt="Exclusive offers"
            width={1024} // max-w-44 = 176px (44 * 4)
            height={1024} // h-44 = 176px (44 * 4)
            className="rounded-2xl object-cover w-full h-full"
          />
        </div>
      </Link>
    </div>
  );
};
