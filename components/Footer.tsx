"use client";
// import Image from "next/image";

export default function Footer() {
  const brands = [
    { name: "Coursera", badge: "Co", color: "#2A73CC", url: "https://www.coursera.org/", src: "https://cdn.simpleicons.org/coursera/2A73CC", fallbackSrc: "https://logo.clearbit.com/coursera.org" },
    { name: "Manara", badge: "Ma", color: "#00B5AD", url: "https://www.manara.tech/", src: "https://www.manara.tech/favicon.ico", fallbackSrc: "https://logo.clearbit.com/manara.tech" },
    { name: "AWS", badge: "AWS", color: "#FF9900", url: "https://aws.amazon.com/", src: "https://aws.amazon.com/favicon.ico", fallbackSrc: "https://cdn.simpleicons.org/amazonaws/FF9900" },
    { name: "Cursor", badge: "Cu", color: "#8B5CF6", url: "https://www.cursor.com/", src: "https://www.cursor.com/favicon.ico", fallbackSrc: "https://logo.clearbit.com/cursor.com" },
    { name: "VS Code", badge: "VS", color: "#007ACC", url: "https://code.visualstudio.com/", src: "https://code.visualstudio.com/assets/images/code-stable.png", fallbackSrc: "https://cdn.simpleicons.org/visualstudiocode/007ACC" },
    { name: "Claude", badge: "Cl", color: "#F59E0B", url: "https://claude.ai/", src: "https://claude.ai/favicon.ico", fallbackSrc: "https://logo.clearbit.com/claude.ai" },
    { name: "ChatGPT", badge: "GPT", color: "#10A37F", url: "https://chat.openai.com/", src: "https://cdn.simpleicons.org/openai/10A37F", fallbackSrc: "https://logo.clearbit.com/openai.com" },
    { name: "Gemini", badge: "Ge", color: "#4F46E5", url: "https://gemini.google.com/", src: "https://cdn.simpleicons.org/googlegemini/4F46E5", fallbackSrc: "https://logo.clearbit.com/google.com" },
    { name: "Figma", badge: "Fi", color: "#F24E1E", url: "https://www.figma.com/", src: "https://cdn.simpleicons.org/figma/F24E1E", fallbackSrc: "https://www.figma.com/favicon.ico" },
    { name: "WordPress", badge: "WP", color: "#21759B", url: "https://wordpress.org/", src: "https://cdn.simpleicons.org/wordpress/21759B", fallbackSrc: "https://logo.clearbit.com/wordpress.org" },
    { name: "Next.js", badge: "N", color: "#000000", url: "https://nextjs.org/", src: "https://cdn.simpleicons.org/nextdotjs/000000", fallbackSrc: "https://logo.clearbit.com/nextjs.org" },
    { name: "Python", badge: "Py", color: "#3776AB", url: "https://www.python.org/", src: "https://cdn.simpleicons.org/python/3776AB", fallbackSrc: "https://logo.clearbit.com/python.org" },
  ];

  const sequence = [...brands, ...brands];

  return (
    <footer className="border-t border-foreground/10 bg-background/90 min-h-[180px] flex flex-col justify-between">
      {/* Tech marquee */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
        <div className="px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex gap-8 whitespace-nowrap animate-[marquee_60s_linear_infinite] hover:[animation-play-state:paused]">
            {sequence.map((brand, idx) => (
              <a
                key={`${brand.name}-${idx}`}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-md px-3 py-1.5 transition-transform hover:-translate-y-0.5"
                aria-label={brand.name}
                title={brand.name}
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  width={28}
                  height={28}
                  loading="lazy"
                  decoding="async"
                  className="h-7 w-7 object-contain select-none"
                  style={{ filter: "drop-shadow(0 0 0.75px rgba(0,0,0,0.18))" }}
                  data-attempt="0"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    const attempt = target.getAttribute('data-attempt');
                    if (attempt === '0' && brand.fallbackSrc) {
                      target.setAttribute('data-attempt', '1');
                      target.src = brand.fallbackSrc;
                      return;
                    }
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = 'inline-flex';
                  }}
                />
                <span
                  className="hidden h-7 w-7 items-center justify-center rounded-full text-[10px] font-semibold text-white shadow-sm ring-1 ring-black/10"
                  style={{ backgroundColor: brand.color }}
                >
                  {brand.badge}
                </span>
                <span className="text-sm font-medium text-foreground">
                  {brand.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-sm text-foreground/70 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>
          © {new Date().getFullYear()} <span className="font-medium">TAREK AMMARI</span>. All rights reserved.
        </p>
        <p className="flex gap-4">
          <a className="hover:underline inline-flex items-center gap-2" href="mailto:contact@tarekammari.dev">
            <span className="sr-only">Email</span>
            Email
          </a>
          <a className="hover:underline inline-flex items-center gap-2" href="https://github.com/" target="_blank" rel="noreferrer">
            <span className="sr-only">GitHub</span>
            GitHub
          </a>
          <a className="hover:underline inline-flex items-center gap-2" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <span className="sr-only">LinkedIn</span>
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}


