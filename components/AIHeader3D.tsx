"use client";

import React, { useEffect, useRef } from "react";

// Fixed 3D header element (under the sticky navbar) with horizontal scroll motion.
export default function AIHeader3D() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const y = window.scrollY || 0;
      // Horizontal movement based on scroll position: -160px..160px
      const translateX = Math.sin(y / 350) * 160; // smooth oscillation
      const rotateZ = Math.sin(y / 500) * 3; // subtle tilt
      el.style.transform = `translateX(${translateX}px) rotate(${rotateZ}deg)`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-16 z-30 pointer-events-none">
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* No border, clean edge-to-edge look for the element */}
        <div ref={ref} className="pointer-events-none">
          <iframe
            src="https://my.spline.design/genkubgreetingrobot-e9VBs98PofU9KoRzNfzWevSo/"
            title="AI Header 3D"
            className="block w-full h-[360px] sm:h-[420px] md:h-[480px] rounded-none"
            frameBorder={0}
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
