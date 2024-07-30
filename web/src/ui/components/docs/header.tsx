import {
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenu,
  navigationMenuTriggerStyle,
} from "@/ui/primitives/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import icon from "@/public/favicon.png";
import { ThemeToggle } from "../theme-toggle";

export function DocsHeader() {
  return (
    <NavigationMenu
      className={
        "px-4 py-2 bg-zinc-800 bg-opacity-10 backdrop-blur-sm max-w-full"
      }
    >
      <NavigationMenuList>
        <NavigationMenuItem className={"flex flex-row gap-4"}>
          <Image
            src={icon}
            alt={"radium-icon"}
            width={25}
            height={25}
            className={""}
          />
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Radium
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Init
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Starter
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Templates
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Join
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Discord
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>

      <ThemeToggle />
    </NavigationMenu>
  );
}
