"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

// Array containing all the navigation items with title, href, and description
const components: { title: string; href: string; description: string }[] = [

  {
    title: "Winter clothes",
    href: "/clothes",
    description: "Suitable for men, women, and all tastes and styles",
  },
  {
    title: "Cascul",
    href: "/cascul",
    description: "In attractive and spectacular colors and designs.",
  },
  {
    title: "Shirts",
    href: "/shirts",
    description: "Men's, your style and tastes are important to us",
  },
  {
    title: "Men's Clothes",
    href: "/Mens",
    description: "For all ages, with happy and beautiful colors",
  },
  {
    title: "Home",
    href: "/",
    description: "Website",
  },
  {
    title: "Carts",
    href: "/cart",
    description: "Cart detail in order",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-md">
            Shop
          </NavigationMenuTrigger>
          
          <NavigationMenuContent>
            <ul className="grid sm:w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component, index) => (
                <li key={index}>
                  <Link href={component.href}>
                    <ListItem title={component.title}>
                      {component.description}
                    </ListItem>
                  </Link>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <NavigationMenuLink asChild>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </NavigationMenuLink>
  )
})

ListItem.displayName = "ListItem"
