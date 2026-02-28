"use client";
import dynamic from "next/dynamic";
const Slider = dynamic(() => import("react-slick"), { ssr: false });
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "linear",
  appendDots: (dots) => (
    <div
      style={{
        backgroundColor: "#ddd",
        borderRadius: "10px",
        padding: "10px",
        background: "none",
        position: "absolute",
        bottom: "0px",
      }}
    >
      <ul style={{ margin: "0px" }}> {dots} </ul>
    </div>
  ),
};

const banners = [
  {
    title: "Stunning Men's Outfit Cap.",
    subtitle:
      "High-quality caps built for style and durability. Perfect for casual outings, sports, and everyday confidence.1",
    image: "/temp/banner.png",
  },
  {
    title: "Stunning Men's Outfit Cap.",
    subtitle:
      "High-quality caps built for style and durability. Perfect for casual outings, sports, and everyday confidence.2",
    image: "/temp/banner.png",
  },
  {
    title: "Stunning Men's Outfit Cap.",
    subtitle:
      "High-quality caps built for style and durability. Perfect for casual outings, sports, and everyday confidence.3",
    image: "/temp/banner.png",
  },
];

export const HomeBanner = () => {
  return (
    <div className="relative lg:max-w-3xl w-full">
      <Slider {...settings} className="overflow-clip">
        {banners?.map((banner) => (
          <div className="h-60 lg:h-120 rounded-md">
            <div
              className="h-full bg-cover bg-center bg-no-repeat rounded-md"
              style={{ backgroundImage: 'url("/temp/banner.jpg")' }}
            >
              <div className="px-4">
                <h2 className="text-white text-lg lg:text-5xl font-semibold pt-6 lg:pt-30 lg:max-w-90 leading-15">
                  {banner?.title}
                </h2>
                <p className="text-white text-xs lg:text-xl pt-0 lg:pt-20 lg:max-w-140 ">
                  {banner?.subtitle}
                </p>
                <div className="mt-2 lg:mt-15">
                  <Link
                    className="p-1 text-xs lg:text-base cursor-pointer bg-white rounded-full lg:p-3"
                    href="#"
                  >
                    Browse
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
