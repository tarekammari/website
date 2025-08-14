export const metadata = { title: "About — TAREK AMMARI" };
import Reveal from "@/components/Reveal";

export default function AboutPage() {
  return (
    <div className="max-w-3xl space-y-4">
      <Reveal>
        <h1 className="text-2xl font-bold tracking-tight">About</h1>
      </Reveal>
      <Reveal delay={80}>
        <p className="text-foreground/80">
          I’m <span className="font-semibold">TAREK AMMARI</span>, a full‑stack developer focused on building modern, fast,
          and accessible web products. I ship in WordPress, Next.js, React, and pure HTML/CSS. I also create courses that
          teach practical, production‑ready skills.
        </p>
      </Reveal>
      <Reveal delay={140}>
        <p className="text-foreground/80">
          I care about UX/UI principles, performance, and clean, maintainable code. If you want a custom project or
          training for your team, feel free to reach out.
        </p>
      </Reveal>
    </div>
  );
}


