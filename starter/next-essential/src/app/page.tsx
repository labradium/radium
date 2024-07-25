import { ThemeToggle } from "@/ui/components/theme-toggle";
import { Label } from "@/ui/primitives/label";

export default function Home() {
  return (
    <main
      className={"h-screen relative flex flex-col justify-center items-center"}
    >
      <Label className={"text-3xl font-semibold tracking-tighter"}>
        Next Essential
      </Label>
      <p className={"my-4 max-w-[44rem] text-center"}>
        Next.js Essential - An Essential Template to build an modern next.js
        application with all the essentials included.
      </p>
      <ThemeToggle />
    </main>
  );
}
