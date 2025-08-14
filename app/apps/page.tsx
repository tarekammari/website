import Reveal from "@/components/Reveal";

export default function AppsPage() {
  return (
    <div className="space-y-8">
      <Reveal>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">Apps</h1>
      </Reveal>
      <Reveal delay={120}>
        <p className="text-foreground/70 max-w-2xl">
          Mobile‑first PWAs and app‑like experiences that feel native and perform.
        </p>
      </Reveal>
    </div>
  );
}


