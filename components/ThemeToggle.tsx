"use client";

import { useTheme } from "@/app/providers";
import { Moon, Sun } from "@/components/icons";

export default function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="btn-ghost rounded-full border border-foreground/20 px-3 py-1.5 text-sm hover:bg-foreground/5"
      aria-label="Toggle theme"
      title="Toggle dark/light mode"
    >
      <span className="inline-flex items-center gap-2">
        {isDark ? (
          <Sun className="h-4 w-4" aria-hidden />
        ) : (
          <Moon className="h-4 w-4" aria-hidden />
        )}
        <span className="hidden sm:inline">{isDark ? "Light" : "Dark"}</span>
      </span>
    </button>
  );
}


