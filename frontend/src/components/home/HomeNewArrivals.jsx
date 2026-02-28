import React from "react";
import { HomeCard } from "./HomeCard";
const newArrivals = [
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

export const HomeNewArrivals = () => {
  return (
    <div className="max-w-7xl px-4 mx-auto py-4 lg:py-6 mb-6 bg-orange-500/40 rounded-md">
      <h3 className="text-lg lg:text-4xl font-bold text-orange-600 py-4 lg:py-6">
        New Arrival
      </h3>
      <div className="flex gap-4 justify-between w-full">
        {newArrivals?.map((deal) => (
          <HomeCard data={deal} key={deal?.id} />
        ))}
      </div>
    </div>
  );
};
