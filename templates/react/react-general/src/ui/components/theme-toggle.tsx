import { useTheme } from "@/lib/theme-provider";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export function ThemeToggle() {
  const { setTheme } = useTheme();
  return (
    <div className={"my-8 flex items-center justify-center gap-4"}>
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
