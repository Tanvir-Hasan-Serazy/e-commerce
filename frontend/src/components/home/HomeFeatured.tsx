import { HomeFeatureCard } from "./HomeFeatureCard";

export const HomeFeatured = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Featured Product 1",
      image: "/images/home/iphone6.jpg",
      href: "#",
      actualPrice: 1099,
      sellingPrice: 999,
      savedPrice: 100,
    },
    {
      id: 2,
      name: "Featured Product 2",
      image: "/images/home/iphone5.jpg",
      href: "#",
      actualPrice: 899,
      sellingPrice: 749,
      savedPrice: 150,
    },
    {
      id: 3,
      name: "Featured Product 3",
      image: "/images/home/iphone3.jpg",
      href: "#",
      actualPrice: 1299,
      sellingPrice: 1199,
      savedPrice: 100,
    },
    {
      id: 4,
      name: "Featured Product 4",
      image: "/images/home/iphone4.jpg",
      href: "#",
      actualPrice: 599,
      sellingPrice: 499,
      savedPrice: 100,
    },
    {
      id: 5,
      name: "Featured Product 5",
      image: "/images/home/iphone5.jpg",
      href: "#",
      actualPrice: 1499,
      sellingPrice: 1299,
      savedPrice: 200,
    },
    {
      id: 6,
      name: "Featured Product 6",
      image: "/images/home/iphone6.jpg",
      href: "#",
      actualPrice: 799,
      sellingPrice: 699,
      savedPrice: 100,
    },
    {
      id: 7,
      name: "Featured Product 7",
      image: "/images/home/iphone4.jpg",
      href: "#",
      actualPrice: 1199,
      sellingPrice: 999,
      savedPrice: 200,
    },
    {
      id: 8,
      name: "Featured Product 8",
      image: "/images/home/iphone5.jpg",
      href: "#",
      actualPrice: 499,
      sellingPrice: 399,
      savedPrice: 100,
    },
    {
      id: 9,
      name: "Featured Product 9",
      image: "/images/home/iphone3.jpg",
      href: "#",
      actualPrice: 1599,
      sellingPrice: 1449,
      savedPrice: 150,
    },
    {
      id: 10,
      name: "Featured Product 10",
      image: "/images/home/iphone4.jpg",
      href: "#",
      actualPrice: 999,
      sellingPrice: 899,
      savedPrice: 100,
    },
    {
      id: 11,
      name: "Featured Product 11",
      image: "/images/home/iphone5.jpg",
      href: "#",
      actualPrice: 699,
      sellingPrice: 549,
      savedPrice: 150,
    },
    {
      id: 12,
      name: "Featured Product 12",
      image: "/images/home/iphone6.jpg",
      href: "#",
      actualPrice: 1399,
      sellingPrice: 1299,
      savedPrice: 100,
    },
    {
      id: 13,
      name: "Featured Product 13",
      image: "/images/home/iphone3.jpg",
      href: "#",
      actualPrice: 849,
      sellingPrice: 749,
      savedPrice: 100,
    },
    {
      id: 14,
      name: "Featured Product 14",
      image: "/images/home/iphone4.jpg",
      href: "#",
      actualPrice: 1049,
      sellingPrice: 899,
      savedPrice: 150,
    },
    {
      id: 15,
      name: "Featured Product 15",
      image: "/images/home/iphone5.jpg",
      href: "#",
      actualPrice: 1149,
      sellingPrice: 999,
      savedPrice: 150,
    },
    {
      id: 16,
      name: "Featured Product 16",
      image: "/images/home/iphone6.jpg",
      href: "#",
      actualPrice: 1249,
      sellingPrice: 1043434349,
      savedPrice: 200,
    },
  ];

  return (
    <section className="bg-amber-50 py-16">
      <h2 className="text-xl sm:text-3xl text-center font-bold">
        Featured Products
      </h2>
      <div className="max-w-7xl mx-auto px-4 gap-2 sm:gap-4 mt-8 grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 ">
        {featuredProducts?.map((product) => (
          <HomeFeatureCard key={product?.id} product={product} />
        ))}
      </div>
    </section>
  );
};
