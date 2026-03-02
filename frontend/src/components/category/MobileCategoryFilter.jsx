import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ListFilterPlus } from "lucide-react";
import { CategoryFilter } from "./CategoryFilter";

export const MobileCategoryFilter = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          {/* <ListFilter /> */}
          <ListFilterPlus className="size-10 p-2 border border-orange-600 bg-white text-orange-600 rounded-md" />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="max-w-70 w-full overflow-auto pb-4"
        >
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
