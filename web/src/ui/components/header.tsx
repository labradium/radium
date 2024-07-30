"use client";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/ui/primitives/navigation-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const path = usePathname();
  return (
    <NavigationMenu
      className={"max-w-7x fixed inset-0 top-4 z-50 mx-auto h-14 w-[95%]"}
    >
      <NavigationMenuList
        className={
          "flex gap-2 bg-zinc-900 bg-opacity-10 px-4 py-2 backdrop-blur-sm"
        }
      >
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                path === "/" ? "bg-secondary text-secondary-foreground" : "",
                navigationMenuTriggerStyle()
              )}
            >
              Radium
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/products" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                path === "/products"
                  ? "bg-secondary text-secondary-foreground"
                  : "",
                navigationMenuTriggerStyle()
              )}
            >
              Products
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className={"hidden md:block"}>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                path === "/docs"
                  ? "bg-secondary text-secondary-foreground"
                  : "",
                navigationMenuTriggerStyle()
              )}
            >
              Docs
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className={"hidden md:block"}>
          <Link href="/blog" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                path === "/blog"
                  ? "bg-secondary text-secondary-foreground"
                  : "",
                navigationMenuTriggerStyle()
              )}
            >
              Blog
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className={"hidden md:block"}>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink
              className={cn(
                path === "/about"
                  ? "bg-secondary text-secondary-foreground"
                  : "",
                navigationMenuTriggerStyle()
              )}
            >
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem
          className={"block bg-background text-foreground md:hidden"}
        >
          <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
            Resources
          </NavigationMenuTrigger>
          <NavigationMenuContent className="grid w-[350px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
            <NavigationMenuLink asChild>
              <Link
                href={"/docs"}
                className={
                  "group block select-none space-y-1 p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground group-hover:text-accent-foreground"
                }
              >
                Docs
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href={"/blog"}
                className={
                  "group block select-none space-y-1 p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground group-hover:text-accent-foreground"
                }
              >
                Blog
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href={"/about"}
                className={
                  "group block select-none space-y-1 p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground group-hover:text-accent-foreground"
                }
              >
                About
              </Link>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
