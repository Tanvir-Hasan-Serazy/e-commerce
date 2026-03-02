"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Input } from "./input";

export const PriceRangeSlider = () => {
  const [value, setValue] = useState([0, 200000]);

  const handlMinChange = (e) => {
    const newMin = Number(e.target.value);
    if (newMin <= value[1]) {
      setValue([newMin, value[1]]);
    }
  };

  const handleMaxChange = (e) => {
    const newMax = Number(e.target.value);
    if (newMax >= value[0]) {
      setValue([value[0], newMax]);
    }
  };

  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Label htmlFor="slider" className="text-base">
        Price Range
      </Label>
      <Slider
        id="slider"
        max={200000}
        min={0}
        onValueChange={setValue}
        value={value}
        bg="bg-orange-600"
      />
      <div className="flex items-center justify-between text-muted-foreground text-sm ">
        <Input
          value={value[0]}
          onChange={handlMinChange}
          className="max-w-25 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          type="number"
        />
        <Input
          value={value[1]}
          onChange={handleMaxChange}
          type="number"
          className="max-w-25 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
      </div>
    </div>
  );
};
