"use client";

import React, { useEffect, useRef, useState } from "react";

export default function AIHero3D() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const el = wrapRef.current;
    if (!el) return;

    const handleScroll = () => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // progress around the center of viewport
      const center = rect.top + rect.height / 2;
      const t = 1 - Math.min(Math.max(center / vh, 0), 1); // 0..1
      // Map to horizontal motion: -120px .. 120px
      const translateX = (t - 0.5) * 240;
      const rotateZ = (t - 0.5) * 4; // -2deg..2deg
      const scale = 1 + (t - 0.5) * 0.02; // 0.99..1.01
      el.style.transform = `translateX(${translateX}px) rotate(${rotateZ}deg) scale(${scale})`;
      el.style.boxShadow = `0 20px 60px rgba(99, 102, 241, ${0.12 + t * 0.08})`;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="relative" style={{ perspective: 1000 }}>
      <div className="absolute -inset-6 bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-fuchsia-600/10 blur-2xl rounded-3xl" aria-hidden />
      <div
        ref={wrapRef}
        className="relative rounded-xl border border-foreground/10 overflow-hidden bg-background transition-transform duration-200 will-change-transform z-10"
        style={{ transform: mounted ? undefined : "none" }}
      >
        <iframe
          src="https://my.spline.design/genkubgreetingrobot-e9VBs98PofU9KoRzNfzWevSo/"
          title="AI 3D Preview"
          frameBorder={0}
          width="100%"
          height="550"
          className="block w-full"
          allowFullScreen
        />
      </div>
    </div>
  );
}
