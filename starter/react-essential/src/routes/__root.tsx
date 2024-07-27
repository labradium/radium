import { ThemeProvider } from "@/lib/theme-provider";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { createHead } from "unhead";

export const Route = createRootRoute({
  component: RootComponent,
});

export const head = createHead();

function RootComponent() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <main>
        <Outlet />
      </main>
    </ThemeProvider>
  );
}
