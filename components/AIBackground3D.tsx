"use client";

import React, { useEffect, useRef } from "react";

// Renders the Spline scene as a fixed background with subtle scroll-driven motion.
export default function AIBackground3D() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const y = window.scrollY || 0;
      // Subtle parallax: translate and rotate slightly with scroll
      const translateY = Math.min(y * 0.05, 80); // max 80px
      const rotate = Math.min(y * 0.01, 6); // max 6deg
      el.style.transform = `translateY(${translateY}px) rotate(${rotate}deg)`;
      // Fade a bit as we scroll down
      const opacity = Math.max(0.55, 0.9 - y / 2000);
      el.style.opacity = String(opacity);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      {/* soft gradient wash to keep text readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" aria-hidden />
      <div ref={ref} className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full max-w-none">
          <iframe
            src="https://my.spline.design/genkubgreetingrobot-e9VBs98PofU9KoRzNfzWevSo/"
            title="AI Background 3D"
            className="block w-full h-full"
            frameBorder={0}
            allowFullScreen
          />
        </div>
      </div>
      {/* vignette edges for extra contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" aria-hidden />
    </div>
  );
}
