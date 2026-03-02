import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ListFilter } from "lucide-react";
import React from "react";
import { CategoryFilter } from "./CategoryFilter";

export const MobileCategoryFilter = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <ListFilter />
        </SheetTrigger>
        <SheetContent side="left" className="max-w-70 w-full">
          <SheetHeader className="sr-only">
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </SheetDescription>
          </SheetHeader>
          <CategoryFilter />
        </SheetContent>
      </Sheet>
    </div>
  );
};
