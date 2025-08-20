"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/app/providers";

const DeveloperAnimation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const skills = ["AI Solutions", "Machine Learning", "Web Development", "Automation"];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-16 overflow-hidden text-center">
      {skills.map((skill, index) => (
        <div
          key={skill}
          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
            index === activeIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="font-light tracking-wide bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            {skill}
          </span>
        </div>
      ))}
    </div>
  );
};

export default function AIPage() {
  const { theme, resolvedTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col items-center p-6 text-center">
      <div className="max-w-5xl mx-auto w-full mt-20">
        <div className="font-sans text-5xl md:text-7xl font-normal tracking-tighter text-foreground/90 mb-12">
          Coming Soon
        </div>
        
        <div className="text-2xl md:text-4xl font-light text-muted-foreground">
          <DeveloperAnimation />
        </div>
      </div>
    </div>
  );
}
