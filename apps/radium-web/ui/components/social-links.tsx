import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { BrandIconX } from "../icons/brand-icon-x";

export function SocialLinks() {
  return (
    <div className={"flex flex-row gap-6 py-2"}>
      <GitHubLogoIcon
        className={"hover:cursor-pointer"}
        height={18}
        width={18}
      />
      <BrandIconX className={"hover:cursor-pointer"} height={18} width={18} />
    </div>
  );
}
