import { Button } from "@/components/ui/button"
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import React from "react";
import { NavigationMenuDemo } from "./NavigationMenu";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button className="mt-4">
          < FiMenu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
        <SheetTitle className="absolute left-5  font-bold">
  SHOP.CO
</SheetTitle>

        </SheetHeader>
              {/* Navigation Menu */}
      <ul>
              <li className="grid grid-cols-1 gap-5 pt-12">
                <Link className="ml-o" href={""}><NavigationMenuDemo/></Link>
                <Link href={""}>On Sale</Link>
                <Link href={""}>New Arrivals</Link>
                <Link href={""}>Brands</Link>
            </li>
      </ul>
      
      </SheetContent>
    </Sheet>
  )
}
