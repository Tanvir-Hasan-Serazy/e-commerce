import { CategoryFilter } from "@/components/category/CategoryFilter";
import { MobileCategoryFilter } from "@/components/category/MobileCategoryFilter";
import { HomeCard } from "@/components/home/HomeCard";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const products = [
  {
    id: 1,
    image: "/temp/placeholder.png",
    title: "iPhone 14 Pro Max",
    price: 75000,
    mainPrice: 90000,
    save: 15,
    rating: 5,
  },
  {
    id: 2,
    image: "/temp/placeholder.png",
    title: "iPhone 15 Pro Max",
    price: 90000,
    mainPrice: 100000,
    save: 25,
    rating: 4.5,
  },
  {
    id: 3,
    image: "/temp/placeholder.png",
    title: "iPhone 16 Pro Max",
    price: 120000,
    mainPrice: 150000,
    save: 25,
    rating: 3.5,
  },
  {
    id: 4,
    image: "/temp/placeholder.png",
    title: "iPhone 17 Pro Max",
    price: 150000,
    mainPrice: 180000,
    save: 25,
    rating: 5,
  },
  {
    id: 5,
    image: "/temp/placeholder.png",
    title: "iPad Pro",
    price: 200000,
    mainPrice: 250000,
    save: 35,
    rating: 2.5,
  },
  {
    id: 6,
    image: "/temp/placeholder.png",
    title: "iPad Pro",
    price: 200000,
    mainPrice: 250000,
    save: 35,
    rating: 2.5,
  },
];

const page = () => {
  return (
    <div className="max-w-7xl px-4 mx-auto min-h-120 relative">
      <div className="flex gap-4  w-full ">
        <div className="fixed bottom-2 z-10 left-2 lg:hidden">
          <MobileCategoryFilter />
        </div>
        <div className="w-full hidden max-w-75 lg:block">
          <CategoryFilter />
        </div>
        {/* Todo: Logical issues  */}
        <div className="w-full">
          <h1 className="text-lg lg:text-2xl font-semibold leading-10">
            Smartphone
          </h1>

          {products.length < 1 ? (
            <>
              <div className="py-6 lg:pt-30">
                <h3 className="text-lg lg:text-4xl text-center py-4">Oops..</h3>
                <h3 className="text-lg lg:text-4xl text-center">
                  No Products available currently...
                </h3>
              </div>
            </>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-4 justify-between gap-4 pt-4 lg:pt-">
              {products?.map((data) => (
                <div key={data?.id}>
                  <HomeCard data={data} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="py-6 flex flex-wrap">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default page;
