"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="fixed top-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-md transition-colors hover:bg-foreground/10 focus:outline-none focus:ring-2 focus:ring-primary"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}
