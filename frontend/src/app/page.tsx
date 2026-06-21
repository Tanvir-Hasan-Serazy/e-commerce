import { HomeBanner } from "@/components/home/HomeBanner";
import {
  HomeCategories,
  type CategoryItem,
} from "@/components/home/HomeCategories";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <HomeCategories />
    </>
  );
}
