"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "@/app/providers";

export default function AIPage() {
  const { theme, setTheme } = useTheme();
  const prevTheme = useRef(theme);

  useEffect(() => {
    prevTheme.current = theme;
    setTheme("dark");
    return () => {
      // Restore previous theme when leaving the page
      setTheme(prevTheme.current);
    };
  }, []);

  return (
    <div className="relative">
      {/* Fixed full-viewport 3D Spline */}
      <div className="fixed inset-0 z-10 overflow-hidden">
        <iframe
          src="https://my.spline.design/claritystream-soWj3joVdwVs5SxtLfdgn3YP/"
          title="AI 3D Hero"
          frameBorder={0}
          width="100%"
          height="100%"
          className="block w-screen h-screen -translate-y-6 sm:-translate-y-10"
          allowFullScreen
        />
      </div>
      {/* Spacer to ensure the page has scroll context if needed; adjust or remove as desired */}
      <div className="h-screen" aria-hidden />
    </div>
  );
}
