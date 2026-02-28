import { HomeBanner } from "@/components/home/HomeBanner";
import { HomeBestDeals } from "@/components/home/HomeBestDeals";
import { HomeBannerCard } from "@/components/home/HomeBannerCard";
import { HomeCategory } from "@/components/home/HomeCategory";
import { HomeNewArrivals } from "@/components/home/HomeNewArrivals";

export default function Home() {
  return (
    <>
      {/* Banner */}
      <div className="flex flex-col lg:flex-row gap-4 max-w-7xl mx-auto px-4">
        <HomeBanner />
        <HomeBannerCard />
      </div>

      {/* Popular category */}
      <HomeCategory />

      {/* Best Deals */}
      <HomeBestDeals />

      {/* New Arriavl */}
      <HomeNewArrivals/>
    </>
  );
}
