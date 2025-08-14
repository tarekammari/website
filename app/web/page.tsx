import Reveal from "@/components/Reveal";

export default function WebPage() {
  return (
    <div className="page-hero space-y-8">
      <Reveal>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">Web</h1>
      </Reveal>
      <Reveal delay={120}>
        <p className="text-foreground/70 max-w-2xl">
          Modern, fast, secure and SEO‑ready web experiences with best‑in‑class DX.
        </p>
      </Reveal>
    </div>
  );
}


