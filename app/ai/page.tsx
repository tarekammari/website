import Reveal from "@/components/Reveal";

export default function AIPage() {
  return (
    <div className="page-hero space-y-8">
      <Reveal>
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">AI</h1>
      </Reveal>
      <Reveal delay={120}>
        <p className="text-foreground/70 max-w-2xl">
          LLM apps, autonomous agents, RAG, and workflow automation tailored for real business value.
        </p>
      </Reveal>
    </div>
  );
}


