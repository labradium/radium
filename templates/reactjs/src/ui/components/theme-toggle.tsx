import { useTheme } from "@/lib/theme-provider";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

export function ThemeToggle() {
  const { setTheme } = useTheme();
  return (
    <div className={"flex justify-center items-center gap-4 my-8"}>
      <SunIcon
        className={"hover:cursor-pointer"}
        onClick={() => setTheme("light")}
      />
      <MoonIcon
        className={"hover:cursor-pointer"}
        onClick={() => setTheme("dark")}
      />
    </div>
  );
}
