import { ImageWithFallback } from "@/utils/ImageWithFallback";
import Link from "next/link";

export const HomeFeatureCard = ({ product }: { product: any }) => {
  return (
    <Link
      href={product?.href}
      key={product.id}
      className="bg-gray-50/30 rounded-md shadow-md hover:shadow-lg transition duration-300 overflow-hidden relative"
    >
      <div className="absolute top-2 right-2 bg-rose-600 text-white text-sm font-bold px-2 py-1 rounded-sm">
        {product?.savedPrice}৳ OFF
      </div>
      <div className="p-4 w-full h-52 sm:h-80">
        <ImageWithFallback
          height={1000}
          width={1000}
          src={product?.image}
          alt={product?.name}
          loading="eager"
          className=" w-full lg:w-44 mx-auto h-44 sm:h-72 object-contain"
        />
      </div>
      <div className="p-2 sm:p-4">
        <h3 className="text-base sm:text-lg font-bold">{product?.name}</h3>

        <div className="mt-2 flex flex-wrap items-center gap-2">
          <span className="text-sm sm:text-lg font-bold text-rose-600">
            ৳{product?.sellingPrice.toFixed(2)}
          </span>
          <span className="text-xs sm:text-base text-gray-500 line-through mr-2">
            ৳{product?.actualPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </Link>
  );
};
