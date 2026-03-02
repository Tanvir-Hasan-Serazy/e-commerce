import { CategoryFilter } from "@/components/category/CategoryFilter";
import { MobileCategoryFilter } from "@/components/category/MobileCategoryFilter";
import React from "react";

const page = () => {
  return (
    <div className="max-w-7xl px-4 mx-auto">
      <div className="flex gap-4 w-full relative">
        <div className="absolute bottom-2 left-2 lg:hidden">
          <MobileCategoryFilter />
        </div>
        <div className="w-full hidden lg:block">
          <CategoryFilter />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default page;
