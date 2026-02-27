import { HomeBanner } from "@/components/home/HomeBanner";
import { HomeBestDeals } from "@/components/home/HomeBestDeals";
import { HomeCard } from "@/components/home/HomeCard";
import { HomeCategory } from "@/components/home/HomeCategory";

export default function Home() {
  return (
    <>
      {/* Banner */}
      <div className="flex flex-col lg:flex-row gap-4 max-w-7xl mx-auto px-4">
        <HomeBanner />
        <HomeCard />
      </div>

      {/* Popular category */}
      <HomeCategory />

      {/* Best Deals */}
      <HomeBestDeals />
    </>
  );
}
