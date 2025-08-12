"use client";

import { useTheme } from "@/app/providers";

export default function ThemeToggle() {
  const { resolvedTheme, toggleTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-full border border-foreground/20 px-3 py-1.5 text-sm hover:bg-foreground/5"
      aria-label="Toggle theme"
      title="Toggle dark/light mode"
    >
      {isDark ? "Light" : "Dark"}
    </button>
  );
}


