import { ThemeToggle } from "@/ui/components/theme-toggle";
import { createFileRoute } from "@tanstack/react-router";
import { useHead } from "unhead";

export const Route = createFileRoute("/")({
  component: () => <Home />,
});

useHead({
  title: "React Essential",
});

function Home() {
  return (
    <div
      className={"relative flex h-screen flex-col items-center justify-center"}
    >
      <h1 className={"text-5xl"}>React Essential</h1>
      <p className={"my-4 text-sm"}>
        React.js Essential - An Essential Template to build an modern react.js
        application with all the essentials included.
      </p>
      <ThemeToggle />
    </div>
  );
}
