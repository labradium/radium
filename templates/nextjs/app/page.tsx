import { ThemeToggle } from "@/ui/components/theme-toggle";

export default function Home() {
  return (
    <main
      className={"h-screen relative flex justify-center items-center flex-col"}
    >
      <h1 className={"text-4xl font-semibold"}>Radium Next.js Template</h1>
      <h3 className={"text-sm"}>
        A Template Used by Team Radium for almost every project.
      </h3>
      <ThemeToggle />
    </main>
  );
}
