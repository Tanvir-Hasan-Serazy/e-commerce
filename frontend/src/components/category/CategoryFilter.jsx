import React from "react";
import { PriceRangeSlider } from "../ui/PriceRangeSlider";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "../ui/checkbox";

export const CategoryFilter = () => {
  return (
    <>
      <div className="flex mx-2 lg:mx-0 flex-col gap-2 max-w-75">
        {/* Price Range Slider */}
        <div className="my-2 p-4 rounded-md border border-orange-600">
          <PriceRangeSlider />
        </div>

        {/* Sort */}
        <div className="p-4 rounded-md border border-orange-600">
          <div className="flex flex-col gap-4">
            <Label htmlFor="sorting" className="text-base">
              Sort
            </Label>
            <div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="light">Low to High</SelectItem>
                    <SelectItem value="dark">High to Low</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Availabity */}
        <div className="p-4 rounded-md border border-orange-600">
          <div className="flex flex-col gap-4">
            <Label htmlFor="sorting" className="text-base">
              Availablity
            </Label>
            <div className="flex gap-4">
              <Checkbox
                id="inStock"
                className="data-[state=checked]:bg-orange-600"
              />
              <Label htmlFor="inStock" className="cursor-pointer">
                In Stock
              </Label>
            </div>
            <div className="flex gap-4">
              <Checkbox
                id="preOrder"
                className="data-[state=checked]:bg-orange-600"
              />
              <Label htmlFor="preOrder" className="cursor-pointer">
                Pre Order
              </Label>
            </div>
            <div className="flex gap-4">
              <Checkbox
                id="upComing"
                className="data-[state=checked]:bg-orange-600"
              />
              <Label htmlFor="upComing" className="cursor-pointer">
                Upcoming
              </Label>
            </div>
          </div>
        </div>

        {/* Display Type */}
        <div className="p-4 rounded-md border border-orange-600">
          <div className="flex flex-col gap-4">
            <Label htmlFor="sorting" className="text-base">
              Display Type
            </Label>
            <div className="flex gap-4">
              <Checkbox
                id="amoled"
                className="data-[state=checked]:bg-orange-600"
              />
              <Label htmlFor="amoled" className="cursor-pointer">
                AMOLED
              </Label>
            </div>
            <div className="flex gap-4">
              <Checkbox
                id="lcd"
                className="data-[state=checked]:bg-orange-600"
              />
              <Label htmlFor="lcd" className="cursor-pointer">
                LCD
              </Label>
            </div>
            <div className="flex gap-4">
              <Checkbox
                id="led"
                className="data-[state=checked]:bg-orange-600"
              />
              <Label htmlFor="led" className="cursor-pointer">
                LED
              </Label>
            </div>
          </div>
        </div>

        {/* RAM */}
        <div className="p-4 rounded-md border border-orange-600">
          <div className="flex flex-col gap-4">
            <Label htmlFor="sorting" className="text-base">
              RAM
            </Label>
            <div className="flex gap-4">
              <Checkbox
                id="4GB"
                className="data-[state=checked]:bg-orange-600"
              />
              <Label htmlFor="4GB" className="cursor-pointer">
                4 GB
              </Label>
            </div>
            <div className="flex gap-4">
              <Checkbox
                id="6GB"
                className="data-[state=checked]:bg-orange-600"
              />
              <Label htmlFor="6GB" className="cursor-pointer">
                6 GB
              </Label>
            </div>
            <div className="flex gap-4">
              <Checkbox
                id="8GB"
                className="data-[state=checked]:bg-orange-600"
              />
              <Label htmlFor="8GB" className="cursor-pointer">
                8 GB
              </Label>
            </div>
            <div className="flex gap-4">
              <Checkbox
                id="16GB"
                className="data-[state=checked]:bg-orange-600"
              />
              <Label htmlFor="16GB" className="cursor-pointer">
                16 GB
              </Label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
