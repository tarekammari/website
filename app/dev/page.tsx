import Reveal from "@/components/Reveal";

export default function DevPage() {
  return (
    <div className="space-y-8">
      <Reveal>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">Developer Experience</h1>
      </Reveal>
      <Reveal delay={120}>
        <p className="text-foreground/70 max-w-2xl">
          Tooling, CI/CD, build pipelines, and app architectures that speed up delivery while staying maintainable.
        </p>
      </Reveal>
    </div>
  );
}


