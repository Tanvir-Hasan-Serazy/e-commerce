import { HomeBanner } from "@/components/home/HomeBanner";
import { HomeCategories } from "@/components/home/HomeCategories";
import { HomeFeatured } from "@/components/home/HomeFeatured";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <HomeCategories />
      <HomeFeatured />
    </>
  );
}
